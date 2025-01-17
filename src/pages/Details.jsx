import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Details = () => {
  const { routedata } = useSelector((state) => state);
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {routedata.title}
      </h1>
      <p className="text-gray-600 text-lg leading-relaxed">{routedata.body}</p>
    </div>
  );
};

export default Details;
