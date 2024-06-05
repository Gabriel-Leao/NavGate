'use client'

import Button from '@/components/Buttons'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const GoogleButton = () => {
  return (
    <Button
      onClick={() => signIn('google', { callbackUrl: '/home' })}
      className="py-3 w-[201px] h-[58px] rounded-2xl flex justify-center">
      <Image
        src="/google-icon.svg"
        alt="Letra G do google branco"
        width={30}
        height={30}
      />
    </Button>
  )
}

export default GoogleButton
