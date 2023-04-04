import MTypography from "../mComponents/MTypography";

export interface hobbyProps{
    title: string,
    illustration: string,
}

export default function HobbyCard({title, illustration } : hobbyProps){
    return(
        <div className=" bg-secondary rounded-lg shadow-sm flex flex-col justify-between max-w-md">
            <img className=" h-40 w-full object-cover rounded-t-md" src={illustration} />
            <div className="m-4">
                <MTypography type='subtitle' variant='primary' text={title} />
            </div>
        </div>
    )
}