import { MdDelete, MdDoneAll  } from "react-icons/md";

const Todo = ({todo, removeTodo, completeTodo}) => {

  return(
    <div className="flex items-center justify-between w-full bg-gray-200 shadow-lg my-2 rounded-md " style={{textDecoration : todo.isCompleted ? "line-through" : ""}}>
        <div className="flex ml-2 gap-2">
          <p>{todo.text}</p>
          <p>({todo.category})</p>
        </div>

      <div className="flex mr-2 ">
        <MdDoneAll className="cursor-pointer text-green-600" onClick={completeTodo}/>
        {/* <MdEdit onClick={()=> handleUpdate("New Text", "New Category")}/> */}
        <MdDelete className="cursor-pointer text-red-600" onClick={removeTodo}/>
      </div>
    </div>
  )
}

export default Todo