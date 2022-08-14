import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Button = styled(NavLink)`
    & {
        font-size: 18px;
        text-decoration: underline;
        font-weight: 400;
        font-family: 'Inter';
    }
    &:hover {
        font-weight: 600;
    }
`
