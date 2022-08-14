import styled from 'styled-components'

export const FlexWrapper = styled.div`
    & {
        width: 100vw;
        display: flex;
        justify-content: center;
    }
`

export const HeaderContainer = styled.header`
    & {
        margin: 2.5vh;
        display: flex;
        width: 100%;
        max-width: 1200px;
        justify-content: space-around;

        @media screen and (max-width: 1000px) {
            justify-content: space-between;
            padding: 0px 1rem;
        }
    }
`

export const Logo = styled.div`
    display: flex;
    background-color: #898989;
    color: white;
    font-weight: 600;
    font-size: 20px;
    padding: 1rem 1.5rem;
    border-radius: 16px;
    font-variant: small-caps;
    text-transform: uppercase;
`

export const SomeButton = styled.button`
    & {
        background-color: #c7c7c7;
        width: 48px;
        height: 48px;
    }
`

export const LoginButton = styled.button`
    & {
        width: 32px;
        height: 32px;
        background-color: #1e1e1e;
    }
`
