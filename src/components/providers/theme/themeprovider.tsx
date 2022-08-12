import { ThemeProvider } from 'styled-components'
import { ProviderType } from '../index.types'

const theme = {
    dark: '#000',
    white: '#fff',
}

export const Theme: ProviderType = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
