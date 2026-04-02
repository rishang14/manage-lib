import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { features } from "@/lib/constant";

export function FeaturesSection() {
  return (
    <section id="features" className="py-10 md:py-8">
      <div className="container max-w-260 px-4 opacity-95 backdrop-blur-md md:mx-auto md:flex md:gap-4 md:rounded-2xl md:from-neutral-700/40 md:to-neutral-900/50 md:p-3 md:inset-ring md:inset-ring-[rgba(255,255,255,0.2)]">
        <div className="p-2 py-4 opacity-90 backdrop-blur-xl md:mx-auto md:flex md:gap-4 md:rounded-xl md:bg-zinc-900">
          <div className="mb-10 gap-3 space-y-2 md:mb-16 md:flex md:w-[30%] md:flex-col md:items-center md:justify-center">
            <h2 className="bg-linear-to-br from-gray-50 from-50% to-gray-600 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
              Everything you need to manage your library
            </h2>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-2 md:w-[65%] md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`overflow-hidden bg-zinc-950/80 bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)] bg-size-[10px_10px] inset-shadow-xs inset-shadow-zinc-400 backdrop-contrast-50`}
              >
                <CardHeader className="">
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                  {feature.title}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
