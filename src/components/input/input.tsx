interface InputComponentProps {
  label?: string
}

export const Input = ({ label }: InputComponentProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input className="border rounded-sm border-gray-400 p-1 w-100 text-gray-800" />
    </>
  )
}
