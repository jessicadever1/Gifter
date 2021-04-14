import React from "react";
import "./App.css";
import { PostProvider } from "./components/PostProvider";
import PostList from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { BrowserRouder as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Router>
        <PostProvider>
          <Header />
          <ApplicationViews />
          <PostForm />
          <PostList />
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;
