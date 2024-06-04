import CreateButton from '@/components/Buttons/CreateButton'
import Post from '@/components/Post'
import Image from 'next/image'
import NewPost from '@/components/NewPost'
import SearchPost from '@/components/SearchPost'
import PostsHeader from '@/components/PostsHeader'

const posts = [0, 0, 0]

const Home = () => {
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
          loggedIn={false}
          yourPosts={false}
        />
        <div className="bg-[#d3d5d9] flex flex-col gap-y-12 container mx-auto items-center py-12 rounded-b-2xl">
          <SearchPost />
          <NewPost />
          {posts.map((_, index) => (
            <Post key={index} />
          ))}
          <CreateButton />
        </div>
      </div>
    </main>
  )
}

export default Home
