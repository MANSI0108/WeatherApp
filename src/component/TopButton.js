import React from "react";

const TopButton = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Tokyo",
    },
    {
      id: 3,
      title: "Berlin",
    },
    {
      id: 4,
      title: "Sydney",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];
  return (
    <div className="flex item-center justify-around my-6">
      {cities.map((city, index) => (
        <button
          key={index}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
