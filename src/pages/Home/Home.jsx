import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import homePageBgPhone from "/images/home/background-home-mobile.jpg";
import homePageBgTablet from "/images/home/background-home-tablet.jpg";
import homePageBgDesktop from "/images/home/background-home-desktop.jpg";

const pageVariants = {
  enter: { scale: 0.98, opacity: 0 },
  center: { scale: 1, opacity: 1 },
  exit: { scale: 0.98, opacity: 0 },
};

const Home = () => {
  const matchesPhone = useMediaQuery("(max-width: 768px)");
  const matchesTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1440px)"
  );
  const matchesDesktop = useMediaQuery("(min-width: 1440px)");

  useEffect(() => {
    if (matchesPhone)
      document.body.style.backgroundImage = `url(${homePageBgPhone})`;

    if (matchesTablet)
      document.body.style.backgroundImage = `url(${homePageBgTablet})`;

    if (matchesDesktop)
      document.body.style.backgroundImage = `url(${homePageBgDesktop})`;

    return () => (document.body.style.backgroundImage = ``);
  }, [matchesDesktop, matchesPhone, matchesTablet]);

  return (
    <>
      <motion.div
        className="home"
        variants={pageVariants}
        initial={"enter"}
        animate={"center"}
        exit={"exit"}
        transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <main className="home__main">
          <section className="home__hero">
            <h5>So, you want to travel to</h5>
            <h1>Space</h1>
            <p className="home__body">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </section>
          <section className="home__cta">
            <Link className="home__cta-link" to="/destination">
              <p className="cta-text">Explore</p>
            </Link>
          </section>
        </main>
      </motion.div>
    </>
  );
};

export default Home;
