import React from "react";
import { motion } from "framer-motion";

const bars = [1, 2, 3, 4, 5];

const Loader = ({ size = "md" }) => {
  const sizes = {
    sm: "h-6",
    md: "h-10",
    lg: "h-16",
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className={`flex items-end gap-1 ${sizes[size]}`}>
        {bars.map((bar) => (
          <motion.span
            key={bar}
            className="w-2 bg-green-500 rounded-full"
            animate={{
              height: ["20%", "100%", "40%"],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: bar * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
