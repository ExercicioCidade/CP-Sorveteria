import Footer from './components/Footer'
import Cards from './components/Cards'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
