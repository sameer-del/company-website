"use client";
import React from 'react';
import {ReactTyped} from "react-typed";

const Typeanimation: React.FC = () => {
  // You can use memoization here if the strings array is dynamic
  const typedStrings = [
    "Impactful",
    "focused",
    "efficient",
  ];

  return (
    <div style={{ fontSize: '70px', fontWeight: 'bold', color: '#A880FF', }}>
      <ReactTyped
        strings={typedStrings}  // Using the constant array
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default Typeanimation;
