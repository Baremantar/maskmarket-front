import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    & {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 60px;
    }
`

export const Block = styled.div`
    & {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

export const BlockTitle = styled.h1`
    & {
        font-size: 20px;
    }
`

export const BlockPagesNavigation = styled.div`
    & {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`

export const BlockLink = styled(NavLink)`
    & {
        font-family: 'Inter';
        font-size: 15px;
        line-height: 1.4rem;
        letter-spacing: 0.05rem;
    }
`
export const ContactsItem = styled.span`
    & {
        font-family: 'Inter';
        font-size: 15px;
        line-height: 1.4rem;
        letter-spacing: 0.05rem;
    }
`

export const NavigationWrapper = styled.div`
    display: flex;
    gap: 50px;
`

export const PhoneNumber = styled.a`
    & {
        font-size: 15px;
        font-weight: bold;
    }
`
