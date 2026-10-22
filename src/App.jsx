import Footer from './components/Footer'
import Cards from './components/Cards'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
