import { useState } from "react"
import { Input } from "@components/input/input"
import { Button } from "@components/button/button"

export const Login = () => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const credentials = {
    email,
    password,
  }

  return (
    <div className="h-dvh flex justify-center">
      <div className="p-10 flex-col w-120 border shadow-sm border-gray-200 rounded-md self-center flex gap-5">
        <span className="text-3xl text-center">Bem vindo</span>
        <Input placeholder='usuario@email.com' label="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <Input type='password' placeholder='********' label="Senha" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={() => console.log(credentials)}>Entrar</Button>
        <Button variant="outline" onClick={() => console.log(credentials)}>
          Criar conta
        </Button>
      </div>
    </div>
  )
}
