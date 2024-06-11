import { useState } from "react";
import axios from "axios";

export function FormNewTodo() {
  const [newTodo, setNewTodo] = useState({
    todoTitle: "",
    status: "Not Started",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const createTodo = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/todo", newTodo);

    if (response.status === 200) {
      alert(response.data.message);
    } else {
      alert("something went wrong!");
    }
  };

  return (
    <>
      <form
        onSubmit={createTodo}
        className=" flex flex-col justify-evenly bg-slate-600 p-[0.75rem] gap-2"
      >
        <div className="flex items-center gap-2">
          <label htmlFor="todoTitle" className=" text-md font-medium">
            Todo:
          </label>
          <input
            type="text"
            id="todoTitle"
            name="todoTitle"
            onChange={handleChange}
            className="p-[0.25rem] text-md rounded-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="status" className=" text-md font-medium ">
            Status:
          </label>
          <select
            name="status"
            id="status"
            onChange={handleChange}
            className="p-[0.25rem] text-sm rounded-lg"
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button className=" text-md font-medium rounded-lg bg-green-300 text-[#000000]">
          Add
        </button>
      </form>
    </>
  );
}
