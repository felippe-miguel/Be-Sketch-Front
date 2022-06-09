import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { Private } from './components/Private'
import { AuthProvider } from './services/auth'

const App = () => (
  <BrowserRouter>
    <AuthProvider>
        <Routes>
          <Route path='login' element={ <Login /> } />
          <Route path='profile' element={ <Private><Profile /></Private> } />
        </Routes>
    </AuthProvider>
  </BrowserRouter>
)

export default App
