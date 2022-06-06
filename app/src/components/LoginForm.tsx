import React, { useState } from "react"

export default function LoginForm({ login }: { "login": Function }) {
  const [data, setData] = useState({email: "", password: ""})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    login(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-inner"></div>
        <h2>Login</h2>
        {/*  ERROR */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={e => setData({ ...data, "email": e.target.value })} value={data.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={e => setData({ ...data, "password": e.target.value })} value={data.password}
          />
        </div>
        <input type="submit" value="login" />
      </form>
    </div>
  )
}