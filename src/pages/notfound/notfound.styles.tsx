import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
export const Container = styled.main`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 24px;
        flex: 1 1 auto;
    }
`
export const Link = styled(NavLink)`
    & {
        font-size: 24px;
        text-decoration: underline;
    }
`
