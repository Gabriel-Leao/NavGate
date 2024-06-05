import Image from 'next/image'
import PostsHeader from '@/components/PostsHeader'
import PostsBody from '@/components/PostsBody'

const Page = () => {
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
        <PostsHeader loggedIn={false} />
        <PostsBody />
      </div>
    </main>
  )
}

export default Page
