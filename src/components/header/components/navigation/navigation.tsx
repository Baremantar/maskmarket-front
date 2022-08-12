import { Link, NavigationContainer } from '../navigation.styled'

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Link to="/">Главная</Link>
            <Link to="/market">Магазин</Link>
            <Link to="/faq">ЧаВо</Link>
            <Link to="/about">О магазине</Link>
        </NavigationContainer>
    )
}
