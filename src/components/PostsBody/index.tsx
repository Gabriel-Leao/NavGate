import SearchPost from '@/components/SearchPost'
import NewPost from '@/components/NewPost'
import Post from '@/components/Post'
import CreateButton from '@/components/Buttons/CreateButton'

const posts = [0, 0, 0]

interface PostsBodyProps {
  className?: string
}

const PostsBody = ({ className }: PostsBodyProps) => {
  return (
    <div
      className={`bg-[#d3d5d9] flex flex-col gap-y-12 container mx-auto items-center py-12 rounded-b-2xl ${className}`}>
      <SearchPost />
      <NewPost />
      {posts.map((_, index) => (
        <Post key={index} />
      ))}
      <CreateButton />
    </div>
  )
}

export default PostsBody
