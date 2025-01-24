"use client";
import { motion } from "framer-motion";
import * as React from "react";

interface PanimationProps {
  children: React.ReactNode;
  className: string;
  totalDuration : number,
}

export const Panimation: React.FC<PanimationProps> = ({
  children,
  className,
  totalDuration=3,
  
}) => {
  // Ensure children is a string
  const text = typeof children === "string" ? children.split("") : [];
  const delayPerCharacter = totalDuration / text.length;

  return (
    <p className={` ${className}`}>
      {text.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i * delayPerCharacter, // Adding staggered delay
          }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};
