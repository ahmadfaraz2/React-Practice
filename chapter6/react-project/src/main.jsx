import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App, About, Contact } from "./App.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />}/>
    </Routes>
  </BrowserRouter>
)
