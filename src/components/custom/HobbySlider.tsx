import { image } from "@/utils/images";
import { useState } from "react";
import HobbyCard from "./HobbyCard";
import MIcon from "../mComponents/MIcon";
import { iconType } from "../types";

export interface sliderProps{
    hobbies: image[]
}

export default function HobbySlider({hobbies} : sliderProps){
    const [iterator, setIterator] = useState(0)

    const handleClick = (click: number) => {
        let temp = iterator + click
        if(temp < 0) temp = hobbies.length - 1
        if(temp > hobbies.length - 1) temp = 0

        setIterator(temp)
    }

    return (
        <div className="relative">
            <HobbyCard title={hobbies[iterator].name} illustration={hobbies[iterator].url} />
            <div className="flex justify-between absolute top-1/2 w-full p-2">
                <div className=" rounded-full bg-bg-white" onClick={() => handleClick(-1)}>
                    <MIcon type={iconType.left} variant="primary" />

                </div>
                <div className=" rounded-full bg-bg-white" onClick={() => handleClick(1)}>
                    <MIcon type={iconType.right} />
                </div>

            </div> 
        </div>
    )
}