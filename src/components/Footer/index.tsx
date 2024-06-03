import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#1e1d56] h-[100px] md:h-fit">
      <div className="flex justify-between flex-col md:flex-row py-3 md:py-0 gap-4 md:gap-0">
        <div className="md:pt-[30px] xl:pt-[90px]">
          <p className="text-white md:text-lg lg:text-2xl text-sm md:ps-[40px]">
            ©2024 NavGate | Todos os direitos reservados
          </p>
        </div>

        <div className="relative">
          <div className="absolute md:right-[60px] md:top-[30px] xl:right-[90px] xl:top-[90px]">
            <p className="text-white md:text-lg lg:text-2xl text-sm">
              Ouvidoria
            </p>
            <p className="text-white md:text-lg lg:text-2xl text-sm">
              (xx) xxxxx-xxxx
            </p>
          </div>
          <Image
            src="/footer.svg"
            alt="background footer"
            height={0}
            width={0}
            className="w-full h-full object-cover md:block hidden"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
