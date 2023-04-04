import { iconProps, iconType } from '../types'

import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CheckIcon from '@mui/icons-material/Check';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


import React from 'react';


export default function MIcon({type, variant = 'primary'} : iconProps ){
    const cnExtension = `text-${variant}`
    switch(type){
        case iconType.up: return( <ExpandLessIcon className={cnExtension}  />)
        case iconType.down: return(<ExpandMoreIcon className={cnExtension}  /> )
        case iconType.left: return(<ChevronLeftIcon className={cnExtension}  />)
        case iconType.right: return(<ChevronRightIcon className={cnExtension}  />)
        case iconType.profile: return( <PersonIcon className={cnExtension} />)
        case iconType.experience: return( <LibraryBooksIcon className={cnExtension}  />)
        case iconType.contact: return( <AlternateEmailIcon className={cnExtension}  />)
        default: return( <CheckIcon />)
    }
}