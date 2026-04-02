import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Upload from "./components/Upload";
function App() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Signup />
      <Login /> 
      <Profile />
      <Upload/>

    </div>
  );
}

export default App;