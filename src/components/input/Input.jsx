
const Input = ({type, placeholder, value, onChange}) => {
  return (
    <input 
        value={value} 
        type={type} 
        onChange={onChange} 
        placeholder={placeholder}
        className="outline-none px-4 py-4 my-2 w-full rounded text-base bg-gray-200 border border-transparent 	" />
  )
}

export default Input
