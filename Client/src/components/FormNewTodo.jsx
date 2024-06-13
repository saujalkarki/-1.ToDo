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
        className=" flex flex-col justify-evenly bg-slate-600 gap-3 px-6 py-4 min-w-[70vw]"
      >
        <div className="flex items-center gap-3">
          <label htmlFor="todoTitle" className=" text-lg font-medium">
            Todo:
          </label>
          <input
            type="text"
            id="todoTitle"
            name="todoTitle"
            onChange={handleChange}
            className="p-[0.25rem] text-lg rounded-sm w-[80%]"
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="status" className=" text-lg font-medium ">
            Status:
          </label>
          <select
            name="status"
            id="status"
            onChange={handleChange}
            className="p-[0.25rem] text-md rounded-lg w-[60%]"
          >
            <option value="Not Started" className="text-xs">
              Not Started
            </option>
            <option value="In Progress" className="text-xs">
              In Progress
            </option>
            <option value="Completed" className="text-xs">
              Completed
            </option>
          </select>
        </div>
        <button className=" min-w-[100%] text-lg font-medium rounded-lg bg-green-300 text-[#000000]">
          Add
        </button>
      </form>
    </>
  );
}
