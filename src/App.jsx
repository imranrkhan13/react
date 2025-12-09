import Greeting from './Greetings.jsx';
import Todo from './todo.jsx';
function App() {
  let username = "imran";

  return (
    <div>
      <h1>Hello {username}</h1>
      <p>This is the day 1 </p>
      <Greeting name="jsid" />
      <Todo />
    </div>
  )
}
export default App;
