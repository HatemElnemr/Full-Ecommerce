import { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

function BottomHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryNavOpen, setIsCategoryNavOpen] = useState(false);

  const categoryNavRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        categoryNavRef.current &&
        !categoryNavRef.current.contains(event.target)
      ) {
        setIsCategoryNavOpen(false);
        
      }
    }
    if (isCategoryNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    setTimeout(() => {
          categoryNavRef.current.scrollTo({ y: 0 }, isCategoryNavOpen);
        }, 300);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [isCategoryNavOpen]);

  function handleCategoryClick() {
    setIsCategoryNavOpen(false);
  }

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://dummyjson.com/products/categories");
      const resData = await res.json();

      if (!res.ok) {
        throw new Response("Failed to Fetch Categories", {
          status: res.status,
        });
      }

      setCategories(resData);
    }

    fetchCategories();
  }, []);

  return (
    <div className="btm-header">
      <div className="container">
        <nav className="nav">
          <div className="category-nav">
            <div
              className="category-btn"
              onClick={() => {
                setIsCategoryNavOpen(!isCategoryNavOpen);
              }}
            >
              <IoMdMenu />
              <p>Browse Category</p>
              <MdOutlineArrowDropDown />
            </div>

            <div
              ref={categoryNavRef}
              className={`category-nav-list ${isCategoryNavOpen ? "active" : ""} `}
            >
              {categories.map((category) => (
                <Link
                  onClick={() => handleCategoryClick()}
                  key={category.slug}
                  to={`/category/${category.slug}`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-links">
            {navLinks.map((item) => (
              <li
                key={item.title}
                className={location.pathname === item.link ? "active" : ""}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="sign-regs-icons">
          <Link to="/">
            <PiSignInBold />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
