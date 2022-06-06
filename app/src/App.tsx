import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  )
}

export default App
