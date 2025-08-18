import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, ShieldCheck, Wrench } from "lucide-react"

const features = [
  {
    title: "Programming",
    icon: <Laptop className="w-12 h-12 text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptatum. Magni hic, voluptate debitis esse corporis dolor laudantium quae quo!",
  },
  {
    title: "Security",
    icon: <ShieldCheck className="w-12 h-12 text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptatum. Magni hic, voluptate debitis esse corporis dolor laudantium quae quo!",
  },
  {
    title: "Maintenance",
    icon: <Wrench className="w-12 h-12 text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptatum. Magni hic, voluptate debitis esse corporis dolor laudantium quae quo!",
  },
]
export default function Page() {

  return (
    <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {features.map((feature, idx) => (
        <Card
          key={idx}
          className="rounded-2xl  shadow-xl bg-gradient-to-bl from-slate-100 to-slate-50 border-0 p-6 grid gap-4"
        >
          <CardHeader className="flex flex-row items-end justify-between p-0">
            <CardTitle className="uppercase text-xl font-medium text-slate-700">
              {feature.title}
            </CardTitle>
            {feature.icon}
          </CardHeader>
          <CardContent className="p-0 text-slate-600">
            <p>{feature.description}</p>
          </CardContent>
          <div className="h-0.5 w-full bg-gradient-to-r from-red-500 to-blue-500 rounded-full" />
        </Card>
      ))}
    </div>
  )
}
