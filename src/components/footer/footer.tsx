import { FooterBubble } from './components/bubble/bubble'
import { FooterNavigation } from './components/navigation/navigation'
import { StyledFooter } from './footer.styles'

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterBubble />
            <FooterNavigation />
        </StyledFooter>
    )
}
