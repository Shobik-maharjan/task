import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products, reviews } from "../../Data";

const SinglePage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id == id);

  const increase = () => {
    setQuantity(quantity + 1);
  };
  const decrease = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };
  return (
    <div className="flex flex-col m-auto gap-8 border border-black p-8 rounded-md mt-10 w-10/12">
      {product ? (
        <>
          <h2 className="text-3xl text-center">Product &gt; {product.name}</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <img
              src={product.img}
              alt={product.name}
              className="w-40 md:w-60 lg:w-96 xl:w-[500px]"
            />
            <div className="flex flex-col gap-4">
              <p>{product.description}</p>
              <span>Rs. {product.price}</span>
              <div>
                <button
                  onClick={decrease}
                  className="bg-slate-300 px-4 py-2 hover:bg-slate-300/90 font-bold"
                >
                  &lt;
                </button>
                <span className="mx-4">{quantity}</span>
                <button
                  onClick={increase}
                  className="bg-slate-300 px-4 py-2 hover:bg-slate-300/90 font-bold"
                >
                  &gt;
                </button>
              </div>
              <button className="bg-orange-400 py-4 px-2 w-5/12 hover:bg-orange-400/90">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl">Rating</h2>
            {reviews.map((item) => (
              <div key={item.id} className="bg-zinc-300 p-4 rounded-md">
                <h2 className="font-bold">{item.name}</h2>
                <p>{item.review}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default SinglePage;
