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