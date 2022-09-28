import styled from "styled-components";

export const Button = styled.button`
    &{
        border: none;
        outline: none;
        background: none;
        cursor: pointer;
        text-decoration: underline;
        font-size: 1rem;
        text-underline-offset: 3px;
        font-variant: small-caps;
        text-transform: lowercase;
        padding: 0.8rem;
        border-radius: 2rem;
        transition: 0.2s;
    }
    &:hover {
        background-color: #e5e5e5;
        @media (prefers-color-scheme: dark) {
            background-color: #808080;
        }
    }
`