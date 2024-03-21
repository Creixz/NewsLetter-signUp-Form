import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NewsLetter from './components/newsLetter/NewsLetter'
import ConfirmEmail from './components/confirmEmail/ConfirmEmail'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewsLetter />} />
        <Route path='/mensaje-enviado' element={<ConfirmEmail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
