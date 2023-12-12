import React from "react";

function Heading(props) {
  return (
    <div>
      <h1 className="heading-text">{props.content}</h1>
    </div>
  );
}

export default Heading;
