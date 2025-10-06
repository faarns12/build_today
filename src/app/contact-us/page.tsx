
import Heros from "@/components/Contact-us/Hero";
import BuildTodaySection from "@/components/home/Build-today/BuildToday";
import FaqSection from "@/components/home/FAQSection/FAQSection";
import LocationsShowcase from "@/components/home/LocationsShowcase/LocationsShowcase";


export default function Contact() {
    return (
        <div>
            <Heros></Heros>
             <FaqSection></FaqSection>
             <LocationsShowcase></LocationsShowcase>
              <BuildTodaySection></BuildTodaySection>
            
        </div>
    );
}