"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Armchair,
  CreditCard,
  CheckCircle,
  AlertTriangle,
  UserCircle,
} from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";

const mockSeats = [
  { id: "A01", shifts: ["Booked", "Available", "Booked"] },
  { id: "A02", shifts: ["Available", "Available", "Booked"] },
  { id: "B01", shifts: ["Booked", "Booked", "Booked"] },
  { id: "B02", shifts: ["Maintenance", "Maintenance", "Maintenance"] },
];

const mockPayments = [
  { name: "Alice W.", month: "June 2025", status: "Paid" },
  { name: "Bob B.", month: "June 2025", status: "Due" },
  { name: "Charlie D.", month: "June 2025", status: "Overdue" },
  { name: "Diana P.", month: "May 2025", status: "Paid" },
];

const shiftColors = {
  Booked: "bg-blue-500",
  Available: "bg-emerald-500",
  Maintenance: "bg-orange-500",
};

const ShiftStatusDot = ({ status }: { status: keyof typeof shiftColors }) => (
  <motion.div
    className={`h-3 w-3 rounded-full ${shiftColors[status]}`}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: Math.random() * 0.5,
    }}
  />
);

const getStatusIcon = (status: string) => {
  if (status === "Paid")
    return <CheckCircle className="h-4 w-4 text-emerald-500" />;
  if (status === "Due")
    return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
  if (status === "Overdue")
    return <AlertTriangle className="h-4 w-4 text-red-500" />;
  return null;
};

const getStatusBadgeVariant = (status: string) => {
  if (status === "Paid") return "default";
  if (status === "Due") return "secondary";
  if (status === "Overdue") return "destructive";
  return "outline";
};

const getStatusBadgeClass = (status: string) => {
  if (status === "Paid")
    return "bg-emerald-500/20 text-emerald-700 dark:bg-emerald-500/30 dark:text-emerald-300 border-emerald-500/30";
  if (status === "Due")
    return "bg-yellow-500/20 text-yellow-700 dark:bg-yellow-500/30 dark:text-yellow-300 border-yellow-500/30";
  if (status === "Overdue")
    return "bg-red-500/20 text-red-700 dark:bg-red-500/30 dark:text-red-300 border-red-500/30";
  return "";
};

const HomepageCard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <Card className="w-full shadow-2xl overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-0">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Seat Management Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full shadow-xl relative overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border border-emerald-200 dark:border-emerald-800 transition-all duration-300 group-hover:shadow-2xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg"
                      >
                        <Armchair className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                        Visual Seat Planner
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      At a glance, see seat availability across all shifts.
                      Easily identify open slots or booked seats.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="rounded-lg border bg-white dark:bg-gray-800/50 p-4 shadow-inner"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ staggerChildren: 0.1 }}
                    >
                      <div className="grid grid-cols-[auto_1fr_1fr_1fr] gap-x-3 gap-y-2 items-center text-sm font-medium text-muted-foreground mb-3">
                        <div className="text-left">Seat</div>
                        <div className="text-center">Shift 1</div>
                        <div className="text-center">Shift 2</div>
                        <div className="text-center">Shift 3</div>
                      </div>
                      {mockSeats.map((seat, seatIndex) => (
                        <motion.div
                          key={seat.id}
                          className="grid grid-cols-[auto_1fr_1fr_1fr] gap-x-3 gap-y-2 items-center py-2.5 border-b last:border-b-0 dark:border-slate-700"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{ delay: seatIndex * 0.1 + 0.6 }}
                        >
                          <div className="font-semibold text-gray-700 dark:text-gray-200">
                            {seat.id}
                          </div>
                          {seat.shifts.map((status, shiftIndex) => (
                            <div
                              key={shiftIndex}
                              className="flex justify-center"
                            >
                              <ShiftStatusDot
                                status={status as keyof typeof shiftColors}
                              />
                            </div>
                          ))}
                        </motion.div>
                      ))}
                    </motion.div>
                    <div className="mt-4 flex flex-wrap gap-3 text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-gray-600 dark:text-gray-400">
                          Booked
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-gray-600 dark:text-gray-400">
                          Available
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        <span className="text-gray-600 dark:text-gray-400">
                          Maintenance
                        </span>
                      </div>
                    </div>
                  </CardContent> 
                  <BorderBeam duration={20} size={100}  colorFrom="#a4f4cf " colorTo="#314158"/>
                </Card>
              </motion.div>

              {/* Payment Management Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full shadow-xl relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 transition-all duration-300 group-hover:shadow-2xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg"
                      >
                        <CreditCard className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                        Payment Dashboard
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Keep track of member payments, dues, and payment history
                      with an organized, clear interface.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="rounded-lg border bg-white dark:bg-gray-800/50 p-4 shadow-inner space-y-3"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ staggerChildren: 0.15 }}
                    >
                      {mockPayments.map((payment, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-md bg-card dark:bg-slate-700/40 shadow-sm hover:shadow-md transition-shadow duration-200"
                          variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                          transition={{ delay: index * 0.1 + 0.8 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-full">
                              <UserCircle className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-700 dark:text-gray-200">
                                {payment.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {payment.month}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={getStatusBadgeVariant(payment.status)}
                            className={`${getStatusBadgeClass(
                              payment.status
                            )} transition-all duration-200`}
                          >
                            {getStatusIcon(payment.status)}
                            <span className="ml-1.5">{payment.status}</span>
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                    <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Payment Summary
                        </span>
                        <div className="flex gap-4">
                          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                            2 Paid
                          </span>
                          <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                            1 Due
                          </span>
                          <span className="text-red-600 dark:text-red-400 font-medium">
                            1 Overdue
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent> 
                  <BorderBeam  duration={20} size={100}/>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-12 text-center"
            ></motion.div>
          </CardContent> 
        </Card>
      </motion.div>
    </div>
  );
};

export default HomepageCard;
