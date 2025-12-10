import Greeting from './Greetings.jsx';
import Todo from './todo.jsx';
import Student from './props.jsx';
import ProductCard from './ProductCard.jsx';
import FeatureList from './features.jsx';
import Notification from './notif.jsx';
import CartItem from './cartItem.jsx';


function UserCard() {
  const name = "Imran";
  const Age = "32";
  const Course = "computer science";
  const Bio = "React student";

  return (
    <div className="html">
      <h2>Name: {name}</h2>
      <h2>Age: {Age}</h2>
      <h2>Course: {Course}</h2>
      <h2>Bio: {Bio}</h2>
    </div>
  );
}

function App() {
  const laptopFeatures = [
    "8GB RAM",
    "256GB SSD",
    "M2 Processor",
    "Retina Display"
  ];

  let username = "imran";

  return (
    <div>
      <CartItem
      name = "Iphone 17"
      price = "90000"
      initialQty={1}/>

       <Notification 
      message = "File uploaded successfully"
      type = "success"
      time  ="2 mins ago"
      />
      <Notification 
      message = "Login failed"
      type = "error"
      time  ="10 mins ago"
      />
      <Notification 
      message = "Low battery"
      type = "warning"
      time  ="12 mins ago"
      />
      <FeatureList features={laptopFeatures} />
      <FeatureList features={[]} />
      <h1>Hello {username}</h1>
      <p>This is the day 1 </p>
      <Greeting name="dfsdf" />
      <ProductCard
        title="MacBook Air M2"
        price={98000}
        description="Lightweight and powerful laptop"
        inStock={true}
      />
      <ProductCard
        title="Sony Headphone"
        price={85000}
        description="Nice sound quality"
        inStock={false}   // ✔ fixed
      />
     
      <UserCard />
      <Student />
      <Todo />
    </div>
  );
}

export default App;
