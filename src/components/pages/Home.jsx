// Home.jsx
import React from "react";
import Nav from "../partials/Nav";
import Heading from "../content/Heading";
import Body from "../content/Body";

function Home(props) {
  return (
    <div className="container">
      <Nav />
      <div className="flex-container">
        <div className="flex-item">
          <Heading content="Hello." />
          <Heading content="I'm Ma'Sum." />
          <Body
            class="subheading"
            content="I am a front-end web developer."
          />
        </div>

      </div>

    </div>
  );
}

export default Home;
