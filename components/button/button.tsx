import { DOMAttributes, FunctionComponent } from 'react'
import { Button as StyledButton } from './button.styles'

interface ButtonProps extends DOMAttributes<HTMLButtonElement> {

}

const Button: FunctionComponent<ButtonProps> = ({ children }) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button