import { useEffect, useState } from "react";
import { containerProps, iconType } from "../types";
import exp from "constants";
import MTypography from "./MTypography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MIcon from "./MIcon";

export default function MAccordion({label, expanded = false, children}: containerProps){
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        setIsExpanded(expanded)
    }, [expanded])

    return(
        <div className=" bg-secondary w-full rounded-lg shadow-2xl  ">
            <div className={` bg-bg-primary rounded-t-lg w-full flex flex-row justify-between cursor-pointer p-2 ${!isExpanded && "rounded-lg"}`} onClick={() => setIsExpanded(!isExpanded)}>
                <MTypography type='subtitle' text={label ?? ''} />
                {isExpanded ? <MIcon type={iconType.up} variant="secondary" /> : <MIcon type={iconType.down} variant="secondary" />}
            </div>
            <div className={`px-2 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${isExpanded ? " max-h-[1000px]" : "max-h-0"}`}>
                    <div className=" p-4 flex flex-col gap-2">
                        {children}
                    </div>
            </div>
        </div>
    )
}