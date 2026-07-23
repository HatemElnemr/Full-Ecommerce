import { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import SlideProduct from "../../components/slideProduct/SlideProduct";

import "./home.css";
import PageTransition from "../../components/PageTransition";
// import Skeleton from "react-loading-skeleton";
// import 'react-loading-skeleton/dist/skeleton.css';

const categories = [
  { title: "Smartphones", slug: "smartphones" },
  { title: "Mobile Accessories", slug: "mobile-accessories" },
  { title: "Laptops", slug: "laptops" },
  { title: "Tablets", slug: "tablets" },
  { title: "Men's Watches", slug: "mens-watches" },
  { title: "Sports's Accessories", slug: "sports-accessories" },
];

function Home() {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(
              `https://dummyjson.com/products/category/${category.slug}`,
            );
            const resData = await response.json();
            return { [category.slug]: resData.products };
          }),
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.log("Error fetching", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <PageTransition>
      <div>
        <HeroSlider />
        {categories.map((category) => (
          <SlideProduct
            key={category.slug}
            title={category.title}
            isLoading={isLoading}
            productsData={products[category.slug]}
          />
        ))}
      </div>
    </PageTransition>
  );
}

export default Home;
