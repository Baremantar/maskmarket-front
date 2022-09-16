import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
`

export const Text = styled.strong`
    &{
        color: rgb(241, 100, 30);
        font-variant: small-caps;
        text-transform: capitalize;
        font-size: 20px;
        user-select: none; 
    }
`