import ClientOnlyPortal from "components/clientOnlyPortal"
import { FC, Fragment, ReactNode, MouseEvent, Dispatch, SetStateAction } from "react"
import { Background, Container } from "./modal.styles"

type ModalPropsType = {
    children: ReactNode
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<ModalPropsType> = ({ children, active, setActive }) => {
    return active ? (
        <ClientOnlyPortal selector="modal">
            <Background onClick={() => { setActive(false) }}>
                <Container onClick={e => { e.stopPropagation() }}>
                    {children}
                </Container>
            </Background>
        </ClientOnlyPortal>
    ) : null
}

export default Modal