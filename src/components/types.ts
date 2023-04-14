import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

export interface inputProps{
    variant?: 'primary' | 'secondary'
    label?: string
    icon?: iconType
    onClick?: () => void
}

export interface containerProps{
    variant?: 'primary' | 'secondary'
    label?: string
    expanded?: boolean
    children?: React.ReactNode
}

export interface typograhpyProps{
    type: 'title' | 'subtitle' | 'header' | 'caption' | 'text'
    text?: string | number
    variant?: 'primary' | 'secondary'
}

export interface ListablePropertyProps{
    name?: string
    icon?: iconType
    value?: string | number
    link?: string
}

export interface iconProps{
    type: iconType
    variant?: 'primary' | 'secondary'
}

export enum iconType {
    up,
    down,
    left,
    right,
    profile,
    experience,
    contact,
    linkedIn,
}
