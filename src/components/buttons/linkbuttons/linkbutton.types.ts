import { FunctionComponent } from 'react'

interface LinkPropsType {
    link: string
    children?: string
}

export type LinkButtonType = FunctionComponent<LinkPropsType>
