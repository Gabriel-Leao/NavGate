import Image from 'next/image'
import Button from '@/components/Buttons'

const Page = () => {
  return (
    <div className="pt-32 bg-gradient-to-b from-[#242366] to-[#9d7b45] h-fit min-h-screen">
      <div className="flex flex-col justify-between h-screen">
        <div className="flex flex-col items-center pt-[30px] md:pt-[45px]">
          <h1 className="uppercase text-white text-2xl md:text-5xl text-center pb-[30px]">
            adote um coral
          </h1>
          <p className="text-lg text-center text-white pb-[30px] max-w-[400px]">
            Ajude-nos na importante missão de recuperar os recifes de coral
            perdidos ao longo dos anos
          </p>
          <Button className="text-white rounded-2xl text-lg w-[272px] uppercase h-[51px] mb-[10px]">
            adotar
          </Button>
        </div>
        <Image
          src="/yellow-waves.svg"
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

export default Page
