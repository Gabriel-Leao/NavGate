import Image from 'next/image'
import SlideShow from '@/components/SlideShow'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const imgs = [
  { src: '/peixes.png' },
  { src: '/mundo.png' },
  { src: '/tartaruga.png' }
]

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-gradient-to-b from-[#0e112c] to-[#3b39a7]">
        <>
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
            priority={true}
          />
        </>

        <div className="bg-[#483d99] px-3 py-10">
          {/*<Image*/}
          {/*  src="/top-waves.svg"*/}
          {/*  alt="Logo"*/}
          {/*  width={0}*/}
          {/*  height={0}*/}
          {/*  className="w-full"*/}
          {/*  priority={false}*/}
          {/*/>*/}
          <div className="flex justify-around items-center container mx-auto flex-col md:flex-row gap-32 py-10">
            <div>
              <h1 className="text-lg lg:text-4xl uppercase text-[#9e9dd6] pb-6">
                bem vindo!
              </h1>
              <p className="text-md lg:text-xl text-[#9e9dd6]">
                NavGate é uma plataforma criada para trazer conhecimento e dar
                voz a pessoas que se importam com o futuro dos nossos oceanos,
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
        </div>
        <div className="bg-[#26256c] py-10">
          <SlideShow imagesArray={imgs} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Page
