import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function MainSection() {
  return (
    <section className="py-10 flex items-center justify-center  md:py-20 relative overflow-hidden">
      <div className="absolute top-20  transform -translate-x-1 w-full h-56 bg-linear-to-l from-black via-blue-500 to-black rounded-full blur-2xl opacity-35"></div>
      <div className="absolute  bg-gradient-to-br from-blue-400 " />
      <div className="absolute inset-0" />
      <div className="container relative px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium bg-white/10 backdrop-blur">
            <Sparkles className="mr-2 h-4 w-4" />
            Start your free trial today
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ready to transform your library management?
          </h2>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
             Let us handle bookings,shifts, and payments so you can focus on
            running your library.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col items-center justify-center sm:flex-row gap-4">

              <div>
                <Button
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-white/90 font-semibold"
                > 
                <Link href={"/login"}> Get Started </Link>
                 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-white/70 mt-3">
              No credit card required • free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
