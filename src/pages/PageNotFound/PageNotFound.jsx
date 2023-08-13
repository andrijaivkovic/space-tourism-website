import logo from "/images/logo.svg";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <img
        className="page-not-found__logo"
        src={logo}
        alt="Space Tourism Logo, a white circle with a black, five-pointed star in the middle of it."
      />
      <h3>Page not found</h3>
    </div>
  );
};

export default PageNotFound;
