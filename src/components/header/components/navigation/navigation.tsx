import { LinkButton } from 'components/buttons/linkbuttons/linkbutton'
import { NavigationContainer } from '../navigation.styled'

export const Navigation = () => {
    return (
        <NavigationContainer>
            <LinkButton link="/">Main page</LinkButton>
            <LinkButton link="/market">Market</LinkButton>
            <LinkButton link="/faq">FAQ</LinkButton>
            <LinkButton link="/about">About market</LinkButton>
        </NavigationContainer>
    )
}
