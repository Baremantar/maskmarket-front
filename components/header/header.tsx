import { Searchbar } from "./searchbar/searchbar"
import { HeaderContainer } from "./header.styles"
import Logo from "./logo/logo"

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Searchbar />
        </HeaderContainer>
    )
}

export default Header