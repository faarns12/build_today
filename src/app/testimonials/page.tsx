import FaqSection from "@/components/home/FAQSection/FAQSection";
import GetInTuch from "@/components/home/getInTuch/GetInTuch";
import MetricsSection from "@/components/home/MetricsSection/MetricsSection";
import Hero from "@/components/Testimonials/Hero";


export default function Testimonials() {
    return (
        <div>
<Hero></Hero>
        <MetricsSection></MetricsSection>    
        <FaqSection></FaqSection>  
        <GetInTuch></GetInTuch>
        </div>
    );
}