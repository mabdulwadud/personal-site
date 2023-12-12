import React from "react";

function Body(props) {
  return (
    <div>
      <p className={props.class}> {props.content} </p>
    </div>
  );
}

export default Body;
