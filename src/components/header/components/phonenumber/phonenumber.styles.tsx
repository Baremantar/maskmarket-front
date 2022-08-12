import styled from 'styled-components'

export const PhoneNumberContainer = styled.div`
    & {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        @media screen and (max-width: 1000px) {
            display: none;
        }
    }
`
export const PhoneNumber = styled.a`
    & {
        font-size: 14px;
    }
`
