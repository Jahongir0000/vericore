export function formatPrice(value: number, currency: "USD" | "UZS" = "USD"): string {
  if (currency === "USD") {
    return `$${value.toLocaleString("en-US")}`;
  }
  return `${value.toLocaleString("uz-UZ")} so'm`;
}

export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("998") && digits.length === 12) {
    return `+${digits.slice(0, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10)}`;
  }
  return raw;
}

export function formatM3PerHour(value: number): string {
  return `${value} m³/h`;
}

export function formatKw(value: number): string {
  return `${value} kW`;
}

export function formatSeconds(value: number): string {
  return `${value} s`;
}

export function pluralize(count: number, one: string, few: string, many: string): string {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
