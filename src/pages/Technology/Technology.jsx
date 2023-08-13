import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import { content } from "../../content";

import techPageBgPhone from "../../../public/images/technology/background-technology-mobile.jpg";
import techPageBgTablet from "../../../public/images/technology/background-technology-tablet.jpg";
import techPageBgDesktop from "../../../public/images/technology/background-technology-desktop.jpg";

const pageVariants = {
  enter: { scale: 0.98, opacity: 0 },
  center: { scale: 1, opacity: 1 },
  exit: { scale: 0.98, opacity: 0 },
};

const Technology = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [direction, setDirection] = useState("");

  const matchesPhone = useMediaQuery("(max-width: 768px)");
  const matchesTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1440px)"
  );
  const matchesDesktop = useMediaQuery("(min-width: 1440px)");

  useEffect(() => {
    if (matchesPhone)
      document.body.style.backgroundImage = `url(${techPageBgPhone})`;

    if (matchesTablet)
      document.body.style.backgroundImage = `url(${techPageBgTablet})`;

    if (matchesDesktop)
      document.body.style.backgroundImage = `url(${techPageBgDesktop})`;

    return () => (document.body.style.backgroundImage = ``);
  }, [matchesDesktop, matchesPhone, matchesTablet]);

  const elementVariants = {
    enter: (direction) => {
      if (matchesDesktop)
        return {
          y: direction === "left" ? 20 : -20,
          opacity: 0,
        };

      return {
        x: direction === "left" ? 20 : -20,
        opacity: 0,
      };
    },
    center: () => {
      if (matchesDesktop)
        return {
          y: 0,
          opacity: 1,
        };

      return {
        x: 0,
        opacity: 1,
      };
    },
    exit: (direction) => {
      if (matchesDesktop)
        return {
          y: direction === "left" ? -20 : 20,
          opacity: 0,
        };

      return {
        x: direction === "left" ? -20 : 20,
        opacity: 0,
      };
    },
  };

  const motionElementProps = {
    custom: direction,
    variants: elementVariants,
    initial: "enter",
    animate: "center",
    exit: "exit",
    transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
  };

  const { tech } = content;

  return (
    <motion.div
      className="technology"
      variants={pageVariants}
      initial={"enter"}
      animate={"center"}
      exit={"exit"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <main className="technology__main">
        <h5 className="destination__heading page-heading">
          <span>03</span>Space launch 101
        </h5>
        <section className="technology__terminology">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.picture
              className="technology__term-image-container"
              key={tech.at(currentTech).image.imageAlt}
              {...motionElementProps}
            >
              <source
                media="(max-width: 1439px)"
                srcSet={tech.at(currentTech).image.imageSource.landscape}
              ></source>
              <source
                media="(min-width: 1440px)"
                srcSet={tech.at(currentTech).image.imageSource.portrait}
              ></source>
              <img
                className="technology__term-image"
                src={tech.at(currentTech).image.imageSource.landscape}
                alt={tech.at(currentTech).image.imageAlt}
              />
            </motion.picture>
          </AnimatePresence>

          <div className="technology__term-info-container">
            <div className="technology__term-selection">
              {tech.map((selection, i) => {
                return (
                  <button
                    onClick={() =>
                      setCurrentTech((curr) => {
                        curr - i < 0
                          ? setDirection("right")
                          : setDirection("left");

                        return i;
                      })
                    }
                    key={selection.name}
                    className={`technology__term-selection-item ${
                      currentTech === i ? "active" : ""
                    }`}
                  >
                    <p>{i + 1}</p>
                    {currentTech === i && (
                      <motion.div
                        layoutId="selection"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="selection-item-background"
                      ></motion.div>
                    )}
                  </button>
                );
              })}
            </div>

            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={tech.at(currentTech).name}
                className="technology__term-info"
                {...motionElementProps}
              >
                <h5 className="technology__term-title">The Terminology...</h5>
                <h3 className="technology__term-name">
                  {tech.at(currentTech).name}
                </h3>
                <p className="technology__term-description">
                  {tech.at(currentTech).description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Technology;
