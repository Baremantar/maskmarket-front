import styled from 'styled-components'

export const Container = styled.div`
    &{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        font-size: 20px;
        color: rgb(241, 100, 30);
        transition: 0.5s;
    }
    &:hover{
        color: rgb(255, 157, 37);
        text-shadow: 0px 0px 20px rgb(241, 100, 30);
    }
`

export const Text = styled.strong`
    &{
        font-variant: small-caps;
        text-transform: capitalize;
        user-select: none; 
    }
`