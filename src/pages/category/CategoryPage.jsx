import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProduct/Product";
import "./categoryPage.css";
import CategoryPageLoading from "./CategoryPageLoading";
import PageTransition from "../../components/PageTransition";

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}`,
        );
        const resData = await res.json();
        setProducts(resData.products);
      } catch (err) {
        console.log(`Error Fetching Data: ${err}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [category]);
  console.log(products);
  if (isLoading) return <CategoryPageLoading />;

  return (
    <PageTransition key={category}>
      <div className="category_products">
        {isLoading ? (
          <CategoryPageLoading />
        ) : (
          <div className="container">
            <div className="top_slide">
              <h2>
                {category.replace("-", " ")}: {products.length} Products
              </h2>
              <p>Add bestselling products to weekly line up</p>
            </div>
            <div className="products">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  isLoading={isLoading}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
