"use client";

import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight, Eye, Heart, Share2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "@shared/i18n/navigation";
import { StatusBadge } from "@shared/ui/status-badge";
import type { StockStatus } from "@shared/types";

interface ProductGalleryProps {
  images: string[];
  alt: string;
  status: StockStatus;
  inStockLabel: string;
  preorderLabel: string;
}

export function ProductGallery({
  images,
  alt,
  status,
  inStockLabel,
  preorderLabel,
}: ProductGalleryProps) {
  const router = useRouter();
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  const [first, ...rest] = images;
  const viewerSrc = images[viewerIndex] ?? images[0];

  function openViewer(index: number) {
    setViewerIndex(index);
    setViewerOpen(true);
  }

  function closeViewer() {
    setViewerOpen(false);
  }

  function prev() {
    setViewerIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setViewerIndex((i) => (i + 1) % images.length);
  }

  useEffect(() => {
    if (!viewerOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") closeViewer();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewerOpen]);

  useEffect(() => {
    document.body.style.overflow = viewerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [viewerOpen]);

  return (
    <>
      <header className="relative -mx-6">
        {/* Top bar */}
        <div className="absolute top-4 right-4 left-4 z-10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md"
            aria-label="Back"
          >
            <ArrowLeft size={20} aria-hidden />
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md"
              aria-label="Save"
            >
              <Heart size={18} aria-hidden />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md"
              aria-label="Share"
            >
              <Share2 size={18} aria-hidden />
            </button>
          </div>
        </div>

        {/* Hero image */}
        {first ? (
          <div
            className="group relative aspect-[4/3] w-full cursor-pointer"
            onClick={() => openViewer(0)}
          >
            <Image src={first} alt={alt} fill priority sizes="100vw" className="object-cover" />
            <div className="from-on-surface/60 via-on-surface/10 absolute inset-0 bg-gradient-to-t to-transparent" />
            <div className="absolute bottom-4 left-4 z-10">
              <StatusBadge
                status={status}
                inStockLabel={inStockLabel}
                preorderLabel={preorderLabel}
              />
            </div>
            {/* Eye icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
                <Eye size={26} aria-hidden />
              </div>
            </div>
          </div>
        ) : null}

        {/* Remaining images grid */}
        {rest.length > 0 ? (
          <ul className="grid grid-cols-2 gap-3 px-6 pt-3 lg:grid-cols-3">
            {rest.map((src, idx) => (
              <li
                key={idx}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl lg:rounded-3xl"
                onClick={() => openViewer(idx + 1)}
              >
                <Image
                  src={src}
                  alt={`${alt} ${idx + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Eye icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
                    <Eye size={18} aria-hidden />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      {/* Image viewer overlay */}
      {viewerOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeViewer}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeViewer}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            aria-label="Close"
          >
            <X size={20} aria-hidden />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
            {viewerIndex + 1} / {images.length}
          </div>

          {/* Prev arrow */}
          {images.length > 1 ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 lg:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} aria-hidden />
            </button>
          ) : null}

          {/* Image */}
          <div
            className="relative h-full w-full max-w-5xl px-16 py-16"
            onClick={(e) => e.stopPropagation()}
          >
            {viewerSrc ? (
              <Image
                src={viewerSrc}
                alt={`${alt} ${viewerIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            ) : null}
          </div>

          {/* Next arrow */}
          {images.length > 1 ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 lg:right-6"
              aria-label="Next image"
            >
              <ChevronRight size={24} aria-hidden />
            </button>
          ) : null}

          {/* Thumbnail strip */}
          {images.length > 1 ? (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewerIndex(idx);
                  }}
                  className={`relative h-12 w-16 overflow-hidden rounded-lg border-2 transition-all ${
                    idx === viewerIndex
                      ? "border-white opacity-100"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${alt} ${idx + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
