import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (email, password) => {
    setUser({ id: 123, email})
    navigate('/profile')
  }

  const logout = () => {
    setUser(null)
    navigate('/login')
  }

  return <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}