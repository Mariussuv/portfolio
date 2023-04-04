import MTypography from "../components/mComponents/MTypography";
import Image from "next/image";
import pp from '../../public/pp.jpg'
import { hobbyImages } from "@/utils/images";
import HobbySlider from "@/components/custom/HobbySlider";

export default function AboutSection(){

  const hobbies = hobbyImages()

    return(
      <div className=" relative max-w-md w-full">
        <MTypography type='title' text='about me' variant='secondary'/>
        <div className=" bg-secondary rounded-lg shadow-sm flex justify-between max-w-md p-4 bg-gradient-to-t from-secondary to-bg-white">
            <div className='p-2 w-1/2'>
                <MTypography type='subtitle' text='Marius Suvatne' variant='primary'/>
                <MTypography type='caption' text='Software Developer'/>
                <MTypography type='text' text='Marius is a software engineer working for Capgemini Norway. '/>
          </div>
          <div className=" w-1/2 m-4">
            <Image className=" rounded-full" src={pp} alt={""}/>
          </div>
        </div>
        <div className=" absolute w-full bottom-28">
          <MTypography type='title' text='things i also do' variant='secondary'/>
          <HobbySlider hobbies={hobbies} />
        </div>

      </div>
    )
}