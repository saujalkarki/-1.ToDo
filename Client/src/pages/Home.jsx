import { NavBar, Footer, FormNewTodo, TodoTable } from "../components/index";

export function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-between gap-4 my-[0.75rem]">
        <FormNewTodo />
        <div className=" flex">
          <TodoTable status="Not Started" color="text-gray-600" />
          <TodoTable status="In Progress" color=" text-blue-700" />
          <TodoTable status="Completed" color="text-green-600" />
        </div>
      </div>
      <Footer />
    </>
  );
}
