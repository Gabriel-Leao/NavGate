'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { handleInputChange } from '@/common/handleInputChange'
import InputContainer from '@/components/InputContainer'
import Button from '@/components/Buttons'
import GoogleButton from '@/components/Buttons/GoogleButton'

const Login = () => {
  const router = useRouter()
  const [isFormValid, setIsFormValid] = useState(false)
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    email: '',
    password: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      formData.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
      formData.password !== ''
    ) {
      window.localStorage.setItem('account', JSON.stringify(formData))
      window.alert('Login efetuado com sucesso')
      router.back()
    }
  }

  const handleFormChange = () => {
    const isEmailValid = formData.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    const isPasswordValid = formData.password !== ''
    setIsFormValid(!!isEmailValid && isPasswordValid)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl uppercase md:text-6xl">bem-vindo!</h1>
      <form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        className="flex flex-col items-center justify-center gap-y-4 pt-16 pb-7 lg:pt-40">
        <InputContainer
          id="email"
          label="Email:"
          type="email"
          value={formData.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, formData, setFormData)
          }
          placeholder="Digite o seu email"
        />

        <InputContainer
          id="password"
          label="Senha:"
          type="password"
          value={formData.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, formData, setFormData)
          }
          placeholder="Digite a sua senha"
        />

        <Button
          type="submit"
          disabled={!isFormValid}
          className="p-2 text-center text-white rounded-[10px] w-[201px] h-[54px] mt-4">
          Entrar
        </Button>
        <GoogleButton />
      </form>
      <p className="text-center uppercase">
        não tem login?{' '}
        <Link
          href="/signup"
          className="underline uppercase">
          clique aqui!
        </Link>
      </p>
    </div>
  )
}

export default Login
