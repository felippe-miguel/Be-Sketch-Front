import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    setUser({ id: 123, email})
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}