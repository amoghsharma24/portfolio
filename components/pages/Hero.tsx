"use client";

import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
// import NavSheet from "../global/nav-sheet";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LiaLinkedin } from "react-icons/lia";
import { GrGithub } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaLetterboxd } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    icon: LiaLinkedin,
    href: "https://www.linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: MdEmail,
    href: "mailto:amoghsharma02@gmail.com",
    label: "Email",
  },
  {
    icon: GrGithub,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: BsInstagram,
    href: "https://www.instagram.com",
    label: "Instagram",
  },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 w-full h-full z-20  pointer-events-none" />
      <div className="md:block hidden light:hidden">
        <Boxes />
      </div>
      {/* <NavSheet /> */}
      <div
        className="relative z-30 text-center px-4 md:px-10 max-w-4xl"
        id="home"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold mb-6 font-serif"
        >
          Hey There!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl md:text-4xl font-serif leading-relaxed mb-8"
        >
          Hi 👋🏽, I&apos;m Amogh. An aspiring software developer based in
          Melbourne, Australia.
        </motion.p>

        <div className="flex flex-col justify-center items-center space-y-6 md:space-y-6 md:space-x-6 mt-8">
          <motion.div
            className="flex justify-center space-x-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {socialLinks.map((link, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-3 hover:bg-opacity-30 transition-all duration-300"
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <Link href="/blog">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* <Button
                variant="outline"
                className="text-sm"
                aria-label="Open my blogs"
              ></Button> */}
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
