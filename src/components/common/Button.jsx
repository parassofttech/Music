import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary", // primary | secondary | outline | ghost
  size = "md", // sm | md | lg
  disabled = false,
  className,
  icon,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-primary text-black hover:bg-neon shadow-lg",
    secondary:
      "bg-zinc-800 text-white hover:bg-zinc-700",
    outline:
      "border border-green-500 text-green-500 hover:bg-green-500 hover:text-black",
    ghost:
      "text-white hover:bg-zinc-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
