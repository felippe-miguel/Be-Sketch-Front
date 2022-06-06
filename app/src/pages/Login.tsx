import LoginForm from "../components/LoginForm";

export default function Login() {
  const handleLogin = (data: {"email": string, "password": string}) => {
    console.log(data)
  }

  return <LoginForm login={handleLogin} />
}