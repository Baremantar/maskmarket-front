import Link from "next/link"
import { FunctionComponent } from "react"
import { SLink } from './linkedText.styles'

interface LinkedTextProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    link: string
}

const LinkedText: FunctionComponent<LinkedTextProps> = ({ link, children }) => {
    return (
        <Link href={link}>
            <SLink>
                {children}
            </SLink>
        </Link>
    )
}

export default LinkedText