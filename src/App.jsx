
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Vieww from './pages/Vieww'
import Pnf from './pages/Pnf'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'



function App() {
  
  
 

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/:id/Vieww' element={<Vieww/>}/>
        <Route path='/*' element={<Pnf/>}/>
        
      </Routes>
      
        <Footer/>
   </>
  )
}

export default App
