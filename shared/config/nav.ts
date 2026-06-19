export interface NavItem {
  href: string;
  labelKey: string;
}

export const PRIMARY_NAV: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/biz-haqimizda", labelKey: "nav.about" },
  { href: "/loyihalar", labelKey: "nav.projects" },
  { href: "/katalog", labelKey: "nav.catalog" },
  { href: "/qanday-ishlaymiz", labelKey: "nav.howWeWork" },
  { href: "/kontakt", labelKey: "nav.contact" },
];

export const FOOTER_NAV: NavItem[] = [
  { href: "/katalog", labelKey: "footer.links.catalog" },
  { href: "/loyihalar", labelKey: "footer.links.projects" },
  { href: "/kontakt", labelKey: "footer.links.service" },
  { href: "/privacy", labelKey: "footer.links.privacy" },
];
