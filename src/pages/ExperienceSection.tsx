import MTypography from "../components/mComponents/MTypography";
import MAccordion from "@/components/mComponents/MAccordion";


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
                    <div className=" w-full bg-bg-white rounded-md flex" >
                        <div className="w-1/3 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80')] bg-no-repeat bg-cover rounded-l-md p-2 justify-center">
                        </div>
                        <div className="w-2/3 p-2">
                            <MTypography type='subtitle' variant="primary" text='Bitmesh AS' />
                            <MTypography type='text' text="Bitmesh provides a collection of services, enabling rapid IoT application development." />
                        </div>
                    </div>
                    <div className=" w-full bg-bg-white rounded-md flex" >
                        <div className="w-1/3 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80')] bg-no-repeat bg-cover rounded-l-md p-2 justify-center">
                        </div>
                        <div className="w-2/3 p-2">
                            <MTypography type='subtitle' variant="primary" text='Capgemini' />
                            <MTypography type='text' text="Capgemini is a multinational information technology (IT) services and consulting company." />
                        </div>
                    </div>
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