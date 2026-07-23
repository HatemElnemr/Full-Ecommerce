import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import TopHeader from "./components/header/TopHeader";
import BottomHeader from "./components/header/BottomHeader";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import CategoryPage from "./pages/category/CategoryPage";
import SearchResults from "./pages/searchResults/SearchResults";
import FavoritesPage from "./pages/favorites/FavoritesPage";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />

      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
