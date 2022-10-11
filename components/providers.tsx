import { ReactNode, FunctionComponent } from "react"
import { ThemeProvider } from "styled-components"
import { Provider } from 'react-redux'
import store from "redux/store"

type ProvidersPropsType = {
    children: ReactNode
}
// 'rgb(214, 214, 214)'
export const theme = {
    dark: {
        text: 'rgb(214, 214, 214)',
        background: 'rgb(54, 54, 54)'
    },
    light: {
        text: '#000',
        background: '#fff'
    }
}

const Providers: FunctionComponent<ProvidersPropsType> = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Provider>
    )
}

export default Providers