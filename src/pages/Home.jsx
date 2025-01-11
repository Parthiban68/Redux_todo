import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, deleteData } from "../redux/Action";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, posts, error, currentpage } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData(currentpage));
  }, [dispatch, currentpage]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const handlepage = (page) => {
    dispatch({ type: 'CHANGE_PAGE', payload: page });
    console.log(currentpage);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 flex justify-center items-center">
        Get Method Using Redux
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {posts.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md hover:transform hover:-translate-y-4 transition-transform"
          >
            {/* {item.title === "qui est esse" ? <h2 className="text-3xl font-semibold mb-2">{item.title}</h2> :   <h2 className="text-xl font-semibold mb-2">{item.title}</h2> } */}
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.body}</p>
            <div className="flex items-end justify-end mt-5">
              <button
                className="border rounded-lg bg-blue-500 text-white p-2"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10 space-x-10">
        <button
          onClick={() => handlepage(currentpage - 1)}
          disabled={currentpage <= 1}
        >
          Previous
        </button>
        <p>{currentpage}</p>
        <button onClick={() => handlepage(currentpage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Home;
