import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './page/category/Category'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
