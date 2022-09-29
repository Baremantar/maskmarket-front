import { ReactNode, FunctionComponent } from "react"
import { ThemeProvider } from "styled-components"

type ProvidersPropsType = {
    children: ReactNode
}
// 'rgb(214, 214, 214)'
export const theme = {
    dark: {
        text: 'orange',
        background: 'rgb(54, 54, 54)'
    },
    light: {
        text: '#000',
        background: '#fff'
    }
}

const Providers: FunctionComponent<ProvidersPropsType> = ({children}) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Providers