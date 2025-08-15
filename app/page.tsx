import { Github, ExternalLink, Brain, FlaskConical, Code, Users, Target, Zap, X, MessageCircle, Square } from "lucide-react";

import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import Footer from "./custom_components/footer";
import Hero from "./custom_components/hero";
import Work from "./custom_components/work";


export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      
      {/* Hero Section - Full Viewport */}
      <Hero />

      <Work />

      <Footer />
    </div>
  );
}