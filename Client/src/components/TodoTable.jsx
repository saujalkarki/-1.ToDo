import axios from "axios";
import { useEffect } from "react";

export function TodoTable() {
  // api call
  const fetchTodo = async () => {
    const fetchedTodo = await axios.get("http://localhost:3000/todo");

    console.log(fetchedTodo);
  };

  // triggering api call
  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <table className=" w-[70vw] border-2 border-slate-950  bg-gray-200">
      <thead className="border-b-2 border-slate-950">
        <tr>
          <th className=" py-4 border-r-2 border-slate-950 text-lg font-bold text-gray-600">
            NOT STARTED
          </th>
          <th className=" py-4 border-r-2 border-slate-950 text-lg font-bold text-indigo-600">
            IN PROGRESS
          </th>
          <th className=" py-4 border-slate-950 text-lg font-bold text-lime-600">
            COMPLETED
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className=" text-center">
          <td> </td>
          <td> Tr1 Td2</td>
          <td> </td>
        </tr>
        <tr className=" text-center">
          <td> Tr2 Td1</td>
          <td> </td>
          <td> </td>
        </tr>
        <tr className=" text-center">
          <td> Tr3 Td1</td>
          <td> Tr3 Td2</td>
          <td> Tr3 Td3</td>
        </tr>
      </tbody>
    </table>
  );
}
