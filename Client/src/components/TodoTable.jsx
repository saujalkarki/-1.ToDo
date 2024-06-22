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
    <table className="min-w-[95vw] border-2 border-slate-950  bg-gray-200">
      <thead className="border-b-2 border-slate-950">
        <tr>
          <th
            className={`py-3 px-2 border-r-2 border-slate-950 text-sm font-semibold ${color}`}
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
              <td>{todo.todoTitle}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
