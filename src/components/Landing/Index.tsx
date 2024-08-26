import { useState } from "react";
import { Link } from "react-router-dom";
import TextsMenu from "./TextsMenu";
import type { DocType } from "../../index.d";
import "../../styles/Landing/Landing.scss";

const Landing = () => {
  const [docType, setDocType] = useState<DocType>("Gem of Beverly");

  return (
    <main>
      <div id="landing">
        <div id="introAndControls">
          <p>
            Sail Away is a digital exhibit highlighting a mysterious, mid-nineteenth century ship’s journal located in Boatwright Memorial Library’s Rare Books and Special Collections.The origins and provenance of the journal are unknown, but the signature of one Vernon G. Locke is found throughout the book. While we can’t confirm his relationship to this journal, we have compiled information on
            what little is known about his life, and added it to a dedicated Vernon Locke page.
          </p>
          <p>
            At least four different vessels are written about in the journal: two brigs, the Gem of Beverly and the Sonora; one bark, the Vernon; and a fourth unknown vessel. It is possible, even likely, that there are more ships included towards the end of the journal, as that is where the handwriting becomes more difficult to decipher. Pages that are known to belong with a certain ship are
            grouped together on the Browse Ships page, and all others fall under "Unknown Vessel."
          </p>
          <div className="controls">
            <Link to="../1">
              <button>Start reading</button>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Landing;
