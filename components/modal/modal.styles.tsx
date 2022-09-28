import styled from "styled-components";

export const Background = styled.div`
    &{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0, 0.4);
    }
`

export const Container = styled.div`
    &{
        pointer-events: all;
        background-color: white;
        padding: 1rem;
        border-radius: 1rem;
        @media (prefers-color-scheme: dark) {
            background-color: black;
        }
    }
`