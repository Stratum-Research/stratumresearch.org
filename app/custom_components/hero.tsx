import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ChevronRight } from "lucide-react";
import { GridPattern } from "@/components/magicui/grid-pattern";


export default function Hero() {
  return (
        <section className="min-h-screen flex items-center justify-center relative ">
      
      {/* Background Grid */}
      <div className="absolute inset-0 w-full h-full">
      {/* <GridPattern /> */}

        {/* <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#001A6E"
          maxOpacity={0.1}
          flickerChance={0.3}
        //   height={1200}
        //   width={1200}
        /> */}
      </div>


    <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Logo/Icon */}
      <div className="mx-auto w-24 h-24 mb-8">
        <img src="/logo.svg" alt="Stratum Research Logo" className="w-full h-full" />
      </div>

      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 dark:text-white mb-6">
        Stratum Research
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        Applied LLM Systems for Clinical Reasoning
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
        
        <a 
          href="https://github.com/stratum-research" 
          target="_blank" 
          rel="noopener noreferrer"
          className="py-2 relative group"
        >
          <ShimmerButton>Check out our Github</ShimmerButton>
          {/* GITHUB
          <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 dark:text-white transition-all duration-300 group-hover:w-full"></span> */}
        </a>

        <a 
          href="https://huggingface.co/stratum-research" 
          target="_blank" 
          rel="noopener noreferrer"
          className="py-2 relative group"
        >
          <span className="flex items-center gap-2">
            Check out our Hugging Face
            <ChevronRight className="w-4 h-4" />
          </span>
          {/* HUGGINGFACE
          <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 dark:text-white transition-all duration-300 group-hover:w-full"></span> */}
        </a>
      </div>
    </div>
  </section>
  );
}