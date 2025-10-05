import Hero from "@/components/home/Hero/Hero";
import LocationsShowcase from "@/components/home/LocationsShowcase/LocationsShowcase";
import MetricsSection from "@/components/home/MetricsSection/MetricsSection";
import Project from "@/components/home/project/Project";
import ServicesHoverSection from "@/components/home/services/services";
import StickyFeaturedPropertyCards from "@/components/home/StickyFeaturedPropertyCards/StickyFeaturedPropertyCards";
import ValueProp from "@/components/home/Value/ValueProp";

export default function Home() {
  return (
    <div className=" mx-auto justify-center">
      
     <Hero></Hero>
      <ValueProp></ValueProp>
      <LocationsShowcase></LocationsShowcase>
      <ServicesHoverSection></ServicesHoverSection>
      <MetricsSection></MetricsSection>
      <StickyFeaturedPropertyCards></StickyFeaturedPropertyCards>
       <Project></Project>
    </div>
  );
}