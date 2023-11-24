import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'

import App from './App.tsx'
import { ThemeProvider } from './components/providers/ThemeProvider.tsx'
import { store } from './store/store.ts'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </ThemeProvider>
)
