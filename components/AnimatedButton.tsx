import React from "react";
import { Button } from "./ui/button";

const AnimatedButton = ({
  type,
  icon,
  text,
}: {
  type: "Edit" | "Delete";
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <Button
      variant={"outline"}
      className="relative bg-gray-200 text-gray-400 shadow-xl transition duration-200 text-shadow-sm active:scale-98"
    >
      <div
        className={`absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent ${(type === "Edit" && "via-blue-500") || (type === "Delete" && "via-red-500")} to-transparent`}
      ></div>
      {icon}
      {text}
    </Button>
  );
};

export default AnimatedButton;
