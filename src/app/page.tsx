import Header from "../components/nav/Header";
import CarouselSection from "../components/sections/carousel/CarouselSection";
import CTASection from "../components/sections/cta/CTASection";
import FeaturedSection from "../components/sections/feature/FeaturedSection";
import HeroSection from "../components/sections/hero/HeroSection";
import PricingSection from "../components/sections/pricing/PricingSection";
import StatsSection from "../components/sections/stats/StatsSection";
import TestimonialSection from "../components/sections/testimonial/TestimonialSection";

export default function Home() {
  return (
    <div>
      <nav>
        <Header />
      </nav>

      <main className="max-w-5xl mx-auto py-6 px-2">
        {/* Section 1 */}
        <div>
          <HeroSection />
        </div>

        {/* Section 2 */}
        <div>
          <CarouselSection />
        </div>

        {/* Section 3 - with animation*/}
        <div>
          <FeaturedSection />
        </div>

        {/* Section 4 - with animation */}
        <div>
          <CTASection />
        </div>

        {/* Section 5 - with animation*/}
        <div>
          <PricingSection />
        </div>

        {/* Section 6 */}
        <div>
          <StatsSection />
        </div>

        {/* Section 7 */}
        <div className="mt-20">
          <TestimonialSection />
        </div>
      </main>
    </div>
  );
}
