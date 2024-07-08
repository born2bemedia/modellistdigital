import Image from "next/image";
import "@/styles/home.scss";
import HomeHero from "./_components/HomeHero";
import LatestProjects from "./_components/LatestProjects";
import ProductionCycle from "./_components/ProductionCycle";

export default function Home() {
  return (
    <>
      <HomeHero />
      <LatestProjects />
      <ProductionCycle />
    </>
  );
}
