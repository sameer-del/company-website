/* "use client";
import React from "react";
import { ReactTyped } from "react-typed";

const Typeanimation: React.FC = () => {
  // You can use memoization here if the strings array is dynamic
  const typedStrings = ["Impactful", "focused", "efficient"];

  return (
    <div style={{ fontWeight: "bold" }} className="text-primary">
      <ReactTyped
        strings={typedStrings} // Using the constant array
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default Typeanimation;
 */
"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RotateWords({
  words = ["Word 1", "Word 2", "Word 3"],
}: {
  words: string[];
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {" "}
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
