import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showImage, setShowImage] = useState(true);
  return (
    <Container
      onClick={() => setShowImage(!showImage)}
      style={{ background: "#ffdab9" }}
      className="p-4 rounded-4 h-100 lang-card"
      type="button"
    >
      {showImage && (
        <Container>
          <Image src={img} width="70%" className="lang-logo"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      )}
      {!showImage && (
        <ul className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="h5 text-start">{item}</li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default Language;
