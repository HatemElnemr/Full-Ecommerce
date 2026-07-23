import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./searchBox.css";
export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const location = useLocation()
  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSuggestions([]);
  }

  useEffect(() => {
    async function fetchSuggestions() {
      if (!searchTerm.trim()) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`,
        );
        const resData = await res.json();
        setSuggestions(resData.products.slice(0, 5) || []);
      } catch (err) {
        console.log("Search error:", err);
        setSuggestions([]);
      }
    }
    const debounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  useEffect(() => {
    function handleProductClick() {
      setSuggestions([])
      setSearchTerm("")
    }
    handleProductClick()
  }, [location])
  return (
    <div className="search_box_container">
      <form onSubmit={handleSubmit} className="search-box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item) => (
            <Link to={`/products/${item.id}`}>

            <li key={item.id}>
              <img src={item.images[0]} />
              <span>{item.title}</span>
            </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
