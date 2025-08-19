import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (title !== "" && description !== "") {
      const id = posts.length;
      setPosts([...posts, { id: id, title: title, description: description }]);
      setTitle("");
      setDescription("");
    }
  }

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter((item) => item.id !== id);
    setPosts([...updatedPosts]);
  }

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
        <button data-testid="create-button" className="mt-10" onClick={handlePost}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} deletePost={handleDeletePost} />
      </div>
    </div>
  );
}

export default Home;
