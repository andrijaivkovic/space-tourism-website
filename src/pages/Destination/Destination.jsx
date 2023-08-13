import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import destinationPageBgPhone from "../../../public/images/destination/background-destination-mobile.jpg";
import destinationPageBgTablet from "../../../public/images/destination/background-destination-tablet.jpg";
import destinationPageBgDesktop from "../../../public/images/destination/background-destination-desktop.jpg";

import { content } from "../../content";

const elementVariants = {
  enter: (direction) => {
    return {
      x: direction === "left" ? 20 : -20,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction === "left" ? -20 : 20,
      opacity: 0,
    };
  },
};

const pageVariants = {
  enter: { scale: 0.98, opacity: 0 },
  center: { scale: 1, opacity: 1 },
  exit: { scale: 0.98, opacity: 0 },
};

const Destination = () => {
  const [currentPlanet, setCurrentPlanet] = useState(0);
  const [direction, setDirection] = useState("");

  const matchesPhone = useMediaQuery("(max-width: 768px)");
  const matchesTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1440px)"
  );
  const matchesDesktop = useMediaQuery("(min-width: 1440px)");

  useEffect(() => {
    if (matchesPhone)
      document.body.style.backgroundImage = `url(${destinationPageBgPhone})`;

    if (matchesTablet)
      document.body.style.backgroundImage = `url(${destinationPageBgTablet})`;

    if (matchesDesktop)
      document.body.style.backgroundImage = `url(${destinationPageBgDesktop})`;

    return () => (document.body.style.backgroundImage = ``);
  }, [matchesDesktop, matchesPhone, matchesTablet]);

  const motionProps = {
    custom: direction,
    variants: elementVariants,
    initial: "enter",
    animate: "center",
    exit: "exit",
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  const { planets } = content;

  return (
    <motion.div
      className="destination"
      variants={pageVariants}
      initial={"enter"}
      animate={"center"}
      exit={"exit"}
      transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
    >
      <main className="destination__main">
        <h5 className="destination__heading page-heading">
          <span>01</span>Pick your destination
        </h5>
        <section className="destination__choice">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.picture
              key={planets.at(currentPlanet).image.imageSource.png}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              {...motionProps}
            >
              <source
                type="image/webp"
                srcSet={planets.at(currentPlanet).image.imageSource.webp}
              ></source>
              <source
                type="image/png"
                srcSet={planets.at(currentPlanet).image.imageSource.png}
              ></source>
              <img
                className="destination__planet-image"
                src={planets.at(currentPlanet).image.imageSource.png}
                alt={planets.at(currentPlanet).image.imageAlt}
              />
            </motion.picture>
          </AnimatePresence>
          <div className="destination__choice-info">
            <div className="destination__choice-info-header">
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.h2
                  key={planets.at(currentPlanet).name}
                  className="destination__name"
                  {...motionProps}
                >
                  {planets.at(currentPlanet).name}
                </motion.h2>
              </AnimatePresence>
              <motion.ul className="destination__planets-list">
                {planets.map((planet, i) => (
                  <li
                    key={planet.name}
                    className={`destination__planets-list-item ${
                      i === currentPlanet ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() =>
                        setCurrentPlanet((curr) => {
                          curr - i < 0
                            ? setDirection("right")
                            : setDirection("left");

                          return i;
                        })
                      }
                    >
                      <p className="subheading-2">{planet.name}</p>
                    </button>
                    {i === currentPlanet ? (
                      <motion.div
                        className="destination__underline"
                        layoutId="underline"
                      />
                    ) : null}
                  </li>
                ))}
              </motion.ul>
            </div>
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.p
                key={planets.at(currentPlanet).description}
                className="destination__choice-info-description"
                {...motionProps}
              >
                {planets.at(currentPlanet).description}
              </motion.p>
            </AnimatePresence>
            <div className="divider"></div>
            <div className="destination__choice-info-footer">
              {" "}
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.div
                  key={planets.at(currentPlanet).distance}
                  className="destination__distance"
                  {...motionProps}
                >
                  <p className="subheading-2">Avg. distance</p>
                  <p className="subheading-1">
                    {planets.at(currentPlanet).distance}
                  </p>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.div
                  key={planets.at(currentPlanet).travelTime}
                  className="destination__travel-time"
                  {...motionProps}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="subheading-2">Est. travel time</p>
                  <p className="subheading-1">
                    {planets.at(currentPlanet).travelTime}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Destination;
