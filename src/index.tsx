import { createRoot } from 'react-dom/client'
import { Landing } from './pages/Landing'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<Landing></Landing>)
