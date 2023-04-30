import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import Tamamlanan from "./redux/Tamamlanan";

function App() {
  return (
    <section className="container">
      <AddTodoForm />
      <TodoList />
      <Tamamlanan/>
    </section>
  );
}

export default App;
