import Link from "next/link";
import { ListablePropertyProps } from "../types";
import MIcon from "./MIcon";
import MTypography from "./MTypography";

export default function MListableProperty({name, icon, value, link}: ListablePropertyProps){
    return(
        <div className="flex justify-between w-full border-primary border-b-2 my-2">
                    {icon ? <MIcon type={icon}/> :  <MTypography type="caption" text={name} />}
                    {link ? <Link href={link}>{value}</Link> : <MTypography type="text" text={value ?? ''} />}
                </div>
    )
}