import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationContainer = styled.nav`
    & {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 2rem;

        @media screen and (max-width: 1000px) {
            display: none;
        }
    }
`

export const Link = styled(NavLink)`
    & {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: underline;
    }
`
