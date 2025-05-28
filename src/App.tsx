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
    <div className="min-h-screen min-w-100">
      <form className="bg-gray-100 flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="text-center text-3xl text-bold">Add a Post</div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Description:
          </label>
          <textarea
            name="description"
            onChange={(e) => setDescription(e.currentTarget.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            value={description}
          />
        </div>
        <div className="mt-3 flex justify-center">
          <button
            onClick={submitPost}
            className="flex w-64 justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Add
          </button>
        </div>
      </form>

      {/*Posts*/}
      {posts.map((post) => (
        <dl className="mt-3 bg-indigo-100 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="flex flex-col pb-3 text-justify">
            <div key={post.title}>
              <dt className="mb-1 text-black text-2xl font-bold">
                {post.title}
              </dt>
              <dd className="text-sm italic text-gray-500">{post.description}</dd>
            </div>
          </div>
        </dl>
      ))}
    </div>
  );
}

export default App;
