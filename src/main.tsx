import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'

import App from './App.tsx'
import { store } from './store/store.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </HelmetProvider>
)
