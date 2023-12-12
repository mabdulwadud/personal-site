// Home.jsx
import React from "react";
import Nav from "../partials/Nav";
import Heading from "../content/Heading";

function Home(props) {
  return (
    <div className="container">
      <Nav />
      <Heading content="Hello." />
      <Heading content="I'm Ma'Sum."/>
    </div>
  );
}

export default Home;
