import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => setPosts(posts.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="App" style={{ backgroundColor: "red" }}>
      <h1>API</h1>
      {posts.map((post) => (
        <div>
          <h3>Title: {post.title}</h3>
          <h3>Content: {post.body}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
