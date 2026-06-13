import './css/styles.css'
import NavBar from './components/NavBar'
import ProductosContainer from './components/ProductosContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import ProductoDetailContainer from './components/ProductoDetailContainer'
import CartContainer from './components/CartContainer'
import CheckoutForm from './components/CheckoutForm'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path='/' element={<ProductosContainer />} />
              <Route path='/category/:type' element={<ProductosContainer />} />
              <Route path='/item/:id' element={<ProductoDetailContainer />} />
              <Route path='/cart' element={<CartContainer />} />
              <Route path='/checkout' element={<CheckoutForm />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
