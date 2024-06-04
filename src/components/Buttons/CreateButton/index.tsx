import Button from '@/components/Buttons'
import Image from 'next/image'

const CreateButton = () => {
  return (
    <Button
      isDark={true}
      className="py-5 w-[300px] md:w-[527px] flex justify-center rounded-[20px] hover:opacity-95 delay-75 transition-opacity ease-in-out">
      <Image
        src="/add-icon.svg"
        alt="Icone de adicionar"
        width={31}
        height={31}
      />
    </Button>
  )
}

export default CreateButton
