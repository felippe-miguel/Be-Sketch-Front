import { useNavigate } from "react-router-dom"
import { useAuth } from "../services/auth"

export const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/login')
  }

  return (
    <>
      <h1>profile</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}