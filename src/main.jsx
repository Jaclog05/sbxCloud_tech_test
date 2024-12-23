import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/authContext.jsx'
import { CocktailProvider } from './context/CocktailContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CocktailProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CocktailProvider>
    </AuthProvider>
  </StrictMode>,
)
