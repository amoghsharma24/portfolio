"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// Define types for the navItem prop
interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactElement; // The icon can be an optional React element
}

interface FloatingNavProps {
  navItems: NavItem[];
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  // Handle scroll events to determine visibility of the nav bar
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const previousValue = scrollYProgress.getPrevious();
    if (previousValue !== undefined) {
      const direction = current - previousValue;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true); // Show when near the top
      } else {
        if (direction < 0) {
          setVisible(true); // Show when scrolling down
        } else {
          setVisible(false); // Hide when scrolling up
        }
      }
    }
  });

  return (
    <motion.div
      initial={{ opacity: 1, y: -100 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="flex max-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)] items-center justify-center space-x-4"
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={`link-${idx}`}
          href={navItem.link}
          className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
        >
          {navItem.icon && (
            <span className="block sm:hidden">{navItem.icon}</span>
          )}
          <span className="text-sm !cursor-pointer">{navItem.name}</span>
        </a>
      ))}
    </motion.div>
  );
};
