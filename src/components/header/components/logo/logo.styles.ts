import styled from 'styled-components'

export const LogoContainer = styled.div`
    & {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Text = styled.strong`
    & {
        font-size: calc((100vw - 320px) / (1280 - 320) * (24 - 16) + 16px);
        font-variant: small-caps;
        color: rgb(241, 100, 30);
    }
`
