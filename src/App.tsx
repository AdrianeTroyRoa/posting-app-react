import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function submitPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("title: ", title, " description: ", description);
    const newPosts = [...posts, { title: title, description: description }];
    setPosts(newPosts);
    console.log(newPosts);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="bg-gray-300 min-h-screen min-w-xl px-8 py-5">
      <div className="mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
        <form id="postForm" className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={submitPost}
            className="bg-gray-600 text-black px-4 py-2 rounded"
          >
            Add Post
          </button>
        </form>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-4">Posts</h2>
        <div id="postList" className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.title}
              className="mx-auto bg-white p-6 rounded-lg shadow-md text-justify"
            >
              <div className="font-semibold text-lg">{post.title}</div>
              <div className="text-sm text-gray-400">{post.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
