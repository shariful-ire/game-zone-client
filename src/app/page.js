import Hero from "@/components/layout/Hero";
import PageTransition from "@/components/layout/PageTransition";

export default function Home() {
  return (
    <PageTransition className="flex-1">
      <Hero />
    </PageTransition>
  );
}
