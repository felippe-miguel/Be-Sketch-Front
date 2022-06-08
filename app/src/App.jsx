import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { AuthProvider } from './services/auth'

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='login' element={ <Login /> } />
        <Route path='profile' element={ <Profile /> } />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
)

export default App
