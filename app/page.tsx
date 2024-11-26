import Hero from "@/components/pages/Hero";

// export const metadata: Metadata = {
//   title: "Amogh's Portfolio",
//   description: "The personal portfolio of Amogh, a developer based in Melbourne.",
// };

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* <StatusBar /> */}
      <Hero />
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Blog /> */}
      <div className="md:block hidden">{/* <Gallery /> */}</div>
      {/* <Contact /> */}
    </div>
  );
}
