import styled from "styled-components";
import Cart from './cart.svg'

export const SCart = styled(Cart)`
    &{
        display: block;
        user-select: none;
        cursor: pointer;
        filter: invert(0%) sepia(98%) saturate(0%) hue-rotate(22deg) brightness(99%) contrast(100%);
        @media (prefers-color-scheme: dark) {
            filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(239deg) brightness(105%) contrast(101%);
        }
        transition: 0.3s;
    }
    &:hover {
        transform: scale(110%);
    }
     &:active {
        transform: scale(90%);
    }
`