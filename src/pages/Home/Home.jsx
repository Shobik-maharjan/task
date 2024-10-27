import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../Data";

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 gap-2">
      {products.map((item) => (
        <div className="border border-black p-4 rounded-md" key={item.id}>
          <Link to={`/product/${item.id}`}>
            <img src={item.img} alt={item.name} width="200px" />
            <h2 className="font-bold text-xl uppercase">{item.name}</h2>
            <p>
              {item.description.slice(0, 80)} ...
              <span className="hover:text-blue-700"> Read More</span>
            </p>
            <span>Rs. {item.price}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
