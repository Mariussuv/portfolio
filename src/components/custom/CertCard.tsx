import React from "react";
import MTypography from "../mComponents/MTypography";

export interface certCardProps{
    name: string,
    issuedBy: string,
    illustration: string

}

export default function CertCard({name, issuedBy, illustration} : certCardProps){
    return(
        <div className=" w-full bg-bg-white rounded-md flex" >
            <div className=" w-1/4 p-1">
                <img src={illustration}/>
            </div>
            <div className=" w-3/4 p-2">
                <MTypography type='subtitle' variant="primary" text={name} />
                <MTypography type='caption' text={issuedBy} />

            </div>
                    </div>
    )
}