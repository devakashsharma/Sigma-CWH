import { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, { id:uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos)
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = () => {
    //
  };

  const handleDelete = () => {
    //
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]">
        <div className="addtodo">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            className="w-1/2"
            type="text"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-600 px-3 py-1 rounded-md hover:bg-violet-700 mx-4 font-semibold"
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold">Your Todo</h2>
        <div className="todos">
          {todos.map((item) => {
            return <div key={item.id} className="todo flex w-1/3 justify-between my-4">
              <input onChange={handleCheckbox} type="checkbox" name={item.id} id="" />
              <div className={item.isCompleted ? "line-through" : ""}>
                {item.todo}
              </div>
              <div className="buttons">
                <button
                  onClick={handleEdit}
                  className="bg-violet-600 px-3 py-1 rounded-md hover:bg-violet-700 mx-2 font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-violet-600 px-3 py-1 rounded-md hover:bg-violet-700 mx-2 font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
