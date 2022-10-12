import { FunctionComponent, HTMLInputTypeAttribute, InputHTMLAttributes } from "react"
import { TextArea, Container, Label } from "./textField.styles"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
}

const TextField: FunctionComponent<TextFieldProps> = ({ label, name, ...rest }) => {
    return (
        <Container>
            <Label htmlFor={name}>
                {label}
            </Label>
            <TextArea id={name} name={name} {...rest} />
        </Container >
    )
}

export default TextField