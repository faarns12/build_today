import BuildTodaySection from "@/components/Contact-us/BuildToday";
import Excellence from "@/components/Quotation/Excellence";
import Hero from "@/components/Quotation/Hero";
import QuoteForm from "@/components/Quotation/QuoteForm";

export default function Quotations() {
    return (
        <div>
            
            <Hero></Hero>
            <QuoteForm></QuoteForm>
            <Excellence></Excellence>
            <BuildTodaySection></BuildTodaySection>
        </div>
    );
}