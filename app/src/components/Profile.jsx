import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { apiProfile } from "../services/api"
import { useAuth } from "../services/auth"

export const Profile = () => {
  const [data, setData] = useState({ id: null, name: null, email: null })
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    async function getProfileData() {
      const response = await apiProfile()
  
      if (!response.success) {
        alert(`Algo deu errado! ${response.message}`)
        handleLogout()
      }

      setData(response.data)
    }
    getProfileData()
  }, [])

  const handleLogout = () => {
    auth.logout()
    navigate('/login')
  }

  return (
    <>
      <h1>profile</h1>
      <li>id: {data.id}</li>
      <li>name: {data.name}</li>
      <li>email: {data.email}</li>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}