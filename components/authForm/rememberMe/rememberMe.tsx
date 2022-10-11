import { FunctionComponent, InputHTMLAttributes } from "react"
import { CheckBox, Container, Label } from "./rememberMe.styles"

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
}

const RememberMe: FunctionComponent<CheckBoxProps> = ({ label, name }) => {
    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            <CheckBox type={'checkbox'} id={name} />
        </Container>
    )
}

export default RememberMe