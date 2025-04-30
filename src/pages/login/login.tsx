import { Input } from "@components/input/input"
import { Button } from "@components/button/button"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

interface IFormInput {
  email: string
  password: string
}

const schema = z.object({
  email: z.string().email({ message: "Formato de email incorreto" }),
  password: z.string().min(8, { message: "O email precisa ter no mínimo 8 caracteres" }),
})

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: zodResolver(schema) })

  const onSubmit: SubmitHandler<IFormInput> = async (data) => console.log(data)

  const createAccount = () => console.log("Criando a conta...")

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-dvh flex justify-center">
        <div className="p-10 flex-col w-120 border shadow-sm border-gray-200 rounded-md self-center flex gap-5">
          <span className="text-3xl text-center">Bem vindo</span>
          <Input
            placeholder="usuario@email.com"
            label="E-mail"
            error={errors["email"]?.message}
            {...register("email")}
          />
          <Input
            type="password"
            placeholder="************"
            label="Senha"
            error={errors["password"]?.message}
            {...register("password")}
          />
          <Button type="submit">Entrar</Button>
          <Button variant="outline" onClick={createAccount}>
            Criar conta
          </Button>
        </div>
      </div>
    </form>
  )
}
