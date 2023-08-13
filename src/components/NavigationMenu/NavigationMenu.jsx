import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const menuList = [
  { name: "Home", number: "00", to: "/home" },
  { name: "Destination", number: "01", to: "/destination" },
  { name: "Crew", number: "02", to: "/crew" },
  { name: "Technology", number: "03", to: "/technology" },
];

const NavigationMenu = ({ isMenuOpen, setIsMenuOpen, matchesAboveTablet }) => {
  const location = useLocation();

  const menuListItemVariants = !matchesAboveTablet
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {};

  const menuListBackgroundVariants = !matchesAboveTablet
    ? {
        initial: {
          x: "110vw",
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(50px)",
          opacity: 0,
        },

        animate: {
          x: 0,
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(50px)",
          opacity: 1,
        },

        exit: {
          x: "110vw",
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
          opacity: 0,
        },
      }
    : {};

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="navigation__menu"
          variants={menuListBackgroundVariants}
          transition={{ ease: "easeInOut", duration: 0.4 }}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          <ul>
            <AnimatePresence>
              {menuList.map((menuItem, i) => {
                return (
                  <motion.li
                    key={menuItem.name}
                    variants={menuListItemVariants}
                    initial={"initial"}
                    animate={"animate"}
                    exit={"exit"}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.32,
                      delay: 0.25 + i * 0.1,
                    }}
                  >
                    <NavLink
                      onClick={() =>
                        !matchesAboveTablet && setIsMenuOpen(false)
                      }
                      className="navigation__item"
                      to={menuItem.to}
                    >
                      <span>{menuItem.number}&nbsp;</span>
                      <p className="navigation-text">{menuItem.name}</p>
                      {menuItem.to === location.pathname && (
                        <motion.div
                          className="active-item-indicator"
                          layoutId="active-item-indicator"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        ></motion.div>
                      )}
                    </NavLink>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
