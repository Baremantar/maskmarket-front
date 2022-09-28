import { Fragment, useState, MouseEvent } from "react"
import Modal from "../../../modal/modal"
import { Button } from "./login.styes"

const Login = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    function openModal() {
        setModalVisible(true)
    }
    return (
        <Fragment>
            <Modal active={modalVisible} setActive={setModalVisible}>
                Hello, world!
            </Modal>
            <Button onClick={openModal}>
                Login
            </Button>
        </Fragment>
    )
}

export default Login