import { Searchbar } from "./searchbar/searchbar"
import { HeaderContainer } from "./header.styles"
import Logo from "./logo/logo"
import { Login } from "./login/login"

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Searchbar />
            <Login />
        </HeaderContainer>
    )
}

export default Header