import { Dispatch, FC, MouseEvent, ReactNode, SetStateAction } from 'react'
import { Container, ModalWindow } from './modal.styles'

interface IModal {
    children: ReactNode
    isActive: boolean
    setIsActive: Dispatch<SetStateAction<boolean>>
}

export const Modal: FC<IModal> = ({ children, isActive, setIsActive }) => {
    function handleHideModal() {
        setIsActive(false)
    }
    function handleStopPropagation(event: MouseEvent) {
        event.stopPropagation()
    }
    return (
        <Container isActive={isActive} onClick={handleHideModal}>
            <ModalWindow onClick={handleStopPropagation}>
                {children}
            </ModalWindow>
        </Container>
    )
}
