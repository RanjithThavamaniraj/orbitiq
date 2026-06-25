import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { DataPipeline } from "@/components/sections/DataPipeline";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Features } from "@/components/sections/Features";
import { Architecture } from "@/components/sections/Architecture";
import { AIInsights } from "@/components/sections/AIInsights";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DataPipeline />
        <DashboardPreview />
        <Features />
        <Architecture />
        <AIInsights />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
