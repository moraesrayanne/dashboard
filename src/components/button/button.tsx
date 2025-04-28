interface ButtonComponentProps {
  onClick: () => void
  variant?: 'solid' | 'outline' | 'text'
  children: string
}

export const Button = ({ onClick, variant = 'solid', children }: ButtonComponentProps) => {
  const variants = {
    solid: 'bg-blue-500 h-10 w-100 rounded-lg text-white text-sm hover:bg-blue-400 cursor-pointer',
    outline: 'border-blue-400 border h-10 w-100 rounded-lg text-blue-500 font-medium text-sm cursor-pointer',
    text: 'h-10 w-100 rounded-lg text-blue-500 font-medium text-sm hover:bg-blue-100 cursor-pointer',
  }

  return (
    <button onClick={onClick} className={variants[variant]}>
      {children}
    </button>
  )
}
