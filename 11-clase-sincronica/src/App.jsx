import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/Blogs' element={<Blogs/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='*' element={<NoPage/>}/>
        

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
