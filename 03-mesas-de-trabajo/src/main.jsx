import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './Header'
import Footer from './Footer'
import Principal from './Principal'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Principal/>
    <Footer/>

  </React.StrictMode>,
)
