import {useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "./productDetails.css";

import SlideProduct from "../../components/slideProduct/SlideProduct";
import ProductDetailsLoading from "./ProductDetailsLoading";


import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";

export default function ProductDetails() {

  

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

 

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const resData = await response.json();
        setProduct(resData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [product?.category]);

 
  

  return (
    <PageTransition key={id}>
      {isLoading ? (
        <ProductDetailsLoading />
      ) : (
        <>
          <div className="item_details">
            <div className="container">
              <ProductImages product={product} />

              <ProductInfo product={product}/>
            </div>
          </div>

          <SlideProduct
            key={product.category}
            productsData={relatedProducts.products}
            title={product.category.replace("-", " ")}
            isLoading={loadingRelatedProducts}
          />
        </>
      )}
      {
        !product && <p>Product Not Found</p>
      }
    </PageTransition>
  );
}
