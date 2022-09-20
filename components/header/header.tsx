import { Searchbar } from "./searchbar/searchbar"
import { HeaderContainer } from "./header.styles"
import Logo from "./logo/logo"
import NavigationItems from "./itemlist/itemlist"

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Searchbar />
            <NavigationItems />
        </HeaderContainer>
    )
}

export default Header