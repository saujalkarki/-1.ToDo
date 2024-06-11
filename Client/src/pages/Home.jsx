import { NavBar, Footer, FormNewTodo, TodoTable } from "../components/index";

export function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-between my-[0.75rem]">
        <FormNewTodo />
        <TodoTable />
      </div>
      <Footer />
    </>
  );
}
