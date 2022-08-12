import { Navigation } from './components/navigation/navigation'
import { Phone } from './components/phonenumber/phonenumber'
import {
    HeaderContainer,
    Logo,
    SomeButton,
    LoginButton,
    FlexWrapper,
} from './header.styles'

export const Header = () => {
    return (
        <FlexWrapper>
            <HeaderContainer>
                <Logo> Market </Logo>
                <Navigation />
                <SomeButton />
                <Phone />
                <LoginButton />
            </HeaderContainer>
        </FlexWrapper>
    )
}
