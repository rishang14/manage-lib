import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function MainSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-10 md:py-20">
      <div className="absolute top-20 h-56 w-full rounded-full bg-linear-to-b from-neutral-800 via-blue-600 to-neutral-900 opacity-35 blur-2xl"></div>
      <div className="relative container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-8 text-center text-white">
          <div className="inline-flex items-center rounded-full border bg-white/10 px-4 py-1.5 text-sm font-medium inset-ring inset-ring-gray-100 backdrop-blur">
            <Sparkles className="mr-2 h-4 w-4" />
            Start your free trial today
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Ready to transform your library management?
          </h2>

          <p className="mx-auto max-w-xl bg-linear-to-b from-gray-200 to-gray-400 bg-clip-text text-xl font-semibold text-transparent">
            Let us handle bookings,shifts, and payments so you can focus on
            running your library.
          </p>

          <div className="mx-auto max-w-md">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div>
                <Button
                  size="lg"
                  className="bg-gray-100 text-blue-600 shadow-xl transition duration-200 text-shadow-xs active:scale-98"
                >
                  <Link href={"/login"}> Get Started </Link>

                  <ArrowRight className="size-3 text-shadow-xs" />
                </Button>
              </div>
            </div>
            <p className="mt-3 bg-linear-to-br from-gray-100 to-gray-700 bg-clip-text text-sm text-transparent">
              No credit card required • free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
