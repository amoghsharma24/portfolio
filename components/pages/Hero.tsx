"use client";

import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import Link from "next/link";
import { motion } from "framer-motion";
import { LiaLinkedin } from "react-icons/lia";
import { GrGithub, GrProjects, GrSpotify } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Contact, MenuSquare, Paperclip, PersonStanding } from "lucide-react";
import { FloatingDock } from "../ui/floating-dock";
import { IconBrandGithub } from "@tabler/icons-react";
import { FaHome } from "react-icons/fa";
import ThemeToggle from "../theme/theme-toggle";

const socialLinks = [
  {
    icon: <LiaLinkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <MdEmail className="w-6 h-6" />,
    href: "mailto:amoghsharma02@gmail.com",
    label: "Email",
  },
  {
    icon: <GrGithub className="w-6 h-6" />,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: <BsInstagram className="w-6 h-6" />,
    href: "https://www.instagram.com",
    label: "Instagram",
  },
  {
    icon: <GrSpotify className="w-6 h-6" />,
    href: "https://www.spotify.com",
    label: "Spotify",
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
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none" />
      <div className="md:block hidden light:hidden">
        <Boxes />
      </div>
      <div className=" mt-20 flex items-center justify-between px-6 shadow-lg fixed top-0 z-50">
        <FloatingDock
          items={[
            {
              title: "Home",
              icon: <FaHome className="w-6 h-6" />,
              href: "#home",
            },
            {
              title: "Projects",
              icon: <GrProjects className="w-6 h-6" />,
              href: "#projects",
            },
            {
              title: "Contact",
              icon: <Contact className="w-6 h-6" />,
              href: "#contact",
            },
            {
              title: "About",
              icon: <MenuSquare className="w-6 h-6" />,
              href: "#about",
            },
            {
              title: "Testimonials",
              icon: <PersonStanding className="w-6 h-6" />,
              href: "#testimonials",
            },
            {
              title: "GitHub",
              icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "#",
            },
            {
              title: "Resume",
              icon: (
                <Paperclip className="h-full w-full text-neutral-500 dark:text-neutral-300" />
              ),
              href: "#",
            },
            {
              title: "Theme Toggle",
              icon: <ThemeToggle />,
              href: "",
            },
          ]}
        />
      </div>

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
          Hi, I'm Amogh 👋🏽. I'm a Computer Science student at RMIT University,
          specializing in Enterprise Systems Development and AI & ML. Graduating
          in 2026.
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
                    {link.icon}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-xl font-semibold border border-white/20 rounded-lg hover:bg-white hover:text-black transition-all"
            >
              See my Projects!
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
