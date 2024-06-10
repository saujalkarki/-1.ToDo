import { NavBar, Footer, FormNewTodo, TodoTable } from "../components/index";

export function Home() {
  return (
    <>
      <NavBar />
      <div className="flex  flex-col  items-center gap-5 my-6">
        <FormNewTodo />
        <TodoTable />
      </div>
      <Footer />
    </>
  );
}
