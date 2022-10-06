import AuthForm from "components/authForm/authForm"
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector"
import { Fragment, useState, MouseEvent, FormEvent } from "react"
import Modal from "../../../modal/modal"
import { Button } from "./login.styes"

const Login = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const { token } = useAppSelector(state => state.auth)
    function openModal() {
        setModalVisible(true)
    }

    return (
        <Fragment>
            <Modal active={modalVisible} setActive={setModalVisible}>
               <AuthForm />
            </Modal>
            <Button onClick={openModal}>
                Login
            </Button>
        </Fragment>
    )
}

export default Login