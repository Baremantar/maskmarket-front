import { Fragment, useState, MouseEvent, FormEvent } from "react"
import Modal from "../../../modal/modal"
import { Button } from "./login.styes"

const Login = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    function openModal() {
        setModalVisible(true)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify({ username: 'hello', password: 'world' }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            })
        }).then(data => data.json()).then(data => console.log(data))
    }

    return (
        <Fragment>
            <Modal active={modalVisible} setActive={setModalVisible}>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}
                    onSubmit={handleSubmit}>
                    <input />
                    <input />
                    <button type="submit">Login</button>
                </form>
            </Modal>
            <Button onClick={openModal}>
                Login
            </Button>
        </Fragment>
    )
}

export default Login