import MTypography from './MTypography'
import { containerProps } from '../types'

export default function MTopNav({children, label} : containerProps){
    return(
        <nav className='flex justify-between p-2 bg-bg-primary shadow-lg mb-4 sticky top-0'>
            <MTypography type='title' text={label}/>
            <div className='flex items-center gap-3'>
                {children}
            </div>

        </nav>
    )
}