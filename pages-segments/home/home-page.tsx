import { HeroSection } from "@widgets/hero-section";
import { TrustStrip } from "@widgets/trust-strip";
import { CategoriesGrid } from "@widgets/categories-grid";
import { WhyUs } from "@widgets/why-us";
import { HowWeWorkTimeline } from "@widgets/how-we-work-timeline";
import { LeadMagnetBanner } from "@widgets/lead-magnet-banner";
import { Footer } from "@widgets/footer";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <CategoriesGrid />
      <WhyUs />
      <HowWeWorkTimeline />
      <LeadMagnetBanner />
      <Footer />
    </>
  );
}
