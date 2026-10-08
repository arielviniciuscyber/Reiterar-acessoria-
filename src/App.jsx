import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login/Login"
import Painel from "./pages/Painel/Painel"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/painel" element={<Painel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App