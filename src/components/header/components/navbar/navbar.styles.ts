import styled from 'styled-components'

export const Navigation = styled.nav`
    & {
        margin-left: 12px;
        display: flex;
        flex-direction: row;
        text-align: none;
        gap: 6px;
    }
    & li::marker {
        display: none;
        content: '';
    }
`
