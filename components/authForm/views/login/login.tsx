import { Dispatch, Fragment, FunctionComponent, SetStateAction } from "react"
import { FlexGroup, Form, GoToRegister } from "./login.styles"
import LinkedText from "components/linkedText/linkedText"
import RememberMe from "../../rememberMe/rememberMe"
import TextField from "components/textField/textField"
import { Button } from "components/button/button.styles"

type ViewProps = {
    changeView: Dispatch<SetStateAction<"login" | "register">>
}

const Login: FunctionComponent<ViewProps> = ({ changeView }) => {
    return (


        <Fragment>

            <GoToRegister>
                <div>Login</div>
                <Button onClick={_ => changeView('register')}>
                    Register
                </Button>
            </GoToRegister>

            <Form>
                <TextField
                    autoComplete="email"
                    type="email"
                    name="email"
                    label="Email address"
                />

                <TextField
                    autoComplete="off"
                    type="password"
                    name="password"
                    label="Password"
                />

                <FlexGroup>
                    <RememberMe label="Remember me" name="rememberMe" />
                    <LinkedText link="/restore_passwrd">Forgot password</LinkedText>
                </FlexGroup>

                <Button>Login</Button>

            </Form>

        </Fragment>)
}

export default Login