import './App.css'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
  )
}

export default App
