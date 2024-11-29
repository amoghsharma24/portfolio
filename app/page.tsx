import Hero from "@/components/pages/Hero";
import Experience from "@/components/pages/work-ex";
import Nav from "@/components/ui/floating-dock";

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
      <div className="md:block hidden">{/* <Gallery /> */}</div>
      {/* <Contact /> */}
    </div>
  );
}
