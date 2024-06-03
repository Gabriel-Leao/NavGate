import Image from 'next/image'

const Home = () => {
  return (
    <main>
      <div className="bg-[#0e112c]">
        <div className="flex justify-center pt-[30px] md:pt-[45px]">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={0}
            height={0}
            className="w-[200px] md:w-[400px]"
            priority={true}
          />
        </div>
        <Image
          src="/dark-waves.svg"
          alt="Logo"
          width={0}
          height={0}
          className="w-full"
          priority={false}
        />
      </div>
      <div className="bg-[#4e45ae]">
        <Image
          src="/top-waves.svg"
          alt="Logo"
          width={0}
          height={0}
          className="w-full"
          priority={false}
        />
        <div className="flex justify-around items-center container mx-auto gap-32 py-10">
          <div>
            <h1 className="text-4xl uppercase text-[#9e9dd6] pb-6">
              bem vindo!
            </h1>
            <p className="text-xl text-[#9e9dd6]">
              NavGate é uma plataforma criada para trazer conhecimento e dar voz
              a pessoas que se importam com o futuro dos nossos oceanos,
              buscando, pelo meio da comunicação, restaurar e preservar o que
              temos.
            </p>
          </div>
          <div>
            <Image
              src="/waves.svg"
              alt="Logo"
              width={0}
              height={0}
              className="w-[200px] md:w-[600px]"
              priority={true}
            />
          </div>
        </div>
        <Image
          src="/bottom-waves.svg"
          alt="Logo"
          width={0}
          height={0}
          className="w-full"
          priority={false}
        />
      </div>
    </main>
  )
}

export default Home
