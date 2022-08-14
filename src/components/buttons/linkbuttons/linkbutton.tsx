import { Button } from './linkbutton.styles'
import { LinkButtonType } from './linkbutton.types'

export const LinkButton: LinkButtonType = ({ link, children }) => {
    return <Button to={link}>{children}</Button>
}
