import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import Navigation from "./components/Navigation/Navigation";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navigation></Navigation>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="home"></Navigate>} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<Navigate to={"/404"} />}></Route>
          <Route path="/404" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};
export default App;
