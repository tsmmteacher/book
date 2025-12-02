"use client";
import { useState, useEffect } from "react";
import { books } from "../data/books.js";

export default function BookCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % books.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-54 overflow-hidden bg-black">
      <img
        src={books[index].image}
        alt={books[index].titre}
        className="w-full h-full object-cover transition-all"
      />
    </div>
  );
}
