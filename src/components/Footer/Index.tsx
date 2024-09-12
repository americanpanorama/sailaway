import { Link } from "react-router-dom";
import { useDimensions } from "../../hooks";
import * as Styled from "./styled";

const Footer = () => {
  const { media } = useDimensions();
  return (
    <Styled.Footer>
      <a
        href="https://library.richmond.edu/collections/digital/index.html"
        target="_blank"
        rel="noreferrer"
      >
        Digital Collections <span style={{ display: media === "phone" ? "none" : "auto" }}> at the University of Richmond</span>
      </a>
      <Link to="contactus">Contact Us</Link>
    </Styled.Footer>
  );
};

export default Footer;
