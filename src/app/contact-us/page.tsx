
import BuildTodaySection from "@/components/Contact-us/BuildToday";
import Heros from "@/components/Contact-us/Hero";

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