import createMiddleware from "next-intl/middleware";
import { routing } from "@shared/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|opengraph-image|twitter-image|favicon\\.ico|robots\\.txt|sitemap\\.xml|sw\\.js|manifest\\.webmanifest|.*\\.(?:png|jpg|jpeg|svg|webp|avif|gif|ico|css|js)).*)",
  ],
};
