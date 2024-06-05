import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Buttons'

interface FollowersProps {
  yourAccount?: boolean
}

const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const Followers = ({ yourAccount = false }: FollowersProps) => {
  return (
    <div className="bg-[#182641] container mx-auto lg:rounded-bl-2xl py-8 h-full">
      <div>
        <h3 className="text-xl text-white text-center capitalize">
          {yourAccount ? 'seguidores' : 'Seguem'}
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-10 pt-14 md:px-16 lg:px-10 px-2">
        {users.map((user) => (
          <Link
            href={`/user/${user}`}
            key={user}>
            <Image
              src="/profile-photo.svg"
              alt="foto perfil"
              width={50}
              height={50}
            />
          </Link>
        ))}
        <Button>
          <Image
            src="/add-icon.svg"
            alt="mais"
            width={30}
            height={30}
          />
        </Button>
      </div>
    </div>
  )
}

export default Followers
