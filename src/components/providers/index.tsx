import { BrowserRouter } from 'react-router-dom'
import { ProviderType } from './index.types'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'redux/store/store'
import { Layout } from 'components/basicLayout/baseLayour'
import { Theme as ThemeProvider } from './theme/themeprovider'

export const Provider: ProviderType = ({ children }) => {
    return (
        <ReduxProvider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <Layout>{children}</Layout>
                </ThemeProvider>
            </BrowserRouter>
        </ReduxProvider>
    )
}
