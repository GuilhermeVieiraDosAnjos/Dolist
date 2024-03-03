
const Button = ({Text, onClick}) => {
  return (
    <button
        className="px-4 py-2 my-2 rounded w-full bg-softBlue text-white cursor-pointer hover:bg-slate-400 duration-300 font-montserrat"
        onClick={onClick}
    >
        {Text}
    </button>
  )
}

export default Button
