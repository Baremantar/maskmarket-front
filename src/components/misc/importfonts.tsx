import { createGlobalStyle } from 'styled-components'
import Inter from 'assets/fonts/Inter.ttf'

export const Fonts = createGlobalStyle`
    &{
        @font-face {
            font-family: 'Inter';
            src: url(${Inter});
        }
    }
`
