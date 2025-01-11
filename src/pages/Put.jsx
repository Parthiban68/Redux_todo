import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../redux/Action';

const Put = () => {
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.posts);

  const handleUpdate = () => {
    const updatedData = { title, body };
    dispatch(updatePost(postId, updatedData));
    setPostId('');
    setTitle('');
    setBody('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Update Post
      </h1>
      <input
        type="text"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Post ID"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <input
        type="text"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        className={`w-full py-2 rounded-lg text-white ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        onClick={handleUpdate}
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Post"}
      </button>
    </div>
  </div>
  );
}

export default Put