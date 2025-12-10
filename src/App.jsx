import Greeting from './Greetings.jsx';
import Todo from './todo.jsx';
import Student from './props.jsx';
import ProductCard from './ProductCard.jsx';

function UserCard() {
  const name = "Imran";
  const Age = "32";
  const Course = "computer science";
  const Bio = "React student";
  return(
    <div class="html">
      <h2> Name : {name}</h2>
      <h2> Age : {Age}</h2>
      <h2> Course : {Course}</h2>
      <h2> Bio : {Bio}</h2>
    </div>

  )
  
}

function App() {
  let username = "imran";
  return (
    <div>
      <h1>Hello {username}</h1>
      <p>This is the day 1 </p>
      <Greeting
        name="dfsdf" />
         <ProductCard 
        title="MacBook Air M2" 
        price={98000}
        description="Lightweight and powerful laptop"
        inStock={true}
      />
      <ProductCard
      title ="Sony Headphone"
      price  = {85000}
      description = "Nice sound quality"
      instock = {false} />
      <UserCard />
      <Student />
      <Todo />
    </div>
  )
}


export default App;
