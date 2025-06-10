import { CTASection } from "@/components/Cta";
import { FeaturesSection } from "@/components/Feature";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Hero";
import  Nav  from "@/components/Nav";


export default function Home() {
  return (
   <> 
  <div className="min-h-screen   p-5 bg-background">
      <Nav />
      <main>
        <HeroSection/>
        <FeaturesSection />
        {/* <CTASection /> */}
      </main>
      <Footer />
    </div>

   </>
  );
}
