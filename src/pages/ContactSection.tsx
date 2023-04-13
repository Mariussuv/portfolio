import MTypography from "@/components/mComponents/MTypography";

export default function ContactSection(){
    return(
        <>
            <div className="bg-secondary rounded-lg shadow-lg flex justify-between max-w-md p-4 bg-gradient-to-t from-secondary to-bg-white w-full">
                <div className="flex justify-between w-full border-primary border-b-2">
                    <MTypography type="caption" text="Phone" />
                    <MTypography type="text" text="+47 918 44 862" />
                </div>
            </div>
        </>
    )
}