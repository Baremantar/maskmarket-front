import styled from "styled-components";

export const SCart = styled.div`
    &{
        user-select: none;
        cursor: pointer;
        // filter: invert(0%) sepia(98%) saturate(0%) hue-rotate(22deg) brightness(99%) contrast(100%);
        @media (prefers-color-scheme: dark) {
           // filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(239deg) brightness(105%) contrast(101%);
        }
        transition: 0.3s;
        pointer-events: auto;
    }
    &:hover {
        transform: scale(110%);
    }
     &:active {
        transform: scale(90%);
    }
    & svg>path{
        fill: black;
        @media (prefers-color-scheme: dark) {
            fill: white;
        }
    }
`

export const SVG = styled.div`
    &>svg>path{
        fill: red;
    }
`