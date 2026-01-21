import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './page/category/Category'
import DefaultLayout from './components/layout/DefaultLayout'
import RateCalculator from './page/rateCalculator'
import Login from './page/Login/Login'
import GoogleCallback from './page/googleCallback/GoogleCallback'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/oauth2/callback" element={<GoogleCallback />} />

        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Category />} />
          <Route path="/rate-calculator" element={<RateCalculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
