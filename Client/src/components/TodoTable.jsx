import axios from "axios";
import { useEffect, useState } from "react";

export function TodoTable({ status, color }) {
  const [Todos, setTodo] = useState([]);
  // api call
  const fetchTodo = async () => {
    const fetchedTodo = await axios.get("http://localhost:3000/todo");
    const allTodo = fetchedTodo.data.allTodo;
    setTodo(allTodo);
  };

  // triggering api call
  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <table className=" border-2 border-slate-950  bg-gray-200">
      <thead className="border-b-2 border-slate-950">
        <tr>
          <th
            className={`py-2 border-r-2 border-slate-950 text-sm font-semibold ${color}`}
          >
            {status}
          </th>
        </tr>
      </thead>
      <tbody>
        {Todos.filter((todo) => {
          return todo.status === status;
        }).map((todo) => {
          return (
            <tr key={todo._id}>
              <td className=" border-b-2 border-gray-950 text-sm">
                {todo.todoTitle}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
