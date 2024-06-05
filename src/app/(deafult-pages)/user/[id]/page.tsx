import PostsHeader from '@/components/PostsHeader'
import PostsBody from '@/components/PostsBody'
import Image from 'next/image'
import Followers from '@/components/Followers'

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
        <PostsHeader
          loggedIn={true}
          yourPosts={false}
        />
        <div className="flex flex-col lg:flex-row container mx-auto">
          <div className="w-full lg:w-[40%] xl:w-[50%]">
            <Followers />
          </div>

          <div className="w-full lg:w-[60%] xl:w-[50%]">
            <PostsBody className="lg:rounded-l-none rounded-br-2xl" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
