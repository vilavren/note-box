import { Helmet } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { InitialPage } from './pages/InitialPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <InitialPage />,
    },
  ])

  return (
    <div>
      <Helmet>
        <meta name="theme-color" content="#202020" />
      </Helmet>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
