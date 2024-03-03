import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim() || !category.trim()) return;

    addTodo(text.trim(), category.trim());
    setText("");
    setCategory("");
    setFormOpen(false);
  };

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div className="todo-form flex flex-col">
      <h2>Criar tarefa</h2>
      <form action="" className="flex items-center flex-col justify-center gap-2 md:mx-4">
        {" "}
        <input
          type="text"
          placeholder=" Digite o titulo da tarefa"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-gray-200 rounded-md w-full p-1 md:cursor-pointer"
        />{" "}
        <select
          className="w-full bg-gray-200 p-1 md:cursor-pointer hover:bg-slate-300 duration-300 rounded-md "
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {" "}
          <option value="">Selecione a Categoria</option>{" "}
          <option value="Work">Trabalho</option>{" "}
          <option value="Personal">Pessoal</option>{" "}
          <option value="Study">Estudos</option>{" "}
        </select>{" "}
        <button
          onClick={handleSubmit}
          className="bg-softGray md:hover:bg-slate-300 ease-in-out duration-300 p-1 rounded-md font-montserrat w-1/3  "
        >
          {" "}
          Cadastrar sua tarefa{" "}
        </button>{" "}
      </form>
    </div>
  );
};

export default TodoForm;
