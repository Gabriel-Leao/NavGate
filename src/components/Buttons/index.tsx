import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDark?: boolean
  className?: string
}

const Button = ({
  children,
  isDark = true,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${isDark ? 'bg-[#182641]' : 'bg-white'} ${className}`}
      {...props}>
      {children}
    </button>
  )
}

export default Button
