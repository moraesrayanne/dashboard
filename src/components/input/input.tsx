import { InputHTMLAttributes } from "react"

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string | null
}

export const Input = ({ label, onChange, error, ...props }: InputComponentProps) => {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && <label className={`text-sm font-medium ${error ? "text-red-500" : "text-gray-700"}`}>{label}</label>}
      <input
        {...props}
        onChange={onChange}
        className={`border rounded-sm p-2 h-10 text-gray-700 focus:outline-none 
          ${error ? "border-red-500 focus:border-red-500" : "border-gray-400 focus:border-blue-500"} 
          placeholder:text-sm`}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
