import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import PageError from "./PageError";
import { connect } from "frontity";

const Router = ({ state }) => {
  const currentRoute = state.router.link;

  switch (currentRoute) {
    case "/":
      return <Home />;
    case "/about/":
      return <About />;
    case "/contacts/":
      return <Contact />;
    default:
      return <PageError />;
  }
};

export default connect(Router);
