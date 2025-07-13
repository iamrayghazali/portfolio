import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react'
import {GitHubProvider} from "@/context/GithubContext";

createRoot(document.getElementById('root')!).render(
    <GitHubProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </GitHubProvider>
)
