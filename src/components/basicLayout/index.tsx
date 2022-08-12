import { Footer } from 'components/footer/footer'
import { Header } from 'components/header'
import { FC, ReactNode } from 'react'
import { Container } from './styled'

interface ILayout {
    children: ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    )
}
