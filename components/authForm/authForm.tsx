import { SForm, TextArea } from "./authForm.styles"

const AuthForm = () => {
    return (
        <SForm>
            <TextArea />
            <TextArea />
            <button>Login</button>
        </SForm>
    )
}

export default AuthForm