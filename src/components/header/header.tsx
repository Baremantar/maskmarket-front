import { Logo } from './components/logo/logo'
import { NavBar } from './components/navbar/navbar'
import { Searchbar } from './components/searchbar/searchbar'
import { HeaderContainer } from './header.styles'

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Searchbar />
            <NavBar />
        </HeaderContainer>
    )
}
