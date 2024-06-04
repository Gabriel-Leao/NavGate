import Button from '@/components/Buttons'
import Link from 'next/link'

interface PostsHeaderProps {
  loggedIn?: boolean
  yourPosts?: boolean
}

const PostsHeader = ({ loggedIn = false }: PostsHeaderProps) => {
  return (
    <div className="bg-[#182641] container mx-auto rounded-t-2xl">
      {!loggedIn && (
        <>
          <div className="flex justify-between items-center py-12 px-3 md:justify-around lg:justify-end md:gap-x-5">
            <Link href="/auth/login">
              <Button
                isDark={false}
                className="rounded-xl h-[48px] px-10">
                logar
              </Button>
            </Link>
            <Link href="/auth/signup">
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
      )}
    </div>
  )
}

export default PostsHeader
