import TodoForm from "../../components/todo_form/TodoForm";
import Todo from "../../components/todo/Todo";
import Search from "../../components/search/Search";
import { useState } from "react";
import { MdExitToApp } from "react-icons/md";
import Filter from "../../components/filter/filter";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const {signout} = useAuth()
  const navigate = useNavigate()

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isComplete: false,
      },
    ];
    console.log("foi");
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };
  
  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  const handleLogout = () => {
    signout();
    navigate('/')
  }


  return (
  <>
    <div className="h-screen overflow-x-hidden overflow-y-auto">
      <div className="h-screen  md:flex justify-center items-center ">
        <div className="h-screen w-screen bg-white md:h-5/6 md:w-2/5 md:rounded-lg p-2 ">
          <div className="flex items-center m-1 justify-between">
            <h1 className="ml-40 text-center font-montserrat md:ml-72">DoList</h1>
            <button className="md:self-end">
              <MdExitToApp onClick={handleLogout}/>
            </button>
          </div>
          <div className="flex justify-around m-2 md:flex-col">
            <Search />
            <Filter />
          </div>
      
          <div className="task-list h-4/5 z-0">
            <div className=" todo-list h-3/4 md:h-3/5  rounded-md my-4 ">
              <h2 className="font-montserrat text-center">Tasks</h2>
              <div className="w-full h-4/5  ">
      
                {todos.length === 0 ? (
                  <p className={`font-julius ${todos.length === 0 ? 'flex h-full items-center justify-center' : 'hidden'}`}>No tasks yet</p>
                ) : (
                  todos
                    .filter((todo) =>
                      filter === "All"
                        ? true
                        : filter === "Completed"
                        ? todo.isCompleted
                        : !todo.isCompleted
                    )
                    .filter((todo) =>
                      todo.text.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((todo) => (
                      <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={() => removeTodo(todo.id)}
                        completeTodo={() => completeTodo(todo.id)}
                      />
                    ))
                )}
              </div>
            </div>
            <div className="form text-center">
              <TodoForm addTodo={addTodo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Home;
