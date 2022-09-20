import { Login } from "../login/login"
import { List, ListItem } from "./itemlist.styles"

const NavigationItems = () => {
    return (
        <List>
            <ListItem>
                <Login />
            </ListItem>
        </List>
    )
}

export default NavigationItems