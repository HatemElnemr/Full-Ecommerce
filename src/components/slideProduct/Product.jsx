import { FaStar, FaStarHalf } from "react-icons/fa6";
import { FaCartArrowDown, FaCheck, FaRegHeart, FaShare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "/src/context/CartContext";
import ProductLoading from "./ProductLoading";
import { useContext } from "react";
import toast from "react-hot-toast";

export default function Product({ product, isLoading }) {
  const navigate = useNavigate();
  const { cartItems, addToCart, addToFav, favItems, removeFav } = useContext(CartContext);

  const isInCart = !isLoading && cartItems.some((i) => i.id === product.id);
  const isInFav = !isLoading && favItems.some((i) => i.id === product.id);

  function handleAddToCart() {
    addToCart(product);

    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{product.title}</strong>
          Added to cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 },
    );
  }

  function handleAddToFav() {
    if (isInFav) {
      removeFav(product.id)
      toast.error(`${product.title} Removed From Favorites`);
    } else {
      addToFav(product);
      toast.success(`${product.title} Added To Favorites`);
    }
  }

  if (isLoading) return <ProductLoading />;
  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/products/${product.id}`}>
        <span className="status-cart">
          <FaCheck /> In Cart
        </span>
        <div className="img_product">
          <img src={product.images[0]} alt={product.title} />
        </div>
        <p className="name_product">{product.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
        </div>

        <p className="price">
          <span>${product.price}</span>
        </p>
      </Link>

      <div className="icons">
        <span className="add-to-cart" onClick={() => handleAddToCart()}>
          <FaCartArrowDown />
        </span>
        <span className={`${isInFav ? "in-fav": ""}`} onClick={() => handleAddToFav()}>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}
