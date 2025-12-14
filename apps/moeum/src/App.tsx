import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './page/category/Category'
import DefaultLayout from './components/layout/DefaultLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}

        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Category />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
