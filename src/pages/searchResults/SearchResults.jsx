import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "../../components/slideProduct/Product";
import PageTransition from "../../components/PageTransition";
import SearchResultsLoading from "./SearchResultsLoading";


export default function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("query");
  const [searchRes, setSearchRes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(query);
  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const resData = await res.json();
        setSearchRes(resData.products || []);
      } catch (err) {
        console.log(`Failed to fetch products: ${err}`);
      } finally {
        setIsLoading(false);
      }
    }
    if (query) fetchResults();
  }, [query]);

  console.log(searchRes);
  return (
    <PageTransition key={query}>
      <div className="category_products">
        {isLoading ? (
          <SearchResultsLoading />
        ) : searchRes.length > 0 ? (
          <div className="container">
            <div className="top_slide">
              <h2>Results For: {query}</h2>
            </div>
            <div className="products">
              {searchRes.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  isLoading={isLoading}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="container">
            <p>No Results Found</p>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
