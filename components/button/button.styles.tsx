import styled from "styled-components";

export const Button = styled.button`
        &{
        color: #222222;
        padding: 0.5rem;
        border: 2px solid #222222;
        border-radius: 24px;
        font-weight: bold;
        text-align: center;
        vertical-align: middle;
        line-height: 1.4;
        cursor: pointer;
        background-color: transparent;
        transition: transform 200ms cubic-bezier(0.345, 0.115, 0.135, 1.42),background 150ms ease-out,box-shadow 200ms ease-out;
    }
    &:hover{
        transform: scale(1.035);
        color: #363e96;
        box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);
    }
`