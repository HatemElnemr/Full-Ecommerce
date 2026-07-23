import { RiDeleteBin6Fill } from "react-icons/ri";
import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import PageTransition from "../../components/PageTransition";

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);
  console.log(cartItems);

  const totalCost = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  return (
    <PageTransition>
      <div className="checkout">
        <div className="order-summary">
          <h1>Order Summary</h1>
          <div className="items">
            {cartItems.map((item) => (
              <div className="item-cart" key={item.id}>
                <div className="item-details">
                  <div className="img-item">
                    <img src={item.images[0]} alt={item.title} />
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p className="item-price">$ {item.price}</p>
                    <div className="item-quantity">
                      <button onClick={() => decreaseQuantity(item)}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item)}>+</button>
                    </div>
                  </div>
                </div>
                <button
                  className="delete-item"
                  onClick={() => removeItem(item)}
                >
                  <RiDeleteBin6Fill />
                </button>
              </div>
            ))}
          </div>
          <div className="bottom-summary">
            <div className="shop-table">
              <p>Total:</p>
              <span className="total-checkout">$ {totalCost.toFixed(2)}</span>
            </div>
            <div className="btn-div">
              <button type="submit">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
