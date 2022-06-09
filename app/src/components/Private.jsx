import { Navigate } from "react-router-dom"
import { useAuth } from "../services/auth"

export const Private = ({ children }) => {
  const { authenticated, loading } = useAuth()

  if (loading) {
    return <h1>Carregando...</h1>
  }

  if (!authenticated) {
    return <Navigate to='/login' />
  }

  return children
}