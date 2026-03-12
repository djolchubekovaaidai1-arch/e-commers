
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import CategoryProducts from './pages/CategoryProducts'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category-products/:id' element={<CategoryProducts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App