import { Navigate } from "react-router-dom"
import { useAuth } from "../services/auth"

export const Private = ({ children }) => {
  const { authenticated } = useAuth()

  console.log(authenticated)
  if (!authenticated) {
    return <Navigate to='/login' />
  }
  console.log('chegou')
  return children
}