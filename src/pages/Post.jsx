import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postData } from "../redux/Action";

const Post = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userId: userId,
      title: title,
      body: body,
    };
    console.log(data);
    dispatch(postData(data))
    setUserId("");
    setTitle("");
    setBody("");
  };
  return (
    <div className="w-full h-[610px] bg-zinc-200 flex justify-center items-center">
      <div className="border rounded-lg w-[380px] bg-white">
        <div className="flex justify-center items-center p-5 mb-5 h-full bg-blue-600 rounded-t-md text-white">
          <h1 className="text-xl font-semibold ">PostData Using Redux</h1>
        </div>
        <div className="pl-5 pr-5 pt-5 pb-28">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-10 items-center justify-center "
          >
            <input
              type="text"
              placeholder="Enter your ID"
              className="w-80 rounded-md p-2 border border-gray-400"
              value={userId}
              name="userId"
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter the Title"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-80 rounded-md p-2 border border-gray-400"
            />
            <input
              type="text"
              placeholder="Enter the body"
              value={body}
              name="body"
              onChange={(e) => setBody(e.target.value)}
              className="w-80 rounded-md p-2 border border-gray-400"
            />
            <button
              type="submit"
              className="w-80 rounded-md p-2 bg-green-500 text-white text-lg"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
