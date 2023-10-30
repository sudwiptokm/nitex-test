import Header from "../components/nav/Header";
import CarouselSection from "../components/sections/carousel/CarouselSection";
import FeaturedSection from "../components/sections/feature/FeaturedSection";
import HeroSection from "../components/sections/hero/HeroSection";

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

        {/* Section 3 */}
        <div>
          <FeaturedSection />
        </div>

        {/* Section 4 */}
        <div></div>
      </main>
    </div>
  );
}
