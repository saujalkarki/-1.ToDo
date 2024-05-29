import { NavBar, Footer, FormNewTodo, TodoTable } from "./components";

function App() {
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

export default App;
