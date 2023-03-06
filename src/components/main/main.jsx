import { useEffect } from "react";
import { Product } from "../products/product";
import axios from "axios";

export const Main = ({ products, setProducts }) => {
  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);

  console.log(products);

  return (
    <>
      {/* <EventBanner /> */}
      <div>
        <p>최신순</p>
        <p>낮은 가격</p>
        <p>높은 가격</p>
      </div>
      <main>
        {products.map((product) => {
          return <Product key={`key-${product.id}`} product={product} />;
        })}
      </main>
    </>
  );
};
