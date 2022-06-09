import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../services/auth"

export const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.authenticated) {
      navigate('/profile')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    auth.login(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        email:
        <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        password:
        <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit"> login </button>
    </form>
  )
}