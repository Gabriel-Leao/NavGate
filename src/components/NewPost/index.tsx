import Image from 'next/image'

const NewPost = () => {
  return (
    <div className="border-white border-8 rounded-2xl flex justify-between items-center bg-[#d3d5d9] px-6 h-[98px] w-[300px] md:w-[500px]">
      <p className="text-[#595959]">Nova publicação...</p>
      <Image
        src="/default-image.svg"
        alt="Icone padrão"
        width={50}
        height={50}
      />
    </div>
  )
}

export default NewPost
