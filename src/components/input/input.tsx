import { InputHTMLAttributes } from "react"

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ label, onChange, ...props }: InputComponentProps) => {
  return (
    <div className="w-[100%] flex flex-col">
      {label && <label>{label}</label>}
      <input
        {...props}
        onChange={onChange}
        className="border rounded-sm border-gray-400 p-2 h-10 text-gray-700 focus:outline-none  focus:border-blue-500 placeholder:text-sm"
      />
    </div>
  )
}
