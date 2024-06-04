import Button from '@/components/Buttons'
import Image from 'next/image'

const SearchPost = () => {
  return (
    <div className="flex items-center">
      <input
        placeholder="Pesquisar"
        className="bg-white rounded-s-2xl h-[46px] p-4 w-[250px] md:w-[450px] border-0 focus:outline-none"
      />
      <Button className="rounded-e-2xl h-[46px] p-4">
        <Image
          src="/search.svg"
          alt="Icone de buscar"
          width={20}
          height={20}
        />
      </Button>
    </div>
  )
}

export default SearchPost
