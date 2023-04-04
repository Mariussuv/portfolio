import MIcon from './MIcon'
import {inputProps} from '../types'

export default function MButton({variant, label, icon, onClick}: inputProps){

    const cnExtension = variant == 'primary' ? "transition ease-in-out delay-150 bg-primary text-secondary hover:bg-primaryhighlight" : "bg-secondary border-2 "
    
    return(
        <div className={`px-4 py-2 rounded-lg cursor-pointer shadow-md flex flex-row ${cnExtension}`} onClick={onClick}>
            {label && <h1>{label}</h1>}
            {icon && <div><MIcon type={icon} variant={variant == 'primary' ? 'secondary' : 'primary'} /></div>}
        </div> 
    )
}