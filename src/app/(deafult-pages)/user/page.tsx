'use client'

import PostsHeader, { account } from '@/components/PostsHeader'
import PostsBody from '@/components/PostsBody'
import Image from 'next/image'
import Followers from '@/components/Followers'
import { useEffect, useState } from 'react'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'

const Page = () => {
  const [session, setSession] = useState<Session | null>(null)
  const [account, setAccount] = useState<null | account>(null)

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession()
      setSession(session)
    }

    fetchSession()

    const account = JSON.parse(window.localStorage.getItem('account')!)
    setAccount(account)
  }, [])

  return (
    <main className="bg-[#3937a1] pb-8 lg:pb-0 pt-16">
      <Image
        src="/dark-waves.svg"
        alt="Logo"
        width={0}
        height={0}
        className="w-full"
        priority={false}
      />

      <div className="lg:relative lg:top-[-100px] xl:top-[-350px] lg:mx-24 3xl:mx-0">
        <PostsHeader
          googleAccount={session?.user}
          yourPosts={true}
        />
        <div className="flex flex-col lg:flex-row container mx-auto h-screen">
          {account || session?.user ? (
            <>
              <div className="w-full lg:w-[40%] xl:w-[50%]">
                <Followers yourAccount={true} />
              </div>

              <div className="w-full lg:w-[60%] xl:w-[50%]">
                <PostsBody className="lg:rounded-l-none rounded-br-2xl" />
              </div>
            </>
          ) : (
            <h2 className="text-2xl text-center text-white py-5">
              Tem que estar logado para acessar o seu perfil
            </h2>
          )}
        </div>
      </div>
    </main>
  )
}

export default Page
