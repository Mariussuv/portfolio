import React from "react";
import MTypography from "../mComponents/MTypography";

export interface projectProps{
    name: string,
    company: string,
    description?: string,
    illustration: string

}

export default function ProjectCard({name, company, description, illustration} : projectProps){
    return(
        <div className=" w-full bg-bg-white rounded-md flex" >
                        <div className="w-1/2 p-2">
                            <MTypography type='subtitle' variant="primary" text={name} />
                            <MTypography type='caption' text={company} />
                            <MTypography type='text' text={description ?? ''} />

                        </div>
                        {/* <div className={`w-1/2 bg-[url('../../public/illustrations/cows.jpg')] bg-no-repeat bg-cover rounded-r-md`}> */}
                        {/* </div>   */}
                    </div>
    )
}