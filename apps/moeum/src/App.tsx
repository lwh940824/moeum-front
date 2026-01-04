import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './page/category/Category'
import DefaultLayout from './components/layout/DefaultLayout'
import RateCalculator from './page/rateCalculator'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}

        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Category />} />
        </Route>

        <Route element={<DefaultLayout />}>
          <Route path="/rate-calculator" element={<RateCalculator />} />
          <Route path="/category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
