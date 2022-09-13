import { appConfig } from 'config/appConfig'
import { LogoContainer, Text } from './logo.styles'

export const Logo = () => {
    return (
        <LogoContainer>
            <Text>{appConfig.marketName}</Text>
        </LogoContainer>
    )
}
