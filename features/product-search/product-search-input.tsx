"use client";

import { useRef, useState, useEffect, useCallback, useId, type KeyboardEvent } from "react";
import { Search, Clock, X, Trash2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import type { Product } from "@entities/product";
import type { Locale } from "@shared/config/locales";
import { useSearchHistory } from "./use-search-history";

const DEBOUNCE_MS = 320;

// ─── helpers ────────────────────────────────────────────────────────────────

function buildSuggestions(products: Product[], query: string, locale: Locale): string[] {
  const q = query.toLowerCase().trim();
  if (q.length < 1) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const p of products) {
    const candidates = [p.i18n[locale].shortName, p.i18n[locale].name, p.modelCode];
    for (const c of candidates) {
      if (c && c.toLowerCase().includes(q) && !seen.has(c)) {
        seen.add(c);
        out.push(c);
        if (out.length >= 7) return out;
      }
    }
  }
  return out;
}

function highlight(text: string, query: string) {
  if (!query.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-primary/15 text-primary rounded-sm font-bold not-italic">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

// ─── component ──────────────────────────────────────────────────────────────

interface ProductSearchInputProps {
  products: Product[];
  onQueryChange: (debouncedQuery: string) => void;
}

export function ProductSearchInput({ products, onQueryChange }: ProductSearchInputProps) {
  const t = useTranslations("products");
  const locale = useLocale() as Locale;
  const uid = useId();
  const listboxId = `search-listbox-${uid}`;

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const {
    history,
    add: addHistory,
    remove: removeHistory,
    clear: clearHistory,
  } = useSearchHistory();

  const suggestions = buildSuggestions(products, value, locale);
  const showHistory = open && value.trim() === "" && history.length > 0;
  const showSuggestions = open && value.trim().length > 0 && suggestions.length > 0;
  const dropdownVisible = showHistory || showSuggestions;
  const dropdownItems: string[] = showHistory ? history : suggestions;

  // debounce query emission
  const emitDebounced = useCallback(
    (q: string) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => onQueryChange(q), DEBOUNCE_MS);
    },
    [onQueryChange],
  );

  useEffect(
    () => () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    },
    [],
  );

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleChange(val: string) {
    setValue(val);
    setActiveIdx(-1);
    emitDebounced(val);
  }

  function selectItem(item: string) {
    setValue(item);
    setOpen(false);
    setActiveIdx(-1);
    addHistory(item);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onQueryChange(item);
    inputRef.current?.focus();
  }

  function handleClear() {
    setValue("");
    setActiveIdx(-1);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onQueryChange("");
    inputRef.current?.focus();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (!dropdownVisible) {
      if (e.key === "Escape") handleClear();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, dropdownItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      if (activeIdx >= 0 && dropdownItems[activeIdx]) {
        e.preventDefault();
        selectItem(dropdownItems[activeIdx]);
      } else if (value.trim()) {
        addHistory(value.trim());
        setOpen(false);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        onQueryChange(value.trim());
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIdx(-1);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Input */}
      <div
        className={`border-outline-variant/30 bg-surface-container-lowest flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-sm transition-all duration-200 ${
          open ? "border-primary/50 ring-primary/20 ring-2" : "hover:border-outline-variant/60"
        }`}
      >
        <Search size={18} className="text-outline shrink-0" aria-hidden />
        <input
          ref={inputRef}
          id={`product-search-${uid}`}
          type="search"
          autoComplete="off"
          spellCheck={false}
          role="combobox"
          aria-expanded={dropdownVisible}
          aria-autocomplete="list"
          aria-controls={dropdownVisible ? listboxId : undefined}
          aria-activedescendant={activeIdx >= 0 ? `search-option-${uid}-${activeIdx}` : undefined}
          value={value}
          placeholder={t("searchPlaceholder")}
          className="font-label text-on-surface placeholder:text-outline min-w-0 flex-1 bg-transparent text-sm outline-none"
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
        />
        {value ? (
          <button
            type="button"
            onClick={handleClear}
            className="text-outline hover:text-on-surface shrink-0 rounded-full p-0.5 transition-colors"
            aria-label="Clear search"
          >
            <X size={16} aria-hidden />
          </button>
        ) : null}
      </div>

      {/* Dropdown */}
      {dropdownVisible ? (
        <div
          id={listboxId}
          role="listbox"
          aria-label={showHistory ? t("recentSearches") : t("suggestions")}
          className="border-outline-variant/20 bg-surface-container-lowest absolute top-full right-0 left-0 z-50 mt-1.5 overflow-hidden rounded-2xl border shadow-lg"
        >
          {/* History header */}
          {showHistory ? (
            <div className="border-outline-variant/15 flex items-center justify-between border-b px-4 py-2.5">
              <span className="font-label text-outline text-xs font-bold tracking-wider uppercase">
                {t("recentSearches")}
              </span>
              <button
                type="button"
                onClick={clearHistory}
                className="text-outline hover:text-error flex items-center gap-1 text-xs transition-colors"
              >
                <Trash2 size={12} aria-hidden />
                {t("clearHistory")}
              </button>
            </div>
          ) : null}

          {/* Items */}
          <ul className="max-h-72 overflow-y-auto py-1">
            {dropdownItems.map((item, idx) => (
              <li
                key={`${item}-${idx}`}
                id={`search-option-${uid}-${idx}`}
                role="option"
                aria-selected={idx === activeIdx}
                className={`flex cursor-pointer items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  idx === activeIdx
                    ? "bg-primary-container/15 text-primary"
                    : "text-on-surface hover:bg-surface-container-low"
                }`}
                onMouseDown={(e) => {
                  e.preventDefault(); // prevent input blur
                  selectItem(item);
                }}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(-1)}
              >
                {showHistory ? (
                  <>
                    <Clock size={14} className="text-outline shrink-0" aria-hidden />
                    <span className="font-label min-w-0 flex-1 truncate font-medium">{item}</span>
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        removeHistory(item);
                      }}
                      className="text-outline hover:text-on-surface shrink-0 rounded p-0.5 transition-colors"
                      aria-label={`Remove ${item}`}
                    >
                      <X size={13} aria-hidden />
                    </button>
                  </>
                ) : (
                  <>
                    <Search size={14} className="text-outline shrink-0" aria-hidden />
                    <span className="font-label min-w-0 flex-1 truncate font-medium">
                      {highlight(item, value)}
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
