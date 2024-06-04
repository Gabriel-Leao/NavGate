import Image from 'next/image'

const Post = () => {
  return (
    <div className="w-[300px] md:w-[500px]">
      <div className="flex justify-center items-center bg-white h-[400px] rounded-t-3xl">
        <Image
          src="/default-image.svg"
          alt="Icone padrão"
          width={100}
          height={100}
        />
      </div>
      <div className="bg-[#182641] w-full flex justify-between px-6 py-8 rounded-b-3xl">
        <div>
          <Image
            src="profile-photo.svg"
            alt=""
            width={50}
            height={50}
          />
        </div>

        <div className="flex gap-x-7">
          <Image
            src="/share-icon.svg"
            alt="Icone de compartilhar"
            title="Compartilhar"
            width={45}
            height={30}
          />
          <Image
            src="/send-icon.svg"
            alt="Icone de enviar"
            title="enviar"
            width={35}
            height={30}
          />
          <Image
            src="/favorite-icon.svg"
            alt="Icone de favorito"
            title="salvar"
            width={35}
            height={30}
          />
        </div>
      </div>
    </div>
  )
}

export default Post
