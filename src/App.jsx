import Greeting from './Greetings.jsx';
import Todo from './todo.jsx';
import Student from './props.jsx';
function App() {
let username = "imran";

  return (
    <div>
      <h1>Hello {username}</h1>
      <p>This is the day 1 </p>
      <Greeting 
      name="dfsdf" />
      <Student />
      <Todo />
    </div>
  )
  
}
export default App;
