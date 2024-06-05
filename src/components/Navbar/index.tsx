import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-[#080918] opacity-90 fixed w-full xl:w-[50px] z-10">
      <ul className="flex justify-around py-5 xl:flex-col xl:h-screen items-center xl:justify-center xl:gap-y-16 xl:py-0">
        <li>
          <Link href="/user">
            <Image
              src="/profile-icon.svg"
              alt=""
              width={0}
              height={0}
              className="w-[30px]"
            />
          </Link>
        </li>

        <li>
          <Link href="/home">
            <Image
              src="/home-icon.svg"
              alt=""
              width={0}
              height={0}
              className="w-[30px]"
            />
          </Link>
        </li>

        <li>
          <Link href="/news">
            <Image
              src="/news-icon.svg"
              alt=""
              width={0}
              height={0}
              className="w-[30px]"
            />
          </Link>
        </li>

        <li>
          <Link href="/adopt">
            <Image
              src="/hands-icon.svg"
              alt=""
              width={0}
              height={0}
              className="w-[30px]"
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
