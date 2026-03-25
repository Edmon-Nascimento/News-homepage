import logoImg from "../../assets/logo.svg";
import openMenuIcon from "../../assets/icon-menu.svg";
import closeMenuIcon from "../../assets/icon-menu-close.svg";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <>
      <header className="flex items-center justify-between p-4">
        <img className="" src={logoImg} alt="newspapper-logo" />
        <button
          className="z-99"
          onClick={() => {
            handleMenu();
          }}
        >
          <img
            src={`${isMenuOpen ? closeMenuIcon : openMenuIcon}`}
            alt=""
            className="lg:hidden"
          />
        </button>
        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} z-99 fixed top-0 left-0 h-screen w-50 bg-black/80 text-white flex-col items-end p-4 gap-3 lg:flex lg:flex-row lg:bg-transparent lg:static lg:w-auto lg:h-auto lg:text-black
          
          `}
        >
          <a href="#">Home</a>
          <a href="#">New</a>
          <a href="#">Popular</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a> 
        </nav>
      </header>

      {isMenuOpen && (
        <div className="w-screen h-screen bg-black/50 fixed top-0 left-0" onClick={handleMenu}></div>
      )}
    </>
  );
}

export default Header;
