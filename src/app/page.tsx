import Footer from "../components/nav/Footer";
import Header from "../components/nav/Header";
import CarouselSection from "../components/sections/carousel/CarouselSection";
import CTASection from "../components/sections/cta/CTASection";
import FeaturedSection from "../components/sections/feature/FeaturedSection";
import HeroSection from "../components/sections/hero/HeroSection";
import NewsLetterSection from "../components/sections/newsletter/NewsLetterSection";
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
        <div id="section-1">
          <HeroSection />
        </div>

        {/* Section 2 */}
        <div id="section-2">
          <CarouselSection />
        </div>

        {/* Section 3 - with animation*/}
        <div id="section-3">
          <FeaturedSection />
        </div>

        {/* Section 4 - with animation */}
        <div id="section-4">
          <CTASection />
        </div>

        {/* Section 5 - with animation*/}
        <div id="section-5">
          <PricingSection />
        </div>

        {/* Section 6 */}
        <div id="section-6">
          <StatsSection />
        </div>

        {/* Section 7 */}
        <div className="mt-20" id="section-7">
          <TestimonialSection />
        </div>

        {/* Section 8 */}
        <div className="mt-20" id="section-8">
          <NewsLetterSection />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
