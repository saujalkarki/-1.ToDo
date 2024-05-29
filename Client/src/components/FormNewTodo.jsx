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

  console.log(newTodo);

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
        className=" w-[70vw] flex  justify-evenly bg-slate-600 p-4"
      >
        <div className="flex items-center gap-4">
          <label htmlFor="todoTitle" className="  text-xl font-medium">
            Todo:
          </label>
          <input
            type="text"
            id="todoTitle"
            name="todoTitle"
            onChange={handleChange}
            className="p-2  text-xl  rounded-sm"
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="status" className=" text-xl font-medium ">
            Status:
          </label>
          <select
            name="status"
            id="status"
            onChange={handleChange}
            className="p-2  text-xl  rounded-lg"
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button className=" text-xl font-medium bg-green-300 px-8  rounded-3xl text-[#000000]">
          Add
        </button>
      </form>
    </>
  );
}
