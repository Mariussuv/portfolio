import AboutSection from "@/pages/AboutSection";
import { useState } from "react";
import ExperienceSection from "./ExperienceSection";
import MTopNav from "@/components/mComponents/MTopNav";
import MButton from "@/components/mComponents/MButton";
import { iconType } from "@/components/types";
import ContactSection from "./ContactSection";

export default function MainPage(){
    const [tab, setTab] = useState(0)

    return(
        <>
        <MTopNav label="portfolio">
            <MButton variant='primary' onClick={() => setTab(0)} icon={iconType.profile}/>
            <MButton variant='primary' onClick={() => setTab(1)} icon={iconType.experience}/>
            <MButton variant='primary' onClick={() => setTab(2)} icon={iconType.contact}/>
        </MTopNav>
        <div className="flex justify-center p-2 h-full">
            {tab == 0 && 
                <AboutSection/>
            }
            {tab == 1 &&
                <ExperienceSection />
            }
            {tab == 2 &&
                <ContactSection />
            }
        </div>
            {/* <BottomNavigator changeTab={setTab}/> */}
        </>
    )
}