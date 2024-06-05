import { ChangeEvent } from 'react'

export interface inputProps {
  type?:
    | 'text'
    | 'password'
    | 'checkbox'
    | 'radio'
    | 'file'
    | 'submit'
    | 'reset'
    | 'button'
    | 'hidden'
    | 'image'
    | 'email'
    | 'number'
    | 'url'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'time'
    | 'color'
  id: string
  label: string
  placeholder?: string
  value: string | number | readonly string[]
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputContainer = ({
  type,
  id,
  label,
  placeholder,
  value,
  onChange
}: inputProps) => {
  return (
    <div className="flex flex-col max-w-[95%] md:flex-row">
      <label
        htmlFor={id}
        className="bg-[#25617b] text-white md:rounded-l-2xl py-4 px-9 text-xl text-center block min-w-[206px] h-[58px]">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-white w-[482px] h-[58px] px-8 max-w-full md:rounded-r-2xl focus:outline-none"
      />
    </div>
  )
}

export default InputContainer
