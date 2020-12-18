import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import Paymentb from "./Paymentb";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]); //force fully updating :this is why this [] used if we want to reload or remount any components
                //whenever there is a change in reload it just remounts everything
  const loadAllProducts = products => {
    return (
      <div>
        <h2>Movies: </h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2>This section for checkout</h2>
      </div>
    );
  };

  return (
    <Base title="Movies" description="Your Favourites">
      <div className="row text-center">
        <div className="col-6">
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h4>No favourite movies</h4>
          )}
        </div>
     {/*<div className="col-6">
          <Paymentb products={products} setReload={setReload} />
        </div>*/}
        <div className="col-6">
          <p>{products.description}</p>
        </div>
      </div>
    </Base>
  );
};

export default Cart;
