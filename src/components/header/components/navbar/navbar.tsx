import { Cart } from '../cart/cart'
import { Favorites } from '../favorites/favorites'
import { LanguageSelect } from '../languageselect/languageselect'
import { Login } from '../login/login'
import { Navigation } from './navbar.styles'

export const NavBar = () => {
    return (
        <Navigation>
            <li>
                <Login />
            </li>
            <li>
                <LanguageSelect />
            </li>
            <li>
                <Favorites />
            </li>
            <li>
                <Cart />
            </li>
        </Navigation>
    )
}
