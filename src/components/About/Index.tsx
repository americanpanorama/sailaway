import { Link } from "react-router-dom";
import * as Styled from "./styled";

const About = () => {
  return (
    <Styled.OuterContainer>
      <Styled.InnerContainer>
        <h2>About</h2>
        <p>
          <cite>From Nova Scotia to Nandipo</cite> is a digital collection highlighting a mysterious, mid-nineteenth century ship's journal located in Boatwright Memorial Library's Rare Books and Special Collections. The origins and provenance of the journal are unknown, but the signature of one <Link to='/vernonguyonlocke'>Vernon G. Locke</Link> is found throughout the book. Additionally, at least four different vessels are written about in the journal: two brigs,
          the Gem of Beverly and the Sonora; one bark, the Vernon; and a fourth unknown vessel. Given the increasingly illegible handwriting towards the journal's end, there may be additional ships mentioned in its final entries.
        </p>
        <p>
          Produced and maintained by Boatwright Memorial Library's Digital Engagement department, this project is the result of creative collaboration between many individuals both within and outside of the library. Lynda Kachurek and Betty Dickie of Boatwright Memorial Library's Book Arts, Archives, and Rare Books Department introduced us to the ship's journal, entrusted us with its digitization, and supported our many ideas and plans. Marion Dieterich, Bianca Spurlock, and Angie White worked together to create, plan, and implement the many different aspects of this project. This project would not have been possible without the help of several of DE's remarkable student employees: Miguel Castello, Elliot Kim, Yuncheng Liu, Hyejin Park, Amy Shick, Scott Shim, Dodo Stavrev, and Xiaoting Sun. Their enthusiasm, interest, and hard work are the backbone of this endeavor and many other projects within the library. For this latest iteration, which builds off a retired digital collection that was called <cite>Sail Away</cite>, Dieterich completed, reviewed, and corrected the transcript; Robert K. Nelson developed the application; and Chad Devers designed the site.
        <p>
            We are grateful to The Mariners' Museum Library at Christopher Newport University for generously offering their time and expertise, helping us better understand the journal and its historical significance.
          </p>
        </p>
        <p></p>
      </Styled.InnerContainer>
    </Styled.OuterContainer>
  );
};

export default About;
