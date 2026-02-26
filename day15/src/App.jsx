import React from "react";
/*
function Header() {
  return <h1>Welcome to React Learning Journey!</h1>;
}

function Footer() {
  return <p>Happy Coding! 🚀</p>;
}

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <Header />
      <p>This is body content</p>
      <Footer />
    </div>
  );
}

export default App;
*/
//rendering the dynamic component
/*
function Greeting() {
  const name = "Shravan";
  return <h2>Hello, {name}!</h2>;
}
function App() {
  return (
      <Greeting />
  );
}
export default App;
*/

//profile card example
/*
function ProfileCard() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "250px",
        margin: "20px auto",
        borderWidth: "2px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
      }}
    >
      <h2>Shravan</h2>
      <p>Frontend Developer</p>
      <button>Follow</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <ProfileCard />
    </div>
  );
}

export default App;

*/
/*
list and keys
apps:
product list,user list,notification list,chat messages list 
-> we can use map function to render the list of items and we need to provide a unique key for each item in the list to help React identify which items have changed, are added, or are removed.
->but react does not use the key for rendering, it is used internally by react to keep track of the items in the list and optimize the rendering process.
/*
function App() {
  const students= [
    {id:1,name:"Shravan",age:22},
    {id:2,name:"Ravi",age:23},
    {id:3,name:"Sita",age:21}
  ]
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} - Age: {student.age}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/
import Counter from "./counter";

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;