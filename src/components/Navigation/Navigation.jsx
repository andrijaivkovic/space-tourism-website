import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import logo from "../../../public/images/logo.svg";

import HamburgerMenu from "../HamburgerMenuButton/HamburgerMenuButton";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const matchesAboveTablet = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (matchesAboveTablet) {
      setIsMenuOpen(true);
    }
  }, [matchesAboveTablet]);

  const location = useLocation();

  return (
    <nav className="navigation">
      <NavLink
        onClick={(e) => location.pathname === "/home" && e.preventDefault()}
        // ^^ disables the link if user is already on the home page
        to={"/home"}
      >
        <img
          className="navigation__logo"
          src={logo}
          alt="Space Tourism Logo, a white circle with a black, five-pointed star in the middle of it."
        />
      </NavLink>
      <div className="navigation__line"></div>
      <NavigationMenu
        matchesAboveTablet={matchesAboveTablet}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      ></NavigationMenu>
      <HamburgerMenu
        className="hamburger-menu"
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((curr) => !curr)}
      ></HamburgerMenu>
    </nav>
  );
};

export default Navigation;
