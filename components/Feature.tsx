import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features } from "@/lib/constant";

export function FeaturesSection() {
  return (
    <section id="features" className=" py-10 md:py-8">
      <div className="container max-w-260 md:inset-ring md:flex md:mx-auto md:gap-4  md:inset-ring-[rgba(255,255,255,0.2)] md:rounded-2xl  md:from-neutral-700/40 md:to-neutral-900/50 opacity-95 backdrop-blur-md px-4 md:p-3  ">
        <div className="md:flex  md:mx-auto md:gap-4  md:rounded-xl md:bg-zinc-900  opacity-90 backdrop-blur-xl p-2 py-4">
          <div className="md:flex md:w-[30%] md:flex-col md:items-center md:justify-center space-y-2  gap-3 md:mb-16 mb-10">
            <h2 className="text-3xl text-center md:text-5xl  text-transparent bg-linear-180 bg-clip-text  to-gray-400/80 from-white font-bold ">
              Everything you need to manage your library
            </h2>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-2 md:w-[65%] mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={` overflow-hidden     inset-shadow-xs inset-shadow-zinc-400  bg-zinc-950/80 backdrop-contrast-50 `}
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
