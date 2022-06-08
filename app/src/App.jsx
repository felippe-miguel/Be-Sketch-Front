import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={ <Login /> } />
      <Route path='/profile' element={ <Profile /> } />
    </Routes>
  </BrowserRouter>
)

export default App
