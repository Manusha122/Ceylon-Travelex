import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrendingPackages } from "@/components/TrendingPackages";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrendingPackages />
      </main>
    </div>
  );
}