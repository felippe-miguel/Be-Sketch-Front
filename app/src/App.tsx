import {useQuery} from "react-query"
import axios from "axios"

type Profile = {
  "id": number,
  "name": string,
  "email": string
}

function App() {
  const { data: profile, isFetching } = useQuery<Profile>("profile", async () => {
    const response = await axios.get("http://localhost:8080/api/profile")

    return response.data
  })

  return (
    <>
      { isFetching && <p>Carregando...</p> }
      <h1>Nome: {profile?.name}</h1>
      <p>id: {profile?.id}</p>
      <p>email: {profile?.email}</p>
    </>
  )
}

export default App
