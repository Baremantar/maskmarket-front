import styled from 'styled-components'

export const StyledFooter = styled.footer`
    & {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 72px 175px;
        background-color: #d6d6d6;

        @media screen and (max-width: 1000px) {
            flex-direction: column;
            padding: 0px;
            padding: 1rem 12px;
            justify-content: baseline;
            align-items: center;
            gap: 24px;
        }
    }
`
