import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createRouter } from '@tanstack/react-router'




import './index.css'
import { router } from './router/router'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
      </StrictMode>,
)
