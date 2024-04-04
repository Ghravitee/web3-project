// import Hero from "@/components/main/Hero";
// import { SparklesPreview } from "@/components/main/Hero";

import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/navbar/Navbar";
import Tokenomics from "@/components/main/Tokenomics";
import FAQ from "@/components/main/FAQ";
import Socials from "@/components/main/Socials";
import Footer from "@/components/main/Footer";


export default function Home() {
  return (
    <>
    
    <main className="h-full w-full">
      <div className="flex flex-col gap-2">
      
        {/* <SparklesPreview /> */}
        <Navbar />
       <Hero />
       <About />
       <Tokenomics />
       <FAQ />
       <Socials />
       <Footer />
      </div>
    </main>
    </>
  );
}
