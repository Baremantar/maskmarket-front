import styled from "styled-components";

export const SearchField = styled.input`
    &{
        flex-grow: 2;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
        font-size: inherit;
        margin: 1rem;
    }
    &::placeholder{
        color: #adadad
    }
`

type ContainerPropsType = {
    focused: boolean
}

export const Container = styled.form<ContainerPropsType>`
    &{
        display: flex;
        border: 2px solid black;
        border-radius: 2rem;
        min-width: 50%;
        flex-direction: row;
        font-size: large;
        gap: 1rem;
        overflow: hidden;
        @media (prefers-color-scheme: dark) {
            border-color: #6b6b6b;
        }
        background-color: ${props => { return props.focused === true ? 'transparent' : 'rgba(34, 34, 34, 0.05);' }};
        transition: 0.5s;
    }
`

export const Button = styled.button`
    &{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: large;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        padding: 0px 1rem;
        transition: 0.2s ease-out;
    }
    &:hover, &:focus{
        background-color: #e5e5e5;
    }
`