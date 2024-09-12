import { Footnote, OuterContainer, InnerContainer, FootnoteContent } from './styled';

const Article = () => (
  <OuterContainer>

  <InnerContainer>
    <h1>Who was Vernon Guyon Locke?</h1>
    <h3>Bianca Spurlock</h3>
    <blockquote>
      “He is said to be a great scamp, and a very plausible one.” <br />
      William Norman Rudolf, Rudolf Diaries (1863)
      <Footnote>
        1
        <FootnoteContent className="footnote-content">
          William Norman Rudolf, <em>Rudolf Diaries</em> (1863), quoted in Greg Marquis, <em>In Armageddon's Shadow: The Civil War and Canada's Maritime Provinces</em>, (McGill-Queen’s University Press, 1998), 135-136.
        </FootnoteContent>
      </Footnote>
    </blockquote>

    <p>
      Within the pages of the ship's journal, one signature prominently stands out: Vernon Locke. Who is this Vernon Locke, and is this ship's journal, filled with beautiful script, nautical history, and even poetry, his?
    </p>

    <p>
      Research indicates that a Vernon Guyon Locke was born in 1827 in Sandy Point, Shelbourne County, Nova Scotia, to an important family in the fishing community of Lockeport.
      <Footnote>
        2
        <FootnoteContent className="footnote-content">
          Marquis, <em>In Armageddon’s Shadow</em>, 135.
        </FootnoteContent>
      </Footnote>
      In 1840, according to one of Vernon Locke’s brothers, Locke left to work in the United States. Eben Locke stated that Locke worked up and down the East Coast, as far as Fayetteville, North Carolina, while also traveling to the West Indies and the Bahamas. Diarist William Norman Rudolf, who wrote on the Chesapeake Crisis, wrote that Locke “also sailed out of Pictou in a vessel called the Vernon, built by Captain D. Donald for a Boston firm.”
      <Footnote>
        3
        <FootnoteContent className="footnote-content">
          Ibid.
        </FootnoteContent>
      </Footnote>
      The Vernon, a 265 ton brigantine, was later wrecked, then sold.
    </p>

    <p>
      The Eastern Chronicle reported that Locke was well known in Pictou as the master of the brig Sonora, and the Vernon, although there are not many ship or master crew lists that verify this.
      <Footnote>
        4
        <FootnoteContent className="footnote-content">
          Ibid.
        </FootnoteContent>
      </Footnote>
      During the Civil War, Locke chose to become a pirate, stealing ships and their cargo under the auspices of privateering. Privateers were sanctioned by their government to attack the vessels of foreign countries, and while Locke claimed to be an officer in the army of the Confederate States of America, it does not seem as though he ever truly was.
      <Footnote>
        5
        <FootnoteContent className="footnote-content">
          Ella Lonn, <em>Foreigners in the Confederacy</em>, (The University of North Carolina Press, 2002), 294.
        </FootnoteContent>
      </Footnote>
    </p>

    <p>
      Vernon Locke secured a letter of marque for the brig, Retribution, from Thomas Power, and used an alias John Parker. As John Parker, and many other aliases, Mr. Locke went on to capture the schooner Hanover in 1863, and pilfer its cargo.
      <Footnote>
        6
        <FootnoteContent className="footnote-content">
          Marquis, <em>In Armageddon’s Shadow</em>, 136.
        </FootnoteContent>
      </Footnote>
      His crew then captured the brigs Emily Fisher and J. P. Elliot. There, the Fisher’s captain recognized the Retribution’s captain, now going by the name John Priestly, as Captain Locke. The J.P. Elliot’s crew decided not to defect to the privateers and instead overpowered them and retook the ship. The Retribution was then taken by the authorities in Nassau, Bahamas, and deemed unseaworthy.
    </p>

    <p>
      At that time, Locke’s brother, Eben Locke, visited his brother in Nassau and saw that he was using an alias of John Parker, and was in commission of a Confederate ship. The authorities also learned of Parker’s false identity and implications in several acts of pirating, and arrested him. Locke posted bail and then vanished.
    </p>

    <p>
      It was in New Jersey, during the Civil War, that he met with John Braine, an equally nefarious character. Together, they created a con to take over a steamship called the Chesapeake, which they then navigated into British waters. One crew member was murdered, and Locke and some of his co-conspirators fled as Union warships closed in. In 1863, Locke and his co-conspirators went on trial for pirating the Chesapeake, but Locke had disappeared and was tried in absentia.
      <Footnote>
        7
        <FootnoteContent className="footnote-content">
          Canada Department of the Secretary of State, <em>Return Relating to Cases of Extradition of Prisoners Under Treaty Between Great Britain and the United States</em>. (McLean, Roger, & Co, 1877), 26.
        </FootnoteContent>
      </Footnote>
      Locke supposedly fled to Nassau, Bahamas, and never returned for his trial. This incident, which came close to creating an international legal disaster, became known as the “Second Chesapeake Affair” or “The Chesapeake Incident”.
    </p>

    <p>
      After the Chesapeake Incident, there is little to no information about the remainder of Locke's life.
    </p>
    </InnerContainer>
    </OuterContainer>
);

export default Article;