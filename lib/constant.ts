import {
  Armchair,
  Clock,
  Users,
  CreditCard,
  Bell,
} from "lucide-react"; 
import { MdEventSeat,MdTimer ,MdPayments  } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";

export 
const features = [
  {
    icon: MdEventSeat,
    title: "Seat Management",
    description:
      "Add, edit, and track individual library seats — never double-book again.",
    color: "text-white",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    icon: MdTimer,
    title: "Shift Scheduling",
    description:
      "Allocate seats by morning, afternoon, or evening shifts with full visibility.",
    color: "text-white",
    bgColor: "bg-green-100 dark:bg-green-900/20",
  },
  {
    icon: HiUsers,
    title: "Member Records",
    description: "Manage member details and seat history — no messy registers.",
    color: "text-white",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    icon: MdPayments,
    title: "Payment Tracking",
    description:
      "Track who has paid and who hasn't — per seat, shift, and date.",
    color: "text-white",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
  },
]; 

export const featureData=[ "Easy setup in minutes","Control is in your hand.", "we help to get work done asap"]