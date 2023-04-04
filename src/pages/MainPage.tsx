import AboutSection from "@/pages/AboutSection";
import { useState } from "react";
import ExperienceSection from "./ExperienceSection";
import MTopNav from "@/components/mComponents/MTopNav";
import MButton from "@/components/mComponents/MButton";
import { iconType } from "@/components/types";

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
        </div>
            {/* <BottomNavigator changeTab={setTab}/> */}
        </>
    )
}