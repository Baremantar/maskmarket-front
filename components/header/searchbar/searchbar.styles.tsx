import styled from "styled-components";

export const SearchField = styled.input`
    &{
        flex-grow: 2;
        outline: none;
        border: none;
        color: #b4b4b4;
        background: transparent;
        font-size: inherit;
        margin: 1rem;
    }
    &::placeholder{
        color: #adadad
    }
`

export const Container = styled.form`
    &{
        display: flex;
        border: 1px solid #6b6b6b;
        border-radius: 2rem;
        min-width: 50%;
        flex-direction: row;
        font-size: large;
        gap: 1rem;
        overflow: hidden;
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
    &:hover{
        background-color: #6b6b6b;
    }
`