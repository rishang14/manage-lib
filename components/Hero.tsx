import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className=" overflow-hidden flex items-center justify-center py-15  md:py-15">
      <div className="container relative  px-4 md:px-6">
        <div className="absolute top-20  transform -translate-x-1 w-full h-56 bg-linear-to-l from-black via-blue-500 to-black rounded-full blur-2xl opacity-35"></div>
        <div className="max-w-4xl mx-auto md:p-4 p-2  text-center text-white space-y-8">
          <div className="inline-flex items-center rounded-full border shadow-blue-200 shadow-sm border-white/20 px-4 py-1.5 text-sm font-medium bg-white/10 backdrop-blur">
            <Sparkles className="mr-2 h-4 w-4" />
            Start your free trial today
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ready to transform your library management?
          </h2>
          <p className="text-xl  text-white/70  mx-auto">
            Let us handle bookings,shifts, and payments so you can focus on
            running your library.
          </p>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-white/90 font-semibold"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div> 
    </section>
  );
}
