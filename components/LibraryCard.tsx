import Link from "next/link";
import { Card } from "@/components/ui/card";
import AnimatedButton from "./AnimatedButton";
import { LineGradient } from "./GradientComp";
import { Library } from "@prisma/client";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { FaLink } from "react-icons/fa";

export function LibraryCard({ library }: { library?: Library }) {
  return (
    <Card className="group flex h-40 w-60 items-center rounded-md bg-zinc-950/80 p-2 inset-shadow-xs inset-shadow-zinc-400 backdrop-contrast-50">
      <div className="relative flex h-full w-full rounded-md bg-zinc-900">
        <LineGradient />
        <div className="absolute inset-0 h-full w-full translate-x-2.5 -translate-y-3 rounded-md bg-neutral-800 py-2 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
          <div className="flex h-full w-full flex-col items-start justify-between gap-2 p-2">
            <Link
              href="/"
              className="text-shadow transparent flex items-center gap-2 text-center text-xl font-medium tracking-tight text-gray-200 underline underline-offset-1"
            >
              Lib name
              <FaLink className="size-4" />
            </Link>
            <div className="mb-2 flex gap-5">
              <AnimatedButton
                text="Edit"
                type="Edit"
                icon={<MdModeEdit className="size-4" />}
              />
              <AnimatedButton
                text="Delete"
                type="Delete"
                icon={<MdDelete className="size-4" />}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
