import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import { content } from "../../content";

import crewPageBgPhone from "../../../public/images/crew/background-crew-mobile.jpg";
import crewPageBgTablet from "../../../public/images/crew/background-crew-tablet.jpg";
import crewPageBgDesktop from "../../../public/images/crew/background-crew-desktop.jpg";

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

const Crew = () => {
  const [currentCrewMember, setCurrentCrewMember] = useState(0);
  const [direction, setDirection] = useState("");

  const matchesPhone = useMediaQuery("(max-width: 768px)");
  const matchesTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1440px)"
  );
  const matchesDesktop = useMediaQuery("(min-width: 1440px)");

  useEffect(() => {
    if (matchesPhone)
      document.body.style.backgroundImage = `url(${crewPageBgPhone})`;

    if (matchesTablet)
      document.body.style.backgroundImage = `url(${crewPageBgTablet})`;

    if (matchesDesktop)
      document.body.style.backgroundImage = `url(${crewPageBgDesktop})`;

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

  const { crew } = content;

  return (
    <motion.div
      className="crew"
      variants={pageVariants}
      initial={"enter"}
      animate={"center"}
      exit={"exit"}
      transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className="crew__main">
        <h5 className="crew__heading page-heading">
          <span>02</span>Meet Your Crew
        </h5>
        <section className="crew__members">
          <div className="crew__member-image-container">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.picture
                key={crew.at(currentCrewMember).image.imageSource.png}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                {...motionProps}
              >
                <source
                  type="image/webp"
                  srcSet={crew.at(currentCrewMember).image.imageSource.webp}
                ></source>
                <source
                  type="image/png"
                  srcSet={crew.at(currentCrewMember).image.imageSource.png}
                ></source>
                <img
                  className="crew__member-image"
                  src={crew.at(currentCrewMember).image.imageSource.png}
                  alt={crew.at(currentCrewMember).image.imageAlt}
                />
              </motion.picture>
            </AnimatePresence>
          </div>
          <div className="crew__member-info-container">
            <ul className="crew__member-select">
              {crew.map((member, i) => (
                <li key={member.name} className={`crew__member-select-option`}>
                  <button
                    onClick={() =>
                      setCurrentCrewMember((curr) => {
                        curr - i < 0
                          ? setDirection("right")
                          : setDirection("left");

                        return i;
                      })
                    }
                  >
                    <div className="dot dot--inactive"></div>
                    {currentCrewMember === i && (
                      <motion.div
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        layoutId="dot"
                        className="dot dot--active"
                      ></motion.div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={crew.at(currentCrewMember).name}
                className="crew__member-info"
                {...motionProps}
              >
                <h4 className="crew__member-title">
                  {crew.at(currentCrewMember).title}
                </h4>
                <h3 className="crew__member-name">
                  {crew.at(currentCrewMember).name}
                </h3>
                <p className="crew__member-description">
                  {crew.at(currentCrewMember).description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Crew;
