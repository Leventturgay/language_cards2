import Language from "./Language";
import Container from "react-bootstrap/Container";
import { data } from "../helper/data";

const Card = () => {
  return (
    <Container className="rounded-4 mt-4" style={{ background: "#f48B29" }}>
      <h1>Language</h1>
      {data.map((lang, index) => {
        return <Language {...lang} key={index} />;
      })}
    </Container>
  );
};

export default Card;
