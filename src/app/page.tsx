import Hero from "@/components/home/Hero/Hero";
import LocationsShowcase from "@/components/home/LocationsShowcase/LocationsShowcase";
import MetricsSection from "@/components/home/MetricsSection/MetricsSection";
import ServicesHoverSection from "@/components/home/services/services";
import ValueProp from "@/components/home/Value/ValueProp";

export default function Home() {
  return (
    <div className=" mx-auto justify-center">
      
     <Hero></Hero>
      <ValueProp></ValueProp>
      <LocationsShowcase></LocationsShowcase>
      <ServicesHoverSection></ServicesHoverSection>
      <MetricsSection></MetricsSection>
   
    </div>
  );
}