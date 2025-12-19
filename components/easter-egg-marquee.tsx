"use client";

import { motion } from "motion/react";
import React from "react";

export const EasterEggMarquee = () => {
  return (
    <section className="w-full py-2 px-4 md:px-0">
      <div className="w-full max-w-5xl mx-auto overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap text-[10px] md:text-xs text-gray-700 tracking-widest"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <a href="https://www.imdb.com/title/tt22202452/episodes/" target="_blank" className="hover:text-gray-600">What are you looking for, Carol?</a>
        </motion.div>
      </div>
    </section>
  );
};

