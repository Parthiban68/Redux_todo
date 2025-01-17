import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, deleteData, changePage, searchItem, routeData } from "../redux/Action";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, posts, error, currentpage, filterposts } = useSelector(
    (state) => state
  );
  const [search, setSearch] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    dispatch(fetchData());
    setResult(filterposts);
  }, [dispatch, filterposts]);
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
    dispatch(changePage(page));
    dispatch(fetchData(page));
  };

  const handlesearch = () => {
    if (!search.trim()) {
      alert("please enter the keyword");

      return;
    }

    const filter = posts.filter(
      (post) => post.userId.toString() === search || post.title.includes(search)
    );
    setShowDropDown(true);
    dispatch(searchItem(filter));
  };

  const details = (id, title, body) =>{
    const formdata = {
      id,
      title,
      body
    }
    dispatch(routeData(formdata))
  }

  return (
    <div>
      <div className="flex justify-between items-center px-5">
        <h1 className="text-3xl font-bold mb-6 flex justify-center items-center">
          Get Method Using Redux
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border text-black text-lg placeholder:text-base border-none placeholder:text-gray-700 rounded-md p-2 "
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="p-2" onClick={handlesearch}>
            <i className="fa-solid fa-magnifying-glass text-xl"></i>
          </button>

          {showDropDown && result.length > 0 && (
            <div className="dropdown absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto z-10">
              {result.map((item) => (
                <NavLink to='/detail'>
                <div
                  key={item.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => details(item.id, item.title, item.body)}
                >
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.body}</p>
                </div>
                </NavLink>
              ))}
            </div>
          )}

          {showDropDown && result.length === 0 && (
            <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg p-2 z-10">
              <p className="text-gray-600 text-center">No results found</p>
            </div>
          )}
        </div>
      </div>
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
              <button onClick={() => handleDelete(item.id)}>
                <i class="fa-regular fa-trash-can text-red-500 text-xl"></i>
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
