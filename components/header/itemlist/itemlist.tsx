import Login from "./login/login"
import { List, ListItem } from "./itemlist.styles"
import Cart from "./cart/cart"

const NavigationItems = () => {
    return (
        <List>
            <ListItem>
                <Login />
            </ListItem>
            <ListItem>
                <Cart />
            </ListItem>
        </List>
    )
}

export default NavigationItems