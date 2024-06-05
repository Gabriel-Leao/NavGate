import Button from '@/components/Buttons'
import Link from 'next/link'
import Image from 'next/image'

interface PostsHeaderProps {
  loggedIn?: boolean
  yourPosts?: boolean
}

const PostsHeader = ({
  loggedIn = false,
  yourPosts = false
}: PostsHeaderProps) => {
  return (
    <div className="bg-[#182641] container mx-auto rounded-t-2xl">
      {!loggedIn ? (
        <>
          <div className="flex justify-between items-center py-12 px-3 md:justify-around lg:justify-end md:gap-x-5">
            <Link href="/login">
              <Button
                isDark={false}
                className="rounded-xl h-[48px] px-10">
                logar
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                isDark={false}
                className="rounded-xl h-[48px] px-6">
                Cadastrar
              </Button>
            </Link>
          </div>
          {/*<Image*/}
          {/*  src="/white-wave.svg"*/}
          {/*  alt="Onda Branca"*/}
          {/*  width={0}*/}
          {/*  height={0}*/}
          {/*  className="w-full"*/}
          {/*/>*/}
        </>
      ) : (
        <>
          <div className="py-12 px-3 flex justify-center">
            <Image
              src="/profile-photo.svg"
              alt="foto de perfil"
              width={200}
              height={200}
              className="md:w-[300px] md:h-[300px] rounded-full"
            />
          </div>
          <div className="bg-white py-6 flex justify-between px-2 md:px-10 items-center flex-col md:flex-row gap-y-8 md:gap-y-0">
            <div>
              <h2 className="text-2xl pb-2">Your User Name</h2>
              <p className="text-lg">000.000 seguidores</p>
            </div>
            {yourPosts ? (
              <button>
                <Image
                  src="/log-out.svg"
                  alt="botão de sair"
                  width={50}
                  height={50}
                />
              </button>
            ) : (
              <Button className="text-white h-[50px] py-4 w-[250px] rounded-2xl">
                Seguir
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default PostsHeader
