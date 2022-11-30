import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <Container
      onClick={() => setShowDesc(!showDesc)}
      style={{ background: "#ffdab9" }}
      className="p-4 rounded-4"
    >
      <Container>
        <Image src={img} width="70%"></Image>
        <h3 className="display-6">{name}</h3>
      </Container>
      <ul>
        {options.map((item) => {
          return <li className="h5 text-start">{item}</li>;
        })}
      </ul>
    </Container>
  );
};

export default Language;
