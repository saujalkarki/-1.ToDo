import axios from "axios";
import { useEffect, useState } from "react";

export function TodoTable() {
  const [notStarted, setNotStarted] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  // api call
  const fetchTodo = async () => {
    const fetchedTodo = await axios.get("http://localhost:3000/todo");

    const allTodo = fetchedTodo.data.allTodo;

    const notStartedTodo = allTodo.filter((todo) => {
      return todo.status === "Not Started";
    });

    const inProgressTodo = allTodo.filter((todo) => {
      return todo.status === "In Progress";
    });

    const completedTodo = allTodo.filter((todo) => {
      return todo.status === "Completed";
    });

    setNotStarted(notStartedTodo);
    setInProgress(inProgressTodo);
    setCompleted(completedTodo);
  };

  // triggering api call
  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <table className="min-w-[95vw] border-2 border-slate-950  bg-gray-200">
      <thead className="border-b-2 border-slate-950">
        <tr>
          <th className=" py-3 px-2 border-r-2 border-slate-950 text-sm font-semibold text-gray-600">
            NOT STARTED
          </th>
          <th className=" py-3 px-2 border-r-2 border-slate-950 text-sm font-semibold text-indigo-600">
            IN PROGRESS
          </th>
          <th className=" py-3 px-2 border-slate-950 text-sm font-semibold text-lime-600">
            COMPLETED
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className=" text-center">
          {notStarted.map((todo) => {
            return (
              <>
                <td>{todo.todoTitle}</td>
              </>
            );
          })}
        </tr>
        <tr className=" text-center">
          {inProgress.map((todo) => {
            return (
              <>
                <td>{todo.todoTitle}</td>
              </>
            );
          })}
        </tr>
        <tr className=" text-center">
          {completed.map((todo) => {
            return (
              <>
                <td>{todo.todoTitle}</td>
              </>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
}
