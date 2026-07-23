import { useContext } from "react";
import { FaRegHeart, FaShare, FaStar, FaStarHalf } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ProductInfo({ product }) {
  const { cartItems, addToCart, favItems, addToFav, removeFav } = useContext(CartContext);
  const navigate = useNavigate()
  const isInCart = cartItems.some((item) => item.id === product.id);
  const isInFav = favItems.some((item) => item.id === product.id);

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

  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
      </div>
      <p className="price">$ {product.price}</p>
      {product.availabilityStatues && (
        <h5>
          Availability: <span>{product.availabilityStatues}</span>
        </h5>
      )}
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="desc">{product.description}</p>
      <h5 className="stock">
        <span>Hurry Up! Only {product.stock} products left in stock.</span>
      </h5>

      <button
        className={`btn ${isInCart ? "in-cart" : ""}`}
        onClick={() => handleAddToCart()}
      >
        {isInCart ? "Item in cart" : "Add to cart"} <TiShoppingCart />
      </button>

      <div className="icons">
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
