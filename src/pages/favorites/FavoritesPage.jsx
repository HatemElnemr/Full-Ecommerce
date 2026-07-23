import React, { useContext } from "react";
import PageTransition from "../../components/PageTransition";
import { CartContext } from "../../context/CartContext";
import Product from "../../components/slideProduct/Product";
import "./favoritesPage.css"

export default function FavoritesPage() {
  const { favItems } = useContext(CartContext);
  return (
    <PageTransition>
      <div className="favorite_products">
        <div className="container">
          <div className="top_slide">
            <h2>Your Favorites</h2>
          </div>
          <div className="products">
            {favItems.length > 0 ? (
              favItems.map((item) => <Product key={item.id} product={item} />)
            ) : (
              <p>No Favorite Products yet.</p>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
