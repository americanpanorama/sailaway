import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PageNumberOffsetsContexts } from "../../../Contexts";
import PageNumber from "../PageNumber/Index";
import * as Styled from "./styled";

const FloatingCoordinates = styled.span`
  float: right;
  padding-left: 10px;
`;

const Transcription = () => {
  const page = useParams().page || "1";

  // pageNum is stored in state and updated when any necessary scrolling has finished
  const [pageNum, setPageNum] = useState(0);
  // this is set to true if the element if scrollIntoView is necessary in the effect below. It's passed to PageNumber components to prevent them from navigating to a new page until the scroll here is complete.
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  //when the page number changes, scroll to the page on the transcription
  useEffect(() => {
    // Convert page parameter to number
    const targetPageNum = parseInt(page);
    if (targetPageNum !== pageNum) {
      const element = document.getElementById(`page-${page}`);
      const transcriptionContainer = ref.current;
      if (element && transcriptionContainer) {
        // Get the bounding rectangle of the element and the container
        const elementRect = element.getBoundingClientRect();
        const containerRect = transcriptionContainer.getBoundingClientRect();

        // Check if the element is outside the visible viewport of the container
        const isNotInView =
          elementRect.bottom > containerRect.bottom ||
          elementRect.top < containerRect.top;

        // If the target element is not visible in the container's viewport
        if (isNotInView) {
          element.scrollIntoView();
          let scrollTimeout: any;
          setIsAutoScrolling(true);
          const onScroll = (e: any) => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function () {
              setPageNum(parseInt(page));
              setIsAutoScrolling(false);
            }, 100);
          };
          transcriptionContainer.addEventListener("scroll", onScroll);
          return () => {
            transcriptionContainer.removeEventListener("scroll", onScroll);
          };
        } else {
          // If the page is already visible, directly update the page number state
          setPageNum(targetPageNum);
        }
      }
    }
  }, [page, pageNum]);


  return (
    <PageNumberOffsetsContexts.Provider
      value={{
        isAutoScrolling,
        activePage: pageNum,
        containerRef: ref,
      }}
    >
      <Styled.TranscriptionContainer ref={ref} id='transcription'>
        <PageNumber num={1} />
        <p>[This page has some penciled additions plus some largely illegible scribbles in ink]</p>
        <p>
          <h3 style={{ textAlign: "center" }}>
            Journal of a Whaling Voyage in the Atlantic
            <br />
            Ocean on board of the Brig Gem of Beverly
            <br />
            Nathaniel Ryder Marster [in pencil] pewinkle in
            <br />
            the place of a mate [end pencil]
          </h3>
        </p>
        <p><time dateTime="1851-04-07"><Styled.Hanging />Monday April 7th</time>&nbsp;&nbsp;civel account weighed Anchor in Provincetown Harbour set[?] Meridian with the Wind N.W.<br />
          <span style={{ textAlign: 'right', display: 'block' }}>[different ink] [illegible] J Boslow[?] [end different ink]</span>
        </p>
        <p><time dateTime="04-08"><Styled.Hanging />Tuesday April 8th</time>&nbsp;&nbsp;Nautical account first part of these 24h moderate, stood out by long point and lay becalmed until 5 P.M. A gentle breeze to the South, at 6 P.M. doubled Racepoint, at 7 P.M. sharp Haul lay up East move ship at 3[?] A.M. lay up S.S.W. the next part of these 24 hours continued beating down the shore the Watch employed in Ships duty, nothing more of importence occured So ends these 24 hours all hands well.
          <br />
          Norsett lights [Nauset Lighthouse, Cape Cod] bore NW by W 12 miles dist
        </p>
        <p>Dear Madam [different ink]&nbsp;&nbsp;15 12 13 14 [in pencil]
        </p>
        <p>[left margin, written upside down]
          <ul >
            <li>1 – 65</li>
            <li>75</li>
            <li>50</li>
            <li>Meal 20</li>
            <li>Meal 70</li>
            <li>Brd 60</li>
            <li>Sugar 120</li>
            <li>Butter 20</li>
            <li>Lard 23</li>
          </ul>
        </p>
        <p><time dateTime="1851-04-09"><Styled.Hanging />Wensday April 9th</time>&nbsp;&nbsp; first part of these 24 houres fresh Breezes from the S.E. lay up S.S.W. at 6 P.M. tacked ship, laying up E. by N at 6 furled [numeral 4 in margin] topgallant sails and flying gib. at 8 PM reafed fore and main topsails 10 O Clock hauled up the spencer [spanker] lay up E by N. at 3 in the morning made sail, fresh gales from the N.W. and fine weather saw on sail in sight<br />
          Latd 41=17 and Long 69=15 by Crse and dead Rec
        </p>
        <p>[written upside down] [illegible] 20 30 30
          <br />
          [left margin] W M
        </p>
        <p><time dateTime="1851-04-10"><Styled.Hanging />Thursday April 10th</time>&nbsp;&nbsp;
          first part of these 24 houres fine wether and a good Breze at the N.W. at 2 P.M. Unbent the cables and coiled them under deck. at 6 saw a Ship standing to the W. and 7 P.M. Crosed our stern. at 10 took in the spanker at midnight moderat breezes and Clear weather. at 4 in the morning a saile in sight runing about SE from 6 to 8[?] watch on deck sat up the after riging on the larboard side, all hands imployed in ships duty and overhawling towlines and preparing [the - struck through]  our boats for action. Latter part more moderat so ends theas 24 hours with a wach [illegible] [illegible]<br />
          Lat. 39=13 by Obn –  by Dead rec. [symbolic notation for method used] Long 68=30 – by Ded [illegible]=[illegible; tear in page]
        </p>
        <p>[written upside down, left margin]
          <ul>
            <li>1894[?]</li>
            <li>2</li>
            <li>Ending[?]</li>
          </ul><br /><br />
        </p>

        <PageNumber num={2} />
        <p><time dateTime="1851-04-11"><Styled.Hanging />Friday April 11th</time>&nbsp;&nbsp;
          first part of theas 24 hours Calm. at 4 P.M. saw a some grampeces. at 9 P.M. hurd blackfish blow, and saw learg schools of porpeces 9 A.M. saw plenty porpeces and 1 breach, 3 sail in sight. saw lots of peces of squid at 10 A.M. saw the remains of a reck, a learge ship that had ben burnt and left at sea at 10 ris - a larg school of black fish, prepaired to Lower, it being about 12 and dinner being ready, we something to stay the stomac first. thus ends theas 24 hours all hands in good sperits to lower after dinner, moderat breezes from the N.E.<br />Lat by D.R. 38 = 35<span style={{ paddingLeft: '20px' }} />Long by Cre'r 68=30
        </p>
        <p><time dateTime="1851-04-12"><Styled.Hanging />Saturday April the 12th</time>&nbsp;&nbsp;
          at ½ past 12 Lowered for black fish and took three. saw a thirty Bbl grampus at ¼ past 5 took moderat gulph squall. at midnight Strong gales from the north. squalley and raney and thus continues through these 24 hours<br />
          Lat 36=40<span style={{ paddingLeft: '20px' }} />Long by Cre'r 68=30 at 8 AM
        </p>
        <p><time dateTime="1851-04-13"><Styled.Hanging />Sunday April 13th</time>&nbsp;&nbsp;
          theas 24 hours commence with strong gales with rain squals the weather continues to be squaly at midnight the moon and Stars mak their aperence between the squalls and looks pleasant by spells. at 6 in the morning the wind moderated. mad all sail with the wind N.N.W. a sail in sight of the weather quarter so Ends theas 24 with fine weather all well.<br />
          Lat by Obn 33=49 by D.R. 34=03 Long by Cre'r 69=04 ou=is[?]
        </p>
        <p><time dateTime="1851-04-14"><Styled.Hanging />Monday April 14th</time>&nbsp;&nbsp;
          theas 24 houres commence with moderat clowdy weather. wind NW at midnight the wind southerd and bafling at 5 in the morning took in the top galliant sail and flying gib at 6 double reafed topsails and furled the mainsail. 7 took in jib spencer [spanker] and clost reafed fore topsail and furled the fore sail. the wind hauled to the south. Weast[?] latter part of theas  24 houres fresh Breezes from WSW<br />
          Lat by Ob 32 50 dead Rec 33=03  Long 68=47 [notation]<br /><br />
        </p>

        <PageNumber num={3} />
        <p><time dateTime="1851-04-15"><Styled.Hanging />Tuesday April 15th</time>&nbsp;&nbsp;
          the first part of thease 24 hours commence with fresh gales from the W with a heavy head beet [head-beat] sea. at midnight Cleare weather and fresh breezes from the W under reafed topsails. at 2 Oclock in the morning it moderated so that we sat the mainsail and at 3 took the reefs out of the topsails and sat the main top galliant sail. at 6 AM made all sail, and in a short time we had a flat calm. hauled up spanker, clued [clewed] up the top galliant sails, and hall down the gibs and let her role and tumble it out. at 9 AM the wind breezd up to the N with rain squalls so ends theas 24 houres<br />
          Lat by ob 31=43 by D.R. nv=nn[?]<Styled.LeftPadding />Long by Cr'er 70=38
        </p>
        <p><time dateTime="1851-04-16"><Styled.Hanging />Wensday April 16th</time>&nbsp;&nbsp;
          the first part of thease twenty four houres commence with fresh Gales and squalley weather at 2 P.M. took in top galiant sails and flying gib at 11 PM set the main top galiant sale at midnight weather squalley took in topgaliant sails &amp; deuring this wach from 12 to 4 at 7 took a heavy Squall from the weast Clewed up the fore and main topsails, from 8 to 12 fine weather. a sail in sight from aloft heading N Easterly thus Ends theas 24 houres<br />
          Lat. by ob 29=56 by Dr 30-03<Styled.LeftPadding />Long by Cr'er 71=36 Dr 71=04
        </p>
        <p>Mm calorr[?] [in pencil between entries]
        </p>
        <p><time dateTime="1851-04-17"><Styled.Hanging />Thursday April 17th</time>&nbsp;&nbsp;
          thease 24 houres commence with fine weather, moderate Gales from W, at 8 O Clock tacked ship at 10 P.M. took a Squall from the W. after the squall had spent the moast part of its fewry singlereased [single reefed] the fore and main topsails and set the fore and mainsail laying up S by E wind S.W. at 2 A.M. took a havy squall, at 8 A.M. under all sail Except single reafed fore and main topsails, from 8 to 12 fine weather with strong breezes from the W so Ends theas 24 houres with 2 sail in sight one heading to the S and the other to the N<br />
          Lat by Ob 28=30 by D.Re. 28=43<Styled.LeftPadding />Long by Cre 72=40 by Dr[?] [notation]=[notation]<br /><br />
        </p>

        <PageNumber num={4} />
        <p style={{ textAlign: 'center', marginBottom: -12 }}><span style={{ fontSize: '125%' }}>Continued</span>
        </p>
        <p><time dateTime="1851-04-18"><Styled.Hanging />Friday April the 18th/51</time>&nbsp;&nbsp;
          the first part of theas 24 houres commence with fine weather but fresh gales from the WSW. laying up S by W at 6 P.M. took a squall from the W it continued squolley through the knight some times we could carry them out by taking in our light sails, at other times we wer obliged to put her before the wind under her topsails settled down upon the [unclear] with the reaf tacles hauled up at ½ past 6 A M. it cleard of and we had fine weather, but fresh gales from the W  so Ends these 24 houres all hands imployed in ships duty and prepairing the boats for action <FloatingCoordinates>Lat 27<sup>ac</sup>-04<sup>ra</sup><Styled.LeftPadding />Long 72<sup>cn</sup>=13<sup>ri</sup><br /></FloatingCoordinates>
        </p>
        <p>
          <time dateTime="1851-04-19"><Styled.Hanging />Saturday April the 19th</time>&nbsp;&nbsp;
          theas 24 houres Commence moderate gales from WSW and hauling to the N.W. at 10 P.M. took a squoll from the W and the rain came in torrents about 11 P.M. it Cleared up and we had fine weather the remainder of theas 24 houres at 6 A.M. saw a topsail schooner heading to the N.N.E.<br /><span style={{ textAlign: 'center', display: 'block' }}>Lat 25=27<Styled.LeftPadding />Long 73=13</span>
          we find by Observations by the Quadrent and Crenator [chronometer] that we have had for two or three days past 2 or 2 ½ knots Current setting to the E it is proberbly owing to so much weasterly winds.
        </p>
        <p><time dateTime="1851-04-20"><Styled.Hanging />Sunday April 20th</time>&nbsp;&nbsp;
          the first part of theas 24 houres moderate gales from the W at 6 PM [unclear] whol sail breeze which continued untill 2 A.M. then took in top galliant sails flying gib and reefed the topsails at 10 A.M. two sail in sight heading N. latter part of theas 24 hours fresh gales from the W.S.W. so ends theas 24 houres <FloatingCoordinates>Lat 26=57<Styled.LeftPadding />Long 74=38</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-04-21"><Styled.Hanging />Monday April 21st</time>&nbsp;&nbsp;
          the first part of theas 24 hours commence with  strong gales from the W to S.W. heading north weasterly by the wind a heavy head beet sea at 2 A.M. began to moderate at 6 we wer under all sail at 10 A.M. breez freshened took in top gallient sails and flying gib, a ship in sight to windward heading to the south. Latter part of theas 24 houres fresh gales <FloatingCoordinates>Lat 28=15<Styled.LeftPadding />Long 75=42</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={5} />
        <p><time dateTime="1851-04-22"><Styled.Hanging />Tuesday April the 22nd/51</time>&nbsp;&nbsp;
          the first part of theas 24 houres commence with moderate gales from the W at ½ past 1 P.M. tacked Ship laying up SW by W cloash hall by the wind the wind and weather much the sam untill midknight when it began to squall up and the wind canted to the North. at 1 A.M. a tempest commenced which lasted some 2 houres the Wind still canting until 8 A.M. at which time the wind and weather had got settled with moderate gales from the E.N.E. with a verry heavy sharp swell heaving upon our larboard beam, we wer under the necesety of setting up our back stay to keep the brig from roaling away her topmasts so ends theas 24 houres <FloatingCoordinates>Lat 27=03<Styled.LeftPadding />Long 76=26</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-04-23"><Styled.Hanging />Wensday April 23rd/51</time>&nbsp;&nbsp;
          The first part of theas 24 hours commence with moderate gales from the Eastern Quarter with fine weather stearing S by W the wind and weather much the same untill 4 A.M. at which time the the [sic] breeze freshened and we steered W.S.W to make the land under Short sail till daylight at which time at 5 Oclock A.M. made man of war keys. on green turtle keys we then hauled up S.W. for Abbyco on the hole in the wall about this time saw 2 Spurm grampses and a School of blackfish. at 12 with the sun on the meridion squared the yards and steared our Course for Berry Islands Abaco light house baring N.N.W. 2 1/2 or 3 miles distant 4 sail in company Steering the same course with pleasant gales from the East so end theas 24 houres <FloatingCoordinates>77=10</FloatingCoordinates><br /><FloatingCoordinates>Lat 25=46 Long 77=10</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-04-24"><Styled.Hanging />Thursday April 24th</time>&nbsp;&nbsp;
          Theas 24 houres commence with gentle breezes from the E. and fine weather at 4 P.M.  made Sturap key [Great Stirrup Cay, Berry Islands, Bahamas] Stearing from the same at 6 P.M. took our departure Sturap key baring S 5 miles distant across the great Bahama at 8 P.M. weather Squoley and a Strong breeze S.E. by E. with continual flashes of very sharp lightening and some peals of thunder. took in sail and single reafed fore to topsail and double reafed the main. and S.W. by W. we steared, took a squol from the NE [unclear] up try sail&nbsp;<br /><br />

          <PageNumber num={6} />
          and took in gib at 10 P.M. having run the required distance to clear the sheep keys which the Coast pilot lay down 26½ hauled up S.W. by S till 1 A.M. then hauled up S W by S x S till 5 A.M. the wind canting to SSE Steared S.W. by the wind at 8 A.M. Orenge keys in sight from aloft baring N.W. 8 or 10 miles distant at ½ past 10 being about [unclear] and the wind a head[?] anchored 18 sail in sight moast of them at anchor on the great Bahama So ends theas twenty four hours <FloatingCoordinates>Lat 24=44<Styled.LeftPadding />Long 79=12</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-04-25"><Styled.Hanging />Friday April the 25th/51</time>&nbsp;&nbsp;
          the first part of theas 24 houres moderate gales from S varaying to S.W. and as the wind was a head for us to run for the double headed slot key on the salt keys we still lay at anchor all hands inployed in Ships duty, moderate gales the latter part of theas 24 houres 12 sale in site at anchor <FloatingCoordinates>Lat 24=44 Long<Styled.LeftPadding />79=12</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-04-26"><Styled.Hanging />Saturday April the 26th</time>&nbsp;&nbsp;
          theas theas sic 24 houres commence with moderate gales from the S with fine weather at ½ past 4 P.M. lowered our boats for exersise, spoke the Bark Adelaide of and from New York bound to Saglegrund[?]. at 8 P.M. fresh gales from the South which continued the same through the knight a number of Ships and Brigs came in on to the Banks and anchored with us, latter part of theas 24 houres fresh gales from the Weast so ends theas 24 hours <FloatingCoordinates>
            Lat 24=44 Long<Styled.LeftPadding />79=12</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-04-27"><Styled.Hanging />Sunday April the 27th</time>&nbsp;&nbsp;
          the first part of theas 24 houres lay at anchor on the Great Bahama, fresh gales from S.W. to W.N.W. caught a planty of suckerfish 4 P.M. moderate breezes. At 3 Oclock A.M. the wind canted to the N.E. got under way and steared S.W. x W for Salt key, latter part of theas 24 houres pleasant gales from NE <FloatingCoordinates>Lat 24=18<Styled.LeftPadding />Long 79=38</FloatingCoordinates><br />
          <br />
          George Williams the Steward prooves verry refractory will not attend to his duty. he has repetedly disobeyed The Captins Orders by sleeping in the forecastle after being strictly forbiden so to do<br /><br />
        </p>

        <PageNumber num={7} />
        <p><time dateTime="1851-04-28"><Styled.Hanging />Monday April the 28th/51</time>&nbsp;&nbsp;
          the first part of theas 24 houres moderate gales from the N.E. and fine weather, a plenty of flying fish, and sea fowl 3 P.M. made keys on salt key bank at 7 P.M. made Elbow key light from aloft baring SW. x W at 8 in site of deck baring S.W. 6 or 8 miles distant we at this time have a very strong current against us sailing at the rate of 4 or 5 knots before the wind through the knight the light on elbow key was plain in sight of deck at 5 in the morning latter part of theas 24 houres moderat gales from the NE saw a sail standing by the wind to the Northward so end theas 24 hours <FloatingCoordinates>Lat 23=37<Styled.LeftPadding />Long 81=11</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-04-29"><Styled.Hanging />Tuesday April the 29th/51</time><br />
          theas 24 houres commence and end with fresh gales from the Eastern quarter with fine weather Stearing W by S. at 8 A.M. saw three sail of ships and brigs standing by the wind saw two spurm grampuses and 1 Logerhead turtle saw a number of peces of Squid, a plenty of the spanish galleys and flying fish So ends theas 24 houres <FloatingCoordinates>Lat 24=15<Styled.LeftPadding />Long 83=26</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-04-30"><Styled.Hanging />Wensday April the 30th/51 ["dn" written in above "Wensday"]</time><br />
          theas 24 houres pleasant gales from the East 3 or 4 sail of vessels in sight by the wind saw 1 Spurm grampus also 3 turtle lowered waist boat and hove an iron into the second sised one and brought him alonge side he wayed about 200 pounds, at 1/2 past 6 P.M. having arived on to our Crewsing ground hove to under short sail commenced standing Quarter woches, at 6 A.M. moderat breeze from E and pleasant weather but a heavy swell heaving from the N.E. w[ind] W N.W till 8 A.M. our vessel roaled so bad that we jibd over and ran SW by S the latter part of theas 24 h all well <FloatingCoordinates>Lat 25=12<Styled.LeftPadding />Long 84=00</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-01"><Styled.Hanging />Thursday May the 1st/51</time><br />
          theas 24 houres commence with moderate gales from the E.S.E. at 4 P.M. saw a small breach on our weather beam stearing W by S suposed it to be porpeces [porpoises] 5 P.M. saw an onth breach in the same direction hauled up for it and verry soon saw a spout spray prooved to be spurm whale, we lowered for them theay wer then bound to the windward and our crew being green and not accustomed to&nbsp;<br /><br />

          <PageNumber num={8} />
          to rowing to an oar that we were unable to git up to them before dark and they had their spoutings out and went down and we saw nothing more of them, we headed to the south through the knight untill one Oclock A.M. the wind headed us of so theat we lay up S.W. and moderated away away [sic]  5 A.M. it was flat Calm, we made the best of our way back whare we saw the whale but we did not gain more than 6 or 8 miles all the forenoon so ends theas 24 hours <FloatingCoordinates>Lat 24=29<Styled.LeftPadding />Long 84=54</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-02"><Styled.Hanging />Friday May the 2nd/51</time><br />
          the first part of theas 24 houres calm saw a plenty porpeces at ½ past 5 P.M. saw some small breaches from aloft to the S of us, lowered larboard boat and rowed of in the same direction theay proved to be a school of porposes [porpoises] struck one and saved him. it held calm untill next morning at 6 A.M. when a breez sprung up from N.E. at 7 A.M. got site found ourselves in the Long of 84=20 latter part of theas 24 houres pleasant gales from N.E. at 12 got an Observation and find that we have a strong Current setting to the S.E. so ends theas 24 houres <FloatingCoordinates>Lat 24=30<Styled.LeftPadding />Long 84=40</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-03"><Styled.Hanging />Saturday May the 3rd/51</time><br />
          theas 24 commence with fine weather but rather fresh gales from the N.E. saw a large whale of our lee bow at 2 P.M. about 2 or 2 ½ miles distant, bore off and run 10 or 15 minutes from him and hove to the next time she came up she was off our weather bow about 1 or 1 ½ miles the wind had rather freshened lowered larboard and waist boats and chaised to the windward untill dark when the waist boat got onto her but she settled tail first leving nothing but her head out of watter the boat Stearer hove as he thought best but his iron drawed only taking out 5 or 6 fathoms of rope suposed that the iron hit the Eye bone latter part of these 24 hours moderate gales from Eastern quarter, steering N.W. at 10 A.M. ris a school of whales under our le[e] bow bore of[f] for them so ends these 24 hours <FloatingCoordinates>Lat 24=50<Styled.LeftPadding />Long 84=35</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={9} />
        <p><time dateTime="1851-05-04"><Styled.Hanging />Sunday May the 4th/51</time><br />
          the first part of theas 24 houres commence with pleasant gales from the N.E. with fine weather and whail in sight lowered larboard and waist boat and chased to the Leward an hour or two when hoisted signal for whales to windward lowered starboard boat and men all in chase Waist boat Struck one and saved him the school did not [unclear] at all but started of verry quick to the south the larboard boat chased as long as they could keep sight, took the whale alongside it being near dark had barly time to get up our cutting punchis ready to commence in the morning at 8 P.M. fresh breez from the E and continued through the knight at 4 in the morning fresh gales from the S.E. and very ruf ruged weather, got the whale cut in about 12 fresh gales at the end of these 24 hours all hands in good spirits. <FloatingCoordinates>Lat 24=10<Styled.LeftPadding />Long 84=20</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-05"><Styled.Hanging />Monday May the 5th/51</time><br />
          theas 24 hours commence with pleasant gales from the S all hands imployed in taking [unclear] of the [unclear] and [unclear] the Gales ceased to blow and we have at 6 PM a Calm which lasted until the latter part of the knight at 4 A.M. commenced boiling with fine weather and a light breeze from the S.E. latter part of these 24 hours very nearly calm so ends these 24 houres boiling blubber <FloatingCoordinates>Lat 34=04<Styled.LeftPadding />Long 84=18</FloatingCoordinates><br />
          <br />
          [noted in margin] Strong Current Setting to the S.E. [end note]<br />
        </p>
        <p><time dateTime="1851-05-06"><Styled.Hanging />Tuesday May the 6th/51</time><br />
          the first part of these 24 hours intirely Calm woch on deck imployed in boiling out, finished about 2 Oclock A.M. at 7 A.M. got a site Long 84=30 a breeze sprung up about this time from the N.E. we improoved[?] this opportunity to get back to the N.W. where we saw the whales, latter part of these 24 hours Strong breezes from the N.E. bad whailing weather so ends these 24 hours all well <FloatingCoordinates>Lat 24=48</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={10} />
        <p><time dateTime="1851-05-07"><Styled.Hanging />Wednsday May the 7th/51</time><br />
          these 24 hours commence with fresh gales from the N.E. all hands imployed in stowing down Oil and cleaning up decks at 5 P.M. got site, Long 84=50 at 6 P.M. took in sail and hove to for the knight heading to the N.W. at 7 A.M. got site Long at 84=39 latter part of these 24 houres fresh gales from the E by Observation at in the Lat of 24=39 so ends theas 24 hours.
        </p>
        <p><time dateTime="1851-05-08"><Styled.Hanging />Thursday May the 8th/51</time><br />
          the first part of theas 24 houres fresh gales from the E could git no site at 4 A.M. more moderate for an hour or two and quite Clear got site at 7 A.M. Long 87=07 latter part of theas 24 hours Strong breezes from the S.E. furled fore and main topgalliant sail and flying gib [jib] so ends theas 24 hours at 12 got an Observation <FloatingCoordinates>Lat 24=52</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-09"><Styled.Hanging />Friday May the 9th/51</time><br />
          these 24 hours commence with fresh gales from the Eastern Quarter weather squolley and unsettled shortened sail at the yousal [usual] time ½ past 6 P.M. but as we wanted to git farther to the westward cap her before the wind at 10 P.M. took a heavy squoll and brought to hauled up the fore sail, the squoll or tempest still increasing clewed down fore topsail and hauled up reaf [reef] tackles 4 A.M. being very ruff took larbourd and Waist boat up on the upper crains [cranes] latter part of theas 24 hours more moderate <FloatingCoordinates>Lat 24=35 Long 85=10</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-10"><Styled.Hanging />Saturday May the 10th/51</time><br />
          these 24 hours commence with Strong breezes from the East at 2 P.M. more moderate sat the topgalliant sails after shaking out the reafs in the topsails 5 P.M. got site Long 85=28 at 1/2 past breez freshend up again and we shortened sail for the knight Stearing N.W by W till 10 P.M. then hove to laying up N by E 6 AM got  site Long 85=33 latter part of these 24 hours fresh gales from E.N.E. so ends theas 24 hours <FloatingCoordinates>Lat 25=12</FloatingCoordinates><br /><br />
        </p>
        <PageNumber num={11} />
        <p><time dateTime="1851-05-11"><Styled.Hanging />Sunday May the 11th/51</time><br />
          theas 24 hours commence with fresh gales from the N.E. verry ruged weather for Whailing at 1/2 past 6 PM shortened sail and hove to as yousal [usual] wind N.E. heading N.N.E. fresh breezes through the knight at 1/2 past 6 A.M. got site Long 86=40 at 8 A.M. wore ship latter part of theas 24 houres fresh breezes but more moderate then theay wer in the morning. so ends these 24 hours all well <FloatingCoordinates>Lat by Observation 26=11</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-12"><Styled.Hanging />Monday May the 12th/51</time><br />
          theas 24 hours commence with fin and pleasant gales from the E. 5 A.M. got site Long 87=28 latter part of theas 24 hours Strong breezes from E.S.E. took in topgalliant sails and furled flying gib [jib] so ends these 24 hours all well except my self not able to be on deck to perform duty in concequence a sore on the skin of the left leg got poisoned by the black skin of the whale gitting in to the flesh where the skin was of[f] so ends these 24 hours <FloatingCoordinates>Lat 25=18</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-13"><Styled.Hanging />Tuesday May the 13th/51</time><br />
          the first part of these 24 houres commence with fresh gales from E.S.E. and a heavy sea heaving on at 6 A.M. got site Long 87=57 pleasant gales from the East. I am still unable to perform duty on deck so ends these 24 hours <FloatingCoordinates>Lat 23=38<Styled.LeftPadding />Long 88=04</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-14"><Styled.Hanging />Wensday May the 14th/51</time><br />
          theas 24 hours moderate gales from the East and fine weather 5 P.M. got site Long 88=10 -  hove back and sounded got bottom 37 fathoms our lattitude at this time was 23=14 at 6 A.M. mad sail run S.W. with 5 [k]not breeze till 8 A.M. sounded and had 43 fathoms then steered N.W. with a five knot breeze from the E with fine weather through these 24 hours <FloatingCoordinates>Lat 23=08<Styled.LeftPadding />Long 88=17</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={12} />
        <p><time dateTime="1851-05-15"><Styled.Hanging />Thursday May the 15th/51</time><br />
          the first part of theas twenty foure hours pleasant gales from the Eastern quarter Stearing N.W. at two P.M. sounded and got 33 fathoms on the Catooch Bank [Campeche Bank, Gulf of Mexico]  at 4 sounded and got 50 fathoms at 5 P.M. got sight Long 89=05 latter part of theas 24 hours gentle breezes from the East 4 1/2 knot breeze at 12 got an observation Lat 24=14 being within 6 or 8 miles of the Arias Shoald [possibly Cayo Arenas Shoals, near Campeche] or rocks as laid down on the Chart wore ship and run for them, so ends theas 24 hours <FloatingCoordinates>Lat 24=19</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-16"><Styled.Hanging />Friday May the 16th</time><br />
          theas twenty foure houres commence with pleasant gales from the East and fine weather Stearing S.W. to make the Arias Shoald or rocks which is concidered doubtfull by manny, at 3 P.M. the look out at the mast head cried out white watter a head, it being about time to come up with the before mentin[ed] Sholde we concluded that it was Arias Sholde but by this time the lookout cried out there She blowes, and again there She blowes, and again  there she blows and again and again she blowes, and we wer all rejoiced to fine that the Arias Shoald was a fine school of whale.  we lowered and took three of them along side just before sunset got a sight Long 89=46 latter part of theas 24 houres moderate gales from the ENE at 12 got an Observation <FloatingCoordinates>Lat 24=17</FloatingCoordinates><br />
          <br />
          [note in margin] from 4 A.M. to 12 Oclock, all imployed in cutting in except the fool of a Mate who is employed in prowling[?] the only thing he can do [end note]
        </p>
        <p><time dateTime="1851-05-17"><Styled.Hanging />Saturday May the 17th</time><br />
          theas twenty foure houres moderate gales from E. smooth sea and pleasant weather all hands imployed in taking care of head oile at 5 P.M. got sight Long 89=40 at 5 P.M. commenced boiling blubber at 6 A.M. got sight Long 89=40 saw some 12 or 15 breaches 4 or 5 miles of[f] theay proved to be a learge school of porpeces. pleasant gales from the east, so ends theas 24 houres <FloatingCoordinates>Lat 23=49</FloatingCoordinates>
        </p>

        <PageNumber num={13} />
        <p><time dateTime="1851-05-18"><Styled.Hanging />Sunday May 18th/51</time><br />
          theas twenty foure houres commence with moderate gales from the N.E. woch on deck imployed in boiling blubber at 7 A.M. got sight Long 89=35 latter part of theas 24 houres quite fresh gales from N.E. so ends theas 24 houres, <FloatingCoordinates>by Obn Lat 24=16</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-19"><Styled.Hanging />Monday May the 19th</time><br />
          theas twenty foure houres commece and close with fresh gales from the E with a rough sea, got sight at 5 P.M. Long 89=56 also at 6 A.M. Long 89=38 latter part of theas 24 houres all hands imployed  in Stowing down Oile. the 3 whales made 43 Bbls so ends theas twenty four hours <FloatingCoordinates>Lat 24=18</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-20"><Styled.Hanging />Tuesday May the 20th</time><br />
          fresh gales throught theas 24 houres 7 A.M. got sight Long 90=05 nothing worthy of remark occurred, fresh gales continue from the East. so ends theas 24 hours <FloatingCoordinates>Lat 23=43</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-21"><Styled.Hanging />Wedensday May the 21st</time><br />
          theas 24 houres commence and end with with strong gales from the east at midknight strong gales at 7 A.M. got sight Long 90=36 the woch on deck imployed in ships duty in turning in standing riging &amp;c saw two or three peces of squid, struck a porpos and lost him so end theas 24 houres got an observation at 12 <FloatingCoordinates>Lat 24-10</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-22"><Styled.Hanging />Thursday May 22nd/51</time><br />
          theas 24 houres commenced with fresh gales from the E.S.E. got site at 7 A.M. Long 90=14 latter part of theas 24 houres more moderate at 12 O clock got an observation, so ends theas 24 houres <FloatingCoordinates>Lat 24=19</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-23"><Styled.Hanging />Friday May the 23rd</time><br />
          theas 24 houres commece with a five knot breeze from the E. saw a school of porpeces. fresh breezes from 6 P.M. to 6 A.M. at 7 A.M got sight Long 90=00 woch on deck imployed in ships duty turning in standing riging &amp;c saw a full riged Brig under our lee bow heading to the north fresh gales from East or E by N so ends theas 24 houres at 12 got an observation <FloatingCoordinates>Lat 25=13</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={14} />
        <p><time dateTime="1851-05-24"><Styled.Hanging />Saturday May the 24th/51</time><br />
          these 24 houres commence with fresh gales from the East, the Brig mentioned in yesterdays Log tacked Ship at 2 P.M. and stood across our Stern about 200 yards of[f] and went out of sight to the S.E. got sight at 5 P.M. Long 89=47 at midknight five knot breeze from E at 7 A.M. got sight Long 89=47 under all sail Except the flying gib and that was furled all of these 24 hours owing to the strength of the gale which continues from the East so ends these 24 houres <FloatingCoordinates>Lat 26=87</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-25"><Styled.Hanging />Sunday May the 25th</time><br />
          at the commencement of theas 24 hours fresh gales from the East to the E.S.E. at 2 P.M. saw a bark heading to the S.S.E also a schooner heading to the South of our lee beam at 5 P.M. got sight Long 89=47 at midknight more moderate with a very heavy sea heaving  on our Starboard beam. wore ship and headed to the S.E. to prevent the vessel from roaling so very bad as she had for the last 5 or 6 hours Mr Perkins one of the Boat steerers struck a [unclear] and saved him at 6 A.M. verry moderate got sight Long 89=02 latter part of theas 24 hours moderate gales from the N.E. a plenty of dolphins caught but [unclear] so ends theas 24 houres at 12 by Observation <FloatingCoordinates>Lat 27=27</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-26"><Styled.Hanging />Monday May the 26th</time><br />
          the first part of theas 24 houres pleasant gales from N.E. with a heavy swell hea[v]ing on from E.N.E. got sight at sunset Long 89=49 two ships in sight heading to the S.E. saw a school of porpoces. latter part of theas 24 houres moderate gales from the East. three sail in sight, so ends theas 24 hours <FloatingCoordinates>Lat 27=34 North</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={15} />
        <p><time dateTime="1851-05-27"><Styled.Hanging />Tuesday May the 27th/51</time><br />
          theas 24 houres commence with moderate Gales from the Eastern quarter with fine weather all hands imployed in ships duty moastly in finishing up the standing riging, about 3 O Clock saw a heavy water spout come with a mile and a half of us before it lost its force weather verry squolley shortened sail. at midnight Squoley at 6 A.M. got sight Long 88=42 fresh breeses and squolley weather untill 8 A.M. when it cleared up and we had fine weather moderate Gales frome the E.N.E. so ends theas twenty four houres <FloatingCoordinates>Lat 28=57</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-28"><Styled.Hanging />Wednesday May the 28th</time><br />
          the first part of theas 24 houres moderate gales from E.N.E. heading N.N.W. come into mudy Cullered watter sounded with 80 fathoms of line got no bottom, tacked Ship and head to the South with a pleasant brees at 5 P.M. got sight Long 88=42 weather verry good through the night at 4 A.M. it squoled up and it was squolley until about 10 A.M. when it cleared of[f] and we had fine weather with fresh gales got site Long 88=32 Struck two porpoces lost them boath, so ends theas 24 houres <FloatingCoordinates>Lat 27=52</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-29"><Styled.Hanging />Thursday May 29th</time><br />
          theas twenty four houres Strong Gales from the East at 6 P.M. under short Sale and a verry rough weather raised a learge school of whale lowered for them took one 18 Bbl whale along side, before we could git a fluke worp on to her flukes, she parted all the worps that was made fast to her and went a drift, it was dark being no moon, to give us light we lowered one boat the Capt and myself with a boats crew went to find the whale, and as good luck would hav it we rowed direct to the whale, while we wer gon from the vessel a man fell over board an saving him come verry near loosing two more, and one man got a hoist that will disinabled him for two or three days proberbly we finealy succeded in saving the whale at 4 A.M. in the morning commenced cutting in with verry rough weather, so ends theas 24 hours with fresh Easterly gales, <FloatingCoordinates>by dead reconing Long 88=38 Lat 27=37</FloatingCoordinates><br />
          <br />
          [pencil note in margin] all this scrape through the stupidity and greenes[s] of pewinkle [end note]<br /><br />
        </p>
        <PageNumber num={16} />
        <p><time dateTime="1851-05-31"><Styled.Hanging />Friday May the 30th/51</time><br />
          the first part of theas 24 houres fresh gales and rough weather at 4 P.M. more moderate, woch on deck imployed in boiling blubber 5 P.M. got sight Long 89=19 at midnight fine weather 5 A.M. got sight Long 88=52 latter part of theas 24 houres moderate gales from the East and fine weather finished boiling blubber at 12 got an observation, so ends theas 24 hours one man not able to perform duty <FloatingCoordinates>Lat 26=00</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-05-31"><Styled.Hanging />Saturday May the 31st</time><br />
          theas twenty four hours moderate Gales from the East weather looks squolley otherways good whaleing weather, at sunset Long 88=56 two sail in sight one a full riged Brig heading to the North and the other a Ship heading to the South, 5 A.M. got sight Long 89=02 from 8 to 12 stoed down 18 Bbl. of Oil that we took on the 28 civel a/c so ends theas twenty four houres moderate Gales from the E fine weather. fine all hand able to perform duty <FloatingCoordinates>Lat 25=49</FloatingCoordinates>
        </p>
        <p><Styled.Hanging />Sunday <s>May</s> <s>the</s><br />[remainder of page is blank]
          <br /><br /><br />
        </p>

        <PageNumber num={17} />
        <p><time dateTime="1851-06-01"><Styled.Hanging />Sunday June the 1st/51</time><br />
          theas twenty four houres moderate gales from Eastern quarter and fine smooth weather saw a plenty of porposes and grampus got sight at 5 P.M. Long 88=57 also at 7 A.M. Long 88=58 so ends theas 24 houres <FloatingCoordinates>Lat 26=28</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-02"><Styled.Hanging />Monday June the 2nd</time><br />
          the first part of theas twenty four houres moderate gales from the East. saw a school of porpoces. at midnight fine weather. latter part verry squolly. at one minute it would rain &amp; blow and in five or ten minutes after it would be fine weather with a fine breeze from some other point of the compas, or another squoll. it cleared at 10 A.M. got sight Long 88=38 and at 12 it cleared so that we got an observation so ends these 24 hours. <FloatingCoordinates>Lat 25=55</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-03"><Styled.Hanging />Tuesday June the 3rd</time><br />
          the first part of theas twenty foure houres moderate but squolley. At 5 P.M. got sight Long 88=21 at sunset foure knot breeze from E.S.E at midnight five knot breese and rather squolley at 7 A.M. got Sight Long 88=13 moderat and fine weather saw a bone sark [basking shark], and porpoces in abundance so ends theas twenty four houres <FloatingCoordinates>Lat 26=25</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-04"><Styled.Hanging />Wensday June the 4th</time><br />
          the first part of theas twenty four houres moderate gales from E.S.E at 5 P.M. got sight Long 88=20 at midnight moderat weather wind East at 7 A.M. made a school of whale under our lee lowered and took two of them latter part of theas 24 hours squolley and verry moderate between squolls so ends theas 24 hours <FloatingCoordinates>Lat 26=40</FloatingCoordinates><br />
          <br />
          [pencil note in margin] this day lost a 30 bbl whale through Pewinkle [end note]
        </p>
        <p><time dateTime="1851-06-05"><Styled.Hanging />Thursday June the 5th</time><br />
          the first part of theas 24 hours moderat and squolley the wind was at diferant times from all points of the compas, all hands imployed in saving head Oil. pleasant weather through the knight, wind S.E. at 4 A.M. Commenced boiling. at 7 A.M. got sight Long 86=47 latter part moderate wind S.E. so ends theas twenty foure houres <FloatingCoordinates>Lat 27=25</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={18} />
        <p><time dateTime="1851-06-06"><Styled.Hanging />Friday June the 6th/51</time><br />
          All of theas twenty foure houres moderate gales from the S.E. and fine weather. woch on deck imployed in boiling blubber 5 P.M. got sight Long 87=16 at 8 A.M. got sight Long 87=19 saw a number of small breaches supposed them to be porpoces so ends these twenty foure houres. <FloatingCoordinates>by Ob'n Lat 27=28</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-07"><Styled.Hanging />Saturday June the 7th</time><br />
          theas twenty foure houres commence with moderate gales from the S.E. fine weather saw two vessels heading to the N.W. at midknight fine weather wind canted further to the South. at 6 A.M. made a schoo[l] of whale of[f] our weather quarter. lowered and killed some six or Eight whale, saved only two the school of whale took to the windward, we took our whales along side and commenced Cutting in. pleasant gales from the West so ends theas 24 hours <FloatingCoordinates>Lat 27=00 Long 87=00</FloatingCoordinates><br />
          <br />
          [pencil note in margin] This day lost a twenty barrell whale through Pewinkle [end note]
        </p>
        <p><time dateTime="1851-06-08"><Styled.Hanging />Sunday June the 8th</time><br />
          the first part of theas twenty four hours pleasant gales from W.S.W. all imployed in cutting in the twoo whales taken in the fore noon. fine weather through the knight at 7 A.M. got sight Long 87=09 latter part fine weather wind at West. all hands imployed in saveing the head Oil so ends theas twenty foure houres <FloatingCoordinates>Lat 27=03</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-09"><Styled.Hanging />Monday June the 9th</time><br />
          pleasant gales from the Weast throughout theas twenty four hours and fine weather for boiling blubber which the woch on deck was buisely imployed in. caught a dolphin with the graivs[?], saw three sale of vessels headed to the S.E. at 7 A.M. got sight Long 86=48 so ends theas twenty foure houres all hands in good Spirits <FloatingCoordinates>Lat 27=01</FloatingCoordinates>
        </p>
        <p>[at foot of page, upside down, different handwriting; based on Charles Wesley's text "Jesus, Lover of My Soul"]<br />
          Jesus lover of my soul<br />
          Let me to thy bosom fly,<br />
          While the waves of trouble roll<br />
          While the tempest still is high.<br /><br />
        </p>

        <PageNumber num={19} />
        <p><time dateTime="1851-06-10"><Styled.Hanging />Tuesday the 10th of June 1851</time><br />
          theas twenty foure houres begin with moderate gales from the W.N.W. woch on deck imployed in boiling out blubber at 7 A.M. got sight Long 85=35 latter part moderate but Squolley all hands imployed in stowing down Oil. theay made thirty five Bbls. so ends theas twenty foure houres <FloatingCoordinates>Lat 27=03</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-11"><Styled.Hanging />Wensday June the 11th</time><br />
          first part of theas 24 houres moderate gales from N to N.E. we finde that we have a strong Easterly current. saw a school of Grampoces at 7 AM got sight Long 86=20 the latter part very Squolley heavy thunder Squolls passed verry neare us on all sides. a verry heavy watterspout formed two or three miles from us. the first that we of it we hurd it roare like a heavy watter falls it finely pased a way and we had fine weather one sail in sight headed N.W. so ends these 24 hours <FloatingCoordinates>Lat 26=44</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-12"><Styled.Hanging />Thursday June the 12th</time><br />
          theas twenty four hours commence with moderate gales from NE at 5 P.M. got sight Long 86=34 one sail in sight headed N.W. at midknight fine weather 10 A.M. got sight Long 86=57. latter part of theas 24 houres fine weather, pleasant gales from the North so ends theas 24 hours <FloatingCoordinates>Lat 26=57</FloatingCoordinates><br />
          <br />
          one knot Current setting to the Northward
          <br /><br /><br />
        </p>

        <PageNumber num={20} />
        <p><time dateTime="1851-06-13"><Styled.Hanging />Friday June the 13th 51</time><br />
          theas twenty foure hours commence with pleasant gales from the North at 2 P.M. weather  Squolley saw one or two watter spouts, a plenty of dolphin, flying fish, Oliver Cores [albacore], and skip jackets [skipjack].  5 P.M. got sight Long 87=57 at sunset took in sail for the knight heading N.W. took a Squoll squoll [sic] from the N.E. about the same time. at midknight fine weather. at 10 A.M. got sight Long 87=04 latter part some what squolley so ends theas 24 hours <FloatingCoordinates>Lat 26=55</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-14"><Styled.Hanging />Saturday June the 14th</time><br />
          the first part of theas  twenty foure houres moderate gales from N.E. weather looks squolley at 5 P.M. got sight Long 87=07 at midknight fine weather and pleasant gales from the East 9 A.M. got sight Long 87=21 one sail in sight a gaft [gaffed, gaff-rigged] topsail Schooner headed to the S.E. the woch on deck imployed in setting up the fore riging.  so ends theas 24 hours <FloatingCoordinates>Lat 27 = 36</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-15"><Styled.Hanging />Sunday June the 15th</time><br />
          All of theas twenty foure hours pleasant gales and fine weather with the wind N.E. saw a school of  grampoces, and a learg school of porpoces one ship in sight headed N.W. at 10 A.M. got sight Long 86=27 so ends theas 24 hours <FloatingCoordinates>Lat 26=50</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-16"><Styled.Hanging />Monday June the 16th</time><br />
          theas twenty four hours commence with moderate gales from the N.E. and fine weather, and, Continus the same throught the twenty four hours at 5 P.M. got sight Long 86=27 saw a school of porpoces 10 A.M. got sight Long 86=23 so ends theas twenty four hours <FloatingCoordinates>Lat 25=54</FloatingCoordinates>
        </p>

        <PageNumber num={21} />
        <p><time dateTime="1851-06-17"><Styled.Hanging />Tuesday June the 17th/51</time><br />
          the first part of theas twenty foure houres squolley weather wind N.E. at 5 P.M. got sight Long 86=12 fine weather through the knight, and pleasant gales from N.E. at 10 A.M. got sight 85=48 latter part moderate and squolley, so ends theas twenty four hours. <FloatingCoordinates>Lat 24=34</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-18"><Styled.Hanging />Wensday June the 18th</time><br />
          the first part of theas twenty foure houres moderate gales from the N.E. pleasant weather untill 4 P.M. after which time it was very squolley, at 5 P.M. got sight Long 85=48 at ½ past 6 shortened sail as yousal and lay by for the knight, it being verry squolley, at 9 A.M. got sight Long 85=38 latter part pleasant Gales from N.E. and fine weather so ends theas twenty foure houres, all well with the exception of some of the crue [crew] being troubled with boles [boils] <FloatingCoordinates>Lat 24=18</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-19"><Styled.Hanging />Thursday June the 19th</time><br />
          the first part of theas twenty foure houres squalley Strong Gales from N.N.E. at 5 wind hawled to the EN.E and very squolley took in top galliant sails fand[?] flying gib, single reafed the topsails, saw learg breach to windward just before dark the wind at this time had hauled round to S.S. Saw two watter spouts, it continued squolley until 12 at midnight when it Cleared up and had fine weather the remaining part of theas twenty foure houres  <FloatingCoordinates>at twelve O,Clock Lat 24=22 Long 84=56 by lne'r</FloatingCoordinates><br /><br />
        </p>
        <p><time dateTime="1851-06-20"><Styled.Hanging />Friday June the 20th</time><br />
          theas twenty foure houres squolley throught the wind was from diferant points of the compass at diferant times, and at some point a number of times, at 8 P.M. took a squoll from S.S.E took in top galliant sails, flying gib, reafed the top sails, hauled up the main sail and trysail at 8 A.M. got sight Long 83=42 two sail in sight so ends theas twenty foure hours <FloatingCoordinates>Lat 24=27</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={22} />
        <p><time dateTime="1851-06-21"><Styled.Hanging />Saturday June the 21st/51</time><br />
          the first part of theas twenty four houres lay becalmed. at 5 P.M. got sight Long 83=42 at 1 PM a breeze sprung up from the N.E. and soon hauled to the S.S.E tacked ship laying up East under whol sail 9 A.M. weather good with Strong Gales. took in top galliant sails and flying gib, a learg ship in company, she was of[f] our weather bow in the morning and at noon of[f] our lee quarter the same distance 5 or 6 miles, at 7 A.M. got sight Long 81=00 passed[?] 6 or 8 sail of vessels headed to the Weastward the latter part of theas 24 houres Strong Gales from SS by S so ends theas 24 houres <FloatingCoordinates>Lat 24=17</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-22"><Styled.Hanging />Sunday June the 22nd</time><br />
          theas twenty foure houres commence with Strong Gales from S.E. at 2 P.M. made the land of[f] our lee beam, supposed it to be more of Key Weast, saw a Becon on the edge of the light Cullered watter at 2 P.M. got sight Long 81=45 the ship tacked before we did being to the leeward of us saw the land first and tacked we tacked (1/4 before 3 PM ) wind moderated down and it began to be squolly and we wer cared [were carried] by the current and sea which [unclear] to be all way it rained, thundered and lightened heavy and sharp saw a watter spout pas by us Close under our lee, in one of those squolls, at 1 A.M. a breeze Sprung up to the N.E. we made the best of our way of[f] shore till 3 A.M. when the wind changed to S.S.E we tacked and headed up E at 11 A.M. got sight Long 80=28 three sail in sight at 12 Sighted Umberiller [Amarillo] Key baring N.W. by N. so ends theas 24 hours <FloatingCoordinates>Lat 24=40</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-23"><Styled.Hanging />Monday June the 23rd</time><br />
          the first part of theas 24 houres light winds from ES.E. at 1 P.M. sighted Careys fort reaf heading N.E. up the shore 1/2 past 6 P.M. pased the light house on the North part of Carysfort reaf not yet lighted [Carysfort Reef Light House, off Key West, Florida, completed 1852] latter part squally 1/2 past 11 A.M. got sight <FloatingCoordinates>Long 79=05 <span style={{ paddingLeft: '20px' }} />at twelve by Obn Lat 27=27</FloatingCoordinates><br /><br />
        </p>
        <PageNumber num={23} />
        <p><time dateTime="1851-06-24"><Styled.Hanging />Tuesday June the 24th/51</time><br />
          theas twenty foure houres commence with squolley weather strong breeze S.S.E at 3 P.M. took a heavy Squoll from the weastward put the Brig before the Wind took in topgalliant sails, flying gib, and hauled up the mainsail before the squoll struck us, after which took in main Gib, settle fore and main top sail yards down upon the caps hauled up the reaf tacles the squoll continueing heavy double reafed the topsails and hauled up within two points of our coarse untill the squoll abated. at 6 P.M. discovered that the fore top galliant crosstrees had woorked down over[?] the hownes [harness?] of the mast and jamed the top galliant tye [tie] sent down the yard and, most to eas [ease] the topmast which had previously triped  the [unclear] of or nearly so - dauring theas 24 hours saw 2 sail one headed to the N and the the other to the S.E. at 10 AM got sight Long 78=19 so ends theas twenty foure houres <FloatingCoordinates>Lat 28=48</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-25"><Styled.Hanging />Wensday June the 25th</time><br />
          the first part of theas 24 houres fair weather for Gulph weather at 2 P.M. cleared of[f] and we had fine weather and a pleasant Gale from the S.E. at 4 P.M. began to squoll up to thunder and lighten and continued so through the afternoon at ½ past 7 P.M. took in all sail except the main topsail, and that we clewed down and Cloast reafed it, and hove the Brig to it loockd likely to have a seveare squoll, but we were happily disapointed inasmuch as the squoll was quite light, it continued squolley through the knight with heavy thunder showers an Sharpe lightening at 7 A.M. light up enough to git Sight <FloatingCoordinates>Long 77=0 <span style={{ paddingLeft: '20px' }} />by dead reckoning Lat 29=25</FloatingCoordinates><br /><br />
        </p>
        <p><time dateTime="1851-06-26"><Styled.Hanging />Thursday June the 26th</time><br />
          the first part of theas 24 houres squolley weath wind S.S.W. moderate at 5 P.M. fresh breezes and rain squolls saw a school of grampoces at 7 P.M. took in sail at midknight saw 2 sail pass us, strong breeses S.W. ½ past 7 A.M. got Sight Long 76=08 latter part more moderate by dead reckoning <FloatingCoordinates>Lat 30=10</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={24} />
        <p><time dateTime="1851-06-27"><Styled.Hanging />Friday June the 27th/51</time><br />
          theas twenty foure houres begin with light breeses and lowering weather, at midknight Strong breeze from the south, at 7 A.M. got sight Long 75=21 Struck a porpos and lost him. saw a sail of[f] our larboard bow heading North. picked up a spar supposed it to be a Barks misenmast it was cut away. had the crosstrees and futtck [futtock] shrowdes attached to it. unbent the trysail and fitted it to reaf on the leach fore a storme sail in case of a heavy gale. so ends theas 24 houres <FloatingCoordinates>Lat 31=29</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-06-28"><Styled.Hanging />Saturday the 28th</time><br />
          first part light breezes from the South and squolley middle part moderate gales from the south and fair weather at 7 A.M. got sight Long 74=30 at 10 A.M. saw two Surme whale Lowered and took one along side the waist boat got stove slightly in striking the whale, and the starboard boat got her gunwail and one or two plank cut down in killing her each of them got a man overboard in the flurry now one injured so ends theas twenty foure houres - <FloatingCoordinates>by dead reckoning Lat 31=25</FloatingCoordinates><br />
          <br />
          [pencil note in margin] This is the fault of Pewinkle as he had a good chance to kill the whale 10 minutes after she was struck [end note]
        </p>
        <p><time dateTime="1851-06-29"><Styled.Hanging />Sunday June the 29th</time><br />
          theas twenty foure houres commence with light breezes from the South and fine weather. the first part all hands imployed in cutting in the Whale taken in the fourenoon. at midknight fine weather, at 4 A.M. cauled all hands and wer well imployed in taking care of the head oil and setting the try works agoing at 7 A.M. got sight Long 73=44 so ends theas 24 houres <FloatingCoordinates>Lat 31=50</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={25} />
        <p><time dateTime="1851-06-30"><Styled.Hanging />Monday june the 30th/51</time><br />
          theas twenty foure houres moderate gales from the S.W. with fine weather, woch on deck imployed in boiling blubber 7 A.M. got sight <FloatingCoordinates>Long 74=00 Lat 31=39</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-01"><Styled.Hanging />Tuesday July the 1st/51</time><br />
          theas twenty foure houres commen[ce], Continue and end with ligh breezes from the S.W. with fine weather. saw one sail headed to the soutward by the wind at 7 A.M. got sight Long 72=52 latter part woch on deck imployed in stowing down Oil, so ends theas twenty foure houres <FloatingCoordinates>Lat 31=39</FloatingCoordinates><br />
          <br />
          [note in margin] 35 Bbls
        </p>
        <p><time dateTime="1851-07-02"><Styled.Hanging />Wensday July the 2nd</time><br />
          theas twenty foure houres commence with moderate gales from the S.W. at midknight fine weather. at 4 A.M. lay becalmed at 7 A.M. got sight Long 71= 49 about 9 A.M. saw three Killers pass by us. latter part light aire from S.E. <FloatingCoordinates>Lat 31=39</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-03"><Styled.Hanging />Thursday july the 3rd</time><br />
          the first part of theas 24 houres light aires from S.E. 3 sail in sight headed Eastward, at midnight allmost calme at 4 A.M. intirely calm, at 7 A.M. got sight long 71=29 saw a school of grampoices, latter part light aire from the S got a double sight one before twelve and the other after, Long 71=16 so ends theas 24 houres 3 sail in sight before mentioned so ends theas 24 hours <FloatingCoordinates>Lat 31=41</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-04"><Styled.Hanging />Friday july the 4th</time><br />
          theas 24 houres moderate gales from S rather Squolley looking weather 2 sail in sight at 7 P.M. shortened sail 4 A.M. [unclear] all sail 3 saill in sight at 7 got sight Long 69=26 so ends theas twenty foure houres <FloatingCoordinates>Lat 31=40</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={26} />
        <p><time dateTime="1851-07-05"><Styled.Hanging />Saturday July the 5th/51</time><br />
          the first part of theas twenty foure houres fine weather and a good whol sail breese from South 8 P.M. rather squolley at 4 A.M. lay becalmed saw a ship steering N.W. at 7 A.M. got sight Long 67= 53 so ends theas twenty foure houres while we lay becalmed <FloatingCoordinates>Lat 31=56</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-06"><Styled.Hanging />Sunday july the 6th</time><br />
          the first part of theas 24 houres moderate breeses from the South saw 3 sail of vessels, pased the Brig C[unclear] of Phallydelpahee steering N.W. and a ship steering the same cours the other E by N midnight fine weather about calme latter part moderate gales from N.N.E. and sqolley at 7 A.M. got sight Long 66=58 so ends theas twenty foure houres <FloatingCoordinates>Lat 32=03</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-07"><Styled.Hanging />Monday July the 7th</time><br />
          First part of theas 24 houres light air fro the Eastern quarter, and squolley, from 5 P.M. to 10 A.M. lay becalmed at 7 got sight Long 66=44 latter part verry light air S.E. to S.S.E. at 12 O clock by double sight Long 66=37 so ends theas twenty foure hours <FloatingCoordinates>Lat 32=17</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-08"><Styled.Hanging />Tuesday July the 8th</time><br />
          theas 24 houres commence with moderate breeses from S.S.E. at 5 P.M. moderate gales from S.W. fine weather, at midnight fine weather, at 6 AM sighted Bermuda, the light bairing E by N. at 7 A.M. got sight Long 64=52 being about 15 or 18 miles from the land, makes the cremonetor [chronometer] 15 or 18 miles out of the way, at half past 10 A.M. got a Pilot, latter part of theas 24 hours pleasant gales from the South Bermuda light baring N.E. by E. distant 3 ½ miles, so ends theas twenty four hours.<br /><br />
        </p>

        <PageNumber num={27} />
        <p><time dateTime="1851-07-08"><Styled.Hanging />Tuesday July the 8th AD 1851</time><span style={{ paddingLeft: '20%', fontSize: '125%' }}>Civel a/c</span><br />
          First part of theas 24 hours moderate breeses from S and pleasant weather spoke the R. E. Cook, of Provincetown close of[f] the mouth of St George harbour, Clean, at 2 P.M. anchored in St. George harbour sent down fore topmast, Capt Ephram Nickerson towed in a Rack [wreck] that he came acrost at Sea, and has ben here about 2 months to obtain salvege on her, by Capt Nickerson and Capt Cook Master of the R E Cook we hurd [heard] from the following vessels Samuel Cook. Louisa. Chearles Allstrum. Alexander and Benjamin Franklin all Clean. the Hariet Kneal [Harriet Neal] had 30 Barrels, and Franklin of Provincetown had of all kinds something over a hundred Bbls, so ends theas twenty four hours at anchor in Bermuda
        </p>
        <p><time dateTime="1851-07-09"><Styled.Hanging />Wensday, July the 9th</time><br />
          theas 24 houres lay at anchor in St. Georges harbour larbourd woch on deck imployed refitting and repairing fore riging, while the Starbourd wach wer a shore on libberty, to be on board at the time the gun fires at 9 O Clock P.M. at the close of theas 24 hours, William Smith, Peter Brady, and Jerrymiah Frances wer absent from the vessel conterary to the Capts Orders so ends theas twenty four hours
        </p>
        <p><time dateTime="1851-07-10"><Styled.Hanging />Thursday, July 10th</time><br />
          theas twenty foure houres at anchor in St. Georges Harbour Starbourd woch on duty filling watter &amp;c while the larbourd wach are ashore on liberty with strict orders to be on board again before the gun fires at 9 P.M. at the Close of theas 24 hours William Smith, James Briant and E Hubbard wer absent, William Willson, Josiah E Clough and the Steward came on board between 9 PM and 12 P.M. Peter Brady and Jerrymiah Frances that wer absent the prevous knight came on board and went to their duty during the first part of theas 24 houres. William Smith refused so to doo after being repetedly ordered so to doo by the officers. at 4 P.M Thomas Sulaven was taken abord lifeless supposed to be dead drunk at 6 P.M. took on board a new topmast, ready to send up in the morning so End theas 24 hours<br /><br />
        </p>

        <PageNumber num={28} />
        <p><time dateTime="1851-07-11"><Styled.Hanging />Friday July the 11th/51</time><span style={{ paddingLeft: '20%' }}>Civel a/c</span><br />
          <br />
          theas twenty four hours lay at anchor in Bermuda all hands imployed in sending up a new fore topmast and repairing the fore topgalliant mast and sending up the same fitting riging and se[t] it up &amp;c Georg Willson refused to doo duty complaining that he was sick, but to me he appered more ugly than sick. gave the offecers verry short answers &amp;c. Smith, Hubbard and Briant are still absent from the vessel, but have contrived to git their Clothes out of the vessel dauring the previous knight, as soon as Capt Rider found that theay had takn their Clotheas out in order to runaway, he imployed an offecer to find them the offecer took them and put them in [j]ail for safe keeping untill the Brig got ready to sail. the Steward being about deck the moset of the afternon tolking and laffing &amp; apparnetly well as yousal, was Ordered after supper to Clear of[f] the supper table, he refused to doo it, saying i am a sick man and i ant a going to woork, the Capt Ordered him the second time, and told him that if he was Sick he could [j]ust take the dishes of[f] of the table, but he acted uglay and refused to doo as the capt Ordered him, the Capt then took hold of him and pushed him along verry gently and made him Cleare off the table, the Steward acted verry conterary and yoused verry threatening languyg saying that he wouldent die a lone &amp;c the Steward sayed that he wished to see the doctr and wanted to go ashore for that purpos. Capt Rider told him if he wished to see the docter and that it was his request he would bring the docter on board to see him in the morning, but that did not seame to suit, but sad that he was Sick and wanted to see the docter, so ends theas twenty four hours<br /><br />
        </p>

        <PageNumber num={29} />
        <p><time dateTime="1851-07-12"><Styled.Hanging />Saturday July the 12th AD 1851</time><span style={{ paddingLeft: '20%' }}>Civel a/c</span><br />
          at 6 A.M. cauled all hands and wer imployed in refitting riging, sending up fore topgalliant mast, painting the Brigs bends &amp;c the Steward went to his duty saying that he would doo the best that he could still wishing to see the doctr by going on shore by his request the doctr came on board to see him, but the doctr said that he could not pronounce him a sick man, he said it was nothing more than drinking a little too much liquor, and that he would soon get over it, but he might take a portion of phisic if h[e] wish it would be good for him, Smith, Briant and Hubbard requested to be taken out of the [j]ail, Capt Rider got a permit and took them out after they promice to come on board and behave well, and doo their duty, during the evening Peter Brady, Josiah E. Clough and Joseph Bendus the Cook, managed to git a shore, and theay came under the bowes during the night after there Clothes, the woch on deck discovered them and cauled the Capt and the capt ordered the boat of[f] with a strainger on her as he supposed at the time but afterward supposed it to have ben the steward, who was was discharge by mutial consent by all partyes deuring the afternoon of theas 24 hour – so ends &amp;c
        </p>
        <p><time dateTime="1851-07-13"><Styled.Hanging />Sunday July the 13th</time><br />
          this morning all hand on board except James Briant and he was absent with all of his dunage, Capt got an officer out after him, the Pilot came on board at 8 A.M. and at 10 AM had taken us out c[l]eare of the island the offecr had not found Briant when we lef and so we wer obliged to leave without him at 12 Oclock 6 distant from Bermuda the harbor bearing W by N this days wach contains 12 houres in order to close my log by Civel account and to commence by Nauticle account. so ends this days journal 6 miles distant E by S from Bermuda
        </p>
        <p>[in a different hand]<br />
          Vernon G. G  L------<br />
          Newfoundland<br />
          N. I.[?]<br /><br />
        </p>

        <PageNumber num={30} />
        <p><time dateTime="1851-07-14"><Styled.Hanging />Monday July the 14th/51</time><span style={{ paddingLeft: '20%' }}>by Nauticle a/c</span><br />
          the first part of theas 24 hours pleasant gales from the S.W. and fine weather. Bermuda 6 miles distant. St. Georg town harbour baring W by N sau a fullriged Brig headed to the N. middle part squolley and fresh Breeses, stood half woches to carry sail to the eastward when we had got suffishantly Out Cleare of the Island, we unbent the chane cables and stowed them under deck. latter part strong gales took in topgalliant sails and flying gib, saw a learg ship Steering N.E. saw a school of porpoces, and a few blackfish, at 7 A.M. got sight Long 62=18 from 7 to 12 Strong gales S.W. and squolley. the steward gon, Thomas Sulaven acted/acts as Ste[w]ard for the futchure, so ends theas 24 hours. <FloatingCoordinates>Lat 32=20</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-15"><Styled.Hanging />Tuesday July the 15th</time><br />
          theas 24 houres commence with fresh gales S.W. and squolley weather took in topgalliant sails and flying gib 7 P.M. single reafed the fore and double reafed the main topsails. at 2 AM took a Squoll got the wheel up and got the Brig before the wind took in all sail but the topsails and let them run down on the caps and hauled up the reaf tackles. the squoll lasted about half an hour and it was over. made sail again and hauled up our course again E by S. at 8 A.M. got sight Long 58=52 saw whaile carkess on the watter so ends these 24 hours <FloatingCoordinates>Lat 32=59</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-16"><Styled.Hanging />Wensday July the 16th</time><br />
          the first part of theas 24 hours strong gales, and rainey, squolley weather. Stearing E topgalliant sails and flying gib furled at 7 P.M. single reafed fore and double reafed the main topsails, at mid nigh fair weather and moderate gales at 4 AM squolley. at 7 got sight Long 55=57 latter part strong gales Clear weather at this time discovered that the fore topgalliant mast was sprung. took in the fore top galliant sail at twelve by a double sight Long 52=22 Just at this time struck a porpos and saved him so ends theas 24 hours <FloatingCoordinates>Lat 33=48</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={31} />
        <p><time dateTime="1851-07-17"><Styled.Hanging />Thursday July the 17th, AD 1851</time><br />
          theas 24 houres commence strong gales from S.S.W. and fine weather stearing E by S topgalliant sails, and flying gib furled, trysail hauled up and single reafs in the topsails, at midnigh fresh gales, at 6 A.M. got sight Long 52=38 latter part moderate gales from S.W. fine weather. got a double sight Long 51=00 so ends theas 24 hours <FloatingCoordinates>Lat 34=00</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-18"><Styled.Hanging />Friday July the 18th</time><br />
          theas 24 hours moderate gales from the S.W. fine weather at 7 A.M. got sight Long 50=48 at 9 A.M. saw a learg whale carkess to the leeward, and a number of peces of squid. So ends theas 24 hours <FloatingCoordinates>Lat 33=45</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-19"><Styled.Hanging />Saturday July the 19th</time><br />
          theas 24 hours commence, Continue, and End with a verry light aire from West 8 P.M. spoke the Alexander of Provincetown Cleane, Capt Young lowered his boat and Came abord of us and spent the evening. latter part of theas twenty four hours saw two more whalers a ship and a Brig did not speak them <FloatingCoordinates>Lat<span style={{ paddingRight: '40px' }} /></FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-20"><Styled.Hanging />Sunday July the 20th</time><br />
          the first part of theas 24 hours lay becalmed. three whailers in sight the Alexander of Provincetown and a Ship, and a full riged Brig to the S of us, middle part light air from W at 7 A.M. got sight Long 49=28 latter part verry moderat light aire from the N.N.E. the Alexander just to the windward of us runing down towards us, and a learge school of Black fish between the two vessels. the Ship and Brig before mentioned to the leward of us so ends theas 24 hours <FloatingCoordinates>Lat 33=02</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={32} />
        <p><time dateTime="1851-07-21"><Styled.Hanging />Monday july the 21st/51</time><br />
          the first part of theas 24 hours light breeses from N saw a learge school of Black fish. the Alexander Capt young Marster [master] was was 3 or 4 miles to the windward she bore up and run down to us and we gamed [gammed] with them at ½ past 6 spoke the Ship Nye; 4 years out with nine Hundred Bbls of Spurm Oil, had not sean a spurm whale spout for the last 18 months she had been a creuceing [cruising] about here for the last 3 weeks, so ends theas 24 hours with moderate gales from E.N.E. <FloatingCoordinates>Lat 32=37</FloatingCoordinates><br />
          <br />
          [note in margin] at 8 A.M. got sight Long 49=05, saw two or 3 peces of bluber on the watter [end note]
        </p>
        <p><time dateTime="1851-07-22"><Styled.Hanging />Tuesday July the 22nd</time><br />
          theas 24 hours moderate gales from E.N.E. saw a school of killers, at 7 A.M. got sight Long 48=50 latter part squolley so ends theas 24 hours <FloatingCoordinates>Lat 32=10</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-23"><Styled.Hanging />Wensday July the 23rd</time><br />
          the first part of theas 24 houres moderate gales from E.N.E. at midnight Strong breezes, from E at day break made whaile all around us bound to the windward and going quick, lowered for them got nothing. so ends theas 24 hours got no sight, <FloatingCoordinates>by dead reckoning Long 48=35 Lat 31=50</FloatingCoordinates><br />
          <br />
          [pencil note in margin] this day lost a whale through pewinkle [end note]
        </p>
        <p><time dateTime="1851-07-24"><Styled.Hanging />Thursday July the 24th</time><br />
          the first part of theas 24 houres made whale to leward waist boat fastened to one, and drew his first iron, the whale ran and sounded and after holding on with his perventer [preventer] Iron until ½ past 6 was obliged to cut from her, at 7 P.M. came up with the school, lowered but it was about dark got nothing. Caried sail till next morning, after runing to the N.W. 6 or 7 miles made whale. we were under Reafed topsails lowered but it was so rough that we could not keep nun of them in our boats, at 11 lowered for them, got nothing so ends theas 24 h <FloatingCoordinates>by dead reckoning Long 49=00<Styled.LeftPadding />Lat 32=03</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={33} />
        <p><time dateTime="1851-07-25"><Styled.Hanging />Friday July the 25th A 1851</time><br />
          theas 24 hours commece with strong breeses from E and squolley under reaf topsails saw a school of whale lowered got two of them chased the school 10 or 12 miles to the S.W. got no more towards sunset moderat and squolley at 7 A.M. got sight Long 48=55 last of theas 24 h light air from SE all hands imployed in Cutting the two small whale and taking care of the case and Junck. so ends theas 24 hours <FloatingCoordinates>Lat 32=22</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-26"><Styled.Hanging />Saturday July the 26th</time><br />
          theas 24 hours lay be calmed, the woch on deck imployed in boiling bluber the two whales make 15 Bbls at 7 A.M. got sight Long 48=40 so end theas 24 houres <FloatingCoordinates>Lat 32=22</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-27"><Styled.Hanging />Sunday July the 27th</time><br />
          the first part of theas 24 hours lay be calmed woch on deck imployed in stowing down Oil and Cleaning up decks at midnight about calm a verry light air from N.W. steering S.E. at 7 A.M. got sight Long 48=40 saw two spurm grampoces so end theas 24 hours <FloatingCoordinates>Lat 32=03</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-28"><Styled.Hanging />Monday July the 28th</time><br />
          the first part of theas 24 hours light air from S.W. and fine weather, saw two spurme grampoces at midnight fine and pleasant weather at 7 A.M. got sight Long 48=08 took waist boat in on deck and repaired her, so ends theas 24 hours <FloatingCoordinates>Lat 31=38</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-29"><Styled.Hanging />Tuesday July the 29th</time><br />
          the first part of theas 24 hours fresh bresses S.W. stearing S.E. at midnight some moderate wind S.S.W. at 7 A.M. got sight Long 47=47 latter part fresh gales from the S.W. stearing W.N.W. by the wind so ends theas 24 hours <FloatingCoordinates>Lat 31=26</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={34} />
        <p><time dateTime="1851-07-30"><Styled.Hanging />Wensday July the 30th AD 1851</time><br />
          theas twenty four hours commence and end with moderate gales from S and fine weather with a verry heavy swell heving from W.N.W. at 7 A.M. got sight Long 49=14 at 10 A.M. saw the carkess of a smoll whale so ends theas 24 hours <FloatingCoordinates>Lat 31=48</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-07-31"><Styled.Hanging />Thursday July the 31st</time><br />
          theas 24 hours comence with light Bresses from S and fine weather. Gamed with the Barque Adventure of London Capt MCarta 4 months out 25 Bbls of Oile at 6 P.M. got sight Long 49=16 at 7 AM got sight Long 49=33 moderate gales S.S.E. two whaleing Barques in sight so ends theas 24 hours Lat 31=41<FloatingCoordinates>Lat 31=41</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-01"><Styled.Hanging />Friday Aug the 1nd 1851</time><br />
          theas twenty four hours about Calm throught having stearag way but a small part of the time duering the 24h at 6 P.M. got sight Long 49=15 also 7 A.M. Long 49=21 so ends theas 24 hours <FloatingCoordinates>Lat 31=41</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-02"><Styled.Hanging />Saturday Aug the 2nd</time><br />
          the first part of theas 24 h lay becalmed havy swell heaving from N.W. one sail in sight to the N.W. at midnight Calm at 7 A.M. got sight Long 49=10. latter part light Airs from S.W. 4 sail in sight so ends theas 24 hours <FloatingCoordinates>Lat 32=00</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={35} />
        <p><time dateTime="1851-08-03"><Styled.Hanging />Sunday the 3rd of August 1851</time><br />
          the first part of theas 24 h light airs from S.W. fine weather with a heavy swell heaving from N.W. and another swell heaving from S.E. at ½ past 6 P.M. saw a learg school of whale, being neare night and one or two whailes not far of[f] we lowered at first sight, the whale were bound to the Eastward and quick and before we could git up with them it was knigh[t] so we turned about and came on board of our vessel, and, one of the whalers before mentioned prooved to be the Brig Francklin [Franklin] Capt Seaper [Soper] of Provincetown 245 Bbs of Spurm and 60 humpback. latter part of theas 24 hours moderate gales from N fine weather. Gamed with the Francklin at 8 A.M. got sight <FloatingCoordinates>Long 48=50<Styled.LeftPadding />Lat 32=15</FloatingCoordinates><br />
          <br />
          [pencil note in margin] this days log is a lie he could have got on to the whales if he had tried [end note]
        </p>
        <p><time dateTime="1851-08-04"><Styled.Hanging />Monday Aug the 4th</time><br />
          theas 24 hours commence with moderate gales from N. fine weather in compony with the Brig Francklin at 9 P.M. we headed to the Eastward and the Francklin to the weastward at 7 A.M. got Sight Long 48=30 latter part fresh gales from N.E. by N so ends theas 24 hours <FloatingCoordinates>Lat 31=50</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-05"><Styled.Hanging />Tuesday Aug't 5th</time><br />
          at the commencement of theas 24 hours a strong whole sail bress from N.E by N with tolerable fair weather, at midnight much the same, at 4 A.M. fresh bresses, under double reafed topsails and squolley ½ past 8 A.M. got sight Long 47=52 latter part strong bresses with rain squolls, and a rough sea, saw one or two watter spouts so ends theas 24 hours <FloatingCoordinates>Lat 32=03</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={36} />
        <p><time dateTime="1851-08-06"><Styled.Hanging />Wensday Aug't the 6th 51</time><br />
          theas 24 hours commence with fresh gales from N.E. with squolley weather top galliant sails and flying gib furled, sing[le] reaf in fore topsail and double reafs in the main. at midnight more moderate at 7 A.M. got sight Long 48=31 latter part Strong bresses E.N.E. so ends theas 24 h <FloatingCoordinates>Lat 33=04</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-07"><Styled.Hanging />Thursday Aug't the 7th</time><br />
          theas 24 hours commence with fresh gales from from [sic] N.E. with a rough sea at midnight more moderate with a heavy swell from N.E. at 7 A.M. got sight Long 49=01 latter part lay becalmed so ends theas 24 h <FloatingCoordinates>Lat 33=44</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-08"><Styled.Hanging />Friday Aug't the 8th</time><br />
          at the commencement of theas 24 hours lay becalmed. heavy swell heveing from the N.E. at 8 P.M. light air sprung up from S.W. the breess rather increased so that at 3 A.M. we had about 4 [k]nots bress at 8 A.M. got sight Long 48=14 latter part fine weather with pleasant gales from W so ends theas 24 hours <FloatingCoordinates>Lat 33=30</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-09"><Styled.Hanging />Saturday Aug't 9th</time><br />
          theas 24 hours commence with pleasant gales from W one sail in sight to the S.W. at midnight fine weather and pleasant gales at 8 A.M. got sight Long 47=17 2 sail in sight to the Weastward, latter part fresh bresses from W and fine weather except noon and there a rain squoll so ends theas 24 hours <FloatingCoordinates>Lat 33=49</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={37} />
        <p>[penned note in top right margin]<br />
          Since paying you<br />
          concluded<br />
          I have I hastily write you [end note]<br />
          <br />
          <time dateTime="1851-08-10"><Styled.Hanging />Sunday August the 10th AD 1851</time><br />
          theas twenty four hours commence with strong Bresses from the W with rain squolls at 5 P.M. furled the topgalliant sails at midnight more moderat but squolly at 8 A.M. got sight Long 46=19 latter part moderat breeses from N.E. Caught 3 dolphin so ends theas 24 hours <FloatingCoordinates>Lat 34=28</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-11"><Styled.Hanging />Monday Aug't the 11th</time><br />
          the first part of theas twenty four hours pleasant gales from W.S.W. Steering E.S.E. under double reafed topsails making 2 or 3 [k]nots head way, mid part fine weather, at 9 A.M. got sight Long 46=05 about the same time mentioned Spoke the Brig America of Mattyposset Capt Weast, 16 months out 300 Spurm, he spoke the Woter Irving about a week or 10 days previous 75 Bbs. Latter part gentle breezes S.W. with fine weather so ends theas 24 h <FloatingCoordinates>Lat 34=22</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-12"><Styled.Hanging />Tuesday Aug't the 12th</time><br />
          theas 24 hours commence continue and End with fresh gales from W at 8 A.M. got sight Long 44=10 latter part squolley so ends theas 24 hours <FloatingCoordinates>Lat 33=54</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-13"><Styled.Hanging />Wensday Aug't the 13th</time><br />
          theas twenty four hours commence with Strong gales from W.S.W. 7 P.M. took in sail as yousal, at midnight fresh gales from W. at 4 A.M. fresh gales as at midnight and verry squolley set the topgalliant sails over single reafed topsails at 8 A.M. got sight Long 42=19 thus ends theas 24 houres all well except the Steward, and he is laid by with a bad Coald<br /><br />
        </p>

        <PageNumber num={38} />
        <p><time dateTime="1851-08-14"><Styled.Hanging />Thursday August the 14th 1851</time><br />
          theas twenty four hours begin with Strong gales from S.W. Stearing E.N.E. at 4 P.M. very squolley moastly rain squolls at 5 P.M. the wind canted to W single reafs in the topsails, topgalliant sail, and flying Gib furled at 1/2 past 4 P.M. double reefed the top Sails hauled up the trysail and mainsail and furled the gib. stearing ENE through the knight at 7 A.M. got sight Long 40=11 at 9 AM more moderat made more sail the latter part fine weather so ends theas 24 h <FloatingCoordinates>Lat 35=33</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-15"><Styled.Hanging />Friday Aug't the 15th</time><br />
          theas twenty four hours commence with fresh gales from W and squolley at midnight Fair weather 4 A.M. ligh[t] air from N.W. and squolley. At 7 A.M. got sight Long 38=56 latter part lay be calmed. Clear weather and and verry worme and sweltering weather, thus ends theas 24 hours, Capt Rider, Second Mate and two or three of the hands forward quite sick with bad Coalds <FloatingCoordinates>Lat 36=24</FloatingCoordinates><br />
          <br />
          [noted in margin] pased through a number of Strong tide rips [end note]
        </p>
        <p><time dateTime="1851-08-16"><Styled.Hanging />Saturday Aug't the 16th</time><br />
          theas twenty four hours begin with verry light air from the South, at 4 P.M. pleasant Bresses saw a sail to the E.N.E. at midnight pleasant gales and fine weather at 8 A.M. got sight Long 38=26 the same sail before mentioned in sight. latter part good whole sail breess S.S.W. so ends theas 24 hours <FloatingCoordinates>Lat 37=13</FloatingCoordinates><br />
          <br />
          [noted in margin] pased through tide rips as we did yeasterday
        </p>
        <p><time dateTime="1851-08-17"><Styled.Hanging />August Sunday the 17th</time><br />
          theas twenty four hours commence, continue and end with strong gales from S.W. at 4 P.M. spoke The Barque Elisabeth of Mattyposset Capt Dexer 8 months out 50 Bbls spurm 35 humpback 15 black fish. gamed with this Barque untill 7 P.M. at 7 AM got sight Long 36=45 so ends theas 24 hours, and the sick ones are better <FloatingCoordinates>Lat 37=36</FloatingCoordinates>
        </p>

        <PageNumber num={39} />
        <p>[penned note in top right margin, different handwriting]<br />
          Sighs to think<br />
          begins with many [end note]
        </p>
        <p><time dateTime="1851-08-18"><Styled.Hanging />Monday August the 18th AD 1851</time><br />
          theas twenty foure hours commence with fresh gales from S.W. stearing E.S.E. under short sail 3 P.M. [unclear] Ship headed N.N.E. blowing fresh throught theas 24 houres ½ past 7 A.M. got sight Long 35=53 Steering E spoke The Barque Sun of Mattyposett 50 days out Clean So ends theas 24 hours <FloatingCoordinates>Lat 38=32</FloatingCoordinates>
        </p>
        <p>[penned note between entries, different handwriting]<br />
          I never might see thee errors[?] [end note]
        </p>
        <p><time dateTime="1851-08-19"><Styled.Hanging />Tuesday Aug't the 19th</time><br />
          theas twenty foure hours commence with Strong gales from W thick rough weather, at midnight more moderate 7 A.M. got sight Long 34=09 latter part lay becalmed so ends theas 24 houres <FloatingCoordinates>Lat 38=40</FloatingCoordinates>
        </p>
        <p>[penned note between entries, different handwriting]<br />
          These 24 hours,<br />
          Thursday noon<br />
          Sail in sight [end note]
        </p>
        <p><time dateTime="1851-08-20"><Styled.Hanging />Wensday Aug't the 20th</time><br />
          at the commencement of theas twenty foure houres verry light air from the S.W. some part of the time about calme one sail in sight saw a learg school of porpoces at 10 A.M. saw a school of grampoces, so ends theas 24 houres <FloatingCoordinates>Lat 38=40<br />Long 34=30</FloatingCoordinates>
        </p>
        <p>[penned note between entries, different handwriting]<br />
          The first part these hours light [end note]
        </p>
        <p><time dateTime="1851-08-21"><Styled.Hanging />Thursday Aug't the 21st</time><br />
          the first part of theas 24 hour light breeses S.S.W. at 4 P.M. pleasant gales from S.W. fine weather at 5 A.M. just before sunrise saw whale lowered the larbourd boat fastened to a sixty Barrel whale and in 5 or 10 minutes had her spouting blood. she soon turned up, we wafed [waifed] her and put on after the school but could not come up with them, we took oure whale along side and commenced cutting her in so ends theas twenty four hours <FloatingCoordinates>Lat 38=20</FloatingCoordinates><br />
          <FloatingCoordinates>32=30</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={40} />
        <p><time dateTime="1851-08-22"><Styled.Hanging />Friday Aug't the 22nd 1851</time><br />
          theas twenty foure hours commence with pleasant gales from S.W. squolly looking weather at ½ past 7 P.M. finished cutting in the body and commenced diping [dipping] the case ½ past 10 while diping the case a ship spook us Cat Smith Marster, did not understand her [unclear] at 5 A.M. cauled all hands and were buisely imployed in takeing care of the head oil and setting try woorks ag[o]ing, one sail in sight, verry rough and squolly at 7 A.M. got sight Long 32=09 so ends theas twenty foure houres <FloatingCoordinates>Lat 38=53</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-23"><Styled.Hanging />Saturday Aug't the 23rd</time><br />
          the first part of theas twenty foure houres moderate gales from all points of the compass and a verry heavy sharp swell heving from the N.E. and from the S.E. the weather squolly at 7 A.M. made a school of whale lowered for them, thay wer headed all ways we waited a while for them to git reguler but theay took a start and went quick and we could not git up with them we suposed that theay took a fright from some whale ganbe that we saw where theay were milling round so ends theas 24 houres two sail in sight <FloatingCoordinates>Lat 39=09<br />Long 32=08</FloatingCoordinates><br /><br />
        </p>
        <p><time dateTime="1851-08-24"><Styled.Hanging />Sunday Aug't the 24th</time><br />
          the first part of theas 24 hours fine pleasant gales from S.W. and good weather, 2 sail in sight, woch on deck imployed in boiling blubber, at midnight fine weather sight air S.E. at 7 A.M. got sight Long 32=00 latter part fine weather and pleasant bresses S.E. so ends theas 24 hours <FloatingCoordinates>Lat 39=06</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={41} />
        <p><time dateTime="1851-08-25"><Styled.Hanging />Monday August the 25th AD 1851</time><br />
          at the commencement of theas twenty foure houres light airs S.E. three sail in sight bark Brig and a schooner the schooner bore up and run down and spook us it proove to be the Wolter Irving Capt Nickerson of Provincetown Capt Nickerson lowered and came aboard of us he had 160 Bbls spurm Oil at midnight fine weather, at 7 A.M. got sight long 32=30 latter part gen[t]le gales S.E. and fine weather three sail in sight so ends theas 24 hours <FloatingCoordinates>Lat 39=12</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-26"><Styled.Hanging />Tuesday Aug't the 26th</time><br />
          theas twenty foure hours begin with pleasant gales from the south, fine weather 5 P.M. Eleven sail in sight, at midnight fair weather latter part of the knight verry windy and squolly with heavy rain squolls ½ past 5 A.M. looked so verry so squally and ragged that the Capt ordered the maintopsail double reafed which was allready single reafed, but we wer most happyly disapointed, at ½ past 7 A.M. fine weather got sight Long 32=22 latter part windy and squolly, the Walter Irving before mentioned is in sight 5 or 6 miles distant to the S.W. to windward thus ends theas 24 hours <FloatingCoordinates>Lat 39=01</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-27"><Styled.Hanging />Wensday Aug't the 27th</time><br />
          All of theas twenty foure houres moderate gales from the S and fine pleasant weather (at sun set nearly calm. three sail in sight one to windward and the other to leeward) at 7 A.M. got sight Long 32=14 at 11 A.M. raised a school of whail bound to leward and verry moderat the Waist boat lowered first and fastened to an 80 barrel whail about the time the sun was on the meridean so ends theas twenty foure houres <FloatingCoordinates>Lat 39=00</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={42} />
        <p><time dateTime="1851-08-28"><Styled.Hanging />Thursday August the 28th AD 1851</time><br />
          All of theas twenty foure houres pleasant gales from the Southern quarter while the Waist boat still fast to his whail and she running and sounding the second time sounding took all of his worp[?] bent in to the larbourd boats worp and did not stop until she had taken about 450 fathoms of worp she still ran and sounded and for three or foure houres hadent out less then 300 fathoms after that we got up within 10 or 20 feet of her flukes the sun about an houre high the Capt got in to the larbourd boat and the Mate in to the Starbord boat but could git no nearer untill after dark the last time that theay hauled up on her he got up to her hump and gave her a tolerable good lance and cut from her the vessel was about 5 or 6 miles [pencil note above: hul down at sunset] to windward and the other boats between him and the Brig the boats all got aboard about 9 [pencil note above: 12] P.M. at midnight fine weather and moderate bresses at 7 A.M. got sight Long 32=13 latter part of 24 hours pleasant gales from the S and moast beutiful weather so ends theas 24 hours <FloatingCoordinates>Lat 39=24</FloatingCoordinates><br />
          <br />
          [noted in margin] at 7 A.M. got sight Long 32=13<br />
          [pencil note in margin] another lie from begining to end [end note]
        </p>
        <p><time dateTime="1851-08-29"><Styled.Hanging />Friday August the 29th</time><br />
          theas 24 hours pleasant gales from the S and fine weather, saw grampoces and porpoces, at 7 A.M. got sight Long 32=24 the schooner, Wolter Irving in sight so ends theas 24 hours <FloatingCoordinates>Lat 39=23</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-08-30"><Styled.Hanging />Saturday Aug't the 30th</time><br />
          theas twenty foure houres commence with Strong breesses from the S at midnight much the same but squolley at 5 A.M. windy and squolley at 7 A.M. got sight Long 32=48 latter part more moderat maid all sail with pleasant gales form the S so ends theas 24 houres <FloatingCoordinates>Lat 39=16</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={43} />
        <p><time dateTime="1851-08-31"><Styled.Hanging />Sunday August the 31st 1851</time><br />
          theas twenty foure houres commence with pleasant gales from the S the weather some what squolly Steering Eastward by the wind at 5 P.M. Corvo and Flores in Sight at midnight fresh gales from the S at 7 A.M. got sight Long 31=15 Flores but 8 or 10 miles distant bairing E which is in Long 31=07 Lat 39=26 two barks in sight boath whailers so ends this day with fresh bresses and squolley weather <FloatingCoordinates>Lat 39=24</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-01"><Styled.Hanging />Monday Sept the 1 AD 1851</time><br />
          theas twenty four hours commence with fresh breeses and squolley weather heavy rain squolls one sail in sight at 5 P.M. nearly calm by times but verry squolley at midnight fair weather at 7 A.M. verry light airs from the E or E.N.E. got sight Long 31=32 latter part fine weather and moderate gales from E <FloatingCoordinates>Lat 39=14</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-02"><Styled.Hanging />Tuesday Sept the 2nd</time><br />
          theas twenty four hours begin with moderate gales from E fine weather somewhat squolley, at mid night thick weather and heavy rains untill 5 A.M. when it cleared of[f] and we had fine weather and pleasant gales from N.N.E. at 7 A.M. got sight Long 32=47 latter part wind and weather continues fine so ends theas twenty foure houres <FloatingCoordinates>Lat 38=41</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-03"><Styled.Hanging />Wensday Sept the 3rd</time><br />
          theas twenty four hours commence with light airs from East with fine weather at midnight, wind and weather much the same as at the first part at 7 A.M. got sight Long 32=32 saw 3 or 4 schools of grampoces, verry light airs from E the latter part of theas 24 houres with fine weather so ends this day journal <FloatingCoordinates>Lat 32=44</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={44} />
        <p><time dateTime="1851-09-04"><Styled.Hanging />Thursday September the 4th AD 1851</time><br />
          theas twenty four hours begin with light airs from E. with fine weather 6 P.M. spoke Barque Itely [Italy] of Green Poant [Greenport, NY] Capt Rowly [Rowley] twenty eight days out with 25 Barrels of spurme Oil Capt. Rowly is fitted for three years bound around the Cape for write whail at midnight gentle bresses and fine weather at 7 A.M. got sight Long 32=58 the barque Itely still in sight latter part gentle gales S.S.W. two sail in sight so ends theas twenty four hours <FloatingCoordinates>Lat 39=13</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-05"><Styled.Hanging />Friday Sept. the 5th</time><br />
          theas twenty four hours begin with light moderate gales from the S.W. and fine weather at midnight windey, raney, and verry squolley accompenyed with thunder and lightening and continued the same untill 7 A.M. when it cleared up and had fine weather with pleasant gales from the N.W. but a heavy swell heaving from diferant quarters so ends theas twenty four hours <FloatingCoordinates>Lat 40=00</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-06"><Styled.Hanging />Saturday Sept the 6th</time><br />
          theas twenty foure hours commence with moderate gales from NW. with fine weather and a verry heavy swell heaving from N.W. at midnight fine and pleasant weather at 7 A.M. got sight Long 32=18 neare Flores, 3 sail of vessels in sight one appeared to be a Hermaphrodite heading down towards us as if to speek with with the Jem so ends theas 24 hours with pleasant gales from W and fine weather <FloatingCoordinates>Lat 39=17</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={45} />
        <p><time dateTime="1851-09-07"><Styled.Hanging />Sunday September the 7th 1851</time><br />
          theas twenty foure houres moderate gales frome the S.W. and fine, pleasant, weather, the Verginiea [Virginian] came down and spoke us we had 250 Bbls five months out Capt Martine [William Martin] 160 Bbl [unclear] of foure months out. the Wolter Irving was but a short distance to leward. we both ran down and spoke him with 160 Bbls of spurm Oil we gamed with them until about 8 0r 9 O clock P.M. fine moderate weather through the knight and latter part of theas twenty four hours boath of theas vessels in sight so ends this days journal 25 miles SE from Flores
        </p>
        <p><time dateTime="1851-09-08"><Styled.Hanging />Monday Sept the 8th 1851</time><br />
          theas twenty four hours moderate breeses and pleasant weather saw a learg ship boiling. headed in towards Flores so ends theas 24 hours Flores is about 25 miles to the N.W. of us so ends theas twenty four hours
        </p>
        <p><time dateTime="1851-09-09"><Styled.Hanging />Tuesday Sept the 9th</time><br />
          theas twenty four hours begins with moderate breeses from S with fine weather at midnight rainey and squolly and continues so at eight A.M. we wer under double reaf topsails 3 sail in sight it cleared up about 12 so ends theas 24 houres stearing for Fayoll [Faial Island, Central Azores] which baires S.E. 30 miles distant so end theas 24 hours<br />
          <br />
          [noted in margin] saw a school of blackfish [end note]
          <br /><br />
        </p>

        <PageNumber num={46} />
        <p><time dateTime="1851-09-10"><Styled.Hanging />Wensday, September the 10th AD 1851</time><br />
          At the commencem of theas twenty four hours we have fresh breeses from N.E. Stearing E.S.E. by the wind for St. Georgees Island to recrute at 8 P.M. Fayal bairs S 8 or 10 miles distant at midnight wind and weather continues much the same, rather more Squolley took in fore top galliant sail and flyingib, and at 4 A.M. in the morning we wer cloast in to the weastern End of St George we [unclear] down about the middle of the Island on the South side at 8 A.M. lowered the Starbourd boat and went ashore to git wood, watter, ballast &amp;c Capt Rider gave the Shipkeeper and Manual one of our boat steerers liberty to be absent from the vessel twenty four hours to sey their friends on St George the Capt returned on board Just before twelve O Clock and had ingaged some supplies the wind blew heavy by squolls of[f] the Island tacked the Brig back and foarth under double reafed topsails and fore topmost sta[y]sail so ends theas twenty four hours
        </p>
        <p>[penned between entries, upside down] Beautiful
        </p>
        <p><time dateTime="1851-09-11"><Styled.Hanging />Thursday Sept. 11</time><br />
          theas twenty four hours commence with Strong breeses of[f] the land while laying back and forth under double reafed topsails under St. George the Captin and the moast of the crew went ashore for wood watter, ballast &amp;c, it was so rough that they only got about ½ chorde of wood which they brought of[f] just before night. At 9 P.M. verry moderat and at midnight Calme at ½ past 6 A.M. in the morning Capt Rider and the moast part of the crew went ashore with twoo boats, ballast, watter &amp;c it was still rough on shore and could only get 2 small boat loads this fore noon at 11 AM we had a pleasant brees from SE so ends theas twenty four hours<br /><br />
        </p>

        <PageNumber num={47} />
        <p><time dateTime="1851-09-12"><Styled.Hanging />Friday September the 12th 1851</time><br />
          the first part of theas twenty four hours moderate breeses from S.S.E. and fine weather all hands imployed in procureing ballast, Watter &amp;c at 4 P.M. heavy swell hove on shore and we wer no able to git any thing more this afternoon. middle part fresh breeses from S.E. at 7 A.M. more moderat went ashore with one boat with some blackfish Oile to trade for Vegetables &amp;c. so ends theas twenty four hours while we are under shorte working sail neare in to St Georges Island, on the South side
        </p>
        <p><time dateTime="1851-09-13"><Styled.Hanging />Saturday Sept the 13th</time><br />
          theas twenty four hours commence with gentle breeses from S.E. smooth weather, but soon increased and made it rough one shore and the weather looked so bad that the inhabetance of the Island said that it was gathering up for an onshore storme, so we drove on our [unclear] and ship 3 more men, got our trumpery all aboard, it soon began to rain and blow we headed towards Fayal untill past the weastern end of St. George then hauled up around it to the N.E. under moderate sail. at 8 A.M. we wer about ½ way between St. Georg and Gracyoce [Graciosa, Azores] fresh brees and rough sea took in all sail except double reafed topsails and fore topmast staysail so ends theas twenty four hours whil we are under the lee Graciosa making good weather
        </p>
        <p><time dateTime="1851-09-14"><Styled.Hanging />Sunday Sept the 14th/51</time><br />
          at the commencement of theas 24 h we wer under the lee of Graciosa with heavy gales from S.E. under double reafed topsails and foretopmast stasail at midnight more moderate wind blowing from SW latter part of the night we had one or two thunder squolls come over with raine and wind latter part of theas twenty four hours moderate gales from W and pleasant weather the weastern end of Terceira bairing S by W 6 or 8 miles distant 3 sail in sight so ends theas twenty four hours <FloatingCoordinates>Lat 39=06</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={48} />
        <p><time dateTime="1851-09-15"><Styled.Hanging />Monday September the 15th 1850 [sic]</time><br />
          theas twentyfour hours commence with moderate gales from W fine weather at ½ past 6 P.M. gamed with the Virgineia of Orleans Capt Martin 160 reports the Spartin [Spartan] of Provincetown 250 Bbls Oil the Govner Hopkins Clean Terceria [Terceira, Azores] W 5 miles distant steared of[f] to the Southward through the knight under short sail at midnight fine weather at 8 A.M. Terceria baring N.N.W. 15 or 18 miles distant latter part moderate gales from N.N.E. fine weather so ends theas twenty four hours <FloatingCoordinates>Lat. 38=12</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-16"><Styled.Hanging />Tuesday Sept. the 16th</time><br />
          the first part of theas 24 hours moderate gales from the N.N.E and cloudy otherways good weather at 5 P.M. rather Squolly while we are neare in to the weastern end of St. Michaels at 8 P.M. shortened sail for the knight at 5 A.M. made sail as yousal while we are about 15 miles Weast of the Island latter part Strong breeses from N.E. at the close of theas twenty four hours we are cloast in to the City on the SW side of the Island
        </p>
        <p><time dateTime="1851-09-17"><Styled.Hanging />Wensday Sept the 17th/51</time><br />
          at the commencement of theas twenty four hours we have fresh breeses blowing of[f] the land saw three or 4 sail of vessels laying at anchor of[f] the City of St. Michael on the SW side at 3 PM squolly with wind and rain and continued the same through the night we passed St. Maryes [Santa Maria] about 10 P.M. under Short sail Stearing southward at 8 A more moderate the rain and wind seased but remained Cloudy so that we could git no sight 1 barque in sight bairing W 5 miles distant stearing SE by S the same as we are a stearing so ends theas 24 houres at ½ past 11 AM fine Cleare weather <FloatingCoordinates>Lat 36=27</FloatingCoordinates><br />
          <FloatingCoordinates>by dead reckoning Long 24=30</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={49} />
        <p><time dateTime="1851-09-18"><Styled.Hanging />Thursday September the 18th 1851</time><br />
          theas twentyfour hours commence with moderate breeses from N.N.E. and fin weather but soon becoms Squolly with rain and some wind by squolls, and continued squolly and rainy to the close. at 8 A.M. got sight Long 23=00 saw a school of grarmpoces Capt Rider Shot one of them and supposed that he must have died from the effects of the shot. one sail in sight of[f] our lee beem so ends theas twentyfour hours <FloatingCoordinates>Lat 36=12</FloatingCoordinates><br />
          <br />
          [noted in margin] at 6 P.M. saw a School of Blackfish lowered and got one 2 Bbl Blackfish
        </p>
        <p><time dateTime="1851-09-19"><Styled.Hanging />Friday Sept the 19th/51</time><br />
          theas twentyfour hours begin with fresh gales from NE and rugged weather. Continued and Ends the same rainy and squolly throught at 10 AM got sight Long 22=13 so ends theas twentyfour hours <FloatingCoordinates>Lat 35=48</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-20"><Styled.Hanging />Saturday Sept 20th</time><br />
          theas twenty four hours commence with Strong gales from the E with Squolly, rainy, ruged, weather and continued much the same to the Close of theas 24 hours at 8 A.M. got sight Long 21=47 saw a Learg Ship Stearing S.W. so ends theas twenty four hours <FloatingCoordinates>Lat 34=24</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-21"><Styled.Hanging />Sunday Sept 21st/51</time><br />
          at the commencement of theas twentyfour hours strong breeses from E.S.E. saw one sail Stearing W.S.W. at 5 PM gales increas and verry squolly, cloast reafed, main topsail and double reafed the fore topsail. and set a Storme trysail and fore topmast Staysail. fresh breeses through the knight at 8 A.M. more moderate and cleared up so that we got sight Long 22=20 latter part of theas twenty four houres strong breeses E.N.E. so ends theas twenty four hours <FloatingCoordinates>Lat 35=03</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={50} />
        <p><time dateTime="1851-09-22"><Styled.Hanging />September Monday the 22nd AD 1851</time><br />
          the first part of theas 24 hours lay to under Cloast reafed fore and main topsails, fore topmast Staysail and Storme trysail. the wind blowing heavy from E to E.N.E. squolly weather and a rough sea. at midnight Strong gales at 7 AM more moderate and better weather, made some rainying [running?] sail heading up S.E. by E wind E by N At 8 A.M. got sight Long 22=40 so ends theas 24 hours <FloatingCoordinates>Lat 35=00</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-23"><Styled.Hanging />Tuesday Sept the 23rd/51</time><br />
          theas 24 hours commence and continue through the middle part with fresh gales from the Eastern quorter with a rough sea, and squolly rainy weather, at 8 A.M. cleared up got sight Long 31=43 latter part good smart whole sail brees ad fine Cleare weather heading S.S.E. by the wind which is E so ends theas 24 h <FloatingCoordinates>Lat 33=59</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-24"><Styled.Hanging />Wenesday Sept 24/51</time><br />
          theas 24 h commence with moderate gales from N.E. with tolerable good weather, toward the middle and latter part fresh gales, squolly weather. heavy Rains and a rough sea bearing from N.N.E. saw one ship headed weastward at 7 A.M. got sight Long 19=46 so ends theas 24 h <FloatingCoordinates>Lat 33=25</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-25"><Styled.Hanging />Thursday Sept 25/51</time><br />
          theas 24 h commence with Squolly weather and verry soon after have Strong gales from N.E to E.S.E. at 7 A.M. more moderat and Clear enough to git a sight Long 19=54 latter part more moderate and tolerable good weather saw a learge Barque headed to the SW so ends theas 24 h the weather look windy and squolly <FloatingCoordinates>Lat 33=45</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={51} />
        <p><Styled.Hanging />[Note: no entry for <time dateTime="1851-09-26">Friday Sept 26/51</time>]
        </p>
        <p><time dateTime="1851-09-27"><Styled.Hanging />Saturday September the 27th AD 1851</time><br />
          the first part of theas 24h squolly weather and strong breeses from E at midnight strong gales and rough sea at 7 A.M. got sight Long 20=30 at 9 A.M. made a sail 4 points off our weather bows at noon could see her plane of deck. she was by the wind the same as we were (and when we hove to at night she was about foure or five miles of our weather Beam. the) latter part fresh gales and a verry heavy swell heaving from the N.N.E other way weathers good thus ends theas 24h <FloatingCoordinates>Lat 35=08</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-28"><Styled.Hanging />Sunday Sept 28th/51</time> [penned note, different handwriting]<br />Strong[?] Lat. [end note]<br />
          <br />
          theas 24 h begin with strong gales from E fine weather, but a heavy swell heaving from the N.N.E. at midnight verry moderate at 7 A.M. got sight Long 20=48 saw a learg Ship headed to the SW and the Brig before mentioned the wind aired up a little and hauled to the N.N.E. we boath tacked to the Eastward she was 5 or 6 miles to windward she [unclear] of for us. lowered his boat and came aboard of us she prooved to be a French Brig Watter Wich [Water Witch] belonged to Paris bound to Giberaller [Gibralter] out of provishions we gave him one Bbl of bread and a few potatoes and some lamp Oil. he had non to burn in his binacle. latter part theas 24 moderate gales from N.N.E and find and pleasant, smooth weather <FloatingCoordinates>Lat 35=29</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-09-29"><Styled.Hanging />Monday Sept 29th 51</time><br />
          the first part of theas 24h light airs from the N.N.E and fine smooth weather laying up E at 2 P.M. squaird [squared] in the yards and run of[f] S.S.E at midnight fine moderate weather at 7AM got sight Long 20=54 hauled her up W.S.W. by the wind which had canted to the N.W. 4 P.M. got sight Long 21=05 so ends theas 24 h <FloatingCoordinates>Lat 34=41</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={52} />
        <p><time dateTime="1851-09-30"><Styled.Hanging />Tuesday September the 30th 1851</time><br />
          the first part of theas 24 h strong breeses from the N.N.W. laying up W by the wind middle part more moderat at 7 A.M. got Sight Long 21=08 latter part fresh gales from N.W. Clear weather tack one or twice saw a sail to windward and when we tacked the last time which was to the Westward the sail to windward wore ship and run down for us. So end theas 24h <FloatingCoordinates>Lat 34=43</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-01"><Styled.Hanging />October the 1st 1851</time><br />
          the first part of theas 24 h pleasant gales from the N heading up by the wind W.N.W. hauled up the mainsail a hove back our main topsail and topgalliant sail to the mast for the Ship Hearild [Herald] of N.B to speek us. She is commanded by Capt Sloacom he has 65 Bbls spurm and had seen whales six times. At midnight gentle breeses and good weather at 8 A.M. a sail in sight three points forward our lee bean headed to the N.E. and we wer headed W.N.W. clost haul the wind at N when she was about leeward of us She tacked to the W. laying up about the same as we are laying up. So ends theas 24 yours <FloatingCoordinates>Lat 34=12</FloatingCoordinates><br />
          <br />
          [noted in margin]  at 8 A.M. got sight Long 21=43 [end note]
        </p>
        <p><time dateTime="1851-10-02"><Styled.Hanging />Thursday Oct 2nd/51</time><br />
          theas 24 h commence with gentle breeses from the N with fine and pleasant weather the Brig (before mentioned to leeward) squaired of[f] before the wind, and we thinking that she might have raised whale, squaired of[f] after her for about one houre, she still keeping the same course we hauled up by the wind lay up W.N.W. another sail in sight of our weather bows at 3P.M. She spok us &amp;[?] prooved to be the Union of Provincetown 5 months out Clean at 6 P.M. took a squall from NE and had a fresh breese through the [continued in margin]<br />
          night at 7 A.M. got sight Long 20=55 fresh gales and ruged weather the latter part laying up SE. so ends theas 24 h [end of entry]<FloatingCoordinates>Lat 33=48</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={53} />
        <p><time dateTime="1851-10-03"><Styled.Hanging />Friday Oct the 3rd 1851</time><br />
          theas 24 hours begin with fresh gales from E.N.E. with squolly, ruged [rugged] weather  at 1 P.M. tacked ship to the N the wind canted to E by S we heading up N.E. by N at midnight Strong breeses. at 7 A.M. got sight Long 20=57 fresh breeses E by N laying up N by E latter part moderate breeses and fine weather a heavy swell heaving from the N so ends theas 24 hours <FloatingCoordinates>Lat 34=35</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-04"><Styled.Hanging />Saturday Oct the 4th/51</time><br />
          theas 24 hours begin, continue and end with moderate gales from E by N and fine weather heading N by E. at 6 P.M. spoke Scr Ameailia [Amelia] of Sandwich Capt Hoxey [Hoxie] three months out Clean. at 7 A.M. got sight Long 21=24 so end theas 24 h <FloatingCoordinates>Lat 35=18</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-05"><Styled.Hanging />Sunday Oct the 5th/51</time><br />
          at the commencement of theas 24 hours tacked Ship laying up S.E. with moderate gales from E.N.E. with fine weather at 7 P.M. tacked Ship headed N.N.E Starbourd tacks abound[?] at midnight moderate gales and good weather at 6 A.M. the wind canted back again tacked Ship heading up S.E. and at 8 A.M. got sight Long 21=13 latter part pleasant gales E.N.E. and fine weather so ends theas 24 hours <FloatingCoordinates>Lat 34=59</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-06"><Styled.Hanging />Monday Oct the 6th/51</time><br />
          the first part of theas 24 hours pleasant breeses from E.N.E. with weather, middle part pleasant Breeses and fine weather heading S.E. at 7 A.M. got sight Long 20=00 latter part fresh gales N.E. by E heading S.E by S saw 1 sail headed to the weastward thus ends theas 24 hours <FloatingCoordinates>Lat 34=20</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={54} />
        <p><time dateTime="1851-10-07"><Styled.Hanging />Tuesday October the 7th AD 1851</time><br />
          Strong gales from E.N.E throught theas 24 h with roug[h] ruged squolly weather Stearing S.E. by S for Maderia [Madeira]. nothing more oucurd [occurred] worthy of remark (except our Long) at 7 A.M. got sight Long 18=01 so ends theas 24 h <FloatingCoordinates>Lat 32=52</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-08"><Styled.Hanging />Wensday Oct the 8th/51</time><br />
          fresh breeses the first part of theas 24 h thick smokey or hasey weather laying up S.E. by the wind (larboard tacks aboard) at 3 P.M. saw Maderia baring E.S.E 25 or 30 miles distant we had a strong brees from E.N.E. verry rough as we drawred in under the lee of the Island we had more moderate breeses untill we got so far in that it was about calm, and we could see that it was still blowing fresh out clere of the Island. At midnight calm at 7 A.M. got sight Long 17=19 latter part light airs and verry baffling all round the compass so ends theas 24 hours 1 Brig in sight cloast in to the Island <FloatingCoordinates>Lat 32=39</FloatingCoordinates><br />
          <br />
          [noted in margin] at 1 P.M put prevent[i]on braces on the main yard to save it it being allready badly sprang in the or neare the slings [end note]
        </p>
        <p><time dateTime="1851-10-09"><Styled.Hanging />Thursday Oct the 9th/51</time><br />
          theas 24 houres we are a crusing of[f] the weast End of Maderia cloast in to the Island with light breeses from the Eastern quarter and find clear weather 1 Brig in sight, saw a school of grampoces, so ends theas 24 hours. the weast end of Maderia baring E 10 miles dist.
        </p>
        <p><time dateTime="1851-10-10"><Styled.Hanging />Friday Oct the 10th/51</time><br />
          theas 24 hours commence with moderat breeses from the S fine weather stearing N.W. at midnight fine weather at 7 A.M got sight Long 17=51 moderate breeses from S.E. stearing N.N.E fine weather thus ends theas 24 h <FloatingCoordinates>Lat 33=39</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={55} />
        <p><time dateTime="1851-10-11"><Styled.Hanging />Saturday October the 11th AD 1851</time><br />
          theas 24h moderate breeses from the N.E fine weather and a smooth sea at 3 P.M. (saw a sea turtle) at 7 A.M. got sight Long  18=10 woch on deck imployed in repairing the gib &amp;c so ends theas 24 h (our course N.W. by N <FloatingCoordinates>Lat 33=45</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-12"><Styled.Hanging />Sunday Oct the 12th/51</time><br />
          theas 24h commence, continue, end, with moderat gales from the E with fine pleasant weather and a smooth sea, while we are stearing N.W. by N the moast part of the time under shorte sail, at 8 A.M. got sight Long 19=13 thus endeth theas 24 houres all hands well but in rather low Spirits having sean no whale since the 27th of Augt <FloatingCoordinates>Lat 34=27</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-13"><Styled.Hanging />Monday Oct. the 13th/51</time><br />
          theas 24 h moderate gales from the E fine weather and a Smooth sea. our course by compas N.W. by N. at 8 A.M. got sight Long 20=22 one sail in sight so ends theas 24 hours <FloatingCoordinates>Lat 35 =15</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-14"><Styled.Hanging />Tuesday Oct the 14th/51</time><br />
          the 24 h light airs from the E fine weather and a smooth sea stearing all the way from W.S.W. to W by N at 4 A.M. saw a grampos but a few yards from the Brig. at 8 A.M. got sight Long 21=32 so ends theas 24 h <FloatingCoordinates>Lat 34=42</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={56} />
        <p><time dateTime="1851-10-15"><Styled.Hanging />Wensday October the 15th AD 1851</time><br />
          theas 24 h commence with light breeses from the E. but soon hauled round to the S and at 3 P.M. we had light breeses from W.S.W. fine weather with it stearing by the wind headed to the Weastward ½ past 3 P.M. saw a learg school of blackfish headed to the eastward at midnight gentle breeses from S.W. at 8 AM got sight Long 21=51 latter part of theas 24 hours fresh breeses from S.W. by W weather squolly rainy with heavy head beat sea heving from W.N.W. so ends theas 24 h <FloatingCoordinates>Lat 35=50</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-16"><Styled.Hanging />Thursday Oct the 16th/51</time><br />
          At the commencement of theas 24h fresh gales from W.S.W. heading N.W. by the wind midle part moderate gales from N Stearing W.S.W. at 8 A.M. got sight Long 23=09 fresh gales with fine weather otherways, saw 2 sail one of[f] our weather beam and the other of[f] our lee bows at 10 A.M. aultered our course and steared N.N.W. fresh gales from N.E so ends theas 24h <FloatingCoordinates>Lat 35=14</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-17"><Styled.Hanging />Friday Oct the 17th/51</time><br />
          the first part of theas 24h Strong whole sail brees N.E. Stearing N.N.W. at 6 P.M. hove to, as yousal under shorte sail heading to the Northward, at 8 AM got sight Long 24=09 thus ends theas 24 h <FloatingCoordinates>Lat 35=54</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-18"><Styled.Hanging />Saturday Oct the 18th/51</time><br />
          theas 24 h moderat breeses first part from the N.E. latter part S.E. weather good exeps [except] now and then a rain squol would come over and be cleare again in a few minutes. at 8 A.M. got sight Long 25=51 light airs from N.E. weather continues the same to the close. s[o] ends theas 24 h <FloatingCoordinates>Lat 37=00</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={57} />
        <p><time dateTime="1851-10-19"><Styled.Hanging />Sunday October the 19th AD 1851</time><br />
          at the commencement of theas 24h we have a light aire from E.S.E. St. Maryes and St. Micheals plain in sight St. Maryes baring E and St. Micheals baring N.N.E. at midnigh[t] fine pleasant brees from S.E. run under short sail until neare in to the weastern part of St. Micheals, and hove to at 9 A.M. got sight Long 25.55 making our crenomater [chronometer] 12 or 15 miles to[o] far to the weastward, the remainder of theas 24 h fine pleasant breeses from S.W. heading of[f] from the Island saw two vessels headed Eward so ends theas 24 hours Lat <FloatingCoordinates>37=49</FloatingCoordinates>
        </p>
        <p><aside>16<br />17</aside>[penned between entries, different handwriting] Vessel's name [end note]
        </p>
        <p><time dateTime="1851-10-20"><Styled.Hanging />Monday Oct the 20th/51</time><br />
          <aside>18<br />19<br />20<br />21<br />22<br />23<br />24<br />25<br />26<br />27<br />28<br />29</aside>theas 24 h begin with fresh breeses from S.W. and with tolerable good weather heading W.N.W. under Shorte sail at 11 P.M. took a heavy squoll from W.S.W. lasting but a few minutes and then we had another from the N.W. taking us all aback caring [carrying] away one of our fore topmasts [se]conds after the heaft of the squall was over Cloast reafed the main topsail and put the Brig of W.S.W. under double reafed fore topsail Cloast reafed main topsail and fore topmost staysail the wind was blowing a heavy gale from N.N.E. at ½ past 7 A.M. more moderat and cleare so that we got a Sight Long 27=00 made more sail and at the close of theas 24 h we are under all sail except the fore top galliant sail and flying gib saw a whailing Barque headed Eastward so end theas 24 hours <FloatingCoordinates>Lat 37=03</FloatingCoordinates>
          <br /><br />
        </p>

        <PageNumber num={58} />
        <p><time dateTime="1851-10-21"><Styled.Hanging />Tuesday October the 21 1851</time><br />
          the first part of theas 24 h we have a strong gale from the N with a heavy swell heaveing from the N.W. stearing W.S.W. fore top galliant sail and flying gib furled. 2 sail in sight one headed to the E and the head to the W. at 6 PM more moderate. shortened sail for the night Stearing W untill 8 A.M. got sight Long 29=16 latter part lay becalmed so ends theas 24 h <FloatingCoordinates>Lat 36=04</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-22"><Styled.Hanging />Wensday Oct the 22nd/51</time><br />
          theas 24 h commence while we lay becalmed with fine weather it soon aired up from S.W. and continued a while and then began to brees at 3 P.M. discovered somthing on the water to windward that looked like a boat. alls[o] some fregments of a vessel we lowered our boat and took it along side it prooved to be a Ships Misenmast with the moast of the Spars and sails attached to it we saved the mast part of it. it was blowing fresh and looking likely for a heavy gale, besides it was gitting dark. we cut frome the mast and let it go with what remained attached to it. we hove to und[er] doubled reafed fore and Cloast reafed main topsail and fore topmast staysail, heading W by N at midnight at Midnight heavy gales by squolls at 2 A.M. the wind canted in to W wore Ship heading S.S.W. the wind soon canted back to SW by W at 6 AM had a heavy squoll put a double storm reaf in the trysail in order to set it and take in the topsails but it soon abated so that we set the storme trysail with out being under the necessity of taking in the topsails at 10 A.M. wore Ship heading W.N.W. latter part fresh gales from S.W. thus ends theas 24 h
          <FloatingCoordinates>by dead reckoning Lat 36=30<br />do&nbsp;&nbsp;&nbsp;do&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Long 29=45</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={59} />
        <p><time dateTime="1851-10-23"><Styled.Hanging />Thursday October the 23rd AD 1851</time><br />
          theas 24 h commence with heav[y] Strong Gales from S.W. and verry squolly heading W.N.W. at 5 P.M. wore Ship heading to the South the gale abated some but continued verry Squolly through the night untill 8 A.M. at which time we set single reafed fore topsail, double reafed main topsail mainsail reafed fore sail gib and trysail heading SW with Starbourd tacks aboard the sun broak out. got a sight Long 29=17 latter part fresh breeses and squolly weather thus ends theas 24 hours <FloatingCoordinates>Lat 35=50</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-24"><Styled.Hanging />Friday October the 24th/51</time><br />
          theas 24 h commence with heavy breeses and rough squolly weather, heading S.W. with our Starbord tacks aboard, under a Single reafed fore sail and double reafed main topsails whol mainsail reafed fore sail trysail, gib, and fore topmost Staysail. it being squolly, furled the mainsail and gib. hauled up on [unclear] [unclear] up the trysail before we could get the gib in it had blown to peces some considerable at 3 P.M. to a verry heavy squoll. took in all sail except Cloast reafed main topsail reafed fore sail and fore topmast staysail the squoll was from the North at 6 P.M. furled the foresail and put a double Storme reaf in the trysail to set in case we should have need to set it. at ½ past 11 A.M. saw a light of[f] our weather bow it prooved to be a learg Ship laying to under shorte sail headed to the N.E. she passed but a shorte distance to the weather of us, the wind vering and hauling from N to NW heavy gales through the night especially larg squolls. at 8 A.M. got sight Long 29=00 we then put the wheel up got the Brig Gem before the wind Steering S.S.W. set double reafed fore topsail and reafed foresail (one sail in sight.) theas 24 hours close with heavy gales from N.N.W. Stearing S.S.W. <FloatingCoordinates>Lat 34=35</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={60} />
        <p><time dateTime="1851-10-25"><Styled.Hanging />Saturday October 25th 1851</time><br />
          theas 24 h begin with heavy gales especially by squolls which wer verry frequent from N.W. to N we wer scu[d]ding under Cloast reafed main topsail reafed foresail and fore topmast staysail at 3 PM set double reafed fore topsail. Stearing S.S.W. untill 8 A.M at which time the gale abated got sight Long 28=58 at 10 A.M. had all sail on exept the topgalliant sails and gib which was unbent to repair. saw a Ship headed to the N.E. under double reafed topsails also a Brig heading N.E. at the Close of theas twenty four houres hove our topsail yards settle down upon the cups and the reaftackles hauled up Scuding out a Squoll from the N.N.W. the woch on deck imployed in repairing the gib so ends theas 24 h <FloatingCoordinates>Lat 31=40</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-26"><Styled.Hanging />Sunday Oct 26th/51</time><br />
          theas 24 h begin with fresh gales from N.W. with Squolly weather Stearing S.W. saw 3 sail of vessels headed N.E. under double reafed topsails at midnight the wind canted in a point or two we stered S.W. by W. at 8 A.M. we wer under all sail excepts our main gib which was unbent and undergoing repairs. at ½ past 8 A.M. got sight Long 30=08 latter part fresh breeses from N.N.W. weather Squolly. so ends theas 24 h <FloatingCoordinates>Lat 29=05</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-27"><Styled.Hanging />Monday Oct 27th/51</time><br />
          the first part of theas 24 h fresh gales from the N some what squolly heading W.S.W. by the wind at 4 P.M. bent the main gib which had through some repairs. heading W by S at midnight fresh gales. at 8 A.M. fresh gales N.E. rainy and squolly stering W ½ past 8 A.M. got sight Long 35=28 latter part heavy squolls from the N.E. so ends theas 24 h <FloatingCoordinates>Lat 27=29</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={61} />
        <p>[penned note in top right margin, different handwriting]<br />
          Is.[?]<u> W. 1857/2</u><br />
          [unclear]14<br />
          [end note]
        </p>
        <p><time dateTime="1851-10-28"><Styled.Hanging />Tuesday October the 28th 1851</time><br />
          theas 24 h fresh gales from N to NW by W squolly weather headed to the weastward by the wind moas part of the tine under single reafed topsails &amp;c. at 8 A.M. got Sight Long 34=58 thus endeth theas 24 h <FloatingCoordinates>Lat 25=43</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-29"><Styled.Hanging />Wensday Oct the 29/51</time><br />
          theas 24h begin with pleasant gales from N.W. by N with fine weather making W by South course by compass at midnight about calm and very squolly looking weather. so much so that the capt ordered the fore topsail double reafed and the main Cloaste reafed we had a number of light squolls with heavy rains  but not much wind at ½ past 7 AM got sight Long [blank space] latter part squolly weath[er] thus ends theas 24h <FloatingCoordinates>Lat 24=14</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-30"><Styled.Hanging />Thursday Oct 30th/51</time><br />
          theas 24h we have moderate gales throught from N.N.W. to W. by S with fine pleasant weather except a few light squolls our course was by the wind with our Starbourd tacks aboard at 8 A.M. got sight Long [blank space] (we supose that here was some mistake in yeasterday Sight) so ends theas 24h <FloatingCoordinates>Lat 25=12</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-10-31"><Styled.Hanging />Friday Oct 31st/51</time><br />
          theas 24 h commence with light aires from the Weastern board with fine weather heading S.W. by the wind with our Starbord tacks aboard at 9 P.M. very light airs W.S.W. tacked ship laying ub [sic] N.W. by N at midnight light airs from S.W. head W.N.W at 8 AM fine brees S.S.W at 9 A.M. quite moderat and rainy latter part moderate breeses from the E thick rainy weather so ends theas 24 h <FloatingCoordinates>Lat 22=30 D.Re[c]<br />Long 38=30 do do</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={62} />
        <p><time dateTime="1851-11-01"><Styled.Hanging />Saturday November the 1st AD 1851</time><br />
          theas 24 h commence with a good whole sail brees from S.S.W. with rainy weather and verry squolly, some thunder and freequeant flashes of sharp litening all through night. oure course W by N at midnight strong gales rainy and squolly under double reafed topsails courses trysail and fore topmast Staysail. at 7 A.M. it had moderated down so much so that we got all Sail on the Brig again at 8 A.M. got sight Long 41=01 latter part moderate gales from SW and fine weather so ends theas 24 h <FloatingCoordinates>Lat 23=37</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-02"><Styled.Hanging />Sunday November the 2nd/51</time><br />
          theas 24 h begin with moderate gales from S.W. but soon canted to the Weastward on into the N.W. tacked Ship laying up S.W. by W Starbourd tacks aboard with moderate breeses (at 11 A.M. a Barque hailing from Plymouth as we understood the Capt to say. Spoke us bound to riough [Rio de Janeiro] his longitude was 42 the same as ours) at midnight fine weather and pleasant gales from the N.N.E. Stearing W by N latter part fine weather with moderate gales frome NE 1/2 past 7 A.M. got Sight Long 42=48 so ends theas 24h <FloatingCoordinates>Lat 23=21</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-03"><Styled.Hanging />Monday Novr 3rd/51</time><br />
          theas 24 h moderate trade winds from NE stearing W by N at ½ past 7 A.M. got sight Long 45=23 so ends theas 24 h <FloatingCoordinates>Lat 23=21</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-04"><Styled.Hanging />Tuesday November 4th 51</time><br />
          theas 24 h we have moderate trade winde from E to S.E. light Squolls verry freequent otherways the weather is good at 8 A.M. got sight Long 46=23 so ends theas 24h <FloatingCoordinates>Lat 23=30</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={63} />
        <p><time dateTime="1851-11-05"><Styled.Hanging />Wensday November the 5th AD 1851</time><br />
          pleasant traide winds prevail through theas 24h from E.N.E. excepts som few squolls that come over accompenyed with heavy rains, at 8 A.M. got Sight Long 59=30 thus ends theas 24 h our course is W by N. <FloatingCoordinates>Lat 23=44</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-06"><Styled.Hanging />Thursday Nov 6th/51</time><br />
          theas 24 hours we have pleasant trade winds from E.N.E. while we are stearing W by compass. At 8 A. got sight Long 51=13 at 10 A.M. saw a school of porpoces, the woch on deck are imployed in repairing the riging so ends theas 24 h <FloatingCoordinates>Lat 23=32</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-07"><Styled.Hanging />Friday Novr  7th 51</time><br />
          throught theas 24h we have moderate traids from the E with fine weather. Stearing W by N at 8 A.M. got sight Long 53=24 William Willson denyed duty by refusing to go aloft on a lookout after being repetedly ordered so to doo by the chief officer. thus ends theas 24h <FloatingCoordinates>Lat 23=44</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-08"><Styled.Hanging />Saturday Novr The 8th/51</time><br />
          theas 24h commence, continue, and end with moderate traids [trade winds] from E.N.E to E.S.E. fine weather at ½ past 7 A.M. got sight Long 55=23. the woch on deck imployed in ships duty repairing riging &amp;c. so ends theas 24h <FloatingCoordinates>Lat 23=31</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-09"><Styled.Hanging />Sunday Novr the 9th/51</time><br />
          theas 24 hours we have varyable winds all round the compass good fair weather excepts two or three verry heavy shoars [showers] from 5 to 7 A.M. we saved one or two cask of fresh watter that we caught in the quorter boats. At ½ past 7 A.M.  got sight Long 56=09 saw a grampos, so ends theas 24h <FloatingCoordinates>Lat 23=54</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={64} />
        <p><time dateTime="1851-11-10"><Styled.Hanging />Monday November the 10th AD 1851</time><br />
          theas 24 h commence with verry light aire on traids from E with fine cleare weather at 3 PM we have it about calme and contined the same untill midnight at which time a light breese sprung up from N.W. at 1 A.M. the wind canted to the N.N.E with a squoll of wind and rain took in the topgalliant sails flying gib and hauled up the main course, at 4 A.M. rather more moderate, under all sail excepts the fore top galliant sail which was furled, the wind had at this time had settled down to the N.E. and a fine brees our coarse at this time is NW by W at 8 A.M. got sight Long 57=54 saw three sail of vessels headed to the S latter part Strong breeses we set the for top galliant Sail and fore topmast stud[d]ing sail so ends theas 24 h <FloatingCoordinates>Lat 24=24</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-11"><Styled.Hanging />Tuesday Novr the 11th/51</time><br />
          theas 24 h we have fresh traids from the N.E. to E.N.E weather rather squolly our coarse is N.W. by W under all sail carrying the fore topmast Stunersail[?] at 8 AM got sight Long 61=11 thus ends theas 24 hours <FloatingCoordinates>Lat 26=02</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-12"><Styled.Hanging />Wensday Novr the 12th/51</time><br />
          theas 24 h fresh traids from N.E. to E.N.E at 8 A.M. got Sight Long 64=27 thus ends theas 24h our coarse is N.W by W <FloatingCoordinates>Lat 27=40</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-13"><Styled.Hanging />Thursday Novr the 13th/51</time><br />
          the first part of theas 24 h Strong breeses from N.E.  at 2 P.M. hauled up one point more from NW to NW by N with Stro[ng] brees breeses and squolly weather at ½ past 7 gales increasd took in the topgalliant sails and flying gib and at [unclear] past 8 P.M. single reafed the topsails [unclear] strong gales throught night 6 AM more moderate set all sail at ½ past 7 got sight Long 67=04 latter part gentle breeses E.N.E fine weather. <FloatingCoordinates>Lat 29=44</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={65} />
        <p><time dateTime="1851-11-14"><Styled.Hanging />Friday November the 14th AD 1851</time><br />
          the first part of theas 24 h. light verry light airs from the East at 1 P.M. canted to the N we headed to the Weastward with our Starbourd tacks aboard the brees was verry light the middle and latter part lay becalmed hav fine cleare weather heavy swell heaving from three or four diferant ways. at 8 A.M. got sight Long 67=54 the woch on deck imployed in ships duty setting up riging, scrapeing and painting. thus ends theas 24 h <FloatingCoordinates>Lat 29=58</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-15"><Styled.Hanging />Saturday November the 15/51</time><br />
          the first part of theas 24 h lay becalmd not so much as Stearige way one full riged Brig in sight to the S.E head nortwad. 4 P.M. light air from S.E. the middle part on at midnight pleasant breeses from S.S.E. our course N.N.W. at 8 A.M. got sight Long 68=27 latter part Strong breeses from S.S.W so ends theas 24 h <FloatingCoordinates>Lat 31=10</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-16"><Styled.Hanging />Sunday Novr the 16th / 51</time><br />
          theas 24 h commence with fresh gales from S.S.W. with fine weather. our cours NW by N towards night the wind canted in to the weastward and freshend at ½ past 9 P.M. took fore topmost Studing sail fore topgalliant sail and flying gib at 3 A.M. our course NW by N cloast hawl more moderate we set the fore top galliant sail and flying gib at 4 A.M. thick and squolly at ½ past 5 furled the topgalliant sails and flying gib at ½ past 8 got sight Long 70=12 later part light airs W.W.W. so ends theas 24 hours. 2 sail in sight one headed E and the other S <FloatingCoordinates>Lat 33=19</FloatingCoordinates>
        </p>

        <PageNumber num={66} />
        <p><time dateTime="1851-11-17"><Styled.Hanging />Monday November the 17th 1851</time><br />
          the first part of theas 24 h we have light baffling breeses from W.N.W to NW our cours is by the wind with our larbourd tacks aboard making about E by N course. middle part about calme. at 8 A.M. got sight Long 70=42 latter part light baffling breeses from N our course by the wind heading WN.W. saw two sail headed S.S.E. so ends theas 24 h <FloatingCoordinates>Lat 34=29</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-18"><Styled.Hanging />Tuesday Nov'r 18/51</time><br />
          theas 24 h begin with moderate and baffling breeses from the North. good weather, but cloudy one brig in sight to windward head to the N.E. at 3 PM she tacked to the Weastward of our quorter at midnight the wind and weather much the same as at the first at 8 A.M. got sight long 72=51 saw two square rigers to windward runing down across our stern. knowing that our Crenometer [chronometer] was out of the way and as we had had no chance since leaving St Mickheals to know how much she was out of the way, we tacked ship lowered the larbourd boat and spok[e] him she was from NY bound to Mobiel her long was about 73=30 so ends theas 24 hours <FloatingCoordinates>Lat 34=32</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-19"><Styled.Hanging />Wensday Nov'r 19/51</time><br />
          the first part of theas 24 h moderate baffling breeses from N to N.N.E heading by the wind to the N.W. at 5 P.M. lowered our boat and tryed the current and found that we have on [unclear] and a half nots current setting to the S.W. about this time a light air sprung up from E.N.E. at midnight bafling breeses from N.N.E to S verry squolly, we suppos ourselves to be in the southern Edeg [edge] of the Gulph Stream, latter part moderate breeses NNE and verry squolly, much the same as yousally found in the Gulph Stream so ends theas 24 h <FloatingCoordinates>Lat 35=47<br />by dead reckoning Long 73=50</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={67} />
        <p><time dateTime="1851-11-20"><Styled.Hanging />Thursday November the 20th 1851</time><br />
          at  the commencement of theas 24 h took a heavy squoll from N.E. and shortened sail as fast as posable one sail in sight ahead a topsail schooner with a top galliant sail we wer by the wind with starbord tacks abourd the gale got stidy [steady] blowing from N.E by N under double reafed topsails, reaf foresail, mainsail, and storme trysail at 5 P.M. rather more moderate got sight Long 73=45 at 8 A.M. the schooner made sail came up and spok us the Elizabeth of baltymore from Sareleone [Sierra Leone] on the Coast of Afryca [Africa] 5 weeks and 3 days out bound to N.Y. at midnight fresh breeses N.E. good weather flying gib furled at 8 A.M. got Sight Long 74=51 latter part fresh gales N.E heading N.N.W. saw two sail so ends theas 24 h <FloatingCoordinates>Lat 37=11</FloatingCoordinates>
        </p>
        <p><time dateTime="1851-11-21"><Styled.Hanging />Friday Nov the 21st 51</time><br />
          theas 24 hours begin with fresh gales with Stormey, ruged, weather from N.N.E at 5 P.M. spoke the James Wallwil of N.Y. [unclear] for N.Y. at Midnight under single reafed topsails, Courseses. trysail gib and Staysail with fresh gales frome the E heading N.N.E rainy, ruged weather through the night at 8 A.M. fresh gales from the S Stearing N.N.E the weather thick and stormey could get no sight the weather cleared up just in time to git an observation, while we have fresh gales from W thus ends theas 24 h <FloatingCoordinates>Lat 39=04</FloatingCoordinates>
          <br /><br />
        </p>

        <PageNumber num={68} />
        <p><time dateTime="1851-11-22"><Styled.Hanging />Saturday November the 22d AD 1851</time><br />
          theas 24 h commence with heavy gales from W Stearing N by E at 2 P.M. the wind canted to the N.W. by W blowing heavy stearing NE by N untill 2 A.M. at which time we sighted Fire Island light baring N.W. about 6 or 8 miles distant. we then Steared E by N. at 8 A.M sighted montock [Montauk] and at 25 minuts to 10 A.M. Montock light House bore N.W. and at 12 OClock Block Island bore W 10 miles dis't Stearing E.N.E. 5 or 6 sail in Sigt [sight] moast part bound through the Vinyard so ends theas 24 h with fresh gales from the W
        </p>
        <p><time dateTime="1851-11-23"><Styled.Hanging />Sunday Nov'r the 23rd/51</time><br />
          theas 24 h commence with heavy gales from the W while we wer Stearing for the Vinyard Sound about 6 P.M. the weather looking wilde and windy to the N our Capt concluded to anchor in Holmses Hole untill towards daylight in the morning. but in runing in onto anchoring ground we accydentily run afoul of A Brig laying to anchor. Carrying away her gibboome &amp; and carrying away our gibboome, and Stove our Waist Boat &amp;c (the other Brig had up no light at the time) at 9 A.M. got under way with a fine breese from W by N and continued the same to the close of theas 24h and thus theay end
        </p>
        <p><time dateTime="1851-11-24"><Styled.Hanging />Monday Nov the 24th/51</time><br />
          at the commencement of theas 24 h pleasant gales from W with fine weather steering NE making the best of our way over the Shoulds of Nantucket which we soon accomplished and at 8 P.M. pased the high land light [Highland Light]. the wind was light through the night and baffling frome W to N.W. at at 4 A.M. pased rais point light [Race Point Light]. we than shortened Sail and lay by heading into the bay untill day light we than made sail an at ½ past 9 anchored in Provincetown Harbour thus ends thease 24 h in [entry continues in margin]<br />order to commence a Harbour Loge [end entry]<br /><br />
        </p>

        <PageNumber num={69} />
        <p><time dateTime="1851-11-24"><Styled.Hanging />Monday November 24th 1851 </time><span style={{ paddingLeft: '10%' }} />Civel a/c<br />
          the latter part of theas 24h lay at anchor in Provincetown Harbour with moderate gales from W so ends theas 24 h
        </p>
        <p><time dateTime="1851-11-25"><Styled.Hanging />Tuesday Nov 25th 51</time><br />
          theas 24 h lay at anchor in Provincetown Harbour with moderate gales from the W.N.W fair weather
        </p>
        <p><time dateTime="1851-11-26"><Styled.Hanging />Wensday Nov the 26th/51</time><br />
          theas 24 houres have gentle breeses from W.N.W to N.N.E. laying at anchor in Provincetown Harbour Stormey looking weather so ends theas 24 h
        </p>
        <p><time dateTime="1851-11-27"><Styled.Hanging />Thursday Nov the 27th</time><br />
          pleasant gales from the N with fine weather still at anchor &amp;c
        </p>
        <p><time dateTime="1851-11-28"><Styled.Hanging />Friday Nov'r the 28</time><br />
          laying at anchor in Provincetown harbour with fresh breeses from S.W untill to wards the latter part at which time we had fresh breeses from the N so ends theas 24 h
        </p>
        <p><time dateTime="1851-11-29"><Styled.Hanging />Saturday Nov the 29th 51</time><br />
          theas 24 h fresh breeses from N.E. laying at as before mentioned so ends theas 24 h
        </p>
        <p><time dateTime="1851-11-30"><Styled.Hanging />Sunday Nov the 30th/51</time><br />
          theas 24 h lay at anchor in Provincetown Harbour fresh gales from the N so ends theas 24 h
        </p>
        <p><time dateTime="1851-12-01"><Styled.Hanging />Monday Dec'r the 1th/51</time><br />
          all of theas 24 h very heavy gales from the N.W. at 3 Oclock in the morning our Brig struck adrift and continue to [cage] untill about 9 Oclock A.M. when we brought her up with three anchors a  head, the wind was taking the whole top of[f] the water the moast part of the day, we cloast [close] reafed the fore and main topsails in case we should part our chains or Should be obliged to slip them thus ends theas 24 h<br /><br />
        </p>

        <PageNumber num={70} />
        <p><time dateTime="1851-12-02"><Styled.Hanging />Tuesday December the 2st AD 1851</time><span style={{ paddingLeft: '30%' }} />Civel a/c<br />
          theas 24 h more moderat but the was still N.W. at 4 A.M.  cauled all hands got our anchors and beet up into the Harbour and came to anchor at 10 A.M. the latter part of theas 24 h we have the wind blowing a gentle gale from the N the weather look stormy thus ends theas 24 h
        </p>
        <p><time dateTime="1851-12-03"><Styled.Hanging />Wensday Dec'r the 3rd/51</time><br />
          all of theas 24 h moderat gales from the N thretening a Snow storme, while we are still at anchor in Provincetown harbour so ends theas 24 h
        </p>
        <p><time dateTime="1851-12-04"><Styled.Hanging />Thursday Dec the 4th/51</time><br />
          the wind still continues to blow from the North some times canting to the N.E. and threatening a snowstorme so ends theas 24 h
        </p>
        <p><Styled.Hanging />Saturday Dec.
        </p>
        <p><time dateTime="1851-12-05"><Styled.Hanging />Friday Dec'r the 5th/51</time><br />
          all of theas 24h we lay at anchor in Provincetown Harbour with gales from the N with thick weather, with all the appearences of a snowstorme so ends theas 24 h
        </p>
        <p><time dateTime="1851-12-06"><Styled.Hanging />Saturday Dec'r the 6th/51</time><br />
          the wind still continues to blow from the N and N.N.E. and looks stormey as it has for some time past thus ends this days journel
        </p>
        <p><time dateTime="1851-12-07"><Styled.Hanging />Sunday Dec'r the 7th/51</time><br />
          the first part of theas 24 h lay at anchor in Provincetown Harbour, with not much of anny wind, it was about calme, the weath[er] was thick and threatening a storme at 8 A.M. a moderate brees sprung up from the S.W. we wayed Anchor and at the close of theas 24 h (civel account) wer of[f] the [entry continues in margin]<br />wood End bar [Wood End Bar] on the back of Long point with moderat breeses from SW and allso a moderate Snow Storme so ends &amp;c [end entry]<br /><br />
        </p>

        <PageNumber num={71} />
        <p><time dateTime="1851-12-08"><Styled.Hanging />Monday December the 8th AD 1851</time><span style={{ paddingLeft: '30%' }} />Nautical a/c<br />
          at the commencement of theas 24h we have moderate gales from the S.W. and quite a Snowstorme, while we are passing the wood End barr [Wood End Bar] on the back of Long point Stearing N.W. by W. making the beat of our way to Beverly at 4 P.M. it cleared up a little and we sighted the high land of moneynymeit[?] [Manomet, MA] also the gurnet [Gurnet Lighthouse] it soon Set in thick with snow again, the wind canted more to the S.E. and breesed some what. at 7 P.M. it held up Snowing and we sighted Situate lite [Scituate] and soon after saw Boston lite and the lite Boat on mynots ledge of [ink blot] on Cohesest Rocks [Cohasset Rocks] where we lay becalmed the moast part of the night with snow, hale and rain at 4 A.M. light breeses from the N.W. with rain and hale, stearing by the wind heading North, Easterly for Beverly at 8 A. M. Caught sight of half way rock [Halfway Rock] baring N 3 or 4 miles distant with moderate breeses from S.W. and thick weather, while pasing Marble Head light House, we wer boarded by a Pilot that took us in to Beverly Harbour and at 11 O Clock wer made fast to the Wharf in Beverly thus ends theas 24 hours, according to Sea a/c also my journal of this Voige<br />
          <br />
          [bottom third of page torn out]<br /><br />
        </p>

        <PageNumber num={72} />
        <p><time dateTime="1852-02-17">Tuesday Febuary 17th 1852</time><br />
          these 24 hours commences with Light winds from W N W and clear weather at 3 PM got under Weigh at 3-30 the pilot left us at 4 we pased Bakers island at 10 Cape Cod Light bore West Dist 3 miles from which I take my Departure at 12 oclock A.M. we ware in Lat 40d-53 So Ends this 24 hours<br />
          [bottom third of page torn out]<br /><br />
        </p>
        <PageNumber num={73} />
        <p><time dateTime="1852-02-17">Tuesday Febuary 17th 1852</time><br />
          all these 24 hours Light winds from NNW and fine weather crew all on Board<br />
          at 3 PM Got under way<br />
          3-30 Pilot Left us<br />
          At 4 Pased Bakers Island<br />
          At 10 Cape Cod Light Bore West Dist 7 Miles from which point Dept is taken <FloatingCoordinates>Lat 40&deg;53 Dr&nbsp;&nbsp;&nbsp;No obs</FloatingCoordinates><br />
        </p>
        <p><time dateTime="1852-02-18">Wedenesday Febuary 18th 1852</time><br />
          Comences with fine breses from NNW and cloudy weather midle part fresh breses and fine weather Latter part much the same <FloatingCoordinates>Lat by Dr 38=53&nbsp;&nbsp;&nbsp;no obs</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-02-19">Thursday Feburary the 19th 1852</time><br />
          comences with fine weathe and fresh breeses from the WSW -- midle part fresh breses from the NNW and cloudy -- Latter part blows heavy with raine wind NE So ends thes 24 hours <FloatingCoordinates>Lat by Dr 27=06&nbsp;&nbsp;&nbsp;No obs</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-02-20">Fryday Feburary the 20th 1852</time><br />
          comences with cloudy weathe and sume wind NE<br />
          middle part much the same Latter part fresh breses from NE <FloatingCoordinates>Lat 35=08</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-02-21">Saterday February the 21st 1852</time><br />
          first part of thes 24 hours pleasant breses from the North. Latter part more moderate wind NNE <FloatingCoordinates>Lat 32=41&nbsp;&nbsp;&nbsp;Long 62=22</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={74} />
        <p><time dateTime="1852-02-22">Sunday th 22d February 1852</time><br />
          comences with clear weathe and Light winds from the NE Latter part changible winds from th south <FloatingCoordinates>Lat 32-15 No obs</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-02-23">Monday th 23rd 1852</time><br />
          comences with cloudy weathe &amp; gales of wind at 4 oclock PM shiped a sea and Lost the waist boat Latter part gales of wind from SW <FloatingCoordinates>Lat 31-18 Long 61-45</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-02-24">Tuesday the 24th 1852</time><br />
          commences with Gales of wind from the SW Latter part more moderate with no observation <FloatingCoordinates>Lat by DR 30=09</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-02-25">Wedensday February the 25th 1852</time><br />
          comences with moderate weather wind from southwest Latter part much the same but frequent of rain and threatening clouds so ends thes 24 hours <FloatingCoordinates>Lat 29-22 Long 61-25</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-02-26">Thursday February the 26th 1852</time><br />
          comences with fine weather wind from the southwest Latter part v[e]ry moderate So ends thes 24 hours <FloatingCoordinates>Lat 28-40</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-02-27">Fryday February the 27th 1852</time><br />
          comences with moderate weathe and rainy and changeble So ends thes 24 hours <FloatingCoordinates>Lat 28-25 Dr</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-02-28">Satterday February the 28 1852</time><br />
          comences with fine weather winds NE Latter part fresh breses from NE So ends thes 24 hours <FloatingCoordinates>Lat 26=20</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={75} />
        <p><time dateTime="1852-02-29">Sunday February the 29th 1852</time><br />
          commences with Light winds from the NE Latter part fresh breses ENE and cloudy So Ends this 24 hours <FloatingCoordinates>Lat 24=48</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-03-01">Monday February the 30th or<br />
          March Monday the 1st 1852</time><br />
          first part of these 24 hours moderate Latter part fresh breses from the ENE <FloatingCoordinates>Long 63-09 Lat 20-58</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-03-02">March Tuesday the 2'd 1852</time><br />
          all this 24 hours fresh breses from  the NE and clear weather all hands imployed in ships duty So ends this 24 hours <FloatingCoordinates>Long 62-20 Lat 19-25</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-03-03">March Wedensday the 3'd 1852</time><br />
          commences with fresh breses from the NE Latter part blows heavy from NE <FloatingCoordinates>Lat 19-19 Long 66=00</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-03-04">Thursday March th 4th 1852</time><br />
          all these 24 hours fresh gales from the NE at 4 oclock PM made Portoreco [Puerto Rico] bearing SW at 10 oclock P.M. made Mond island [Isla de Mona] [unclear] runing westerly for San Domingo So ends this 24 hours [t]his day got an observation and found chart cord True Longitude
        </p>
        <p><time dateTime="1852-03-05">Friday March the 5th 1852</time><br />
          al this 24 hours fresh gales from the SE cruising in Sam Bay for whale all hands well on board so ends the 24 hours
        </p>
        <p><time dateTime="1852-03-06">Saterday March the 6th 1852</time><br />
          all thiss 24 hours fresh gales from the south west all hands imployed in Ships Duty so ends this 24 hours<br /><br />
        </p>

        <PageNumber num={76} />
        <p><time dateTime="1852-03-07">Sunday March the 7th 1852</time><br />
          all this 24 hours fresh gales from the SE lying at anchor in Sam bay So ends this 24 hours
        </p>
        <p><time dateTime="1852-03-08">Monday March the 8th 1852</time><br />
          all this 24 hours fresh gales from the SE lying at anchor in Sam bay so ends
        </p>
        <p><time dateTime="1852-03-09">Tuesday March the 9th 1852</time><br />
          all this 24 hours fresh gales from the SE lying at anchor in Sam bay
        </p>
        <p><time dateTime="1852-03-10">Wedensday March 10th 1852</time><br />
          all the last 24 hours imployed in cruising for whale in Sam bay
        </p>
        <p><time dateTime="1852-03-11">Thursday March the 11th 1852</time><br />
          all this 24 hours imployed in Ships Duty moderate weather waves from the South east So ends
        </p>
        <p><time dateTime="1852-03-12">Fryday March the 12th 1852</time><br />
          all hands imployed in Ships Duty crussing for whale in Sam bay
        </p>
        <p><time dateTime="1852-03-13">Saterday March the 13th 1852</time><br />
          commences with blustery weather winds from the South east and rainy
        </p>
        <p><time dateTime="1852-03-14">Sunday March the 14th 1852</time><br />
          commences with wind and rain squals from the South east so ends thiss 24 hour
        </p>
        <p><time dateTime="1852-03-15">Monday March the 15th 1852</time><br />
          all this 24 hours cloud moderate winds SE all imployed in ships duty
        </p>
        <p><time dateTime="1852-03-16">Tuesday March 16th 1852</time><br />
          all this 24 hours blows heavy from the South west all hands employed in ships duty
        </p>
        <p><time dateTime="1852-03-17">Wedensday March th 17 1852</time><br />
          All this 24 hours calm lying in Sam bay<br /><br />
        </p>

        <PageNumber num={77} />
        <p><time dateTime="1852-03-18">Thursday March the 18th 1852</time><br />
          all this 24 hours moderate nothing [unclear] transacted on board  deck hands imployed in Ships Duty
        </p>
        <p><time dateTime="1852-03-19">Fryday March the 19th 1852</time><br />
          all this 24 hours moderate lying in Sam bay five men very sick
        </p>
        <p><time dateTime="1852-03-20">Saterday March the 20th 1852</time><br />
          all this 24 hours cruising in Sam bay for whale five men of[f] Duty
        </p>
        <p><time dateTime="1852-03-21">Sunday March the 21't 1852</time><br />
          all this 24 hours Lying at anchor in Sam bay in company with Sch Union and Sch [unclear] Williams both of Provincetown
        </p>
        <p><time dateTime="1852-03-22">Monday March the 22'd 1852</time><br />
          all this 24 hours engaged in seting up Riging them that is sick is off duty
        </p>
        <p><time dateTime="1852-03-23">Tuesday March the 23'd</time><br />
          all this 24 hours blows heavy from the South East lying in sam bay imployed in ships in ships [sic] Duty so ends this 24 hours
        </p>
        <p><time dateTime="1852-03-24">Wedensday March the 24th '52</time><br />
          all this 24 hours cruising for whale in Sam bay moderate weather all the foremast hands sick Except two so ends this 24 hours
        </p>
        <p><time dateTime="1852-03-25">Thursday March the 25th '52</time><br />
          all this 24 hours cruising for whale nothing special past this 24 hours
        </p>
        <p><time dateTime="1852-03-26">Friday March the 26 '52</time><br />
          all this 24 hours fresh gales from the S E cruising for whale
        </p>
        <p><time dateTime="1852-03-27">Saterday March the 27 '52</time><br />
          all this 24 hours imployed in crusing for whale<br /><br />
        </p>

        <PageNumber num={78} />
        <p><time dateTime="1852-03-28">Saterday March the 28 '52</time><br />
          all this 24 hours fresh gales from the SW all hands imployed in ships duty
        </p>
        <p><time dateTime="1852-03-28">Sunday March the 28th '52</time><br />
          all thes 24 hours imployed in ships duty all hands well on board so ends this 24 hours
        </p>
        <p><time dateTime="1852-03-29">Munday March the 29th '52</time><br />
          all this 24 hours lying to anchor in Sam bay so ends this 24 hours
        </p>
        <p><time dateTime="1852-03-30">Tuesday March the 30th '52</time><br />
          all this 24 hours pleasant gales from the SE cruising for [w]hale in sam bay
        </p>
        <p><time dateTime="1852-03-31">Wedensday March the 31st '52</time><br />
          first part of these 24 hours blows heavy from the south runing down the south side of Jamaco [Jamaica] so ends this 24 hours
        </p>
        <p><time dateTime="1852-04-01">Thursday April the 1st '52</time><br />
          first part of these 24 hours fresh gales from the south east runing down the south side of Jamaco
        </p>
        <p><time dateTime="1852-04-02">Friday April the 2'd '52</time><br />
          first part of these 24 hours is calm latter part much the same lying of[f] North Negerl [Negril] Jamaco so ends thes 24 hours
        </p>
        <p><time dateTime="1852-04-03">Saterday April the 3'd '52</time><br />
          these 24 hours commenced moderate latter part much the same lying of [off] the west end of Jamaco so ends this 24 hours
        </p>
        <p><time dateTime="1852-04-04">Sunday April 4th '52</time><br />
          first part of the twenty four hours very moderate latter part the same lying of[f] the west end of Jamaco so ends this 24 hours
        </p>
        <p><time dateTime="1852-04-05">Munday April the 5th '52</time><br />
          first part of these 24 hours calm latter the same<br /><br />
        </p>

        <PageNumber num={79} />
        <p><time dateTime="1852-04-06">Tuesday April the 6th /52</time><br />
          all this 24 hours lying at anchor in North Negreal [Negril, Jamaica] recruting two men run away
        </p>
        <p><time dateTime="1852-04-07">Wednesday April 7th /52</time><br />
          at 10 oclock PM got under way and stowed our anchors so ends this 24 hours
        </p>
        <p><time dateTime="1852-04-08">Thursday April the 8th 52</time><br />
          all this 24 hours moderate stearing NNW bound to the bay of Mexico
        </p>
        <p><time dateTime="1852-04-09">Friday April the 9th /52</time><br />
          at 11 pm oclock maide the grand caymans bearing SE Dist 5 miles stearing NW by W so ends this 24 hours
        </p>
        <p><time dateTime="1852-04-10">Saterday April the 10th /52</time><br />
          first part of these 24 hours fresh gales from the SE at 11 oclock AM Cape antonio bore N by W Dist 10 miles so ends this 24 hours
        </p>
        <p><time dateTime="1852-04-11">Sunday April the 11th /52</time><br />
          all this 24 hours blows heavy from the SE lying under reeft topsails
        </p>
        <p><time dateTime="1852-04-12">Monday April the 12th /52</time><br />
          all thise 24 hours moderate weather cruising for whal in the <FloatingCoordinates>lattitude of 25 Long 87</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-13">Tuesday April the 13th /52</time><br />
          all these 24 hours cruising for whale in the <FloatingCoordinates>Lat of about 25N  Long 87-04W</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-14">Wedensday April the 14th /52</time><br />
          first Part of these 24 hours moderate later part much the same cruising near the <FloatingCoordinates>Lat of 25=50 N Long 87=00</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={80} />
        <p><time dateTime="1852-04-15">Thursday April the 15th /52</time><br />
          all these 24 hours moderate winds from the NE all hands employed in ships Duty <FloatingCoordinates>Lat 24= 08  Lon[g] 87  40</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-16">Friday April the 16th /52</time><br />
          first Part of these 24 hours Cloudy with wind and rainy at 2 oclock AM saw A large sperm whale Loured [lowered] away all the Boats the waist boat fastened to her But by the means of braking the irons wee lost the whale <FloatingCoordinates>Lat 24=40 Long 87=20</FloatingCoordinates>
          <br />
          [noted in margin] Whale
        </p>
        <p><time dateTime="1852-04-17">Saterday April the 17th /52</time><br />
          First part of these 24 hours modrate breses From the North west latter part the Same all hands well and imployed in Ship Duty <FloatingCoordinates>Lat 24=25 Lat 87=45</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-18">Sunday April the 18th /52</time><br />
          all these 24 hours blows heavy from the NW the Brig lying under reeft topsails <FloatingCoordinates>Lat 24=8, 87=54</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-19">Monday April the 19th 1852</time><br />
          first part of these 24 hours fresh gales from the NW Latter part more moderat all hands well on board <FloatingCoordinates>Lat 24=00 Long 87 30</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-20">Tuesday April the 20th /52</time><br />
          first part of these 24 hours blows heavy from the North west latter part the same <FloatingCoordinates>Lat [unclear] Long m 24=35, 87 50</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-21">Wedensday April the 21st /52</time><br />
          all these 24 hours is a gale of wind from The North west lying under double reeft Topsails <FloatingCoordinates>Lat 23=52 Long 87 25</FloatingCoordinates>
        </p>
        <p>[noted in bottom margin] Vernon L o c k e Book [end note]<br /><br />
        </p>

        <PageNumber num={81} />
        <p>[Top of page is cut out; entry for April 22 is missing]
        </p>
        <p><time dateTime="1852-04-23">Friday April the 23rd /52</time><br />
          all these 24 hours fresh gales from the south very heavy sea runing <FloatingCoordinates>Lat 24=00, Long 88=00</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-24">Saterday April the 24th /52</time><br />
          all these 24 hours fresh gales from The westward and clear weather <FloatingCoordinates>Lat 26=20 Long 88=20</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-25">Sunday April the 25th /52</time><br />
          first part of these 24 hours fresh gales from The South. Cloudy and raining Latter part blows heavy from the SE So Ends this 24 hours <FloatingCoordinates>Lat 27&deg; 25 Long 87&deg; 48</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-26">Monday April the 26th /52</time><br />
          all these 24 hours blows heavy from the SE the most part of the time lying two under Double reeft topsails <FloatingCoordinates>Lat 27&deg; 20 Long 87&deg; 50</FloatingCoordinates><br />
          [noted in margin] At 8 oclock PM spoke the Brig Franklin of Provincetown [end note]
        </p>
        <p><time dateTime="1852-04-27">Tuesday April the 27th /52</time><br />
          first part of these 24 hours blows heavy from the North West under close reeft topsails Latter part the same <FloatingCoordinates>Lat 27&deg; 00 &nbsp;&nbsp;&nbsp;87 40</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-28">Wedensday April the 28th /52</time><br />
          all these 24 hours fine weather all hands imployed in ships duty <FloatingCoordinates>Lat 27&deg; 46 Long 88=12</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-29">Thursday April the 29th /52</time><br />
          first part of these 24 hours moderate latter part much the same so ends this 24 hours <FloatingCoordinates>Lat 27&deg; 40&nbsp;&nbsp;&nbsp;88&deg; 47</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-04-30">Friday April the 30th /52</time><br />
          first part of these 24 hours pleasant weather middle part the same at 7 AM raised whales Lowered all&nbsp;<br /><br />

          <PageNumber num={82} />
          three boats and chased Larb'd and Waist Bots fastend Larb'd Boats Irons Then[?] Waist Boat kiled and wafed their whale. Larboad and Waist boats chased to Leward Waist boat struck and kiled another whale the Larboard Boat in company at the time and the vessel not in sight when the whale turned up. the Mate kept on in chase of the school. the Waist boat took their whale in tow got the run[?] of the vessel and got allongside the next Morning at sunrise secured the Whale and Made sail to the southward in chase of the Mate - Wind very light and most of the time a thick fog<br />
          These Remark includes 48 hours<br />
          No observation
        </p>
        <p><time dateTime="1852-05-03">Monday May the 3rd 1852</time><br />
          These 24 hours has light bafling winds and thick fogy weather throughout Cut in our whales and got the Works going Larboard boat still away from the vessel No obs'n
        </p>
        <p><time dateTime="1852-05-04">Tuesday May the 4th</time><br />
          These 24 hours has light winds and fine weather throughout Employed trying out at 10 AM raised whales at 11- lowered So Ends these 24 hours. No news of the Mate.
        </p>
        <p><time dateTime="1852-05-05">Wednesday May the 5th 1852</time><br />
          Comences with light winds and fine weather Boats in chase of whales the waste boat struck and killed a whale found that he would sink. set the wafe for the Starboard boat both boats held him up and got him allongside and segured him<br /><br />

          <PageNumber num={83} />
          <span style={{ fontSize: '125%', display: 'block', textAlign: 'left', marginBottom: 0 }}>Brig Gem of Beverly</span>
          at 12 Midnight finished trying the first whales Latter part of these 24 hours blowing a gale from the Eastward No tidings of the Mate - the Whale allongside the brig lys like a duck <FloatingCoordinates>No Observation</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-06">Thursday the 6th 1852</time><br />
          These 24 hours commences with strong breezes from the Eastward and heavy sea on got the body of the whale rounded in. droped the head astern strong breezes and heavy sea during the night at day light comenced trying found the head good for nothing cut it away Ends more Moderate <FloatingCoordinates>Lat 28-29 88-30</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-07">Friday the 7- 1852</time><br />
          These 24 hours commences with strong breezes and rough sea at sundown finished boiling Moderate through the night at daylight commenced stowing down<br />
          Ends fine <FloatingCoordinates>Lat 28-10 Long 87-54</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-08">Saturday the 8- 1852</time><br />
          These 24 hours has light winds and fine weather throughout (stowed down 40 bbls) Spoke the Barque Margereta of Sallem Cpt Prior <FloatingCoordinates>Lat by obs 29-30&nbsp;&nbsp;Long 88-10</FloatingCoordinates><br />No intelligence from the Mates boat
        </p>
        <p><time dateTime="1852-05-09">Sunday the 9- 1852</time><br />
          Commences with light winds and fine weather in company with the barque. Midle and Latter parts the same<br />
          <FloatingCoordinates>Lat 27-33 Long 88-18</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-10">Monday the 10 1852</time><br />
          Has light winds and fine weather heard from the Brig Ocean [unclear] <FloatingCoordinates>Lat 27-50 Long 88-21</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-11">Tuesday the 11th 1850 [sic]</time><br />
          Has light winds and fine weather through several sail in sight<br />
          <FloatingCoordinates>Lat 28-22 Long 88-16</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={84} />
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Brig Gem of Beverly C Coock Master</p>
        <p>
          <span style={{ marginLeft: '-74px' }}>May 1852 <time dateTime="1852-05-12">Wednesday the 12-</time></span>
          <br />
          These 24 hours has light winds and fine weather, stearing for the Belise to gain information of the Mate
          <FloatingCoordinates>Lat by obs 28-34  - Long by Chr 88-00</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-13">Thursday the 13-</time><br />
          These 24 has light airs and calms throughtout - at sunset boarded the Barque Abey Lawrence of and from Baltimore for New Oreans 10 days out - at 5 AM spoke the Ship Shirley of Boston from New Orleans for Liverpool Reports M Lock picked up on the 3rd and carried to New Orleans headed her to the Eastward on soundings the whole of this 24 hour
          <FloatingCoordinates>Lat by Obs 28-40 - Long by Chro 87-30</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-14">Friday the 14th</time><br />
          First part of these 24 hours light winds and fine weather 18 sail of vessels in sight most of them for Europe  Midle and Latter parts the same got off soundings about Midnight
          <FloatingCoordinates>Lat by Obs 28-40&nbsp;&nbsp;&nbsp;&nbsp;Long by Chrn 87-07</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-15">Saturday the 15</time><br />
          Is fine through't several sail in sight - <FloatingCoordinates>Lat by Obs 28-27 - Long by Chr 87 00</FloatingCoordinates>
        </p>
        <p><aside style={{ fontSize: '.9em', lineHeight: '1.3' }}>found a strong current to the NE</aside><time dateTime="1852-05-16">Sunday the 16th</time><br />
          Has light winds and fine weather throughtout several sail in sight<br />
          <FloatingCoordinates>Lat by Obs 28-10 -  Long by Chr 87-03</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-17">Monday the 17</time><br />
          Has light winds and fine weather throughout. spoke the British Barque John Walsh of and for London from New Orleans<br />
          <FloatingCoordinates>Lat by Obs  27-10 - Long by Chr 87-13</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-18">Tuesday the 18th</time><br />
          Has light airs and fine weather throughout - spoke schooner A Nickerson two months out clean Reports schooner Harriet Neal Rider 5 bbs sperm<br />
          <FloatingCoordinates>Lat by Obs 27-14  - Long  by Chr 88-35</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-19">Wednesday the 19th</time><br />
          Has light winds and fine Weather throughout all hands employed on ships duty
          <FloatingCoordinates>Lat 27  20 Long 88  50</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={85} />
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Brig Gem&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;C Cooke Master</p>
        <p>
          <aside></aside>
          <span style={{ marginLeft: '-74px' }}>May 1852 <time dateTime="1852-05-20">Thursday the 20th</time></span>
          <br />
          Has light airs and calms throughout
          <FloatingCoordinates>Lat by Obs 28-00 Long 88-55</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-21">Friday the 21st</time><br />
          Has light winds and fine weather throughout
          <FloatingCoordinates>Lat by Obs 27-01 Long 88-50</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-22">Saturday the 22nd</time><br />
          Has fine breezes and cloudy weather throughout
          <FloatingCoordinates>Lat by Obs 25-30&nbsp;&nbsp;&nbsp;Long 89-00</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-23">Sunday the 23rd</time><br />
          Has light winds and cloudy weather throug't
          <FloatingCoordinates>Lat by Obs 24-08&nbsp;&nbsp;&nbsp;Long 88-39</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-24">Monday the 24th</time><br />
          Has fine breezes and pleasent weather throug't
          <FloatingCoordinates>Lat by Obs 24-12&nbsp;&nbsp;&nbsp;Long by Chr 89-16</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-25">Tuesday the 25th</time><br />
          Has moderate breezes and fine weather throughout
          <FloatingCoordinates>Lat by Obs 25-23  - Long by Chr 88-24</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-26">Wednesday the 26th</time><br />
          Has fresh breezes and fine weather through't
          <FloatingCoordinates>Lat by Obs 26-25&nbsp;&nbsp;&nbsp;Long by Chr 87-32</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-27">Thursday the 27th</time><br />
          Has moderate breezes and fine through't several sail in sight
          <FloatingCoordinates>Lat by Obs 27-54&nbsp;&nbsp;&nbsp;Long by Chr 88-18</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-28">Friday the 28th</time><br />
          Comences with moderate breezes and fine Latter part cloudy Spoke brig Mexico 21 months out 200 bls sperm <FloatingCoordinates>No Observation</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-29">Saturday the 29th</time><br />
          Has strong breezes and heavy squals throughout unde[r]  close reefed main top sail through the night at 11 AM set the close reefed fore topsail
          <FloatingCoordinates>Lat by Obs 27 50</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-05-30">Sunday the 30th</time><br />
          Commences with squaly thick weather Latter part more moderate Brig Mexico in sight
          <FloatingCoordinates>No Observation</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={86} />
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Whaling Brig Gem of Beverly</p>
        <p>
          <aside>June 1852</aside>
          <time dateTime="1852-05-31">Mondy the 31st</time><br />
          These 24 has bafling winds and squaly weather throughout
          <FloatingCoordinates>No Obs</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-01">Tuesday the 1st</time><br />
          Has baffling winds and squaly weather throughout several sail in sight.
          <FloatingCoordinates>Lat by Obs 26-37 Long by Chr 87-23</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-02">Wednesday the 2nd</time><br />
          Has light breezes and squaly weather throughout
          <FloatingCoordinates>Lat by Obs 27-16 Long by Chr 86-23</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-03">Thursday the 3rd</time><br />
          first part squaly Latter part fine saw a large fin back
          <FloatingCoordinates>Lat by Obs 26-25 Long by Chr 85-11</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-04">Friday the 4th</time><br />
          Has light winds from the Southward and fine weather Spoke the Barque Nevada of and for Boston from Mobile his long at noon was 84-00 reports seeing a large sperm whale the day previous. 12 sail in sight. carrying sail out of the bay
          <FloatingCoordinates>Lat by Obs 26-30 Long by Chr 83-59</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-05">Saturday the 5th</time><br />
          Has light winds and fine weather at 2 PM lowered for blackfish got none
        </p>
        <p><time dateTime="1852-06-06">Sunday the 6th</time><br />
          Latter part squaly at 12 Noon Tortugas light house bore NE by N Dist by Estimation 15 Miles Several sail in sight
          <FloatingCoordinates>Lat by Obs  24-35</FloatingCoordinates><br />
          <br />
          [noted in margin] Sunday the 6 civil acct discovered (by the bearings of the tortugas lighhouse) that there was an error in the Chrono'r of 1 min 42 sec for which proper allowances will in future be made [end note]<br />
        </p>
        <p><time dateTime="1852-06-07">Monday the 7th</time><br />
          These 24 hours commences with Moderate  breezes from SSE and very fine weather
          Midle part fresh breezes and squaly weather At 9 AM spoke the ship Bennington of and for
          (Boston J Young Master) Mr. Lock being on board as passenger came on Board and resumed his duty as Mate
        </p>
        <p><time dateTime="1852-06-08">Tuesday the 8th</time><br />
          First part of these 24 hours pleasant weather latter part the same running down by Key West so ends this 24 hours<br /><br />
        </p>
        <PageNumber num={87} />
        <p style={{ marginBottom: -48 }}>[penned in top margin, different handwriting]<br />
          <span style={{ fontSize: '85%' }}>
            <span style={{ display: 'Block', textAlign: 'center' }}>Colman<br />Cooke</span>
            <span style={{ display: 'Block', textAlign: 'right' }}>Mary Ann<br />Whaling[?]<br />Whaling [end note]</span></span></p>
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Coleman Cooke Master</p>
        <p><time dateTime="1852-06-09">Wedensday the 9th /52</time><br />
          first part of these 24 hours fresh gales from the SW carrying out by [unclear] banks So Ends this 24 hours
          [penned in right margin] balanced [end note]
        </p>
        <p><time dateTime="1852-06-10">Thursday the 10th /52</time><br />
          All these 24 hours moderate
          <FloatingCoordinates>Lat 28=30&nbsp;&nbsp;&nbsp;78=77</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-11">Friday the 11th</time><br />
          first part of these 24 hours moderate winds S Est.  Latter part squally and wind changeable
          <FloatingCoordinates>Lat 29=29&nbsp;&nbsp;&nbsp;Long 76=00</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-12">Saterday the 12</time><br />
          first part of these 24 hours squally wind from the eastward at 4 oclock A M double reeft our fore and maine topsail Latter blows hevy from the East ward<span style={{ float: 'right' }}>So Ends</span>

        </p>
        <p><time dateTime="1852-06-13">Sunday the 13th /52</time><br />
          first part of these 24 hours blows heavy from the Eastward latter part about the same but more clear so ends these 24 hours
        </p>
        <p><time dateTime="1852-06-14">Monday the 14th /52</time><br />
          first part of these 24 hours blows a steady gale of wind from the Eastward middle part very rainy with freqent sqals Latter part the same
        </p>
        <p><time dateTime="1852-06-15">Tuesday the 15th</time><br />
          first part of these 24 hou[rs] blows heavy from the SW latter part more moderate
          <FloatingCoordinates>Lat 29=25  Long 75 69</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-16">Wedensday the 16</time><br />
          very moderate the whole 24 hours and cloudy
          <FloatingCoordinates>no observation</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={88} />
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Whaling Brig Gem of Bev</p>
        <p><time dateTime="1852-06-17">Thursday the 17</time><br />
          all the 24 hours moderate very cloudy <FloatingCoordinates>no obser</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-18">Friday the 18</time><br />
          first part of these 24 very moderate Latter part breses from the SW
          <FloatingCoordinates>Lat 30 50 Long 74 50</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-19">Saterday the 19th</time><br />
          first part of these 24 hours pleasant Breses from the South west latter part the same but wind freshengs
          <FloatingCoordinates>Lat 31=10  73=30</FloatingCoordinates><br />
          <br />
          [noted in margin] At 4 Am spoke the whaling sch Walter K of Provincton Clean [end note]
        </p>
        <p><time dateTime="1852-06-20">Sunday the 20</time><br />
          commences with rain squally weathr&nbsp;&nbsp;&nbsp;&nbsp;Latter the same
          <FloatingCoordinates>Lat 32=59   Long 70=5</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-21">Monday the 21st</time><br />
          commences with very squally weather midle part the same
          <FloatingCoordinates>no obs</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-22">Tuesday the 22d</time><br />
          commences with a gale wind from the eastward latter part blows heavy from the SE <FloatingCoordinates>Lat 33=00 Long 69 00</FloatingCoordinates><br />
          <br />
          [noted in margin]<br />
          Good fluke don't Deceive me<br />
          [pen and ink drawing of whale flukes being followed by a rowboat]<br />
          At 2 oclock AM saw a school of whale lowered our boats in chase but did not get anything on account of the whal being galied [end note]
        </p>
        <p><time dateTime="1852-06-23">Wedensday the 23d</time><br />
          first part of these 24 hours blows heavy from the SE running to the eastward for the purpose of making the western islands
          <FloatingCoordinates>no ob</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-24">Thursday the 24th</time><br />
          first part of these 24 Hours fres gales from the SE still making our course easterly latter part more moderate with the wind south
          <FloatingCoordinates>Lat 34=17 Long 59 = 19</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={89} />
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Coleman Cook Master</p>
        <p><time dateTime="1852-06-25">Friday the 25th</time><br />
          first part of these 24 hours Blows heavy from the SE making our course to the eastward for the purpose of making the Western islands latter the same
          <FloatingCoordinates>Lat 34=30 Long 59 02</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-26">Saturday the 26th</time><br />
          first part of these 24 hours has fresh gales from the SE cloudy with raine Latter part the same <FloatingCoordinates>Lat no observation</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-27">Sunday the 27th</time><br />
          first part of these 24 hours fresh breses from the SE Latter part mu[ch] the same
          <FloatingCoordinates>Lat 34-35&nbsp;&nbsp;)&nbsp;&nbsp;57=20</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-28">Monday the 28th</time><br />
          comences with fine weather wind from the SW Latter part the same
          <FloatingCoordinates>Lat 34=39&nbsp;(&nbsp;55&deg;-20</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-29">Tuesday the 29th</time><br />
          commences with fine weather winds south west Latter part the same
          <FloatingCoordinates>Lat 34=40 54 20</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-06-30">Wedensday the 30th of June</time><br />
          commences with fine weather Latter part the same
          <FloatingCoordinates>Lat 34=41 52 40</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-01">Thursday the 1st of July 1852</time><br />
          blows heavy from the SW
          <FloatingCoordinates>Lat 34 50&nbsp;(&nbsp;48&deg; 47</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-02">Friday the 2d</time><br />
          commences with fine weather moderat breases from the south west Latter part the same at 4 oclock AM saw a ship standing Southward
          <FloatingCoordinates>Lat 35=00 Long 47=50</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-03">Saturday the 3d</time><br />
          commences with fine weather Latter part Ends the same <FloatingCoordinates>Lat 35=11  Long 46=26</FloatingCoordinates><br />
          <br />
          <span style={{ float: 'right' }}>at [unclear] <FloatingCoordinates>Lat 35=38 Long  44=35</FloatingCoordinates></span><br />
          <br />
          [noted in margin] at 9 oclock PM saw sevral sperm whale but so squally and cloudy we could not see them again [end note]<br /><br />
        </p>

        <PageNumber num={90} />
        <p><time dateTime="1852-07-04">Sunday the 4th</time><br />
          commences with fine weather with the w from the North east Latter part the wind from SSE and fine clear weather <FloatingCoordinates>Lat 35=03&nbsp;&nbsp;Long 44 30</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-05">Monday the 5th</time><br />
          commences with fine weather wind to the south west latter part more cloudy but pleasant <FloatingCoordinates>Lat 35=33&nbsp;&nbsp;Long 43=03</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-06">Tuesday the 6th</time><br />
          comences with fine weather with the wind to the SW all hands well on board the latter part the the [sic] same <FloatingCoordinates>Lat 36=07 Long 42=20</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-07">Wedensday the 7th</time><br />
          commencs withe fine weathe at 3 oclock A.M. saw a barke standing &amp; bearing north east at non <FloatingCoordinates>Lat 36=5&nbsp;&nbsp;39=21</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-08">Thursday the 8th</time><br />
          commences with fine weather Latter part the same <FloatingCoordinates>Latt 38=05&nbsp;&nbsp;35=30</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-09">Friday the 9th</time><br />
          commences with fine weather and pleasant gales Latter part the same. All hands imployed in looking out for whale <FloatingCoordinates>Lat 38=32 Long 32=31</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-10">Saturday the 10th</time><br />
          commences with  fine weather with the wind to the Southwest Latter part the same <FloatingCoordinates>Lat 38=33&nbsp;&nbsp;Long 30=00</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-011">Sunday the 11th</time><br />
          commences with fine pleasant breases from the South East at two oclock AM rose Cape Pico [Ilha do Pico: Pico Island, Central Azores] bearing east from us Dist 12 miles Latter part lying off fiyal [Ilha do Faial: Faial Island, Central Azores - in English also spelled Fayal]
        </p>
        <p><time dateTime="1852-07-12">Monday the 12th</time><br />
          Commences cloudy with raine at 11 PM came to anchor in fayal harbor ends with fine weather
        </p>
        <p><time dateTime="1852-07-13">Tuesday the 13th</time><br />
          commences with fine weather Latter part the same Ends this 24 hours / Lying in fayal harbour so ends this 24 hours<br /><br />
        </p>

        <PageNumber num={91} />
        <p><time dateTime="1852-07-14">Wedensday the 14th</time><br />
          commences with fine weather with the wind from the South east ends the same all hands on shore on liberty
        </p>
        <p><time dateTime="1852-07-15">Thursday the 15th</time><br />
          commences with fine weathe with the wind from the south west Latter part the same
        </p>
        <p><time dateTime="1852-07-16">Friday the 16th</time><br />
          commences with fine weather and fresh gales from the South west at 2 oclock AM got under weigh for sea at 8 oclock PM Lost sight of Cape Pico whitch bore ENE from us r part continues fine
        </p>
        <p><time dateTime="1852-07-17">Saturday the 17th</time><br />
          commences with fine clear weather wind WSW Latter part the same <FloatingCoordinates>No Obs</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-18">Sunday the 18th</time><br />
          commences with fine clear weather with the wind from the south west at 1 oclock AM saw a school of whale bound to the south west <FloatingCoordinates>Lat 37=43  Long 3100 by DR  No Obs</FloatingCoordinates>
          Latter part moderate<br />
        </p>
        <p><time dateTime="1852-07-19">Monday the 19th</time><br />
          first part commences with fine weather wind from the Northe east Latter part moderate at 9 oclock AM saw a school of grampuses <FloatingCoordinates>Lat 37=40 31=00</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-07-20">Tuesday the 20th</time><br />
          commences with clowdy weather and blows heavey from the North West Latter part clowdy and rainy at 8 oclock AM saw a large number blackfish Lowered our boats but did not get any of them so end these 24 hours <FloatingCoordinates>Lat 37=10 31=09</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={92} />
        <p><time dateTime="1852-07-21">Wednesday the 21st</time><br />
          <aside>July</aside> commences with fine weather and wind to the North east this after noon saw several schools of grampusy middle part moderate fine weather Latter part fine with the wind from the North East <FloatingCoordinates>Lat 31=33 Long 37=30</FloatingCoordinates>
        </p>
        <p><aside>July</aside><time dateTime="1852-07-22">Thursday the 22d</time><br />
          commences with fine weather wind from the North east Latter part rainey and blowing heavy from the South west <FloatingCoordinates>Lat 37=20&nbsp;&nbsp;Long 33=30</FloatingCoordinates>
        </p>
        <p><aside>July</aside><time dateTime="1852-07-23">Friday the 23d</time><br />
          first part clowd all the first part of these 24 hours employed in mending sails middle part clowdy Latter part maderate all hands imployed in ships duty so ends this 24 hours <FloatingCoordinates>Lat 38=30&nbsp;&nbsp;Long 34=27</FloatingCoordinates>
        </p>
        <p><aside>July</aside><time dateTime="1852-07-24">Saturday the 24th</time><br />
          commences with fine weather wind from the westward Latter part the same but cloudy <FloatingCoordinates>Lt 39=20&nbsp;&nbsp;Long 33[?]= 55</FloatingCoordinates>
        </p>
        <p><aside>July</aside><time dateTime="1852-07-25">Sunday the 25th</time><br />
          commences with fine weather all hands imployed in ships duty Latter fine clear weather with the wind from North East so ends these 24 hours <FloatingCoordinates>Lat 39=30</FloatingCoordinates>
        </p>
        <p><aside>July</aside><time dateTime="1852-07-26">Monday the 26th</time><br />
          commences with fine weather and light winds from the North west <FloatingCoordinates>Lat 39=30 Long 33=30</FloatingCoordinates>
        </p>
        <p><aside>July</aside><time dateTime="1852-07-27">Tuesday the 27th</time><br />
          commences with fine weather but cloudy Latter part moderate <FloatingCoordinates>Lat 39 20 Long 31 25</FloatingCoordinates>
        </p>
        <p><aside>July</aside><time dateTime="1852-07-28">Wednesday the 28th</time><br />
          commences with stormy weather wind from the North west Middle part stormy wind cants  to the eastward Latter part rainy and blows heavy from the east south east <FloatingCoordinates>Lat 39=25 Long 33=27</FloatingCoordinates>
        </p>
        <p><aside>July</aside> Thursday commences next leaf<br /><br />
        </p>

        <PageNumber num={93} />
        <p><aside>July</aside><time dateTime="1852-07-29">Thursday July the 29th</time><br />
          commences with stormy weather and plenty of raine [unclear] Latter part stormy with the wind to the North east<br />
          [unclear]
        </p>
        <p><aside>July</aside><time dateTime="1852-07-30">Friday the 30th</time><br />
          commences with fine weather all ends the same <FloatingCoordinates>Lat 39&nbsp;&nbsp;40 Long 32=38</FloatingCoordinates>
        </p>
        <p><aside>July</aside><time dateTime="1852-07-31">Saturday the 30 first</time><br />
          commences with fine and moderate weather Latter part the same with raine <FloatingCoordinates>Lat 39=45&nbsp;&nbsp;Long 32=50</FloatingCoordinates>
        </p>
        <p><aside>August</aside><time dateTime="1852-08-01">Sunday the 1st</time><br />
          commences moderate and cloudy with the wind from the North east Latter part very moderate the brig standing to the west ward <FloatingCoordinates>Lat 39=35&nbsp;&nbsp;Long 32=59</FloatingCoordinates>
        </p>
        <p><aside>August</aside><time dateTime="1852-08-02">Monday the 2nd</time><br />
          commences with fine pleasant weather middle part and latter the same with the wind from the North East <FloatingCoordinates>Lat 38=14 Long 35=17</FloatingCoordinates>
        </p>
        <p><aside>August</aside><time dateTime="1852-08-03">Tuesday the 3d</time><br />
          first part of these 24 hours cloudy at 4 oclock AM Lowered our boats for black fish and got one Latter part moderate weather wind from the eastward
        </p>
        <p><aside>August</aside><time dateTime="1852-08-04">Wednesday the 4th</time><br />
          commences with fine weather wind from the North east Latter part fine and pleasant <FloatingCoordinates>Lat 37=33 Long 36=14</FloatingCoordinates>
        </p>
        <p><aside>August</aside><time dateTime="1852-08-05">Thursday the 5th</time><br />
          commences with fine weather and wind from the North East Latter part very pleasant <FloatingCoordinates>Lat 36=40 Long 38=33</FloatingCoordinates>
        </p>
        <p><aside>August</aside><time dateTime="1852-08-06">Friday the 6th</time><br />
          commences fine weather middle part and latter part very fine all hands imployed in ships duty  <FloatingCoordinates>Lat 36=[??] Long 38=49</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={94} />
        <p><time dateTime="1852-08-07">Saturday the 7th</time><br />
          <aside>August</aside>commences with fine clear weathe[r] wind from the west ward Latter part the same all hands well on board
          <FloatingCoordinates>Lat 35=51 Long 42=00</FloatingCoordinates>
        </p>
        <p><aside>August</aside><time dateTime="1852-08-08">Sunday the 8th</time><br />
          first part of these 24 hours moderate, middle part Light winds from the North and westward at 7 oclock AM Lowered the Larboard and waist boat fastned and killed one to each boat the Starboard boat Lowered and took charge of the whale while the Larboard and waist boat kept in chase of the whale So Ends these 24 hours
          <FloatingCoordinates>Lat 35=40 Long 42=25</FloatingCoordinates><br />
          <br />
          [several small drawings penned in margin]
        </p>
        <p><aside>August</aside><time dateTime="1852-08-09">Monday the 9th</time><br />
          commences with fine weather and the wind from the North East Latter part very fine weather all hands imployed in trying out oile <FloatingCoordinates>Lat 35=28 Long 42 40</FloatingCoordinates>

        </p>
        <p><aside>August</aside><time dateTime="1852-08-10">Tuesday the 10th</time><br />
          commences with fine weather Latter part the same At 8 oclock AM finished trying out oile <FloatingCoordinates>No obs this day</FloatingCoordinates>

        </p>
        <p><time dateTime="1852-08-11">Wednesday the 11th</time><br />
          commences with fine weathe[r] middle part cloudy at 11 oclock A.M. finished stowing the oile thirty barrels inall [sic]<FloatingCoordinates>Lat 35=30 Long 42=04</FloatingCoordinates>

        </p>
        <p><time dateTime="1852-08-12">Thursday the 12th</time><br />
          commences with fine weathe[r] and light winds from the North west Ends with fresh breses from the westward At 8 PM lowered for blackfish but did not get any Several sail in sight standing to the South Eastward  42=10<FloatingCoordinates>Lat 35=35 Long</FloatingCoordinates>
        </p>
        <p><aside>August</aside><time dateTime="1852-08-13">Friday the 13th</time><br />
          commences with fine weather  Latter part commences to breese from the southwest <FloatingCoordinates>Lat 35=40 Long 42=20</FloatingCoordinates>

        </p>
        <p><time dateTime="1852-08-14">Saturday the 14th</time><br />
          commences with ver[y] cloudy and blows heavy from the SW<br /><br />
        </p>

        <PageNumber num={95} /><p>[noted in upper right corner]<br />
          456788<br />
          1868<br />
          [end note]
        </p>
        <p><time dateTime="1852-08-15">Sunday the 15th</time><br />
          first part of these 24 hours fresh gales from the South west the brig is under Double reeft topsails <FloatingCoordinates>Lat 35 20 Long 42=35</FloatingCoordinates>
        </p>
        <p><aside>August</aside><time dateTime="1852-08-16">Monday the 16th</time><br />
          commences to moderate with the wind from the North west Latter part the sea runs very high and very moderate <FloatingCoordinates>Lat 35=25 Lg 42=40</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-08-17">Tuesday the 17th</time><br />
          first part of these 24 hours blows heavy from the NW middle part the same Latter cloudy <FloatingCoordinates>Lat 35=30 Long 42 20</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-08-18">Wednesday the 18th</time><br />
          first part of these 24 hours light winds form the North west but very squaly and changeable <FloatingCoordinates>no obs this day</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-08-19">Thursday the 19th</time><br />
          commences with squaly weather wind from the NE Lat'r part the same <FloatingCoordinates>No obs</FloatingCoordinates><br />
          <br />
          [noted in margin] thursday lowered for killers Larboard boat struck a very large one he sounded the line snarld capsised the boat but No danmage done [end note]
        </p>
        <p><time dateTime="1852-08-20">Friday the 20th</time><br />
          all all these 24 hours a gale of wind from the South East under close reeft topsailes
        </p>
        <p><time dateTime="1852-08-21">Saturday the 21st</time><br />
          commences with fine clear weathe[r] wind from the North west all hands imployed in setting [unclear] riging <FloatingCoordinates>Lat 36=05 Long 40=26</FloatingCoordinates>

        </p>
        <p><time dateTime="1852-08-22">Sunday the 22d</time><br />
          first part of these 24 hours commences with fine clear weather wind from the North East Latter part much the same <FloatingCoordinates>Lat 36=00 Long 40=20</FloatingCoordinates><br />
          <br />
          [in margin, ink drawing of whale]
        </p>
        <p><time dateTime="1852-08-23">Monday the 23d</time><br />
          commences with fine clear weather, the wind from the SE middle part moderate and clear weather Latter part the same <FloatingCoordinates>Lat 36=20 Long 40=00</FloatingCoordinates><br />
          <br />
          [noted in margin] August Monday the 22d 11 oclock AM saw a large school of whale the capt came on deck and wore ship to stand direct from them for fear we should get one of them [end note]
        </p>
        <p><time dateTime="1852-08-24">Tuesday the 24th</time><br />
          commences with fine weather Latter part the same <FloatingCoordinates>No Obs</FloatingCoordinates><br /><br />

        </p>

        <PageNumber num={96} />
        <p><aside><time dateTime="1852-08-25">August the 25th</time></aside>
          first part of these 24 hours fresh gales from the NE middle part the same Latter part more moderate <FloatingCoordinates>Lat 35=00 Long 41=00</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-08-26">Thursday the 26th</time><br />
          commences with fine weather middle part the same Latter part moderate the wind from the North east all hands imployed in ships duty so ends these 24 hours <FloatingCoordinates>No Obs</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-08-27">Friday the 27th</time><br />
          commences with fine weather Later part the same  <FloatingCoordinates>34=00  40=51</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-08-28">Saturday the 28th</time><br />
          first part of these 24 hours fresh gales from the SW all hands imployed in ships duty <FloatingCoordinates>Lat 34=54  Long 42  30</FloatingCoordinates>
        </p>
        <p><time dateTime="1852-08-29">Sunday the 29th</time><br />
          first part of these 24 hours fresh gales from the NE Latter part the same <FloatingCoordinates>Lat 35=40 44=40</FloatingCoordinates>

        </p>
        <p><time dateTime="1852-08-30">Monday the 30th</time><br />
          commences with fine clear weather, wind from the Eastward <FloatingCoordinates>Lat 36=40 Long 44 30</FloatingCoordinates>

        </p>
        <p><time dateTime="1852-09-31">Tuesday the 31st [sic]</time><br />
          commences with fine clear weather wind from the North east  middle part  calm <FloatingCoordinates>36=48  Long 44=30</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-09-01">September the 1st</time></aside>Wednesday<br />
          commences with fine weather wind from the North East middle part blows heavy from the North East Latter part the same, all hands well on board, <FloatingCoordinates>Lat 36=46  Long 43=12</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-09-02">September the 2nd</time></aside>Thursday<br />
          these 24 hours commences with cloudy weather and blowing heavy from the NE Latter part the wind is from the Eastward Rainy and cloudy weather <FloatingCoordinates><span style={{ paddingRight: '30px' }}>Lat</span> Long<br />38=30&nbsp;&nbsp;42=00</FloatingCoordinates><br /><br />
        </p>
        <PageNumber num={97} />
        <p><aside><time dateTime="1852-09-03">September the 3d</time></aside>Friday<br />
          commences with stormy weather the wind from the North East blowing a gale middle part the same with a very high sea running Latter part the same <FloatingCoordinates>Lat by obs 38=08&nbsp;&nbsp;&nbsp;No obn Long 40=00</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-09-04">September the 4th</time></aside>Saturday<br />
          commences with very high winds from the North West and a very heavy sea, the Brig running to the Eastward under close reeft topsails all these 24 hours <FloatingCoordinates>Lat 39=35&nbsp;&nbsp;&nbsp;Long by dr 38=00</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-09-05">September the 5th</time></aside>Sunday<br />
          commences with with stormy weather wind from the north east middle part rainy and very high sea running Latter part is finer weather, and more moderate <FloatingCoordinates>Lat 38=48  Long 34=40</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-09-06">September the 6th</time></aside>Monday<br />
          commen with cloudy weather blowing heavy from the North east middle part more moderate Latter part moderate the wind from the North east <FloatingCoordinates>Lat 38=40 Long 32=10</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-09-07">September the 7th</time></aside>Tuesday<br />
          first of these 24 hours commences with fowl weather and Light winds from the east Latter part the same <FloatingCoordinates>Lat 38=51&nbsp;&nbsp;&nbsp; 32=59</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-09-08">September the 8th</time></aside>Wednesday<br />
          first part cloudy with raine Latter part nearly the same <FloatingCoordinates>Lat 38=45  Long 30=</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-09-09">September the 9th</time></aside>Thursday<br />
          first part commences with fine clear weather wind from the north east Latter part the same, fay all [Ilha do Faial: Faial Island, Central Azores - in English also spelled Fayal] in sight, Laying off and on for repairs on the brig Capt on shore
        </p>
        <p><aside><time dateTime="1852-09-10">Sept the 10th</time></aside>Friday
          commences with fine clear weather the brig lying off and on fay all harbor bearing NW
        </p>
        <p><aside><time dateTime="1852-09-11">Sept the 11th</time></aside>
          commences with fine clear weather wind from the NE mored ship in fayall harbor Lying to anchor<br /><br />
        </p>

        <PageNumber num={98} />
        <p><aside><time dateTime="1852-09-12">Sept th 12th</time></aside>
          commences with fine clear weather wind from the north east brig lying at anchor in fayall harbour at 8 oclock PM got under way and stood out to sea Latter part moderate
        </p>
        <p><aside><time dateTime="1852-09-13">Sept th 13th</time></aside>Monday<br />
          commences with fine clear weather wind from the north east wee are cruising of[f] the isle of Saint George [Sao Jorge, Azores; Saint George, Central Azores] these 24 hours
        </p>
        <p><aside><time dateTime="1852-09-14">Sept th 14th</time></aside>Tuesday<br />
          commences with cloudy weather middle and latter part the same Latter part of these 24 hours we lay to the south East of the isle of tasarah  [Terceira Island, Azores] cruising for whale
        </p>
        <p><aside><time dateTime="1852-09-15">Sept 15th</time></aside>Wednesday<br />
          commences with fine weather but cloudy and threatening raine Latter part the same cruising of[f] tasarah
        </p>
        <p><aside><time dateTime="1852-09-16">Sept 16th</time></aside>Thursday<br />
          the first part of these 24 hours blows heavy from the north west Latter part the same <FloatingCoordinates>no obs [unclear]</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-09-17">Sept 17th</time></aside>Friday<br />
          commences with fine weather wind from the SW middle part cloudy and blowing heavy from the south west so ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-09-18">Sept 18th</time></aside>Saturday<br />
          first part of these 24 hours fresh Gales from the North East middle part more moderate with the wind from the south west Latter part the same the isle of saint mikles  [Sao Miguel: Saint Michaels, Azores] bearing ENE Dist 2 miles
        </p>
        <p><aside><time dateTime="1852-09-19">Sept 19th</time></aside>Sunday<br />
          commences with fine weather wind from the north east Lying of[f] the southside of saint mikles so ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-09-20">Sept 20th</time></aside>Monday<br />
          commences with fine weather wind from the North East Latter part blows heavy from the Eastward <FloatingCoordinates>Lat 36=08 Long 24=20</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={99} />
        <p style={{ textAlign: 'right' }}>[penned note, different handwriting]<br /><span style={{ fontSize: '85%' }}>
          hand Hath<br />withered</span><br />[end note]
        </p>
        <p><aside><time dateTime="1852-09-21">Septm the 21st</time></aside>Monday<br />
          commences with a gale of wind from the Eastward the Brig lying under close reeft topsails Middle and Latter part mutch the same <FloatingCoordinates>Lat 35=30, 25 10</FloatingCoordinates>
        </p>
        <p style={{ textAlign: 'right' }}><br />[penned note between entries, different handwriting]<br /><span style={{ fontSize: '85%' }}>
          Insahate death<br />thy blighting</span><br />[end note]
        </p>
        <p><aside><time dateTime="1852-09-22">Septem the 22nd</time></aside>Tuesday<br />
          first part moderate with the wind from the Southwest middle and latter part clowdy and raining So ends the 24 hours <FloatingCoordinates>Lat 35=20 Long 25=20</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-09-23">September the 23d</time></aside>Thursday [sic]<br />
          commences with fine clear weather wind from the north East Latter part cloudy with raine <FloatingCoordinates>Lat 35=10 Long 25=05</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-09-24">Sept the 24th</time></aside>Friday<br />
          first part of these 24 hours light winds from the south west middle part the same with frequent squales of raine Latter part the same <FloatingCoordinates>Lat 33=33 Long 21=48</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-09-25">Sept the 25th</time></aside>Saturday<br />
          commences with fine clear weather with the wind from the North East middle part much the same Latter part calm <FloatingCoordinates>Lat 33=00 24=20</FloatingCoordinates>
        </p>
        <p style={{ textAlign: 'right' }}>[penned note between entries, different handwriting]<br />
          <span style={{ fontSize: '85%' }}>24 hours</span><br />[end note]
        </p>
        <p><aside><time dateTime="1852-09-26">Septem the 26th</time></aside>Sunday<br />
          first part of these 24 hours, calm middle part moderate with the wind from the Eastward Latter part the same <FloatingCoordinates>Lat 33=26 Long 24 50</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-09-27">Septe the 27th</time></aside>Monday<br />
          first part of these 24 hours moderate with the wind from the westward Latter part the same <FloatingCoordinates>Lat 33=40 Long 21=50</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-09-28">Septem the 28th</time></aside>Tuesday<br />
          first part of these 24 hours is fine Middle part the same Latter part heavy winds from the south west &amp; heavy sea running, <FloatingCoordinates>32=47 Long 20=40</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-09-29">Sept the 29th</time></aside>Wednesday<br />
          Commences with cloudy weather raining - 11 oclock PM saw a large school of killers the capt would not lower for them because he had a [unclear] so ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-09-30">Septr the 30th</time></aside>
          commences with rainy and windy weathr Midle part the same with the wind from the South west Latter part the same <FloatingCoordinates>Lat 32 50&nbsp;&nbsp;&nbsp;Long 20=25</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={100} />
        <p><aside><time dateTime="1852-10-01">October the 1st</time></aside>Friday<br />
          commences with windy weather with a heavy sea running from the south west Middle part clowdy with the wind from the north west Latter part the same <FloatingCoordinates>Lat 32=00 Long 20=45</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-10-02">October the 2nd</time></aside>Saturday<br />
          commences with clowdy and rainy weather Middle part the same
        </p>
        <p><aside><time dateTime="1852-10-03">October the 3d</time></aside>Sunday<br />
          commences with fine moderate weather wind from the north east thare is a very high sea runing from the north east middle part the same Latter part moderate wind from the southwest <FloatingCoordinates>Lat 33=14 Long 20=05</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-10-04">October the 4th</time></aside>Monday<br />
          commences with fine clear weather midle part the same at 6 Oclock PM rose a school of whale Lowered all three boats in chase of them but could not strike one, on account of the whale being gallied capt went on board Larboard and waist boat picked out the best of their crew and both maits went in one boat, they Persued the whale until 12 Oclock P.M. <FloatingCoordinates>No Obs this day<br />
            by Dr 33=04 18 50</FloatingCoordinates><br /><br />
        </p>
        <p><aside><time dateTime="1852-10-05">Oct  the 5th</time></aside> Tuesday<br />
          first part of these 24 hours is fine clear weather, the wnd from the South West, at one oclock A.M we fastned to one of the whale she ran and sounded so bad that wee didn't kill her until 4 oclock AM when we went alongside with her and made her fast at 5½ of the clock PM wee commensed cutting in unitl 12 oclock, so ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-10-06">Oct the 6th</time></aside>Wednesday<br />
          commences with calm and clear weather finished cutting in the whale at five oclock A.M and set the works going Latter part of these 24 hours moderate <FloatingCoordinates>Lat 32=50 Long 18 00[?]</FloatingCoordinates><br /><br />

        </p>

        <PageNumber num={101} />
        <p><aside><time dateTime="1852-10-07">Oct the 7th</time></aside>Thursday<br />
          first part of these 24 hours moderate Latter part the same trying out oile <FloatingCoordinates>Lat 33=28 Long 18=20</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-10-08">Oct the 8th</time></aside>Friday<br />
          commences with fine clear weather Midle part breses from the North west Latter part blows heavy <FloatingCoordinates>Lat 33=00 Long 17=50</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-10-09">Oct the 9th</time></aside>Saturday<br />
          commences with clowdy and windy weat[her] first part of these 24 hours, finished boiling the whale midle part we stowed dow sixty bb Latter part imployed in cleaning ship <FloatingCoordinates>Lat 33=20 Long 17=20</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-10-10">Oct 10th</time></aside>Sunday<br />
          first part of these 24 hours blows heavy from the north west at 1 oclock A.M sighted Madaria bearing SE by compass Latter part lying under Madarah
        </p>
        <p><aside><time dateTime="1852-10-11">Oct the 11th</time></aside>Monday<br />
          first part of these 24 hours fine weather and fresh breses from the North West midle part the same while lying of[f] the isle of Madaria
        </p>
        <p><aside><time dateTime="1852-10-12">Oct 12th</time></aside>Tuesday<br />
          commences with fine weather wind from the North west the Brig Gem is loafing round the isle of Medara among the fishing boats
        </p>
        <p><aside><time dateTime="1852-10-13">Oct 13th</time></aside> Wednesday<br />
          first part of these 24 hours is fine weather the wind is from the North west the brig gem is loafing round the isle of Medara So ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-10-14">Oct 14</time></aside>Thursday<br />
          commences with squaly weather wind from the North West midle part Blows heavy Latter part the same Lying under Medara
        </p>
        <p><aside><time dateTime="1852-10-15">Oct 15th</time></aside>Friday<br />
          first part of these 24 hours fresh gales from the North West Midle and Latter part the same while Lying of[f] the Grand Canary
        </p>
        <p><aside><time dateTime="1852-10-16">Oct 16th</time></aside>Saturday<br />
          commences with rainy weather middle and latter part the same lying of[f] the Canary<br /><br />
        </p>

        <PageNumber num={102} />
        <p><aside><time dateTime="1852-10-17">Oct 17th</time></aside>
          first part of these 24 hours blows heavy from the North East with raine, midle part the same Latter more moderate w NE cruising for whale of[f] the south side of the grand canary so ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-10-18">Oct 18th</time></aside>Monday<br />
          commences with cloudy weather the wind is from the North east midle and Latter part blows heavy with raine so ends th 24 hrs
        </p>
        <p><aside><time dateTime="1852-10-19">Oct 19th</time></aside>Tuesday<br />
          first part of these 24 hours moderate the wind is from the North east at 4 oclock AM rose whale of[f] the peak of Tenareef lowered the two boats and got one ten bare whale Later part cut him in So ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-10-20">Oct 20th</time></aside>Wednesday<br />
          commences with fine clear weather wind from the NE we are cruising for whale of[f] the sw side of the grand canary nothing more remarkable these 24 hours
        </p>
        <p><aside><time dateTime="1852-10-21">Oct 21st</time></aside>Thursday<br />
          first part of these 24 hours calm midle and latter part the same cruising for whale
        </p>
        <p><aside><time dateTime="1852-10-22">Oct 22nd</time></aside>Friday<br />
          commences with calm and clear wether midle and latter part the same at 4 oclock PM got the works going and tryed out the 10 bar whale at 8 oclock PM rose a school of large whale the waist boat went up along side of one the Boatstearer hove at her but made a stram of it, we chased the galyed whale all day but could not get in another chance so ends the 24 hours<br />
          Misery
        </p>
        <p><aside><time dateTime="1852-10-23">Oct 23rd</time></aside>Saturday<br />
          commences with moderate weather wind is light from the North East midle and latter part the same stowed down the oile which was 10 barels we have now but 140 barls, all hands imployed in cleaning ship so ends thes 24 hrs
        </p>
        <p><aside><time dateTime="1852-10-24">Oct 24th</time></aside>Sunday<br />
          commences with fine clear weather but blows fresh from the North east midle part the same Latter part the wind increases f Ea. of 'E [unclear] [unclear] under close reaft top-sails of[f] the th south side tanareef<br /><br />
        </p>

        <PageNumber num={103} />
        <p><aside><time dateTime="1852-10-25">Oct 25th</time></aside>Monday<br />
          commences with fine clear weather and the wind from the North East lowered our boats at 8 PM for blackfish but did not get any of them -  these 24 hours ends with a gale of wind from North east
        </p>
        <p><aside><time dateTime="1852-10-26">Oct 26th</time></aside>Tuesday<br />
          commences with heavy breses from the NE at 8 oclock PM spoke the roschild barque of Boston small master [Rothschild of Boston (bark); Master James Small] with 80 barls fresh oile, latter part more moderate
        </p>
        <p><aside><time dateTime="1852-10-27">Oct 27th</time></aside>Wednesday<br />
          first part of these 24 hours fresh Gales from the North east Midle part the same Latter part the wind is westerly and very light while the Brig is lying of[f] tenereef so ends the 24
        </p>
        <p><aside><time dateTime="1852-10-28">Oct 28th</time></aside>Thursday<br />
          commences with fine clear weather the wind from th north east midle and latte part the same while we ly of[f] the Peak of tenereef
        </p>
        <p><aside><time dateTime="1852-10-29">Oct 29th</time></aside>Friday<br />
          commences with fine clear weather but blows very heavy from the North East Midle and latter part the same
        </p>
        <p><aside><time dateTime="1852-10-30">Oct 30th</time></aside>Saturday<br />
          comences with fine weather th wind is light from the North East at 1 oclock AM bore of[f] for Saint Thomass Latter part the wind is light at 11 ock. cape of teneref bore E northeast 50 miles so ends the 24 h
        </p>
        <p><aside><time dateTime="1852-10-31">Oct 31st</time></aside>Sunday<br />
          commences with fine clear weather the wind is from the North east midle and latte part is fine weath Nothing remarkable to note <FloatingCoordinates>Lat 24=02  Long 18=58</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-11-01">Oct 22nd<br />Nov 1st</time></aside>Monday<br />
          first is moderate the wind from the Northeast midle and latter part the same Lat and Long by obs <FloatingCoordinates>Lat 23=15 Long 21=20</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-11-02">Nov 2nd</time></aside>Tuesday<br />
          commences with fine clear weather the wind is from the North East all hands imployed in ships duty Latter part sam sevral saile in sight standing to the Eastward <FloatingCoordinates>Lat 21=15 Long 23=16</FloatingCoordinates><br />
          So Ends this page<br /><br />
        </p>

        <PageNumber num={104} />
        <p><aside><time dateTime="1852-11-03">Nov the 3rd</time></aside>
          Wednesday<br />
          first part of these 24 hours blows heavy from the North east several saile in sight bound to the eastward Latter part moderate <FloatingCoordinates>Lat 19=24 Long 25=40</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1852-11-04">Nov 4th</time></aside>Thursday<br />
          commences with fine clear weather and the wind from the north east, is moderate midle and latter part is mutch the same all hands is well on board <FloatingCoordinates>Lat 18=52 Long 28=06</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-05">Nov 5th</time></aside>Friday<br />
          commences with fine clear weather and the wind is from the north east and moderate Nothing remarkable these 24 hours <FloatingCoordinates>Lat 17=50 Long 29[?]=54</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-06">Nov 6th</time></aside>
          commences with fine clear weather the wind is from the south and eastward midle and latter part the same all hands well on board <FloatingCoordinates>Lat 17=57 Long 32=10</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-07">Nov 7th</time></aside>Sunday<br />
          commences with fine clear weather and the wind from the south East, very moderate midle and latter part the same <FloatingCoordinates>Lat 16=50 Long 32=40</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-08">November 8th</time></aside>Monday<br />
          commences with fine clear weather the wind is from the north East Midle and Latter part is the same <FloatingCoordinates>Lat 16=45 Long 34=50</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-09">Nov the 9th</time></aside>Tuesday<br />
          commences with fine clear weather the wind is from the NE sevral saile in sight bound to the south west, so ends these 24 hours <FloatingCoordinates>Lat 16=30 Long 37=04</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-10">Nover th 10th</time></aside>Wednesday<br />
          commences with fine clear weather the wind is from the eastward Latter part has nothing remarkable to note all hands well on board <FloatingCoordinates>Lat 16=15  Long 39=45</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-11">Nover th 11th</time></aside>Thursday<br />
          first part of these 24 hours the wind is Light and from the Eastward nothing in sight. these 24 hours all hands well on board <FloatingCoordinates>Lat 16=13 Long 41=05</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={105} />
        <h3 style={{ textAlign: "left" }}><time dateTime="1852-11-12">November the 12th</time>&nbsp;&nbsp;AD - - 1852</h3>
        <p>Friday<br />
          commences with fine clear weather and the wind from the North East a Large ship in sight bound to the south west midle and Latter part nothing is remarkable to note <FloatingCoordinates>Lat 16=10  Long 44=20</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-13">Nove th 13th</time></aside>Saturday<br />
          first part of these 24 hours is Light Light winds from the north and East middle and Latter part is the same all hands well on board <FloatingCoordinates>Lat 16=10 Long 46=54</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-14">Nov th 14th</time></aside>Sunday<br />
          first part of these 24 hours is clear weather, the wind is from the North East all hands imployed in ships duty so Ends these 24 hours
          <FloatingCoordinates><span style={{ paddingRight: '20px' }}>Lat</span> Long<br />16=12&nbsp;&nbsp;48=30</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-15">Nov 15th</time></aside>Monday<br />
          first part of these 24 hours is moderate but clear weather middle and latter part the same All hands well on board <FloatingCoordinates>Lat 15=52 Long 51=50</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-16">Nove th 16th</time></aside>
          first part of these 24 hours is fine clear weather the wind is from the NE middle and latter part the same all hands well on board <FloatingCoordinates>Lat 15=50[?] Long 54=30</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-17">Novem 17th</time></aside>Wednesday<br />
          commences with fine clear weather the wind is from the N.E. very moderate midle and latte part the same all hands well <FloatingCoordinates>Lat 15=48 Long 57=50</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-18">Nov 18th</time></aside>Thursday<br />
          commences with fine clear weather with the wind from the N.E. middle and latter part the same all hands well on board <FloatingCoordinates>Lat 15=43 Long 59=47</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-19">Nov 19th</time></aside>Friday<br />
          commences with fine clear weather and the wind from the NE midle and latter part the same <FloatingCoordinates>Lat 15 40 Long 60=54</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1852-11-20">Nov 20th</time></aside>Saturday<br />
          commences with fine clear weather wind from the North East at noon made or saw the North side of Dominico bearing south dist 10 miles at 10 oclock PM came to anchor of[f] th North west side of Prince Reuperts Bay so ends the 24 hours<br /><br />
        </p>

        <PageNumber num={106} />
        <p><aside><time dateTime="1852-11-21">November th 21st</time></aside>Sunday<br />
          commences with fine clear weather Nothing done on board this day all hands well on boar[d] so Ends this day
        </p>
        <p><aside><time dateTime="1852-11-22">Nov 22nd</time></aside>Monday<br />
          commences with clear weather all hands imployed in geting of watter at 2 oclock PM the capt and the cook had some words the cook being intoxicated would not obay the capt's orders when reqsted to, keep sivel, the capt rose his hand to the cook, when the cook cocked [caught] his hand and bit his thumb by that means the capt was, obliged to strike him to make him loose his hold at 4 oclock PM the cook went on shore Likewise the shipskeeper at 6 oclock so Ends this day
        </p>
        <p><aside><time dateTime="1852-11-23">Nov 23d</time></aside>Tuesday<br />
          commences with fine clear weather the wind is to the NE all hands imployed in geting of water at 2 oclock PM the capt was sumond to go on shore to attend court this day Ends with fine clear weather all hands well on board
        </p>
        <p><aside><time dateTime="1852-11-24">Nov 24th</time></aside>Wednesday<br />
          commences with fine clear weather with the wind from the NE this morning we[?] cleared up our decks and all ready for sea the capt and all the starboard watch [unclear] on shore the Larboard watch all on ships Duty so Ends this day
        </p>
        <p><aside><time dateTime="1852-11-25">Nov 25th</time></aside>Thursday<br />
          commences with fine clear weather the wind is from the NE midle and Latter part the same at 4 oclock PM got under way Bound for Sainthomas so Ends this day
        </p>
        <p><aside><time dateTime="1852-11-26">Nov 26th</time></aside>Friday<br />
          commences with fine clear weather the wind is from the north east fir[st] Part we  are runing down the South side of the islese of guardelupe [Guadeloupe] Latter part the same all hands well on board
        </p>
        <p><aside><time dateTime="1852-11-27">Nov 27th</time></aside>Saturday<br /><br />
        </p>

        <PageNumber num={107} />
        <p><aside><time dateTime="1852-11-27">Novem th 27th</time></aside>
          first part of these 24 hours is fine clear weather with the wind from the north west the brig is running down the south side of the islands of the windward islands all hands well on board
        </p>
        <p><aside><time dateTime="1852-11-28">Nov 28th</time></aside>Sunday<br />
          commences with fine clear weather the wind is from the north east and moderate at 11 oclock PM we was of[f] the isle of Saint John
        </p>
        <p><aside><time dateTime="1852-11-29">Nov the 29th</time></aside>Monday<br />
          commences with fine clear weather the wind is from the north East and moderate at 1 oclock made the island of Saint Thomas bearing SW at 5 oclock came to anchor in the harbour of Saint Thomas so ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-11-30">Nov 30th</time></aside>Tuesday<br />
          commences with fine clear weather the wind is from the North East all hands imployed in ships duty so ends
        </p>
        <p><aside><time dateTime="1852-12-01">Novem [sic] 1st</time></aside>Wednesday<br />
          commences with fine clear weather the wind is from the North East but moderate
        </p>
        <p><aside><time dateTime="1852-12-02">Dec 2d</time></aside>Thursday<br />
          commences fine clear weather the wind from the NE all hands on shor on Liberty
        </p>
        <p><aside><time dateTime="1852-12-03">Dec 3d</time></aside>Friday<br />
          commences with fine clear weather the wind is from the North East and pleasant at 11 oclock PM weid [weighed] our anchor and stood out for sea so Ends these 24 hours all hands well on board
        </p>
        <p><aside><time dateTime="1852-12-04">Dec 4th</time></aside>Saturday<br />
          commences with fine clear weather the wind is from the North east and [unclear] Latter part fine all hands well on board so ends
        </p>
        <p><aside><time dateTime="1852-12-05">Dec 5th</time></aside>Sunday<br />
          commences with fine clear weather the wind from the NE midle and latter part the same all hands well on board so ends these 24
        </p>
        <p><aside><time dateTime="1852-12-06">Dec 6th</time></aside>Monday<br />
          commences with fine clear weather the wind is from the NE and cloudy midle and latter part the same we are on our passage to the isle of blanco <FloatingCoordinates>Obs at noon Lat 13=09 Long 64=40</FloatingCoordinates><br /><br />

        </p>

        <PageNumber num={108} />
        <p><aside><time dateTime="1852-12-07">Dec the 7th</time></aside>Tuesday<br />
          first part of these 24 hours clear weather the wind is from the NE all hands well on board midle and latter the same, whale birds very plentifull
        </p>
        <p><aside><time dateTime="1852-12-08">Dec the 8th</time></aside>Wednesday<br />
          commences with fine clear weather with the wind from the NE while we are crursing for whale of[f] the isle of Blanco, midle and later part the same
        </p>
        <p><aside><time dateTime="1852-12-09">Decm the 9th</time></aside>Thursday<br />
          commences with fine clear weath and, the wind, is from the NE midle and latter part the same cruising for whale of[f] the isle of blanco all hands well on board so ends
        </p>
        <p><aside><time dateTime="1852-12-10">Decem the 10th</time></aside>Friday<br />
          commences with fine clear weather and the wind is from the North east crusing for whale of[f] the isle of blanco all hands well on board so ends these 24 h
        </p>
        <p><aside><time dateTime="1852-12-11">Dec the 11th</time></aside>Saturday<br />
          commences with fine clear weather the wind is from the south east all hands employed in ships duty So Ends these 24 houres
        </p>
        <p><aside><time dateTime="1852-12-12">Dec the 12th</time></aside>Sunday<br />
          commences with fine clear weath and the wind is from the NE blowing heavy all hands well on board
        </p>
        <p><aside><time dateTime="1852-12-13">Dec the 13th</time></aside>Monday<br />
          commences with weather but blows heavy from the Northward one man taken sick with a fever this 24 hour we are lying to anchor under blanco
        </p>
        <p><aside><time dateTime="1852-12-14">Dec 14th</time></aside>
          commences with fine clear weather the wind from Eastward, blows heavy so much so that we can not cruise more than 4 hours of this 24 hours Last part lying at anchor under blanco
        </p>
        <p><aside><time dateTime="1852-12-15">Dec 15th</time></aside>
          first part of these moderate and fi[ne] weat[her] the wind is from the north ward first part we are cruising, Lat part to anchor
        </p>
        <p><aside><time dateTime="1852-12-16">Dec 16th</time></aside><br /><br />
        </p>

        <PageNumber num={109} />
        <p><aside><time dateTime="1852-12-16">Dec 16th</time></aside>Thursday<br />
          first of the 24 hours is fine clear weathe the wind is from the north east are cruising for whale of[f] the isle of blanco all hands well but one man latter part lying at anchor
        </p>
        <p><aside><time dateTime="1852-12-17">Dec 17th</time></aside>Friday<br />
          commences with fine clear weather and wind from the North ward midle part cruising Latter part to anchor under blanco all hands well on board but one man so ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-12-18">Dec 18th</time></aside>Saturday<br />
          commences with fine weather middle and latte part rather windy and cloudy Lying to anchor of[f] Blanco so Ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-12-19">Dec 19th</time></aside>Sunday<br />
          commences with cloudy and windy weather blowing heavy from the Northward Lying to anchor close to the isle of blanco all hands well on board but one man he is very sick with a fever
        </p>
        <p><aside><time dateTime="1852-12-20">Dec 20th</time></aside>Monday<br />
          commences with high winds from the north East midle and latter part the same
        </p>
        <p><aside><time dateTime="1852-12-21">Dec 21st</time></aside>Tuesday<br />
          commences with fine clear weathe the wind is from the east midle and latter part mutt the same while at anchor of[f] the isle of blanco one many very sick
        </p>
        <p><aside><time dateTime="1852-12-22">Dec 22nd</time></aside>Wednesday<br />
          commences with fine clear weath the wind is from the north east blowing very heavy while we are crussing for whale of[f] the isle of blanco for whale middle and latter part the same so ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-12-23">Dec 23rd</time></aside>Thursday<br />
          commences with clear weather and the wind is from the north and east while we are lying under the lee of the isle of blanco setting up riging so ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-12-24">Dec 24th</time></aside>Friday<br />
          commences with fine clear weath the wind is Easterly blowing heavy while we are crusing for whale of[f] the isl of blanco Latter part Lying to anchor setting up riging<br /><br />
        </p>

        <PageNumber num={110} />
        <p><aside><time dateTime="1852-12-25">Dec 25th</time></aside>Saturday<br />
          first part of these 24 hours moderate wee are crussing for whale of[f] the isl of blanco Latter part Lying to anchor all hands imployed setting up riging
        </p>
        <p><aside><time dateTime="1852-12-26">Dec 26</time></aside>Sunday<br />
          first part of these 24 hours pleasant but blows heavy from the eastward Lat part the same while lying to anchor of[f] the isle of Blanco
        </p>
        <p><aside><time dateTime="1852-12-27">Dec 27th</time></aside>Monday<br />
          commences with fine clear weather with the wind from the North East and pleasant midle and latter the same lying to anchor of[f] the isle of blanco
        </p>
        <p><aside><time dateTime="1852-12-28">Dec 28th</time></aside>Tuesday<br />
          commences with clear weather and the wind from the North East and pleasant midle and latter part the same lying of[f] the isle of blanco for bee birds went on shor and shot two of them so ends this 24
        </p>
        <p><aside><time dateTime="1852-12-29">Dec 29th</time></aside>Wednesday<br />
          commences with fine clear weather with the wind from the north east all hands imployed in fitting riging so ends these 24 hours
        </p>
        <p><aside><time dateTime="1852-12-30">Dec 30</time></aside>Thursday<br />
          commences with fine clear weather and the wind from the north east first on shore Lat part runing down for the spanish maine
        </p>
        <p><aside><time dateTime="1852-12-31">Dec 31st</time></aside>Friday<br />
          commences with fine clear weather blowing heavy from the north east Lat part came to anchor of[f] the Bird islands
        </p>
        <p><aside><time dateTime="1853-01-01">Jan 1st</time></aside>Saturday<br />
          first part of these 24 hours blows heavy from the north ward midle and latte part the same
        </p>
        <p><aside><time dateTime="1853-01-02">Jan 2nd</time></aside>Sunday<br />
          commences with fine clear weath and the wind from the north east we have some raine Latter part fine but blows fresh from the north &amp; wee are lying to anchor of[f] the Bird islands<br /><br />
        </p>

        <PageNumber num={111} />
        <p><aside><time dateTime="1853-01-03">Jan 3rd</time></aside>Monday<br />
          commences with fine clear weather the wind is from the north east blowing heavy midle and latter mor moderate crussing for whale of[f] the bird islands so ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-01-04">Jan 4th</time></aside>Tuesday<br />
          first part fine weather wee are crussing of[f] the isle of bonare midle and latter part all hands well on board so ends these
        </p>
        <p><aside><time dateTime="1853-01-05">Jan 5th</time></aside>Wednesday<br />
          first part of these 24 fresh gales from the North East wee are cruising for whale of[f] the of bonare for sperm whale so ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-01-06">Jan 6th</time></aside>Thursday<br />
          commences with fine clear weather and the wind from the north east midle and latte[r] the same cruising for whale of[f] the isle of bonare so ends the 24
        </p>
        <p><aside><time dateTime="1853-01-07">Jan 7th</time></aside>Friday<br />
          first moderate the wind is from the north and east ward  midle and latter part the same while wee are cruising for whale off the isle of bonare all hands well on board
        </p>
        <p><aside><time dateTime="1853-01-08">Jan 8th</time></aside>Saturday<br />
          commences with fine clear weather the wind is from the north east Latter part blows heavy the brig is lying to anchor againe of[f] the isle of bonare so ends these 24 hours all hands well on boa[r]d
        </p>
        <p><aside><time dateTime="1853-01-09">Jan 9th</time></aside>Sunday<br />
          commences with fine clear weather the wind is from the north east while wee are lying to anchor under the bonare island all hands well on board so ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-01-10">Jan 10th</time></aside>Monday<br />
          commences with clear weather blows heavy from the North East latter part the sam while lying too of[f] bonare unde[r] Short saile
        </p>
        <p><aside><time dateTime="1853-01-11">Jan 11th</time></aside>Tuesday<br />
          with fine clear weather the wind from the north east while wee are beating to windward of bonare latter part blows heavy from the north and East so ends these 24 hours<br /><br />
        </p>

        <PageNumber num={112} />
        <p><aside><time dateTime="1853-01-12">Jan 12th</time></aside>Wednesday<br />
          commences with fine clear weather the wind from the north and eastward saw several saile in sight wee are crussing of[f] to the south of bonare 20 miles latter fine weather all hands well on board
        </p>
        <p><aside><time dateTime="1853-01-13">Jan 13th</time></aside>Thursday<br />
          commences with fine clear weathe and the wind is from the north east saw several saile in sight midle and latter fine weather, all these 24 hours we are crussing for whale of[f] south of bonare 24 miles so ends - - -
        </p>
        <p><aside><time dateTime="1853-01-14">Jan 14th</time></aside>Friday<br />
          commences with clear weather the wind from the North East this day saw several hump back whale Latter part fine weather
        </p>
        <p><aside><time dateTime="1853-01-15">Jan 15th</time></aside>Saturday<br />
          commences with fine clear weather the wind is from the north east at 7 oclock PM rose a large schoole of whale lowred our boats and fastned to two of them one ran out the boats line and we lost him the other we saved so ends this [unclear] humbug[?]
        </p>
        <p><aside><time dateTime="1853-01-16">Jan 16th</time></aside>Sunday<br />
          commences with fine weather the wind is from the eastward we are to work cutting in th whale there is several saile in sight
        </p>
        <p><aside><time dateTime="1853-01-17">Jan 17th</time></aside>Monday<br />
          commences with fine clear weather the wind is from the north east first part part finished stowing down oile latter part crussing for whale of[f] the south side of bonare
        </p>
        <p><aside><time dateTime="1853-01-18">Jan 18th</time></aside>Tuesday<br />
          first part of these 24 hours blows heavy from the north east midle and latte part the same all hands well on board
        </p>
        <p><aside><time dateTime="1853-01-19">Jan 19th</time></aside>Wednesday<br />
          commences with fine clear weather the wind is from the north east midle and latter part the same crussing of[f] the isle of bonare for sperm whale<br /><br />
        </p>

        <PageNumber num={113} />
        <p><aside><time dateTime="1853-01-20">Jan 20th</time></aside>Thursdy<br />
          commences with fine clear weather the wind is from the north east, latte part the same all hands well on board
        </p>
        <p><aside><time dateTime="1853-01-21">Jan 21st</time></aside>Friday<br />
          commences with fine clear weath the wind is form the north east midle and latte part the same crussing of[f] the south side of bonare
        </p>
        <p><aside><time dateTime="1853-01-22">Jan 22nd</time></aside>Saturday<br />
          commences with fine clear weathe and the wind is from the north east blowing heay wee are lying to anchor of[f] the bird islands all hand imployed in seting up riging
        </p>
        <p><aside><time dateTime="1853-01-23">Jan 23rd</time></aside>Sunday<br />
          commences with fine weathe wee are lying to anchor of[f] the bird islands taking comfort midle and lattr part the same
        </p>
        <p><aside><time dateTime="1853-01-24">Jan 24th</time></aside>Monday<br />
          first part of these 24 hours is fine weathe, blows heavy from the Eastward midle and latter part the same wee are lying to anchor of[f] the isle of bonere all hands well on board so Ends the 24
        </p>
        <p><aside><time dateTime="1853-01-25">Jan 25th</time></aside>Tuesday<br />
          commences with fine clear weathr the wind is from the Eastward blowing very heavy wee are now lying to anchor of[f] the bird island taking comfort
        </p>
        <p><aside><time dateTime="1853-01-26">Jan 26th</time></aside>Wednesday<br />
          first part of these 24 hours commences with fine clear weathe moderate enough for cruising for whale while we are lying to anchor of[f] the isle of Birds all hands well on board so Ends these 24
        </p>
        <p><aside><time dateTime="1853-01-27">Jan 27th</time></aside>Thursday<br />
          first part of these 24 hours is fine weather the wind is from the eastward midle an latte part the same now lying to anchor of th westward bird isle
        </p>
        <p><aside><time dateTime="1853-01-28">Jan 28th</time></aside>Friday<br />
          commences with fine weath wind to the Eastward wee are anchored of[f] the bird island the ben franklin of beverly run fowl of us breaking one davy [davit] likewise thre standshins [stanchions] and railing amounting to the damage of one hundred dollars<br /><br />
        </p>

        <PageNumber num={114} />
        <p><aside><time dateTime="1853-01-29">Jan 29th</time></aside>Saturday<br />
          first part of these 24 hours blows heavy from the eastward middle and latter part the same while wee are lying to anchor of[f] the isle of birds, wee have three company keepers the bark B franklin the barque Margrette and the schoner Walter B of Provincetown so Ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-01-30">Jan 30th</time></aside>Sunday<br />
          first part of thse 24 hours fine weathr the wind is from the Eastward now lying to anchor under the lee of the bird islands
        </p>
        <p><aside><time dateTime="1853-01-31">Jan 31st</time></aside>Monday<br />
          all these 24 hours fine moderate weathr wind from the Eastward Latter part Cruising for whale of[f] the south west of the bird islands at 11 oclock PM saw a large school of blackfish – so ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-02-01">Feb 1st</time></aside>Tuesday<br />
          commences with fine weather midle part the sam Latte part rainy all hands well on board so Ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-02-02">Feb 2nd</time></aside>Wednesday<br />
          commences with fine weath the wind is from the north east several sails in sight wee are now cruising of the south side of bonare island twenty [illegible] miles Latte part the same so ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-02-03">Feb 3rd</time></aside>Thursday<br />
          first part is fine weather the wind is from the eastward saw a school of blackfish but did not get any several saile in sight wee are now of the south side of bonare twenty miles dist all hands well on board.
        </p>
        <p><aside><time dateTime="1853-02-04">Feb 4th</time></aside>Friday<br />
          all these 24 hours lying to anchor under the isle of bonare, blowing heavy heavy from the eastward five vessals thear with us.<br /><br />
        </p>

        <PageNumber num={115} />
        <p><aside><time dateTime="1853-02-05">Feb 5th</time></aside>Saturday<br />
          comences with fine weathr the wind is from the north Eastward while wee are lying of[f] the isle of bonare to an anchor all hands well on board So ends these 24 hour
        </p>
        <p><aside><time dateTime="1853-02-06">Feb 6th</time></aside>Sunday<br />
          commences with fine weathr the wind is from the north East blowing heavy Latte part same all hands well on board. Ends these 24 hrs to anchor by the isle of banare
        </p>
        <p><aside><time dateTime="1853-02-07">Feb 7th</time></aside>Monday<br />
          first part is fine at 11PM Got under weigh and stood out to sea fo the Purpose of cruising for hale midle and lat part fine weath. at 8 oclock A.M rose a large school of whale Lowered our boats and chased them 11 oclock when we struck[?] one to the larboard boat and saved her
        </p>
        <p><aside><time dateTime="1853-02-08">Feb 8th</time></aside>Tuesday<br />
          commences with clear weathr the wind from the South East Midle part chased black fish but did not get any Lat part fine weather all hands imployed in getting down oile under deks  So Ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-02-09">Feb 9th</time></aside>Wednesday<br />
          all these 24 hours is fine weath the wind is from the north east ward nothing remarkable transpired worth noting except several saile in sight and the isle of bonare bearing North Dist 10 miles
        </p>
        <p><aside><time dateTime="1853-02-10">Feb 10th</time></aside>Thursday<br />
          commences with fine weather the wind is from the SE midle part the same Latter part blows heavy from the Eastward Lying to anchor of the isle of bonare
        </p>
        <p><aside><time dateTime="1853-02-11">Feb 11th</time></aside>Friday<br />
          commences with fine weath the brig Gem is cruising for whale of the isle of bonare south 20 miles all the latte part is fine fresh gales from the East ward all hands well on board<br /><br />
        </p>

        <PageNumber num={116} />
        <p><aside><time dateTime="1853-02-12">Feb 12th</time></aside>Saturday<br />
          first part of these 24 hours fine clear brses from the Eastward midle and latter part the same at 4 oclock P.M. bore away from the isle of bonare for the isle of Saint demingo So Ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-02-13">Feb 13th</time></aside>Sunday<br />
          commences with fine weath wind from the Eastward runing from the isle of bonare down to the isle of Saint dmingo all hands well on board
        </p>
        <p><aside><time dateTime="1853-02-14">Feb 14th</time></aside>Monday<br />
          first part of these 24 hours blows heavy from the Eastward wee are half way from the isle of bonare to the isle of Saint domingu runing northerly, all hands well on board
        </p>
        <p><aside><time dateTime="1853-02-15">Feb 15th</time></aside>Tuesday<br />
          first part fine weather but blows heavy from the Eastward made the isle of Saint dimaingu 9 oclock A.M. ran down the south side of saint dimingo and anchored in San bay and lay thear until the 16th
        </p>
        <p><aside><time dateTime="1853-02-16">Feb 16th</time></aside>Wednesday<br />
          first part of these 24 hours is fine weather the wind is from the SE we are cruising for whale the midle and latter part of these 24 hours in sam bay
        </p>
        <p><aside><time dateTime="1853-02-17">Feb 17th</time></aside>Thursday<br />
          first part of these 24 hours moderate the wind is from the north East and bafling at 9 oclock A.M. saw a large school of whale lowred our two larboard boats in chase of them the two larboard boats fastned to one large whale Capt Cook lowred his boat and mated with anothr vessal while wee was killing the whale
        </p>
        <p><aside><time dateTime="1853-02-18">Feb 18th</time></aside>Friday<br />
          commences with fine weather commenced cutting in the whale capt cok ordred an old damaged chaine to be put on the whale to mak her fast the chain parted and wee lost half of her he gave two fifths of the whale to the 6th vessal which left us a small share<br /><br />
        </p>

        <PageNumber num={117} />
        <p><aside><time dateTime="1853-02-19">Feb 19th</time></aside>Saturday<br />
          first part of these 24 hours moderate   the wind is from the Eastward all these 24 hours wee are imployed in trying out oile all hand well but one man, he is very ill, the capt of the gem, coleman cook, by name, struck John Vetall, Seaman several times with a lance pole which, has left him entirely unfit for his duty this was done in the boat on the 17th of February last
        </p>
        <p><aside><time dateTime="1853-02-20">Feb 20th</time></aside>Sunday<br />
          commences with fine weathr with the wind from the north East midle and latter part is the same wee are cruising for whale in Sam bay that is 20 miles south of Jacamall Saint Dmingo all hands well except John Veta[?]l he is unable for to perform his duty so ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-02-21">Feb 21st</time></aside>Monday<br />
          first part of these 24 hours is fresh gales from Eastward cruising for whale in Sam bay of Saint De midle and latte part the same finished stowing Down oile which was 23 barels to our share and 15 to the schoner fine weather untill the end of these 24 hours
        </p>
        <p><aside><time dateTime="1853-02-22">Feb 22nd</time></aside>Tuesday<br />
          commences with fine weathr the wind blows heavy from the south west midle and latte part moderate with variable winds cruising for for whale in Sam bay so Ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-02-23">Feb 23rd</time></aside>Wednesday<br />
          all these 24 hours moderate the wind is variable while wee are cruising for whale in Sam bay nothing remarkable to note
        </p>
        <p><aside><time dateTime="1853-02-24">Feb 24th</time></aside>Thursday<br />
          commences with fine weather the wind is from the north and eastward and variable midle and latte part the same while wee cruise for whale in sam bay
        </p>
        <p><aside><time dateTime="1853-02-25">Feb 25th</time></aside>
          first part of these 24 hours fresh gales from the Eastward and rainy with frequent squals of wind from differant quarters in sam bay
        </p>
        <p><aside>Feb 26th</aside>[flourish penned across bottom of page]<br /><br />
        </p>

        <PageNumber num={118} />
        <p><aside><time dateTime="1853-02-26">Feb 26th</time></aside>Saturday<br />
          commences with fine weather the wind is from the South East blowing fresh wee are yet in sam bay cruising for whale midle and latter part moderate all hands well on board so ends these twenty four hours
        </p>
        <p><aside><time dateTime="1853-02-27">Feb 27th</time></aside>Sunday<br />
          commences with fine weath the wind is from the north East wee are in sam bay cruising for whale midle and latter part fine weathr the wind is from the north and Eastward and frequent showers all hands well on board
        </p>
        <p><aside><time dateTime="1853-02-28">Feb 28th</time></aside>Monday<br />
          commences with squaly weahtr the wind is from the south east wee are in sam bay yet looking for whale Latter part faire weathr
        </p>
        <p><aside><time dateTime="1853-02-29">Feb 29th first of March</time></aside>Tuesday<br />
          first part of these 24 hours moderate the wind is from the north East wee are cruising for whale in Sam bay midle and latter part fine weathr all hands well on board
        </p>
        <p><aside><time dateTime="1853-03-02">March 2nd</time></aside>Wednesday<br />
          first part of these 24 hours fresh gales from the Eastward wee are lying to anchor in sam bay all hands imployed in geting of wood and watter continues until the End of these 24 hours all hands well on board
        </p>
        <p><aside><time dateTime="1853-03-03">March 3rd</time></aside>Thursday<br />
          first part of these 24 hours blows heavy from the Eastward wee are lying to anchor in sam bay all hands on shore at liberty lat part the same
        </p>
        <p><aside><time dateTime="1853-03-04">March 4th</time></aside>Friday<br />
          all these 24 hours wee have the wind from the Eastward blowing heavy first Lying to anchor Latter part cruising for whale saw nothing all hands well on board
        </p>
        <p><aside><time dateTime="1853-03-05">March 5th</time></aside>Saturday<br />
          first part of these 24 hours fresh gales from the Eastward wee are curising for whale in sam bay, midle and lattr part is fine weath frequent squals from diferant quarters So Ends these 24 hours<br /><br />
        </p>

        <PageNumber num={119} />
        <p><aside><time dateTime="1853-03-06">March 6th</time></aside>Sunday<br />
          first part is fine weather at 11 oclock P.M saw a large whale Lowered and saved her mating with the schoner Palmyrah of Nantucet Lat part cut her in and saved her heart for the schoner So Ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-03-07">March 7th</time></aside>Monday<br />
          commences with fine weather the wind is from the Eastward wee are cruising for whale of Sam bay and all hands imployed in saving oil from the whale last taken, all hands well on board the End of these 24 hours
        </p>
        <p><aside><time dateTime="1853-03-08">March 8th</time></aside>Tuesday<br />
          commences with fine weath th wind is from the Eastward wee are lying to anchor in sam bay trying out oile in company with the sch Palmyrah Latter part blows heavy from the Eastward  so ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-03-09">March 9th</time></aside>Wednesday<br />
          commences with fine clear weath but blows heavy from the ESE wee are trying out oile latte part blows heavy from the Eastward finished trying out and stowed down so ends these 24 hours
        </p>
        <p><aside><time dateTime="1853-03-10">March 10th</time></aside>Thursday<br />
          commences with fine weathr, the wind is from the South East blowing fresh [illegible] all hands on shore to wash of the oile from the hides likewise to get some konks for dinner latte part to anchor as useual
        </p>
        <p><aside><time dateTime="1853-03-11">March 11th</time></aside>Friday<br />
          commences with fine weath the wind is from the Eastward blowing heavy wee are cruising for whale in sam bay all hands well on board  later part fine weath several saile in sight
        </p>
        <p><aside><time dateTime="1853-03-12">March 12th</time></aside>Saturday<br />
          commences with fine weath but rather windy we are lying to anchor all these 24 hours to fit and repair riging Lat part saw several hump back whale lowred our boats in chas of them but did not get any of them<br /><br />
        </p>

        <PageNumber num={120} />
        <p><aside><time dateTime="1853-03-13">March 13th</time></aside>Sunday<br />
          first part of these 24 hours is fine weather the wind is from the South east blowing heavy saw several vessals standing to the north ward wee are cruising for whale but cant find them Latter part lying too under reef topsail
        </p>
        <p><aside><time dateTime="1853-03-14">March 14th</time></aside>Monday<br />
          first part is fine weather midle and latter part the same cruising with the Samuel cook of Provincetown likewise the walter k of Provincetown
        </p>
        <p><aside><time dateTime="1853-03-15">March 15th</time></aside>Tuesday<br />
          first part is fine weather the wind is from the East ward blowing fresh all these 24 hours wee are in company with several Provincetown vessals cruising for Sperm oile at 11 oclock AM Lowered for a hump back whale. did not get them
        </p>
        <p><aside><time dateTime="1853-03-16">March 16th</time></aside>Wednesday<br />
          commences with fine weather the wind is from the Eastward midle part [unclear] is calm Latter part to anchor in Sam bay all hands on shore on libery all hands well on board
        </p>
        <p><aside><time dateTime="1853-03-17">March 17th</time></aside>Thursday<br />
          commences with fine weath all hands on shore on liberty or shelling midle and latter part the same all hands well on board
        </p>
        <p><aside><time dateTime="1853-03-18">March 18th</time></aside>Friday<br />
          commences with fine weath but cloudy the wind is from the South East midle and latte part blows heavy from South East wee are lying to anchor in conk cove all hands well
        </p>
        <p><aside><time dateTime="1853-03-19">March 19th</time></aside>Saturday<br />
          commences with fine weath and wind from the SE midle part cloudy and frquent showers of raine Latter part moderate the brig is Lying to anchor in Sam Bay crew all well on board so ends these 24 hours<br />
          [flourish penned across bottom of page]<br /><br />
        </p>

        <PageNumber num={121} />
        <p><aside><time dateTime="1853-03-20">March 20th</time></aside>Sunday<br />
          commences with cloudy weath and frequent showers of raine midle part the same latter part Lying to anchor in sam bay all hands well on board
        </p>
        <p><aside><time dateTime="1853-03-21">March 21st</time></aside>Monday<br />
          commences with squally weather wee lay to our anchor all these 24 hours on acount of the wind blowing so very heavy from the Eastward nothing very remarkable to note all hands well on board
        </p>
        <p><aside><time dateTime="1853-03-22">March 22nd</time></aside>Tuesday<br />
          first part of these 24 hours is fine weather but rather windy from the SE thear is eight vessals to anchored in sight of us Lattr part blows heavy from the East
        </p>
        <p><aside><time dateTime="1853-03-23">March 23rd</time></aside>Wednesday<br />
          comences with cloudy weathr the wind is from the north East blowing heavy wee lying to anchor of sam bay mending sails all hands well on board so ends
        </p>
        <p><aside><time dateTime="1853-03-24">March 24th</time></aside>Thursday<br />
          commences with fine weathr the wind is from the north East blowing heavy wee are lying to anchor of the isle of St Dimingo in Sam bay mending of sails and repairing riging [unclear]
        </p>
        <p><aside><time dateTime="1853-03-25">March 25th</time></aside>Friday<br />
          commences with cloudy weathr and the wind from the South East wee are cruising in sam bay for whale lattr part cam to anchor to mend sailes and fit riging  so ends these 24 hr
        </p>
        <p><aside><time dateTime="1853-03-26">March 26th</time></aside>Saturday<br />
          first part of these 24 hours blows heavy from the East ward lying to anchor in Sam bay mending sails and fitting riging
        </p>
        <p><aside><time dateTime="1853-03-27">March 27th</time></aside>Saturday [sic]<br />
          first part of these 24 hours is fine weath the wind is South East wee are cruising for whale saw several blackfish the sea is so rough we cant lower Lat part came to anchor all hands well on board<br /><br />
        </p>

        <PageNumber num={122} />
        <p><aside><time dateTime="1853-03-28">March 28th</time></aside>Monday<br />
          commences with clear weather the wind is from the SE moderate wee are cruising for whale in sam bay all these 24 hours with all hands well on board nothing transpired worth noting
        </p>
        <p><aside><time dateTime="1853-03-29">March 29th</time></aside>Tuesday<br />
          first part is fine weather and moderate breeses from the South west midle and latter part to anchor in sam bay mending sails and fittings in company with the brig Eschol of Truro Capt Smith
        </p>
        <p><aside><time dateTime="1853-03-30">March 30th</time></aside>Wednesday<br />
          first part has fine weather and the wind from the westward all these 24 hours cruising for whale but see nothing but porpises
        </p>
        <p><aside><time dateTime="1853-03-31">March 31st</time></aside>Thursday<br />
          first part has fine weather and moderate galles from the westward all hands mending sailes and fitting riging throught all these 24 hours
        </p>
        <p><aside><time dateTime="1853-04-01">April 1st</time></aside>Friday<br />
          commences with fine weath the wind from the westward blowing fresh wee are runing to the westward for port auprince bay Latter part fine weather and moderate gales
        </p>
        <p><aside><time dateTime="1853-04-02">April 2nd</time></aside>Saturday<br />
          all these 24 hours has fine weather and the wind from the North East running down by cape tiberoon fell in with a school of small whale lowred our boats and got one to the larboard boat wee judge her to be a 25 barel whale So Ends these 24 hours all hands well on board
        </p>
        <p><aside><time dateTime="1853-04-03">April 3rd</time></aside>Sunday<br />
          first part is fine weather the wind is from the south west blowing a fresh gale trying out oile of[f] th isle vache the south side of Saint dimingo latter part the same all hands well on board<br /><br />
        </p>

        <PageNumber num={123} />
        <p><aside><time dateTime="1853-04-04">April the 4th</time></aside>Monday<br />
          these 24 hours comences with moderate weather and the wind from the North East midle and latter part blows heavy from the southward wee are laying too under reeft topsails trying out oile
        </p>
        <p><aside><time dateTime="1853-04-05">April 5th</time></aside>Tuesday<br />
          first part of these 24 hours moderate the wind is from the Eastward blowing freshly sqals middle and lattr part is fowl weath wee are lying to anchor under cape tiberoon for recruits all hands well on board
        </p>
        <p><aside><time dateTime="1853-04-06">April 6th</time></aside>Wednesday<br />
          first part of these 24 blows fresh from the SouthEast midle part has raine with frequent squals from diferant quarters lattr part th wind is more steady and from the South East
        </p>
        <p><aside><time dateTime="1853-04-07">April 7th</time></aside>Thursday<br />
          first part of these 24 hours moderate the wind is from the North East wee are now runing down [unclear] the north side of Saint Deningo midle part Lowred our boats and took one whale to Each of them the three whale probably will make 40 bls
        </p>
        <p><aside><time dateTime="1853-04-08">April 8th</time></aside>Friday<br />
          first part of these 24 hours is fine weather with light breses from the Eastward midle and lattr part trying out oile all hands well on board wee are now of[f] cape Don maria, the wind is East
        </p>
        <p><aside><time dateTime="1853-04-09">April 9th</time></aside>Saturday<br />
          these 24 hours commences with fine weather and the wind is from the North East midle part finished trying oile which made us 100 barels all hands well So Endeth these 24 hours
        </p>
        <p><aside><time dateTime="1853-04-10">April 10th</time></aside>
          has fine weather and pleasant breases from the Eastward wee are now close to the isle of anigua bound out of the pasage of [illegible] islands Latter part fine So Ends these 24 hours<br /><br />
        </p>

        <PageNumber num={124} />
        <p><aside><time dateTime="1853-04-11">April 11th</time></aside>Monday<br />
          First part of these twenty four hours the wind blows heavy from the North East but clear weather midle part had plenty of raine the wind changeable watermans[?] island in sight of [illegible] bearing North East from us Latter part very stormy all hands well on board
        </p>
        <p><aside><time dateTime="1853-04-12">April 12th</time></aside>Tuesday<br />
          first part of these 24 hours has fine weather the wind is from the north East blowing fresh midle part the same Latter part wattermans island [bore] North East dist 10 miles wee still have the wind from the Eastward so far [that] wee cannot fetch out of the passage all hands well on board
        </p>
        <p><aside><time dateTime="1853-04-13">April 13th</time></aside>Wednesday<br />
          first part of these 24 hours has fine weath the wind is from the North midle part wee are all clear of [illegible] island passage watermans island bearing South dist 25 miles latter part wee have fresh trades from S Est <FloatingCoordinates>Lat 24 Long 74=51</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1853-04-14">April 14th</time></aside>Thursday<br />
          first part of these 24 hours the wind is moderate from the S Est and a heavy Sea runing from the north East midle and latter part much the same at 3 oclock PM saw a large ship standing to the Eastward <FloatingCoordinates>Lat 25=38 Long 74=48</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1853-04-15">April 15th</time></aside>Friday<br />
          commences with fine weather and a very heavy sea runing from the North East saw a large ship standing to the westward midle part has fine weather the wind is from the North East very moderate latter part the same all hands well <FloatingCoordinates>Lat 27=40 Long 75=19[?]</FloatingCoordinates><br /><br />

        </p>

        <PageNumber num={125} />
        <p><aside><time dateTime="1853-04-16">April 16th</time></aside>Saturday<br />
          first part of these 24 hours is moderate the wind is light from the East ward and a very heavy sea running from the same quarter midle part saw sevrall vessels bound to to the west ward latter part fine weather all hands well on board at 12 A.M. wee were in <FloatingCoordinates>Lat 29=10 Long 75=35</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1853-04-17">April 17th</time></aside>Sunday<br />
          first part of these 24 hours has fine weather the wind is from the northeast[?] blowing a fine pleasant gale theare is two vessals in sight from deck a choner and a brig both bound to the south west Latter part wee have fine weather and the wind from the south west <FloatingCoordinates>at 12 oclock A.M. Lat was 30=25 Lon 74=40</FloatingCoordinates>

        </p>
        <p><aside><time dateTime="1853-04-18">April 18th</time></aside>Monday<br />
          first part has fine weather the wind is south west blowing a pleasant gale at P.M. saw a Large Brig standing to the westward Midle part has fine clear weather, all hands cleaning ship <FloatingCoordinates>No ob this day</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1853-04-19">April 19th</time></aside>Tuesday<br />
          commences with moderate winds and fine weather the wind from the North East all these 24 hours wee are imployed in ships duty repareing sails fitting riging &amp;c Lat part all hands well on board <FloatingCoordinates>Lat 31=30 Long 74=50</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1853-04-20">April 20th</time></aside>Wednesday<br />
          first part of these 24 hours fine weather the wind is from the South West blowing heavy wee are runing under close reeft topsails until the latter part when the wind moderated wee was in the <FloatingCoordinates>Lat 33=50 Long 74=59</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1853-04-21">April 21st</time></aside>Thursday<br />
          first part of these 24 hours blows heavy from the west ward midle and latter part all hands imployed in ships duty So Ends <FloatingCoordinates>Lat 36=28 Long 74=57</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={126} />
        <p><aside><time dateTime="1853-04-22">April 22nd</time></aside>friday<br />
          first part of these 24 is moderate with the wind to the Eastward several saile in sight some standing to the Eastward and some to the westward Lat part of these 24 is pleasant the wind is light from the South west at 12 AM our Lat and was <FloatingCoordinates>Lat 37=50 Long 74=50</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1853-04-23">April 23rd</time></aside>Saturday<br />
          first part of these 24 hours has fine weather the wind is from the Northeast blowing heavy midle and latter part is the same nothing very remarkable to note any more than theare is sevral saile in sight standing to the Eastward <FloatingCoordinates>at Non [sic] By Ob Lat 39=38 74=18</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1853-04-24">April 24th</time></aside>Sunday<br />
          first part of these 24 hours has fine clear weather from the South the wind is South and pleasant breses latter part the same made the Land 11 oclock P.M. bearing North East from us Dist 10 miles which proves to be fire island light house land Long island <FloatingCoordinates>Lat by Obs 4[?]0=40 0000</FloatingCoordinates>
        </p>
        <p><aside><time dateTime="1853-04-25">April 25th</time></aside>Monday<br />
          these 24 hours commences with fine weather the wind is from the North East blowing fresh at 9 oclock P.M. made the light of tarpolen [Tarpaulin] cove bearing North Dist 5 miles wee came to anchor at 10 P.M and lay there until the next day at 12 A.M. got under way for the sound
        </p>
        <p><aside><time dateTime="1853-04-26">April 26th</time></aside>Tuesday<br />
          first part of these 24 hours has fine weather the wind is from the North blowing fresh at 9 oclock PM Nantucet light bore south Dist 5 miles wee are now runing down by cape cod
        </p>
        <p><aside><time dateTime="1853-04-27">April 27th</time></aside>Wednesday<br />
          first part of these 24 hours has fine weather the wind is from the north west blowing a 6 knot brese Latter part the same highland light at 12 AM bearing E[?] dist 5 miles<br /><br />
        </p>

        <PageNumber num={127} />
        <p><aside><time dateTime="1853-04-28">April 28th</time></aside>Thursday<br />
          first part has fine weather the wind from the South west with a Strong curent runing from the North west midle and latter part the same at 11 oclock A.M Pakess[?] island bearing north west Dist 5 miles at - - -
        </p>
        <p><aside><time dateTime="1853-04-28">April 29th</time></aside>Friday<br />
          commences with fair weather and the wind from the South East at 4 oclock PM arrived in beverly and made fast to the wharf<br />
          So ends this Voyage
        </p>
        <p>Vernon Locke<br /><br /><br /><br /><br /><br />
        </p>

        <PageNumber num={128} />
        <p>Remarks on board<time dateTime="1853-12-08">&nbsp;Decm the 8th</time> <br />
          Lying in Pigto harbour [Pictou Harbour, Nova Scotia, Canada]<br />
          This day at 10 oclock AM wayed our anchor and stood out for sea with a pilot on board at 12 oclock wee abrest Pictow Light house Discharged our pilot<br />
          So Ends these 24 hours<br />
          Sivil ackount
        </p>
        <p><br /><br />
          <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Brig Sonora from Picto</p>
        </p>
        <p><time dateTime="1853-12-09">Friday Decem the 9th</time><br />
          These 24 hours hours has fine weather and very cold at 12 oclock made Cape Jack Light ran down the [strait] of Canso as far as McNeers [McNairs]Cove whare we anchored at 2 oclock A.M with the wind from the westward
        </p>
        <p><time dateTime="1853-12-10">Decem the 10th AD 1853</time><br />
          These 24 hours has moderate weather the wind is from the South East and moderate the Latter part with raine all hands well on board Lying in Mack Neres [McNairs] Cove waiting for a westerly wind.<br /><br />
        </p>

        <PageNumber num={129} />
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Towards Boston</p>
        <p>
          Remarks on board<time dateTime="1853-12-11">&nbsp;Sunday Decm th 11th</time><br />
          These 24 hours has moderate weather throught [through out] wee are laying in the strait of canso waiting for a fair wind
        </p>
        <p>Remarks<time dateTime="1853-12-12">&nbsp;Monday the 12th Decem 1853</time><br />
          These 24 hours has moderate weather the wind is South west and snowing La[y]ing in canso strait all hands well on board
        </p>
        <p>Remarks<time dateTime="1853-12-13">&nbsp;Tuesday December the 13th AD 53</time><br />
          first part of these 24 hours has moderate weather The wind is from the Southwest three of our men ran away with the boat chased them to Ship harbour but could not get them but got the boat wee are laying in Mack neres Cove trying Ship more men  the 24 hours ends with southerly winds
        </p>
        <p>Remarks<br />
          <time dateTime="1853-12-14">&nbsp;Wednes December the 14th</time><br />
          These 24 hours comences with fresh gales from the North west wee have shiped three men and at one oclock PM wayed the anchor and proceeded to sea at 8 oclock PM cape canso Light bore NW Dist 6 miles from whitch I take my Departure Lat part moderate at noon wee were abrest of halifix [illegible]<br />
          So Ends these 24 hours
        </p>
        <p><time dateTime="1853-12-15">Thursday December the 15th</time><br />
          These 24 hours Commences with pleasant weather the wind is from the westward Midle part breses up from the North west Latter part moderate the wind is bafling at noon wee are in <FloatingCoordinates>Lat 43=38  Long 64=30</FloatingCoordinates>
        </p>
        <p><time dateTime="1853-12-16">Friday Dec the 16th</time><br />
          first part of these 24 hours has [moderate] breses from the South west midle the wind changed to the North East until the Latter part when it came to the South a steady brese<br />
          Lat and Long <FloatingCoordinates>Lat in at 12 oclock was Seal island</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={130} />
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Brig Sonora from Picto towards Boston</p>
        <p><time dateTime="1853-12-17">Saturday Decem the 17th 1853</time><br />
          These 24 hours commences with windy weather from the South East abrest Cape Sable Stearing WSW to clear the cape Midle part has more moderate weather the wind is from the South West latter part moderate with South winds Several sail in sight standing to the west ward all hands well on board this day
        </p>
        <p><time dateTime="1853-12-18">Sunday Decem the 18th AD 1853</time><br />
          These 24 hours comences with cloudy weather The wind is from the South East blowing a pleasant gale midle part the wind increases to a perfect gale with a very heavy sea runing the Brig being Deep makes very bad play of it every heavy sea crosses the deck fore and aft Stove in the galley and came very near loosing the boat<br />
          Latter part more moderate with a very heavy sea<br />
          So Ends these 24 hours of uneasyness
        </p>
        <p><time dateTime="1853-12-19">Monday December the 19th</time><br />
          these 24 hours commences with moderate South West winds with a very heavy sea runing from the Eastward Thatchers island bearing west 20 miles Dist<br />
          Midnight beat up past Boston Light and anchored<br />
          Latter part Took a Pilot and beat up to the city and anchored in the Streem<br /><br />
        </p>

        <PageNumber num={131} />
        <p style={{ textAlign: 'right' }}>V Lock master
        </p>
        <p><aside><time dateTime="1854-01-15">Sunday January 15th</time></aside>
          From Norfolk towards Demara [Demerara]<br />
          these 24 hours comences with fine Clear North west winds at 9 oclock waid our anchor and stood out to see at 12 AM chatham Light bore SW Dist 25 miles So Ends these 24 hours
        </p>
        <p>
          <aside><time dateTime="1854-01-16">Jan Mondy 16</time></aside>
          Monday has fine weather with the wind from the South East East Latter part blows heavy the south west beating out the South chanel Ends with fogy weather
        </p>
        <p><aside><time dateTime="1854-01-17">Tuesday 17</time></aside>
          Comences with a fresh gale from the North west wee are stering to the south west for Norfolk Latter part has fine weather with some raine
        </p>
        <p><aside><time dateTime="1854-01-18">Wednesday 18</time></aside><br />
          These 24 hours comences with fogy weather the wind from North west to North East in the Lat of [illegible] island
        </p>
        <p><aside><time dateTime="1854-01-19">Thursday 19th</time></aside>
          These 24 hours comences with clear weather midle part rainy weather wind from the South East
        </p>
        <p><aside><time dateTime="1854-01-20">Friday the 20th</time></aside>
          Latter part wind is North First part of these hours has fogy weather the wind is from the South East Latter part took on board a pilot and proceeded up the Bay towards Norfolk
        </p>
        <p><aside><time dateTime="1854-01-21">Saturday 21st</time></aside>
          arived in Norfolk and hauled to the wharf to Discharge Balast<br /><br />
        </p>

        <PageNumber num={132} />
        <p style={{ textAlign: 'right' }}>V Lock Master
        </p>
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Brig Sonora from Norfolk towards Domaro</p>
        <p><time dateTime="1854-02-05">Sunday February the 5th 1854</time><br />
          These 24 hours comences with with heavy brezes from the Southwest at 11 oclock AM the the pilot left us
        </p>
        <p><time dateTime="1854-02-06">Monday February the 6th</time><br />
          These 24 hours comences with Strong Breses from the South at 4 oclock AM the hauled to the North thear is a very heavy sea runing Latter Part Blows a gale from the North West standing with the Topsail reefed So Ends these 24 hours <FloatingCoordinates>Lat 36&deg; 00 Long 75&deg; 43</FloatingCoordinates>
        </p>
        <p><time dateTime="1854-02-07">Tuesday February the 7th</time><br />
          These 24 hours comences with a fresh gale from the North west Midle part the wind cants westerly from that to South East Latter part more moderate with heavy sea runing from the North East <FloatingCoordinates>Lat by 34 30 Long 71&deg; 30</FloatingCoordinates>
        </p>
        <p><time dateTime="1854-02-08">February the 8th Wednesday</time><br />
          First part of these 24 hours moderate with a heavy sea from North East Midle part moderate the wind is variable from South to west Tacked ship at 8 oclock PM Steering Easterly at 11 oclock close reefed the topsail wind increases from the South East Lattr part blows a gale from South East<FloatingCoordinates>Lat by Obs 33&deg; 10 Long by DO 71&deg; 27</FloatingCoordinates>
        </p>
        <p><time dateTime="1854-02-09">February Thursday the 9th</time><br />
          First part of thes 24 hours has heavy gales from the South west and a heavy Sea runing Midle part blows a gale at 12 oclock midnight hove to under maine staisail the vessel is leaking 1000 strokes per hours of the [illegible] the Brig is heading ESE and East the [illegible]<br /><br />

          <PageNumber num={133} />
          <br /><span style={{ textAlign: 'right', display: 'block' }}>V Lock Master</span>
          <span style={{ fontSize: '125%', display: 'block', textAlign: 'left', marginBottom: -12 }}>Brig Sonora from Norfolk towards Denara</span>
          <br />Latter part wee have two men to the pumps constantly the sea making a clear [illegible] over us and washing away part of the Deck load and straining the brig so bad that wee were obliged to throw over board the remainder of the deck load to keep her from filing with watter at the time of this disaster wee sounded the pumps, and found the watter had gained on us 2½ feet in less than 4 hours So Ends these 24 hours <FloatingCoordinates>Lat by Dr 34&deg; 08 Long 70&deg; 40</FloatingCoordinates><br />
          <br />
          [noted in margin]
          Part of the crew Discharging the deck load<br />
          2 men smartly pumping [end note]
        </p>
        <p><time dateTime="1854-02-10">February Friday the 10th 1854</time><br />
          These 24 hours comences with moderate weathe But a very heavy sea runing all hands is imployed pumping to keep the Brig free[?] at 1 oclock PM. Set the Topsail and Jib at 3 oclock PM set the Foresail and maine sail midle and Later part the same all hands to the Pumps Except to make or set mor sail <FloatingCoordinates>Lat at Non 34&deg; 08 Long 70 40</FloatingCoordinates><br />
          <br />
          [noted in margin] The crew is So Exausted with pumping theare unable for any Duty<br />
          two of them can doo nothing But steer [end note]
        </p>
        <p><time dateTime="1854-02-11">February Saturday the 11th 1854</time><br />
          first part of these 24 hours has fresh gales From th North East a very heavy sea runing from the North west the Brig leaks so bad That we keep two men at the pumps all the time midle and latter part the same with strong breses from North East <FloatingCoordinates>Lat by obs 24&deg; 15 Long 58 50</FloatingCoordinates><br />
          <br />
          [noted in margin] those that are not pumping are throwing over the Deck Load [end note]
        </p>
        <p><time dateTime="1854-02-12">February Sunday the 12th</time><br />
          These 24 hours comences with Stormy and heavy weather midle part more clear but blows heavy from the North East and thear is a heavy sea runing The brig Leaking at the rate of 11 and 1200 Strokes per hour but the deck load being of[f] Decreases her leakage very mutch<br />
          <br />
          [noted in margin] Lat 30&deg;20 Long 63&deg;03[?]<br /><br />
        </p>

        <PageNumber num={134} />
        <p style={{ marginBottom: -8 }}><aside>Master<br />V Lock</aside></p>
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -8 }}>Brig Sonora from Norfolk towards Demara</p>

        <p><time dateTime="1854-02-13">February Monday the 13th</time><br />
          Comences with Cloudy weather and fresh gales from the North East midle part the same Two men imployed to the pumps throught These 24 hours <FloatingCoordinates>Lat by obs 27&deg; 21 60&deg; 25</FloatingCoordinates>

        </p>
        <p><time dateTime="1854-02-14">Tuesday February the 14th</time><br />
          These 24 hours comences with fresh gales from the North East two men imployed at th pumps continuely thear is a very heavy sea runing from the North East <FloatingCoordinates>Lat by ob 24&deg; 15 Lat 58&deg; 50</FloatingCoordinates>

        </p>
        <p><time dateTime="1854-02-15">February Wednesday the 15</time><br />
          These 24 hours comences with fine weathr but rathr Squaly the Brig makes watter fast so much so th[at] we have to kep Both pumps going continuely Lattr part blows heavy from the North East <FloatingCoordinates>Lat by obs 21&deg;14 Long 58&deg;14</FloatingCoordinates>

        </p>
        <p><time dateTime="1854-02-16">February Thursday the 16th</time><br />
          these 24 hours comences with pleasant weather and strong breses from the Eastward Later part the same the brig leaking one thousand strokes per hour <FloatingCoordinates>Lat by obs 18&deg; 14 Long 57[?] 50</FloatingCoordinates><br /><br />
        </p>

        <PageNumber num={135} />
        <p style={{ textAlign: 'right' }}>V Lock Master
        </p>
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -8 }}>Brig Sonora from Norfolk towards Demara</p>
        <p><aside><time dateTime="1854-02-17">Feb the 17</time></aside>first part of these 24 hours has fresh gales from the Eastward and clear weather the Brig is Leaking one thousand strokes per hour two men constantly on the pumps the rest of the of the crew is imployed in mending sails other ships Duty <FloatingCoordinates>Lat by obs 15 08 Long 57 37</FloatingCoordinates><br /><br />
        </p>
        <p><aside><time dateTime="1854-02-18">Saturday Feb 18th</time></aside>
          These 24 hours comences with fine clear weather the wind is eastward Later part fine weather the crew is all imployed in pumping ship the Brig is Leaking one thousand Strokes per hour <FloatingCoordinates>Lat by ob 12&deg; 04  Long 57&deg; 40</FloatingCoordinates><br /><br />
        </p>
        <p><aside><time dateTime="1854-02-19">Sunday February the 19</time></aside>
          These 24 hours comences with moderate weather the wind is from the North East midle part calm with a very heavy sea Runing the Brig is Leaking as bad as ever <FloatingCoordinates>Lat By Obs 09&deg; 05<sup>m</sup>  Long by cro'm 57&deg;30</FloatingCoordinates><br /><br />
        </p>
        <p><aside><time dateTime="1854-02-20">Monday February the 20th</time></aside>
          These 24 hours comences with cloudy weather the wind is from the North East made the Light watter of Denara 12 oclock midnight at 10 oclock AM. made the Light boat of Demara ran Down to her and took a pilot at no[o]n anchored in Demara So ends this Pasage and 24 hours the Brig Leaking as bad as Ever<br /><br />
        </p>

        <PageNumber num={136} />
        <p>Boston<br />
          Regestery of accounts
        </p>

        <table>
          <tbody>
            <tr>
              <td><time dateTime="1854-05-04">May the 4th 1854</time></td>
            </tr><tr>
              <td colSpan={2}>filling four watter casks at 50 cents Each</td>
              <td>$2.00</td>
            </tr><tr>
              <td>Salem June the 28th 1854</td></tr>
            <tr><td>filling two watter casks 50 cents each</td>
              <td></td>
              <td>$1.00</td>
            </tr><tr>
              <td>Boston August the 7th&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do</td>
              <td></td>
              <td>$1.00</td>
            </tr><tr>
              <td>Boston September 18th&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"</td>
              <td></td>
              <td>$1.00</td>
            </tr><tr>
              <td>Boston the 18 Sept</td>
              <td className="DoubleUnderline" style={{ borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: '3px', borderBottomStyle: 'double' }}>Paid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td className="DoubleUnderline" style={{ borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: '3px', borderBottomStyle: 'double' }}>$5.00</td>
            </tr>
          </tbody>
        </table>
        <br />

        <table>
          <tbody>
            <tr>
              <td colSpan={5} style={{ textAlign: 'right' }}>Advance</td>
            </tr><tr>
              <td colSpan={4}>Boston Sept the 15th James Jerewa Shiped</td>
              <td>$ 10.00</td>
            </tr><tr>
              <td colSpan={5} style={{ textAlign: 'right' }}>Spanish[?]</td>
            </tr><tr>
              <td colSpan={2}>James Thubern[?] at Sydney</td>
              <td>Sept the 30th</td>
              <td></td>
              <td colSpan={1} style={{ textAlign: 'right' }}>1 00</td>
            </tr><tr>
              <td style={{ textAlign: 'center' }}>Do</td>
              <td style={{ textAlign: 'center' }}>Do</td>
              <td colSpan={2} style={{ textAlign: 'left' }}>Oct the 5th</td>
              <td style={{ textAlign: 'right' }}>1 00</td>
            </tr><tr>
              <td colSpan={2}>Jeree Lang Law</td>
              <td colSpan={2} style={{ textAlign: 'left' }}>Oct the 7th</td>
              <td style={{ textAlign: 'right' }}>1 00</td>
            </tr><tr>
              <td colSpan={2}>Denis Langlaw</td>
              <td colSpan={2} style={{ textAlign: 'left' }}>Oct the 7th</td>
              <td style={{ textAlign: 'right' }}>1 00</td>
            </tr><tr>
              <td colSpan={2} style={{ textAlign: 'center' }}>Stuart</td>
              <td colSpan={2} style={{ textAlign: 'left' }}>Oct the 10th</td>
              <td style={{ textAlign: 'right' }}>1 00</td>
            </tr><tr>
              <td colSpan={2}>Denis Langlaw</td>
              <td colSpan={2} style={{ textAlign: 'center' }}>Oct 15th</td>
              <td style={{ textAlign: 'right' }}>2 00</td>
            </tr><tr>
              <td colSpan={2}>Jeree Langlaw</td>
              <td colSpan={2} style={{ textAlign: 'center' }}>Oct 15th</td>
              <td style={{ textAlign: 'right' }}>32</td>
            </tr><tr>
              <td colSpan={2}>James Thubern[?]</td>
              <td colSpan={2} style={{ textAlign: 'center' }}>"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15th</td>
              <td style={{ textAlign: 'right' }}>1 00</td>
            </tr><tr>
              <td colSpan={2}>Jere Langlaw</td>
              <td colSpan={2} style={{ textAlign: 'center' }}>"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25th</td>
              <td style={{ textAlign: 'right' }}>1 00</td>
            </tr><tr>
              <td colSpan={2}>Denis Langlaw</td>
              <td colSpan={2} style={{ textAlign: 'center' }}>"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25th</td>
              <td style={{ textAlign: 'right' }}>1 50</td>
            </tr><tr>
              <td colSpan={2}>Janes Thubern[?]</td>
              <td colSpan={2} style={{ textAlign: 'center' }}>"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25th</td>
              <td style={{ textAlign: 'right' }}>1 00</td>
            </tr><tr>
              <td colSpan={2}>W[?] Jerewa</td>
              <td colSpan={2} style={{ textAlign: 'center' }}>"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25th</td>
              <td style={{ textAlign: 'right' }}>4 00</td>
            </tr><tr>
              <td colSpan={2}>[margin note] by Stuart [end note]<br />James Jerewa</td>
              <td><br />Nov th 7th</td>
              <td colSpan={2} style={{ textAlign: 'right' }}><br />5 00</td>
            </tr><tr>
              <td style={{ textAlign: 'center' }}>"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"</td>
              <td></td>
              <td colSpan={2} style={{ textAlign: 'center' }}>"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8th</td>
              <td style={{ textAlign: 'right' }}>20 00</td>
            </tr>
          </tbody>
        </table>
        <br /><br />

        <PageNumber num={137} />
        <p>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>Ships account at Sydney C B</td>
              </tr>
              <tr>
                <td>Sept</td>
                <td>th 30</td>
                <td>Four brooms fifty cents</td>
                <td style={{ textAlign: 'right' }}>50</td>
                <td>&nbsp;cents</td>
              </tr><tr>
                <td style={{ textAlign: 'center' }}>"</td>
                <td style={{ textAlign: 'center' }}>"</td>
                <td>one pece of hardwood goice for cleats</td>
                <td style={{ textAlign: 'right' }}>50</td>
              </tr><tr>
                <td style={{ textAlign: 'center' }}>"</td>
                <td style={{ textAlign: 'center' }}>"</td>
                <td>One dozen gib hanks</td>
                <td style={{ textAlign: 'right' }}>75</td>
              </tr><tr>
                <td style={{ textAlign: 'center' }}>"</td>
                <td style={{ textAlign: 'center' }}>"</td>
                <td>three deck buckets seventy five</td>
                <td>2 25</td>
              </tr><tr>
                <td>Oct</td>
                <td>th 7th</td>
                <td>Blacksmith bill for hooks and thimbals anchor</td>
                <td>1 00</td>
              </tr><tr>
                <td style={{ textAlign: 'center' }}>"</td>
                <td style={{ textAlign: 'center' }}>"</td>
                <td>kees and Bolts for Windless</td>
                <td>1 06</td>
              </tr><tr>
                <td style={{ textAlign: 'center' }}>"</td>
                <td style={{ textAlign: 'center' }}>"</td>
                <td>for seting glass in skylights</td>
                <td style={{ textAlign: 'right' }}>50</td>
              </tr><tr>
                <td></td>
                <td></td>
                <td>Paid half Pilotage in[?] and out</td>
                <td>6 10</td>
              </tr><tr>
                <td></td>
                <td></td>
                <td>Paid for 4 bush Potatoes</td>
                <td>2 50</td>
              </tr>
            </tbody>
          </table><br /><br />
        </p>

        <PageNumber num={138} />
        <p>[in left margin, signature with flourishes] Vernon Locke [end note]
        </p>
        <p>the Burial at Sea<br />
          <br />
          <table>
            <tr>The Solemn words are said..</tr>
            <tr>Let the sea receive the dead</tr>
            <tr>in this vast unfathomed bed</tr>
            <tr><td>Until time shal be no more..</td>
              <td colSpan={2} style={{ textAlign: 'right' }}>1</td></tr>
            <tr>The frothing of a wave,</tr>
            <tr>And the good, the kind, the brave,</tr>
            <tr>Is in his ocean grave,</tr>
            <tr><td>all his storms of life are o'er</td>
              <td colSpan={2} style={{ textAlign: 'right' }}>2</td></tr>
            <tr>His shipmates stare</tr>
            <tr>With iyes of dull and long surprise</tr>
            <tr>That whare their comrade lyes</tr>
            <tr><td>Not a trace should now be seen..</td>
              <td colSpan={2} style={{ textAlign: 'right' }}>3</td></tr>
            <tr>The waves still rool &amp; leap</tr>
            <tr>on th chamber of his sleep,</tr>
            <tr>Down down in the great deep</tr>
            <tr><td>as though he had never been</td>
              <td colSpan={2} style={{ textAlign: 'right' }}>4</td></tr>
            <tr>His ship mates walk away</tr>
            <tr>and in hoarse whispers say</tr>
            <tr>“God rest him” so they pray,</tr>
            <tr><td>Who doubts their prayer is heard</td>
              <td colSpan={2} style={{ textAlign: 'right' }}>5</td></tr>
            <tr>When seated at their mess</tr>
            <tr>They find one face the less</tr>
            <tr>Each shows his kind distress</tr>
            <tr><td>Thogh hee does not speak a word</td>
              <td colSpan={2} style={{ textAlign: 'right' }}>6</td></tr>
            <tr>Some think that when again,</tr>
            <tr>They croos that restless maine,</tr>
            <tr>They will look and look in vain</tr>
            <tr><td>For their shipmates plce of rest</td>
              <td colSpan={2} style={{ textAlign: 'right' }}>7</td></tr>
            <tr>and some will sadly sigh,</tr>
            <tr>an wish that when they dye</tr>
            <tr>in churchyard they may lie.</tr>
            <tr><td>With those they have loved best</td>
              <td colSpan={2} style={{ textAlign: 'right' }}>8</td></tr>
            <tr>Death will not come and go</tr>
            <tr>Without his fitting woe,</tr>
            <tr>Methinks tis doubly so</tr>
            <tr><td>When he meets us on the sea</td>
              <td colSpan={2} style={{ textAlign: 'right' }}>9</td></tr>
            <tr>The world is then so small</tr>
            <tr>a ship contains it all</tr>
            <tr>The dead man neath the pall</tr>
            <tr><td>how large a part was he</td>
              <td colSpan={2} style={{ textAlign: 'right' }}>10</td></tr>
          </table><br /><br />
        </p>

        <PageNumber num={139} />
        <p><span style={{ textAlign: 'center', fontSize: '120%', display: 'block' }}>Cheer Boys Cheer</span>
          1st<br />
          Cheer Boys Cheer no more of idle sorrow<br />
          Courage true hearts shall lead us on our way<br />
          Hope points before and shows a bright tomorrow<br />
          Let us forget the darkness of today<br />
          Fare well England much as we may love thee:<br />
          We'll dry the tears that we have shed before<br />
          Why should we weep to sail in search of fortune<br />
          So farewell England farewell for evermore
          Chorus<br />
          Cheer Boys Cheer for Country mother Country<br />
          Cheer Boys Cheer united heart &amp; hand<br />
          Cheer Boys Cheer there's wealth for honest labour<br />
          Cheer Boys Cheer for the new &amp; happy Land<br />
          2nd<br />
          Cheer Boys Cheer  the steady breeze is blowing<br />
          To float us freely o'er the oceans Breast<br />
          The world will follow in the track we're going<br />
          The star of Empire glitters in the West<br />
          Here we've had toil &amp; little to reward it<br />
          There shall plenty smile upon our pain<br />
          Ours shall be the prairie &amp; the Forest<br />
          And boundless meadows ripe with golden grain
          Chorus</p>
        <p style={{ textAlign: 'center' }}>Vernon Lock Esq<br />
          Sept 21st/55<br />
          Rob't Thomson Sept 21st/55
          <br /><br />
        </p>
        <hr />
        <PageNumber num={140} />
        <p><h3 style={{ textAlign: 'center', marginBottom: -12 }}>Log Book of the Brig Sonora</h3></p>
        <table>
          <tbody>
            <tr>
              <td>H<br />
                1<br />
                2<br />
                3<br />
                4<br />
                5<br />
                6<br />
                7<br />
                8<br />
                9</td>
              <td>R[?]<br />
                4<br />
                4<br />
                4<br />
                5<br />
                5<br />
                5<br />
                5<br />
                5<br />
                5</td>
              <td style={{ verticalAlign: 'top' }}>Y</td>
              <td style={{ verticalAlign: 'top' }}>Course<br />NW</td>
              <td style={{ verticalAlign: 'top' }}>Wind&nbsp;<br />SW</td>
              <td style={{ verticalAlign: 'top' }}>Remark on board<time dateTime="1855-11-30"> Nov. 30th 1855</time><br />
                First part of these 24<br />
                hours blows heavy from<br />
                the South West<br />
                at 12 tacked Ship an<br />
                Stood to the north<br />
                west <br />
                midle and Later<br />part the same</td>
            </tr><tr>
              <td>10<br />
                11</td>
              <td>5<br />
                5</td>
              <td>&nbsp;</td>
              <td colSpan={2} style={{ textAlign: 'left', verticalAlign: 'top' }}>[unclear]</td>
              <td style={{ verticalAlign: 'top' }}>So ends these 24 hours</td>
            </tr><tr style={{ borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: '3px' }}>
              <td style={{ borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: 'thin', borderBottomStyle: 'solid' }}>12</td>
              <td style={{ borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: 'thin', borderBottomStyle: 'solid' }}>5</td>
              <td style={{ borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: 'thin', borderBottomStyle: 'solid' }}>&nbsp;</td>
              <td style={{ borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: 'thin', borderBottomStyle: 'solid' }}>&nbsp;</td>
              <td style={{ borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: 'thin', borderBottomStyle: 'solid' }}>&nbsp;</td>
              <td colSpan={4} style={{ borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: 'thin', borderBottomStyle: 'solid' }}>Remark <time dateTime="1855-12-01">December the 1st 1855</time></td>
            </tr><tr>
              <td>
                1<br />
                2<br />
                3<br />
                4<br />
                5<br />
                6<br />
                7<br />
                8<br />
                9<br />
                10<br />
              </td>
              <td>
                5<br />
                5<br />
                5<br />
                5<br />
                5<br />
                5<br />
                5<br />
                5<br />
                5<br />
                5<br />
              </td>
              <td>&nbsp;</td>
              <td style={{ verticalAlign: 'top' }}>Course<br /><br />SW</td>
              <td style={{ verticalAlign: 'top' }}>Wind&nbsp;<br /><br />NW</td>
              <td style={{ verticalAlign: 'top' }}>
                <br />These 24 comences with<br />
                heavy gales from North<br />
                at am tacked ship<br />
                and stood to the
                <br />South West<br />
                <br />
                Midle and Later<br />
                part the Same<br />
                So ends these 24 hours</td>
            </tr><tr>
              <td>11</td>
              <td>5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr> <tr>
              <td>12</td>
              <td>5</td>
              <td style={{ borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: 'thin', borderBottomStyle: 'solid' }}>&nbsp;</td>
              <td style={{ textAlign: 'center', borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: 'thin', borderBottomStyle: 'solid' }}>"</td>
              <td style={{ textAlign: 'center', borderBottom: 'underline', borderBottomColor: '#2d2624', borderBottomWidth: 'thin', borderBottomStyle: 'solid' }}>"</td>
              <td colSpan={4}>Remark <time dateTime="1855-12-02">December the 2nd 1855</time></td>
            </tr><tr>
              <td style={{ verticalAlign: 'top' }}>
                1<br />
                2<br />
                3<br />
                4<br />
                5<br />
                6<br />
                7<br />
                8<br />
                9<br />
                10<br />
                11<br />
                12<br />
              </td>
              <td style={{ verticalAlign: 'top' }}>
                4<br />
                4<br />
                4<br />
                4<br />
                4<br />
                4<br />
                4<br />
                4<br />
                4<br />
                4<br />
                4<br />
                4</td>
              <td colSpan={3} style={{ transform: 'rotate(180deg)', textAlign: 'right' }}>E. L. Locke</td>
              <td style={{ verticalAlign: 'top' }}>
                <br />These 24 hours<br />
                Comences with heavy<br />
                Gales from North West<br />
                <br />
                at Midnight made<br />
                Liverpool Light bearing<br />
                North Dist 7 miles<br />
                tacked ship at 2 AM.<br />
                a [sic] stood to the South<br />
                west Later part blows<br />
                very heavy from the
                North west<br />
                No obs this day</td>
            </tr>
          </tbody>
        </table><br /><br />

        <PageNumber num={141} />
        <p>Bark Vernon V Locke, Master from Boston to trieste <time dateTime="1856-10-15">Oct 15 '56</time><br />at 6 oclock A. M. got underway and proceeded to Sea at 8 the Pilot Left us weather cloudy wind north East
        </p>
        <p><aside><time dateTime="1856-10-15">Oct 16th</time></aside>
          Lat 42=10 Long=20
          winds ENE cloudy and very cold Latter part wind hauls to South East and at times Bafling to the westward
        </p>
        <p><aside><time dateTime="1856-10-17">Oct 17th</time></aside>
          Lat 40=31 Long 69=00
          first part has Light Brezes from westward all posible sail set at 10 oclock PM got soundings on Georgesen[?] Shoal in 7 &amp; 10 fahoms water Latter part fresh gales from SSE and some raine Barometer falls fast I Expect a gale from the South East
        </p>
        <p><aside><time dateTime="1856-10-18">Oct 18th</time></aside>
          Lat 41=40 Long 67=30
          first part blows heavy from East midle part changeable from East to South East by East latter part blows heavy from South East
        </p>
        <p><aside><time dateTime="1856-10-19">Oct 19th</time></aside>
          Lat 42=38 Long 64=30
          comences with heavy gales from East to South East Latter part moderate wind Bafling and Some raine Brometer still low as change
        </p>
        <p><aside><time dateTime="1856-10-20">Oct 20th</time></aside>
          Lat 41=20 Long 62=10
          these 24 hours comence with Light airs from west northerly Latter part fresh gales from North west Barometer Rises fast
        </p>
        <p><aside><time dateTime="1856-10-21">Oct 21st</time></aside>
          Lat 40=35 Long 57=25
          comences with wind North East fresh gales &amp; continues so throughout Brometer 30-00 curent E two knots per hour
        </p>
        <p><aside><time dateTime="1856-10-22">Oct 22nd</time></aside> Lat 41=30 Long 51=10
          winds NE fresh gales curent 1 knot per h east-South East Barometer 29[?]-9
        </p>
        <p><aside><time dateTime="1856-10-23">Oct 23</time></aside>
          Lat 41=00 Long 45=00 by DR
          winds North East fresh gales midle &amp; Latter part Hevy gales no obs this day<br /><br />
        </p>

        <PageNumber num={142} />
        <p>Bark Vernons Fourth day out <FloatingCoordinates>Lat 42=38 Long 64=30</FloatingCoordinates>
        </p><aside><time dateTime="1856-10-24">Oct 24th</time></aside><p>
          Lat 41=02 Long 44=15
          making a distance of Eight hundred &amp; sixty four miles in four days [unclear] wind North East Blowing hevy Barometer 29 [unclear] air 60 00 watte[r] 40 00
        </p>
        <p><aside><time dateTime="1856-10-25">Oct 25</time></aside>
          41=50 37=00
          wind South fresh gales and cloudy  Barometer 29 00 thermonetr 60 00 wattr 40 00 a great quantity of Porpoises all this day
        </p>
        <p><aside><time dateTime="1856-10-26">Oct 26th</time></aside>
          Lat 42=30 Long 32=30
          wind South west fresh gales and heavy rain Showrs Latter part more moderate Bar 29 - -5
        </p>
        <p><aside><time dateTime="1856-10-27">Oct 27</time></aside>
          Lat 42=25 Long 30=10
          wind South West &amp; South by West Latter part fresh gales &amp; clear weather Bar 29 9[?]
        </p>
        <p><aside><time dateTime="1856-10-28">Oct 28th</time></aside>
          Lat 41=30 Long 25=40
          wind South by west and cloudy all sail sat Latter part thick &amp; hazy &amp; bafling winds
        </p>
        <p><aside><time dateTime="1856-10-29">Oct 29</time></aside>
          Lat 41=00 Long 26=03
          winds South Light &amp; Bafling throughout Bar 29 9 watter 49 00 air 60 00
        </p>
        <p><aside><time dateTime="1856-10-30">Oct 30th</time></aside>
          Lat 40=41 Long 21=30
          these 24 houres moderate breses from the South West but cloudy Ends with some rain
        </p>
        <p><aside><time dateTime="1856-10-31">Oct 31st</time></aside>
          Lat 39 51 Long 19 20
          comences with heavy gales from South west and west south west midle &amp; latt[er] part the Same Latter part Sprund the Mainyard got it down and fished it
        </p>
        <p><aside><time dateTime="1856-11-01">Novm 1st</time></aside>
          Lat 39 30 Long15 10 West
          these 24 hours has heavy gales from the South West Lattr part more moderate. Ends with raine<br /><br />
        </p>

        <PageNumber num={143} />
        <p><Styled.Date><time dateTime="1856-11-02">November 2nd, 56</time></Styled.Date>
          Lat 38=30 Long 13=20<br />
          first part Light airs from South west and cloudy Barometer 30 air 50 5
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '16px' }}><time dateTime="1856-11-03">Novm 3</time></span>
          Lat 36=40 Long 10=40<br />
          first Blows heavy from north East midle and Lattr part more moderate wind canting Easterly no observation this day
        </p>
        <p><Styled.Date><time dateTime="1856-11-03">Novm 4th</time></Styled.Date>
          Lat 35[?]=30 Long 08=55<br />
          these[?] 24 hours comences with cloudy weathr wind north East Bafling
          Barometer 30 5
        </p>
        <p><Styled.Date><time dateTime="1856-11-03">November 5th</time></Styled.Date>
          Lat 36=10 Long 06=30<br />
          twenty days out from Boston Jibraller in Sight<br />
          So Ends this Log of pas[s]age out
        </p>
        <p>Left Strates Gibralter <time dateTime="1857-01-29">January 29th 1857</time><br />
          Light Breses from the Eastward Bound to Boston U. S. A.
        </p>
        <p><Styled.Date><time dateTime="1857-01-30">Jany 30th</time></Styled.Date>
          Lat 36=30 Long [symbol]6=10
          these 24 hours comences with wind variable an Squaly from South East to North East
        </p>
        <p><Styled.Date><time dateTime="1857-01-31">Jany 31st</time></Styled.Date>
          Lat 36=00 Long [symbol]8=20
          Barometer 30 [symbol] air 55
          wind variable from E. to N. &amp; NE. all posible Sail Set to advantag
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '26px' }}><time dateTime="1857-02-02">Feb 2d</time></span>
          Lat 35=40 &amp; Long 12=40
          west winds north &amp; north East throughout these 24 hours heavy Se from the Eastwd Barometer 30 air 55 watter 45
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '26px' }}><time dateTime="1857-02-03">Feb 3d</time></span>
          Lat 35=50 Long 15=20 west
          heavy Breeses from north west &amp; north Stron[g] curent Seting East 1&frac12; Knots per hour<br /><br />
        </p>

        <PageNumber num={144} />
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Homeward Bound from Gibralter</p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '26px' }}><time dateTime="1857-02-03">Feb 3d</time></span>
          C Lat [unclear] Long [unclear]<br />
          all these 24 hours under close reefed topsa[ils] wind north by west
          Barometer [symbol]29 [symbol]5
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '20px' }}><time dateTime="1857-02-04">Feb 4th</time></span>
          Lat 34=30 Long 24=30<br />
          thes 24 hours has hea[v]y gales from north East throught
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '34px' }}><time dateTime="1857-02-05">Feb 5</time></span>
          Lat 33=50 Long 28=50<br />
          [t]hese 24 hours blows hevy from north and heavy Squalls throughout
          Barometer low
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '20px' }}><time dateTime="1857-02-06">Feb 6th</time></span>
          Lat 33=59 Long 31=57 west<br />
          these 24 hours continue with a gale from the north East Latter part very rough
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '20px' }}><time dateTime="1857-02-07">Feb 7th</time></span>
          Lat 34=30 Long 35=20<br />
          this 24 wind from north as usual continues rough &amp; varies at times to Eastward I hope so[o]n to have a change of wind as we [unclear] Bee foul of Bermuda
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '20px' }}><time dateTime="1857-02-08">Feb 8th</time></span>
          Lat 35=20 Long 39=50<br />
          these 24 hours has wind more moderate from north East but squaly appearences in the South East
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '20px' }}><time dateTime="1857-02-09">Feb 9th</time></span>
          Lat 36=50 Long 43=10<br />
          these 24 hours wind Bafling from north East South East and rain heavy at times Ends with with to South west
          Baromete[r] 29 air 51 watte[r] 40
        </p>
        <p><Styled.Date><time dateTime="1857-02-10">Feb 10th</time></Styled.Date>
          Lat 37=40 Long 48=05<br />
          wind west north west Still 11 Days out hauling to northward and continues to Blow hea[v]y although hauling[?] fast Lattr part wind north<br /><br />
        </p>

        <PageNumber num={145} />
        <p><Styled.Date><time dateTime="1857-02-11">Feb 11th 1857</time></Styled.Date>
          Lat 39=00 Long 49=50<br />
          the wind goes round the cumpas as regular as the tide Ebs and flows and continues to Blow heavy During its Shifting Latter part wind South hauling westerly
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '28px' }}><time dateTime="1857-02-12">Feb 12</time></span>
          Lat 39=50 Long 52=35<br />
          wind north west canting northerly and very cold air 20 Barometer 29 watter 60 Latter part wind East North East
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '28px' }}><time dateTime="1857-02-13">Feb 13</time></span>
          Lat 40=40 Long 55=50<br />
          air very cold Ship making muc[h] Ice wind north Easterly snowing an[d] showers of sleet at times Latter part blows heavy f north Es
        </p>
        <p><Styled.Date><time dateTime="1857-02-14">Feb 14th</time></Styled.Date>
          Lat 41=05 Long 60=00<br />
          wind north East hauling to East midle part wind South East Latter part South &amp; west S. W. &amp; hauling
        </p>
        <p><Styled.Date><time dateTime="1857-02-15">Feb 15th</time></Styled.Date>
          Lat 42=20 Long 64=30<br />
          wind north west hauling north Easterly air very cold ship making much ice &amp; under singl reeft Topsails
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '28px' }}><time dateTime="1857-02-16">Feb 16</time></span>
          Lat 42=10 Long 67=40<br />
          wind north East Blowing a gale Latte[r] part more moderate Ship covered with ice
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '28px' }}><time dateTime="1857-02-17">Feb 17</time></span>
          Lat 42=10 Long 70=20<br />
          Boston Land in sight at 4 PM took a pilot at 12 &amp; came to anchor in Boston Harbor<br />
          So Ends this pasage<br /><br />
        </p>

        <PageNumber num={146} />
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Barque Vernon Vernon Locke Master</p>
        <p><Styled.Date><time dateTime="1857-03-13">March 13</time></Styled.Date>
          First day out Lat 42=07 Long 70=04<br />
          Cape cod in Sight wind N west very cold Baromete[r] 29 <sup><span style={{ textDecoration: 'underline' }}>5</span></sup>&nbsp; air 20&deg;<br />wattr 40
        </p>
        <p><Styled.Date><time dateTime="1857-03-14">March 14th 1857 </time></Styled.Date>
          Lat 37=20 Long 66=32<br />
          Barometer 29 [unclear]&nbsp;&nbsp;air 50&nbsp;&nbsp;wattr 50<br />
          wind north west very cold
        </p>
        <p><Styled.Date><time dateTime="1857-03-15">March 15</time></Styled.Date>
          Lat 37=30 Long 64=50<br />
          Bar 30&nbsp;&nbsp;air 60&nbsp;&nbsp;water 70<br />
          winds variable from North west to South west Sone &amp; raine
        </p>
        <p><Styled.Date><time dateTime="1857-03-16">March 16</time></Styled.Date>
          Lat 36=10 Long 63=15<br />
          Barometer 30 <sup><span style={{ textDecoration: 'underline' }}>5</span></sup>&nbsp;&nbsp;air 60 <sup><span style={{ textDecoration: 'underline' }}>5</span></sup>&nbsp;&nbsp;water 70<br />
          wind South west and cloudy
        </p>
        <p><Styled.Date><time dateTime="1857-03-17">March 17</time></Styled.Date>
          Lat 34=50 Long 60=00<br />
          Barometer 30 <sup>00[?]</sup>&nbsp;&nbsp;water 70&nbsp;&nbsp;air 70<br />winds South with some raine Later part heavy Squall from NW from that to west
        </p>
        <p><Styled.Date><time dateTime="1857-03-18">March 18</time></Styled.Date>
          Lat 33=57 Long 57=30<br />
          wind South west &amp; cloudy all prudent Sail Set
        </p>
        <p><Styled.Date><time dateTime="1857-03-19">March 19th</time></Styled.Date>
          Lat 32=55 Long 55=10<br />
          Barometer 30&nbsp;&nbsp;air 69&nbsp;&nbsp;water 60<br />
          wind South west Strong Brezes curent westerly 1/2 knots per hour
        </p>
        <p><Styled.Date><time dateTime="1857-03-20">March 20</time></Styled.Date>
          Lat 31=50 Long 49=10<br />
          wind South west and raning Latter part moderate &amp; Bafling
        </p>
        <p><Styled.Date><time dateTime="1857-03-21">March 21st</time></Styled.Date>
          Lat 30=15 Long 46=20<br />
          wind South west and cloudy<br /><br />
        </p>

        <PageNumber num={147} />
        <p style={{ textAlign: 'right' }}>[note in pencil] Boston towards Cape of Good Hope<br />[end note]
        </p>
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>From Boston towards Cape Good Hope</p>
        <p><Styled.Date><time dateTime="1857-03-22">March 22d</time></Styled.Date>
          Lat 28=10 Long 42=20<br />
          Barometer 30.5 air 60 water 58<br />
          at 9 P.M. Spoke a Barque Bound to Balimore Showind austrian coulors
        </p>
        <p><Styled.Date><time dateTime="1857-03-23">March 23d</time></Styled.Date>
          Lat 27=20 Long 38=10<br />
          Barometer 30.5 air 70 &amp; 60 water 65<br />
          wind Bafling from South to South South East But soon hauls to North East Steady fine Breeses Later all Sails Sat that can posibley be [unclear] of any advantage
        </p>
        <p><Styled.Date><time dateTime="1857-03-24">March 24th</time></Styled.Date>
          Lat 24=20 Long 36=30<br />
          Barometer 30 Air 70 water 70<br />
          Wind North East fresh gales and pleasant weather the Vernon Slide along as thoug nothing conserned her averedgeing [unclear] 250 &amp; 240 Every 24 hours as you see by her Log She has made 300 in 24 this pasage
        </p>
        <p><Styled.Date><time dateTime="1857-03-25">March 25th</time></Styled.Date>
          Lat 21=10 Long 35=00<br />
          Barometer 30.00 air 70 water 70<br />
          wind East North East &amp; fre[q]uent Showers of rain a Ship in Sight Standing Westerly
        </p>
        <p><Styled.Date><time dateTime="1857-03-26">March 26th</time></Styled.Date>
          Lat 18=05 Long 33=07<br />
          Barometer 30 air 70 water 69.5<br />
          Wind North East Variable and Light pased Saw two Ships Bound to East ward no obs this day
        </p>
        <p><Styled.Date><time dateTime="1857-03-27">March 27</time></Styled.Date>
          Lat 15=30 Long 32=20<br />
          Bar 30.5 air 71 water 69.5<br />
          Wind North East Light and Variable calm at times with Showers of rain and hea[v]y thunder, clouds heavy in the South apearences of South East trades<br /><br />
        </p>

        <PageNumber num={148} />
        <p style={{ textAlign: 'left', fontSize: '120%', marginBottom: -12 }}>Barque Vernon, Vernon Locke Master to South Africa</p>
        <p><Styled.Date><time dateTime="1857-03-28">March 28th</time></Styled.Date>
          Lat 13=20 Long 31=30<br />
          Barometer 30.5 Air 70.7 Water 69.9<br />
          Winds North East by East Bafling and Cloudy thunder and Lightning -- and frequent Showers of rain, Later has apearences of SE trades passing Swiftly South West Monsoon Clouds
        </p>
        <p><Styled.Date><time dateTime="1857-03-29">March 29</time></Styled.Date>
          Lat 10=15 Long 31=30<br />
          Bar 31.0 Air 70.9 Water 70.5<br />
          Winds North East Bafling to South East at times &amp; as far as South at times Some raine and pasing clouds
        </p>
        <p><Styled.Date><time dateTime="1857-03-30">March 30th</time></Styled.Date>
          Lat 07=25 Long 30=21 Dr [Rcing]<br />
          Barometer 30 Air 70.5 Water 69<br />
          Wind South East and East Bafling Strong Brezes at times
        </p>
        <p><Styled.Date><time dateTime="1857-03-31">March 31st</time></Styled.Date>
          Lat 04=07 Long 29=20<br />
          Barometer 30 Air 70.9 Water 69<br />
          Winds North East and Bafling Some raine
        </p>
        <p><Styled.Date><time dateTime="1857-04-01">April 1st 1857</time></Styled.Date>
          Lat 01=25 Long 28=40<br />
          Barometer 30.9 Air 71 Water 70.9<br />
          Wind East North East Bafling calm at times with rain Showers two Ships in Sight Standing South
        </p>
        <p><Styled.Date><time dateTime="1857-04-02">April 2nd</time></Styled.Date>
          Lat 38 miles South Long 28=45<br />
          Barometer 30.5 air 71 Water 70<br />
          Wind South East &amp; calm at times &amp; Bafling with pasing Clouds crosed the Equator at 9 oclock AM 19 days &amp; 10 hrs Not So Bad after all the calms we have had this 5 or Six days four thousand One hundred miles per Log including calm days and all She has made 8 Knots/hour on average the whole pasage<br /><br />
        </p>

        <PageNumber num={149} />
        <p>[note in top margin, different handwriting]<br />
          From Boston United States, South Africa<br />[end note]
        </p>
        <p style={{ fontSize: '120%', marginBottom: -12 }}>From Boston United States to South Africa
        </p>
        <p><span style={{ marginLeft: '-74px', paddingRight: '14px' }}><time dateTime="1857-04-03">April 3d</time></span>
          Lat 03=45 South Long 29=52<br />
          Barometer 30 Air 70.5 Water 70<br />
          Wind South East by South fresh gales with frequent Showers of rain Midle and Latter part We Saw two clipper Ships in company first and middle part but wee can out Sail them Later part they are hull Down to Leeward all three of us [unclear] By the wind nothing more of importance this 24 hr than theare is a very heavy Sea Runing from South West Ship Labours heavy
        </p>
        <p><Styled.Date><time dateTime="1857-04-04">April 4th</time></Styled.Date>
          Lat 05=50 Long 29=50<br />
          Barometer 30.9 Air 70.5 Water 70.9<br />
          Wind South East and a  heavy head Sea from South West  Ship Labours very heavy frequent Showers of rain and pasing Clouds from South East curent west 1/2 knot per hour atmosphere thick &amp; hazy great quantitiys of flying fish During Later part pleasant and warm throughout
        </p>
        <p><Styled.Date><time dateTime="1857-04-05">April 5th</time></Styled.Date>
          Lat 07=10 Long 30=00<br />
          Barometter 30.9 air 70.7 Water 70.7<br />
          Wind South East pleasant and frequent Rain Showers midl part Moderate with Bafling and pasing Clouds
        </p>
        <p><Styled.Date><time dateTime="1857-04-06">April 6th</time></Styled.Date>
          Lat 09=45 Long 30=04<br />
          Barometer 29 Air 89.5 Water 75.9<br />
          Wind South East fresh gales But cloudy weather, Some rain at times with heavy Gusts of wind when shall I get out of the South East trades I am afraid I shall bee a Long way South before making much Eastern<br /><br />
        </p>

        <PageNumber num={150} />
        <p>
          <Styled.Date><time dateTime="1857-04-07">April 7th 1857</time></Styled.Date>Barque Vernon from Boston <span style={{ float: 'right', paddingRight: '20px', transform: 'rotate(-15deg)' }}>Vern</span>
          <br />
          Lat 09=50  Long 3=10 W<br />
          Barometer 30" Air 79.9  Water 70.5<br />
          Wind South East and moderate Heavy Sea runing from the South East Midle part the same Later part fresh Gales from south East &amp; very heavy Sea runing Sea roles in from Eastward with a Southerly cross Sea at times
        </p>
        <p><Styled.Date><time dateTime="1857-04-08">April 8th</time></Styled.Date>
          Lat 10=40  Long 30=20<br />
          Barometer 31"5  Air 80 9"  Water 70 5"<br />
          wind South and cloudy Midle part varies to From South to South East a very heavy Sea roling in from the South Later part very heavy clouds passing with Some raine and Heavy gusts of wind, at times calm So ends these 24 hrs
        </p>
        <p><Styled.Date><time dateTime="1857-04-09">April 9th</time></Styled.Date>
          Lat 13=10.8  Long 31<br />
          Barometer 30 Air 79 5 Water 75.5<br />
          Winds South West Bafling the old South East Swell cotinues roling home and heaving the wind from out our Sails When Shal I get a change of wind  Im geting uneasy and whoo will wander at my Saying So after Seeing that from 10 North to 10 South I had the wind South of East to th Line and to 10 South I have had the wind South South East hard luck this time But I will trust to Leut Mury &amp; Bravida[?] if newport Should Bring me up
        </p>
        <p><Styled.Date><time dateTime="1857-04-10">April 10th</time></Styled.Date>
          Lat 16=00 Long 32 30<br />
          Barometer 30" Air 79" Water 77<br />
          Wind South Est midle &amp; late part wind variable from South East to South raining at times Later part Wind variable <span style={{ float: 'right', display: 'block' }}>Vernon</span><br /><br />
        </p>

        <PageNumber num={151} />
        <p><span style={{ textAlign: 'right', display: 'block' }}>[different handwriting] Vernon Locke<br />Good Hope [end note]</span>

          <aside style={{ fontSize: '110%', textAlign: 'center', paddingTop: '12px' }}>Locke</aside><br />
          <aside style={{ fontSize: '110%', textAlign: 'center', paddingTop: '8px' }}>Master</aside>
          <span style={{ fontSize: '125%', textAlign: 'left' }}>Towards Cape Good Hope</span>
        </p>
        <p><Styled.Date><time dateTime="1857-04-10">April 10th</time></Styled.Date>
          Lat 17=00 Long 33=10<br />
          Barometer 30” Air 70” Water 70<br />
          Wind South East Bafling &amp; calm at times with frequent showers of Rain apearences of a shift of wind Midle part Bafling light airs varying from East to Sout East but the old South East Swell continues as heavy as ever the horison is very Bright in the North West and sun sets clear in the Evening  apearences of a north west wind wind continues Bafling &amp; light
        </p>
        <p><Styled.Date><time dateTime="1857-04-11">April 11th</time></Styled.Date>
          Lat 17=30 Long 33=50<br />
          Barometer 30.5 Air 79.9 Water 70<br />
          Wind South East what theare is of it Calm the most part of the time &amp; raine Squall and gusts of wind at times from all quarters of th cumpas Later part the same when in gods name will I get out of these South East doldrums geting Short of water that is any good &amp; Short of pasiene[?] Likewise no Sines of a change up South East &amp; off South west Calms&nbsp;&nbsp;&nbsp;Calms  throughout
        </p>
        <p><Styled.Date><time dateTime="1857-04-12">April 12th</time></Styled.Date>
          Lat 19=10 Long 35=10<br />
          Barometer 30 Air 78.5 in the sun Water 70.4<br />
          Wind none and god Knows when wee shal have any for I do not know, wee are drifting about the South atlantic for the Benefit of the fish that play around us calm calm for ever Later part Light airs from north East and as faint as ever this kind of work Looks Like Sabeth Days in Been Town Saylors Laying about Decks taking comfort<br />
          <br />
          [noted in left margin] Sunday Throughout<br /><br />
        </p>

        <PageNumber num={152} />
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>Barque Vernon V Locke Master</p>
        <p><Styled.Date><time dateTime="1857-04-13">April 13th</time></Styled.Date>
          Lat no obs  Long  “  “<br />
          first part of these 24 hours has Dark cloudy weather wind moderate Bafling from South East to North East Raining at times Midle part more Wind than wee have had for five days and that is not a Six Knot Breese crew all imployed in various Jobs on riging = clouds going in all Directions which causes the wind to vary so rapidly all well on board Sun Sets clear wind cants to NE So Ends these 24 hours
        </p>
        <p><Styled.Date><time dateTime="1857-04-14">April 14th</time></Styled.Date>
          Lat 19 37 Long 23 10<br />
          Barometer 30.5 Water 70.9<br />
          Wind North East Light and variable crew imployed in various jobs about decks Midel part moderate and pasing clouds I think I have got out of the doldrums after a Seige of 7 or 10 days but the wind is very light yet I have poor incouragement for making a Short pasage this time 10 days out of a 50 days pasage is not pleasant at all Barometer rised fast from twelve to two She has rose from 30.5 to 31.4 wind increases a little from the north East  thank god for that Littles[t] one of the Small gifts Thankfuly received
        </p>
        <p><Styled.Date><time dateTime="1857-04-15">April 15th</time></Styled.Date>
          first part of this 24 hours moderate<br />
          Barometer 30 8 water 69 5 air 70 4<br />
          wind North East moderate and cloudy with frequent Showers of raine midle and later part pasing clouds and Squaly two Ship in Sight Steering to the South West probably bound to california<br /><br />
        </p>

        <PageNumber num={153} />
        <p style={{ textAlign: 'left', fontSize: '125%', marginBottom: -12 }}>From Boston Towards South Africa</p>
        <p><Styled.Date><time dateTime="1857-04-16">April 16th</time></Styled.Date>
          Lat 21=10 S Long 22=25<br />
          these 24 hours comences with cloudy weath and frequent Squals of rain and wind Barometer 31 5/10 thermometer 70 4/10 water 70
          wind the Later part is from the north East and cloudy  one ship in sight standing to south west So ends all well on board
        </p>
        <p><Styled.Date><time dateTime="1857-04-17">April 17th</time></Styled.Date>
          Lat 22=36  Long 20=50<br />
          Barometer 30 5/10 Air 70 9/10 Water 69 [9/10]<br />
          Wind north East fresh gales and pleasant weather, all posible Sail Set to advantage crew all imployed in turning in riging &amp; at midle part a fresh and increasing Brease Later part much the same and frequent Squalls of raine Ship on the starboard Beam Steering South west Suposed to be a californidn [sic] crew all well on Board
        </p>
        <p><Styled.Date><time dateTime="1857-04-18">April Saturday 18</time></Styled.Date>
          Lat 23=10S Long 18=50W<br />
          Barometer 30 5/10 air 70 Water 69 7/10<br />
          wind from north East to north west Bafling and cloudy But continues a strong Breese making and taking in sail as required Later part keeps crew constatly squareing and Bracing yards and Seting and taking in fore and aft Sails wind very changeable
        </p>
        <p><Styled.Date><time dateTime="1857-04-19">April 19th</time></Styled.Date>
          Lat 24=20 Long 17=45<br />
          Wind north East very light and bafling midle part calm &amp; heavy raine Showers Later part the same, when Shal I get a wind or a Six Knot Breese this is Discouraging
        </p>
        <p><Styled.Date><time dateTime="1857-04-20">April 20th</time></Styled.Date>
          Lat 25=25 Long 16=50<br />
          Barometer 31 9  Water 70  Air 75<br />
          Wind Light and Bafling from north East to South East most part calm middle part Has Light airs from South East and Later part calm calm calm ----------------------
          <span style={{ display: 'block', textAlign: 'center' }}>O what A trial have I</span><br /><br />
        </p>

        <PageNumber num={154} />
        <p><span style={{ fontSize: '125%' }}><time dateTime="1857-04-21">April 21st</time>&nbsp;&nbsp; A.D. 1857&nbsp;&nbsp; F B to S A.<br /></span>
          Lat 25=50 Long 15=50<br />
          calm Barometer keeps up to 30 with out any change but weather very changeable Both Barometers Seem to be of no use whatever notwithstanding they Both agree with Each [other] air seeme to change fast yesterday it was up to 75 to day it is 50 Later part calm and cloudy Some rain and bafles of wind from all quarters
        </p>
        <p><Styled.Date><time dateTime="1857-04-22">April 22d</time></Styled.Date>
          Lat 26=30 Long 14=50<br />
          Barometer 31 9[?] air 65.5<br />
          wind none calms throught<br />When shal I Ever get out of these Doldams Im tired of my life in a floating Prison
        </p>
        <p><Styled.Date><time dateTime="1857-04-23">April 23rd</time></Styled.Date>
          Lat 26=[50] Long 13=40<br />
          Wind bafling from South East to North East  middle and late part the same calm ----------
        </p>
        <p><Styled.Date><time dateTime="1857-04-24">April 24</time></Styled.Date>
          Lat 27=20 Long 12=30<br />
          calm calm ----------<br />
          <br />
          [illegible]
        </p>
        <p><Styled.Date><time dateTime="1857-04-25">April 25th</time></Styled.Date>
          What Shal I say calms is So impresed upon my mind that I can say nothing Else calms througout<br />
          . . . . . . . . . . . <span style={{ float: 'right', textAlign: 'right', textDecoration: 'underline 1px', textUnderlineOffset: '4px' }}>this day out of my mind</span>
        </p>
        <p style={{ clear: 'right' }}><Styled.Date><time dateTime="1857-04-26">April 26th</time></Styled.Date>
          this day Im perfectly crazy was Ever Job aflicted as Im Layd up with rhumetism and the Ship laid up with calms O that I was a share holder in th Eastern railroad and conductor <span style={{ textDecoration: 'underline 1px', textUnderlineOffset: '4px' }}>in Stead of a Ship owner &amp; master</span>
        </p>
        <p><Styled.Date><time dateTime="1857-04-27">April 27th</time></Styled.Date>
          this day wee have a change like the Irish mans fish &amp; potatoes calms<br /><br />
        </p>

        <PageNumber num={155} />
        <p><Styled.Date><time dateTime="1857-04-28">April 28th 1857</time></Styled.Date>
          Lat 27=50 South<br />
          One godsend at last a light breese from the East laying up SE by S and SSE that is within two points of our course and that is as much as I Expect for it seems as though theare was a Spell put upon me. I should Sertainly think So. if I was Supersticious But let me think why. I was Borne under a cloud and a dark one at that and in a dark night I think.
        </p>
        <p><Styled.Date><time dateTime="1857-04-29">April 29th</time></Styled.Date>
          Lat 32=00 Long 04=00 West<br />
          Moderate Breses from South East &amp; Bafling from that to North East midle part calm as usual later part rainy a long Dist to Cape Good hope and shal be this time next year at this last 10 days rate ----------<br />
          O how I Should like to have Some of those Hay Seed white livered Land Sharks who sometimes Say that captains have fine times nothing to do but sit on there narative and let the wind Blow them along I feel Sory that they canot have that pleasure Especialy Some of my calms
        </p>
        <p><Styled.Date><time dateTime="1857-04-30">April 30th</time></Styled.Date>
          this day comences with an Irish huricane straight up an down Ends the same O that I had wings I would fly from these calms and be in Cape Town in 12 hours<br />
          Barometer 30.9 Air 70  Water 70<br />
          <br />
          [noted in margin] Showers of raine at times [end note]
        </p>
        <p><Styled.Date><time dateTime="1857-05-01">Ap'l or March 1st</time></Styled.Date>
          Lat 34=00 Long 02=10 East<br />
          These 24 hours comences with cloudy weather &amp; wind from North East and bafling from that to South East and at times calm, Midle &amp; Later part Bafling and &amp; cloudy Barometer 31.9  Air 70  Water 69 all about Seems lively Except calms birds of all kinds are numerous and this afternon I caught a Dolphin all well on Board<br /><br />
        </p>

        <PageNumber num={156} />
        <p style={{ fontSize: '125%', marginBottom: -8 }}>Barque Vernon, V. Lock Master to S. Africa
        </p>
        <p><Styled.Date><time dateTime="1857-05-02">May the 2d 1857</time></Styled.Date>
          Lat 34=30 S  Long 4d East<br />
          first part of these 24 hours has pleasant weather and moderate Breses from North East Midle and later part Moderate Wind North East
          Barometer 31.9 thermometer 70.5 water 70.00
        </p>
        <p><Styled.Date><time dateTime="1857-05-03">May the 3d</time></Styled.Date>
          Lat 34=40  Long 06=20 E<br />
          These 24 hours comences with light airs from North East Bafling at times to South East &amp; East midle part brese freshens a little from North East and more Steady than formerly Later part light airs and bafling
        </p>
        <p><Styled.Date><time dateTime="1857-05-04">May the 4th</time></Styled.Date>
          Lat 34=20 Long 09=50 East<br />
          First part of these 24 hours moderate Brezes from North East weather Dull &amp; cloudy midle and later part the same with an increasing breze from North East
        </p>
        <p><Styled.Date><time dateTime="1857-05-05">May the 5th</time></Styled.Date>
          Lat 34=10 Long 13=25 East<br />
          These 24 hours comenced with Strong Brezes from North East Weather thick and cloudy with Some raine midle part the Same all hands imployed all the later part in Seting up riging and other nesesary gobs
        </p>
        <p><Styled.Date><time dateTime="1857-05-06">May the 6th</time></Styled.Date>
          Lat 34=10 Long 17=20  East<br />
          First part of these 24 hours has thick and Squaly weather wind from North East Midle &amp; later part the same but wind is increasing fast and Barometer faling from 30.5/10 to 29 9/10 Later part increases to a gale of wind took in all Light Sails furled the courses and close reefed the two top sails being with in 5 miles of Cape good hope wee have ships off shore<br /><br />
        </p>

        <PageNumber num={157} />
        <p><Styled.Date><time dateTime="1857-05-07">May the 7th/57</time></Styled.Date>
          Lat 34=05 Long 17=58<br />
          these 24 hours comences with moderate weather and a very heavy Sea runing from the North East Later part we came to anchor in table bay in 5 fathoms watter, those who might peruse these notes must think that is was writen for no other purpose than to amuse the writer in hours of Solitude after Laying here 5 days wee Proceed to algoa Bay Port Elizabeth with a Fine North West gale which port wee ariv at in 36 hours from table Bay after laying in Algoa Bay 21 days wee proceed to table Bay again and arive theare in 6 days and Lay theare 5 days more and in June 27
        </p>
        <p><Styled.Date><time dateTime="1857-06-27">June 27th/57</time></Styled.Date>
          wee weighed our anchor and Proceeded to Sea Bound to Boston U.S.A. First part of these 24 hours is modrate and fine weather Later on midnight calm wee weare obliged to Lower our boat and tow the Bark from the shore for fear of getting in the Brakers however wee made out to keep her of[f] shore and in the morning wee fortunately took a breese from the west which carried us out of the Bay Later part Light winds from the South West
        </p>
        <p><Styled.Date><time dateTime="1857-06-28">June 28th/57</time></Styled.Date>
          Lat 33=10  Long 17=20<br />
          these 24 hours comences with moderate Brezes from West all posable Sail Sat to advantage, midle and later the Same Late part we have Som rain
        </p>
        <p><Styled.Date><time dateTime="1857-06-29">June 29th</time></Styled.Date>
          Lat 31=30 Long 15=50<br />
          first part of these 24 hours has light winds from Southwest &amp; Some raine Middle part more wind from South west Barometer falling from 29 9/10 to 29 Later part has strong Breeze South by West and raining<br /><br />
        </p>

        <PageNumber num={158} />
        <p><Styled.Date><time dateTime="1857-06-30">June 30th</time></Styled.Date>
          Lat 29=19 Long 12=20<br />
          First part of these 24 hours has fine weather but cloudy and wind from south west moderate middle part the same Later part has an increasing breeze Barometer risen again to 30 1/10
        </p>
        <p><Styled.Date>July 1st</Styled.Date>[series of navigational calculations fill the center of the page]
        </p>
        <p><Styled.Date><time dateTime="1857-07-01">July the 1st 57</time></Styled.Date>
          Lat 25=45 Long 10=42<br />
          these 24 hours comences with heavy &amp; cloudy weather wind light from South West midle and later part Calm with frequent Showers of rain
        </p>
        <p><Styled.Date><time dateTime="1857-07-02">July 2nd</time></Styled.Date>
          these 24 hours comences with bafling Brezes but very light from South West Later part the Same<br /><br />
        </p>

        <PageNumber num={159} />
        <p>[different handwriting, written in top margin]<br />
          Commences with cloudy weather<br />
          and the wind from the S.E. but<br />
          changeable and bafling. Barometer 30.<br />
          <Styled.Date><time dateTime="1857-07-03">July the 3d</time></Styled.Date>Thermometer 70. [end different handwriting]<br />
          Comences with cloudy weather and the wind from the South East But variable and Bafling Barometer 30  2/10 Thermometer 70
        </p>
        <p><Styled.Date><time dateTime="1857-07-04">July the 4th</time></Styled.Date>
          Lat 22=10 Long 06=20 East<br />
          Comences with light breezes and cloudy &amp; wind from S.S.E.
        </p>
        <p><Styled.Date><time dateTime="1857-07-05">July the 5th</time></Styled.Date>
          Comences with rain &amp; Cloudy weather wind bafling from From South to West hauling against the Sun all apearances of the South East trades but wee Shall not get them two Soon for wee Should have taken them in 20 South instead of 18 South
        </p>
        <p><Styled.Date><time dateTime="1857-07-06">July 6th</time></Styled.Date>
          Lat 18=30 Long 02=00 East<br />
          Comences moderate and cloudy wind Bafling from South to North working against th Sun Every 24 hours Later part the Same
        </p>
        <p><Styled.Date><time dateTime="1857-07-07">July the 7th</time></Styled.Date>
          calm throughout with pasing clouds  the wind is SE overhead but none on the water
        </p>
        <p><aside style={{ textAlign: 'right' }}>Time by</aside>Chronometer Greenwich m time | Chr Watch Green M time<br />
          [four columns of navigational calculations including notations re chronometer fast or slow &amp; corrections ]<br />
          <br />
          <table>
            <tr >
              <td>Longitude West<br />
                one dg &amp;
                thirty two miles<br />
                01=32 1/2<br />
                By Chronometer</td>
              <td style={{ paddingLeft: '25px', verticalAlign: 'top' }}>Longitude West<br />
                one Deg &amp;
                thirty thee miles<br />
                By watch 01=33</td>
            </tr>
          </table><br /><br />
        </p>

        <PageNumber num={160} />
        <p><span style={{ fontSize: '125%' }}><time dateTime="1857-07-08">July the 8th</time> AD 1857 Barke Vernon</span><br />
          Comences with fine clear weather But calm with variable flows from diferant quarters midle part has light airs from the North west, Later part Light airs from So[?]<br />
          Barometer 30 5/10   Air 70 4/10<br />
          a large Ship in Sight Standing on the Same tack, creew imployed mending Sails, and on various other jobs about Decks
        </p>
        <p><time dateTime="1857-07-09">the 9th</time>&nbsp;&nbsp;&nbsp;&nbsp;Comences with fine clear weather and very warm the glass today that is the thermometer is 117 above but the sky is beautiful &amp; the vernon glides along most beautifuly how beauty is a day near the tropick it apears that a Seamans or merinors life would be a Pleasant one if it was all like this Sailing But it canot be so wee must take the foul with the fair if it was not So Every woman of a roaming Disposition would go to Sea and wee wee obliged Sand Shark to be!
        </p>
        <p><time dateTime="1857-07-10">July the 10th 57</time>&nbsp;&nbsp;&nbsp;&nbsp;this day comenced with moderat weather wind from the South East the sky is clear And beautiful and mild and Every thing pleasant but the wind is very moderate
        </p>
        <p><time dateTime="1857-07-11">July the 11th</time>&nbsp;&nbsp;&nbsp;&nbsp;Comences with fine weather and warm ar 116 in the Sun moderate throughout
        </p>
        <p><time dateTime="1857-07-12">July 12th</time>&nbsp;&nbsp;&nbsp;&nbsp;has fine pleasant weather through out<br />
          Lat 19=00 Long 18=50
        </p>
        <p><time dateTime="1857-07-13">July 13</time>&nbsp;&nbsp;&nbsp;&nbsp;these 24 hours has fine clear weather wind from north East but cloudy all hands well on board and busy at various jobs about decks<br />
          Barometer [30] 5/10  Air 70  Water [60 1/10]
        </p>
        <p>[penciled note in left margin]
          July 10 By St Helna [Saint Helena] the chronometer was fast of Greenwich One minute and twenty seconds 0.01.20 watch slow M-02 S-40<br /><br />
        </p>

        <PageNumber num={161} />
        <p style={{ fontSize: '125%', marginBottom: -8 }}>From South africa Towards Boston
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-14">July th 14</time></Styled.HangingDate>
          comences with fine clear weather but moderate continues So throughout Lat 84 Long 19=20
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-16">July 16th</time></Styled.HangingDate>
          has fine weather throogt wind South East But moderate th air is fery warm to day thermometer Stands 117 in the Sun
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-17">July 17th</time></Styled.HangingDate>
          has fine clear weather wind from N.E! moderate and cloudy all hands imployed In Ships duty all possible Sail Set to advantage
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-18">July 18th 57</time></Styled.HangingDate>
          Lat 06=30 Long 20=50<br />
          Comenes with cloudy &amp; moderate weather wind South East! All hands imployed in Ships duty, - in various ways
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-19">July 19th</time></Styled.HangingDate>
          this day comences with fine clear weather  wind from South East thiss has been the most beautiful day wee have had Since Leaving Capetown the air was warm and elastic the Sun Soft and pleasant. By every thing around us we have been reminded of the Stillness and peace with which the Sabbath is always associated on the land. The peaceful Sky the blue and Sun lit waves dancing as it were to Some ethereal music the Swelling Sails Spread to their utmost capacity by the pursuing wind Seemed like Some huge thing of life with its white wings spread in th flight. God Speed her in her onward flight! She bears to distant lands a freight of love to fond and trusting harts who after the wanderers in other and foreign lands has often [illegible] the mourners prayer oh, how we hope that this mild air may fan<br /><br />

          <PageNumber num={162} />
          brows on which no shadow of grief has fallen that would rob us of one dear joy in that hour of our meeting! So ends these 24 hours
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-20">July the 20th, 57</time></Styled.HangingDate>
          These 24th hr [commence] with fresh gales from South East the weather still mild and pleasant How soft is the air that every nerve and pulse are playful with the music of its breath under the line in the region of eternal Summer, dwelling place of the mighty Sun! How glorious is  his home on the pathless Sea the luxuriuant earth his pleasant gifts are ever before us But the Sea grows into a clameness the eternal commotion of its waters their glareing blue melting melting into the heavens over them we cannot but Sigh for the forms of things familiar and beloved the quiet Shade of green young trees the high and glorious mountain the emboured valley the fields of waving grain with the rich tinge of autumn upon it and The Song of the reaper and husbandman when it is gathered home for the winters Store
        </p>
        <p>Oh cruel was my father that Shut the doors on me and far worse was my mother for plainly She could see for cold cold was the winter night that pierced my heart with cold and far worse was the false young man that Sold his love for gold
        </p>
        <p style={{ fontSize: '125%', textAlign: 'center', textDecoration: 'underline 1px wavy', textUnderlineOffset: '6px' }}>Barqe Vernon<br /><br />
        </p>

        <PageNumber num={163} />
        <p><span style={{ fontSize: '90%', display: 'block', textAlign: 'center' }}>Thou art gone from my gaze<br /></span>
          <span style={{ fontSize: '125%', display: 'block', textAlign: 'center', textDecoration: 'underline 1px double', textUnderlineOffset: '2px' }}>Thou art gone from my gaze.</span>
        </p>
        <p>Thou art gone from my gaze like a bautiful dream,
          And I Seek thee in vain by meadow and stream<br />
          Oft I breathe thy dear name to the winds [floating] by<br />
          But thy sweet voice is mute to my bosoms low Sigh. (repeat)<br />
          <br />
          In the Stillness of night, when the stars mildly Shine,<br />
          My Spirit doth fondly hold comunion with thine<br />
          Of the birds in thy bowers, now companions I make<br />
          Every Simple wild flower I prize for thy dear Sake, (repeat)<br />
          <br />
          Thou art gone from my gaze but I will not repine<br />
          Ere long we Shall meet in the home thats now thine<br />
          For I feel thou art near, and wherever I be<br />
          thy [unclear] spirit of love, keeps a watch over me (repeat)
          <br /><br />
        </p>
        <p style={{ fontSize: '125%', display: 'block', textAlign: 'center', textDecoration: 'underline 1px double', textUnderlineOffset: '2px' }}>You'll remember me.
        </p>
        <p style={{ textAlign: 'center' }}>When coldness or deceit shall blight<br />
          The beauty now you prize<br />
          And deem it but a faded light<br />
          That beams within your eyes<br />
          When hollow harts Shall weare a mask<br />
          Twill break your own to see<br />
          In such a moment I but ask<br />
          That you'll remember me<br />
          Then you'll remember<br />
          Then you'll remember<br />
          Then you'll remember me<br /><br />
        </p>

        <PageNumber num={164} />
        <p style={{ fontSize: '125%', display: 'block', textAlign: 'center', textDecoration: 'underline 1px double', textUnderlineOffset: '2px' }}>Oh Smile as thou wert want to Smile
        </p>
        <aside style={{ textAlign: 'left', width: '120px' }}>Oh, oh, oh, oh,<br /> Bah!</aside><p style={{ textAlign: 'center' }}>Oh, Smile as thou wert want to Smile<br />
          Before thy weight of care,<br />
          Had Crushed thy heart and for a while<br />
          Left only sorrow there.<br />
          <br />
          <aside style={{ textAlign: 'left', width: '120px' }}>I never [unclear]<br />Why no?<br />Are they to<br />painful dear??</aside>
          Some thoughts twere best if we should quell,<br />
          Some impulse to forget<br />
          O'er which should memory cease to dwell<br />
          We may be happy yet. (repeat)<br />
          <br />
          Oh, never name departed days<br />
          Nor vows we whispered then<br />
          <aside style={{ textAlign: 'left', width: '120px' }}>Oh, oh, oh,<br />
            how very sensitive!<br />
            Must be<br />fearfully acute</aside>
          Round which too sad a feeling plays<br />
          To trust their tones again!<br />
          Regard their shadows o'er thee cast<br />
          As if we ne'er had met<br />
          And still unmindful of the past<br />
          we may be happy yet.<br />
        </p>
        <p>[Pencil note]
          We may / shall we, O yes we [end note]
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-21">July the 21st</time></Styled.HangingDate>this day comences as usual with pleasant gales from South East, I have no incident of importance to note. all hand imployed in various jobs about deck and all posible Sail Set to advantag at 8 P.M. a whale was discovered following the Ship an iron was immediately Procured and a line attached when I Stasioned myself upon the forcastle waiting his aproach after a slight Delay he appeared along Side just forward the fore riging Spouting and Lashing the Sea with his flukes. I threw the iron Strikng him just just abaft his head which he no [unclear] a very Strange way of receiving his advances and appreciating his gambols<br /><br />

          <PageNumber num={165} />
          [Penned in top margin, different handwriting]<br />
          hands of one of the men [end note]<br />
          <br />
          After a furious jerk the line parted in the hands of one of the men who was foolish enough to hold him without making the end fast, the harpoon and twenty fathoms line falling to the share of the whale while For my Share in the transaction I got my leg broke and my foot jamed while the Seaman had all the skin taken off his hands. Thus ended th affair All parties being pleased except those ingured<br />
          <span style={{ display: 'block', textAlign: 'center' }}>So ends this day</span>
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-22">July the 22nd</time></Styled.HangingDate>Comences with fine weather the wind is South east the air is most beautiful and clear every thing appears as pleasant as nature could form it how beautiful is the Sailing in the tropicks no part of the world can be equald to it moderate and the water Smoth Sky clear and no squalls of wind to ingure you, all is pleasant around you if it was not for hard ships indured in other climes Oh Sea Oh Sea I would be induced to love The more than ever by Seeing the beautes of a Seamans life in the tropicks
          <br />
          This day at twelve we cross the line reluctant wee it leave behind Raine Storms and fogs I Sorely dread Eight bells has Struck I must to bed
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-23">July 23</time></Styled.HangingDate>this day commences with fine clear weather wind from South east all hands imployed in various Jobs about decks It is Strange that it has always ocured to me and I Believe prety generaly to all [unclear] people living north of the line which may do busseness in southern Latitudes that when on [unclear] [unclear] [unclear] [unclear] [unclear] they have crosed it [unclear to end]<br /><br />

          <PageNumber num={166} />
          The very atmosphere Seemes to Breath to us of home Senses have Joys and harts. it is nothing to bee wondred at that the marimer who through their [illegible] [as] his arduous profesion Should be compelled to absent himself from the pleasures and innocent [illegible] of his home for the purpose of carying to remote regions of the world the products of another that is not to be Supposed he Should be careless of a return to his beloved ones whom he has left behind him No theare is no class of men to whom a prospect of a Speedy return to that home is more Keenly felt Every energy is put forth to facilitate his vessel each Sail is Spread where may bee of the most benefit to him the advantage of the Slightest wind is taken and sleapeles nights on the Silent Decks tell on his health and can [unclear] how great is his anxiety
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-24">July the 24th</time></Styled.HangingDate> comences with Beautiful weather how Swiftly glides the favorite Barqe her Snowy Sails spread to the winde and her Spars Bending beneath the weight that presses her along
          <FloatingCoordinates>our long &amp; Lat 5=30 north long 38=50</FloatingCoordinates><br /><br />
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-25">July the 25th</time></Styled.HangingDate>
          commences with cloudy weather and frequent Showers of rain midle part Moderate and cloudy no observation this day wee are now in the doldroms in the tropicks of Canso Barometer 30” 1/10 Air 107 &amp; 120 in the Sun water 70.00<br />
          All hands well on board and Imployed in Ships Duty<br /><br />
        </p>

        <PageNumber num={167} />
        <p>
          <span style={{ marginLeft: '-60px', paddingRight: '40px', textAlign: 'right', width: '80px', fontSize: '125%' }}>July 26th</span>
          <span style={{ fontSize: '125%' }}>North Lat 07 00&nbsp;&nbsp; West Long 38 50<br /></span>
          Comences with cloudy weather wind from South West and bafling from that to North East heavy raine Showers at time no obs this day how variable is things of nature as well as that of man two or three days hence the climate was clear and mild Now the air is close and every thing is dull around us raine showers and lightning at night and heavy gusts of wind all is a contrast
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-27">July 27th</time></Styled.HangingDate>
          commences with cloudy weather wind from South West all hands imployed in Ships duty in various ways these 24 hours wee have made but litle headway midle part is very moderate heavy clouds pasing &amp; a heavy Sea runing from North East all appearences of the North East trades Later part the Same
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-28">July 28th</time></Styled.HangingDate>
          commences with the wind from the Sou[th] and heavy raine Showers all is dull and Gloomy around the barometer Stands unmoveable the thermometer is one hundred &amp; twenty in the Sun. the air is very close and Sultry How tedeious doth it seem to those whose minds and every thought are far from them and dwelling with loved ones at home Home, what a thought what an impression that thought doth make upon the mind [unclear] of man <FloatingCoordinates>Lat 10=30 Long 38=40</FloatingCoordinates>
        </p>
        <p><Styled.HangingDate><time dateTime="1857-07-29">July the 29th</time></Styled.HangingDate>
          commences cloudy as ever commences with fine clear weather wind from north east Baromter 30 2/10 thermometer 80[?] 2/10 the air is fine and clear all hands imployed in Ship duty about decks<br /><br />
        </p>

        <PageNumber num={168} />
        <p><Styled.HangingDate><time dateTime="1857-07-30">July the 30th</time></Styled.HangingDate>
          These 24 hours commences with fine clear weath the wind is from north east a fine fresh gale all posible sail sat to advantage Barometer 30 2/10 thermometer 80 5/10 in the Shade  at 8 PM the wind cants more aft Sat fore topmast studing sail and main top galin studing sail crew imployed in cleaning ship and other various jobs about decks -- wee are now closeing upon the Nothern tropicks How beatuiful are the Brezes floating by while our Swift Bark glides along &amp; plays with and plays as it were with the waves that meet us from all Quarters. the swifter She goes the meryrer are those who long there homes to see. but with me my home is on the sea a ever was since infantcy -------<br />
          In poetry and prose I am deficent<br />
          Thearfore I think the[?] wroth sufisent
          <span style={{ textDecoration: 'underline -1px', textUnderlineOffset: '8px' }}>
          </span>
          <hr style={{ width: '50%' }} />
        </p>
        <p>[different handwriting]<br />
          At twilight's pensive lonely hour<br />
          That Sacred hour So dear to me<br />
          In Some Swet grot or wood land bowr<br />
          Ill think of thee [end]
          <span style={{ textDecoration: 'underline -1px', textUnderlineOffset: '8px' }}></span>
          <hr style={{ width: '50%' }} />
        </p>
        <p>[third different handwriting on page]<br />
          Say if no more in converse sweet<br />
          The blissful hour shall flee<br />
          Say iff no more that we may meet<br />
          wilt thou rember me<br /><br />
        </p>

        <PageNumber num={169} />
        <p style={{paddingBottom: 100}}>[written vertically on page]<br />
          Vernon Guyon Locke<br />
          Barque "Villeta"<br /><br />
        </p>

        <PageNumber num={170} />
        <p>There is a trait in the caharecter of every man not naturally vile or dishon[est] the existance or absence of which is an infallible Sign of the tendency of the human heart to good or evil the Love of Home. It is allways associated with pure unsullied feelings genoruss resalitiuons sweet and holy thoughts affection and virtue with out [unclear] a past without regret a future without fear.
        </p>
        <p>Who has not felt how sadly sweet<br />
          That dream of home that dream of home<br />
          Steals o'er the heart too soon to fleet<br />
          Whilst far oer land or sea wee roam<br />
          Sun light more soft may oer us fall<br />
          To brighter Shores our bark may come<br />
          But far more bright more dear than all<br />
          That dream of home that dream of home
        </p>
        <p>My first great grief was the death of my parents After that event I was Domesticated at the house of an uncle I cannot remember any of the circumstan[ces] of my life there without pain and sorrow The unfeelingness and brutetality of those from whom I had a right to expect nothing but Kindness and affection my bleak and unpromiseing boy hood my first impressions of men of life and the world caught up in the few intervals of repose or when my body was bowed down in the vilest drudgery flashed along my young Soul leaving a path behind them like the lightning a burnt lifeless hopeless feeling. Every thing presated[?]<br /><br />

          <PageNumber num={171} />
          to my gase was a discoulred mass ignoble &amp; inane looking out from my own darkned and misunderstood youth, there was nothing individual no identity in what I saw but such object was mingled and blended into another yet more repulsive. The very sky as it were with its blue heavens and Bright Stars were but another view I took of the earth with its Snow clad hills ice bound rivers and its famishing people. I had never known affetion even at that when it was most needed to shape the man by directing the boy. No one ever smiled at me but in anger and under that very anger I felt no fear, I had fed upon it.
        </p>
        <p>I left that spot then - looked my last upon that bitter earth where I had first known I lived and had drunk my first sweet draught of human affection from a mother's breast ere it was chilled for ever to me - knowing that it would be many years and perhaps never that I should stand on that same ground again I took my unaccompanied way, unregretted uncared for in to a wide open stareing world.
        </p>
        <p>Fifteen years - long years they were - of toil and anxiety on the sea and the shore - among the cold and heartless money seekers of the world and the rude uneducated refugees from society and the restraints of civilized life - laboring towards that fruition which awaits every deserving man who aspires The uneducated boy of so rough and uprepossesing demeanor had grown into a full man with his powers of mind and heart.<br /><br />
        </p>

        <PageNumber num={172} />
        <p>Yes fifteen long years had elapsed ere I saw that home again which cruel as it had been to me I often longed to revisit as being the spot of earth though the wildest of that wild coast where I had first felt my being. It was on a return passage from an Italian port. the time was winter and a fierce gale fan[n]ed the waters into a fury. in passing an island on the North american coast the Ship a beautiful modle as ever ploud blue sea then secure the completion of a voyage the speediest on record being under close reefed topsails hauled by the wind fled before that propeling Storm like a Spirit of those wild waves I, her proud commander, I had triumphed. A high deep feeling took possesion of my Soul and in that hour I could look down with more of regret than anger on those who had poisoned the wellsprings of my youth.
        </p>
        <p>In truth it was a grand Sight to see from that bleak Storm beaten Shore with its wild snow hills behind and its lowring wintry sky above. No sign of life in all that Scene but that Stately Ship and her galant and proud hearts - no human habitation on that savage shore but one snow clad house with icicled eaves. A thin pale smoke was blown from its single chimney into the freezing air. On the poop of that ship as she was Rushing on in the light of her foam like some great destiny Stands the boy man with a young sweet wife beside him. There is a tear<br /><br />

          <PageNumber num={173} />
          in his blue eyes, but you must not wonder at that in the mans eye it is the peace offering from the heart of the boy for that lone house was Home
        </p>
        <p>[handwriting changes]<br />
          <span style={{ marginLeft: '-40px', paddingRight: '20px' }}><time dateTime="1857-07-31">July 31st</time></span>
          comenced with cloudy weather wind from South East all possible Sail sat to advantage Men all imployed about decks in varius ways
        </p>
        <p>Though there I call yon conscious clouds to witness<br />
          could I persue the bias of my Soul<br />
          all friends all right of parents I'd disclaim<br />
          and those my well wisher shouldst be father<br />
          and mother brother cousin uncle aunt<br />
          and friend to me  -- -- --
        </p>
        <p><span style={{ marginLeft: '-40px', paddingRight: '20px' }}><time dateTime="1857-08-01">August 1st 57</time></span>
          Lat 26=50 Long 51=44 west<br />
          this day comences with moderate wind and Pleasant weather wind from South east all Hands imployed in various jobs about deck
        </p>
        <p><span style={{ marginLeft: '-40px', paddingRight: '20px' }}><time dateTime="1857-08-02">August 2d</time></span>
          commences with fine clear weather and wind from South but moderate [unclear] All hands imployed in various jobs and principaly painting Ship.
        </p>
        <p>This bottle's the Sun of our table<br />
          His beams are rosy wine<br />
          Wee, planets that are not able<br />
          Without his help to shine
        </p>
        <p><span style={{ marginLeft: '-40px', paddingRight: '20px' }}><time dateTime="1857-08-03">August the 3d 57</time></span>
          these 24 hours commences with cloudy weather wind from South east midle part the same all hands imployed in painting Ship and other nessary jobs about deck latter part moderate wind bafling with some raine the weather is very warm and sultry
          Barometer 30 5/10 air 80 5/10 in the Shade [unclear] one hundred in the Sun all well on board So ends these twenty four hours.<br /><br />
        </p>

        <PageNumber num={174} />
        <p><time dateTime="1857-08-04">August the 4th 57</time><FloatingCoordinates>Lat 27=30&nbsp;&nbsp;&nbsp;&nbsp;Long 53=50</FloatingCoordinates><br />
          first part of these twenty four hours has pleasant weather and wind from South east the air is very warm and sultry the the wind is growing very light all hands well on board but three of the consuls men they are layed up with veneral diseases, all the the rest of the crew imployed in painting and other Ships duty
        </p>
        <p><time dateTime="1857-08-05">August 5th</time><FloatingCoordinates>Lat 26=30 N,&nbsp;&nbsp;&nbsp;&nbsp;Long 55=33 West</FloatingCoordinates><br />
          first part of these twenty four hours has fine weather but very moderate I hope soon to get through these infurnal doldrums they are the greatest torment that I know of in a seafaring life, all appears dull around when wee are becalmed especially when eager to make short passages which is a predominant feature in everyone in those day who command ships- - - - -We have now crossed the tropicks of cancer and when I call up thoughts of better times under this beautiful clime and the money that I have made in my youth in those latitudes in a very short time, i regret that i have not the chance now while i have a fast ship, but why is it that i have ben cut short of this privilege and who by it it is by that vile hypocritical decitful matron England who under the cloak of having freed the grater part of the black race from slavery, has ever ben trying to keep in bondage those of her own race and where has this been proved some might say for proof wee only wish to turn to the History of the world to prove her vile transactions and depredations upon other countries whoever they were if they were weaker than [unclear] and where has Slavery ever ben carried on to such an extent as it is now by that [unclear] nation in puting in bondage the unprotected coolie and [unclear]<br /><br />

          <PageNumber num={175} />
          The dark tombs. Ah they hold worlds and yet how still they are. No voice comes up out of those deep cold cities of the dead to bid us hope or fear. Once they were warm hearted people like our selvs before those sepulchral worms seized upon them. Yes, he died. Bear him away he is dead too true. The affection of friends has no stay upon him now thy tears may not stop those ghostly people in their Silent offices around that dear dead one.
        </p>
        <p><time dateTime="1857-08-06">August the 6th 57</time><br />
          these twenty four hours commences with fine clear weather and I must say to[o] fine for it causes me great great anxiety of mind calms with me is is not a favorite company keeper I can assure you with me it is as with the fact the faster She goes the happer are those who that pace the deck with me.<br />
          Lat 30=00 Long 60=50 West<br />
          All well on board, so ends &amp;tc
        </p>
        <p><time dateTime="1857-08-07">August the 7th</time><br />
          comences with fine clear weather. hour by hour the time wee feel is ebbing of the few days between us and port The Ship is being painted and all her ropes freshly tared. Every thing that has been used at sea for the prevention of ware to the rigging is being taken off and the Shrouds that here to fore seemed one entire mass of tary canvas and matted oakum are now shining and Smart looking while these very nessary though Sertainly very unhandsome provisions against chafing are carefully put by to be resumed on the next voyage when there are no enquaring eyes of lands people to see.
          Sertainly it is with Ships as it is costomary with<br /><br />
        </p>

        <PageNumber num={176} />
        <p style={{ textAlign: 'center' }}>[pencil note in top margin, different handwriting]<br />So[?] you forget [end note]<br />
          <br />
        </p>
        <p style={{ textAlign: 'center' }}>
          [handwriting changes]<br />
          <span style={{ fontSize: '120%' }}>Annie Laurie<br /></span>
          <br />
          Maxwelton's braes are bonnie<br />
          Where early falls the dew<br />
          Twas there that Anny Laurie<br />
          Gave me her promise true<br />
          Which neer forgot shall be<br />
          And for bonnie Annie Laurie<br />
          I'd lay me down and die<br />
          <br />
          Like dew on the gowan lying<br />
          So the fall of her fairy feet<br />
          Like winds in summer sighing<br />
          Her voice is low and sweet<br />
          And deep blue is her eye<br />
          And for bonnie Annie Laurie<br />
          I'd lay me down and die<br />
          <br />
          Her breast is like the Snow drift<br />
          Her neck is like the Swan,<br />
          Her cheek it is the fairest<br />
          That ere the Sun shone on<br />
          She is all the world to me<br />
          And for bonie Annie Laurie<br />
          Id lay me down and die.<br />
        </p><hr style={{ width: '20%' }} />
        <p style={{ textAlign: 'center' }}>
          [handwriting changes]<br />
          <span style={{ fontSize: '120%' }}>Farewell.</span><br />
          <br />
          Farewell if ever fondest prayer<br />
          For others' weal availed on high<br />
          Mine shall not all be lost in air<br />
          But waft thy name beyond the Sky.<br />
          Twere vain to speak to weep to sigh<br />
          Oh! more than tears of blood could tell<br />
          When wrung from guilt's expiring eye<br />
          Are in that word, Farewell, Farewell!<br /><br />
        </p>

        <PageNumber num={177} />
        <p>Men and woman, Othe precaution to which I have alluded would never be taken were it not that there is a convention there are connoisseurs in matter... nautical as well as in other things.
        </p>
        <p><time dateTime="1857-08-08">August the 8th</time>&nbsp;&nbsp;&nbsp;&nbsp;these 24 hours commence with light winds and variable weathr with some apearans of rainy weather during the last few days wee have made but litle progress, as very close &amp; sultry making us more anxious than wee o[t]her wise would be to get on closer to port Lat 31=30 Long 60=50
        </p>
        <p><time dateTime="1857-08-09">August the 9th 1857</time>&nbsp;&nbsp;&nbsp;&nbsp; commences as usual
        </p>
        <br />
        [handwriting changes]
        <p><time dateTime="1857-09-02">September 2d</time>&nbsp;&nbsp;&nbsp;&nbsp; commences with fine clear weather left Boston at 8 Oclock P.M.  at 12 midnight pased cape ann Lights bound for Bangor Maine midle part moderate and fine weather wind South west Later part moderate and fine with moderate breezes from Southwest all sail set Studing Sails low &amp; aloft - - - - -
        </p>
        <p><time dateTime="1857-09-03">Sept 3d</time>&nbsp;&nbsp;&nbsp;&nbsp;
          commences with fine clear weather and wind from South west and very pleasant at 8 Oclock P.M. Sighted Seguin Lights Bearing NNE, Dist 20 miles midle past fine pleasant weather Later part the Same all hands well on board
        </p>
        <p><time dateTime="1858-01-26">Sept 4th January 26th 1858</time><FloatingCoordinates>Lat 39=40 00N<br />Long 60=05 00W</FloatingCoordinates><br />
          <br />
          Saw a very large school of sperm whale which is something uncommon in this Latitude &amp; Longitude
        </p>
        <p>[penned sketch of whale in bottom margin]<br /><br />
        </p>

        <PageNumber num={178} />
        <p>[Blank page with splotches and stain]<br />
          <br /><br /><br /><br /><br /><br />
        </p>

        <PageNumber num={179} /><br />
        <p>[Blank page with splotches and stain]<br />
          <br /><br /><br /><br /><br /><br />
        </p>

        <PageNumber num={180} />
        [handwriting change]
        <p><span style={{ marginLeft: '40px', fontSize: '120%' }}>To Augusta&nbsp;&nbsp;[From V. Locke[?]]</span><br />
          In dreams of thee by night and day<br />
          <span style={{ marginLeft: '25px' }}>My youth's fond morn passed sweetly on</span><br />
          I never thought that that dear ray<br />
          <span style={{ marginLeft: '25px' }}>Could Sease to shine when thou wert gone</span><br />
          How could I feel who felt so deep<br />
          <span style={{ marginLeft: '25px' }}> Whilest gazing on that heaven above</span><br />
          That those soft iyes their light could keep,<br />
          <span style={{ marginLeft: '25px' }}>Or shining yet could seese to love.</span><br />
          <br />
          I think of thee and the soft spell<br />
          <span style={{ marginLeft: '25px' }}>That played around thy hair of gold</span><br />
          Invokes the thoughts wee knew so well<br />
          <span style={{ marginLeft: '25px' }}>The powers which held our hearts of old</span><br />
          Twere vain to upbraid the unknowing years<br />
          <span style={{ marginLeft: '25px' }}>With all my spirit feels of pain</span><br />
          If I could weep the pitying tears<br />
          <span style={{ marginLeft: '25px' }}>would warn me from those hopes again.</span><br />
          <br />
          You ask me what the years have brought<br />
          <span style={{ marginLeft: '25px' }}>Since by the stream and by the sea</span><br />
          Or under the fragrant moon we sought<br />
          <span style={{ marginLeft: '25px' }}>Companianship with flower and tree</span><br />
          Remorseless years - oh welcome tomb;<br />
          <span style={{ marginLeft: '25px' }}> In thee Id hide me from the past</span><br />
          And in the Silant dewy gloom<br />
          <span style={{ marginLeft: '25px' }}>This heart may find a rest at last</span><br />
          <br />
          I would not call thee cruel, no,<br />
          <span style={{ marginLeft: '25px' }}>I never blamed thee for thy part</span><br />
          I never named thee to my love<br />
          <span style={{ marginLeft: '25px' }}> But allways blessed thee with my heart</span><br />
          Yet oft from griefs enchantment cold<br />
          <span style={{ marginLeft: '25px' }}> like fragrant dew along the breast</span><br />
          Thy memory steals with touch of gold<br />
          <span style={{ marginLeft: '25px' }}> And spreads oer all a [unclear] of rest</span><br /><br />
        </p>

        <PageNumber num={181} />
        [handwriting change]
        <p><span style={{ marginLeft: '40px', fontSize: '120%', textDecoration: 'underline 1px double', textUnderlineOffset: '2px' }}>You will remember me<br /></span>
          When other lips and other hearts<br />
          Their tales of love shall tell.<br />
          In language whose access imparts,<br />
          The power they feel so well;<br />
          There may perhaps in such a scene<br />
          Some recollection be,<br />
          Of days days that have so happy been<br />
          Will you remember me.<br />
          <br />
          When coldness or death shall slight<br />
          The  beauty now they prize<br />
          And deem it but a faded light<br />
          That beams within your eyes<br />
          When hollow hearts shall wear a mask<br />
          'Twill break your own to see<br />
          In such a moment I'll but ask,<br />
          Will you remember me!<br />
          <hr style={{ width: '50%' }} /></p>
        <p style={{ marginTop: '-10px', textAlign: 'center' }}>[penned flourish]<br />
          [unclear] G. Locke
          <hr style={{ width: '50%' }} />
          In the year one thousand eight hundred and sixty two.<br /><br />
        </p>

        <PageNumber num={182} />
        <p>The  dream is past and with it fled,<br />
          The hopes that once my passions fed<br />
          Are darkly dyed inside  grief and pain,<br />
          Those joys thats gone come not again,<br />
          <hr style={{ width: '50%' }} /></p>
        <p style={{ marginTop: '-10px', textAlign: 'center' }}>[penned flourish]
          <hr style={{ width: '50%' }} />
        </p>
        <p>V -- take this drooping flower<br />
          'Twill call to mind our parting  hour,<br />
          This simple plant what'er my lot<br />
          In silence says - Forget me not<br />
          <br />
          When on the ocean far away<br />
          Or toss'd about in Biscay's bay<br />
          When stormy winds howl round thy cot,<br />
          'Twill tell thy heart "Forget me not."<br />
          <br />
          E'n when 'tis withered think on me<br />
          And many sighs I'll waft to thee<br />
          Though I no more may see that spot<br />
          'Twill tell thy heart "Forget me not"<br />
          And now farewell where-er I flee<br />
          All hopes and joys shall rest on thee<br />
          Ne'er from thy heart my memory blot<br />
          I ask but this "Forget me not."<br />
          <hr style={{ width: '50%' }} />
        </p>
        <p style={{ marginTop: '-10px', textAlign: 'center' }}>[penned flourish]<br />I will not forget thee,<br />
          [penned flourish]&nbsp;&nbsp;&nbsp;Eg
          <hr style={{ width: '50%' }} />
          I can not forget thee&nbsp;&nbsp;&nbsp;[unclear]<br />
          [penned flourish]
          <hr style={{ width: '50%' }} /><br /><br />
        </p>

        <PageNumber num={183} />
        <p>Eg [Laurie]&nbsp;&nbsp;&nbsp;Vernon G. Locke [unclear]<br />
          I never can forget the,<br />
          What e'r my fate may be<br />
          In sadness or in joy my heart<br />
          Will ever turn to Thee<br />
          The fond remberence of the past<br />
          May sometimes bring regert<br />
          But till my life shall cease to be<br />
          <span style={{ marginLeft: '25px' }}>I never can forget</span><br />
          <br />
          I never can forget thee<br />
          My destiny is cast<br />
          For as thou art my only friend<br />
          So shall thou be the last<br />
          You say I soon shall Sease to think<br />
          That wee have ever met.<br />
          But oh you little know my heart<br />
          <span style={{ marginLeft: '25px' }}>To say I can forget</span><br />
          <span style={{ textAlign: 'center', display: 'block' }}>To Eg</span><br />
          <span style={{ marginTop: '-20px', textAlign: 'center', display: 'block' }}>[penned flourish]</span>
          <hr style={{ width: '75%' }} />
        </p>
        <p>Cape Mount -- West Coast Africa<br />
          Theadore Canaught<br />
          of biaena<br />
          retired Oct 17th/49
          <hr style={{ width: '75%' }} />
        </p>
        <p>At Mannah river Oct 20th /59<br />
          <br />
          On Board Barque Mendin Newyork.<br /><br />
        </p>

        <PageNumber num={184} />
        [handwriting change]
        <p><span style={{ marginLeft: '40px', fontSize: '120%' }}>Solace of Leisure Hours</span><br />
          <br />
          Tell me, must I a preface write,<br />
          Or If So what must I Say<br />
          Why, let thy extempore muse indite<br />
          an unpremeditated lay<br />
          <br />
          So let it be, my little book,<br />
          Before thy well crame'd leaves I close<br />
          I'll take of thee another look,<br />
          Then in oblivion thou'lt repose<br />
          <br />
          For I  hope none reads the but a friend<br />
          Or one thatis parcial to the author<br />
          For the rough spun rhymes that I have penn'd<br />
          If hes a critic he will bother<br />
          <br />
          For thou wert wrote for my own pleasure<br />
          The poesy that thy sheets contain<br />
          though without merit without measure<br />
          All amonated from my brain<br />
          <br />
          Compiled 'twas cheifly when at Sea<br />
          I kept my lone night watch on deck<br />
          When no dear friend was near to me<br />
          None on my musing mo[o]ds to break<br />
          <br />
          This is the preface I will write<br />
          I'll not abridge, amend, or lenthen,<br />
          None of my works, if wrong or right,<br />
          No one shall my adherence Strenthen<br />
          <span style={{ marginLeft: '40px', fontSize: '120%', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Vernon G Locke</span><br /><br />
        </p>

        <PageNumber num={185} />
        <p><span style={{ marginLeft: '40px', fontSize: '120%', textDecoration: 'underline', textUnderlineOffset: '6px' }}>Impromptu</span><br />
          <br />
          All hail inexorable fate<br />
          come disapointment down.<br />
          I'll bid defiance to thy hate<br />
          nor quail beneath thy frown<br />
          <br />
          Though Stern adversity<br />
          Assail my wayward path,<br />
          And Showers of bitterest hate on me<br />
          her fierce vindictive wrath<br />
          <br />
          Though on my head decend<br />
          misfortunes fast anew<br />
          They may awhile my Spirit bend<br />
          yet nere Shall it subdue<br />
          <br />
          For while Im young and Strong<br />
          Despondency I'll Spurn<br />
          nor will I tamely Suffer wrong<br />
          nor yet at Suffering mourn<br />
          <br />
          Nor with impunity<br />
          My heart can nere submit<br />
          To Scorn which claims immunity<br />
          From rank to pass for wit<br />
          <br />
          Nor will I passive hear<br />
          The contumely and scorn<br />
          Envy's contentious bitter Sneer<br />
          Is not so lightly borne<br />
          <br />
          If with Ironic verse<br />
          I should stir up my Muse<br />
          Infectiv[e]s just, but apt and terse<br />
          She knows well how to use<br />
          <br />
          If thus I vent my Spleen<br />
          or give place to my ire<br />
          In Strain Satiric, cutting keen<br />
          Il sweep my indignant lyre.<br />
          <span style={{ marginLeft: '100px', fontSize: '120%', textDecoration: 'underline', textUnderlineOffset: '2px' }}>V&nbsp;&nbsp;&nbsp;G&nbsp;&nbsp;&nbsp; L o c k e</span><br /><br />
        </p>

        <PageNumber num={186} />
        <p>When on the aggressors' pate<br />
          Should I in fury dash<br />
          My contempt and retaiate<br />
          They'd shrink beneath the lash<br />
          But hold my agrieved Soul<br />
          Thy rage awhile forbear,<br />
          Calmly thy passions now control<br />
          Time will Show things more clear<br />
          - - - - - - - - - - - - - - - - - - - - - - - -
        </p>
        <p>When dreadful carthage frighted Roam with arms<br />
          and all the world was Shook with fierce alarms<br />
          Whilst undecided yet which part Should fall<br />
          Which nation rise the glorious lord of all<br />
          - - - - - - - - - - - - - - - - - - - - - - - -
        </p>
        <p>In taking revenge of an injury a man is<br />
          only even with his enemy;<br />
          by passing it over he is Superior<br />
          - - - - - - - - - - - - - - - - - - - - - - - -<br /><br />
        </p>

        <PageNumber num={187} />
        <p>Lines Composed of the Isle of fernandipo<br />
          Fernandipo fare well! I now behold<br />
          Thy cloud capt mountains in the distant sky<br />
          Thy rock bound shores fast receding—<br />
          Farewell to the[e] - than when I first drew near<br />
          Thy dreadful coast—thou pestilensial Isle<br />
          'Tis with more joyous feelings I now say<br />
          Adue to the[e], - than when I first drew near<br />
          Fare well to the[e] thou dim and distant Isle<br />
          For nurtured in the Stormy regions of the north<br />
          Of the cold yet healty north and reared be<br />
          neath the Skys salubrious of fair [unclear]<br />
          clime twas with mixed feelings of<br />
          Suspense and dread<br />
          I sought at dutys call, thy baleful strand<br />
          And as our bark approached thy rockbound coast<br />
          And I with wonder and amaze beheld<br />
          Thy high blue mountains, pile on pile up soar<br />
          Far above the clouds, even midway unto heaven<br />
          Thay seme'd so like my native mountain scenes<br />
          That my fond heart dilating at the sight,<br />
          Expiatiating on the landscape bold<br />
          I gased with rapture on thy rude wild scenery<br />
          <br />
          While every fitful breeze which faned our sail<br />
          Wafts from thy ary shore upon its wings<br />
          an odiferous fume a sweet balm<br />
          freight with scented odor from those woods<br />
          Where nature with unwanted culture rears<br />
          Trees and shrubs and bushes wild<br />
          Where tropic fruits of most delisious tase<br />
          And wild flowers vegitate of sweetest smell<br />
          And where the richest boon that e'er was given<br />
          To torid climes by man most-highly prized<br />
          Refreshing watters cool, palucid, clear<br />
          <br />
          In ample streams from mountain torents cool<br />
          Now rushing on between the steep defiles<br />
          Of mountain glen now are the craggy steeps<br />
          Driving before in its resistles course<br />
          Gigantic pieces of the ponderous rocke<br />
          <span style={{ marginLeft: '80px', }}>Vernon G. G. Locke</span><br />
          <br />

          <PageNumber num={188} />
          <table style={{ paddingBottom: '10px' }}>
            <tr><td colSpan={3}>[penned notes at top of page, different handwriting]</td></tr>
            <tr><td style={{ verticalAlign: 'top', }}>Lines</td>
              <td colSpan={2} style={{ verticalAlign: 'top', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>Lines composed<br />on passing ascension</td>
              <td colSpan={3}>To think<br />I [unclear]</td></tr>
            <tr><td colSpan={3}>[end of notes]</td></tr>
          </table>
          Lines composed on passing assension<br />
          Detteached of never seasing flow of foaming waves<br />
          From its first hold, and onward onward borne<br />
          <br />
          Till o're the presspice, with furious rush<br />
          and force torific, the wild catarac hurls<br />
          It down with sheeted foam the dark abyss<br />
          Where boiling watters toss and foam below,<br />
          and now with gentle fall, the soft cascade<br />
          is heard to murmur in the forests depths<br />
          While tropic birds of varigaeted hues -<br />
          And beautious plumage swell with sweetest song<br />
          The untiring medody of the tuneful woods<br />
          My weary eyes, sick of the dull monotony,<br />
          the unweared sameness of a lenthened voyage<br />
          Tired and oft gasing on the was[t]e of waters<br />
          the trackless space, through which our journey lay<br />
          of ocean fast dark unfathomable black<br />
          for long and tedious was our outward voyage<br />
          and while I sought with anxious heart for chang<br />
          The every day monontinus routine<br />
          Which clogs the wheels of time while out at Sea<br />
          No green spot there to rest my weried iyes -<br />
          No Zarah in the wilderness of waters<br />
          No wonder then, I felt a secret thrill<br />
          of rapture and delight when first beheld<br />
          Thy bold blue hills loom in the far distance<br />
          Oer the calm bosom of the torid sea<br />
          I scarce could deem the[e] then fernandipo<br />
          To all what thou alas most truly art -<br />
          the white mans grave the dreadful cemetry<br />
          And burial place of many a daring heart<br />
          Tho cool and calmy the soft zephirs seem<br />
          When wafted from thy shores yet on their wings<br />
          are borne the noxous vapours, erst [unclear]<br />
          From africks swampy shores the never failing bane<br />
          Of many a europaen constution<br />
          and though my fears had pictured this Isle<br />
          where dire contatgun pestilence and death<br />
          reign oer thy land with fell and drelded sway<br />
          yet these forebodings could not long detur<br />
          My longing feet whose longing [steps] had been confined<br />
          <br />

          <PageNumber num={189} />
          <span style={{ fontSize: '120%', textAlign: 'center', display: 'block' }}>the Island of fernandipo</span>
          <span style={{ textAlign: 'center', display: 'block' }}>[different handwriting]</span>
          <span style={{ textAlign: 'center', display: 'block' }}>The Island of Fernande Po</span>
          <span style={{ textAlign: 'center', display: 'block' }}>[end]</span>
          My longing feet whose steps had been confined<br />
          For there long months within the narrow space<br />
          the of[t] trod limits of the vessels deck<br />
          from wondering o'er thy wild luxurent soil<br />
          where nature throws spontaniously around<br />
          her sweetest oddours and her gayest hues<br />
          So like the long caged bird at last let free<br />
          Soars into [ether] and with gladness tries<br />
          Its airy flight with pinion enfeanchised<br />
          So thus my steps elastick, once more trod<br />
          and joyous prese'd terefurmius verdent sod<br />
          <br />
          [penned between lines] [unclear] heaved a sigh [end]<br />
          <br />
          Fernandipo fare thee well in health &amp; [strength]<br />
          I leave thy fated shores and though mine Iye<br />
          beholds no more thy bold majestic hills<br />
          Still heavenward towering yet I shall remmember<br />
          The social kindness and the hospitality<br />
          Granted unsought for by the friendly few<br />
          Who thus despite thy hot unhea[lt]hy clime<br />
          Are denizens of thy sickly isle become.<br />
          <br />
          Fare well fernandopo our course wee steer<br />
          for one more ocean Isle lone waste and drear<br />
          Which in mid ocean rears its ruged pile<br />
          Ti's far assensions Solitary Isle<br />
          for it our path wee trace o'er torid seas<br />
          onwards impelled by the percevied breeze<br />
          and when our bark shall there in safty come<br />
          on that lone rock shall be my future home<br />
          There for a space remain exiled from all<br />
          Those tender ties memory of[t] shall recall<br />
        </p>
        <p><span style={{ textAlign: 'center', display: 'block' }}>Vernon Guyon Locke</span><br />
          <span style={{ marginTop: '-20px', textAlign: 'center', display: 'block' }}>[penned flourish]</span>
          <span style={{ textAlign: 'right', display: 'block' }}>[different handwriting, right margin] Guyon V. G. Locke</span>
          <hr style={{ width: '75%' }} />
        </p><p>Longitude [twenty] there West<br />
          Lat 00.00 Boiling on the Equator<br /><br />
        </p>

        <PageNumber num={190} />
        <p>How hard the Sailor's cheerliss Lot<br />
          Who long afar must roam<br />
          From joys which fond affection sought<br />
          Embosemed in his home<br />
          <br />
          Estranged from those endearing ties<br />
          Which man delights to prove<br />
          Exiled from all the social joys<br />
          Of friendship home and love<br />
          <br />
          While pacing lone the watchful deck<br />
          His thronging fancies swell<br />
          Retracing oft those pleasures back<br />
          Where memory loves to dwell<br />
          <br />
          Oer crowding thoughts then intervene<br />
          Of joys for ever flown<br />
          Depicting all those hapier scenes<br />
          Of days thats long by gone<br />
          <br />
          Though then by emotions wrought<br />
          Grief may pervade his breast<br />
          Yet still each sad and pensive thought<br />
          By memory is caresed<br />
          <br />
          For then his silent griefs to soothe<br />
          To chase sad sorows tear<br />
          he sings his songs of love and youth<br />
          Songs to remembrance dear<br />
          <br />
          Recalling scenes left far behind<br />
          Of home youth love and bliss<br />
          This all the comfort he doth find<br />
          His only solace this<br />
          <br />
          O pity then the sailors fate<br />
          When far hes severed from<br />
          the joys you [may] partisipate<br />
          Of friendship love and home<br />
        </p>
        <p>[penned flourish in bottom margin]<br /><br />
        </p>

        <PageNumber num={191} />
        <p>Lunar Distance Sun &amp; Moon&nbsp;&nbsp;&nbsp;&nbsp;Augst 31/58<br />
          <br />
          [Top half of page filled with columns of numbers including: Time per Water, Dist, Sun, Moon as well as calculations and notations]
          <br /><br />
          [bottom third of page torn out]<br />
          <br /><br /><br /><br /><br /><br />
        </p>

        <PageNumber num={192} />
        <p>I wander - it matters not where<br />
          No clime  can restore me my peace<br />
          Or snatch from the crown of despair<br />
          A perishing - a fleeting release<br />
          <br />
          The stork on the perishing wall<br />
          Is better and happier than I,<br />
          Content in his ivy-built home<br />
          He hangs out his home in the sky.<br />
          <br />
          But houseless and friendless/heartless I rove<br />
          My bosom all bared to the wind<br />
          The victim of pride and of love<br />
          I seek, but 'oh! where can I find!<br />
          <br />
          I seek what no bribes can bestow<br />
          I ask what no clime can impart<br />
          A charm which can neutralize woe<br />
          And dry up the tears of the heart<br />
          <br />
          I ask it - I seek it in vain<br />
          From Ind to the northermost pole<br />
          Unheeded unpitied complain<br />
          And pour out the grief of my soul<br />
        </p>
        <p>[bottom third of page torn out]
          <br /><br /><br /><br /><br /><br />
        </p>

        <PageNumber num={193} />
        <p>To ---
        </p>
        <p>Celestial sounds!<br />
          Peace dawns upon my soul<br />
          and every pain grows.<br />
          O gentle Vernon!<br />
          Had I but earlier known<br />
          thee. Thou excellent young<br />
          man. We had been happier both.<br />
          But now 'tis too late and yet my<br />
          eyes take pleasure to behold thee<br />
          Thou art their last dear object!<br />
          Mercy! Heaven!<br />
        </p>
        <hr style={{ width: '50%' }} />
        <p>[handwriting change]<br />When the shades of night have<br />
          spread their veil over the plains,<br />
          the firmament manifests to our<br />
          view its grandeur and its riches.<br />
          The sparkling points with which<br />
          it is studded, are so many Suns<br />
          suspended by the Almighty in the<br />
          immensity of space for the worlds<br />
          which roll around them.
        </p>
        <p>“The Heavens declare the glory of God and the firmament showeth forth his handy work."<br /><br />
        </p>

        <PageNumber num={194} />
        <p><span style={{ marginLeft: '60px', fontSize: '120%', textDecoration: 'underline', textUnderlineOffset: '6px' }}>Ever of Thee</span><br />
          <br />
          Ever of Thee fondly I'm dreaming<br />
          Thy gentle voice my spirit can cheer<br />
          Thou<br />
          <br />
          I wander it matters not where<br />
          No clime can restore me my peace,<br />
          Or snatch from this crown of despair<br />
          A perishing - a fleeting release.<br />
          <br />
          The stork on the perishing wall<br />
          Is better and happier than I.<br />
          Content in his ivy-built home<br />
          He hangs out his home in the sky.<br />
          <br />
          But houseless and heartless I rove,<br />
          My bosom all bared to the wind<br />
          The victim of pride and of woe<br />
          I seek but Oh! where can I find<br />
          <br />
          I seek what no bribes can bestow<br />
          I ask what no clime can impartv<br />
          A charm which can neutralize woe<br />
          And dry up the tears of the heart.<br />
          <br />
          I ask it I seek it in vain<br />
          From far to the northernmost pole<br />
          Unheeded - unpitied complain<br />
          And pour out the grief of my soul<br /><br />
        </p>

        <PageNumber num={195} />
        <p>[handwriting change]<br /><span style={{ fontSize: '120%', textDecoration: 'underline', textUnderlineOffset: '6px' }}>Alice Ben Bolt</span><br />
          <br />
          O don't you remember sweet Alice Ben Bolt<br />
          Sweet Alice with hair so brown<br />
          She wept with delight when you gave her a smile<br />
          And trembled with fear at your frown<br />
          In the old church yard, in the valley Ben Bolt<br />
          In a corner obscure and alone,<br />
          They have fitted a slab of granite so grey<br />
          And sweet Alice lies under the stone.<br />
          <span style={{ marginLeft: '40px', textDecoration: 'underline', textUnderlineOffset: '6px' }}> The last two lines repeated</span>
          <br />
          <br />
          O don't you remember the wood Bent Bolt<br />
          'Neath the green sunny slope of the hill<br />
          Where oft we have sat neath its wild spreading shades<br />
          And kept time to the click of the mill<br />
          The mill has gone to decay Ben Bolt,<br />
          And a quiet now reigns all around<br />
          See the old rustic porch with its roses so sweet<br />
          Lies scattered and mouldering on the ground<br />
          <span style={{ marginLeft: '40px', textDecoration: 'underline 1px double', textUnderlineOffset: '6px' }}>  See the [unclear]</span>
          <br />
          <br />
          O dont you remember the school Ben Bolt<br />
          And the master so kind and so true<br />
          And the little nook by the clear running brook<br />
          Where we gathered the flowers as they grew<br />
          O'er the master's grave grows the grass Ben Bolt<br />
          And the once pearly brook is now dry<br />
          Whilst of all the gay throng who were school mates then<br />
          Their remains only you Ben and I.<br />
          <hr style={{ marginLeft: '40px', width: '50%', borderBottom: '4px double', borderLeft: '0', borderRight: '0', borderTop: '0' }} />
        </p>
        <p style={{ marginLeft: '40px', textDecoration: 'underline', textUnderlineOffset: '6px' }}>V G Locke<br /><br />
        </p>

        <PageNumber num={196} />
        <p><span style={{ fontSize: '120%', marginLeft: '40px' }}><span style={{ textDecoration: 'underline 1px double', textUnderlineOffset: '6px' }}>Ever of Thee.</span> To - - - - - - </span><br />
          <br />
          Ever of thee fondly I'm dreaming,<br />
          Thy gentle voice my Spirit can cheer,<br />
          Thou art the Star that mildly beaming<br />
          Shone on my path when all was dark and drear;<br />
          Still in my heart thy form I cherish,<br />
          Every kind thought like a bird flies to thee,<br />
          Ah! never till life and memory perish<br />
          Can I forget how dear thou art to me,<br />
          Morn, noon, and night, where'er I may be,<br />
          Fondly I'm dreaming ever of thee.<br />
          <hr style={{ marginLeft: '40px', marginBottom: '10px', marginTop: '10px', width: '30%' }}></hr>
          Ever of thee when sad and lonely<br />
          Wandering afar my soul joy'd to dwell,<br />
          Ah then I felt I loved thee only,<br />
          All seemed to fade before affections spell,<br />
          Years have not chilled the love I cherish,<br />
          True as the stars hath my heart been to thee<br />
          Ah never till life and memory perish<br />
          Can I forget how dear thou art to me,<br />
          Morn, noon and night where'er I may be<br />
          Fondly I'm dreaming ever of thee.<br /><br />
          <span style={{ marginLeft: '40px' }}>[penned flourish]</span><br />
          <br />
          <span style={{ textDecoration: 'underline 1px double', textUnderlineOffset: '6px' }}>Vernon G. Locke</span>
          <br />
        </p>
        <p>
          <br />
          I think I think of her love<br />
          When I am forced to roam<br />
          My thoughts will turn to thee love,<br />
          As the wanderer to his home.<br />
          As the flowers blooming spring love<br />
          And the roses shed perfume<br />
          My heart will turn to thee love<br />
          Where'er thou may'st roam.<br />
          <br />
          [unclear] V. G. Locke<br />
          [unclear]<br /><br />
        </p>

        <PageNumber num={197} />
        <p>
          <span style={{ fontSize: '120%', marginLeft: '40px', textDecoration: 'underline 1px double', textUnderlineOffset: '6px' }}>The Minute Gun at Sea</span><br />
          <br />
          Let him who sighs in sadness here<br />
          Rejoice and know a friend is near.<br />
          <br />
          What heavenly sounds are those I hear<br />
          What being comes this gloom to cheer?<br />
          <br />
          When in a storm on Albion's coast,<br />
          The night watch guards his weary post,<br />
          From thoughts of danger free<br />
          He marks some vessel's dusky form<br />
          And hears amid the howling storm,<br />
          The minute gun at sea<br />
          <br />
          Swift from the shore a hardy few,<br />
          The life boat mann'd with a gallant gallant crew,<br />
          And dares the dangerous wave -<br />
          Through the wild serf they plough their way<br />
          Lost in the foam nor no dismay<br />
          For they go the crew to save<br />
          <br />
          Chorus,<br />
          Then O what rapture fills each breast<br />
          Of the hopeless crew in the ship's distress<br />
          Then landed safe what joys to tell<br />
          Of all the dangers that befel;<br />
          <br />
          Then is heard no more<br />
          By the watch on the shore<br />
          The minute gun at sea.<br />
        </p>
        <p><span style={{ marginLeft: '40px' }}>[penned flourish]</span><br />
          <br />
          [bottom right corner of page torn out]<br /><br />
        </p>

        <PageNumber num={198} />
        <p><span style={{ fontSize: '120%', marginLeft: '40px', textDecoration: 'underline 1px', textUnderlineOffset: '6px' }}>To ----------</span><br />
          <br />
          A place in thy memory dearest<br />
          Is all that I may claim<br />
          Then pause and look back when thou hearest<br />
          The sound of my name.<br />
          <br />
          Another may woo me dearer<br />
          Another may woo and not win<br />
          But I care not for all their endeavou[r]<br />
          If I am but remembered by thee;<br />
          <span style={{ marginLeft: '40px', textDecoration: 'underline 1px double', textUnderlineOffset: '6px' }}>[penned flourish]</span><br />
          <br />
          Let not a cold frown gather<br />
          O'er that placid brow of thine<br />
          Think not harshly of the future<br />
          Thou art, and must be ever mine<br />
          <span style={{ marginLeft: '40px', textDecoration: 'underline 1px double', textUnderlineOffset: '6px' }}>[penned flourish]</span><br />
          <br />
          [handwriting change]<br />
          When sailing on the trackless ocean<br />
          Give one thought of her you leave,<br />
          In a country far and lonely<br />
          Who can ne'er but think of thee.<br />
          <span style={{ marginLeft: '40px', textDecoration: 'underline 1px double', textUnderlineOffset: '6px' }}>[penned flourish]</span><br />
        </p>
        <br /><br />

        <PageNumber num={199} />
        <p>[handwriting change]<br />
          <br /><span style={{ marginLeft: '40px', fontSize: '125%', textDecoration: 'underline 1px wavy', textUnderlineOffset: '6px' }}>The quality of mercy</span><br />
          <br />
          The quality of mercy is not strained;<br />
          It droppeth as the gentle rain from heaven<br />
          Upon the place beneath. It is twice bless'd<br />
          It blesseth him that gives, and him that takes.<br />
          'Tis mightiest, in the mightiest; I[t] becomes<br />
          The throned monarch better than his crown.<br />
          His sceptre shows the force of temporal power,<br />
          The attribute to awe and majesty,<br />
          Wherin doth sit the dread and fear of kings<br />
          It is an attribute to God himself,<br />
          And earthly power doth then show likest God's,<br />
          When mercy seasons justice. Therefore, Jew,<br />
          Though justice by thy plea, consider this, -<br />
          That, in the course of justice, none of us<br />
          should see salvation: we do pray for mercy;<br />
          And that same prayer doth teach us all<br />
          to render. The deeds of mercy, I have spoke<br />
          thus much to mitigate the Justice of thy plea;<br />
          Which if thou follow this strict court of Venice<br />
          Must needs give sentence 'gainst the merchant there.<br />
          <span style={{ textAlign: 'right', display: 'block', marginRight: '20px', textDecoration: 'underline 1px', textUnderlineOffset: '6px' }}> Merchant of Venice</span>
        </p>
        <p>To cherish in my native bower,<br />
          To gather round my cot<br />
          I cultivate a little flower<br />
          They call "Forget me not".<br />
        </p>
        <p>Who can school the heart's affections<br />
          Who can banish its regrets<br />
          If you blame my deep dejection<br />
          Teach O teach me to forget.<br /><br />
        </p>

        <PageNumber num={200} />
        <p><span style={{ marginLeft: '40px', fontSize: '125%', textDecoration: 'underline 1px', textUnderlineOffset: '10px' }}>Why did my Sarah sell me</span>
          <br />
          <br />
          <aside style={{ textAlign: 'right' }}>1</aside>For me life has no pleasure<br />
          My heart has lost its treasure<br />
          It grieves me beyond measure<br />
          To weep away my years<br />
          I ought not to surrender<br />
          My heart it won't suspen-der<br />
          It is so confounded tender<br />
          I refuge take in tears<br />
          <hr style={{ marginLeft: '20px', marginBottom: '10px', marginTop: '10px', width: '30%', borderBottom: '3px double', borderLeft: '0', borderRight: '0', borderTop: '0' }} />
          <span style={{ marginLeft: '60px' }}>Chorus</span><br />
          O o-o why did my Sarah sell me,<br />
          Why did she not frankly tell me<br />
          It was her intention to sell me<br />
          And cause me for to pine<br />
          <hr style={{ marginLeft: '20px', marginBottom: '10px', marginTop: '10px', width: '30%', borderBottom: '3px double', borderLeft: '0', borderRight: '0', borderTop: '0' }} />
          <aside style={{ textAlign: 'right' }}>2</aside>I'm sorry that I met her<br />
          Some how I can't forget her<br />
          I'll write her such a letter<br />
          As she will not digest<br />
          I've danced and paid the piper,<br />
          And tho my reason's riper<br />
          Yet still I loves the viper<br />
          She reigns still in this breast<br />
          <br />
          <span style={{ marginLeft: '30px' }}>Chorus as above</span><br />
          <hr style={{ marginLeft: '20px', marginBottom: '20px', marginTop: '5px', width: '30%', borderBottom: '3px double', borderLeft: '0', borderRight: '0', borderTop: '0' }} />
          <aside style={{ textAlign: 'right' }}>3</aside>I'm sure I never piqu[e]d her,<br />
          Nor once did contradict her<br />
          E'en now I wears her picture,<br />
          This wretched breast within,<br />
          My heart is almost sinking<br />
          As late I have been thinking<br />
          As how I'd take to drinking<br />
          And drown my grief in gin.<br />
          <br />
          <span style={{ marginLeft: '60px' }}>Chorus</span><br />
          <hr style={{ marginLeft: '0px', marginBottom: '10px', marginTop: '5px', width: '40%', borderBottom: '3px double', borderLeft: '0', borderRight: '0', borderTop: '0' }} /><br /><br />
        </p>

        <PageNumber num={201} />
        <p><span style={{ marginLeft: '80px', fontSize: '125%', textDecoration: 'underline 1px', textUnderlineOffset: '3px' }}>Duett</span><br />
          <span style={{ fontSize: '125%', textDecoration: 'underline 1px double', textUnderlineOffset: '10px' }}> What are the wild waves saying</span><br />
          <br />
          <aside style={{ textAlign: 'right' }}>Bro</aside>What are the wild waves saying,<br />
          Sister the whole day long;<br />
          That when ever amid our playing<br />
          We hear but their low lone song<br />
          Not by the sea side only,<br />
          There it sounds wild and free<br />
          But at night when 'tis dark and lonely,<br />
          In dreams it still with me.<br />
          <br />
          <aside style={{ textAlign: 'right' }}>Sister</aside>Brother, I hear no singing,<br />
          'Tis but the rolling wave,<br />
          Ever its low coast wading<br />
          Over some ocean gay —<br />
          'Tis but the noise of waters<br />
          Dashing against the shore<br />
          And the wind from some bleaken quarter<br />
          Mingling with its roar.<br />
          <br />
          Chorus
          No, no, no, no , no, no, no<br />
          it something greater&nbsp;&nbsp;&nbsp;X<br />
          <br />
          <aside style={{ textAlign: 'right' }}>Bro</aside>Yes but the waves seem ever<br />
          Singing that sad same song;<br />
          And vain is my weak endeavour<br />
          To guess what the serges sing.<br />
          What are those waves repeating<br />
          Ever by night and by day,<br />
          Is it some friendly greeting<br />
          Or a warning that calls away.<br />
          <br />
          <aside style={{ textAlign: 'right' }}>Sister</aside>Brother the inland mountains<br />
          Hath it not voice and song<br />
          Speaks not this ripling fountain<br />
          As it bedews the ground!<br />
          Een by the household ingle<br />
          Curtained enclosed and warm<br />
          To wit our voices mingle<br />
          With those of a distant storm.<br />
          <hr style={{ marginLeft: '0px', width: '75%' }} />

          <aside style={{ textAlign: 'right' }}> Chorus</aside>Yes, yes, yes, yes, yes, yes, yes, it something greater<br />
          Which speaks to the heart alone&nbsp;&nbsp;&nbsp;X<br />
          'Tis the voice of the great Creator<br />
          Dwells in that mighty tone.<br />
          <hr style={{ marginLeft: '70px', marginBottom: '10px', marginTop: '5px', width: '10%', borderBottom: '3px double', borderLeft: '0', borderRight: '0', borderTop: '0' }} />
          [written in right margin]<br />
          The same chorus at
          the end of the sister's<br />
          first answer to her brother,<br />
          as the bottom, only -<br />
          substitute <span style={{ textDecoration: 'underline' }}>No</span> for yes at<br />
          the commencement<br /><br />
        </p>

        <PageNumber num={202} />
        <p><span style={{ font: '120%', textAlign: 'center', display: 'block' }}><s>What are  the wild waves saying</s><br />
          By the sad sea waves</span>
          <br />
          By the sad sea waves I listen while they moan,<br />
          And lament o'er the days of hope and pleasure gone<br />
          I was young, I was fair, I had not a care,<br />
          From the rising of the sun to the setting of the same<br />
          Yet I pined like a slave,<br />
          By the sad sea wave<br />
          Come again bright days of hope and pleasure gone.<br />
          <br />
          From my cares last night by holy sleep beguiled<br />
          In the fair moonlight my home upon me smiled<br />
          Oh how sweet 'mid the dew,<br />
          Every flower that I knew<br />
          Breathed a welcome back again to the worn<br />
          and weary child;<br />
          Yet I looked from my grave<br />
          By the sad sea wave<br />
          Come again bright days of hope and pleasure gone.<br />
          <hr style={{ marginBottom: '10px', marginTop: '10px', width: '75%', borderBottom: '3px double', borderLeft: '0', borderRight: '0', borderTop: '0' }} />
          Blow on thou mighty winds<br />
          And make the ocean roar;<br />
          Its proud majestic waves are high<br />
          And still keep rolling o'er.<br />
          <br />
          Its vast unfathomable deep<br />
          Is mighty to behold<br />
          Could thy roaring waters speak<br />
          They would a tale <s>of war</s> unfold.<br />
          <hr style={{ marginBottom: '10px', marginTop: '10px', width: '25%', borderBottom: '3px double', borderLeft: '0', borderRight: '0', borderTop: '0' }} />
          Composed by V. G. Locke<br />
          on board Bark Valetta, April 4th /59/.<br /><br />
        </p>

        <PageNumber num={203} />
        <p>[handwriting change]<br />
          <span style={{ textAlign: 'center', display: 'block' }}>Captain V. G Locke<br />
            Bark Valetta<br />Boston</span>
          <table style={{ paddingBottom: '10px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <tr><td style={{ paddingRight: '20px' }}>Captain V. G. Locke<br />Bark Valetta<br />Boston<br />Mass.</td>
              <td colSpan={2} style={{ verticalAlign: 'top' }}>Mass.</td>
              <td colSpan={3} style={{ verticalAlign: 'top', paddingLeft: '20px' }}>Captain V. G. Locke<br />Barque Valetta<br />Boston</td>
            </tr>
          </table>
        </p>
        <hr style={{ width: '50%' }}></hr>
        <p>
          [remainder of text on this page was entered with the journal upside down, and in a different handwriting]<br /><br />
          The man who has the most thoughts has not always the wealthiest mind though such has been said. Thought is the gold, Silver and copper of the mind the currency of the Soul. Some minds wealthy in their resources of thought, hold their communications in pure gold and glittering diamonds, but are often compelled to accept at the hands of others a tender in Silver or copper, by no means a fair equivalent. But not withstanding this not unusual circumstance, those possessors of gold, unlike their brethren of the physical world, are no wiser, and [unclear] are in want, come to them and have their wants supplied without hesitation. Their world is existent in the nature and dstiny of men. Their wealth is in the unsubstantial head and heart. Their home their birthplace is in the Beautiful and the Sublime, the unseen and the eternal, the Dying and the Undying. Their aliment is gathered from every living thing. Like their friend and type, the bee, from flower to flower they fly, extracting their essence.<br />
          a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z<br />
          A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S<br /><br />
          [end of upside down entry]<br /><br />
        </p>

        <PageNumber num={204} />
        <p>[handwriting change]<br />
          <span style={{ textAlign: 'center', display: 'block' }}>To V. G. L _ _ _ _ <br />
            [penned flourish]</span><br />
          When night came o'er the sea<br />
          Meek quiet, and the heart of Heaven<br />
          With love grew breathless, thou were wont to raise<br />
          My wild thoughts to the weird and solemn stars;<br />
          Tell of each orb the courses and the name;<br />
          And of the winds, the clouds the invisible air<br />
          Make eloquent discourse, - until methought<br />
          thou wert something divine.<br />
        </p>
        <br />
        <p><span style={{ textAlign: 'center', display: 'block', textDecoration: 'underline 1px double', textUnderlineOffset: '5px' }}>Northern Star</span><br />
          How bright and lucid are thy rays<br />
          Thou glittering northern star.<br />
          Shine on in brightness for <span style={{ textDecoration: 'underline' }}>His</span> gaze<br />
          He watches thee from far.<br />
          <br />
          Sun, moon, and star each in its turn<br />
          He study's with delight,<br />
          And labours strongly to perform<br />
          Their courses day and night.<br />
          [penned flourish]
        </p>
        <p>Ded. to V.G. Locke,<br />
          April 7/59 - Valitta<br />
          [Unclearl]<br /><br />
        </p>

        <PageNumber num={205} />
        <p>[handwriting change]<br />
          [in upper right corner] Cases soaps 164 in all[?]<br />
          15 cases Stasionary&nbsp;&nbsp;&nbsp;&nbsp;6 Boxes Lamps<br />
          400 Keg powder&nbsp;&nbsp;&nbsp;&nbsp;[unclear] one case [unclear]<br />
          1 case Dry goods  |  <s>164 cases soap</s><br />
          2 Do Books&nbsp;&nbsp;&nbsp;&nbsp;3 cases hard ware<br />
          one Box Lamps  /  one of ink<br />
          one package umbrelas&nbsp;&nbsp;&nbsp;&nbsp;Two of Brooms<br />
          one Doz Pails  /  one bbl molasses<br />
          Two Barels Beens&nbsp;&nbsp;&nbsp;&nbsp;3 barls flour<br />
          4 bbls pork&nbsp;&nbsp;&nbsp;&nbsp;7 Bbls Mackrel<br />
          one box candles&nbsp;&nbsp;&nbsp;&nbsp;one Soap&nbsp;&nbsp;&nbsp;&nbsp;one Tea<br />
          one Tub Butter&nbsp;&nbsp;&nbsp;&nbsp;2 bbls flower&nbsp;&nbsp;&nbsp;&nbsp;one Pork<br />
          one Mackrel&nbsp;&nbsp;&nbsp;&nbsp;one Barel Sugar&nbsp;&nbsp;&nbsp;&nbsp;one Beef<br />
          one flour&nbsp;&nbsp;&nbsp;&nbsp;one Mackrel&nbsp;&nbsp;&nbsp;&nbsp;one of Shoulders<br />
          one Keg of honey&nbsp;&nbsp;&nbsp;&nbsp;one of venigar<br />
          2 Boxes candles&nbsp;&nbsp;&nbsp;&nbsp;one Tea&nbsp;&nbsp;&nbsp;&nbsp;one Stationary<br />
          one Private Stores&nbsp;&nbsp;&nbsp;&nbsp;one case hardware<br />
          one case P E Misio[?] [unclear]&nbsp;&nbsp;&nbsp;&nbsp;one one case<br />
          carbon oile&nbsp;&nbsp;&nbsp;&nbsp;one barel Molasses&nbsp;&nbsp;&nbsp;&nbsp;one graham<br />
          Meal&nbsp;&nbsp;&nbsp;&nbsp;one hams&nbsp;&nbsp;&nbsp;&nbsp;one Lard one bbl Meed[?]<br />
          one case Lamps&nbsp;&nbsp;&nbsp;&nbsp;2 bbls flour&nbsp;&nbsp;&nbsp;&nbsp;3 Pork<br />
          3 Beef&nbsp;&nbsp;&nbsp;&nbsp;3 Mackrel&nbsp;&nbsp;&nbsp;&nbsp;one cask hardware<br />
          one case Do&nbsp;&nbsp;&nbsp;&nbsp;2 boxes Soap<br />
          one Dry goods&nbsp;&nbsp;&nbsp;&nbsp;2 packs pipes&nbsp;&nbsp;&nbsp;&nbsp;one pails<br />
          2 bbls Mackrel&nbsp;&nbsp;&nbsp;&nbsp;2 of pork&nbsp;&nbsp;&nbsp;&nbsp;10 kegs nails<br />
          2 Kegs White Lead&nbsp;&nbsp;&nbsp;&nbsp;5 keg paint<br />
          one case turpentine&nbsp;&nbsp;&nbsp;&nbsp;one green paint<br />
          3 Stationary&nbsp;&nbsp;&nbsp;&nbsp;one case hardware<br />
          one Dry goods&nbsp;&nbsp;&nbsp;&nbsp;seven boxes Soap<br />
          one candles&nbsp;&nbsp;&nbsp;&nbsp;one Do lantern glass<br />
          one Do Lamps&nbsp;&nbsp;&nbsp;&nbsp;four packets pipes<br />
          2 Doz Pails&nbsp;&nbsp;&nbsp;&nbsp;one bbl oile&nbsp;&nbsp;&nbsp;&nbsp;8 of Beef<br />
          2 bbls Pork&nbsp;&nbsp;&nbsp;&nbsp;10 Ten bbls Mackrel<br />
          / one Hogs Tobacco / one Barl Pork<br />
          one flour&nbsp;&nbsp;&nbsp;&nbsp;one case hardware&nbsp;&nbsp;&nbsp;&nbsp;one [unclear]<br />
          one cask sugar&nbsp;&nbsp;&nbsp;&nbsp;one Box Soap<br />
          one pack pipes&nbsp;&nbsp;&nbsp;&nbsp;one keg gunpowder<br />
          B K James 10 bls 1 hogs 11 boxes 3 Bales<br />
          Mark[?] one Bag four kegs 7 Bbl 3 Boxes<br />
          6 Bbls 1 cask 3 Boxes / one Tub butter 7 bbs 3 Boxes<br />
          / one package / one Tin Box / one Wood<br />
          2 Trunks / Hogs Tobacco 3 cases furniture<br />
          / one case Books 3 Boxes glass<br /><br />
        </p>

        <PageNumber num={206} />
        <p>
          One box Trond G Gibbons I Mark<br />
          one parcel Do 2 boxes Mr I James<br />
          E C [unclear] Lufman 2 cases H H Mesenger one case<br />
          and several trunks numerios to mention<br />
          One bbl heir hats Marked president<br />
          Benson One case Iron beadstead<br />
          2 packages matrases one case Books<br />
          12 Doz / One copying press 2 Boxes<br />
          One Bundle Bro[unclear] 2 pack glass ware<br />
          one pack oile 2 bbls mackerel[?] 2 kegs<br />
          Butter / one hogs tobacco / one bbs<br />
          Rum[?] one Hogs tobacco / one box<br />
          of tools / one bundl sheet iron / [unclear]<br />
          one Box [unclear to end of line]<br />
          5 five bbls flour 10 ten bbls Mess Beef<br />
          10 barrls Pork 8 barels [unclear]<br />
          3 bbls sundries 2 Bags coffee<br />
          30 boxes hering[?] 3 three boxes Tea<br />
          10 one bbl [illegible] / 64 emty bbls<br />
          36 Do 2 Hhd Tobacco<br />
          one case Dry goods 5 kegs butter<br />
          / 23 kegs Bow[unclear] one sugar mill<br />
          / one hd tobacco one [illegible] bacon[?]<br />
          one cask codfish one cask dry goods<br />
          one Do hats one Do samples[?]<br />
          / one box candles one [unclear]]<br />
          one tub butter One [unclear]<br />
          ones greenes / 1/1 bbs sugar 1 1/2 bb salt<br />
          one half bbl [unclear] one [unclear]<br />
          one case crockery one looking glass<br />
          [penned flourish across page]
          <br /><br />
        </p>


        <PageNumber num={207} />
        <p>Sweet flower, with flowers I strew thy Bridal Bed<br />
          <br />
          Sweet tomb, that in thy circuit dost contain<br />
          The perfect Model of Eternity;<br />
          Fair Judy, that with angels dost remain<br />
          Accept this favour at my hands;<br />
          That living honoured the[e], And being dead,<br />
          With funeral praises do adorn thy tomb<br />
          <br />
          Dark the halls and cold the feast<br />
          Gone the bride maids gone the priest<br />
          All is over all is done<br />
          Twain of yesterday are one<br />
          Blooming girl and manhood gray,<br />
          Autum in the arms of May.<br />
          <br />
          Hushed within and hushed without<br />
          Dancing feet and restless shout<br />
          dies the bonfire on the hill<br />
          All is dark and all is still<br />
          Save the starlight save the breeze<br />
          Moaning through the grave yard trees,<br />
          And the great sea waves below<br />
          Pulse of the midnight beating slow.<br />
          <br />
          From the brief dream of a bride<br />
          She hath waknd at his side<br />
          With half uttred shriek and start<br />
          feels not she his beating heart<br />
          and the pressure of his arm<br />
          and his breathing near and warm<br />
          <br />
          Lightly from the bridel bed<br />
          Springs that fair disheveled head<br />
          and a feeling new intence<br />
          half of shame half innocence<br />
          Maiden fear and wonder speaks<br />
          through her lips and changing cheeks<br /><br />


          <PageNumber num={208} />
          From the oaken mantil glowing<br />
          faintest light the lamp is throwing<br />
          on the mirrors antique mould<br />
          high backed chair and wainscot old<br />
          and through faded curtains stealing<br />
          his dark sleeping face revealing<br />
          <br />
          Listless lies the strong man there<br />
          Silver streaked his care les hair<br />
          Lips of love have left no trace<br />
          On that hard and hauty face<br />
          And that foreheads knitted thought<br />
          Loves soft hand hath not unwrought<br />
          <br />
          “Yet He” she sighs "he loves me well<br />
          more than these calm lips can tell<br />
          Stooping to my lowly state<br />
          he hath made me rich and great<br />
          and I bless him though he bee<br />
          hard and stern to all save me<br />
          <br />
          While she speaketh fals the light<br />
          oer her fingers small and white<br />
          gold and gem and costly ring<br />
          Back the timid lustre fling<br />
          Loves selectest gifts and rare<br />
          his proud hand had fastned there<br />
          Greatfully she marks the glow<br />
          from those tapering lines of snow<br />
          fondly oer the sleeper bending<br />
          his black hair with golden blending<br />
          in her soft and light caress<br />
          cheek and lip together press<br /><br />


          <PageNumber num={209} />
          Ha - That start of horror - Why<br />
          That wild stare and wilder cry<br />
          full of teror, full of pain<br />
          Is there madness in her brain<br />
          hark that grasping horse and low<br />
          Spare me - spare me - let me go.<br />
          <br />
          God have mercy - Icy cold<br />
          Spectral hands her own inclose<br />
          drawing silently from them<br />
          Loves fair gifts of gold and gem<br />
          Waken Save me Still as death<br />
          At her side he slumbereth<br />
          <br />
          Ring and braclet all are gone<br />
          And that ice cold hand with drawn<br />
          But she hears a murmur low<br />
          full of sweetness full of woe<br />
          half a sigh and half a moan<br />
          fear not give the dead her own.”<br />
          <br />
          Ah! The dead wifes voice she knows<br />
          That cold hand whose pressure froze<br />
          Once in warmest life had borne<br />
          Gem and band her own hath worn<br />
          Wake the[e] Wake the[e] low, his ies<br />
          open with a dull surprise<br />
          <br />
          In his arms the strong man folds her<br />
          closer to his breast he holds her<br />
          Trembling limbs his own are meeting<br />
          and he feels her hearts quick beeting<br />
          nay my dearest - why this fear<br />
          hush she saith the dead is here<br />
          <br />
          “Nay a dream an idle dream”<br />
          But before the lamps pale gleam<br />
          Tremblingly her hand she raises<br />
          there no more the dimond blazes<br />
          Clasp of perl or ring of gold<br />
          “Ah she sighs, her hand was cold<br /><br />


          <PageNumber num={210} />
          Broken words of cheer he saith<br />
          But his dark lip quivereth<br />
          And as oer the past he thinketh<br />
          from his young wifes arms he shrinketh<br />
          Can those soft arms round him lay<br />
          underneath his dead wifes iye<br />
          She her fair young head can rest<br />
          soothed and childlike on his breast<br />
          And in trustful innocence<br />
          drew new strength and courage thence<br />
          he the proud man feels within<br />
          but the cowardice of sin<br />
          She can murmer in her thought<br />
          Simple prairs her mother taught<br />
          And his blessed angels call<br />
          Whose great love is over all<br />
          he alone in praeryless pride<br />
          meets the dark past by her side<br />
          <br />
          One  who living shrank with dread<br />
          from his look or word or tread<br />
          unto whom her early grave<br />
          was as fredom to the slave<br />
          moves him at this midnight hour<br />
          with the deads uncontious power<br />
          <br />
          Ah the dead the unforgot<br />
          from their solemn homes of thought<br />
          darkly over foe and friend<br />
          or in love or sad rebuke<br />
          Back upon the living look,<br />
          <br />
          And the tenderest ones and weakest<br />
          Who their wrongs have born the meakest<br />
          Lifting from those dark still places<br />
          Sweet and sad remembered faces<br />
          Oer the guilty hearts behind<br />
          An unwitting triumph find
        </p>
        <hr style={{ borderBottom: '1px dashed', borderLeft: '0', borderRight: '0', borderTop: '0', width: '75%' }} />
        <p>Composed laying at anchor<br />
          at Cape Mount West Coast Africa<br />
          July 20th 1859 by V. G. Locke of Barqe Valetta<br /><br />
        </p>

        <PageNumber num={211} />
        <p>Liberia West Coast Africa August 1859<br />
          Bark Mendi laying to anchor at Cape Palmas <time dateTime="1859-08-25">August 25th</time><br />
          On the <time dateTime="1859-05-24">24th of May</time> left New York in America for the west coast Africa<br />
          on the <time dateTime="1859-07-10">10 day of July</time> arrived at Cape Mount West Coast Africa<br />
          <time dateTime="1859-07-11">July 11th</time> arived at Monrovia West Coast Africa <time dateTime="1859-07-24">July 24th</time> left Cape Mesurada for Cape Mount<br />
          <time dateTime="1859-07-27">July the 27th</time> left Cape Mount for Monrovia again<br />
          <time dateTime="1859-07-28">July 28th</time> came to anchor at Do<br />
          <time dateTime="1859-08-05">August the 5th/59</time> left Monrovia for Junk Port W C.A.<br />
          Arived at Do on the 6th<br />
          <time dateTime="1859-08-07">August 7th/59</time> left Junk for Little Bassa W C A______<br />
          Left Little Bassa <time dateTime="1859-08-12">August 12th 1859</time> for Grand Bassa West C. A<br />
          arived at Do August 12 at night<br />
          <time dateTime="1859-08-16">August 16th</time> left Grand Bassa for Port Sino at which we  arived on the 17th August<br />
          Left Sino W.C.A. <time dateTime="1859-08-20">August 20th/59</time> and arived at Cape Cape Palmas  August 21st 1859<br />
          <span style={{ textAlign: 'right', display: 'block' }}><time dateTime="1859-08-25">August 25th 1859</time></span>
          Last night I was in New York My wife was dead No one knew where she had bene taken I mourned her loss with grief and in that Deepest of grief I had no friend to console me But awoke in the morning and found it was but a troublesome dreame Ah Dear Louy[?] that dream I fear is too true I fear if your not lost to the heaven world you are to me<br />
          <span style={{ textAlign: 'right', display: 'block', fontSize: '120%', paddingRight: '10%' }}>V. G. L.</span>
          [faint pencil, bottom margin] Vernon G Locke [several additional faint marks, unclear; end]<br /><br />
        </p>

        <PageNumber num={212} />
        <p><span style={{ fontSize: '125%' }}>Cape Palmas West Coast Africa <time dateTime="1859-08-26">August 26/59</time></span><br />
          <br />
          This morning I awok with the sound of the crew mans song wild and desolate as it was in its nature there was musick in that sound that reminded me of sounds holy and [unclear] which rang in my Ears many months previous to parting with those sounds of Loveliness which I trust awaits the return of the wanderer methinks I see her now, the angel of my thoughts, awaits my greeting The high fore head, the least inclining with expressive thoughts her ies oerflow with cristal tears worth more to me than all the worth of Africs gold
        </p>
        <p>Thee Birth day Jem<br />
          for Vernon Guyon Locke<br />
          who was born the<time dateTime="1859-08-26"> 11th<br />
            of August 1830</time> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The meaning!<br />
          <br />
          He went away again the Second time and prayed Saying O my father if this cup may not pass away from me except I drink it Thy will be done<br />
          <br />
          The reason that I hate this Jem in particular and beside I write the cause<br />
          <br />
          Among the many impressive remarks reserved in my mind which is the better part of my education snached up at entervails in the buisy [illegible] of the day and in the the lonesome watch at<br /><br />
        </p>

        <PageNumber num={213} />
        <p>While mingling with the refined<br />
          and the rude wh[i]ch is the lot of the<br />
          sailor Boy who is the only one (a sailor true is he who rules)<br />
          deserveing that name<br />
          who rules the ship
        </p>
        <p>it was on a returned passage from an Indian port that I heard the most solem remark that ever touchd my heart from a father and captain who lost his son while at sea  by a fevour, he being about nineteen years of age the  captain going in to the cabin found his son dead the father immeadiately rose up first looking upon his child and then lifting his ies to Heaven whilst the tears ran Down his cheeks, only said <span style={{ textAlign: 'center', display: 'block' }}>Thy will be Done</span>
          <span style={{ textAlign: 'right', display: 'block' }}>[in a different hand] Thy will be done, done</span>
          <hr style={{ borderBottom: '1px dashed', borderLeft: '0', borderRight: '0', borderTop: '0', width: '75%' }} />
          [continues in different hand]<br />
          Left Mrs Watson[?] August 11th,<br />
          Arrived in Norfolk 16th, left<br />
          Norfolk Septr 12th, arrived in Charleston<br />
          on the <time dateTime="1861-09-14">14th/Septr/61</time> - On board Nashville <time dateTime="1861-10-01">Octr<br />
            1st/1861</time>. Advance up to November 1st/61.<br />
          Ship Watson came ashore October 18th<br />
          [end different hand]
          <br /><br />
        </p>

        <PageNumber num={214} />
        <p><span style={{ textAlign: 'center', display: 'block' }}>Laying at anchor in Junk roads</span>
          <span style={{ textAlign: 'center', display: 'block' }}>West coast africa</span>
          <span style={{ textAlign: 'center', display: 'block' }}><time dateTime="1859-09-10">Sept. 10th 1859</time> composed by V.G Locke</span><br />
          The Morn is dark the rain comes down<br />
          The Souls Beneath See not its froun<br />
          But heave about in Idleness<br />
          They See not they heed not the day<br />
          But gaping in Blindness Seek out the way<br />
          To Late tis the close of night<br />
          <br />
          Beneath that cloud that hovers oer<br />
          For us and Sin he passes oer<br />
          on us with Shame he frowns<br />
          <br />
          To clear the air of dust and Sin<br />
          Simpathising with those that is with in<br />
          That mist of dieing people<br />
          <br />
          That morning cloud has gone<br />
          And the past has with it flown<br />
          And lef[t] me with clear Noon<br />
          <br />
          Africa with all her golden Jem<br />
          her Sons they are but Slaves to men<br />
          and never will be free<br />
          <br />
          I have seen thy beauties all<br />
          The mountains and the vale<br />
          and the fevours trail<br />
          <br />
          all hail sweet departure fre[e?]<br />
          From africas cruel Shore to me[?]<br />
          Where Misery want and wo<br />
          <br />
          White man Set your sail and flee<br />
          Toward that Land of Liberty<br />
          <span style={{ paddingLeft: '25px' }}></span>The Land of the free<br />
          <br />
          <span style={{ fontSize: '120%' }}>Vernon Guyon Locke</span><br /><br />
        </p>

        <PageNumber num={215} />
        <p>Alnwick Castle Home of the Percy's<br />
          <br />
          Home of the Percy's high-born race,<br />
          Home of their beautiful and brave<br />
          Alike their birth and burial place<br />
          Their cradle and their grave!<br />
          Still sternly o'er the castle gate<br />
          Their house's lions stands in state<br />
          As in his proud departed hours,<br />
          And warriors frown in stone on high<br />
          And feudal banners “flout the sky<br />
          Above his princely towers.<br />
          <br />
          Gaze on the abbey's ruined pile<br />
          Does not the succouring ivy keeping<br />
          Her watch around it seem to smile<br />
          As o'er a lov'd one sleeping<br />
          One solitary turret gray<br />
          Still tells, in melancholy story<br />
          The legend of the Cheviot day<br />
          The Percy's proudest border story<br />
          <br />
          That day its roof was triumph's arch<br />
          Then ran[g] from aisle to pictured dome<br />
          The light-step of the soldiers march<br />
          The music of the trump and drum<br />
          And babe and sire, the old the young,<br />
          Welcomed the warrior home.<br />
          <br />
          Wise with the lore of centuries,<br />
          What tales if there be ”tongues in trees,”<br />
          Those giant oaks could tell,<br />
          Tales of the Peasant and the Peer,<br />
          Tales of the bridal and the bier<br />
          The welcome and farewell<br />
          Since on their boughs the startled bird<br />
          First in her twilight slumbers, heard<br />
          The Norman curfew bell.<br />
          <br />
          I wandered through the lofty halls<br />
          Trod by the Percy's of old fame<br />
          and traced upon the chapel walls<br />
          <br />


          <PageNumber num={216} />
          Each high and heroic name<br />
          For him who once his standard set<br />
          Where now o'er mosque and minaret,<br />
          Glitter the sultan's crescent moons,<br />
          To him who when a younger son<br />
          Fought for King George in Lexington<br />
          A Major of Dragoons.<br />
          <br />
          <span style={{ paddingLeft: '10%' }}>Written by a Percy.</span><br />
          <span style={{ paddingLeft: '11%', textDecoration: 'underline 1px double', textUnderlineOffset: '8px' }}>[penned flourish]</span>
        </p>
        <p>Oh, when wilt thou return<br />
          To greet thy own once more<br />
          To dwell for ever [unclear]<br />
        </p><br /><br /><br /><br /><br />

        <PageNumber num={217} />
        <p>My travels from the year 1846 to 1862.<br />
          <br />
          Left England for the Cape of Good Hope South Africa Landed in Cape Town <time dateTime="1847-01-07">January 7, 1847</time>. Left at the end of the month for Algoa Bay. and made stay of six months.  went on to Sidbury Park - half distance to Grahamstown, the eastern frontier capital, where I had the pleasure of being shut up in a church in Sidbury on account of the Caffies breaking out in a rebellion, after a month of this seclusion I resumed my journey to Grahamstown, spent a few weeks, returned to Sidbury, remained 3 months, then made up my mind to travel through the Interior as far as Port Natal. Left Sidbury again proceeded to Grahams Town, and got ready. being conveyed in an immense wagon with 14 oxen attached to draw it, laid in some provisions and procured a map of the country and departed. crossed a mountainous country infested with wolves, Jackalls, wild dogs monkeys  and antelopes. reached Cradock, a town 500 miles from Grahamstown, composed mostly of Dutch and Hottentots. put in a fresh supply; crossed the Fish river, a very deep, stong current winding river. went down a fearful steep bank to go through and came out with a very steep ascent. we crossed this river nine times before reaching the next town called Burghers dorp, a distance of 600 miles the country being a continuos plain for miles and verry arrid. now and then would sight an almost isolated Dutch Farm house, where we gave our oxen a rest, and regale ourselves with Fruit, milk and other little things. providing the parties did not bear too much aversision to the English some of them would scarcely allow us to unyoke our oxen on their land but would order us to move on out of their sight, calling us some very opprobious names. utterly denouncing us. then again, we would find them quite friendly. they live in a very isolated condition. Sons and Daughters never leave home until they are<br /><br />


          <PageNumber num={218} />
          let them be ever so poor. they are very economical in wearing apparel. one cotton dress lasts them a year. they never exceed two dresses, the men make their own shoes and for all the family out of sheep, ox or wild beasts skin and many wear nothing but pants made of the same. they all go to Church twice a year at the nearest villiage, which is often a distance of two or three hundred miles and travel with wagons and oxen at the rate of 10 and 15 miles a day others who are a little wealthier have a span of eight horses which takes them at a much quicker rate, the horses bred in the country is capable of going great journeys without much rest. it is no uncommon thing to travel a horse 14 or 20 miles from that to 30 without stopping (on our arrival at the last mentioned city we met with Dr. Livingstone the African traveller, who accompanied us some distance towards the territory of the Great Chief Moshesh. Dr. L. then struck off to the eastward, we intended to have left Moshesh country and take a straight Journey to Colesberg, but lost our way and got right into his dominion. we unyoked our oxen at the missionary station, called [unclear], our oxen by this time were nearly worked out, and the pasture being good, with plenty of water we thought of remaining there for a few days when low! the missionary told us a different tale. Moshesh was not on the best of terms with the english the war only being of late settled between him and the colonists, we therefore were advised not to prolong our stay beyond the night the station was to be a place of meeting the next day for hostile purposes and an affray between him and another chief the missionary could not answer for his own safety and felt satisfied that our oxen would be taken from us if we were to remain and perhaps ourselves made prisoners we took Tea with the missionary that evening and witnessed a very curious incident, the two chiefs who were to meet on the station next day, sent an ambassador from each party carrying with them a rooster under their blanket on arriving at the missionary's house each of them were to put down their birds and which ever way they turned their heads first, that party would surely conquor and the missionary had to give his word that there<br /><br />


          <PageNumber num={219} />
          may be no mistake about it. when the roosters were put down, they happened to turn their heads in different directions, instead of one way, which caused a great tumult between the two bearers. as they could not decide which party should win, they took their leave and went back to their homes. next morning Mr Valencenes[?] (the missionary's name) gave us a guide to take us through the mountains to a road. we left the station about 9 oclok A.M. and got on the first mountain from the station a distance of six miles, where we could look back on all the ground we had come over that morning. we saw all the men belonging to Moshesh [Moshoeshoe], mounted on horses, and could see their guns and assagais glittering in the air, the opposite party were not mounted, firing began and the moment our guide heard it he left us. he said he could not stop with us while his brothers were fighting. we had to proceed on alone and find our way the best we could, after a tedious rough journey of some miles we got into a road and there rested our oxen but not for any length of time as no water could be found. it is often the case that when we would find pasture there was no water, and when their was water, no pasture, we would sometimes go 20 miles and obtain neither which was very trying in the excessive heat of that climate. we proceeded on for a day or so, and took another road which led us into the territory of Sinkyouella [Sikyonela/Sekyonela], another chief who came up to us with some of his followers, all armed, and asked us what business had we to feed our oxen on his lands. and gave us one hour to leave or he would take our wepons from us and we should walk with him from off his lands a distance of some miles in the burning heat; and thick sands, in some parts. we left his majesty's domains and got out the best way we could and then made our way across the country once more, and fell into the hands of the Chief Sandilla [Sandile] noted for his withered limb. he came up to us from his huts with some of his wives and wished to make a purchase with us of some beads<br /><br />


          <PageNumber num={220} />
          which they adorn themselves very profusely with we exchanged beads for sheep and goats to eat on our way, he invited us to his hut, we were afraid to refuse, went with him and spent the afternoon with him, we were entirely in his power, if he had chosen to act otherwise than he did with us there was no help for us being only six souls to their thousands - that were around us. We partook of some sour milk from leathern bottles, made after the shape of the Egyptians, and some eggs which they gave us in abundance, he told us we had better move our wagons closer to his houses, or huts as they were far the Lions infested the marshy place we had stopped upon, under a mountain, this looked rather suspicious, yet we done as he advised us, and had no cause to complain, unless being disturbed by the lions distant roar wolves howling, jackalls barking and fear of loosing our oxen if they heard or smelt them, they would tear [unclear] in a hundred pieces and fly in all directions. We left this polite old chief next day giving him a good deal of tobacco for a present, which he thought a deal of. We got on our way towards Wynburg a town about a hundred miles from the Quathlamba mountains, arriving in that town was like going to a fancy fair, the Dutch had come from all parts of the Country to church and take sacrament some were dressed in every color of the rainbow with bonnets of a coal scuttle shape and their dresses about 2 yards wide, straight up and down as they possibly could be. We remained there two days and then proceeded on our Journey. from Wynburg we began to ascend the Quathlamba Mountains, but the traveller is not aware of ascending it until he reaches the summit it is so gradual it is impossible to believe you are gaining any ascendancy whatever. but when you come to the top and look around you and below it, it seems as if you were looking into a world below, the grandest and most extensive view I ever beheld! Mountains peering one above the<br /><br />


          <PageNumber num={221} />
          the other and one vast plain below. after a struggle of a day we descended the mountain, crawling down some part of it, the road was full of rocks on a sideland passage down. the poor oxen trod so cautiously fearful they would slip while the wagons were taken down by ropes. we rested under the mountain for the night amid the roar of lions, who kept up a constant thunder, one of our guides went down to the river for water, during the evening and as he stooped to dip it, he saw on the opposite side, something gazing at him he looked and perceived it was animal of some kind, and not being armed did not venture to move, presently the animal moved round and gave a tremendous sweep with his tail and walked away. he then saw that it was a lion, had he moved before it had left no doubt it would have sprung upon him, but he was spell bound with fright, and that saved him, when he came to the wagons he was so overcome that he fainted Next morning we proceeded on our journey after a few hours delay in trying to find our oxen which had broken away in the night on hearing the lions, We often have had to remain two or three days in search of them, for while feeding they stray away an immense distance. on leaving the mountains we came in sight of a lot of Bushmen who live in rocks and caves, living on herbs and wild horses, on seeing us they all fled up to a high hill, they were hunting the Zebra they had caught one and were skinning it. we took the skin and left, we had not proceeded far when they all came down and took the flesh away, these people are not quite three and a half feet high, their language seems to be nothing but a compound of klicks, made from the roof of the mouth and between the teeth, their weapons of war is a bow and arrow, which they shoot with great accuracy, the arrow bears a deadly poison made from a herb, they conceal themselves behind bushes while shooting them, and seldom or ever miss their object, the Dutch Farmers are pretty troubled by their incessant stealing of their cattle. after a fortnights journey from the mountains, we reached<br /><br />


          <PageNumber num={222} />
          Pietermaritzburg the capitol of Port Natal, our oxen were foot sore and as thin as rakes, after remaing there for a year, I took a small journey on to the Zulu territory visiting the Dutch and one or two stray English Farmers, and spent a few days by the Falls of the Omgeni [Umgeni] river, the falls are narrow but the body of water that falls over them is very great, they measure nearly two hundred feet in depth; the river is full of Crocediles and Hipopotamus, often while the natives are fording the river they are bitten in two by the crocodile; the Hipopotamus are very fond of oats and at night they leave the river, and get into the fields and destroy the crops dreadfully. on returning to P. M. Burg I took my way D'Urban, the Sea port town, a very sandy soil, it is sildom you meet with a Lady walking, they all have resource to horseback riding, before coming to the town you have to go through a great forest thick with low bush and sand and trace your way through by the paths, that the elephants make which are always travelling through it, a person never dreams of walking through it, they either go in wagons or on a horse and being aware of this at that time, I and a young Lady friend was impatient to get to the [unclear] and would not until the oxen that had strayed were found, to take us through in the wagons. we went on alone and walked through it, all we saw was a few hundred monkeys capering above our heads in high glee, we certainly heard while resting ourselves, a great cracking of trees and bushes which has been accounted that elephants were not far from us wending their way through, you often see a great tree rooted up - lying prostate here and there; The road through this forest is beautiful, the trees at the top together with creeping evergreens, form a complete archway right through and before entering the forest, you are in view of the most grand and extensive scenery that eye ever could behold, I have often read of the different sumeries[?] in other parts, and heard those that have visited them and these and they say that the scenery of Port Natal cannot be surpassed so picturesque, and so extensive In fact the whole of any journey through the interior was full of beautiful prospects with the same.<br /><br />


          <PageNumber num={223} />
          After a few weeks sojourn in D'Urban, we returned again Pietermaritzburg where I remained for another year after which I left for D'Urban again, and took my passage on a small schooner, the Leontine Mary and sailed for Algo Bay, experienced a very rough passage of 10 days, arrive in port and proceeded to a [unclear] town eighteen miles from Port Elizabeth, called Uitenhage, a place celebrated for its gardens and fruits after remaing nine months, I left for Graham's Town once more, made a visit of twelve months, and from there went on the Fish River to lead a country life for awhile visited a great many parts of the country and returned again to Graham's Town, left for Port Elizabeth, and back again to Grahamstown, back to Algo Bay - thence sailed to Cape Town, visited interior towns noted for their vineyards, [unclear] -- called Malmsbury Paarl and Wellington, each of them lying a hundred miles apart, returned to Cape Town, left again for Algoa Bay by sea (there are no railroads in Africa whenever you do not go by sea, you have to take the wagons and oxen travelling at the rate of 10 miles a day. A railroad was on the eve of being commenced in Cape Town to Wellington a distance of some 80[?] miles just on my leaving the Cape for America arrived in Algoa Bay remained two months, and then sailed for America. Arrived in Boston made a stay of a few days - proceeded to New York. from there visited Philadelphia Botimore on to Norfolk Virginia, returned to New York, and after a few months took a western route through the states to Charleston South Carolina, by way of Albany, Buffaloa, Cleveland Ohio, Centreville, Columbus, Cincinatti, Kentucky, Nashville, Chatanooga, Knoxville, Bristol, Lynchburg, Petersburg, Norfolk Virginia, Weldon to Wilmington North Carolina, Florence to Charleston South Carolina, where I now take my passage to Old England once more.<br /><br />
        </p>

        <PageNumber num={224} />
        <p>[written in pencil, different handwriting]<br />
          <br />
          A Stormy life by Georgiana Fullerton
        </p>
        <p>Guild Court <span style={{ paddingLeft: '15%' }}>Rolls</span>
          <table>
            <tr>
              <td style={{ paddingRight: '10px', verticalAlign: 'top', }}>2 quarts Flour</td>
              <td colSpan={2} style={{ paddingRight: '10px', verticalAlign: 'top' }}>1pt Milk</td>
              <td colSpan={3} style={{ paddingRight: '10px', verticalAlign: 'top' }}>tea of soda</td>
              <td colSpan={4} style={{ verticalAlign: 'top' }}>2 of Tartar</td>
            </tr>
            <tr>
              <td style={{ paddingRight: '10px', verticalAlign: 'top', }}>1# sugar</td>
              <td colSpan={2} style={{ paddingRight: '10px', verticalAlign: 'top', }}>1 of Flour</td>
              <td colSpan={3} style={{ paddingRight: '10px', verticalAlign: 'top', }}>10 Eggs</td>
              <td colSpan={4} style={{ verticalAlign: 'top', }}>rind &amp; juice of lemon</td>
            </tr>
          </table>
          <br />
          Pare 4 apples&nbsp;&nbsp;grate them fine&nbsp;&nbsp;make the following<br />
          custard into which stir the grated apple, flour 4<br />
          tablespoonfuls&nbsp;&nbsp;1 pt milk&nbsp;&nbsp;5 eggs little grated orange<br />
          peel&nbsp;&nbsp;then bake them after mixing<br />
          <br />
          Veal Rolls&nbsp;&nbsp;cut ½ inch thick&nbsp;&nbsp;rub them over with<br />
          egg egg [sic] &amp; bread crumb them &amp; fry<br />
          <br />
          4 tablespoon flour&nbsp;&nbsp;3 eggs&nbsp;&nbsp;as much milk as well<br />
          make into a batter&nbsp;&nbsp;salt bake<br />
        </p>
        <p>Napolean &amp; Blucher by L. Muhlbach<br />
          <br />
          Empress Josephine&nbsp;&nbsp;&nbsp;&nbsp;L Muhlbach<br />
          <br />
          Frederick the Great &amp; his Court<br />
          <br />
          Louisa of Prussia &amp; her time<br />
          <br />
          Henry 8' &amp; Catherine Parr<br />
          <br />
          [end pencil]
        </p>
        <p>[written in ink, a different hand, upside down]<br />
          Mrs. E. L. Locke<br />
          Cumberland St.[?]<br />
          [end]</p>
        <br /><br /><br /><br />

        <PageNumber num={225} />
        <p>[written in pencil]<br />
          Kelly, Peel &amp; Co<br />
          Ball<br />
          <br />
          Key to the exercises in Elementary Arithmetic<br />
          &nbsp;&nbsp;50ct<br />
          First Lessons in language, or elements of English grammer<br />
          Gradual lessons in grammar (Construction of the English Language) 90cts<br />
          Key to intellectual Algebra 60c<br />
          First Steps in French by P.F. Gournay 60<br />
          <br />
          [bottom of page has been removed]
          <br /><br /><br /><br /><br /><br />
        </p>

        <PageNumber num={226} />
        <p><br /><span style={{ display: 'block', textAlign: 'right' }}><time dateTime="1861-11-08">Saturday Nov 8th '61</time></span>
          <br />
          Nov 8th&nbsp;&nbsp;Left Charleston for St. Helena with 3 boats and eight men <del>and proceeded</del> with the purpose of bringing up the negroes from off the plantation. arrived there at 4 o O Clock Monday afternoon went ashore <del>found</del> saw several negroes on the plantation and immediately on seeing us they all fled, to the woods with the exception of 8 or 10 who informed us that their overseer had left them a week <del>ago</del> from that time, they expressed themselves willingly to leave with us and that they would pressuade the others to do so. <del>but the first opportunity they could get</del> we then went and prepared our boats for them and <del>during that time, they</del> on returning, we found they had gone, instead of getting their things in readiness as promised during our absence. Returned to our boats for the night, next morning at 9 O C - went ashore and proceeded to the house where we found everything destroyed, with the exception of the Library we saw them about 1/2 mile from us <del>and still kept retreating, we could not get near them</del> as we advanced they retreated nearly all of them were armed with some kind of weapons, guns, axes, and sticks whirling them in the air and calling for us to come on in oaths, and daring us to come <del>on with curses</del> using profane language <del>calling us</del> all <del>Mulatto's</del> the while, finding it no use to remain we proceeded to our boats, <del>when</del> some of them came down on the beach and fired two shots at us we were then 1/2[?] mile from the shore, seeing that our exertions were useless to procure them, we made <del>for</del> our way for Charleston.<br />
          <br />[bottom of page has been removed]
          <br /><br /><br /><br /><br /><br />
        </p>

        <PageNumber num={227} />
        <p>E. Lawrence &amp; Co<br />
          Cook St<br />
          <span style={{ float: 'left' }}>Liverpool</span><span style={{ display: 'block', float: 'right' }}>Falmouth<br />April 26</span><br />
          <br />
          To E. Lawrence Esq<br />
          <br />
          Dear Sir<br />
          <br />
          I write to inform you of our arrival in Falmouth this morning we laid over last night on account of a rain storm. The vessels speed is all I expected going at the rate of nine knots an hour, - average speed, with Twelve pounds of Steam; her highest power of steam is eighteen pounds, which would give her ten knot speed in case of necessity Every thing seems to be very agreeable on Board The Captain is a decent old fellow more so than I anticipated, we have got along so far like Brothers. Present my kind regards to Mr. Taylor.<br />
          <span style={{ display: 'block', textAlign: 'right', paddingRight: '6%' }}>And Believe me<br /></span>
          <span style={{ display: 'block', textAlign: 'right', paddingRight: '10%' }}>to remain</span>
          <span style={{ display: 'block', textAlign: 'right' }}> Yours very respectfully</span>
          <span style={{ display: 'block', textAlign: 'right' }}>V. G. Locke</span>
          <br /><br /><br /><br />
          [upside down at bottom of page]<br />
          F Falmouth<br />
          A April<br />
          Dear Sir<br /><br />
        </p>

        <PageNumber num={228} />
        <p><span style={{ fontSize: '120%', display: 'block', textAlign: 'center' }}>An Act<br /></span>
          Recognizing the existence of war between the
          United States and the Confederate States; and
          concerning letters of Marque, Prizes and prize goods.<br />
          <hr style={{ width: '80%' }} />
          Whereas the earnest efforts made by the Government
          to establish friendly relations between the Government of
          the United States and the Confederate States, and to settle
          all questions of disagreement between the two Governments
          upon principles of right, justice, equity, and good faith have
          proved unavailing by reason of the refusal of the Government
          of the United States to hold any intercourse with the Commissioners
          appointed by this government for the purposes aforesaid
          or to listen to any proposals they had to make for the peaceful
          solution of all causes of difficulty between the two Governments;<br />
          And whereas the President of the United States of America has
          issued his proclamation making requisition upon the states of the
          American Union for seventy five thousand men for the purpose,
          as therein indicated, of capturing forts and other strong holds
          within the jurisdiction of and belonging to the Confederate States
          of America, and has detailed naval aramants upon the coasts
          of the Confederate States of America, and raised, organized,
          and equipped a large military force to execute the purpose
          aforesaid, and has issued his other proclamation
          announcing his purpose to set on foot a blockade of the ports
          of the Confederate States: and whereas the state of Virginia has
          seceded from the Federal Union and entered into a
          convention of alliance offensive and defensive with the Confederate
          States and has adopted the Provisional Constitution of the said states
          and the states of Maryland, North Carolina, Tennesee, Kentucky,
          Arkansas and Missouri have refused, and it is believed
          that the state of Delaware and the inhabitants of the
          Territories of Arizona and New Mexico and the Indian
          Territory South of Kansas, will refuse to cooperate with
          the government of the United States I these acts of
          hostilities and wanton aggression, which are plainly
          intended to overawe, oppress, and finally subjugate the
          people of the Confederate States and whereas by the acts
          and means aforesaid, war exists between the
          Confederate States and the Government of the United
          States and Territories thereof, except the states of Maryland
          North Carolina, Tenessee, Kentucky, Arkansas, Missouri,<br /><br />

          <PageNumber num={229} />
          and Deleware, and the Territories of Arizona and New Mexico
          and the Indian Territory south of Kansas, Therefore, (Sect 1.<br />
          <span style={{ textDecoration: 'underline 1px', textUnderlineOffset: '4px' }}>The Congress of the Confederate States of America do enact,</span><br />
          that the President of the Confederate States is hereby authorized
          to use the whole land and naval force of the Confederate States
          to meet the war thus commenced, and to issue to private armed
          vessels commissions or letters of marque and general reprisal,
          in such form as he shall think proper, under the seal of the
          Confederate States, against the vessels, goods, and effects of
          the Government of the United States, and of the Citizens or
          inhabitants of the States and Territories thereof:<span style={{ textDecoration: 'underline 1px', textUnderlineOffset: '4px' }}> Provided however</span>
          , that property of the enemy (unless it be contraband
          of war) laden on board a neutral vessel shall not be subject
          to seizure under this act; <span style={{ textDecoration: 'underline 1px', textUnderlineOffset: '4px' }}>And provided further</span>, that
          the vessels of the citizens, or inhabitants of the United States
          now in the ports of the Confederate States, except such has have
          been since the 5th of April last, or may hereafter be in the service
          of the Government of the United States, shall be allowed thirty days
          after the publication of this act to leave said ports, and reach
          their destinations; and such vessels and their cargoes, excepting
          articles contraband of war, shall not be subject to capture under
          this act during said period, unless they shall have previously
          reached the destination for which they were bound on leaving
          said ports. Sect. 2nd. That the President of the Confederate
          shall be and is hereby authorized and empowered
          to revoke and annul at pleasure, all letters of marque
          and reprisal which he may at any time grant pursuant
          to this act. Sect. 3. That all persons applying for letters
          of marque and reprisal pursuant to this act, shall state
          in writing the name, and a suitable description of the
          tonnage and force of the vessel, and the name and
          place of residence of each owner concerned therein,
          the intended number of the crew; which statement
          shall be signed by the person or persons making such
          application and filed with the Secretary of State or
          shall be delivered to any other offices or persons who
          shall be employed to deliver out such commissions
          to be by him transmitted to the Secretary of State
          Sect. 4. That before any commissions or letters of
          marque and reprisal shall be issued as aforesaid
          the owner or owners of the ship of vessel for which
          the same shall be requested and the commander<br /><br />

          <PageNumber num={230} />
          thereof for the time being, shall give  bond to the Confederate
          States with at least, two responsible sureties, not interested
          in such vessel, in the penal sum of five thousand dollars: or
          if such vessel be provided with more than one hundred
          and fifty crew, then in the penal sum of ten thousand
          dollars, with condition that the owners, officers and crew,
          who shall be employed on board such commissioned
          vessel shall and will observe the laws of the Confederate
          States, and the instructions which shall be given them
          according to the law, for the regulation of their conduct;
          and will satisfy all damages and injuries which
          shall be done or committed contrary to the tenor
          thereof, by such vessel, during her commission,
          and to deliver up the same when revoked by the
          President of the Confederate States. Sect. 5th That all
          captures and prizes of vessels and property shall be
          forfeited and shall accrue to the owners, officers
          and crews of the vessels by whom such captures and
          prizes shall be made; and on due condemnation had shall
          be distributed according to any written agreement which
          shall be made between them; and if there be no such
          written agreement, then one moiety to the owners, and
          the other moiety to the officers and crew, as nearly as may
          be according to the rules prescribed for the distribution
          of prize money, by the laws of the Confederate States.
          Sect 6th That all vessels, goods and effects, the property of
          any citizen of the Confederate States, or of persons residing
          and under the protection of the Confederate
          States, or persons permanently within the Territories and
          under the protection of any foreign prince and government
          or state in unity with the Confederate States, which
          shall be recaptured by vessels commissioned as
          aforesaid, shall be restored to the lawful owners upon
          payment by them of a just and reasonable salvage
          to be determined by the mutual agreement of the parties
          concerned, or by the decree of any court having
          jurisdiction, according to the nature of each case,
          agreeably to the provisions established by law - And
          such salvage shall be distributed among the
          owners, officers, and crews of the vessels
          commissioned as aforesaid, and making such<br /><br />


          <PageNumber num={231} />
          captures, according to any written agreement which shall
          be made between them; and in case of no such agreement
          then in the same manner and upon the principles hereinbefore
          provided in cases of capture. Sect. 7th That before breaking
          bulk of any vessel which shall be captured as aforesaid, or
          other disposal or conversion thereof or of any articles which
          shall be found on board the same, such captured vessels
          goods, or effects shall be brought into some port of the
          Confederate States, or of a nation or state in amity with the
          Confederate States, and shall be proceeded against before a
          competent tribunal; and after condemnation and forfeiture
          thereof, shall belong to the owners, officers, and crew of the vessel
          capturing the same and be distributed as before provided; and
          in the case of all captured vessels, goods, and effects which
          shall be brought within the jurisdiction of the Confederate States,
          the district courts of the Confederate States shall have
          exclusive, original cognizance thereof, as in civil causes
          of admiralty and maratime [sic] jurisdiction; and the
          said courts, or the courts, being courts of the Confederate
          States into which such cases shall be removed, and in
          which they shall be finally decided, shall and may
          decree restitution, in whole, or in part, when the capture
          shall have been made without just cause. And if
          made without probable cause , may order and decree
          damages and costs to the party injured, for which
          owners and commanders of the vessels making such captures
          and also the vessels, shall be liable. Sect 8th That all
          persons found on board any captured vessels, or on
          board any recaptured vessel, shall be reported to the
          collector of the port in the Confederate States in which they
          shall first arrive, and shall be delivered into the
          custody of the Marshall of the district or some court
          or military officer of the Confederate States, or of any
          state in or near such port, who shall take charge
          of their safe keeping and support, at the expense of
          the Confederate States. Sect 9th That the President
          of the Confederate States is hereby authorized to
          establish and order suitable instructions for the
          better governing and directing the conduct of
          the vessels so commissioned, their officers and
          crews, copies of which shall be delivered by the
          collector of the customs, to the commander, when they<br /><br />


          <PageNumber num={232} />
          shall give bond as provided. Sect. 10th That a bounty
          shall be paid by the Confederate States of $20 for each person
          on board any armed ship of vessel, belonging to the United
          States, at the commencement of an engagement, which
          shall be burnt, sunk, or destroyed by any vessel
          commissioned as aforesaid which shall be of equal or
          inferior force, the same to be divided as in other cases of
          prize money - and a bounty of $25 shall be paid to the
          owners, officers, and crews of the private armed vessels
          commissioned as aforesaid, for each and every prisoner
          by them captured and brought into port, and delivered
          to an agent authorized to receive them in any port of the
          Confederate States; and the Secretary of the Treasury is hereby
          authorized to pay or cause to be paid to the owners, officers
          and crews of such private armed vessels, commissioned as
          aforesaid, or their agent, the bounties herein provided.
          Sect. 11. That the commanding officer of every vessel
          having a commission, or letters of marque and reprisal,
          during the present hostilities between the Confederate States
          and the United States, shall keep a regular journal
          containing a true and exact account of his daily proceedings
          and transactions with such vessel and the crew there of
          the ports and places he shall put into, or cast anchor in;
          the time of his stay there, and the cause thereof; the prizes
          he shall take, and the nature and probable value thereof
          the times and  places, when, and where taken and in
          what manner he shall dispose of the same; the ships or
          vessels he shall fall in with; the times and places when
          and where, he shall meet with them, and his observations
          and remarks thereon. Also, of whatever else shall occur
          to him, or any of his officers or marines, or be discovered
          by examination or conference with any marines or
          passengers, or in any other ship or vessels, or by any
          other means touching the fleets, vessels, and forces of
          the United States; their posts and places of station and
          destination, strength, numbers, intents and designs; and
          such commanding officer shall immediately on his
          arrival in any port of the Confederate States, from or
          during the continuance of any voyages or cruises produce
          his commission for such vessel, and deliver up such
          journal so kept as aforesaid, signed with his proper
          name and hand writing to the collector or<br /><br />


          <PageNumber num={233} />
          other chief officer of the customs at or nearest to such port; the
          truth of which journal shall be verified by the oath of the
          commanding officer for the time being, and such collector or
          other chief officer of the customs shall immediately on the arrival
          of such vessel, order the proper officer of the customs to go on
          board and take an account of the officers and men, the
          number and nature of the guns, and whatever else shall
          occur to him on examination, essential to be known, and
          no such vessel shall be permitted to sail out of port again
          until such journal shall have been delivered up, and
          a certificate obtained, under the hand of such
          collector, or other chief officer of the customs, that she
          is manned, and armed according to her commission,
          and upon delivery of such certificate any former
          certificate of a like nature which shall have been
          obtained by the commander of such vessel, shall be
          delivered up. (Sect 12th That the commander of
          vessels having letters of marque and reprisal, as
          aforesaid, neglecting to keep a journal as aforesaid
          or willfully making fraudulent entries theirin [sic], or
          obliterating the record of any material transactions
          contained  theirein, where the interest of the Confederate
          States is concerned, or refusing to produce and deliver
          such journal, commission or certificate, pursuant
          to the preceding section of this act, then, and in such
          cases, the commissions or letters of marque and reprisal
          of such vessels, shall be liable to be revoked; and such
          commanders, respectively shall forfeit for every such
          offence the sum of $1000, one moiety thereof to the
          use of the Confederate States, and the other to the informer.
          Sect 13) That the owners or commanders of vessels having
          letters of marque and reprisal as aforesaid who shall
          violate any of the acts of Congress for the Collection of the
          revenue of the Confederate States, and for the
          prevention of smuggling, shall forfeit the commission
          or letters of marque and reprisal, and they and the
          vessels owned or commanded by them shall be
          liable to all penalties and forfeitures attaching
          to merchant  vessels, in like cases.
          Sect 14th That on all goods, wares and merchandise
          captured and made good and lawful prize of war,
          by any private armed ship having commission or<br /><br />


          <PageNumber num={234} />
          [in the top margin, a series of letters or symbols all separated by several spaces and resembling the following:]<br />&nbsp;&nbsp;&nbsp;L&nbsp;&nbsp;&nbsp;|~&nbsp;&nbsp;&nbsp;b&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;Y[?]&nbsp;lmn&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;Z[?]<br />
          [end notations]
          <br /><br />
          or letters of marque and reprisal under this act and brought
          into the Confederate States there shall be allowed a deduction
          of 33 1-3 per cent on the amount of duties imposed by law.
          Sect 15) That five per centum on the net amount
          (after deducting all charges and expenditures) of the prize
          money arising from captured vessels and cargoes, and on
          the net amount of the salvage of vessels and cargoes
          recaptured by private armed vessels of the Confederate
          States shall be secured and paid over to the collector
          or other chief officer of the customs, at the port or place
          in the Confederate States, at which such captured
          or recaptured vessels may arrive, or to the consul
          or other public agent of the Confederate States, at which
          such captured or recaptured vessels may arrive
          and the monies arising therefrom shall be  held
          and are hereby pledged by the government of the
          Confederate States as a fund for the support
          and maintenance of the widow and orphans of
          such persons as may be slain, and for the support
          and maintenance of such persons as may be wounded
          and disabled on board of the private armed vessels
          commissioned as aforesaid, in any engagement
          with the enemy, to be assigned and distributed
          in such manner as shall hereafter be provided by
          law. <span style={{ float: 'right', display: 'block', paddingRight: '9%' }}>Howel Cobb<br /></span><br />
          <span style={{ float: 'right', display: 'block' }}>President of the Congress<br /></span><br />
          Approved <time dateTime="1861-05-06">May 6th 1861</time> <span style={{ float: 'right', display: 'block', paddingRight: '6%' }}>Jefferson Davis</span>
        </p>
        <p><span style={{ textAlign: 'center', display: 'block' }}>Presidents <span style={{ textDecoration: 'underline 1px', textUnderlineOffset: '8px' }}>instructions to private</span> armed vessels</span><br />
          1&nbsp;&nbsp;The tenor of your commission under the act of Congress
          entitled “An Act, recognizing the existence of war
          between the United States and the Confederate States
          and concerning letters of Marque, prizes, and prize
          goods “ a copy of which is hereto annexed, will be kept
          constantly in your view. The high seas reffered [sic]
          to in your commissions, you will understand
          generally to refer to low water mark, but with
          the exception of the space within one league, or
          three miles from the shore of countries at peace
          both with the United States and the Confederate
          States. You may nevertheless execute your<br /><br />


          <PageNumber num={235} />
          commission within that distance of the shore of a
          nation at war with the United States and even on the
          waters within jurisdiction of such nation, if permitted
          to do so. (2nd) You are to pay the strictest regard to the
          rights of neutral powers, and the usages of civilized
          nations; and in all your proceedings toward neutral
          vessels, you are to give them as little molestation or
          interruption as will consist with the right of ascertaining
          their neutral character, and of detaining and bringing
          them in for regular adjudication, in the proper cases.
          Your are particularly to avoid even the appearance of
          using force, or seduction with a view to deprive such
          vessels of their crews or of their passengers, other than
          persons in the military service of the enemy.
          3rd&nbsp;&nbsp;Towards enemy vessels and their crews, you are to
          proceed in exercising the rights of war, with all the
          justice and humanity which characterize this
          government and its citizens. (4th) The master and one
          or more of the principal persons belonging to the captured
          vessels are to be sent as soon after the capture as may
          be, to the judge or judges of the proper court in the
          Confederate states, to be examined, by oath touching on
          the interest or property of the captured vessel and
          her lading; and at the same time are to be
          delivered to the judge or judges, all papers, charter
          parties, bills of lading, letters and other documents,
          and writings found on board; the said papers to be
          proved by the affidavit of the commander of the
          capturing vessel, or some other person present at the
          capture to be produced as they were received, without
          fraud, addition, subduction, or embezzlement.
          5th)&nbsp;&nbsp;Property even of the enemy, is exempt from seizure
          on neutral vessels, unless it be contraband of war.
          If goods contraband of war are found on any neutral
          vessel, and the commander thereof shall offer to deliver
          them up, the offer shall be accepted, and the vessel
          left at liberty to persue its voyage, unless the quantity
          of contraband goods be greater than can be
          conveniently received on board your vessel, in which
          case the neutral vessel may be carried into port for
          delivery of the contraband goods. The following articles
          are deemed by this government contraband of war,<br /><br />


          <PageNumber num={236} />
          as well as all others that are so declared by the law
          of nations, viz. All arms and implements serving
          for the purposes of war by land or sea, such as
          cannons, mortars, guns, muskets, rifles, pistols, petards,
          bombs, grenades, shell ball, shot, fuses, pikes, swords
          bayonets, javelins, lances, horse furniture, holsters belts
          and generally all other implements of war. Also
          timber for ship building, pitch, tar, rosin, copper
          in sheets, sails hemp cordage, and generally whatever
          may serve directly to the equipment of vessels, unwrought
          iron and planks only excepted.<br />
          Neutral vessels conveying enemy's despatches or military
          persons in the service of the enemy, forfeit their neutral
          character and are liable to capture and condemnation.
          But this rule does not apply to neutral vessels
          bearing despatches from the public ministers or
          ambassadors of the enemy residing in neutral
          countries. By the command of the President of the
          Confederate States <span style={{ float: 'right', display: 'block' }}>Robert Toombs<br />Secretary of State</span>
        </p>
        <br /><p><span style={{ textAlign: 'center', display: 'block' }}>Form of Bond</span>
          Know all men by these presents, that we (Note 1) <span style={{ paddingRight: '80px' }}>(</span>) are bound to the Confederate States of America in the full
          sum of <span style={{ paddingRight: '30px' }}>(Note 2)</span> thousand dollars, to the payment
          whereof well and truly to be made, we bind ourselves, our heirs
          executors, and administrators, jointly and severally by these presents.
          The condition of this obligation is such, that whereas application
          has been made to the said Confederate States of America,
          for the Grant of a Commission or Letter of Marque and general
          reprisals  authorizing the (Note 3) or <span style={{ paddingRight: '60px' }}>vessel called the</span>
          to act as a private armed vessel in the service
          of the Confederate States, on the high seas, against the United
          States of America, its ships and vessels, and those of its
          citizens, during the pendency of the war now existing between
          the said Confederate States and the said United States.
          Now if the owners, officers, and crew who shall be
          employed on board of said vessel, when commissioned
          shall observe the laws of the Confederate States and the
          instructions which shall be given them according
          to law for the regulation of their conduct; and
          shall satisfy all damages and injuries which
          shall be done or committed contrary to the<br /><br />


          <PageNumber num={237} />
          terms thereof by such vessel during her commission
          and shall deliver up said commission, when
          revoked by the President of the Confederate States,
          then this obligation shall be void, but otherwise
          shall remain in full force and effect.<br />
          <span style={{ marginLeft: '40px' }}>Signed,</span> sealed, and delivered in
          <span style={{ paddingRight: '60px' }}>presence of</span> on this <span style={{ paddingRight: '30px' }}></span> <span style={{ paddingRight: '60px' }}>day of</span><br />
          <br />
          A. B. {'}'}<br />
          C. D. {'}'} Witnesses<br />
          <span style={{ textAlign: 'right', display: 'block' }}>Seal<br />
            Seal<br />
            Seal<br />
            Seal</span>
          <br />
          Note 1. This blank must be filled with the name of
          the Commander, for the time being and the owner or
          owners, and at least two responsible sureties, not
          interested in the vessel<br />
          Note 2nd. This blank must be filled a “five”, if the
          Bessel be provided only with 150 men, or a less number,
          if with more than that number, the blank must be
          filled with a “ten”.<br />
          Note 3. This blank must be filled with the character
          of the vessel, “ship “brig  “Schooner “ “Steamer” &amp;c &amp;c<br />
          <br />
          [bottom third of page is missing]
          <br /><br /><br /><br /><br /><br />
        </p>

        <PageNumber num={238} />
        <p>[blank page, bottom third is missing]
          <br /><br /><br /><br /><br /><br />
        </p>

        <PageNumber num={239} />
        <p><span style={{ marginLeft: '80px', fontSize: '125%' }}>O Tempores! O Mores!</span><br />
          <br />
          The times are hard, hard as a brick,<br />
          and what is worse, <span style={{ textDecoration: 'underline' }}>now</span> there's no tick.<br />
          "Cash cash, no credit, never more,"<br />
          Stuck up in every body's store.<br />
          Where's a fellow to get his grub<br />
          That has no money?  There's the rub. -<br />
          And when he gets all cold &amp; wet,<br />
          And nothing in his pocket yet;<br />
          Where's the wood he's going to buy,<br />
          To make a fire his clothes to dry?<br />
          S'pose he gets sick, I'd like to know,<br />
          How he'll <span style={{ textDecoration: 'underline' }}>ile</span> from Horne &amp; Co.<br />
          Then s'pose for want of it - he dies;<br />
          Nobody cares, no body cries,<br />
          "No money, no coffin, no sir!<br />
          "You may bury him just so, sir."<br />
          Then, last of all, the dead can crave,<br />
          A decent grave - who'll dig his grave?<br />
          Grave digger, "Why I s'pose sir,<br />
          The buzzards &amp; the crows, sir.<br />
          So mote it be.  He'll want no more.<br />
          Good Lord!  'Tis dreadful to be poor.<br />
          "All cash, all cash,"  <span style={{ textDecoration: 'underline' }}>now</span> there's no tick<br />
          For the poor half starving sick.<br />
          S'pose a fellow's feeling badly.<br />
          And would take a drink most gladly.<br />
          Whose going to trust him, do you think<br />
          Even for one poor little drink?<br />
          For punch, or oysters, cold or raw?<br />
          Not Jones, nor Poe, nor Overbaugh.<br />
          Good Lord!  no money bread nor meat;<br />
          <span style={{ textDecoration: 'underline' }}>Taturs</span>, nor nothing else to eat!<br />
          Our gardens soon would furnish feed,<br />
          But Jimmy Smith won't trust for seed.<br />
          And Powers &amp; Pemberton &amp; so on,<br />
          Won't tick for anything to "go on"<br />
          Till garden seed herbs are up &amp; ripe,<br />
          And Tomlinson won't <span style={{ textDecoration: 'underline' }}>trust</span> for tripe,<br />
          "Woodward's Play" no doubt you've read it,<br />
          But nary coat he'll sell on credit - continued<br /><br />


          <PageNumber num={240} />
          "You need a hat" Thomson will tell you;<br />
          But devil of a hat <span style={{ textDecoration: 'underline' }}>he'll</span> sell you,<br />
          On credit, or on tick so called,<br />
          Not if your head is sore &amp; bald.<br />
          You need some cloth or calico<br />
          To make your wife a dress or so.<br />
          Friend Hector (not of Troy renown<br />
          But Hector Mac of our town)<br />
          Takes your arm and leads you in;<br />
          "How do you do, how have you been;"<br />
          Hector'll sell you all he can<br />
          But - on the "European Plan"<br />
          That means, in other words, no tick;<br />
          As some say Bickard, others, tick.<br />
          Or thus, a "Pellicoat for Sal.<br />
          Alias, [unclear] Salli's Balmoral."<br />
          You'd like some finery perhaps?<br />
          Ladies gaiters or fancy caps?<br />
          Walk in that double large glass door,<br />
          S. &amp; V's new dry goods store,<br />
          Silks &amp; satins there you'll find,<br />
          and finery of every kind.<br />
          Some spread out &amp; some in piles,<br />
          All enhanced by warming smiles.<br />
          Now <span style={{ textDecoration: 'underline' }}>poor</span> fellow, (with a sigh)<br />
          Say "indeed I'd like to buy.<br />
          A few warm dresses, but - "but what!"<br />
          "The wherewithal I have not got."<br />
          Then "Presto" change "He smiles no more,<br />
          But kindly heads you to the door.<br />
          Well, well, no clothes, not hat, no shoes,<br />
          No brandy smash no oyster stews;<br />
          No money and no trusting friends.<br />
          Thus our "Poor Devil's" chapter ends.<br />
          <br />
          Tomoressho[?]<br /><br />
        </p>

        <PageNumber num={241} />
        <p>[right side of page and about 1/3rd of the bottom of the page are torn away]<br />
          <br />
          The horrors of war - [ . . . ]<br />
          army was entering the Tow[ . . . ]<br />
          North Carolina March 11th [ . . . ]<br />
          <br />
          <span style={{ marginLeft: '40px', display: 'block' }}> Soldiers plundering,<br />
            Cannon thundering,<br />
            Dying, groaning<br />
            Wounded moaning<br />
            Buildings crashing,<br />
            Armor clashing,<br />
            Wagons rattling<br />
            Horsemen battling;<br /></span>

          Helmets ringing with the blows [ . . . ]<br />
          Which the ponderous sword [ . . . ]<br />
          Pris'ners on their knees, entrea[ . . . ]<br />
          Trumpets sounding, drums [ . . . ]<br />
          Victors shouting, slaying, swearing [ . . . ]<br />
          Eagles wresting, standards tearing [ . . . ]<br />
          Showers of shot, grenades, [ . . . ]<br />
          Dismal shrieks, terrific [ . . . ]<br />
          <span style={{ marginLeft: '40px', display: 'block' }}>Falling roofs,<br />
            Noise of hoofs,<br />
            Combat, din<br />
            Without, within,<br /></span>
          All was mingled horro[ . . . ]<br />
          Madness, <span style={{ textDecoration: 'underline double', textUnderlineOffset: '10px' }}
          >suffering</span>, ra[ . . . ]<br /><br /><br />
        </p>

        <PageNumber num={242} />
        <p>[left side of page and about 1/3rd of the bottom of the page are torn away]<br />
          <br />
          [upside down on page]<br />
          <span style={{ textAlign: 'center', display: 'block' }}>Mary&nbsp;&nbsp;&nbsp;Annie</span>
          [end]
          <br /><br /><br /><br /><br /><br />

        </p>

        <PageNumber num={243} />
        <p>Elisha<br />
          Mr. Davis<br />
          <span style={{ paddingLeft: '15%' }}>Dear Sir,</span><br />
          <span style={{ paddingLeft: '25%' }}>I</span> hope you will pardon the liberty I take in addressing you. The only excuse I <s>can</s> <s>make</s> have is the extreme anxiety <s>I have</s> I am daily laboring under about my daughter Lelia, your son's Frank's wife, - whose welfare, no doubt, you as a parent, are also interested in.<br />
          I have put off from day to day - addressing you on this painful subject, but <u style={{ textUnderlineOffset: '4px' }}>urgent</u> necessity compels me at last to do so. I have tried as far as it lies in my power to supply the wants of Lelia &amp; her two helpless, innocent children - now my eye sight has failed me - &amp; I am obliged to go to the county &amp; be depending on kind relashins in order to procure a subsistence  <u style={{ textUnderlineOffset: '4px' }}>for myself</u>. Lelia has been here about 9 months &amp; the assistance that Frank has sent her during that time has barely been enough to clothe her - her <s>expenses</s> confinement expenses wholly devolved upon me. &amp; I assure you that I have worked day and night in order to keep a shelter over our heads and bread to eat.<br />
          I should have written to Frank but as I cannot but feel he is almost neglectful, as well as indifferent about his family, I concluded that advise from you reminding him of his duty would have more weight than a letter from me to him. I think the best course to persue now for the welfare of both Lelia &amp; Frank would be for them to live no longer live separated from each other. A situation can be easily obtained for him here, but he does not seem to care about coming to take it. In that case Lelia had better go to him, which she must certainly do or suffer. Her lot is a very hard one <u style={{ textUnderlineOffset: '4px' }}>too</u> hard for [unclear] [unclear] [unclear] her.<br /><br />
        </p>

        <PageNumber num={244} />
        <p><time dateTime="1867-03-13">March 13th<br />
          1867</time> -<br />
          at Fayetteville<br />
          Monticillo <span style={{ paddingLeft: '10%' }}>Oh, I, am a Good Old Rebel!</span><br />
          <br />
          O, I, am a good old rebel,<br />
          Now that's just what I am,<br />
          For this “fair Land of Freedom”<br />
          I do not care a dam.<br />
          I'm glad we fit agin it,<br />
          I only wish we'd won.<br />
          I don't want my pardon<br />
          For anything I've done.<br />
          2<br />
          I hates the Constitution,<br />
          This great Republic too.<br />
          I hates the Freedmen's Buro,<br />
          In uniforms of blue;<br />
          I hates the nasty eagle,<br />
          With all his brag &amp; fuss,<br />
          The lying, thieving Yankees,<br />
          I hates 'em wuss &amp; wuss.<br />
          3<br />
          I hates the Yankee nation,<br />
          And everything they do.<br />
          I hates the Declaration<br />
          Of Independence too.<br />
          I hates the glorious union<br />
          'Tis dripping with our blood.<br />
          I hates their striped banner<br />
          I fit it all I could.<br />
          4<br />
          I followed old Mas' Robert<br />
          Four years or nigh about,<br />
          Got wounded in three places<br />
          and arved at Pint Lookout.<br />
          I catched the roomatism<br />
          A camping in the snow.<br />
          And I killed a chance of Yankees,<br />
          And I'd like to kill some mo.<br />
          5<br />
          Three hundred thousand Yankees<br />
          Lie stiff in Southern dust,<br />
          We got three hundred thousand<br />
          Before they conquered us.<br />
          They died of Southern fever,<br />
          and Southern steel &amp; shot<br />
          I wish they was three millions<br />
          Instead of what we got.<br />
          <u style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>6th Verse</u><br />
          I can't take up my musket,<br />
          And fit 'em now no more,<br />
          But I aint a goin to love 'em<br />
          Now that is sartain sure,<br />
          And I don't want, sir, any pardon<br />
          For what I was and am<br />
          I won't be reconstructed,<br />
          If I do, may I be dam.<br /><br />
        </p>

        <PageNumber num={245} />
        <p><span style={{ textAlign: 'center', display: 'block' }}><time dateTime="1861-11-08">August the 7th 1854</time></span><br />
          <span style={{ paddingLeft: '15%' }}>This is to certify</span> that wee the under sined having recieved all the wages due to us from the brig'nt Sonora of Pictou, doo declare that wee have no demand whatever upon said Brig or owners<br />
          <br />
          <span style={{ paddingLeft: '15%', display: 'block' }}>Recived of Vernon Locke two months and 14 days wages at 20 dollars Per month</span>
          <br />
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td colSpan={3}>Advances when shiped</td>
                <td style={{ paddingLeft: '10px' }}>$10 00</td>
                <td style={{ paddingLeft: '8px' }}>Simon Landry <span style={{ fontWeight: 'lighter' }}>x</span></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>49 38</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style={{ paddingLeft: '25px', textAlign: 'center' }}>Do</td>
                <td style={{ paddingLeft: '15px' }}>to be</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>10 00</td>
                <td style={{ paddingLeft: '8px' }}>William Mcloud <span style={{ fontWeight: 'lighter' }}>x</span></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>$ 49 38</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style={{ paddingLeft: '25px', textAlign: 'center' }}>"</td>
                <td style={{ paddingLeft: '15px' }}>subtracted</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>10 00</td>
                <td style={{ paddingLeft: '8px' }}>Daniel Stuert</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>49 38</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style={{ paddingLeft: '25px', textAlign: 'center' }}>"</td>
                <td style={{ paddingLeft: '15px' }}>from this</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>10 00</td>
                <td style={{ paddingLeft: '8px' }}>William Grant <span style={{ fontWeight: 'lighter' }}>x</span></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>49 38</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td style={{ paddingLeft: '15px' }}>amount)</td>
              </tr>
              <tr>
                <td colSpan={3}>William Hendeson</td>
                <td style={{ textAlign: 'center' }}>Mate</td>
                <td colSpan={2}>William Henderson</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: '25px' }} colSpan={5}>twenty five dollars pr month</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>$ 66 80</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <td colSpan={5} style={{ textAlign: 'center' }}><time dateTime="1854-09-02">Sept th 2d 1854</time></td>
              </tr>
              <td colSpan={4}>&nbsp;</td>
              <td>William Farris[?] <span style={{ fontWeight: 'lighter' }}>x</span></td>
              <td style={{ paddingLeft: '10px', textAlign: 'right' }}>$ 16 75</td>
              <tr>
                <td colSpan={4}>&nbsp;</td>
                <td>Abaham[?] White  <span style={{ fontWeight: 'lighter' }}>x</span></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>$ 16 75</td>
              </tr>
              <tr>
                <td colSpan={4}>&nbsp;</td>
                <td>Abraham Dugan <span style={{ fontWeight: 'lighter' }}>x</span></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"&nbsp; 16 75</td>
              </tr>
              <tr>
                <td colSpan={4}>&nbsp;</td>
                <td>[unclear] [unclear]</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"&nbsp; 16 75</td>
              </tr>
              <tr>
                <td colSpan={4}>Discharged Sept 15th</td>
                <td>William Henderson</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>$ 35 52</td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr>
                <td colSpan={6} style={{ textAlign: 'center' }}>Advance to Seaman<br />in Sidney C B</td>
              </tr>
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td colSpan={3}>Victor Land</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>$&nbsp;&nbsp;2 00</td>
              </tr>
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td colSpan={3}>Napoleon Berlang[?]</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"&nbsp;&nbsp;2 00</td>
              </tr>
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td colSpan={3}>Charls Huelin</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"&nbsp;&nbsp;2 00</td>
              </tr>
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td colSpan={3}>John Granvil</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>13 50</td>
              </tr>
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td colSpan={3}>John Mackdonld</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}><u>&nbsp;&nbsp;13 62</u><br />[3]3 12</td>
              </tr>
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td colSpan={3}>James Jerewa</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>[??] 25</td>
              </tr>
            </tbody>
          </table>
          <br />[bottom right corner is torn out; small portion of text is missing]<br /><br />
        </p>

        <PageNumber num={246} />
        <p>Disbursements and Port Charges<br />
          Paid on the Brig Sonora Vernon Locke Master, at Sidney<br />
          <br />
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td>Port Charges</td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>&pound;</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>S </td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>p</td>
              </tr>
              <tr>
                <td></td>
                <td>Ballast Dues</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottomWidth: '4px' }}>15</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>&nbsp;10</td>
              </tr>
              <tr>
                <td></td>
                <td>Harbor master fees</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>3</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>7</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>"</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>18</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>7</td>
              </tr>
              <tr>
                <td></td>
                <td>Disbursements</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>10</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>5</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>9</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>7</td>
              </tr>
              <tr>
                <td></td>
                <td>To 6 skanes sasl twine</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Telegraph Dispatch</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><aside style={{ textAlign: 'right' }}>Nov 1st</aside></td>
                <td>Butchers bill</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>18</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>5&frac12;</td>
              </tr>
              <tr>
                <td></td>
                <td>To [unclear] cargo</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>1</td>
              </tr>
              <tr>
                <td></td>
                <td>To 4 bbls beef & 4 of Pork</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>28</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>06</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
              </tr>
              <tr>
                <td></td>
                <td>To one half cord wood</td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>6</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>3</td>
              </tr>
              <tr>
                <td></td>
                <td>Comissions 5% 46.9.3</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>6</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>5</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>36</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>9</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2&frac12;</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>"</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>10</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>/2</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>36</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>19</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>3</td>
              </tr>
              <tr>
                <td></td>
                <td>Advances to crew<br />&nbsp;</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>John Mcdonald</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
              </tr>
              <tr>
                <td></td>
                <td>John Granvile</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>6</td>
              </tr>
              <tr>
                <td></td>
                <td>Credited to the Brig Sonora</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>7</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>8</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>9</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>11</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>13</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>3</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>&pound; 48</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>13</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>1</td>
              </tr>
              <tr>
                <td colSpan={2} style={{ textAlign: 'right' }}><br />Sidney C B <time dateTime="1854-12-16">Dce 16th 1854</time><br />Paid by</td>
              </tr>
              <tr>
                <td colSpan={2} style={{ paddingLeft: '35%' }}>Vernon Locke</td>
              </tr>
            </tbody>
          </table>
          <br />
          [bottom left corner is torn out]<br /><br />
        </p>

        <PageNumber num={247} />
        <p><span style={{ textAlign: 'center', display: 'block' }}>Sydney C B 1854</span><br />
          <table style={{ borderCollapse: 'collapse', marginLeft: '20%' }}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center' }}>Portcharges</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>&pound;</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>S</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>P</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Balast Dues</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>15</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Harbor Master fees</td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>3</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>7</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>18</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>7</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', textDecoration: 'underline double 1px' }}>Disbursements</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>To 6 skanes sasl twine</td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>10</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>5</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Paid for telegraph Dispach</td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>9</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>7&frac12;</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Butchers Bill for meat</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>18</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>5&frac12;</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Paid for timing[?] cargo</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>To 4 bbls of Beef & 4 of Pork</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>28</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>6</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>To one half cord wood</td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>6</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>3</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>35</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>10</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', textDecoration: 'underline double 1px' }}>Advance to Seaman</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>James Jerewa Mate</td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>6</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td></td>
              </tr>
              <tr>
                <td>Victor Land</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>10</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>5</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td></td>
              </tr>
              <tr>
                <td>Napoleon Berlang</td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>10</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>5</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td></td>
              </tr>
              <tr>
                <td>Charls Huelin</td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>10</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>5</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td></td>
              </tr>
              <tr>
                <td>John Granvil</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td></td>
              </tr>
              <tr>
                <td>John Macdonald</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>6</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>"</td>
                <td></td>
              </tr>
              <tr>
                <td>Cash to my self</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>4</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>16</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Commission 5% on &pound;46 93</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>6</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>5</td>
                <td></td>
                <td></td>
              </tr>
              <tr><td><span style={{ textAlign: 'center', display: 'block' }}>Cr</span>
                <hr style={{ marginLeft: '30px', marginTop: '-10px', width: '60px', borderBottom: '1px solid', borderLeft: '0', borderRight: '0', borderTop: '0' }} />
                <hr style={{ marginRight: '30px', marginTop: '-10px', width: '60px', borderBottom: '1px solid', borderLeft: '0', borderRight: '0', borderTop: '0' }} />
              </td>
                <td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>48</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>15</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>8</td>
              </tr>
              <tr>
                <td colSpan={3}>By my Draft on J.P. Melledge Esq. Boston<br />
                  <span style={{ paddingLeft: '10px' }}>in favor of Mssr Archabl[?] Co</span><br />
                  <span style={{ paddingLeft: '20px' }}>at 3 days sight for $19515 equal to &pound;</span>
                </td>


                <td style={{ paddingLeft: '10px', textAlign: 'right', verticalAlign: 'bottom', borderBottom: '3px double' }}>48</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', verticalAlign: 'bottom', borderBottom: '3px double' }}>15</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', verticalAlign: 'bottom', borderBottom: '3px double' }}>8</td>
              </tr>
            </tbody>
          </table><br />
          <span style={{ textAlign: 'center', display: 'block' }}>Sydney C B 16th  December 1854</span>
          <span style={{ textAlign: 'right', display: 'block' }}>Vernon Locke Master of Brig Sonora</span><br />
          [bottom of page torn out]<br /><br /><br />
        </p>

        <PageNumber num={248} />
        <p><span style={{ textAlign: 'center', display: 'block', fontSize: '120%' }}>Malta&nbsp;&nbsp;&nbsp;&nbsp;<time dateTime="1855-02-03">Feb th 3rd 1855</time></span>
          Novr[?] 2nd
          <span style={{ textAlign: 'center', display: 'block' }}>Disbursements &amp; Port Charges, Paid on the Brig Sonora</span><br />
          <hr style={{ width: '70%' }} />
          <table style={{ borderCollapse: 'collapse', marginLeft: '20%' }}>
            <tbody>
              <tr>
                <td>Boats towing the Brig into port</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>8</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>

                <td>To Landing 239 tons coals</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>21</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>51</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>12 Baskets for discharging coals</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>3</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>84</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Paid for 60 tons Ballast</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>15</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Caulkers Bill</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>30</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>4 gallons Lamp oile</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>3</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>80</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>2 coiles of grass Rope</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>3</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>50 [unclear] of Beef</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>50</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>one half pound of nails</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>50</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Vetegatables &amp;</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>25</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Filling watter casks</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>1</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td style={{ paddingLeft: '30px' }}>Cash Cr to the ship</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>217</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td style={{ paddingLeft: '30px' }}>Brokers atendance</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>8</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}></td>

              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}><br />On date feb 3rd 1855</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double', verticalAlign: 'bottom' }}>326&nbsp;40</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
              </tr>
            </tbody>
          </table>
          <br />
          <span style={{ textAlign: 'center', display: 'block' }}>Paid by</span>
          <span style={{ paddingLeft: '20%', textAlign: 'center', display: 'block' }}>Vernon Lock</span><br />
          [bottom of page torn out]<br /><br /><br />
        </p>

        <PageNumber num={249} />
        <p><span style={{ textAlign: 'center', display: 'block', fontSize: '120%', textDecoration: 'underline' }}>Malta Feb 1855</span>
          <br />
          <span style={{ paddingLeft: '30px' }}>Disbursements &amp; Port Charges</span><br />
          <span style={{ paddingLeft: '30px' }}>Paid on the Brig Sonora&nbsp;&nbsp;&nbsp;&nbsp;Vernon Locke Master</span>
          <br /><br />
          <table style={{ borderCollapse: 'collapse', marginLeft: '20%' }}>
            <tbody>
              <tr>
                <td style={{ textDecoration: 'underline double 1px', textUnderlineOffset: '4px', textAlign: 'center', display: 'block' }}>Port charges</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Customs &amp; towing into port</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>8</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>To discharging 239 chaldrons coal</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>21</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '1px solid' }}>51</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '1px solid' }}></td>
              </tr>
              <tr>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>29</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>51</td>
              </tr>
              <tr>
                <td style={{ textDecoration: 'underline double 1px', textUnderlineOffset: '4px', textAlign: 'center', display: 'block' }}><br />Disbursements</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>12 baskets for discharging cargo</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>3</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>84</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Paid for 60 tons Ballast</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>15</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Caulkers &amp; carpenters Bill</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>30</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>4 gallons lamp oile</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>3</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>80</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>2 coiles of grass Rope</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>3</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>50 Rotoles of Beef</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>50</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>one half Pound of nails</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>50</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Vegitables for ship use</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>25</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>To Filling water casks</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>1</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Brokers atendance</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}>8</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '1px solid' }}>00</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '1px solid' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '1px solid' }}></td>
              </tr>
              <tr>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>79</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>89</td>
              </tr>
              <tr>
                <td><br />Advance to Seaman</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>James Jerewa</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>50</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>James Wallace</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>10</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>95</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Stuart &amp; cook</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>8</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>83</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Charls Hulin</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>88</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Victor Land</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>8</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>88</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Napoleon Berbang</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>8</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>93</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>John Mcdonald</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>7</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>13</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>60</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>10</td>
              </tr>
              <tr>
                <td>Cash to myself</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>156</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>90</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>156</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>90</td>
              </tr>
              <tr>
                <td><br />Vernon Locke</td>
                <td style={{ paddingLeft: '10px', textAlign: 'left', verticalAlign: 'bottom', borderBottom: '3px double', fontSize: '115%' }}>$</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', verticalAlign: 'bottom', borderBottom: '3px double', fontSize: '115%' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', verticalAlign: 'bottom', borderBottom: '3px double', fontSize: '115%' }}><strong>326</strong></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', verticalAlign: 'bottom', borderBottom: '3px double', fontSize: '115%' }}><strong>40</strong></td>
              </tr>
              <tr>
                <td style={{ paddingLeft: '15%' }}>Malta <time dateTime="1855-02-03">3rd Febuary 1855</time></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
            </tbody>
          </table><br /><br />
        </p>

        <PageNumber num={250} />
        <p>[written in pencil and a different hand,<br />
          bottom half of the page]<br />
          <br />
          did you ever see the<br />
          devil with his little<br />
          spade and shovel<br />
          digging up potatoes on<br />
          the turnpike road,<br />
          <br />
          [end]<br /><br />
        </p>

        <PageNumber num={251} />
        <p>
          <span style={{ paddingLeft: '30px' }}>[note: upper right corner torn out]</span><br />
          <br />
          <span style={{ paddingLeft: '30px' }}>Disbursements &amp; Port Charges</span><br />
          <span style={{ paddingLeft: '30px' }}>Payed on th[e] Brig Sonora at Palermo</span>
          <br />
          <br />
          <table style={{ borderCollapse: 'collapse', marginLeft: '10%' }}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center' }}>Port charges</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>[?]</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>[?]</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>[?]</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>To the Health ofice Boat</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Vegetables and milk in Port</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>12 dozen Egs 28.16</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>28</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>16</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Wine for allowance</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 1</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>16</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>2 labururs to work on ballast</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 6</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Ballast&nbsp;&nbsp;&nbsp;&nbsp;Guard[?]</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>To customs for surching[?] th[e] Brig</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>400 weight of Potatoes</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>06</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>50 Rotols of Beef in Port</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 4</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>20</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>20 weight do for sea stock</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 1</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>26</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>2 gallons of olive oile</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 1</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 6</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>7 lbs Black tea</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 1</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>26</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>28 lbs white sugar</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>10</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>one half pound ground pepper</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 3</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Caulkers Bill</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>29</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 3</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Coal ship for 2 days coaling</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 9</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Vegtables for sea stock</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>15</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>[?]</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>[?]</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>[?]</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>49</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>15</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>" 6</td>
              </tr>
              <tr>
                <td colSpan={2} style={{ textAlign: 'center' }}><br />Second Bill<span style={{ fontSize: '70%' }}>&nbsp;&nbsp;[in pencil] 288 lbs coffee</span> </td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>28 lbs coffee</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 3</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>filling water casks</td>
                <td style={{ paddingLeft: '16px' }}>"</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>24</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Paid to joiner</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 4</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>15</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>3 men to stow the cargo</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>one half Dozen Skans twine[?]</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 6</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Portarage for stores &amp; ---</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 9</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Mooring &amp; unmooring Brig</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>for interpreter and Boat hire</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>4</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Boat to tend the Brig to Sea</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 1</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 6</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double', borderTop: '3px double' }}>67</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double', borderTop: '3px double' }}>18</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double', borderTop: '3px double' }}>00</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'right' }}>Equal to $</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>169</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>00</td>
              </tr>
            </tbody>
          </table><br /><br />
          <br />
        </p>

        <PageNumber num={252} />
        <p>
          <span style={{ paddingLeft: '30px' }}>[note: upper left corner torn out]</span><br />

          <span style={{ textAlign: 'right', display: 'block' }}>Disbursements &amp; Port Charges at Palermo</span>
          <span style={{ textAlign: 'right', display: 'block' }}><time dateTime="1855-02-10">February 10th 1855</time></span>
          <span style={{ textAlign: 'right', display: 'block' }}>Paid on th[e] Brig Sonora Vernon Locke Master</span>
          <br />
          <br />
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr><td></td>
                <td style={{ textAlign: 'center' }}>Portcharges</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', fontSize: '80%' }}>Os</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', fontSize: '80%' }}>Trs</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', fontSize: '80%' }}>Grm</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td style={{ borderBottom: '1px solid' }}></td>
              </tr>
              <tr><td></td>
                <td style={{ textAlign: 'center' }}><br />Custom House Dues</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}><br />49</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}><br />15</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}><br />" 6</td>
              </tr>
              <tr><td></td>
                <td style={{ borderBottom: '1px solid' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>49</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>15</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>" 6</td>
              </tr>
              <tr><td></td>
                <td style={{ textAlign: 'center' }}><br />Disbursements</td>
              </tr>
              <tr><td></td>
                <td style={{ borderBottom: '1px solid' }}></td>
              </tr>

              <tr><td></td>
                <td>28 lbs coffee</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 3</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
              </tr>
              <tr><td></td>
                <td>To filing fresh water</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>24</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>Lamp wick[? - work?]</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 4</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>10</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>Paid the Joiner for work on the Brig</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 4</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>15</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>Paid labourers to work on board</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <aside style={{ transform: 'rotate(180deg)', textAlign: 'right', paddingRight: '50px' }}>1.75<br />25<br />35<br />
                <span style={{ textDecoration: 'underline 1px', textUnderlineOffset: '4px' }}>
                  <span style={{ textDecoration: 'overline 1px', offset: '4px' }}>2.35
                  </span></span></aside>
              <tr><td></td>
                <td>&frac12; dozen skanes of twine</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>6</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>Portarage for stores &amp;--</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 9</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>

              <tr><td></td>
                <td>Mooring and unmooring the Brig</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>12</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>interpreter and Boat hire</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 4</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>Boat to atend the Brig to sea</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>" 1</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" 6</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>Paid for main stasail</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>26</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>" "</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>44</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>4</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>14</td>
              </tr>
              <tr><td></td>
                <td style={{ textAlign: 'right', transform: 'rotate(180deg)' }}>D i s b u r s e m e n t s</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>[in pencil, in a different hand]</td>
              </tr>
              <aside style={{ transform: 'rotate(180deg)', textAlign: 'right', paddingRight: '50px' }}>50<br />25<br />25<br />25<br />4<br />
                <span style={{ textDecoration: 'underline 1px', textUnderlineOffset: '4px' }}>
                  <span style={{ textDecoration: 'overline 1px', offset: '4px' }}>$1.29
                  </span></span></aside>
              <tr><td></td>
                <td style={{ textAlign: 'left', transform: 'rotate(180deg)' }}>Disbursements</td><td>&nbsp;[end]</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>93</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>20</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>00</td>
              </tr>
              <tr><td></td>
                <td colSpan={2} style={{ textAlign: 'right' }}>Equil to two hundred and seventy five $&nbsp;&nbsp;232</td>
                <td style={{ paddingLeft: '2px', textAlign: 'left' }}>75</td>
              </tr>
              <tr><td></td>
                <td style={{ textAlign: 'center' }}><br />Advanced to Crew</td>
              </tr>

              <tr><td></td>
                <td>Mr Jerewa</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>6</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>50</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>Mr Wallice</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>24</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>John Macdonald</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>7</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>50</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>John Granvil</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>8</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>Charls Hulin</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>Napoleon Berlang</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>00</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td>Victor Land</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: 'solid 1px' }}>2</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: 'solid 1px' }}>00</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr><td></td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}>52</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}>10</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right', borderBottom: '3px double' }}></td>
              </tr>
              <tr>
                <td>Paid By</td>
                <td style={{ textAlign: 'center' }}>Whole Amount</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>$</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}>284</td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}>85</td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Vernon Locke</td>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '10px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
                <td style={{ paddingLeft: '5px', textAlign: 'right' }}></td>
              </tr>
            </tbody>
          </table><br /><br />
        </p>

        <PageNumber num={253} />
        <p>Bearing &amp; Dist. of Cape Sant francis[?]<br />
          [narrow pencil sketch of shoreline with features,<br />
          spans width of page;<br />
          labels above: "Cape" and "South East of cape]<br />
          <br />
          Bearing North by compas or North by East<br />
          [narrow pencil sketch of featureless shoreline,<br />
          spans width of page]<br />
          <br />
          Cape Re[??]pt Land bearing from N to NE <br />
          [narrow pencil sketch of terrain,<br />
          spans width of page;<br />
          labels above: "Dist 5 miles," "north of cape" and "the cape"]<br />
          <br />
          [faint pencil entry] South coast of africa [end]<br />
          <br />
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right' }}>1 - 65</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right' }}>75</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right' }}>20</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right' }}>60</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right' }}>20</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right' }}>23</td>
              </tr>
              <tr>
                <td>Potatoes &amp;</td>
                <td style={{ textAlign: 'right' }}>25</td>
              </tr>
              <tr>
                <td>[unclear]</td>
                <td style={{ textAlign: 'right', textDecoration: 'overline' }}>3 88</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right' }}>50</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right', textDecoration: 'overline' }}>4 - 38</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right' }}>15</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right' }}>20</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right' }}>4 - 76</td>
              </tr>
              <tr>
                <td></td>
                <td style={{ textAlign: 'right', textDecoration: 'overline' }}></td>
              </tr>
            </tbody>
          </table>
          <br />
          [narrow pencil sketch of shoreline,<br />
          spans width of page]<br />
          Table Mountain<br />
          Bearing East by cumpus<br />
          South coast of africa<br /><br />
        </p>

        <PageNumber num={254} />
        <p>[top half of page is notes with dates, phrases and miscellaneous marks; not all marks are transcribed]<br /></p>
        <p>
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'left', transform: 'rotate(-30deg)' }}>adieu</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', transform: 'rotate(-30deg)', paddingRight: '10px' }}>angel</td>
                <td colSpan={3} style={{ verticalAlign: 'bottom' }}>last letter received from Vernon</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={2}>Arabella took my washing<br />29th August</td>
                <td></td>
                <td style={{ textAlign: 'right' }}><s>Sept</s> <time dateTime="1863-10-16">16th October 1863</time><br />
                  October<br />2nd/68<br /></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={2}>Fany[?] came 1st Sept</td>
                <td style={{ fontWeight: 'lighter' }} >Vernon</td>
                <td style={{ paddingLeft: '20px', fontWeight: 'lighter' }}><br />2 3 4 6</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={4}>Hannah took charge of Dr. Bermen[?]
                  <span style={{ fontWeight: 'lighter', float: 'right', paddingRight: '10%' }}>anything</span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>23d Jan.</td>
                <td></td>
                <td colSpan={2} style={{ textAlign: 'center' }}>Vernon</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Eliza took washing on<br />
                  the 6th.</td>
                <td></td>
                <td></td>
                <td style={{ textAlign: 'right' }}>Vernon G.<br /></td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={2} style={{ paddingLeft: '40px', textAlign: 'center' }}>E L L</td>
                <td></td>
                <td style={{ textAlign: 'right' }}>Locke</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan={2} style={{ textAlign: 'right' }}>Mrs. V. E. Locke</td>
                <td> </td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={2} style={{ fontSize: '130%', fontWeight: 'lighter', textAlign: 'right', paddingRight: '15px' }}>E</td>
                <td></td>
                <td style={{ textAlign: 'right' }}>Locke</td>
              </tr>
              <tr>
                <td></td>

                <td colSpan={2} style={{ textAlign: 'right' }}>E L L</td>
                <td></td>
                <td style={{ textAlign: 'right' }}> F Locke</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ textAlign: 'right' }}>Locke</td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={2} style={{ textAlign: 'right' }}>E L L</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td style={{ paddingRight: '15px' }}>E</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={3} style={{ textAlign: 'center' }}>E</td>

                <td style={{ textAlign: 'right' }}>A B C D E F G</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </p>
        <br /><br />
        <p>[remaining text this page was entered with the journal turned upside down]<br />
          <br />
          <span style={{ textAlign: 'center', display: 'block', fontSize: '120%' }}>Amount of Provisions used on Board<br />
            the Brig Gem of Beverly Mass 1852</span>
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'right' }}><span style={{ fontSize: '80%' }}>the 20th</span><br />February </td>
                <td style={{ verticalAlign: 'bottom' }}>&nbsp;Beef&nbsp;</td>
                <td style={{ verticalAlign: 'bottom' }}>&nbsp;Pork&nbsp;</td>
                <td style={{ verticalAlign: 'bottom' }}>&nbsp;Flour&nbsp;</td>
                <td style={{ verticalAlign: 'bottom' }}>&nbsp;Bread&nbsp;</td>
                <td style={{ verticalAlign: 'bottom' }}>&nbsp;Rice&nbsp;</td>
                <td style={{ verticalAlign: 'bottom' }}>&nbsp;Beans&nbsp;</td>
                <td style={{ verticalAlign: 'bottom' }}>&nbsp;Butter&nbsp;</td>
                <td style={{ verticalAlign: 'bottom' }}>&nbsp;Lard&nbsp;</td>
                <td style={{ verticalAlign: 'bottom' }}>&nbsp;Molasses</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'right' }}>26th</td>
                <td style={{ textAlign: 'center' }}>2 bbl</td>
                <td style={{ textAlign: 'center' }}>2 bbl</td>
                <td style={{ textAlign: 'center' }}>2 bls</td>
                <td style={{ textAlign: 'center' }}>1 bls</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>1 [?]</td>
                <td style={{ textAlign: 'center' }}>1 [?]</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'right' }}>March 19th</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>"</td>
                <td style={{ textAlign: 'center' }}>2 bbl</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>0</td>
                <td style={{ textAlign: 'center' }}>00</td>
                <td style={{ textAlign: 'center' }}>00</td>
                <td style={{ textAlign: 'center' }}>00</td>
                <td style={{ textAlign: 'center' }}>00</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'right' }}>29th</td>
                <td style={{ textAlign: 'center' }}>2 bbl</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>2 lbl</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>0</td>
                <td style={{ textAlign: 'center' }}>00</td>
                <td style={{ textAlign: 'center' }}>00</td>
                <td style={{ textAlign: 'center' }}>00</td>
                <td style={{ textAlign: 'center' }}>00</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'right' }}>April 14th</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>2 bbl</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>0</td>
                <td style={{ textAlign: 'center' }}>00</td>
                <td style={{ textAlign: 'center' }}>00</td>
                <td style={{ textAlign: 'center' }}>00</td>
                <td style={{ textAlign: 'center' }}>00</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'right' }}>May 7th</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>1 do</td>
                <td style={{ textAlign: 'center' }}>1 do</td>
                <td style={{ textAlign: 'center', fontSize: '80%' }}>one cask</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>00</td>
                <td style={{ textAlign: 'center' }}>00</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'right' }}>do 17th</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>1 bb</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'right' }}>June 28th</td>
                <td style={{ textAlign: 'center' }}>1 do</td>
                <td style={{ textAlign: 'center' }}>00[?]</td>
                <td style={{ textAlign: 'center' }}>1 do</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'right' }}>July 1st</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>1 do</td>
                <td style={{ textAlign: 'center' }}>1 bb</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'right' }}>24th</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>1 bbl</td>
                <td style={{ textAlign: 'center' }}>1 do</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>1 b[?]</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'right' }}>August 10th</td>
                <td style={{ textAlign: 'center' }}>1 do</td>
                <td style={{ textAlign: 'center' }}>1 do</td>
                <td style={{ textAlign: 'center' }}>1 do</td>
                <td style={{ textAlign: 'center', fontSize: '80%' }}>one cask</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
                <td style={{ textAlign: 'center' }}>" "</td>
              </tr>

            </tbody>
          </table><br /><br />
        </p>

        <PageNumber num={255} />
        <p>[top edge of page is tattered; pencil drawing across top of page with pencil notation beneath]<br />
          The town of Monrovia<br />
          West-coast Africa as it appeared<br />
          Dist three miles bearing E S E by compass<br />
          <span style={{ textAlign: 'right', display: 'block' }}>V. G. Locke<br />
            West coast Africa<br />[end]</span>
        </p>
        <p>
          By Sir Henry Houghton, Bar't.<br />
          <span style={{ textAlign: 'right', display: 'block' }}>(copied June 15<br />Fayettevil[le? - edge of page is damaged])</span><br />
          Gallant nation, foiled by numbers,<br />
          Say not that your hopes have fled;<br />
          Keep that glorious flag which slumbers,<br />
          One day to avenge your dead,<br />
          Keep it, widowed, sonless mothers,<br />
          Keep it, sisters, mourning brothers,<br />
          Furl it with an iron will;<br />
          Furl it now, - but keep it still;<br />
          Think not that its work is done.<br />
          Keep it till your children take it,<br />
          Once again to hail, and make it<br />
          All <u>their</u> sires have bled &amp; fought for,<br />
          All their noble hearts have sought for,<br />
          Bled and fought for all alone,<br />
          All alone! aye shame the storey,<br />
          Millions here deplore the stain,<br />
          Shame alas: for England's glory,<br />
          Freedom called &amp; called in vain,<br />
          Furl that banner, sadly, slowly,<br />
          Treat it gently, for 'tis holy.<br />
          Till that day - yes, furl it sadly,<br />
          Then once more unfurl it gladly -<br />
          Conquered Banner - keep it still!<br />
          England Oct 1865<br /><br />
        </p>

        <PageNumber num={256} />
        <p>[top edge of page is tattered; some text is missing]<br />
          <br />
          . . . 15 miles . . .<br />
          . . . the land west of . . .<br />
          . . . Africa . . .<br />
          along the coast of Poor [Po] River<br />
          <br />
          [narrow pencil drawing across page]<br />
          <br />
          The Land of Sino' ther is nothing in<br />
          particular to distinguish the land of Sino<br />
          from any othe[r] neighbouring port<br />
          <br />
          [narrow pencil drawing across page]<br />
          <br />
          Ridges &amp; [unclear]<br />
          <hr style={{ width: '80%' }} />
          Sino Liberia W C A<br />
          <br />
          [very faint and narrow pencil drawing across page]<br />
          [above drawing: a section is identified as [unclear] Pass]<br />
          [faint note below drawing:]Grand Ses[?] Bearing N E by compass<br />
          <hr style={{ width: '80%' }} />
        </p>
        <p>
          <table style={{ marginLeft: '65%', borderCollapse: 'collapse' }}>
            <tbody style={{ textAlign: 'right' }}>
              <tr>
                <td>32</td>
              </tr>
              <tr>
                <td>62</td>
              </tr>
              <tr>
                <td>15</td>
              </tr>
              <tr>
                <td>8</td>
              </tr>
              <tr>
                <td>25</td>
              </tr>
              <tr>
                <td>7</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>10</td>
              </tr>
              <tr>
                <td>12</td>
              </tr>
              <tr>
                <td><span style={{ textDecoration: 'underline 1px', textUnderlineOffset: '4px' }}>
                  <span style={{ textDecoration: 'overline 1px', offset: '4px' }}>1 - 73</span></span></td>
              </tr>
              <tr>
                <td>40</td>
              </tr>
              <tr>
                <td><span style={{ textDecoration: 'underline 1px', textUnderlineOffset: '4px' }}>
                  <span style={{ textDecoration: 'overline 1px', offset: '4px' }}>2 - 13</span></span></td>
              </tr>
            </tbody>
          </table><br /><br />
        </p>

        <PageNumber num={257} />
        <p>[inside back cover]<br />
          <br />
          Chronometer watch present[?] worth[?] 54.19 Vernon[?] Lock's[?] owner<br />
          Chronometer, Charles Shepherd Royal Navy[?] New[?]London 1271<br />
          55 Leland Street owner Edmond Boynton[?] B[unclear]<br />
          <br />
          Private[?] Mark <u>1101</u><br />
          Charles Shepherd<br />
          <br />
          Private[?]<br />
          <br /><br />
          Mrs.<br />
          <br />
          [a few illegible scribbles, unassociated letters and other marks appear on the remainder of the page]
          <br /><br /><br /><br />
        </p>
      </Styled.TranscriptionContainer>
    </PageNumberOffsetsContexts.Provider >
  );
};

export default Transcription;
