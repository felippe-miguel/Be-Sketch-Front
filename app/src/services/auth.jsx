import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const login = (email, password) => {
    // api

    const loggedUser = {
      id: '123',
      email
    }

    localStorage.setItem('user', JSON.stringify(loggedUser))

    setUser({ id: 123, email})
    navigate('/profile')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
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