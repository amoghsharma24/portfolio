"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SectionContainer } from "../ui/section-container";

export default function Experience() {
  const experiences = [
    {
      title: "Summer Intern",
      company: "name of company",
      duration: "Dec 2024 - Feb 2025",
      location: "Remote",
      description: ["update this"],
      skills: ["Javascript", "C++", "Data Structures"],
      links: [{ url: "https://www.google.com/", label: "name of company" }],
    },
    {
      title: "Associate Member",
      company: "ACS",
      duration: "Feb 2024 - Current",
      location: "Melbourne, Australia",
      description: [""],
      links: [{ url: "https://www.acs.org.au/", label: "ACS" }],
      skills: [],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-b from-background to-secondary/10 m-5"
    >
      <SectionContainer>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h2
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Work Experience
          </motion.h2>
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-primary/5 pb-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium ">
                        {exp.company} | {exp.location}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-sm font-semibold px-2 py-1"
                    >
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="list-disc list-inside space-y-2 mb-4 text-base">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                  {exp.links && exp.links.length > 0 && (
                    <div className="mb-4 ">
                      {exp.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 flex items-center transition-colors duration-200 text-base"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </SectionContainer>
    </section>
  );
}
