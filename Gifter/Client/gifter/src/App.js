import React from "react";
import "./App.css";
import { PostProvider } from "./components/PostProvider";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;
