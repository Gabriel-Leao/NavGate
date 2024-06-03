'use client'

import { useState } from 'react'
import Image from 'next/image'

interface SlideShowProps {
  imagesArray: { src: string }[]
}

const SlideShow = ({ imagesArray }: SlideShowProps) => {
  const [activeImg, setActiveImg] = useState(imagesArray[0])

  const nextImg = () => {
    setActiveImg((currentImg) => {
      const currentIndex = imagesArray.indexOf(currentImg)
      const nextIndex =
        currentIndex === imagesArray.length - 1 ? 0 : currentIndex + 1
      return imagesArray[nextIndex]
    })
  }

  const prevImg = () => {
    setActiveImg((currentImg) => {
      const currentIndex = imagesArray.indexOf(currentImg)
      const prevIndex =
        currentIndex === 0 ? imagesArray.length - 1 : currentIndex - 1
      return imagesArray[prevIndex]
    })
  }

  return (
    <div className="flex justify-center gap-5">
      <button onClick={prevImg}>
        <Image
          src="/left-arrow.svg"
          alt="seta virada para esquerda"
          className="cursor-pointer w-[25px] md:w-[50px]"
          title="Anterior"
          width={0}
          height={0}
        />
      </button>
      {activeImg && activeImg.src ? (
        <Image
          src={activeImg.src}
          alt="activeImg"
          priority={true}
          width={220}
          height={220}
          className="w-[220px] h-auto md:w-[500px] xl:w-[700px] rounded-lg"
        />
      ) : (
        <p>Image invalida</p>
      )}
      <button onClick={nextImg}>
        <Image
          src="/right-arrow.svg"
          alt="seta virada para direita"
          className="cursor-pointer w-[25px] md:w-[50px]"
          title="Próximo"
          width={0}
          height={0}
        />
      </button>
    </div>
  )
}

export default SlideShow
