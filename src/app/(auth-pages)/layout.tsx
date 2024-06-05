import { ReactNode } from 'react'
import Image from 'next/image'

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="mx-auto max-h-fit min-h-screen grid-cols-2 lg:grid flex flex-col-reverse">
      <div className="container mx-auto max-h-fit bg-[#a2b5f7] py-12">
        {children}
      </div>
      <div className="items-center justify-center flex-col pt-20 flex bg-gradient-to-b from-[#0e112c] to-[#3b39a7]">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={200}
          height={200}
          className="w-[200px] md:w-[400px]"
          priority={true}
        />
        <Image
          src="/dark-waves.svg"
          alt="Logo"
          width={0}
          height={0}
          className="w-full"
          priority={false}
        />
      </div>
    </div>
  )
}

export default Layout
