import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "./api";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }

    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const response = await apiLogin(email, password)

    if (!response.success) {
      alert("Login inválido")
      return
    }

    const loggedUser = {
      id: response.data.id,
      email
    }

    localStorage.setItem('user', JSON.stringify(loggedUser))
    localStorage.setItem('access_token', response.data.access_token)

    setUser(loggedUser)
    navigate('/profile')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('access_token')
    navigate('/login')
  }

  return <AuthContext.Provider value={{
    authenticated: !!user,
    loading,
    user,
    login,
    logout
  }}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}