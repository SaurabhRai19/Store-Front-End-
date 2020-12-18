import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { Twemoji } from 'react-emoji-render';



export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  
  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the ITHENA MOVIE DB">
      <div className="row text-center">
      <Twemoji className="text-dark" text="Top rated movies for you 🔥" />
        <div className="row mt-4">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-6 mb-2">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
