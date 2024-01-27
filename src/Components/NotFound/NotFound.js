import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="error-page">
        <div className="not-found">
      <h1>
        <span className="error-code">404</span>
        <br /> <span className="error-message">Page Not Found</span>{" "}
      </h1>
      <button className="go-home">
        <a href="/">Go Home</a>
      </button>
    </div>
    </section>
  );
};

export default NotFound;
