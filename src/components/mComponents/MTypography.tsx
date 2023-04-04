import { typograhpyProps } from "../types";

export default function MTypography({type, text, variant} : typograhpyProps){
    switch(type){
        case 'title': return(
            <h1 className={`font-burtons text-3xl p-2 ${variant == 'primary' ? " text-primary" : " text-secondary"}`} >{text}</h1>
        )
        case 'subtitle': return(
            <h2 className={` uppercase text-xl ${variant == 'primary' ? " text-primary" : " text-secondary"}`} >{text}</h2>
        )
        case 'caption': return(
            <p className=" text-sm opacity-60" >{text}</p>
        )
        case 'text' : return(   
            <p>{text}</p>
        )
        default: return(
            <p>{text}</p>
        )
    }
}