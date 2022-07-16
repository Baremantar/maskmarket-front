import styled from 'styled-components'

interface IContainerProps {
    isActive: boolean
}

export const Container = styled.div<IContainerProps>`
    & {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        opacity: ${props => {
            return props.isActive === true ? 1 : 0
        }};
        pointer-events: ${props => {
            return props.isActive === true ? 'all' : 'none'
        }};
    }
    transition: 0.5s;
`

export const ModalWindow = styled.div`
    & {
        background-color: white;
        padding: 1rem;
        border-radius: 1rem;
    }
`
