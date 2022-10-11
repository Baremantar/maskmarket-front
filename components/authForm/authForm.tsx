import Link from "next/link"
import { Form } from "./authForm.styles"
import RememberMe from "./rememberMe/rememberMe"
import TextField from "./textField/textField"

const AuthForm = () => {
    return (
        <>
            <h4>
                Register
            </h4>
            <Form>
                <TextField autoComplete="email" type="email" name="email" label="Email address" />
                <TextField autoComplete="off" type="password" name="password" label="Password" />

                <RememberMe label="Remember me" name="rememberMe" />

                <Link href={'/password_restore'}>
                    <a>
                        Forgot password
                    </a>
                </Link>
                <button>Login</button>
            </Form>
        </>
    )
}

export default AuthForm