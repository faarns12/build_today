import Hero from "@/components/home/Hero/Hero";
import LocationsShowcase from "@/components/home/LocationsShowcase/LocationsShowcase";
import ValueProp from "@/components/home/Value/ValueProp";

export default function Home() {
  return (
    <div className=" mx-auto justify-center">
      
     <Hero></Hero>
      <ValueProp></ValueProp>
      <LocationsShowcase></LocationsShowcase>
    </div>
  );
}