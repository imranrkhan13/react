import Greeting from './Greetings.jsx';
import Todo from './todo.jsx';
import Student from './props.jsx';
import ProductCard from './ProductCard.jsx';
import FeatureList from './features.jsx';
import Notification from './notif.jsx';
import CartItem from './cartItem.jsx';
import Profile from './profileCard.jsx'
import NotificationCard from './notificationcard.jsx';
import MovieCard from './Moviecard.jsx'
import Biodata from './form.jsx';
import UserForm from './userform.jsx';
import Registerform from './registerform.jsx';
import Result from './marks.jsx';
import FriendsList from './friendslist.jsx';
import Likebutton from './likebutton.jsx';
import UseEffect from './useeffect.jsx';
import CharacterCounter from './charactercounter.jsx';
import LoginForm from './login.jsx';
import SignUp from './signup.jsx';
import SearchFilter from './searchfilter.jsx';
import Parent from './parentchild.jsx';
import Dasboard from './dashboard(liftup).jsx';
import ONOFF from './onoff.jsx'
import Text from './textotggle.jsx';
import Limit from './limitnumber.jsx';
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
      < Limit/>
      < Text/>
      <ONOFF />
      <Dasboard />
      <Parent />
      <SearchFilter />
      <SignUp />
      <LoginForm />
      <CharacterCounter />
      <UseEffect />
      <Likebutton />
      <FriendsList />
      <Result
      name = "Imran"
      marks = {10} />
      <Registerform />
      <UserForm />
      <Biodata
      name= "Imran"
      age = "21"
      city = "Mumbai"
      bio = "React Developer"
      isMarried = {true} />
      <MovieCard
        title="Before Sunrise"
        rating="9.8"
        year="1998"
        isAvailable="true" />
      <NotificationCard
        type="like"
        user="Imran"
        app="Instagram" />
      <NotificationCard
        type="comment"
        user="Imran"
        message="hi"
        app="snapchat" />
      <NotificationCard
        type="follow"
        user="Imran"
        app="LinkedIn" />
      <NotificationCard
        type="other"
        user="Imran"
        app="Whatsapp" />


      <Profile
        name="Imran"
        age="21"
        country="India"
        skills={["React", "JavaScript", "HTML"]}
        isActive={true} />
      <Profile
        name="John"
        age={25}
        country="USA"
        skills=""
        isActive={false}
      />
      <CartItem
        name="Iphone 17"
        price="90000"
        initialQty={1} />

      <Notification
        message="File uploaded successfully"
        type="success"
        time="2 mins ago"
      />
      <Notification
        message="Login failed"
        type="error"
        time="10 mins ago"
      />
      <Notification
        message="Low battery"
        type="warning"
        time="12 mins ago"
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
        inStock={false}   
      />

      <UserCard />
      <Student />
      <Todo />
    
    </div>
  );
}

export default App;
