import MTopNav from "../components/mComponents/MTopNav";
import MTypography from "../components/mComponents/MTypography";
import Image from "next/image";
import pp from '../../public/pp.jpg'
import MAccordion from "@/components/mComponents/MAccordion";
import MButton from "@/components/mComponents/MButton";
import cows from "../../public/illustrations/cows.jpg"
import ProjectCard from "@/components/custom/ProjectCard";


export default function ExperienceSection(){
    return(
        <div className=" max-w-md w-full">
            <MTypography type='title' text='experience' variant='secondary'/>
            <div className="p-2 gap-4 flex flex-col">
                <MAccordion label="education">
                    <div className="flex flex-row">
                        <div>
                            <MTypography type="caption" text="2017" />
                            <MTypography type="caption" text="2020" />
                        </div>
                        <div className=" border-primary border-l-2 ml-2 pl-2">
                            <MTypography type="text" text="University of Agder"/>
                            <MTypography type="caption" text="Bachelor Degree Computer Engineering"/>
                        </div>

                    </div>
                    <div className="flex flex-row mt-4">
                        <div>
                            <MTypography type="caption" text="2020" />
                            <MTypography type="caption" text="2022" />
                        </div>
                        <div className=" border-primary border-l-2 ml-2 pl-2">
                        <MTypography type="text" text="University of Agder"/>
                            <MTypography type="caption" text="Masters Degree in Artificial Intelligence"/>
                        </div>

                    </div>
                </MAccordion>
                <MAccordion label="job experience">
                    <MTypography type="caption" text="Bitmesh AS"/>
                    <MTypography type="caption" text="Capgemini"/>
                </MAccordion>
                <MAccordion label="projects">
                    <div className=" w-full bg-bg-white rounded-md flex" >
                        <div className="w-1/2 p-2">
                            <MTypography type='subtitle' variant="primary" text='Min Side 2.0' />
                            <MTypography type='caption' text="Nortura" />
                            <MTypography type='text' text="Min Side 2.0 is a large system for Norwegian farmers to aid in operation. I worked as a fullstack developer using React.JS and dotnet." />

                        </div>
                        <div className="w-1/2 bg-[url('../../public/illustrations/cows.jpg')] bg-no-repeat bg-cover rounded-r-md"/>
                    </div>

                    <div className=" w-full bg-bg-white rounded-md flex" >
                        <div className="w-1/2 p-2">
                            <MTypography type='subtitle' variant="primary" text='Osterham' />
                            <MTypography type='caption' text="Viggoman Plays" />
                            <MTypography type='text' text="Osterham is a huge Minecraft project building a realistic medieval city" />

                        </div>
                        <div className="w-1/2 bg-[url('../../public/illustrations/Osterham.png')] bg-no-repeat bg-cover rounded-r-md"/>
                    </div>
                    
                </MAccordion>
                <MAccordion label="certifications" >

                </MAccordion>

            </div>

        </div>
    )
}