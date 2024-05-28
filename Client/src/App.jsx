import { NavBar, Footer, TodoList } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex  flex-col  items-center gap-5 my-14">
        <TodoList listNo={1} />
        <TodoList listNo={2} />
        <TodoList listNo={3} />
        <TodoList listNo={4} />
        <TodoList listNo={5} />
        <TodoList listNo={6} />
        <TodoList listNo={7} />
        <TodoList listNo={8} />
        <TodoList listNo={9} />
      </div>
      <Footer />
    </>
  );
}

export default App;
