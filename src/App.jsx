import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import Products from './pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
