'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { handleInputChange } from '@/common/handleInputChange'
import InputContainer from '@/components/InputContainer'
import Button from '@/components/Buttons'
import GoogleButton from '@/components/Buttons/GoogleButton'

const Signup = () => {
  const router = useRouter()

  const [isFormValid, setIsFormValid] = useState(false)
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    birth: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      formData.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
      formData.password !== '' &&
      formData.repeatPassword === formData.password &&
      formData.name.match(
        /^([A-Za-zÀ-ÖØ-öø-ÿ]{3,})( [A-Za-zÀ-ÖØ-öø-ÿ]{2,})*$/u
      ) &&
      formData.birth.match(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)
    ) {
      window.localStorage.setItem('account', JSON.stringify(formData))
      window.alert('Cadastro realizado com sucesso!')
      router.back()
    }
  }

  const handleFormChange = () => {
    if (
      formData.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
      formData.password !== '' &&
      formData.repeatPassword === formData.password &&
      formData.name.match(
        /^([A-Za-zÀ-ÖØ-öø-ÿ]{3,})( [A-Za-zÀ-ÖØ-öø-ÿ]{2,})*$/u
      ) &&
      formData.birth.match(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)
    ) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl uppercase md:text-6xl">
        cadastre-se
      </h1>
      <form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        className="flex flex-col items-center justify-center gap-y-4 pt-16 pb-7 lg:pt-40">
        <InputContainer
          id="name"
          label="Nome:"
          type="text"
          value={formData.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, formData, setFormData)
          }
          placeholder="Digite o seu nome"
        />

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

        <InputContainer
          id="repeatPassword"
          label="Senha:"
          type="password"
          value={formData.repeatPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, formData, setFormData)
          }
          placeholder="Repita a sua senha"
        />

        <InputContainer
          id="birth"
          label="Nascimento:"
          type="text"
          value={formData.birth}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, formData, setFormData)
          }
          placeholder="Digite a sua data de nascimento"
        />

        <Button
          type="submit"
          disabled={isFormValid}
          className="text-white p-2 text-center rounded-[10px] w-[201px] h-[54px] mt-4">
          Cadastrar
        </Button>
        <GoogleButton />
      </form>
      <p className="text-center uppercase">
        já tem login?{' '}
        <Link
          href="/login"
          className="underline uppercase">
          clique aqui!
        </Link>
      </p>
    </div>
  )
}

export default Signup
