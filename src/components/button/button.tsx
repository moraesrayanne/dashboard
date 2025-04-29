interface ButtonComponentProps {
  onClick: () => void
  variant?: "solid" | "outline" | "text"
  children: string
}

export const Button = ({ onClick, variant = "solid", children }: ButtonComponentProps) => {
  const variants = {
    solid: "bg-blue-500 text-white hover:bg-blue-400 ${baseClasses}",
    outline: "border border-blue-400 text-blue-500 hover:bg-blue-50 ${baseClasses}",
    text: "text-blue-500 hover:bg-blue-100",
  }

  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} w-full h-10 rounded-lg text-sm font-medium active:scale-98 focus:outline-none focus:ring-0 transition-colors duration-200 cursor-pointer`}
    >
      {children}
    </button>
  )
}
