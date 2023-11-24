import { Helmet } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MainLayout } from './components/layout/MainLayout'
import { AuthProvider } from './components/providers/AuthProvider'
import { DocumentsPage } from './pages/DocumentsPage'
import { InitialPage } from './pages/InitialPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <InitialPage />,
    },
    {
      path: '/documents',
      element: <MainLayout />,
      children: [
        {
          element: <DocumentsPage />,
          index: true,
        },
      ],
    },
  ])

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#202020" />
      </Helmet>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
