import "@shared/styles/globals.css";
import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="bg-surface text-on-surface flex min-h-dvh items-center justify-center">
        <div className="space-y-4 px-6 text-center">
          <h1 className="text-primary-container text-6xl font-extrabold">404</h1>
          <p className="text-on-surface-variant">Page not found</p>
          <Link href="/uz" className="text-primary inline-block underline">
            Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
