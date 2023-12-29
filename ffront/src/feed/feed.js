import React, { useState, useEffect } from "react";
import "./css/feed.css";
import Post from "../components/post/post"; // Note: Corrected the import path

function Feed() {
  const [posts, setPosts] = useState([]);

  // Get posts
  useEffect(() => {
    fetch(`http://localhost:8080/personalPost/${localStorage.getItem("id")}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  if (!Array.isArray(posts)) {
    posts = [posts];
  }

  return (
    <div className="feed">
      <div className="feedWrapper">
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
