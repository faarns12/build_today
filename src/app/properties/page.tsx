import GetInTuch from "@/components/home/getInTuch/GetInTuch";
import BuildTodaySection from "@/components/properties/BuildToday";
import Hero from "@/components/properties/Hero";
import Projects from "@/components/properties/Projects";

export default function Page() {
    return (
        <div>
            <Hero></Hero>
                  <Projects></Projects>
              <GetInTuch></GetInTuch>
              <BuildTodaySection></BuildTodaySection>
        
        </div>
    );
}