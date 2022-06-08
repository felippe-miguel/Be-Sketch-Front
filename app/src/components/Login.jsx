import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../services/auth"

export const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSubimit = (e) => {
    e.preventDefault()

    auth.login(user)
    navigate("profile")
  }

  return (
    <form>
      <label>
        email:
        <input type='email' onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        password:
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit" onSubmit={handleSubimit}> login </button>
    </form>
  )
}