import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './route/router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Components/Auth/AuthProvider.jsx'
import { HelmetProvider } from '@dr.pogodin/react-helmet'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
