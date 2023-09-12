import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CounterProvider from './Context'
import Counter from "./Counter"


ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <Counter/>
    
    <App/>
  </CounterProvider>
)
