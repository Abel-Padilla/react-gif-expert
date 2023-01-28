import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //El modo esctricto ayuda a detectar cualquier problema de el ciclo de vida de componentes
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
