import React from "react";
import Painting from "../../components/Painting";

const Bears = (props) => {
    console.log("BEARS")
  return (
    <Painting {...props} nickname="Bears">
    </Painting>
  );
};

export default Bears;
