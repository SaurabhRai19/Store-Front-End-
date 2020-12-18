import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  //   function(f){return f} like if i pass give it back to me just fo something for having this as prop
  reload = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";
  const videoUrl = product ? product.video : "www.youtube.com";
  const director = product ? product.director : "No mentioned";
  const stock = product ? product.stock : "Soon";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Favourite
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload); //we pass this as a prop to cart so it reloads the cart there after removing this product
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from Favourite
        </button>
      )
    );
  };
  return (
    <div className="card text-secondary bg-light border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-secondary text-white font-weight-normal text-wrap">
          {cartDescrption}
        </p>
        <p>Release: {stock}</p>
        <div>
          <h4 className="btn btn-info rounded  btn-sm px-4">Director: {director}</h4>
        </div>
        <div>
          <h4 className="btn btn-info rounded  btn-sm px-4">IMDB: {cartPrice}</h4>
        </div>
        <div>
          <a className="btn btn-info rounded  btn-sm px-4" target="_blank" href={videoUrl}>View</a>
        </div>

        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
