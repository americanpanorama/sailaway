import { Link } from 'react-router-dom';
import { LandingContainer } from './styled';

const Landing = () => {
  return (
    <main>
      <LandingContainer>
        <div id="introAndControls">
          <p>
            <cite>From Nova Scotia to Nandipo</cite> is a digital edition of a mysterious, mid-nineteenth century ship's journal located in Boatwright Memorial Library's Rare Books and Special Collections. The origins and provenance of the journal are unknown, but the signature of one Vernon G. Locke is found throughout the book. While we can't confirm his relationship to this journal, we have compiled information on what little is known about his life, and added it to a <Link to='vernonguyonlocke'>dedicated Vernon Locke page</Link>.
          </p>
          <p>
            At least four different vessels are written about in the journal: two brigs, the Gem of Beverly and the Sonora; one bark, the Vernon; and a fourth unknown vessel. It is possible, even likely, that there are more ships included towards the end of the journal, as that is where the handwriting becomes more difficult to decipher. 
          </p>
          <div className="controls">
            <Link to="../1">
              <button>Start reading</button>
            </Link>
          </div>
        </div>
      </LandingContainer>
    </main>
  );
};

export default Landing;
