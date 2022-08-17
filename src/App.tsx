import Counter from "./screens/Counter";
import Todo from "./screens/Todo";

function App() {
  return (
    <div className="App">
      <section>
        <Counter />
      </section>
      <section>
        <Todo />
      </section>
    </div>
  );
}

export default App;
