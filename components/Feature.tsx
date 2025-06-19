"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Armchair, Clock, Users, CreditCard, Bell, CheckCircle } from "lucide-react"
import { motion } from "framer-motion" 

const features = [
  {
    icon: Armchair,
    title: "Seat Management",
    description: "Add, edit, and track individual library seats — never double-book again.",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800/30",
    shadowColor: "shadow-blue-500/10",
  },
  {
    icon: Clock,
    title: "Shift Scheduling",
    description: "Allocate seats by morning, afternoon, or evening shifts with full visibility.",
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800/30",
    shadowColor: "shadow-green-500/10",
  },
  {
    icon: Users,
    title: "Member Records",
    description: "Manage member details and seat history — no messy registers.",
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800/30",
    shadowColor: "shadow-purple-500/10",
  },
  {
    icon: CreditCard,
    title: "Payment Tracking",
    description: "Track who has paid and who hasn't — per seat, shift, and date.",
    color: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800/30",
    shadowColor: "shadow-orange-500/10",
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Get notified of overdue payments automatically — via dashboard or email.",
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-900/20",
    borderColor: "border-red-200 dark:border-red-800/30",
    shadowColor: "shadow-red-500/10",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="text-sm">
            Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Everything you need to manage your library</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your library operations with our comprehensive suite of management tools
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1040px] mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => ( 
            // @ts-ignore
            <motion.div key={index} variants={item}>
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card
                  className={`relative overflow-hidden border ${feature.borderColor} ${feature.shadowColor} shadow-sm hover:shadow-xl dark:inset-shadow-card-foreground  bg-card   transition-all duration-300`}
                >
                  <div
                    className="absolute top-0 left-0 w-2 h-full"
                    style={{ backgroundColor: feature.color.replace("text-", "") }}
                  ></div>
                  <CardHeader className="pb-4">
                    <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-7 w-7 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>

                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 dark:to-white/5 pointer-events-none" />

                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-transparent to-black/5 dark:to-white/5 blur-xl pointer-events-none"></div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional benefits */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-8">Why choose LibShift?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-muted-foreground">Easy setup in minutes</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-muted-foreground">Control is in your hand.</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-muted-foreground">we help to get work done asap</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
