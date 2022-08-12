import {
    HeaderContainer,
    Link,
    NavigationContainer,
    Logo,
    SomeButton,
    PhoneNumberContainer,
    PhoneNumber,
    LoginButton,
    FlexWrapper,
} from './header.styles'

export const Header = () => {
    return (
        <FlexWrapper>
            <HeaderContainer>
                <Logo> Market </Logo>
                <NavigationContainer>
                    <Link to="/A">Dude</Link>
                    <Link to="/B">DudeDude</Link>
                    <Link to="/C">Dude</Link>
                    <Link to="/D">BRUH</Link>
                </NavigationContainer>
                <SomeButton />
                <PhoneNumberContainer>
                    <PhoneNumber href="tel: +797811111111">
                        📞 +7 (978) xxx-xxx-xx
                    </PhoneNumber>
                    <LoginButton />
                </PhoneNumberContainer>
            </HeaderContainer>
        </FlexWrapper>
    )
}
