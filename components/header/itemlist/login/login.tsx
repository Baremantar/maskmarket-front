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
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }} onSubmit={e => e.preventDefault()}>
                    <input />
                    <input />
                    <button>Login</button>
                </form>
            </Modal>
            <Button onClick={openModal}>
                Login
            </Button>
        </Fragment>
    )
}

export default Login