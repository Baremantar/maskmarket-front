import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from 'Router/appRouter'
import { Provider } from 'react-redux'
import { store } from 'redux/store/store'
import { Layout } from 'components/basicLayout'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <AppRouter />
            </Layout>
        </BrowserRouter>
    </Provider>
)
