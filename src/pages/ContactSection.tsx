import MIcon from "@/components/mComponents/MIcon";
import MListableProperty from "@/components/mComponents/MListableProperty";
import MTypography from "@/components/mComponents/MTypography";
import { iconType } from "@/components/types";

export default function ContactSection(){
    return(
        <div className=" max-w-md w-full">
            <MTypography type="title" text="contact information" />
            <div className="bg-secondary rounded-lg shadow-lg max-w-md p-4 bg-gradient-to-t from-secondary to-bg-white w-full">
                <MListableProperty name="Phone" value="+47 918 44 862"/>
                <MListableProperty name="E-mail" value="suvatnemarius@gmail.com" />
                <MListableProperty icon={iconType.linkedIn} value="marius-suvatne" link="https://www.linkedin.com/in/marius-suvatne-8698ba182/"/>
            </div>
        </div>
    )
}