import styled from 'styled-components'

export const Bubble = styled.div`
    & {
        flex-shrink: 0;
        border-radius: 50%;
        background-color: white;
        width: 255px;
        height: 255px;
        margin-right: 24px;

        @media screen and (max-width: 1000px) {
            width: 128px;
            height: 128px;
        }
    }
`
