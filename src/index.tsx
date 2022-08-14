import { createRoot } from 'react-dom/client'
import { AppRouter } from 'Router/appRouter'
import { StylesReset } from 'components/stylesReset'
import { Provider } from 'components/providers'
import { Fonts } from 'components/misc/importfonts'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider>
        <StylesReset />
        <Fonts />
        <AppRouter />
    </Provider>
)
