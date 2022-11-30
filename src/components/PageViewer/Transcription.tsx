import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../../styles/PageViewer/Transcription.scss";
import { PageNumberOffsetsContexts } from "../../Contexts";
import PageNumber from "./transcriptions/PageNumber";

const Transcription = () => {
  const page = useParams().page || "1";
  const { hash } = useLocation();
  const scrollToAnchor = hash ? hash.replace("#", "") : null;

  // pageNum is stored in state and updated when any necessary scrolling has finished
  const [pageNum, setPageNum] = useState(0);
  // this is set to true if the element if scrollIntoView is necessary in the effect below. It's passed to PageNumber components to prevent them from navigating to a new page until the scroll here is complete.
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  //when the page number changes, scroll to the page on the transcription
  useEffect(() => {
    if (parseInt(page) !== pageNum && !scrollToAnchor) {
      const element = document.getElementById(`page-${page}`);
      const transcriptionContainer = ref.current;
      if (element && transcriptionContainer) {
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
      }
    }
  }, [page, pageNum, scrollToAnchor]);

  // scroll to a meeting anchor
  useEffect(() => {
    if (scrollToAnchor) {
      const element = document.getElementById(scrollToAnchor);
      const transcriptionContainer = ref.current;
      if (element && transcriptionContainer) {
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
      }
    }
  }, [page, pageNum, scrollToAnchor]);

  return (
    <PageNumberOffsetsContexts.Provider
      value={{ isAutoScrolling, activePage: pageNum }}
    >
      <div className="transcription" id="transcription" ref={ref} tabIndex={0}>
        <PageNumber num={1} /><p>[This page has some penciled additions plus some largely illegible scribbles in ink]
          N
          Journal of a Whaling Voyage in the Atlantic
          Ocean on board of the Brig Gem of Beverly
          Nathaniel Ryder Marster
        </p><p>of [in pencil]
          pewinkle in  [in pencil]
          the place of a mate [in pencil]
        </p><p>Monday April 7th
          civil account weighed Anchor in Provincetown Harbour [set?] Meridian with the Wind N.W. [Issiah J Boslow?] [in different color ink]
        </p><p>Tuesday April 8th
          Nautical account first part of these 24h moderate, stood out by long point and lay becalmed until 5 P.M. A gentle breeze to the South, at 6 P.M. doubled Racepoint, at 7 P.M. [sharp?] Haul lay up East move ship at [3?] A.M. lay up S.S.W. the next part of these 24 hours continued beating down the shore the Watch employed in Ships duty, nothing more of importence occured So ends these 24 hours all hands well. Norsett lights [Nauset Lighthouse, Cape Cod] bare NW by W 12 miles dist
        </p><p>Dear Madam [in different color ink]  15 12 13 14 [in pencil]
        </p><p>[list in margin, written upside down]
          1 – 65
          75
          50
          Meal 20
          Meal 70
          Brd 60
          Sugar 120
          Butter 20
          Lard 23
        </p><p>Wensday April 9th
          first part of these 24 houres fresh Breezes from the S.E. lay up S.S.W. at 6 P.M. tacked ship, laying up E. by N at 6 furled topgallant sails and flying gib. at 8 PM [numeral 4 in margin] reafed fore and main topsails 10 O Clock hauled up the spencer  [spanker] lay up E by N. at 3 in the morning made sail, fresh gales from the N.W. and fine weather saw on sail in sight Latd 41=17 and Long 69=15 by Crse and dead Rec
        </p><p>[written upside down] [illegible] 20 30 30
          [in margin] W M
        </p><p>Thursday April 10th
          first part of these 24 houres fine wether and a good Breze at the N.W. at 2 P.M. Unbent the cables and coiled them under deck. at 6 saw a Ship standing to the W. and 7 P.M. Crosed our stern. at 10 took in the spanker at midnight moderat breezes and Clear weather. at 4 in the morning a saile in sight runing about SE from 6  to [8?] watch on deck sat up the after riging on the larboard side, all hands imployed in ships duty and overhawling towlines and preparing [the - struck through]  our boats for action. Latter part more moderat so ends theas 24 hours with a wach [illegible] [illegible]
        </p><p>Lat. 39=13 by Obn by Dead rec. [symbolic notation]=[symbolic notation] Long 68=30 by Dir [obn?] [illegible]=[illegible; tear in page]
        </p><p>[written upside down in margin]
          187[?]4
          2
          [Ending?]
        </p>
        <PageNumber num={2} /><p>Friday April 11th
          first part of theas 24 hours Calm. at 4 P.M. saw a some grampeces. at 9 P.M. hurd blackfish blow, and saw learg schools of porpeces 9 A.M. saw plenty porpeces and 1 breach, 3 sail in sight. saw lots of peces of squid at 10 A.M. saw the remains of a reck, a learge ship that had ben burnt and left at sea at 10 ris - a larg school of black fish, prepaired to Lower, it being about 12 and dinner being ready, we something to stay the stomac first. thus ends theas 24 hours all hands in good sperits to lower after dinner, moderat breezes from the N.E. Lat by D.R. 38 = 35 Long by [symbolic notation for form of position fixing used] 68=30
        </p><p>Saturday April the 12th
          at ½ past 12 Lowered for black fish and took three. saw a thirty Bbl grampus at ¼ past 5 took moderat gulph squall. at midnight Strong gales from the north. squalley and raney and thus continues through these 24 hours Lat 36=40 Long by [symbolic notation for form of position fixing used] 68=30 at 8 AM
        </p><p>Sunday April 13th
          theas 24 hours commence with strong gales with rain squals the weather continues to be squaly at midnight the moon and Stars mak their aperence between the squalls and looks pleasant by spells. at 6 in the morning the wind moderated. mad all sail with the wind N.N.W. a sail in sight of the weather quarter so Ends theas 24 with fine weather all well. Lat by Ob[symbolic notation] 33=49 by D.R. 34=03 Long by [symbolic notation for form of position fixing used] 69=04 [symbolic notation]=[symbolic notation]
        </p><p>Monday April 14th
          theas 24 houres commence with moderat clowdy weather. wind NW at midnight the wind southerd and bafling at 5 in the morning took in the top galliant sail and flying gib at 6 double reafed topsails and furled the mainsail. 7 took in jib spencer [spanker] and clost reafed fore topsail and furled the fore sail. the wind hauled to the south. Weast[?] latter part of theas  24 houres fresh Breezes from WSW Lat by Ob 32 50 dead Rec 33=03  Long 68=47 [symbolic notation]
        </p>
        <PageNumber num={3} /><p>Tuesday April 15th
          the first part of thease 24 hours commence with fresh gales from the W with a heavy head beet [head-beat] sea. at midnight Cleare weather and fresh breezes from the W under reafed topsails. at 2 Oclock in the morning  it moderated so that we sat the mainsail and at 3 took the reefs out of the topsails and sat the main top galliant sail. at 6 AM made all sail, and in a short time we had a flat calm. hauled up spanker, clued [clewed] up the top galliant sails, and hall down the gibs and let her role and tumble it out. at 9 AM the wind breezd up to the N with rain squalls so ends theas 24 houres Lat by ob 31=43 by D.R. [symbolic notation for form of position fixing used] Long by [symbolic notation] 70=38
        </p><p>Wensday April 16th
          the first part of thease twenty four houres commence with fresh Gales and squalley weather at 2 P.M. took in top galiant sails and flying gib at 11 PM set the main top galiant sale at midnight weather squalley took in topgaliant sails &amp; deuring this wach from 12 to 4 at 7 took a heavy Squall from the weast Clewed up the fore and main topsails, from 8 to 12 fine weather. a sail in sight from aloft heading N Easterly thus Ends theas 24 houres Lat. by ob 29=56 by Dr 30-03 Long by [symbolic notation] 71=36 [symbolic notation] 71=04
        </p><p>[Mm caloir?] [in pencil between entries]
        </p><p>Thursday April 17th
          thease 24 houres commence with fine weather, moderate Gales from W, at 8 O Clock tacked ship at 10 P.M. took a Squall from the W. after the squall had spent the moast part of its fewry singlereased the fore and main topsails and set the fore and mainsail laying up S by E wind S.W. at 2 A.M. took a havy squall, at 8 A.M. under all sail Except single reafed fore and main topsails, from 8 to 12 fine weather with strong breezes from the W so Ends theas 24 houres with 2 sail in sight one heading to the S and the other to the N Lat by Ob 28=30 by D.Re. 28=43  Long by [symbolic notation] 72=40 by D[illegible] [symbolic notation]=[symbolic notation]
        </p>
        <PageNumber num={4} /><p>Continued
          Friday April the 18th/51
          the first part of theas 24 houres commence with fine weather but fresh gales from the WSW. laying up S by W at 6 P.M. took a squall from the W it continued squolley through the knight some times we could carry them out by taking in our light sails, at other times we wer obliged to put her before the wind under her topsails settled down upon the [cap] with the reaf tacles hauled up at ½ past 6 A M. it cleard of and we had fine weather, but fresh gales from the W  so Ends these 24 houres all hands imployed in ships duty and prepairing the boats for action
        </p><p>Lat 27- 04  Long 72=13
          [symbolic notations written above numbers]
        </p><p>Saturday April the 19th
          theas 24 houres Commence moderate gales from WSW and hauling to the N.W. at 10 P.M. took a squoll from the W and the rain came in torrents about 11 P.M. it Cleared up and we had fine weather the remainder of theas 24 houres at 6 A.M. saw a topsail schooner heading to the N.N.E. Lat 25=27 Long 73=13
        </p><p>we find by Observations by the Quadrent and [chronometer] that we have had for two or three days past 2 or 2 ½ knots Current setting to the E it is proberbly owing to so much weasterly winds.
        </p><p>Sunday April 20th
          the first part of theas 24 houres moderate gales from the W at 6 PM [unclear] whol sail breeze which continued untill 2 A.M. then took in top galliant sails flying gib and reefed the topsails at 10 A.M. two sail in sight heading N. latter part of theas 24 hours fresh gales from the W.S.W. so ends theas 24 houres Lat 26=57 Long 74=38
        </p><p>Monday April 21st
          the first part of theas 24 hours commence with  strong gales from the W to S.W. heading north weasterly by the wind a heavy head beet sea at 2 A.M. began to moderate at 6 we wer under all sail at 10 A.M. breez freshened took in top gallient sails and flying gib, a ship in sight to windward heading to the south. Latter part of theas 24 houres fresh gales Lat 28 = 15 Long 75=42
        </p>
        <PageNumber num={5} /><p>Tuesday April the 22nd/51
          The first part of theas 24 houres commence with moderate gales from the W at 1/2 past 1 P.M. tacked Ship laying up SW by W cloash hall by the wind the wind and weather much the sam untill midknight when it began to squall up and the wind canted to the North. at 1 A.M. a tempest commenced which lasted some 2 houres the Wind still canting until 8 A.M. at which time the wind and weather had got settled with moderate gales from the E.N.E. with a verry heavy sharp swell heaving upon our larboard beam, we wer under the necesety of setting up our back stay to keep the brig from [?]oaling away her topmasts so ends theas 24 houres Lat 27=03 Long 76=26
        </p><p>Wensday April 23rd/51
          The first part of theas 24 hours commence with moderate gales from the Eastern Quarter with fine weather [stearing] S by W the wind and weather much the same untill 4 A.M. at which time the the [sic] breeze freshened and we steered W.S.W to make the land under Short sail till daylight at which time at 5 Oclock A.M. made man of war keys. on green turtle keys we then hauled up S.W. for Abbyco [or] the hole in the wall about this time saw 2 Spurm grampses and a School of blackfish. at 12 with the sun on the meridion squared the yards and steared our Course for [Berry] Islands Abaco lighthouse baring N.N.W. 2 1/2 or 3 miles distant 4 sail in company Steering the same course with pleasant gales from the East so end theas 24 houres
        </p><p>Lat 25=46 Long 77=10 [77=10 also written above the previous notation]
        </p><p>Thursday April 24th
          Theas 24 houres commence with gentle breezes from the E. and fine weather at 4 P.M.  made Sturap key [Great Stirrup Cay, Berry Islands, Bahamas] Stearing from the same at 6 P.M. took our departure Sturap key baring S 5 miles distant across the great Bahama at 8 P.M. weather Squoley and a Strong breeze S.E. by E. with continual flashes of very sharp lightening and some peals of thunder. took in sail and single reafed fore to topsail and double reafed the main. and S.W. by W. we steared, took a squol from the NE [unclear] up try sail
        </p>
        <PageNumber num={6} /><p>and took in gib at 10 P.M. having run the required distance to clear the sheep keys which the Coast pilot lay down 26 ½ hauled up S.W. by S till 1 A.M. then hauled up S W by S x S till 5 A.M. the wind canting to SSE Steared S.W. by the wind at 8 A.M. Orenge keys in sight from aloft baring N.W. 8 or 10 miles distant at ½ past 10 being about [Calmre] and the wind a head anchored 18 sail in sight moast of them at anchor on the great Bahama So ends theas twenty four hours Lat 24=44 Long 79=12
        </p><p>Friday April the 25th/51
          the first part of theas 24 houres moderate gales from S varaying to S.W. and as the wind was a head for us to run for the double headed slot key on the salt keys we still lay at anchor all hands inployed in Ships duty, moderate gales the latter part of theas 24 houres 12 sale in site at anchor Lat 24=44 Long 79=12
        </p><p>Saturday April the 26th
          theas theas [sic] 24 houres commence with moderate gales from the S with fine weather at ½ past 4 P.M. lowered our boats for exersise, spoke the Bark Adelaide of and from New York bound to [Saglegrand]. at 8 P.M. fresh gales from the South which  continued the same through the knight a number of Ships and Brigs came in on to the Banks and anchored with us, latter part of theas 24 houres fresh gales from the Weast so ends theas 24 hours Lat 24=44 Long 79=12
        </p><p>Sunday April the 27th
          the first part of theas 24 houres lay at anchor on the Great Bahama, fresh gales from S.W. to W.N.W. caught a planty of suckerfish 4 P.M. moderate breezes. At 3 Oclock A.M. the wind canted to the N.E. got under way and steared S.W. x W for Salt key, latter part of theas 24 houres pleasant gales from NE Lat 24=18 Long 79=38
        </p><p>George Williams the Steward prooves verry refractory will not attend to his duty. he has repetedly disobeyed The Captins Orders by sleeping in the forecastle after being strictly forbiden so to do
        </p>
        <PageNumber num={7} /><p>Monday April the 28th/51
          the first part of theas 24 houres moderate gales from the N.E. and fine weather, a plenty of flying fish, and sea fowl 3 P.M. made keys on salt key bank at 7 P.M. made Elbow key light from aloft
          baring SW. x W at 8 in site of deck baring S.W. 6 or 8 miles distant we at this time have a very strong current against us sailing at the rate of 4 or 5 knots before the wind through the knight the light on elbow key was plain in sight of deck at 5 in the morning latter part of theas 24 houres moderat gales from the NE saw a sail standing by the wind to the Northward so end theas 24 hours Lat 23=37 Long 81=11
        </p><p>Tuesday April the 29th/51
          theas 24 houres commence and end with fresh gales from the Eastern quarter with fine weather Stearing W by S. at 8 A.M. saw three sail of ships and brigs standing by the wind saw two spurm grampuses and 1 Logerh[aee]d turtle saw a number of peces of Squid, a plenty of the spanish galleys and flying fish So ends theas 24 houres Lat 24=15 Long 83=26
        </p><p>Wensday April the 30th/51 ["dn" written in above "Wensday"]
          theas 24 houres pleasant gales from the East 3 or 4 sail of vessels in sight by the wind saw 1 Spurm grampus also 3 turtle lowered waist boat and hove an iron into the second [sised] one and brought him alonge side he wayed about 200 pounds, at 1/2 past 6 P.M. having arived on to our Crewsing ground hove to under short sail commenced standing Quarter woches, at 6 A.M. moderat breeze from E and pleasant weather but a heavy swell heaving from the N.E. w[ind] W N.W till 8 A.M. our vessel roaled so bad that we jibd over and ran SW by S the latter part of theas 24 h all well Lat 25=12 Long 84=00
        </p><p>Thursday May the 1st/51
          theas 24 houres commence with moderate gales from the E.S.E. at 4 P.M. saw a small breach on our weather beam stearing W by S suposed it to be porpeces 5 P.M. saw an [onth] breach in the same direction hauled up for it and verry soon saw a spout spray prooved to be spurm whale, we lowered for them theay wer then bound to the windward and our crew being green and not accustomed to
        </p>
        <PageNumber num={8} /><p>to rowing to an oar that we were unable to git up to them before dark and they had their spoutings out and went down and we saw nothing more of them, we headed to the south through the knight untill one Oclock A.M. the wind headed us of so theat we lay up S.W. and moderated away away [sic]  5 A.M. it was flat Calm, we made the best of our way back whare we saw the whale but we did not gain more than 6 or 8 miles all the forenoon so ends theas 24 hours Lat 24=29 Long 84=54
        </p><p>Friday May the 2nd/51
          the first part of theas 24 houres calm saw a plenty porpeces [porpoises] at 1/2 past 5 P.M. saw some small breaches from aloft to the S of us, lowered larboard boat and rowed of in the same direction theay proved to be a school of porposes [porpoises] struck one and saved him. it held calm untill next morning at 6 A.M. when a breez sprung up from N.E. at 7 A.M. got site found ourselves in the Long of 84=20 latter part of theas 24 houres pleasant gales from N.E. at 12 got an Observation and find that we have a strong Current setting to the S.E. so ends theas 24 houres Lat 24=30 Long 84=40
        </p><p>Saturday May the 3rd/51
          theas 24 commence with fine weather but rather fresh gales from the N.E. saw a large whale of our lee bow at 2 P.M. about 2 or 2 1/2 miles distant, bore off and run 10 or 15 minutes from him and hove to the next time she came up she was off our weather bow about 1 or 1 1/2 miles the wind had rather freshened lowered larboard and waist boats and chaised to the windward untill dark when the waist boat got onto her but she settled tail first leving nothing but her head out of watter the boat Stearer hove as he thought best but his iron drawed only taking out 5 or 6 fathoms of rope suposed that the iron hit the Eye bone latter part of these 24 hours moderate gales from Eastern quarter, steering N.W. at 10 A.M. ris a school of whales under our le[e] bow bore of[f] for them so ends these 24 hours Lat 24=50, Long 84=35
        </p>
        <PageNumber num={9} /><p>to rowing to an oar that we were unable to git up to them before dark and they had their spoutings out and went down and we saw nothing more of them, we headed to the south through the knight untill one Oclock A.M. the wind headed us of so theat we lay up S.W. and moderated away away [sic]  5 A.M. it was flat Calm, we made the best of our way back whare we saw the whale but we did not gain more than 6 or 8 miles all the forenoon so ends theas 24 hours Lat 24=29 Long 84=54
        </p><p>Friday May the 2nd/51
          the first part of theas 24 houres calm saw a plenty porpeces [porpoises] at 1/2 past 5 P.M. saw some small breaches from aloft to the S of us, lowered larboard boat and rowed of in the same direction theay proved to be a school of porposes [porpoises] struck one and saved him. it held calm untill next morning at 6 A.M. when a breez sprung up from N.E. at 7 A.M. got site found ourselves in the Long of 84=20 latter part of theas 24 houres pleasant gales from N.E. at 12 got an Observation and find that we have a strong Current setting to the S.E. so ends theas 24 houres Lat 24=30 Long 84=40
        </p><p>Saturday May the 3rd/51
          theas 24 commence with fine weather but rather fresh gales from the N.E. saw a large whale of our lee bow at 2 P.M. about 2 or 2 1/2 miles distant, bore off and run 10 or 15 minutes from him and hove to the next time she came up she was off our weather bow about 1 or 1 1/2 miles the wind had rather freshened lowered larboard and waist boats and chaised to the windward untill dark when the waist boat got onto her but she settled tail first leving nothing but her head out of watter the boat Stearer hove as he thought best but his iron drawed only taking out 5 or 6 fathoms of rope suposed that the iron hit the Eye bone latter part of these 24 hours moderate gales from Eastern quarter, steering N.W. at 10 A.M. ris a school of whales under our le[e] bow bore of[f] for them so ends these 24 hours Lat 24=50, Long 84=35
        </p>
        <PageNumber num={10} /><p>Wednsday May the 7th/51
          these 24 hours commence with fresh gales from the N.E. all hands imployed in stowing down Oil and cleaning up decks at 5 P.M. got site, Long 84=50 at 6 P.M. took in sail and hove to for the knight heading to the N.W. at 7 A.M. got site Long at 84=39 latter part of these 24 houres fresh gales from the E by Observation at in the Lat of 24=39 so ends theas 24 hours.
        </p><p>Thursday May the 8th/51
          the first part of theas 24 houres fresh gales from the E could git no site at 4 A.M. more moderate for an hour or two and quite Clear got site at 7 A.M. Long 87=07 latter part of theas 24 hours Strong breezes from the S.E. furled fore and main topgalliant sail and flying gib [jib] so ends theas 24 hours at 12 got an Observation Lat 24=52
        </p><p>Friday May the 9th/51
          these 24 hours commence with fresh gales from the Eastern Quarter weather squolley and unsettled shortened sail at the yousal [usual] time 1/2 past 6 P.M. but as we wanted to git farther to the westward cap her before the wind at 10 P.M. took a heavy squoll and brought to hauled up the fore sail, the squoll or tempest still increasing clewed down fore topsail and hauled up reaf [reef] tackles 4 A.M. being very ruff took larbourd and Waist boat up on the upper crains [cranes] latter part of theas 24 hours more moderate Lat 24=35 Long 85=10
        </p><p>Saturday May the 10th/51
          these 24 hours commence with Strong breezes from the East at 2 P.M. more moderate sat the topgalliant sails after shaking out the reafs in the topsails 5 P.M. got site Long 85=28 at 1/2 past breez freshend up again and we shortened sail for the knight Stearing N.W by W till 10 P.M. then hove to laying up N by E 6 AM got  site Long 85=33 latter part of these 24 hours fresh gales from E.N.E. so ends theas 24 hours Lat 25=12
        </p>
        <PageNumber num={11} /><p>Sunday May the 11th/51
          theas 24 hours commence with fresh gales from the N.E. verry ruged weather for Whailing at 1/2 past 6 PM shortened sail and hove to as yousal [usual] wind N.E. heading N.N.E. fresh breezes through the knight at 1/2 past 6 A.M. got site Long 86=40 at 8 A.M. wore ship latter part of theas 24 houres fresh breezes but more moderate then theay wer in the morning. so ends these 24 hours all well Lat by Observation 26=11
        </p><p>Monday May the 12th/51
          theas 24 hours commence with fin and pleasant gales from the E. 5 A.M. got site Long 87=28 latter part of theas 24 hours Strong breezes from E.S.E. took in topgalliant sails and furled flying gib [jib] so ends these 24 hours all well except my self not able to be on deck to perform duty in concequence a sore on the skin of the left leg got poisoned by the black skin of the whale gitting in to the flesh where the skin was of[f] so ends these 24 hours Lat 25=18
        </p><p>Tuesday May the 13th/51
          the first part of these 24 houres commence with fresh gales from E.S.E. and a heavy sea heaving on at 6 A.M. got site Long 87=57 pleasant gales from the East. I am still unable to perform duty on deck so ends these 24 hours Lat 23=38 Long 88=04
        </p><p>Wensday May the 14th/51
          theas 24 hours moderate gales from the East and fine weather 5 P.M. got site Long 88=10 -  hove back and sounded got bottom 37 fathoms our lattitude at this time was 23=14 at 6 A.M. mad sail run S.W. with 5 [k]not breeze till 8 A.M. sounded and had 43 fathoms then steered N.W. with a five knot breeze from the E with fine weather through these 24 hours Lat 23=08 Long 88=17
        </p>
        <PageNumber num={12} /><p>Thursday May the 15th/51
          the first part of theas twenty foure hours pleasant gales from the Eastern quarter Stearing N.W. at two P.M. sounded and got 33 fathoms on the Catooch Bank [Campeche Bank, Gulf of Mexico]  at 4 sounded and got 50 fathoms at 5 P.M. got sight Long 89=05 latter part of theas 24 hours gentle breezes from the East 4 1/2 knot breeze at 12 got an observation Lat 24=14 being within 6 or 8 miles of the Arias Shoald [possibly Cayo Arenas Shoals, near Campeche] or rocks as laid down on the Chart wore ship and run for them, so ends theas 24 hours Lat 24=17
        </p><p>Friday May the 16th
          theas twenty foure houres commence with pleasant gales from the East and fine weather Stearing S.W. to make the Arias Shoald or rocks which is concidered doubtfull by manny, at 3 P.M. the look out at the mast head cried out white watter a head, it being about time to come up with the before mentin[ed] Sholde we concluded that it was Arias Sholde but by this time the lookout cried out there She blowes, and again there She blowes, and again  there she blows and again and again she blowes, and we wer all rejoiced to fine that the Arias Shoald was a fine school of whale.  we lowered and took three of them along side just before sunset got a sight Long 89=46 latter part of theas 24 houres moderate gales from the ENE at 12 got an Observation Lat 24=17
        </p><p>[note in margin] from 4 A.M. to 12 Oclock, all imployed in cutting in except the fool of a Mate who is employed in prowling [?] the only thing he can do
        </p><p>Saturday May the 17th
          theas twenty foure houres moderate gales from E. smooth sea and pleasant weather all hands imployed in taking care of head oile at 5 P.M. got sight Long 89=40 at 5 P.M. commenced boiling blubber at 6 A.M. got sight Long 89=40 saw some 12 or 15 breaches 4 or 5 miles of[f] theay proved to be a learge school of porpeces. pleasant gales from the east, so ends theas 24 houres Lat 23=49
        </p>
        <PageNumber num={13} /><p>Sunday May 18th/51
          theas twenty foure houres commence with moderate gales from the N.E. woch on deck imployed in boiling blubber at 7 A.M. got sight Long 89=35 latter part of theas 24 houres quite fresh gales from N.E. so ends theas 24 houres, by Obn Lat 24=16
        </p><p>Monday May the 19th
          theas twenty foure houres commece and close with fresh gales from the E with a rough sea, got sight at 5 P.M. Long 89=56 also at 6 A.M. Long 89=38 latter part of theas 24 houres all hands imployed  in [ink blot on text] Stowing down Oile. the 3 whales made 43 Bbls so ends theas twenty four hours Lat 24=18
        </p><p>Tuesday May the 20th
          fresh gales throught theas 24 houres 7 A.M. got sight Long 90=05 nothing worthy of remark occurred, fresh gales continue from the East. so ends theas 24 hours Lat 23=43
        </p><p>Wedensday May the 21
          theas 24 houres commence and end with with strong gales from the east at midknight strong gales at 7 A.M. got sight Long 90=36 the woch on deck imployed in ships duty in turning in standing riging &amp;c saw two or three peces of squid, struck a porpos and lost him so end theas 24 houres got an observation at 12 Lat 24-10
        </p><p>Thursday May the 22nd
          theas 24 houres commenced with fresh gales from the E.S.E. got site at 7 A.M. Long 90=14 latter part of theas 24 houres more moderate at 12 O clock got an observation, so ends theas 24 houres    Lat 24=19
        </p><p>Friday May the 23rd
          theas 24 houres commece with a five knot breeze from the E. saw a school of porpeces. fresh breezes from 6 P.M. to 6 A.M. at 7 A.M got sight Long 90=00 woch on deck imployed in ships duty turning in standing riging &amp;c saw a full riged Brig under our lee bow heading to the north fresh gales from East or E by N so ends theas 24 houres at 12 got an observation Lat 25=13
        </p>
        <PageNumber num={14} /><p>Saturday May the 24th/51
          these 24 houres commence with fresh gales from the East, the Brig mentioned in yesterdays Log tacked Ship at 2 P.M. and stood across our Stern about 200 yards of[f] and went out of sight to the S.E. got sight at 5 P.M. Long 89=47 at midknight five knot breeze from E at 7 A.M. got sight Long 89=47 under all sail Except the flying gib and that was furled all of these 24 hours owing to the strength of the gale which continues from the East so ends these 24 houres Lat 26=87
        </p><p>Sunday May the 25th
          at the commencement of theas 24 hours fresh gales from the East to the E.S.E. at 2 P.M. saw a bark heading to the S.S.E also a schooner heading to the South of our lee beam at 5 P.M. got sight Long 89=47 at midknight more moderate with a very heavy sea heaving  on our Starboard beam. wore ship and headed to the S.E. to prevent the vessel from roaling so very bad as she had for the last 5 or 6 hours Mr Perkins one of the Boat steerers struck a [unclear] and saved him at 6 A.M. verry moderate got sight Long 89=02 latter part of theas 24 hours moderate gales from the N.E. a plenty of dolphins caught but [unclear] so ends theas 24 houres at 12 by Observation Lat 27=27
        </p><p>Monday May the 26th
          the first part of theas 24 houres pleasant gales from N.E. with a heavy swell hea[v]ing on from E.N.E. got sight at sunset Long 89=49 two ships in sight heading to the S.E. saw a school of porpoces. latter part of theas 24 houres moderate gales from the East. three sail in sight, so ends theas 24 hours Lat 27=34 North
        </p>
        <PageNumber num={15} /><p>Tuesday May the 27th/51
          theas 24 houres commence with moderate Gales from the Eastern quarter with fine weather all hands imployed in ships duty moastly in finishing up the standing riging, about 3 O Clock saw a heavy water spout come with a mile and a half of us before it lost its force weather verry squolley shortened sail. at midnight Squoley at 6 A.M. got sight Long 88=42 fresh breeses and squolley weather untill 8 A.M. when it cleared up and we had fine weather moderate Gales frome the E.N.E. so ends theas twenty four houres Lat 28=57
        </p><p>Wednesday May the 28th
          the first part of theas 24 houres moderate gales from E.N.E. heading N.N.W. come into mudy Cullered watter sounded with 80 fathoms of line got no bottom, tacked Ship and head to the South with a pleasant brees at 5 P.M. got sight Long 88=42 weather verry good through the night at 4 A.M. it squoled up and it was squolley until about 10 A.M. when it cleared of[f] and we had fine weather with fresh gales got site Long 88=32 Struck two porpoces lost them boath, so ends theas 24 houres  Lat 27=52
        </p><p>Thursday May 29th
          theas twenty four houres Strong Gales from the East at 6 P.M. under short Sale and a verry rough weather raised a learge school of whale lowered for them took one 18 Bbl whale along side, before we could git a fluke worp on to her flukes, she parted all the worps that was made fast to her and went a drift, it was dark being no moon, to give us light we lowered one boat the Capt and myself with a boats crew went to find the whale, and as good luck would hav it we rowed direct to the whale, while we wer gon from the vessel a man fell over board an saving him come verry near loosing two more, and one man got a hoist that will disinabled him for two or three days proberbly we finealy succeded in saving the whale at 4 A.M. in the morning commenced cutting in with verry rough weather, so ends theas 24 hours with fresh Easterly gales, by dead reconing Long 88=38 Lat 27=37
        </p><p>[in margin, in pencil]
          all this scrape through the stupidity and greenes of pewinkle
        </p>
        <PageNumber num={16} /><p>Friday May the 30th/51
          the first part of theas 24 houres fresh gales and rough weather at 4 P.M. more moderate, woch on deck imployed in boiling blubber 5 P.M. got sight Long 89=19 at midnight fine weather 5 A.M. got sight Long 88=52 latter part of theas 24 houres moderate gales from the East and fine weather finished boiling blubber at 12 got an observation, so ends theas 24 hours one man not able to perform duty Lat 26=00
        </p><p>Saturday May the 31st
          theas twenty four hours moderate Gales from the East weather looks squolley otherways good whaleing weather, at sunset Long 88=56 two sail in sight one a full riged Brig heading to the North and the other a Ship heading to the South, 5 A.M. got sight Long 89=02 from 8 to 12 stoed down 18 Bbl. of Oil that we took on the 28 civel a/c so ends theas twenty four houres moderate Gales from the E fine weather. fine all hand able to perform duty Lat 25=49
        </p><p>Sunday
        </p>
        <PageNumber num={17} /><p>Sunday June the 1st/51
          theas twenty four houres moderate gales from Eastern quarter and fine smooth weather saw a plenty of porposes and grampus got sight at 5 P.M. Long 88=57 also at 7 A.M. Long 88=58 so ends theas 24 houres Lat 26=28
        </p><p>Monday June the 2nd
          the first part of theas twenty four houres moderate gales from the East. saw a school of porpoces. at midnight fine weather. latter part verry squolly. at one minute it would rain &amp; blow and in five or ten minutes after it would be fine weather with a fine breeze from some other point of the compas, or another squoll. it cleared at 10 A.M. got sight Long 88=38 and at 12 it cleared so that we got an observation so ends these 24 hours. Lat 25=55
        </p><p>Tuesday June the 3rd
          the first part of theas twenty foure houres moderate but squolley. At 5 P.M. got sight Long 88=21 at sunset foure knot breeze from E.S.E at midnight five knot breese and rather squolley at 7 A.M. got Sight Long 88=13 moderat and fine weather saw a bone sark [basking shark], and porpoces in abundance so ends theas twenty four houres Lat 26=25
        </p><p>Wensday June the 4th
          the first part of theas twenty four houres moderate gales from E.S.E at 5 P.M. got sight Long 88=20 at midnight moderat weather wind East at 7 A.M. made a school of whale under our lee lowered and took two of them latter part of theas 24 hours squolley and verry moderate between squolls so ends theas 24 hours Lat 26=40
        </p><p>[pencil note in margin] this day lost a 30 bbl whale through Pewinkle
        </p><p>Thursday June the 5th
          the first part of theas 24 hours moderat and squolley the wind was at diferant times from all points of the compas, all hands imployed in saving head Oil. pleasant weather through the knight, wind S.E. at 4 A.M. Commenced boiling. at 7 A.M. got sight Long 86=47 latter part moderate wind S.E. so ends theas twenty foure houres Lat 27=25
        </p>
        <PageNumber num={18} /><p>Friday June the 6th/51
          All of theas twenty foure houres moderate gales from the S.E. and fine weather. woch on deck imployed in boiling blubber 5 P.M. got sight Long 87=16 at 8 A.M. got sight Long 87=19 saw a number of small breaches supposed them to be porpoces so ends these twenty foure houres. by Ob'n Lat 27=28
        </p><p>Saturday June the 7th
          theas twenty foure houres commence with moderate gales from the S.E. fine weather saw two vessels heading to the N.W. at midknight fine weather wind canted further to the South. at 6 A.M. made a schoo[l] of whale of[f] our weather quarter. lowered and killed some six or Eight whale, saved only two the school of whale took to the windward, we took our whales along side and commenced Cutting in. pleasant gales from the West so ends theas 24 hours Lat 27=00 Long 87=00
        </p><p>[pencil note in margin] This day lost a twenty barrell whale through Pewinkle
        </p><p>Sunday June the 8th
          the first part of theas twenty four hours pleasant gales from W.S.W. all imployed in cutting in the twoo whales taken in the fore noon. fine weather through the knight at 7 A.M. got sight Long 87=09 latter part fine weather wind at West. all hands imployed in saveing the head Oil so ends theas twenty foure houres Lat 27=03
        </p><p>Monday June the 9th
          pleasant gales from the Weast throughout theas twenty four hours and fine weather for boiling blubber which the woch on deck was buisely imployed in. caught a dolphin with the grains, saw three sale of vessels headed to the S.E. at 7 A.M. got sight Long 86=48 so ends theas twenty foure houres all hands in good Spirits Lat 27=01
        </p><p>[at foot of page, in pencil, upside down]
          Jesus lover of my soul
          Let me to thy bosom fly,
          While the waves of trouble roll
          While the tempest still is high.
        </p>
        <PageNumber num={19} /><p>Tuesday the 10th of June 1851
          theas twenty foure houres begin with moderate gales from the W.N.W. woch on deck imployed in boiling out blubber at 7 A.M. got sight Long 85=35 latter part moderate but Squolley all hands imployed in stowing down Oil. theay made thirty five Bbls. so ends theas twenty foure houres Lat 27=03
        </p><p>Wensday June the 11th
          first part of theas 24 houres moderate gales from N to N.E. we finde that we have a strong Easterly current. saw a school of Grampoces at 7 AM got sight Long 86=20 the latter part very Squolley heavy thunder Squolls passed verry neare us on all sides. a verry heavy watterspout formed two or three miles from us. the first that we of it we hurd it roare like a heavy watter falls it finely pased a way and we had fine weather one sail in sight headed N.W. so ends these 24 hours Lat 26=44
        </p><p>Thursday June the 12th
          theas twenty four hours commence with moderate gales from NE at 5 P.M. got sight Long 86=34 one sail in sight headed N.W. at midknight fine weather 10 A.M. got sight Long 86=57. latter part of theas 24 houres fine weather, pleasant gales from the North so ends theas 24 hours Lat 26=57
        </p><p>one knot Current setting to the Northward
        </p>
        <PageNumber num={20} /><p>Friday June the 13th 51
          theas twenty foure hours commence with pleasant gales from the North at 2 P.M. weather  Squolley saw one or two watter spouts, a plenty of dolphin, flying fish, Oliver Cores [albacore], and skip jackets.  5 P.M. got sight Long 87=57 at sunset took in sail for the knight heading N.W. took a Squoll squoll [sic] from the N.E. about the same time. at midknight fine weather. at 10 A.M. got sight Long 87=04 latter part some what squolley so ends theas 24 hours  Lat 26=55
        </p><p>Saturday June the 14th
          the first part of theas  twenty foure houres moderate gales from N.E. weather looks squolley at 5 P.M. got sight Long 87=07 at midknight fine weather and pleasant gales from the East 9 A.M. got sight Long 87=21 one sail in sight a gaft [gaffed, gaff-rigged] topsail Schooner headed to the S.E. the woch on deck imployed in setting up the fore riging.  so ends theas 24 hours Lat 27 = 36
        </p><p>Sunday June the 15th
          All of theas twenty foure hours pleasant gales and fine weather with the wind N.E. saw a school of  grampoces, and a learg school of porpoces one ship in sight headed N.W. at 10 A.M. got sight Long 86=27 so ends theas 24 hours Lat 26=50
        </p><p>Monday June the 16th
          theas twenty four hours commence with moderate gales from the N.E. and fine weather, and, Continus the same throught the twenty four hours at 5 P.M. got sight Long 86=27 saw a school of porpoces 10 A.M. got sight Long 86=23 so ends theas twenty four hours Lat 25=54
        </p>
        <PageNumber num={21} /><p>Tuesday June the 17th/51
          the first part of theas twenty foure houres squolley weather wind N.E. at 5 P.M. got sight Long 86=12 fine weather through the knight, and pleasant gales from N.E. at 10 A.M. got sight 85=48 latter part moderate and squolley, so ends theas twenty four hours.  Lat 24=34
        </p><p>Wensday June the 18th
          the first part of theas twenty foure houres moderate gales from the N.E. pleasant weather untill 4 P.M. after which time it was very squolley, at 5 P.M. got sight Long 85=48 at 1/2 past 6 shortened sail as yousal and lay by for the knight, it being verry squolley, at 9 A.M. got sight Long 85=38 latter part pleasant Gales from N.E. and fine weather so ends theas twenty foure houres, all well with the exception of some of the crue [crew] being troubled with boles [boils]  Lat 24=18
        </p><p>Thursday June the 19th
          the first part of theas twenty foure houres squalley Stong Gales from N.N.E. at 5 wind hawled to the EN.E and very squolley took in top galliant sails [unclear] flying gib, single reafed the topsails, saw learg breach to windward just before dark the wind at this time had hauled round to S.S. Saw two watter spouts, it continued squolley until 12 at midnight when it Cleared up and had fine weather the remaining part of theas twenty foure houres at twelve O,Clock Lat 24=22 Long 84=56 by lne [symbolic notation]
        </p><p>Friday June the 20th
          theas twenty foure houres squolley throught the wind was from diferant points of the compass at diferant times, and at some point a number of times, at 8 P.M. took a squoll from S.S.E took in top galliant sails, flying gib, reafed the top sails, hauled up the main sail and trysail at 8 A.M. got sight Long 83=42 two sail in right so ends theas twenty foure hours Lat 24=27
        </p>
        <PageNumber num={22} /><p>Saturday June the 21st/51
          the first part of theas twenty four houres lay becalmed. at 5 P.M. got sight Long 83=42 at 1 PM a breeze sprung up from the N.E. and soon hauled to the S.S.E tacked ship laying up East under whol sail 9 A.M. weather good with Strong Gales. took in top galliant sails and flying gib, a learg ship in company, she was of[f] our weather bow in the morning and at noon of[f] our lee quarter the same distance 5 or 6 miles, at 7 A.M. got sight Long 81=00 [unclear] 6 or 8 sail of vessels headed to the Weastward the latter part of theas 24 houres Strong Gales from SS by S so ends theas 24 houres Lat 24=17
        </p><p>Sunday June the 22nd
          theas twenty foure houres commence with Strong Gales from S.E. at 2 P.M. made the land of[f] our lee beam, supposed it to be more of Key Weast, saw a Becon on the edge of the light Cullered watter at 2 P.M. got sight Long 81=45 the ship tacked before we did being to the leeward of us saw the land first and tacked we tacked (1/4 before 3 PM ) wind moderated down and it began to be squolly and we wer cared [were carried] by the current and sea which [unclear] to be all way it rained, thundered and lightened heavy and sharp saw a watter spout pas by us Close under our lee, in one of those squolls, at 1 A.M. a breeze Sprung up to the N.E. we made the best of our way of[f] shore till 3 A.M. when the wind changed to S.S.E we tacked and headed up E at 11 A.M. got sight Long 80=28 three sail in sight at 12 Sighted Umberiller [Amarillo] Key baring N.W. by N. so ends theas 24 hours Lat 24=40
        </p><p>Monday June the 23rd
          the first part of theas 24 houres light winds from ES.E. at 1 P.M. sighted Careys fort reaf heading N.E. up the shore 1/2 past 6 P.M. pased the light house on the North part of Carysfort reaf not yet lighted [Carysfort Reef Light House, off Key West, Florida, completed 1852] latter part squally 1/2 past 11 A.M. got sight Long 79=05 at twelve by Obn Lat 27=27
        </p>
        <PageNumber num={23} /><p>Tuesday June the 24th/51
          theas twenty foure houres commence with squolley weather strong breeze S.S.E at 3 P.M. took a heavy Squoll from the weastward put the Brig before the Wind took in topgalliant sails, flying gib, and hauled up the mainsail before the squoll struck us, after which took in main Gib, settle fore and main top sail yards down upon the caps hauled up the reaf tacles the squoll continueing heavy double reafed the topsails and hauled up within two points of our coarse untill the squoll abated. at 6 P.M. discovered that the fore top galliant crosstrees had woorked down over the hornes [harness?] of the mast and jamed the top galliant tye [tie] sent down the yard and, most to eas [ease] the topmast which had previously triped  the [unclear] of or nearly so - dauring theas 24 hours saw 2 sail one headed to the N and the the other to the S.E. at 10 AM got sight Long 78=19 so ends theas twenty foure houres Lat 28=48
        </p><p>Wensday June the 25th
          the first part of theas 24 houres fair weather for Gulph weather at 2 P.M. cleared of[f] and we had fine weather and a pleasant Gale from the S.E. at 4 P.M. began to squoll up to thunder and lighten and continued so through the afternoon at 1/2 past 7 P.M. took in all sail except the main topsail, and that we clewed down and Cloast reafed it, and hove the Brig to it loockd likely to have a seveare squoll, but we were happily disapointed inasmuch as the squoll was quite light, it continued squolley through the knight with heavy thunder showers an Sharpe lightening at 7 A.M. light up enough to git Sight Long 77=07 by dead reckoning Lat 29=25
        </p><p>Thursday June the 26th
          the first part of theas 24 houres squolley weath wind S.S.W. moderate at 5 P.M. fresh breezes and rain squolls saw a school of grampoces at 7 P.M. took in sail at midknight saw 2 sail pass us, strong breeses S.W. 1/2 past 7 A.M. got Sight Long 76=08 latter part more moderate by dead reckoning Lat 30=10
        </p>
        <PageNumber num={24} /><p>Friday June the 27th/51
          theas twenty foure houres begin with light breeses and lowering weather, at midknight Strong breeze from the south, at 7 A.M. got sight Long 75=21 Struck a porpos and lost him. saw a sail of[f] our larboard bow heading North. picked up a spar supposed it to be a Barks misenmast it was cut away. had the crosstrees and futtck [futtock] shrowdes attached to it. unbent the trysail and fitted it to reaf on the leach fore a storme sail in case of a heavy gale. so ends theas 24 houres Lat 31=29
        </p><p>Saturday the 28th
          first part light breezes from the South and squolley middle part moderate gales from the south and fair weather at 7 A.M. got sight Long 74=30 at 10 A.M. saw two Surme whale Lowered and took one along side the waist boat got stove slightly in striking the whale, and the starboard boat got her gunwail and one or two plank cut down in killing her each of them got a man overboard in the flurry now one injured so ends theas twenty foure houres - by dead reckoning Lat 31=25
        </p><p>[pencil note in margin] This is the fault of Pewinkle as he had a good chance to kill the whale 10 minutes after she was struck
        </p><p>Sunday June the 29th
          theas twenty foure houres commence with light breezes from the South and fine weather. the first part all hands imployed in cutting in the Whale taken in the fourenoon. at midknight fine weather, at 4 A.M. cauled all hands and wer well imployed in taking care of the head oil and setting the try works agoing at 7 A.M. got sight Long 73=44 so ends theas 24 houres Lat 31=50
        </p>
        <PageNumber num={25} /><p>Monday june the 30th/51
          theas twenty foure houres moderate gales from the S.W. with fine weather, woch on deck imployed in boiling blubber 7 A.M. got sight Long 74=00 Lat 31=39
        </p><p>Tuesday July the 1st/51
          theas twenty foure houres commen[ce], Continue and end with ligh breezes from the S.W. with fine weather. saw one sail headed to the soutward by the wind at 7 A.M. got sight Long 72=52 latter part woch on deck imployed in stowing down Oil, so ends theas twenty foure houres Lat 31=39
        </p><p>[note in margin] 35 Bbls
        </p><p>Wensday July the 2nd
          theas twenty foure houres commence with moderate gales from the S.W. at midknight fine weather. at 4 A.M. lay becalmed at 7 A.M. got sight Long 71= 49 about 9 A.M. saw three [Killers] pass by us. latter part light aire from S.E. Lat 31=39
        </p><p>Thursday july the 3rd
          the first part of theas 24 houres light aires from S.E. 3 sail in sight headed Eastward, at midnight allmost calme at 4 A.M. intirely calm, at 7 A.M. got sight long 71=29 saw a school of grampoices, latter part light aire from the S got a double sight one before twelve and the other after, Long 71=16 so ends theas 24 houres 3 sail in sight before mentioned so ends theas 24 hours Lat 31=41
        </p><p>Friday july the 4th
          theas 24 houres moderate gales from S rather Squolley looking weather 2 sail in sight at 7 P.M. shortened sail 4 A.M. [unclear] all sail 3 saill in sight at 7 got sight Log 69=26 so ends theas twenty foure houres Lat 31=40
        </p>
        <PageNumber num={26} /><p>Saturday July the 5th/51
          the first part of theas twenty foure houres fine weather and a good whol sail breese from South 8 P.M. rather squolley at 4 A.M. lay becalmed saw a ship steering N.W. at 7 A.M. got sight Long 67= 53 so ends theas twenty foure houres while we lay becalmed Lat 31=56
        </p><p>Sunday july the 6th
          the first part of theas 24 houres moderate breeses from the South saw 3 sail of vessels, pased the Brig C[unclear] of Phallydelpahee steering N.W. and a ship steering the same cours the other E by N midnight fine weather about calme latter part moderate gales from N.N.E. and sqolley at 7 A.M. got sight Long 66=58 so ends theas twenty foure houres Lat 32=03
        </p><p>Monday July the 7th
          First part of theas 24 houres light air fro the Eastern quarter, and squolley, from 5 P.M. to 10 A.M. lay becalmed at 7 got sight Long 66=44 latter part verry light air S.E. to S.S.E. at 12 O clock by double sight Long 66=37 so ends theas twenty foure hours Lat 32=17
        </p><p>Tuesday July the 8th
          theas 24 houres commence with moderate breeses from S.S.E. at 5 P.M. moderate gales from S.W. fine weather, at midnight fine weather, at 6 AM sighted Bermuda, the light barring E by N. at 7 A.M. got sight Long 64=52 being about 15 or 18 miles from the land, makes the cremonetor [chronometer] 15 or 18 miles out of the way, at half past 10 A.M. got a Pilot, latter part of theas 24 hours pleasant gales from the South Bermuda light baring N.E. by E. distant 3 ½ miles, so ends theas twenty four hours.
        </p>
        <PageNumber num={27} /><p>Tuesday July the 8th A 1851    Civel a/c
          First part of theas 24 hours moderate breeses from S and pleasant weather spoke the R. E. Cook, of Provincetown close of[f] the mouth of St George harbour, C[unclear], at 2 P.M. anchored in St. George harbour sent down fore topmast, Capt Ephram Nickerson towed in a Rack [wreck] that he came acrost at Sea, and has ben here about 2 months to obtain salvege on her, by Capt Nickerson and Capt Cook Master of the R E Cook we hurd [heard] from the following vessels Samuel Cook. Louisa. Chearles Allstrum. Alexander and Benjamin Franklin all Clean. the Hariet Kneal [Harriet Neal] had 30 Barrels, and Franklin of Provincetown had of all kinds something over a hundred Bbls, so ends theas twenty four hours at anchor in Bermuda
        </p><p>Wensday, July the 9th
          theas 24 houres lay at anchor in St. Georges harbour larbourd woch on deck imployed refitting and repairing fore riging, while the Starbourd wach wer a shore on libberty, to be on board at the time the gun fires at 9 O Clock P.M. at the close of theas 24 hours, William Smith, Peter Brady, and Jerrymiah Frances wer absent from the vessel conterary to the Capts Orders so ends theas twenty four hours
        </p><p>Thursday, July 10th
          theas twenty foure houres at anchor in St. Georges Harbour Starbourd woch on duty filling watter &amp;c while the larbourd wach are ashore on liberty with strict orders to be on board again before the gun fires at 9 P.M. at the Close of theas 24 hours William Smith, James Briant and E Hubbard wer absent, William Willson, Josiah E Clough and the Steward came on board between 9 PM and 12 P.M. Peter Brady and Jerrymiah Frances that wer absent the prevous knight came on board and went to their duty during the first part of theas 24 houres. William Smith refused so to doo after being repetedly ordered so to doo by the officers. at 4 P.M Thomas Sulaven was taken abord lifeless supposed to be dead drunk at 6 P.M. took on board a new topmast, ready to send up in the morning so End theas 24 hours
        </p>
        <PageNumber num={28} /><p>Friday July the 11th/51 Civel a/c
          theas twenty four hours lay at anchor in Bermuda all hands imployed in sending up a new fore topmast and repairing the fore topgalliant mast and sending up the same fitting riging and se[t] it up &amp;c Georg Willson refused to doo duty complaining that he was sick, but to me he appered more ugly than sick. gave the offecers verry short answers &amp;c. Smith, Hubbard and Briant are still absent from the vessel, but have contrived to git their Clothes out of the vessel dauring the previous knight, as soon as Capt Rider found that theay had takn their Clotheas out in order to runaway, he imployed an offecer to find them the offecer took them and put them in [j]ail for safe keeping untill the Brig got ready to sail. the Steward being about deck the moset of the afternon tolking and laffing &amp; apparnetly well as yousal, was Ordered after supper to Clear of[f] the supper table, he refused to doo it, saying i am a sick man and i ant a going to woork, the Capt Ordered him the second time, and told him that if he was Sick he could [j]ust take the dishes of[f] of the table, but he acted uglay and refused to doo as the capt Ordered him, the Capt then took hold of him and pushed him along verry gently and made him Cleare off the table, the Steward acted verry conterary and yoused verry threatening languyg saying that he wouldent die a lone &amp;c the Steward sayed that he wished to see the doctr and wanted to go ashore for that purpos. Capt Rider told him if he wished to see the docter and that it was his request he would bring the docter on board to see him in the morning, but that did not seame to suit, but sad that he was Sick and wanted to see the docter, so ends theas twenty four hours
        </p>
        <PageNumber num={29} /><p>Saturday July the 12th A 1851  Civel a/c
          at 6 A.M. cauled all hands and wer imployed in refitting riging, sending up fore topgalliant mast, painting the Brigs bends &amp;c the Steward went to his duty saying that he would doo the best that he could still wishing to see the doctr by going on shore by his request the doctr came on board to see him, but the doctr said that he could not pronounce him a sick man, he said it was nothing more than drinking a little too much liquor, and that he would soon get over it, but he might take a portion of phisic if h[e] wish it would be good for him, Smith, Briant and Hubbard requested to be taken out of the [j]ail, Capt Rider got a permit and took them out after they promice to come on board and behave well, and doo their duty, during the evening Peter Brady, Josiah E. Clough and Joseph Bendus the Cook, managed to git a shore, and theay came under the bowes during the night after there Clothes, the woch on deck discovered them and cauled the Capt and the capt ordered the boat of[f] with a strainger on her as he supposed at the time but afterward supposed it to have ben the steward, who was was discharge by mutial consent by all partyes deuring the afternoon of theas 24 hour – so ends &amp;c
        </p><p>Sunday July the 13th
          this morning all hand on board except James Briant and he was absent with all of his dunage, Capt got an officer out after him, the Pilot came on board at 8 A.M. and at 10 AM had taken us out c[l]eare of the island the offecr had not found Briant when we lef and so we wer obliged to leave without him at 12 Oclock 6 distant from Bermuda the harbor bearing W by N this days wach contains 12 houres in order to close my log by Civel account and to commence by Nauticle account. so ends this days journal 6 miles distant E by S from Bermuda
        </p><p>[in a different hand]
          Vernon G. G  L
          Newfoundland
          N. S
        </p>
        <PageNumber num={30} /><p>Monday July the 14th/51  by Nauticle a/c
          the first part of theas 24 hours pleasant gales from the S.W. and fine weather. Bermuda 6 miles distant. St. Georg town harbour baring W by N sau  a fullriged Brig headed to the N. middle part squolley and fresh Breeses, stood half woches to carry sail to the eastward when we had got suffishantly Out Cleare of the Island, we unbent the chane cables and stowed them under deck. latter part strong gales took in topgalliant sails and flying gib, saw a learg ship Steering N.E. saw a school of porpoces, and a few blackfish, at 7 A.M. got sight Long 62=18 from 7 to 12 Strong gales S.W. and squolley. the steward gon, Thomas Sulaven acted/acts as Ste[w]ard for the futchure, so ends theas 24 hours. Lat 32=20
        </p><p>Tuesday July the 15th
          theas 24 houres commence with fresh gales S.W. and squolley weather took in topgalliant sails and flying gib 7 P.M. single reafed the fore and double reafed the main topsails. at 2 AM took a Squoll got the wheel up and got the Brig before the wind took in all sail but the topsails and let them run down on the caps and hauled up the reaf tackles. the squoll lasted about half an hour and it was over. made sail again and hauled up our course again E by S. at 8 A.M. got sight Long 58=52 saw whaile carkess on the watter so ends these 24 hours Lat 32=59
        </p><p>Wensday July the 16th
          the first part of theas 24 hours strong gales, and rainey, squolley weather. Stearing E topgalliant sails and flying gib furled at 7 P.M. single reafed fore and double reafed the main topsails, at mid nigh fair weather and moderate gales at 4 AM squolley. at 7 got sight Long 55=57 latter part strong gales Clear weather at this time discovered that the fore topgalliant mast was sprung. took in the fore top galliant sail at twelve by a double sight Long 52=22 Just at this time struck a porpos and saved him so ends theas 24 hours Lat 33=48
        </p>
        <PageNumber num={31} /><p>Thursday July the 17th, A 1851
          theas 24 houres commence strong gales from S.S.W. and fine weather stearing E by S topgalliant sails, and flying gib furled, trysail hauled up and single reafs in the topsails, at midnigh fresh gales, at 6 A.M. got sight Long 52=38 latter part moderate gales from S.W. fine weather. got a double sight Long 51=00 so ends theas 24 hours Lat 34=00
        </p><p>Friday July the 18th
          theas 24 hours moderate gales from the S.W. fine weather at 7 A.M. got sight Long 50=48 at 9 A.M. saw a learg whale carkess to the leeward, and a number of peces of squid. So ends theas 24 hours Lat 33=45
        </p><p>Saturday July the 19th
          theas 24 hours commence, Continue, and End with a verry light aire from West 8 P.M. spoke the Alexander of Provincetown [Cleave], Capt Young lowered his boat and Came abord of us and spent the evening. latter part of theas twenty four hours saw two more whalers a ship and a Brig did not speak them Lat
        </p><p>Sunday July the 20th
          the first part of theas 24 hours lay becalmed. three whailers in sight the Alexander of Provincetown and a Ship, and a full riged Brig to the S of us, middle part light air from W at 7 A.M. got sight Long 49=28 latter part verry moderat light aire from the N.N.E. the Alexander just to the windward of us runing down towards us, and a learge school of Black fish between the two vessels. the Ship and Brig before mentioned to the leward of us so ends theas 24 hours Lat 33=02
        </p>
        <PageNumber num={32} /><p>Monday july the 21st/51
          the first part of theas 24 hours light breeses from N saw a learge school of Black fish. the Alexander Capt young Marster [master] was was 3 or 4 miles to the windward she bore up and run down to us and we [gamed] with them at 1/2 past 6 spoke the Ship Nye; 4 years out with nine Hundred Bbls of Spurm Oil, had not sean a spurm whale spout for the last 18 months she had been a [unclear] about here for the last 3 weeks, so ends theas 24 hours with moderate gales from E.N.E. Lat 32=37
        </p><p>[noted in margin]
          at 8 A.M. got sight Long 49=05, saw two or 3 peces of bluber on the watter
        </p><p>Tuesday July the 22nd
          theas 24 hours moderate gales from E.N.E. saw a school of killers, at 7 A.M. got sight Long 48=50 latter part squolley so ends theas 24 hours Lat 32=10
        </p><p>Wensday July the 23rd
          the first part of theas 24 houres moderate gales from E.N.E. at midnight Strong breezes, from E at day break made whaile all around us bound to the windward and going quick, lowered for them got nothing. so ends theas 24 hours got no sight, by dead reckoning Long 48=35 Lat 3=540
        </p><p>[pencil note in margin]
          this day lost a whale through pewinkle
        </p><p>Thursday July the 24th
          the first part of theas 24 houres made whale to leward waist boat fastened to one, and drew his first iron, the whale ran and sounded and after holding on with his perventer Iron until 1/2 past 6 was obliged to cut from her, at 7 P.M. came up with the school, lowered but it was about dark got nothing. Caried sail till next morning, after runing to the N.W. 6 or 7 miles made whale. we were under Reafed topsails lowered but it was so rough that we could not keep nun of them in our boats, at 11 lowered for them, got nothing so ends theas 24 h by dead reckoning Long 49=00 Lat 32=03
        </p>
        <PageNumber num={33} /><p>Friday July the 25th A 1851
          theas 24 hours commece with strong breeses from E and squolley under reaf topsails saw a school of whale lowered got two of them chased the school 10 or 12 miles to the S.W. got no more towards sunset moderat and squolley at 7 A.M. got sight Long 48=55 last of theas 24 h light air from SE all hands imployed in Cutting the two small whale and taking care of the case and Junck. so ends theas 24 hours Lat 32=22
        </p><p>Saturday July the 26th
          theas 24 hours lay be calmed, the woch on deck imployed in boiling bluber the two whales make 15 Bbls at 7 A.M. got sight Long 48=40 so end theas 24 houres Lat 32=22
        </p><p>Sunday July the 27th
          the first part of theas 24 hours lay be calmed woch on deck imployed in stowing down Oil and Cleaning up decks at midnight about calm a verry light air from N.W. steering S.E. at 7 A.M. got sight Long 48=40 saw two spurm grampoces so end theas 24 hours Lat 32=03
        </p><p>Monday July the 28th
          the first part of theas 24 hours light air from S.W. and fine weather, saw two spurme grampoces at midnight fine and pleasant weather at 7 A.M. got sight Long 48=08 took waist boat in on deck and repaired her, so ends theas 24 hours Lat 31=38
        </p><p>Tuesday July the 29th
          the first part of theas 24 hours fresh bresses S.W. stearing S.E. at midnight some moderate wind S.S.W. at 7 A.M. got sight Long 47=47 latter part fresh gales from the S.W. stearing W.N.W. by the wind so ends theas 24 hours Lat 31=26
        </p>
        <PageNumber num={34} /><p>Wensday July the 30th A 1851
          theas twenty four hours commence and end with moderate gales from S and fine weather with a verry heavy swell heving from W.N.W. at 7 A.M. got sight Long 49=14 at 10 A.M. saw the carkess of a smoll whale so ends theas 24 hours Lat 31=48
        </p><p>Thursday July the 31st
          theas 24 hours comence with light Bresses from S and fine weather. Gamed with the Barque Adventure of London Capt MCarta 4 months out 25 Bbls of Oile at 6 P.M. got sight Long 49=16 at 7 AM got sight Long 49=33 moderate gales S.S.E. two whaleing Barques in sight so ends theas 24 hours Lat 31=41
        </p><p>Friday Aug the 1nd 1851
          theas twenty four hours about Calm throught having stearag way but a small part of the time duering the 24h at 6 P.M. got sight Long 49=15 also 7 A.M. Long 49=21 so ends theas 24 hours Lat 31=41
        </p><p>Saturday Aug the 2nd
          the first part of theas 24 h lay becalmed havy swell heaving from N.W. one sail in sight to the N.W. at midnight Calm at 7 A.M. got sight Long 49=10. latter part light Airs from S.W. 4 sail in sight so ends theas 24 hours Lat 32=00
        </p>
        <PageNumber num={35} /><p>Sunday the 3rd of August 1851
          the first part of theas 24 h light airs from S.W. fine weather with a heavy swell heaving from N.W. and another swell heaving from S.E. at 1/2 past 6 P.M. saw a learg school of whale, being neare night and one or two whailes not far of[f] we lowered at first sight, the whale were bound to the Eastward and quick and before we could git up with them it was knigh[t] so we turned about and came on board of our vessel, and, one of the whalers before mentioned prooved to be the Brig Francklin Capt Seaper of Provincetown 245 Bbs of Spurm and 60 humpback. latter part of theas 24 hours moderate gales from N fine weather. Gamed with the Francklin at 8 A.M. got sight Long 48=50 Lat 32=15
        </p><p>[pencil note in margin] this days log is a lie he could have got on to the whales if he had tried
        </p><p>Monday Aug the 4th
          theas 24 hours commence with moderate gales from N. fine weather in compony with the Brig Francklin at 9 P.M. we headed to the Eastward and the Francklin to the weastward at 7 A.M. got Sight Long 48=30 latter part fresh gales from N.E. by N so ends theas 24 hours Lat 31=50
        </p><p>Tuesday Augt 5th
          at the commencement of theas 24 hours a strong whole sail bress from N.E by N with tolerable fair weather, at midnight much the same, at 4 A.M. fresh bresses, under double reafed topsails and squolley 1/2 past 8 A.M. got sight Long 47=52 latter part strong bresses with rain squolls, and a rough sea, saw one or two watter spouts so ends theas 24 hours Lat 32=03
        </p>
        <PageNumber num={36} /><p>Wensday Augt the 6th 51
          theas 24 hours commence with fresh gales from N.E. with squolley weather top galliant sails and flying gib furled, sing[le] reaf in fore topsail and double reafs in the main. at midnight more moderate at 7 A.M. got sight Long 48=31 latter part Strong bresses E.N.E. so ends theas 24 h Lat 33=04
        </p><p>Thursday Augt the 7th
          theas 24 hours commence with fresh gales from from [sic] N.E. with a rough sea at midnight more moderate with a heavy swell from N.E. at 7 A.M. got sight Long 49=01 latter part lay becalmed so ends theas 24 h Lat 33=44
        </p><p>Friday Augt the 8th
          at the commencement of theas 24 hours lay becalmed. heavy swell heveing from the N.E. at 8 P.M. light air sprung up from S.W. the breess rather increased so that at 3 A.M. we had about 4 [k]nots bress at 8 A.M. got sight Long 48=14 latter part fine weather with pleasant gales from W so ends theas 24 hours Lat 33=30
        </p><p>Saturday Augt 9th
          theas 24 hours commence with pleasant gales from W one sail in sight to the S.W. at midnight fine weather and pleasant gales at 8 A.M. got sight Long 47=17 2 sail in sight to the Weastward, latter part fresh bresses from W and fine weather except noon and there a rain squoll so ends theas 24 hours Lat 33=49
        </p>
        <PageNumber num={37} /><p>[penned note in top margin] Since paying you concluded I hastily write I have you
        </p><p>Sunday August the 10th A 1851
          theas twenty four hours commence with strong Bresses from the W with rain squolls at 5 P.M. furled the topgalliant sails at midnight more moderat but squolly at 8 A.M. got sight Long 46=19 latter part moderat breeses from N.E. Caught 3 dolphin so ends theas 24 hours Lat 34=28
        </p><p>Monday Augt the 11th
          the first part of theas twenty four hours pleasant gales from W.S.W. Steering E.S.E. under double reafed topsails making 2 or 3 [k]nots head way, mid part fine weather, at 9 A.M. got sight Long 46=05 about the same time mentioned Spoke the Brig America of Mattyposset Capt Weast, 16 months out 300 Spurm, he spoke the Woter Irving about a week or 10 days previous 75 Bbs. Latter part gentle breezes S.W. with fine weather so ends theas 24 h Lat 34=22
        </p><p>Tuesday Augt the 12th
          theas 24 hours commence continue and End with fresh gales from W at 8 A.M. got sight Long 44=10 latter part squolley so ends theas 24 hours Lat 33=54
        </p><p>Wensday Augt the 13th
          theas twenty four hours commence with Strong gales from W.S.W. 7 P.M. took in sail as yousal, at midnight fresh gales from W. at 4 A.M. fresh gales as at midnight and verry squolley set the topgalliant sails over single reafed topsails at 8 A.M. got sight Long 42=19 thus ends theas 24 houres all well except the Steward, and he is laid by with a bad Coald
        </p>
        <PageNumber num={38} /><p>Thursday August the 14th 1851
          theas twenty four hours begin with Strong gales from S.W. Stearing E.N.E. at 4 P.M. very squolley moastly rain squolls at 5 P.M. the wind canted to W single reafs in the topsails, topgalliant sail, and flying Gib furled at 1/2 past 4 P.M. double reefed the top Sails hauled up the trysail and mainsail and furled the gib. stearing ENE through the knight at 7 A.M. got sight Long 40=11 at 9 AM more moderat made more sail the latter part fine weather so ends theas 24 h Lat 35=33
        </p><p>Friday Augt the 15th
          theas twenty four hours commence with fresh gales from W and squolley at midnight Fair weather 4 A.M. ligh[t] air from N.W. And squolley. At 7 A.M. got sight Long 38=56 latter part lay be calmed. Clear weather and and verry worme and sweltering weather, thus ends theas 24 hours, Capt Rider, Second Mate and two or there of the hands forward quite sick with bad Coalds Lat 36=24
        </p><p>[noted in margin] pased through a number of Strong tide rips
        </p><p>Saturday Augt the 16th
          theas twenty four hours begin with verry light air from the South, at 4 P.M. pleasant Bresses saw a sail to the E.N.E. at midnight pleasant gales and fine weather at 8 A.M. got sight Long 38=26 the same sail before mentioned in sight. latter part good whole sail breess S.S.W. so ends theas 24 hours Lat 37=13
        </p><p>[noted in margin] pased through tide rips as we did yeasterday
        </p><p>August Sunday the 17th
          theas twenty four hours commence, continue and end with strong gales from S.W. at 4 P.M. spoke The Barque Elisabeth of Mattyposset Capt Dexer 8 months out 50 Bbls spurm 35 humpback 15 black fish. gamed with this Barque untill 7 P.M. at 7 AM got sight Long 36=45 so ends theas 24 hours, and the sick ones are better Lat 37=36
        </p>
        <PageNumber num={39} /><p>[penned note in top margin] Sighs to think begins with many
        </p><p>Monday August the 18th A 1851
          theas twenty foure hours commence with fresh gales from S.W. stearing E.S.E. under short sail 3 P.M. [unclear] Ship headed N.N.E. blowing fresh throught theas 24 houres 1/2 past 7 A.M. got sight Long 35=53 Steering E spoke The Barque Sun of Mattyposett 50 days out Clean So ends theas 24 hours Lat 38=32
        </p><p>[penned note between entries] I never might see thes errors
        </p><p>Tuesday Augt the 19th
          theas twenty foure hours commence with Strong gales from W thick rough weather, at midnight more moderate 7 A.M. got sight Long 34=09 latter part lay becalmed so ends theas 24 houres Lat 38=40
        </p><p>[penned note between entries] These 24 hours, Thursday noon Sail in sight
        </p><p>Wensday Augt the 20th
          at the commencement of theas twenty foure houres verry light air from the S.W. some part of the time about calme one sail in sight saw a learg school of porpoces at 10 A.M. saw a school of grampoces, so ends theas 24 houres Lat 38=40 Long 34=30
        </p><p>[penned note between entries] The first part these hours light
        </p><p>Thursday Augt the 21st
          the first part of theas 24 hour light breeses S.S.W. at 4 P.M. pleasant gales from S.W. fine weather at 5 A.M. just before sunrise saw whale lowered the larbourd boat fastened to a sixty Barrel whale and in 5 or 10 minutes had her spouting blood. she soon turned up, we wafed [waifed] her and put on after the school but could not come up with them, we took oure whale along side and commenced cutting her in so ends theas twenty four hours Lat 38=20  32=30
        </p>
        <PageNumber num={40} /><p>Friday Augt the 22nd 1851
          theas twenty foure hours commence with pleasant gales from S.W. squolly looking weather at 1/2 past 7 P.M. finished cutting in the body and commenced diping [dipping] the case 1/2 past 10 while diping the case a ship spook us Cat Smith Master, did not understand her [unclear] &amp;c at 5 A.M. cauled all hands and were buisely imployed In takeing care of the head oil and setting try woorks ag[o]ing, one sail I sight, verry rough and squolly at 7 A.M. got sight Long 32=09 so ends theas twenty foure houres Lat 38=53
        </p><p>Saturday Augt the 23rd
          the first part of theas twenty foure houres moderate gales from all points of the compass and a verry heavy sharp swell heving from the N.E. and from the S.E. the weather squolly at 7 A.M. made a school of whale lowered for them, thay wer headed all ways we waited a while for them to git reguler but theay took a start and went quick and we could not git up with them we suposed that theay took a fright from some whale ganbe that we saw where theay were milling round so ends theas 24 houres two sail in sight Lat 39=09 Long 32=08
        </p><p>Sunday Augt the 24th
          the first part of theas 24 hours fine pleasant gales from S.W. and good weather, 2 sail in sight, woch on deck imployed in boiling blubber, at midnight fine weather sight air S.E. at 7 A.M. got sight Long 32=00 latter part fine weather and pleasant bresses S.E. so ends theas 24 hours Lat 39=06
        </p>
        <PageNumber num={41} /><p>Monday August the 25th A 1851
          at the commencement of theas twenty foure houres light airs S.E. three sail in sight bark Brig and a schooner the schooner bore up and run down and spook us it proove to be the Walter Irving Capt Nickerson of Provincetown Capt Nickerson lowered and came aboard of us he had 160 Bbls spurm Oil at midnight fine weather, at 7 A.M. got sight long 32=30 latter part gen[t]le gales S.E. and fine weather three sail in sight so ends theas 24 hours Lat 39=12
        </p><p>Tuesday Augt the 26th
          theas twenty foure hours begin with pleasant gales from the south, fine weather 5 P.M. Eleven sail in sight, at midnight fair weather latter part of the knight verry windy and squolly with heavy rain squolls 1/2 past 5 A.M. looked so verry so squally and ragged that the Capt ordered the maintopsail double reafed which was allready single reafed, but we wer most happyly disapointed, at 1/2 past 7 A.M. fine weather got sight Long 32=22 latter part windy and squolly, the Walter Irving before mentioned is in sight 5 or 6 miles distant to the S.W. to windward thus ends theas 24 hours Lat 39=01
        </p><p>Wensday Augt the 27th
          All of theas twenty foure houres moderate gales from the S and fine pleasant weather (at sun set nearly calm. three sail in sight one to windward and the other to leeward) at 7 A.M. got sight Long 32=14 at 11 A.M. raised a school of whail bound to leward and verry moderat the Waist boat lowered first and fastened to an 80 barrel whail about the time the sun was on the meridean so ends theas twenty foure houres    Lat 39=00
        </p>
        <PageNumber num={42} /><p>Thursday August the 24th A 1851
          All of theas twenty foure houres pleasant gales from the Southern quarter while the Waist boat still fast to his whail and she running and sounding the second time sounding took all of his warp bent in to the larbourd boats warp and did not stop until she had taken about 450 fathoms of warp she still ran and sounded and for three or foure houres hadent out less then 300 fathoms after that we got up within 10 or 20 feet of her flukes the sun about an houre high the Capt got in to the larbourd boat and the Mate in to the Starbord boat but could git no nearer untill after dark the last time that theay hauled up on her he got up to her hump and gave her a tolerable good lance and cut from her the vessel was about 5 or 6 miles [pencil note above: hul down at sunset] to windward and the other boats between him and the Brig the boats all got aboard about 9 [pencil note above: 12] P.M. at midnight fine weather and moderate bresses at 7 A.M. got sight Long 32=13 latter part of 24 hours pleasant gales from the S and moast beutiful weather so ends theas 24 hours Lat 39=24
        </p><p>[noted in margin]  at 7 A.M. got sight Long 32=13
          [pencil note in margin] another lie from begining to end
        </p><p>Friday August the 29th
          theas 24 hours pleasant gales from the S and fine weather, saw grampoces and porpoces, at 7 A.M. got sight Long 32=24 the schooner, Wolter Irving in sight so ends theas 24 hours Lat 39=23
        </p><p>Saturday Augt the 30th
          theas twenty foure houres commence with Strong breesses from the S at midnight much the same but squolley at 5 A.M. windy and squolley at 7 A.M. got sight Long 32=48 latter part more moderat maid all sail with pleasant gales form the S so ends theas 24 houres Lat 39=16
        </p>
        <PageNumber num={43} /><p>Sunday August the 31st 1851
          theas twenty foure houres commence with pleasant gales from the S the weather some what squolly Steering Eastward by the wind at 5 P.M. Corvo and Flores in Sight at midnight fresh gales from the S at 7 A.M. got sight Long 31=15 Flores but 8 or 10 miles distant bairing E which is in Long 31=07 Lat 39=26 two barks in sight boath whailers so ends this day with fresh bresses and squolley weather Lat 39=24
        </p><p>Monday Sept the 1 A 1851
          theas twenty four hours commence with fresh breeses and squolley weather heavy rain squolls one sail in sight at 5 P.M. nearly calm by times but verry squolley at midnight fair weather at 7 A.M. verry light airs from the E or E.N.E. got sight Long 31=32 latter part fine weather and moderate gales from E Lat 39=14
        </p><p>Tuesday Sept the 2nd
          theas twenty four hours begin with moderate gales from E fine weather somewhat squolley, at mid night thick weather and heavy rains untill 5 A.M. when it cleared of[f] and we had fine weather and pleasant gales from N.N.E. at 7 A.M. got sight Long 32=47 latter part wind and weather continues fine so ends theas twenty foure houres Lat 38=41
        </p><p>Wensday Sept the 3rd
          theas twenty four hours commence with light airs from East with fine weather at midnight, wind and weather much the same as at the first part at 7 A.M. got sight Long 32=32 saw 3 or 4 schools of grampoces, verry light airs from E the latter part of theas 24 houres with fine weather so ends this day journal Lat 32=44
        </p>
        <PageNumber num={44} /><p>Thursday September the 4th A 1851
          theas twenty four hours begin with light airs from E. with fine weather 6 P.M. spoke Barque Itely of Green Poant Capt Rowly twenty eight days out with 25 Barrels of spurme Oil Capt. Rowly is fitted for three years bound around the Cape for write whail at midnight gentle bresses and fine weather at 7 A.M. got sight Long 32=58 the barque Itely still in sight latter part gentle gales S.S.W. two sail in sight so ends theas twenty four hours Lat 39=13
        </p><p>Friday Sept. the 5th
          theas twenty four hours begin with light moderate gales from the S.W. and fine weather at midnight windey, raney, and verry squolley accompenyed with thunder and lightening and continued the same untill 7 A.M. when it cleared up and had fine weather with pleasant gales from the N.W. but a heavy swell heaving from diferant quarters so ends theas twenty four hours Lat 40=00
        </p><p>Saturday Sept the 6th
          theas twenty foure hours commence with moderate gales from NW. with fine weather and a verry heavy swell heaving from N.W. at midnight fine and pleasant weather at 7 A.M. got sight Long 32=18 neare Flores, 3 sail of vessels in sight one appeared to be a Hermaphrodite heading down towards us as if to speek with with the Jem so ends theas 24 hours with pleasant gales from W and fine weather Lat 39=17
        </p>
        <PageNumber num={45} /><p>Sunday September the 7th 1851
          theas twenty foure houres moderate gales frome the S.W. and fine, pleasant, weather, the Verginiea came down and spoke us we had 250 Bbls five months out Capt Martine 160 Bbl [unclear] of foure months out. the Wolter Irving was but a short distance to leward. we both ran down and spoke him with 160 Bbls of spurm Oil we gamed with them until about 8 0r 9 O clock P.M. fine moderate weather through the knight and latter part of theas twenty four hours boath of theas vessels in sight so ends this days journal 25 miles SE from Flores
        </p><p>Monday Sept the 8th 1851
          theas twenty four hours moderate breeses and pleasant weather saw a learg ship boiling. headed in towards Flores so ends theas 24 hours Flores is about 25 miles to the N.W. of us so ends theas twenty four hours
        </p><p>Tuesday Sept the 9th
          theas twenty four hours begins with moderate breeses from S with fine weather at midnight rainey and squolly and continues so at eight A.M. we wer under double reaf topsails 3 sail in sight it cleared up about 12 so ends theas 24 houres stearing for Fayoll [Faial Island, Central Azores] which baires S.E. 30 miles distant so end theas 24 hours
        </p><p>[noted in margin] saw a school of blackfish
        </p>
        <PageNumber num={46} /><p>Wensday, September the 10th A 1851
          At the commencem of theas twenty four hours we have fresh breeses from N.E. Stearing E.S.E. by the wind for St. Georgees Island to recrute at 8 P.M. Fayal bairs S 8 or 10 miles distant at midnight wind and weather continues much the same, rather more Squolley took in fore top galliant sail and flyingib, and at 4 A.M. in the morning we wer cloast in to the weastern End of St George we [unclear] down about the middle of the Island on the South side at 8 A.M. lowered the Starbourd boat and went ashore to git wood, watter, ballast &amp;c Capt Rider gave the Shipkeeper and Manual one of our boat steerers liberty to be absent from the vessel twenty four hours to sey their friends on St George the Capt returned on board Just before twelve O Clock and had ingaged some supplies the wind blew heavy by squolls of[f] the Island tacked the Brig back and foarth under double reafed topsails and fore topmost sta[y]sail so ends theas twenty four hours
        </p><p>[penned between entries] Beautiful
        </p><p>Thursday Sept. 11th
          theas twenty four hours commence with Strong breeses of[f] the land while laying back and forth under double reafed topsails under St. George the Captin and the moast of the crew went ashore for wood watter, ballast &amp;c, it was so rough that they only got about 1/2 chorde of wood which they brought of[f] just before night. At 9 P.M. verry moderat and at midnight Calme at 1/2 past 6 A.M. in the morning Capt Rider and the moast part of the crew went ashore with twoo boats, ballast, watter &amp;c it was still rough on shore and could only get 2 small boat loads this fore noon at 11 AM we had a pleasant brees from SE so ends theas twenty four hours
        </p>
        <PageNumber num={47} /><p>Friday September the 12th 1851
          the first part of theas twenty four hours moderate breeses from S.S.E. and fine weather all hands imployed in procureing ballast, Watter &amp;c at 4 P.M. heavy swell hove on shore and we wer no able to git any thing more this afternoon. middle part fresh breeses from S.E. at 7 A.M. more moderat went ashore with one boat with some blackfish Oile to trade for Vegetables &amp;c. so ends theas twenty four hours while we are under shorte working sail neare in to St Georges Island, on the South side
        </p><p>Saturday Sept the 13th
          theas twenty four hours commence with gentle breeses from S.E. smooth weather, but soon increased and made it rough one shore and the weather looked so bad that the inhabetance of the Island said that it was gathering up for an onshore storme, so we drove on our [unclear] and ship 3 more men, got our trumpery all aboard, it soon began to rain and blow we headed towards Fayal untill past the weastern end of St. George then hauled up around it to the N.E. under moderate sail. at 8 A.M. we wer about 1/2 way between St. Georg and Gracyoce [Graciosa, Azores] fresh brees and rough sea took in all sail except double reafed topsails and fore topmast staysail so ends theas twenty four hours whil we are under the lee Graciosa making good weather
        </p><p>Sunday Sept the 14th / 51
          at the commencement of theas 24 h we wer under the lee of Graciosa with heavy gales from S.E. under double reafed topsails and foretopmast stasail at midnight more moderate wind blowing from SW latter part of the night we had one or two thunder squolls come over with raine and wind latter part of theas twenty four hours moderate gales from W and pleasant weather the weastern end of Terceira bairing S by W 6 or 8 miles distant 3 sail in sight so ends theas twenty four hours Lat 39=06
        </p>
        <PageNumber num={48} /><p>Monday September the 15th 1850
          theas twentyfour hours commence with moderate gales from W fine weather at 1/2 past 6 P.M. gamed with the Virgineia of Orleans Capt Martin 160 reports the Spartin of Provincetown 250 Bbls Oil the Govner Hopkins Clean Terceria [Terceira, Azores] W 5 miles distant steared of[f] to the Southward through the knight under short sail at midnight fine weather at 8 A.M. Terceria baring N.N.W. 15 or 18 miles distant latter part moderate gales from N.N.E. fine weather so ends theas twenty four hours Lat. 38=12
        </p><p>Tuesday Sept. the 16th
          the first part of theas 24 hours moderate gales from the N.N.E and cloudy otherways good weather at 5 P.M. rather Squolly while we are neare in to the weastern end of St. Michaels at 8 P.M. shortened sail for the knight at 5 A.M. made sail as yousal while we are about 15 miles Weast of the Island latter part Strong breeses from N.E. at the close of theas twenty four hours we are cloast in to the City on the SW side of the Island
        </p><p>Wensday Sept the 17th/51
          at the commencement of theas twenty four hours we have fresh breeses blowing of[f] the land saw three on 4 sail of vessels laying at anchor of[f] the City of St. Michael on the SW side at 3 PM squolly with wind and rain and continued the same through the night we passed St. Maryes about 10 P.M. under Short sail Stearing southward at 8 A more moderate the rain and wind seased but remained Cloudy so that we could git no sight 1 barque in sight bairing W 5 miles distant stearing SE by S the same as we are a stearing so ends theas 24 houres at 1/2 past 11 AM fine Cleare weather by dead reckoning Lat 36=27 Long 24=30
        </p>
        <PageNumber num={49} /><p>Thursday September the 18th 1851
          theas twentyfour hours commence with moderate breeses from N.N.E. and fin weather but soon becoms Squolly with rain and some wind by squolls, and continued squolly and rainy to the close. at 8 A.M. got sight Long 23=00 saw a school of grarmpoces Capt Rider Shot one of them and supposed that he must have died from the effects of the shot. one sail in sight of[f] our lee beem so ends theas twentyfour hours Lat 36=12
        </p><p>[noted in margin] at 6 P.M. saw a School of Blackfish lowered and got one 2 Bbl Blackfish
        </p><p>Friday September the 19th/51
          theas twentyfour hours begin with fresh gales from NE and rugged weather. Continued and Ends the same rainy and squolly throught at 10 AM got sight Long 22=13 so ends theas twentyfour hours Lat 35=48
        </p><p>Saturday Sept 20th
          theas twenty four hours commence with Strong gales from the E with Squolly, rainy, ruged, weather and continued much the same to the Close of theas 24 hours at 8 A.M. got sight Long 21=47 saw a Learg Ship Stearing S.W. so ends theas twenty four hours Lat 34=24
        </p><p>Sunday Sept 21st/51
          at the commencement of theas twentyfour hours strong breeses from E.S.E. saw one sail Stearing W.S.W. at  5 PM gales increas and verry squolly, cloast reafed, main topsail and double reafed the fore topsail. and set a Storme trysail and fore topmast Staysail. fresh breeses through the knight at 8 A.M. more moderate and cleared up so that we got sight Long 22=20 latter part of theas twenty four houres strong breeses E.N.E. so ends theas twenty four hours Lat 35=03
        </p>
        <PageNumber num={50} /><p>September Monday the 22nd A 1851
          the first part of theas 24 hours lay to under Cloast reafed fore and main topsails, fore topmast Staysail and Storme trysail. the wind blowing heavy from E to E.N.E. squolly weather and a rough sea. at midnight Strong gales at 7 AM more moderate and better weather, made some rainying [running?] sail heading up S.E. by E wind E by N At 8 A.M. got sight Long 22=40 so ends theas 24 hours Lat 35=00
        </p><p>Tuesday Sept the 23rd/51
          theas 24 hours commence and continue through the middle part with fresh gales from the Eastern quorter with a rough sea, and squolly rainy weather, at 8 A.M. cleared up got sight Long 31=43 latter part good smart whole sail brees ad fine Cleare weather heading S.S.E. by the wind which is E so ends theas 24 h Lat 33=59
        </p><p>Wenesday Sept 24/51
          theas 24 h commence with moderate gales from N.E. with tolerable good weather, toward the middle and latter part fresh gales, squolly weather. heavy Rains and a rough sea bearing from N.N.E. saw one ship headed weastward at 7 A.M. got sight Long 19=46 so ends theas 24 h Lat 33=25
        </p><p>Thursday Sept 25/51
          theas 24 h commence with Squolly weather and verry soon after have Strong gales from N.E to E.S.E. at 7 A.M. more moderat and Clear enough to git a sight Long 19=54 latter part more moderate and tolerable good weather saw a learge Barque headed to the SW so ends theas 24 h the weather look windy and squolly Lat 33=45
        </p>
        <PageNumber num={51} /><p>Saturday September the 27th A 1851
          the first part of theas 24h squolly weather and strong breeses from E at midnight strong gales and rough sea at 7 A.M. got sight Long 20=30 at 9 A.M. made a sail 4 points off our weather bows at noon could see her plane of deck. she was by the wind the same as we were (and when we hove to at night she was about foure or five miles of[f] our weather Beam. the) latter part fresh gales and a verry heavy swell heaving from the N.N.E other way weathers good thus ends theas 24h Lat 35=08
        </p><p><br />
        </p><p>Sunday Sept 24th/51
          [penned note after date] [unclear] Lat.
          theas 24 h begin with strong gales from E fine weather, but a heavy swell heaving from the N.N.E. at midnight verry moderate at 7 A.M. got sight Long 20=48 saw a learg Ship headed to the SW and the Brig before mentioned the wind aired up a little and hauled to the N.N.E. we boath tacked to the Eastward she was 5 or 6 miles to windward she [unclear] of for us. lowered his boat and came aboard of us she prooved to be a French Brig Watter Wich [Water Witch] belonged to Paris bound to Giberaller [Gibralter] out of provishions we gave him one Bbl of bread and a few potatoes and some lamp Oil. he had non to burn in his binacle. latter part theas 24 moderate gales from N.N.E and find and pleasant, smooth weather Lat 35=29
        </p><p>Monday Sept 29th 51
          the first part of theas 24h light airs from the N.N.E and fine smooth weather laying up E at 2 P.M. squaird [squared] in the yards and run of[f] S.S.E at midnight fine moderate weather at 7AM got sight Long 20=54 hauled her up W.S.W. by the wind which had canted to the N.W. 4 P.M. got sight Long 21=05 so ends theas 24 h Lat 34=41
        </p>
        <PageNumber num={52} /><p>Tuesday September the 30th 1851
          the first part of theas 24 h strong breeses
          from the N.N.W. laying up W by the wind
          middle part nwne moderat at 7 A.M. got
          Sight Long 21=08 latter part fresh gales
          from N.W. Clear weather [tack?] one or twice
          saw a sail to windward and when
          we tacked the last time which was to the
          Westward the sail to windward [wore?] ship
          and run down for us. So end theas 24h
          Lat 34=43
          October the 1st 1851
          the first part of theas 24 h pleasant gales
          from the N heading up by the wind W.N.W.
          hauled up the mainsail a hove back our main
          topsail and topgalliant sail to the mast for
          the Ship [Hearild?] of N.B to speek us. She is
          commanded by Capt Sloacom he has 65 Bbls
          spurm and had seen whales six times. At midnight
          gentle breeses and good weather at 8 A.M. a
          sail in sight three points forward our lee bean
          headed to the N.E. and we wer headed W.N.W.
          clost haul the wind at N when she was about
          leeward of us She tacked to the W. laying up
          about the same as we are laying up. So ends
          theas 24 yours Lat 34=12
          [in margin]  at 8 A.M. got sight Long 21=43
        </p><p>Thursday Oct 2nd / 51
          theas 24 h commence with gentle breeses from
          the N with fine and pleasant weather the
          Brig (before mentioned to leeward) [squirined?]   of
          before the wind, and we thinking that she
          might have raised whale, [squirined?]  of after her
          for about one houre, she still keeping the
          same courses we hauled up by the wind lay
          up W.N.W. another sail in sight of our weather
          bows at 3P.M. She spok us [&amp;?] proved to be the Union of
          Provincetown 5 months out Clean at 6 P.M. took a
          squall from NE and had a fresh breese through th
          [in margin]
          night at 7 A.M. got sight Long 20=55
          fresh gales and ruged weather the latter part laying up SE.
          so ends theas 24 h Lat 33=48
        </p>
        <PageNumber num={53} /><p>Friday Oct the 3rd 1851
          theas 24 hours begin with fresh gales from E.N.E. with squolly, ruged [rugged] weather  at 1 P.M. tacked ship to the N the wind canted to E by S we heading up N.E. by N at midnight Strong breeses. at 7 A.M. got sight Long 20=57 fresh breeses E by N laying up N by E latter part moderate breeses and fine weather a heavy swell heaving from the N so ends theas 24 hours Lat 34=35
        </p><p>Saturday Oct the 4th/51
          theas 24 hours begin, continue and end with moderate gales from E by N and fine weather heading N by E. at 6 P.M. spoke Scr Ameailia of Sandwich Capt Hoxey three months out Clean. at 7 A.M. got sight Long 21=24 so end theas 24 h Lat 35=18
        </p><p>Sunday Oct the 5th/51
          at the commencement of theas 24 hours tacked Ship laying up S.E. with moderate gales from E.N.E. with fine weather at 7 P.M. tacked Ship headed N.N.E Starbourd tacks [abound] at midnight moderate gales and good weather at 6 A.M. the wind canted back again tacked Ship heading up S.E. and at 8 A.M. got sight Long 21=13 latter part pleasant gales E.N.E. and fine weather so ends theas 24 hours Lat 34=59
        </p><p>Monday Oct the 6th/51
          the first part of theas 24 hours pleasant breeses from E.N.E. with weather, middle part pleasant Breeses and fine weather heading S.E. at 7 A.M. got sight Long 20=00 latter part fresh gales N.E. by E heading S.E by S saw 1 sail headed to the weastward thus ends theas 24 hours Lat 34=20
        </p>
        <PageNumber num={54} /><p>Tuesday October the 7th A 1851
          Strong gales from E.N.E throught theas 24 h with roug[h] ruged squolly weather Stearing S.E. by S for Maderia. nothing more oucurd [occurred] worthy of remark (except our Long) at 7 A.M. got sight Long 18=01 so ends theas 24 h Lat 32=52
        </p><p>Wensday Oct the 8th /51
          fresh breeses the first part of theas 24 h thick smokey or hasey weather laying up S.E. by the wind (larboard tacks aboard) at 3 P.M. saw Maderia baring E.S.E 25 or 30 miles distant we had a strong brees rom E.N.E. verry rough as we drawred in under the lee of the Island we had more moderate breeses untill we got so far in that it was about calm, and we could see that it was still blowing fresh out clere of the Island. At midnight calm at 7 A.M. got sight Long 17=19 latter part light airs and verry baffling all round the compass so ends theas 24 hours 1 Brig in sight cloast in to the Island Lat 32=39
        </p><p>[noted in margin] at 1 P.M put prevent[i]on braces on the main yard to save it it being allready badly sprang in the or neare the slings
        </p><p>Thursday Oct the 10th/51
          theas 24 houres we are a crusing of[f] the weast End of Maderia cloast in to the Island with light breeses from the Eastern quarter and find clear weather 1 Brig in sight, saw a school of grampoces, so ends theas 24 hours. the weast end of Maderia baring E 10 miles dist.
        </p><p>Friday Oct the 10th/51
          theas 24 hours commence with moderat breeses from the S fine weather stearing N.W. at midnight fine weather at 7 A.M got sight Long 17=51 moderate breeses from S.E. stearing N.N.E fine weather thus ends theas 24 h Lat 33=39
        </p>
        <PageNumber num={54} /><p>Tuesday October the 7th A 1851
          Strong gales from E.N.E throught theas 24 h with roug[h] ruged squolly weather Stearing S.E. by S for Maderia. nothing more oucurd [occurred] worthy of remark (except our Long) at 7 A.M. got sight Long 18=01 so ends theas 24 h Lat 32=52
        </p><p>Wensday Oct the 8th /51
          fresh breeses the first part of theas 24 h thick smokey or hasey weather laying up S.E. by the wind (larboard tacks aboard) at 3 P.M. saw Maderia baring E.S.E 25 or 30 miles distant we had a strong brees rom E.N.E. verry rough as we drawred in under the lee of the Island we had more moderate breeses untill we got so far in that it was about calm, and we could see that it was still blowing fresh out clere of the Island. At midnight calm at 7 A.M. got sight Long 17=19 latter part light airs and verry baffling all round the compass so ends theas 24 hours 1 Brig in sight cloast in to the Island Lat 32=39
        </p><p>[noted in margin] at 1 P.M put prevent[i]on braces on the main yard to save it it being allready badly sprang in the or neare the slings
        </p><p>Thursday Oct the 10th/51
          theas 24 houres we are a crusing of[f] the weast End of Maderia cloast in to the Island with light breeses from the Eastern quarter and find clear weather 1 Brig in sight, saw a school of grampoces, so ends theas 24 hours. the weast end of Maderia baring E 10 miles dist.
        </p><p>Friday Oct the 10th/51
          theas 24 hours commence with moderat breeses from the S fine weather stearing N.W. at midnight fine weather at 7 A.M got sight Long 17=51 moderate breeses from S.E. stearing N.N.E fine weather thus ends theas 24 h Lat 33=39
        </p>
        <PageNumber num={55} /><p>Saturday October the 11th A 1851
          theas 24 h moderate breeses from the N.E fine weather and a smooth sea at 3 P.M. (saw a sea turtle) at 7 A.M. got sight Long  18=10 woch on deck imployed in repairing the gib &amp;c so ends theas 24 h (our course N.W. by N Lat 33=45
        </p><p>Sunday Oct the 12th/51
          theas 24h commence, continue, and, with moderat gales from the E with fine pleasant weather and a smooth sea, while we are stearing N.W. by N the moast part of the time under shorte sail, at 8 A.M. got sight Long 19=13 thus endeth theas 24 houres all hands well but in rather low Spirits having [sean] no whale since the 27th of Augt Lat 34=27
        </p><p>Monday Oct. the 13th/51
          theas 24 h moderate gales from the E fine weather and a Smooth sea. our course by compas N.W. by N. at 8 A.M. got sight Long 20=22 one sail in sight so ends theas 24 hours Lat 35 =15
        </p><p>Tuesday Oct the 14th/51
          the 24 h light airs from the E fine weather and a smooth sea stearing all the way from W.S.W. to W by N at 4 A.M. saw a grampos but a few yards from the Brig. at 8 A.M. got sight Long 21=32  so ends theas 24 h Lat 34=42
        </p>
        <PageNumber num={56} /><p>Wensday October the 15th A 1851
          theas 24 h commence with light breeses from the E. but soon hauled round to the S and at 3 P.M. we had light breeses from W.S.W. fine weather with it stearing by the wind headed to the Weastward 1/2 past 3 P.M. saw a learg school of blackfish headed to the eastward at midnight gentle breeses from S.W. at 8 AM got sight Long 21=51 latter part of theas 24 hours fresh breeses from S.W. by W weather squolly rainy with heavy head beat sea heving from W.N.W. so ends theas 24 h Lat 35=50
        </p><p>Thursday Oct the 16th/51
          At the commencement of theas 24 h fresh gales from W.S.W. heading N.W. by the wind midle part moderate gales from N Stearing W.S.W. at 8 A.M. got sight Long 23=09 fresh gales with fine weather otherways, saw 2 sail one of[f] our weather beam and the other of[f] our lee bows at 10 A.M. aultered our course and steared N.N.W. fresh gales from N.E so ends theas 24h Lat 35=14
        </p><p>Friday Oct the 17th/51
          the first part of theas 24 h Strong whole sail brees N.E. Stearing N.N.W. at 6 P.M. hove to, as yousal under shorte sail heading to the Northward, at 8 AM got sight Long 24=09 thus ends theas 24 h Lat 35=54
        </p><p>Saturday Oct the 18th/51
          theas 24 h moderat breeses first part from the N.E. latter part S.E. weather good exeps [except] now and then a rain squol would come over and be cleare again in a few minutes. at 8 A.M. got sight Long 25=51 light airs from N.E. weather continues the same to the close. s[o] ends theas 24 h Lat 37=00
        </p>
        <PageNumber num={57} /><p>Sunday October the 19th A 1851
          at the commencement of theas 24 h we have a light aire from E.S.E. St. Maryes and St. Micheals plain in sight St. Maryes baring E and St. Micheals baring N.N.E. at midnigh[t] fine pleasant brees from S.E. run under short sail until neare in to the weastern part of St. Micheals, and hove to at 9 A.M. got sight Long 25.55 making our crenomater [chronometer] 12 or 15 miles to far to the weastward, the remainder of theas 24 h fine pleasant breeses from S.W. heading of[f] from the Island saw two vessels headed Eward so ends theas 24 hours Lat 37=49
        </p><p>[penned between entries] 1 Vessel’s name
        </p><p>Monday Oct the 20th/51
          theas 24 h begin with fresh breeses from S.W. and with tolerable good weather heading W.N.W. under Shorte sail at 11 P.M. took a heavy squoll from W.S.W. lasting but a few minutes and then we had another from the N.W. taking us all aback caring [carrying] away one of our fore topmasts [se]conds after the heaft of the squall was over Cloast reafed the main topsail and put the Brig of W.S.W. under double reafed fore topsail Cloast reafed main topsail and fore topmost staysail the wind was blowing a heavy gale from N.N.E. at 1/2 past 7 A.M. more moderat and cleare so that we got a Sight Long 27=00 made more sail and at the close of theas 24 h we are under all sail except the fore top galliant sail and flying gib saw a whailing Barque headed Eastward so end theas 24 hours Lat 37=03
        </p><p>[penned down left margin] 16 17 18 19 20 21 22 23 24 25 26 27 28 29
        </p>
        <PageNumber num={58} /><p>Tuesday October the 21 1851
          the first part of theas 24 h we have a strong gale from the N with a heavy swell heaveing from the N.W. stearing W.S.W. fore top galliant sail and flying gib furled. 2 sail in sight one headed to the E and the head to the W. at 6 PM more moderate. shortened sail for the night Stearing W untill 8 A.M. got sight Long 29=16 latter part lay becalmed so ends theas 24 h Lat 36=04
        </p><p>Wensday Oct the 22nd/51
          theas 24 h commence while we lay becalmed with fine weather it soon aired up from S.W. and continued a while and then began to brees at 3 P.M. discovered somthing on the water to windward that looked like a boat. [unclear] some fregments of a vessel we lowered our boat and took it along side it prooved to be a Ships Misenmast with the moast of the Spars and sails attached to it we saved the  mast part of it. it was blowing fresh and looking likely for a heavy gale, besides it was gitting dark. we cut frome the mast and let it go with what remained attached to it. we hove to und[er] doubled reafed fore and Cloast reafed main topsail and fore topmast staysail, heading W by N at midnight at Midnight heavy gales by squolls at 2 A.M. the wind canted in to W wore Ship heading S.S.W. the wind soon canted back to SW by W at 6 AM had a heavy squoll put a double storm reaf in the trysail in order to set it and take in the topsails but it soon abated so that we set the storme trysail with out being under the necessity of taking in the topsails at 10 A.M. wore Ship heading W.N.W. latter part fresh gales from S.W. thus ends theas 24 h by dead reckoning Lat 36=30 do do do Long 29=45
        </p>
        <PageNumber num={59} /><p>Thursday October the 23rd A 1851
          theas 24 h commence with heav[y] Strong Gales from S.W. and verry squolly heading W.N.W. at 5 P.M. wore Ship heading to the South the gale abated some but continued verry Squolly through the night untill 8 A.M. at which time we set single reafed fore topsail, double reafed main topsail mainsail reafed fore sail gib and trysail heading SW with Starbourd tacks aboave the sun broak out. got a sight Long 29=17 latter part fresh breeses and squolly weather thus ends theas 24 hours Lat 35=50
        </p><p>Friday October the 24th /51
          theas 24 h commence with heavy breeses and rough squolly weather, heading S.W. with our Starbord tacks aboard, under a Single reafed fore sail and double reafed main topsails whol mainsail reafed fore sail trysail, gib, and fore topmost Staysail. it being squolly, furled the mainsail and gib. hauled up or rather [unclear] up the trysail before we could get the gib in it had blown to peces some considerable at 3 P.M. to a verry heavy squoll. took in all sail except Cloast reafed main topsail reafed fore sail and fore topmast staysail the squoll was from the North at 6 P.M. furled the foresail and put a double Storme reaf in the trysail to set in case we should have need to set it. at 1/2  past 11 A.M. saw a light of[f] our weather bow it prooved to be a learg Ship laying to under shorte sail headed to the N.E. she passed but a shorte distance to the weather of us, the wind vering and hauling from N to NW heavy gales through the night especially larg squolls. at 8 A.M. got sight Long 29=00  we then put the wheel up got the Brig Gem before the wind Steering S.S.W. set double reafed fore topsail and reafed foresail (one sail in sight.) theas 24 hours close with heavy gales from N.N.W. Stearing S.S.W. Lat 34=35
        </p>
        <PageNumber num={60} /><p>Saturday October 25th 1851
          theas 24 h begin with heavy gales especially by squolls which wer verry frequent from N.W. to N we wer scu[d]ding under Cloast reafed main topsail reafed foresail and fore topmast staysail at 3 PM set double reafed fore topsail. Stearing S.S.W. untill 8 A.M at which time the gale abated got sight Long 28=58 at 10 A.M. had all sail on exept the topgalliant sails and gib which was unbent to repair. saw a Ship headed to the N.E. under double reafed topsails also a Brig heading N.E. at the Close of theas twenty four houres hove our topsail yards settle down upon the cups and the reaftackles hauled up Scuding out a Squoll from the N.N.W. the woch on deck imployed in repairing the gib so ends theas 24 h Lat 31=40
        </p><p>Sunday Oct 26th /51
          theas 24 h begin with fresh gales from N.W. with Squolly weather Stearing S.W. saw 3 sail of vessels headed N.E. under double reafed topsails at midnight the wind canted in a point or two we stered S.W. by W. at 8 A.M. we wer under all sail excepts our main gib which was unbent and undergoing repairs. at 1/2 past 8 A.M. got sight Long 30=08 latter part fresh breeses from N.N.W. weather Squolly. so ends theas 24 h Lat 29=05
        </p><p>Monday Oct 27th/51
          the first part of theas 24 h fresh gales from the N some what squolly heading W.S.W. by the wind at 4 P.M. bent the main gib which had through some repairs. heading W by S at midnight fresh gales. at 8 A.M. fresh gales N.E. rainy as squolly stering W 1/2 past 8 A.M. got sight Long 35=28 latter part heavy squolls from the N.E. so ends theas 24 h Lat 27=29
        </p>
        <PageNumber num={61} /><p>[penned note in top margin]
          Is. W. 185[unclear]2
          [unclear]14
        </p><p>Tuesday October the 28th 1851
          theas 24 h fresh gales from N to NW by W squolly weather headed to the weastward by the wind moas part of the tine under single reafed topsails &amp;c. at 8 A.M. got Sight Long 34=58 thus endeth theas 24 h Lat 25=43
        </p><p>Wensday Oct the 29/51
          theas 24h begin with pleasant gales from N.W. by N with fine weather making W by South course by compass at midnight about calm and very squolly looking weather. so much so that the capt ordered the fore topsail double reafed and the main Cloaste reafed we had a number of light squolls with heavy rains  but not much wind at 1/2 past 7 AM got sight Long [blank space] latter part squolly weath[er] thus ends theas 24h Lat 24=14
        </p><p>Thursday Oct 30th/51
          theas 24h we have moderate gales throught from N.N.W. to W. by S with fine pleasant weather except a few light squolls our course was by the wind with our Starbourd tacks aboard at 8 A.M. got sight Long [blank space] (we supose that here was some mistake in yeasterday Sight) so ends theas 24h Lat 23=12
        </p><p>Friday Oct 31st/51
          theas 24 h commence with light aires from the Weastern board with fine weather heading S.W. by the wind with our Starbord tacks aboard at 9 P.M. very light airs W.S.W. tacked ship laying ub [sic] N.W. by N at midnight light airs from S.W. head W.N.W at 8 AM fine brees S.S.W at 9 A.M. quite moderat and rainy latter part moderate breeses from the E thick rainy weather so ends theas 24 h Lat 22=30 D.Re[c] Long 38=30 do do
        </p>
        <PageNumber num={62} /><p>Saturday November the 1st A 1851
          theas 24 h commence with a good whole sail brees from S.S.W. with rainy weather and verry squolly, some thunder and freequeant flashes of sharp litening all through night. oure course W by N at midnight strong gales rainy and squolly under double reafed topsails courses trysail and fore topmast Staysail. at 7 A.M. it had moderated down so much so that we got all Sail on the Brig again at 8 A.M. got sight Long 41=01 latter part moderate gales from SW and fine weather so ends theas 24 h Lat 23=37
        </p><p>Sunday November the 2nd/51
          theas 24 h begin with moderate gales from S.W. but soon canted to the Weastward on into the N.W. tacked Ship laying up S.W. by W Starbourd tacks aboard with moderate breeses (at 11 A.M. a Barque hailing from Plymouth as we understood the Capt to say. Spoke us bound to riough [Rio de Janeiro] his longitude was 42 the same as ours) at midnight fine weather and pleasant gales from the N.N.E. Stearing W by N latter part fine weather with moderate gales frome NE 1/2 past 7 A.M. got Sight Long 42=48 so ends theas 24h Lat 23=21
        </p><p>Monday Novr 3rd/51
          theas 24 h moderate trade winds from NE stearing W by N at 1/2 past 7 A.M. got sight Long 45=23 so ends theas 24 h Lat 23=21
        </p><p>Tuesday November 4th 51
          theas 24 h we have moderate trade winde from E to S.E. light Squolls verry freequent otherways the weather is good at 8 A.M. got sight Long 46=23 so ends theas 24h Lat 23=30
        </p>
        <PageNumber num={63} /><p>Wensday November the 5th A 1851
          pleasant traide winds prevail through theas 24h from E.N.E. excepts som few squolls that come over accompenyed with heavy rains, at 8 A.M. got Sight Long 59=30 thus ends theas 24 h our course is W by N. Lat 23=44
        </p><p>Thursday Nov 6th/51
          theas 24 hours we have pleasant trade winds from E.N.E. while we are stearing W by compass. At 8 A. got sight Long 51=13 at 10 A.M. saw a school of porpoces, the woch on deck are imployed in repairing the riging so ends theas 24 h Lat 23=32
        </p><p>Friday Novr  7th 51
          throught theas 24h we have moderate traids from the E with fine weather. Stearing W by N at 8 A.M. got sight Long 53=24 William Willson denyed duty by refusing to go aloft on a lookout after being repetedly ordered so to doo by the chief officer. thus ends theas 24h Lat 23=44
        </p><p>Saturday Novr The 8th/51
          theas 24h commence, continue, and end with moderate traids [trade winds] from E.N.E to E.S.E. fine weather at 1/2 past 7 A.M. got sight Long 55=23. the woch on deck imployed in ships duty repairing riging &amp;c. so ends theas 24h Lat 23=31
        </p><p>Sunday Novr the 9th/51
          theas 24 hours we have varyable winds all round the compass good fair weather excepts two or three verry heavy shoars [showers] from 5 to 7 A.M. we saved one or two cask of fresh watter that we caught in the quorter boats. At 1/2 past 7 A.M.  got sight Long 56=09 saw a grampos, so ends theas 24h Lat 23=54
        </p>
        <PageNumber num={64} /><p>Monday November the 10th A 1851
          theas 24 h commence with verry light aire on traids from E with fine cleare weather at 3 PM we have it about calme and contined the same untill midnight at which time a light breese sprung up from N.W. at 1 A.M. the wind canted to the N.N.E with a squoll of wind and rain took in the topgalliant sails flying gib and hauled up the main course, at 4 A.M. rather more moderate, under all sail excepts the fore top galliant sail which was furled, the wind had at this time had settled down to the N.E. and a fine brees our coarse at this time is NW by W at 8 A.M. got sight Long 57=54 saw three sail of vessels headed to the S latter part Strong breeses we set the for top galliant Sail and fore topmast stud[d]ing sail so ends theas 24 h Lat 24=24
        </p><p>Tuesday Novr the 11th/51
          theas 24 h we have fresh traids from the N.E. to E.N.E weather rather squolly our coarse is N.W. by W under all sail carrying the fore topmost [unclear]sail at 8 AM got sight Long 61=11 thus ends theas 24 hours Lat 26=02
        </p><p>Wensday Novr the 12th/51
          theas 24 h fresh traids from N.E. to E.N.E at 8 A.M. got Sight Long 64=27 thus ends theas 24h our coarse is N.W by W Lat 27=40
        </p><p>Thursday Novr the 13th/51
          the first part of theas 24 h Strong breeses from N.E.  at 2 P.M. hauled up one point more from NW to NW by N with Stro[ng] brees breeses and squolly weather at 1/2 past 7 gales increas’d took in the topgalliant sails and flying gib and at [unclear] past 8 P.M. single reafed the topsails [unclear] strong gales throught night 6 AM more moderate set all sail at 1/2 past 7 got sight Long 67=04 latter part gentle breeses E.N.E fine weather. Lat 29=44
        </p>
        <PageNumber num={65} /><p>Friday November the 14th A 1851
          the first part of theas 24 h. light verry light airs from the East at 1 P.M. canted to the N we headed to the Weastward with our Starbourd tacks aboard the brees was verry light the middle and latter part lay becalmed hav fine cleare weather heavy swell heaving from three or four diferant ways. at 8 A.M. got sight Long 67=54 the woch on deck imployed in ships duty setting up riging, scrapeing and painting. thus ends theas 24 h Lat 29=58
        </p><p>Saturday November the 15/51
          the first part of theas 24 h lay becalm’d not so much as Stearige way one full riged Brig in sight to the S.E head nortwad. 4 P.M. light air from S.E. the middle part [or] at midnight pleasant breeses from S.S.E. our course N.N.W. at 8 A.M. got sight Long 68=27 latter part Strong breeses from S.S.W so ends theas 24 h Lat 31=10
        </p><p>Sunday Novr the 16th / 51
          theas 24 h commence with fresh gales from S.S.W. with fine weather. our cours NW by N towards night the wind canted in to the weastward and freshend at 1/2 past 9 P.M. took fore topmost Studing sail fore topgalliant sail and flying gib at 3 A.M. our course NW by N cloast hawl more moderate we set the fore top galliant sail and flying gib at 4 A.M. thick and squolly at 1/2 past 5 furled the topgalliant sails and flying gib at 1/2 past 8 got sight Long 70=12  later part light airs W.W.W. so ends theas 24 hours. 2 sail in sight one headed E and the other S Lat 33=19
        </p>
        <PageNumber num={66} /><p>Monday November the 17th 1851
          the first part of theas 24 h we have light baffling breeses from W.N.W to NW our cours is by the wind with our larbourd tacks aboard making about E by N course. middle part about calme. at 8 A.M. got sight Long 70=42 latter part light baffling breeses from N our course by the wind heading WN.W. saw two sail headed S.S.E. so ends theas 24 h Lat 34=29
        </p><p>Tuesday Nov’r 18/51
          theas 24 h begin with moderate and baffling breeses from the North. good weather, but cloudy one brig in sight to windward head to the N.E. at 3 PM she tacked to the Weastward of our quorter at midnight the wind and weather much the same as at the first at 8 A.M. got sight long 72=51 saw two square rigers to windward runing down across our stern. knowing that our Crenometer [chronometer] was out of the way and as we had had no chance since leaving St Mickheals to know how much she was out of the way, we tacked ship lowered the larbourd boat and spok[e] him she was from NY bound to Mobiel her long was about 73=30 so ends theas 24 hours Lat 34=32
        </p><p>Wensday Nov'r 19/51
          the first part of theas 24 h moderate baffling breeses from N to N.N.E heading by the wind to the N.W. at 5 P.M. lowered our boat and tryed the current and found that we have on on one and a half not current setting to the S.W. about this time a light air sprung up from E.N.E. at midnight bafling breeses from N.N.E to S verry squolly, we suppos ourselves to be in the southern Edeg [edge] of the Gulph Stream, latter part moderate breeses NNE and verry squolly, much the same as yousally found in the Gulph Stream so ends theas 24 h Lat 35=47 by dead reckoning Long 73=50
        </p>
        <PageNumber num={67} /><p>Thursday November the 20th 1851
          at  the commencement of theas 24 h took a heavy squoll from N.E. and shortened sail as fast as posable one sail in sight ahead a topsail schooner with a top galliant sail we wer by the wind with starbord tacks abourd the gale got stidy [steady] blowing from N.E by N under double reafed topsails, reaf foresail, mainsail, and storme trysail at 5 P.M. rather more moderate got sight Long 73=45 at 8 A.M. the schooner made sail came up and spok us the Elizabeth of baltymore from Sareleone on the Coast of Afryca 5 weeks and 3 days out bound to N.Y. at midnight fresh breeses N.E. good weather flying gib furled at 8 A.M. got Sight Long 74=51 latter part fresh gales N.E heading N.N.W. saw two sail so ends theas 24 h Lat 37=11
        </p><p>Friday Nov the 21st 51
          theas 24 hours begin with fresh gales with Stormey, ruged, weather form N.N.E at 5 P.M. spoke the James W[u]llwil of N.Y. [unclear] for N.Y. at Midnight under single reafed topsails, Courseses. trysail gib and Staysail with fresh gales frome the E heading N.N.E rainy, ruged weather through the night at 8 A.M. fresh gales from the S Stearing N.N.E the weather thick and stormey could get no sight the weather cleared up just in time to git an observation, while we have fresh gales from W thus ends theas 24 h Lat 39=04
        </p>
        <PageNumber num={68} /><p>Saturday November the 22d A 1851
          theas 24 h commence with heavy gales from W Stearing N by E at 2 P.M. the wind canted to the N.W. by W blowing heavy stearing NE by N untill 2 A.M. at which time we sighted Fire Island light baring N.W. about 6 or 8 miles distant. we then Steared E by N. at 8 A.M sighted montock and at 25 minuts to 10 A.M. Montock light House bore N.W. and at 12 OClock Block Island bore W 10 miles dis't Stearing E.N.E. 5 or 6 sail in Sigt [sight] moast part bound through the Vinyard so ends theas 24 h with fresh gales from the W
        </p><p>Sunday Nov'r the 23rd/51
          theas 24 h commence with heavy gales from the W while we wer Stearing for the Vinyard Sound about 6 P.M. the weather looking wilde and windy to the N our Capt concluded to anchor in Holmses Hole untill towards daylight in the morning. but in runing in onto anchoring ground we accydentily run afoul of A Brig laying to anchor. Carrying away her gibboome &amp; and carrying away our gibboome, and Stove our Waist Boat &amp;c ( the other Brig had up no light at the time) at 9 A.M. got under way with a fine breese from W by N and continued the same to the close of theas 24h and thus theay end
        </p><p>Monday Nov the 24th/51
          at the commencement of theas 24 h pleasant gales from W with fine weather steering NE making the best of our way over the Shoulds of Nantucket which we soon accomplished and at 8 P.M. pased the high land light. the wind was light through the night and baffling frome W to N.W. at at 4 A.M. pased rais point light [Race Point Light]. we than shortened Sail and lay by heading into the bay untill day light we than made sail an at 1/2 past 9 anchored in Provincetown Harbour thus ends thease 24 h in order to commence a Harbour Loge
        </p>
        <PageNumber num={69} /><p>Monday November 24th 1851 Civel a/c
          the latter part of theas 24h lay at anchor in Provincetown Harbour with moderate gales from W so ends theas 24 h
        </p><p>Tuesday Nov 25th 51
          theas 24 h lay at anchor in Provincetown Harbour with moderate gales from the W.N.W fair weather
        </p><p>Wensday Nov the 26th/51
          theas 24 houres have gentle breeses from W.N.W to N.N.E. laying at anchor in Provincetown Harbour Stormey looking weather so ends theas 24 h
        </p><p>Thursday Nov the 27th
          pleasant gales from the N with fine weather still at anchor &amp;c
        </p><p>Friday Nov'r the 28
          laying at anchor in Provincetown harbour with fresh breeses from S.W untill to wards the latter part at which time we had fresh breeses from the N so ends theas 24 h
        </p><p>Saturday Nov the 29th 51
          theas 24 h fresh breeses from N.E. laying at as before mentioned so ends theas 24 h
        </p><p>Sunday Nov the 30th/51
          theas 24 h lay at anchor in Provincetown Harbour fresh gales from the N so ends theas 24 h
        </p><p>Monday Dec'r the 1th/51
          all of theas 24 h very heavy gales from the N.W. at 3 Oclock in the morning our Brig struck adrift and continue to [cage] untill about 9 Oclock A.M. when we brought her up with three anchors a  head, the wind was taking the whole top of[f] the water the moast part of the day, we cloast [close] reafed the fore and main topsails in case we should part our chains or Should be obliged to slip them thus ends theas 24 h
        </p>
        <PageNumber num={70} /><p>Tuesday December the 2st A 1851 civel a/c
          theas 24 h more moderat but the was still N.W. at 4 A.M.  cauled all hands got our anchors and beet up into the Harbour and came to anchor at 10 A.M. the latter part of theas 24 h we have the wind blowing a gentle gale from the N the weather look stormy thus ends theas 24 h
        </p><p>Wensday Dec'r the 3rd/51
          all of theas 24 h moderat gales from the N thretening a Snow storme, while we are still at anchor in Provincetown harbour so ends theas 24 h
        </p><p>Thursday Dec the 4th/51
          the wind still continues to blow from the North some times canting to the N.E. and threatening a snowstorme so ends theas 24 h
        </p><p>Saturday Dec.
        </p><p>Friday Dec'r the 5th/51
          all of theas 24h we lay at anchor in Provincetown Harbour with gales from the N with thick weather, with all the appearences of a snowstorme so ends theas 24 h
        </p><p>Saturday Dec'r the 6th/51
          the wind still continues to blow from the N and N.N.E. and looks stormey as it has for some time past thus ends this days journel
        </p><p>Sunday Dec'r the 7th/51
          the first part of theas 24 h lay at anchor in Provincetown Harbour, with not much of anny wind, it was about calme, the weath[er] was thick and threatening a storme at 8 A.M. a moderate brees sprung up from the S.W. we wayed Anchor and at the close of theas 24 h (civel account) wer of[f] the wood End bar [Wood End Bar] on the back of Long point with moderat breeses from SW and allso a moderate Snow Storme so ends &amp;c
        </p>
        <PageNumber num={71} /><p>Monday December the 8th A 1851 Nautical a/c
          at the commencement  of theas 24h we have moderate gales from the S.W. and quite a Snowstorme, while we are passing the wood End barr [Wood End Bar] on the back of Long point Stearing N.W. by W. making the [best] of our way to Beverly at 4 P.M. it cleared up a little and we sighted the high land of [unclear] also the [gurnet] it soon Set in thick with snow again, the wind canted more to the S.E. and breesed some what. at 7 P.M. it held up Snowing and we sighted Situate lite [Scituate] and soon after saw Boston lite and the lite Boat on mynots ledge of [unclear] Cohesest Rocks [Cohasset Rocks] where we lay becalmed the moast part of the night with snow, hale and rain at 4 A.M. light breeses from the N.W. with rain and hale, stearing by the wind heading North, Easterly for Beverly at 8 A. M. Caught sight of half way rock baring N 3 or 4 miles distant with moderate breeses from S.W. and thick weather, while pasing Marble Head light House, we wer boarded by a Pilot that took us in to Beverly Harbour and at 11 O Clock wer made fast to the Wharf in Beverly thus ends theas 24 hours, according to Sea a/c also my journal of this Voige [remainder of page torn out]
        </p>
        <PageNumber num={72} /><p>Tuesday February 17th 1852
          these 24 hours commences with Light winds from W N W and clear weather at 3 PM got under Weigh at 3-30 the pilot left us at 4 we pased Bakers island at 10 Cape Cod Light bore West Dist 3 miles from which I take my Departure at 12 oclock A.M. we ware in Lat 40d-53 So Ends this 24 hours
        </p>
        <PageNumber num={73} /><p>Tuesday Febuary 17th 1852
          all these 24 hours Light winds from NNW and fine weather crew all on Board
          at 3 PM Got under way
          3-30 Pilot Left us
          At 4 Pased Bakers Island
          At 10 Cape Cod Light Bore West Dist 7 Miles from which point Dept is taken Lat 40d 53 Dr No obs
        </p><p>Wedenesday Febuary 18th 1852
          Comences with fine breses from NNW and cloudy weather midle part fresh breses and fine weather Latter part much the same Lat by Dr 38=53 no obs
        </p><p>Thursday Feburary the 19th 1852
          comences with fine weathe and fresh breeses from the WSW -- midle part fresh breses from the NNW and cloudy -- Latter part blows heavy with raine wind NE So ends thes 24 hours Lat by Dr 27=06 No obs
        </p><p>Fryday Feburary the 20th 1852
          comences with cloudy weathe and sume wind NE
          middle part much the same Latter part fresh breses from NE Lat 35=08
        </p><p>Saterday February the 21st 1852
          first part of thes 24 hours pleasant breses from the North. Latter part more moderate wind NNE Lat 32=41 Long 62=22
        </p>
        <PageNumber num={74} /><p>Sunday th 22d February 1852
          comences with clear weathe and Light winds from the NE Latter part changible winds from th south Lat 32-15 No obs
        </p><p>Monday th 23rd 1852
          comences with cloudy weathe &amp; gales of wind at 4 oclock PM shiped a [unclear] and Lost the waist boat Latter part gales of wind from SW Lat 31-18 Lng 61-45
        </p><p>Tuesday the 24th 1852
          commences with Gales of wind from the SW Latter part more moderate with no observation Lat by DR 30=09
        </p><p>Wedensday February the 25th 1852
          comences with moderate weather wind from southwest Latter part much the same but frequent of rain and threatening clouds so ends thes 24 hours Lat 29-22 Long 61-25
        </p><p>Thursday February the 26th 1852
          comences with fine weather wind from the southwest Latter part v[e]ry moderate So ends thes 24 hours Lat 28-40
        </p><p>Fryday February the 27th 1852
          comences with moderate weathe and rainy and changeble So ends thes 24 hours Lat 28-25 Dr
        </p><p>Satterday February the 28 1852
          comences with fine weather winds NE Latter part fresh breses from NE So ends thes 24 hours Lat 26=20
        </p>
        <PageNumber num={75} /><p>Sunday February the 29th 1852
          commences with Light winds from the NE Latter part fresh breses ENE and cloudy So Ends this 24 hours  Lat 24=48
        </p><p>Monday February the 30th or March Monday the 1st 1852
          first part of these 24 hours moderate Latter part fresh breses from the ENE Long 63-09 Lat 20-58
        </p><p>March Tusday the 2'd 1852
          all this 24 hours fresh breses from  the NE and clear weather all hands imployed in ships duty So ends this 24 hours Long 62-20 Lat 19-25
        </p><p>March Wedensday the 3'd 1852
          commences with fresh breses from the NE Latter part blows heavy from NE Lat 19-19 Long 66=00
        </p><p>Thursday March th 4th 1852
          all these 24 hours fresh gales from the NE at 4 oclock PM made Portoreco bearing SW at 10 oclock P.M. made Mond island [Isla de Mona]  [unclear] running westerly for San Domingo So ends this 24 hours [t]his day got an observation and found [chart coord] True Longitude
        </p><p>Friday March the 5th 1852
          al this 24 hours fresh gales from the SE cruising in Sam Bay for whale all hands well on board so ends thi[s] 24 hours
        </p><p>Saterday March the 6th 1852
          all thiss 24 hours fresh gales from the south west all hands imployed in Ships Duty so ends this 24 hours
        </p>
        <PageNumber num={76} /><p>Sunday March the 7th 1852
          all this 24 hours fresh gales from the SE lying at anchor in Sam bay So ends this 24 hours
        </p><p>Monday March the 8th 1852
          all this 24 hours fresh gales from the SE lying at anchor in Sam bay so ends
        </p><p>Tuesday March the 9th 1852
          all this 24 hours fresh gales from the SE lying at anchor in Sam bay
        </p><p>Wedensday March 10th 1852
          all the last 24 hours imployed in cruising for whale in Sam bay
        </p><p>Thursday March the 11th 1852
          all this 24 hours imployed in Ships Duty moderate weather waves from the South east So ends
        </p><p>Fryday March the 12th 1852
          all hands imployed in Ships Duty crussing for whale in Sam bay
        </p><p>Saterday March the 13th 1852
          commences with blustery weather winds from the South east and rainy
        </p><p>Sunday March the 14th 1852
          commences with wind and rain squals from the South east so ends thiss 24 hour
        </p><p>Monday March the 15th 1852
          all this 24 hours cloud  moderate winds SE all imployed in ships duty
        </p><p>Tuesday March 16th 1852
          all this 24 hours blows  heavy from the South west all hands employed in ships duty
        </p><p>Wedensday March th 17 1852
          All this 24 hours calm lying in Sam bay
        </p>
        <PageNumber num={77} /><p>Thursday March the 18th 1852
          all this 24 hours moderate nothing [unclear] transacted on board  deck hands imployed in Ships Duty
        </p><p>Fryday March the 19th 1852
          all this 24 hours moderate lying in Sam bay five men very sick
        </p><p>Saterday March the 20th 1852
          all this 24 hours cruising in Sam bay for whale five men of[f] Duty
        </p><p>Sunday March the 21't 1852
          all this 24 hours Lying at anchor in Sam bay in company with Sch Union and Sch [unclear] Williams both of Provincetown
        </p><p>Monday March the 22'd 1852
          all this 24 hours engaged in seting up Riging them that is sick is off duty
        </p><p>Tuesday March the 23'd
          all this 24 hours blows heavy from the South East lying in sam bay imployed in ships in ships [sic] Duty so ends this 24 hours
        </p><p>Wedensday March the 24th '52
          all this 24 hours cruising for whale in Sam bay moderate weather all the foremast hands sick Except two so ends this 24 hours
        </p><p>Thursday March the 25th '52
          all this 24 hours cruising for whale nothing special past this 24 hours
        </p><p>Friday March the 26 '52
          all this 24 hours fresh gales from the S E cruising for whale
        </p><p>Saterday March the 27 '52
          all this 24 hours imployed in crusing for whale
        </p>
        <PageNumber num={78} /><p>Saterday March the 28 '52
          all this 24 hours fresh gales from the SW all hands imployed in ships duty
        </p><p>Sunday March the 28th '52
          all thes 24 hours imployed in ships duty all hands well on board so ends this 24 hours
        </p><p>Munday March the 29th '52
          all this 24 hours lying to anchor in Sam bay so ends this 24 hours
        </p><p>Tuesday March the 30th '52
          all this 24 hours pleasant gales from the SE cruising for [w]hale in sam bay
        </p><p>Wedensday March the 31st '52
          first part of these 24 hours blows heavy from the south runing down the south side of Jamaco [Jamaica] so ends this 24 hours
        </p><p>Thursday April the 1st '52
          first part of these 24 hours fresh gales from the south  east runing down the south side of Jamaco
        </p><p>Friday April the 2'd '52
          first part of these 24 hours is calm latter part much the same lying of[f] North Negerl [Negril] Jamaco so ends thes 24 hours
        </p><p>Saterday April the 3'd '52
          these 24 hours commenced moderate latter part much the same lying of [ off] the west end of Jamaco so ends this 24 hours
        </p><p>Sunday April 4th '52
          first part of the twenty four hours very moderate latter part the same lying of[f] the west end of Jamaco so ends this 24 hours
        </p><p>Munday April the 5th '52
          first part of these 24 hours calm latter the same
        </p>
        <PageNumber num={79} /><p>Tuesday April the 6th /52
          all this 24 hours lying at anchor in North Negreal [Negril, Jamaica] recruting two men run away
        </p><p>Wednesday April 7th /52
          at 10 oclock PM got under way and stowed our anchors so ends this 24 hours
        </p><p>Thursday April the 8th 52
          all this 24 hours moderate stearing NNW bound to the bay of Mexico
        </p><p>Friday April the 9th /52
          at 11 pm oclock maide the grand caymans bearing SE Dist 5 miles stearing NW by W so ends this 24 hours
        </p><p>Saterday April the 10th /52
          first part of these 24 hours fresh gales from the SE at 11 oclock AM Cape antonio bore N by W Dist 10 miles so ends this 24 hours
        </p><p>Sunday April the 11th /52
          all this 24 hours blows heavy from the SE lying under reeft topsails
        </p><p>Monday April the 12th /52
          all thise 24 hours moderate weather cruising for whal in the lattitude of 25 Long[itude] 87
        </p><p>Tuesday April the 13th /52
          all these 24 hours cruising for whale in the Lat of about 25N  Long 87-04W
        </p><p>Wedensday April the 14th /52
          first Part of these 24 hours moderate later part much the same cruising near the Lat of 25=50 N Long 87=00
        </p>
        <PageNumber num={80} /><p>Thursday April the 15th /52
          all these 24 hours moderate winds from the NE all hands employed in ships Duty Lat 24= 08  Lon[g] 87  40
        </p><p>Friday April the 16th /52
          first Part of these 24 hours Cloudy with wind and rainy at 2 oclock AM saw A large sperm whale Loured [lowered] away all the Boats the waist boat fastened to her But by the means of braking the irons wee lost the whale Lat 24=40 Long 87=20
        </p><p>[noted in margin] Whale
        </p><p>Saterday April the 17th /52
          First part of these 24 hours modrate breses From the North west latter part the Same all hands well and imployed in Ship Duty Lat 24=25 Lat 87=45
        </p><p>Sunday April the 18th /52
          all these 24 hours blows heavy from the NW the Brig lying under reeft topsails Lat 24=8, 87=54
        </p><p>Monday April the 19th 1852
          first part of these 24 hours fresh gales from the NW Latter part more moderat all hands well on board Lat 24=00 Long 87 30
        </p><p>Tuesday April the 20th /52
          first part of these 24 hours blows heavy from the North west latter part the same Lat [unclear] Long m 24=35, 87 50
        </p><p>Wedensday April the 21st /52
          all these 24 hours is a gale of wind from The North west lying under double reeft Topsails Lat 23=52 Long 87 25
        </p><p>[noted in bottom margin]
          Vernon L o c k e Book
        </p>
        <PageNumber num={81} /><p>[Top of page is cut out; entry for April 22 is missing]
        </p><p>Friday April the 23rd /52
          all these 24 hours fresh gales from the south very heavy sea runing Lat 24=00, Long 88=00
        </p><p>Saterday April the 24th /52
          all these 24 hours fresh gales from The westward and clear weather Lat 26=20 Long 88=20
        </p><p>Sunday April the 25th /52
          first part of these 24 hours fresh gales from The South. Cloudy and raining Latter part blows heavy from the SE So Ends this 24 hours Lat 27 25 Long 87 48
        </p><p>Monday April the 26th /52
          all these 24 hours blows heavy from the SE the most part of the time lying two under Double reeft topsails Lat 27 20 Long 87 50
        </p><p>[noted in margin]
          At 8 oclock PM spoke the Brig Franklin of Provincetown
        </p><p>Tuesday April the 27th /52
          first part of these 24 hours blows heavy from the North West under close reeft topsails Latter part the same Lat 27 00 [Long] 87 40
        </p><p>Wedensday April the 28th /52
          all these 24 hours fine weather all hands imployed in ships duty Lat 27 46 Long 88=12
        </p><p>Thursday April the 29th /52
          first part of these 24 hours moderate latter part much the same so ends this 24 hours Lat 27 40 88 47
        </p><p>Friday April the 30th /52
          first part of these 24 hours pleasant weather middle part the same at 7 AM raised whales Lowered all
        </p>
        <PageNumber num={82} /><p>three boats and chased Larb'd and Waist Bots fastend Larb'd Boats Irons  [Then] Waist Boat kiled and wafed their whale. Larboad and Waist boats chased to Leward Waist boat struck and kiled another whale the Larboard Boat in company at the time and the vessel not in sight when the whale turned up. the Mate kept on in chase of the school. the Waist boat took their whale in tow got the [run] of the vessel and got allongside the next Morning at sunrise secured the Whale and Made sail to the southward in chase of the Mate – Wind very light and most of the time a thick fog these remark includes 48 hours No observation
        </p><p>Monday May the 3rd 1852
          These 24 hours has light bafling winds and thick fogy weather throughout Cut in our whales and got the Works going Larboard boat still away from the vessel No obs'n
        </p><p>Tuesday May the 4th
          These 24 hours has light winds and fine weather throughout Employed trying out at 10 AM raised whales at 11- lowered So Ends these 24 hours. No news of the Mate.
        </p><p>Wednesday May the 5th 1852
          Comences with light winds and fine weather Boats in chase of whales the waste boat struck and killed a whale found that he would sink. set the wafe for the Starboard boat both boats held him up and got him allongside and segured him
        </p>
        <PageNumber num={83} /><p>Brig Gem of Beverly
        </p><p>at 12 Midnight finished trying the first whales Latter part of these 24 hours blowing a gale from the Eastward No tidings of the Mate – the Whale allongside the brig lys like a duck No Observation
        </p><p>Thursday the 6th 1852
          These 24 hours commences with strong breezes from the Eastward and heavy sea on got the body of the whale rounded in. droped the head astern strong breezes and heavy sea during the night at day light comenced trying found the head good for nothing cut it away Ends more Moderate Lat 28-29 88-30
        </p><p>Friday the 7- 1852
          These 24 hours commences with strong breezes and rough sea at sundown finished boiling Moderate through the night at daylight commenced stowing down Ends fine Lat 28-10 Long 87-54
        </p><p>Saturday the 8- 1852
          These 24 hours has light winds and fine weather throughout (stowed down 40 bbls) Spoke the Barque Margereta of Sallem Cpt Prior Lat by obs 29–30  Long 88-10 No intelligence from the Mates boat
        </p><p>Sunday the 9- 1852
          Commences with light winds and fine weather in company with the barque. Midle and Latter parts the same Lat 27-33 Long 88-18
        </p><p>Monday the 10 1852
          Has light winds and fine weather heard from the Brig Ocean [unclear] Lat 27-50 Long 88-21
        </p><p>Tuesday the 11th 1850 [sic]
          Has light winds and fine weather through several sail in sight Lat 28-22 Long 88-16
        </p>
        <PageNumber num={84} /><p>Brig Gem of Beverly C Coock Master
        </p><p>[noted in margin] May 1852
        </p><p>Wednesday the 12-
          These 24 hours has light winds and fine weather, stearing for the Belise to gain information of the Mate Lat by obs 28-34  - Long by Chr 88-00
        </p><p>Thursday the 13-
          These 24 has light airs and calms throughtout – at sunset boarded the Barque Abey Lawrence of and from Baltimore for New Oreans 10 days out – at 5 AM spoke the Ship Shirley of Boston from New Orleans for Liverpool Reports M Lock picked up on the 3rd and carried to New Orleans headed her to the Eastward on soundings the whole of this 24 hours Lat by Obs 28-40 - Long by Chro 87-30
        </p><p>Friday the 14th
          First part of these 24 hours light winds and fine weather 18 sail of vessels in sight most of them for Europe  Midle and Latter parts the same got off soundings about Midnight Lat by Obs 28-40  Long by Chrn 87-07
        </p><p>Sunday the 16th
          Has light winds and fine weather throughtout several sail in sight Lat by Obs 28-10 -  Long by Chr 87-03
        </p><p>[noted in margin] found a strong current to the NE
        </p><p>Monday the 17
          Has light winds and fine weather throughout. spoke the British Barque John Walsh of and for London from New Orleans Lat by Obs  27-10 - Long by Chr 87-13
        </p><p>Tuesday the 18th
          Has light airs and fine weather throughout  spoke schooner A Nickerson two months out clean the ports schooner Harriet Neal Rider 5 bbs sperm Lat by Obs 27-14  - Long  by Chr 88-35
        </p><p>Wednesday the 19th
          Has light winds and fine Weather throughout all hands employed on ships duty Lat 27  20 Long 88  50
        </p>
        <PageNumber num={85} /><p>May 1852  Brig Gem =  C Cooke Master
        </p><p>Thursday the 20th
          Has light airs and calms throughout Lat by Obs 28-00  Long 88-55
        </p><p>Friday the 21st
          Has light winds and fine weather throughout Lat by Obs 27-01  Long by Chr  88-50
        </p><p>Saturday the 22n
          Has fine breezes and cloudy weather throughout Lat by Obs 25-30  Long 89-00
        </p><p>Sunday the 23r
          Has light winds and cloudy weather throug't Lat by Obs 24-08  Long 88-39
        </p><p>Monday the 24th
          Has fine breezes and pleasent weather throug't Lat by Obs 24-12  Long by Chr 89-16
        </p><p>Tuesday the 25th
          Has moderate breezes and fine weather throughout Lat by Obs 25-23  - Long by Chr 88-24
        </p><p>Wednesday the 26th
          Has fresh breezes and fine weather through't Lat by Obs 26-25 Long by Chr 87-32
        </p><p>Thursday the 27th
          Has moderate breezes and fine through't several sail in sight Lat by Obs 27-54  Long by Chr 88-18
        </p><p>Friday the 28th
          Comences with moderate breezes and fine Latter part cloudy Spoke brig Mexico 21 months out 200 bls sperm No Observation
        </p><p>Saturday the 29th
          Has strong breezes and heavy squals throughout unde[r]  close reefed main top sail through the night at 11 AM set the close reefed fore topsail Lat by Obs 27 50
        </p><p>Sunday the 30th
          Commences with squaly thick weather Latter part more moderate Brig Mexico in sight No Observation
        </p>
        <PageNumber num={86} /><p>Whaling Brig Gem of Beverly
          June 1852
        </p><p>Mondy the 31st
          These 24 has bafling winds and squaly weather throughtout No Obs
        </p><p>Tuesday the 1st
          Has baffling winds and squaly weather throughout several sail in sight. Lat by Obs 26-37 Long by Chr 87-23
        </p><p>Wednesday the 2nd
          Has light breezes and squaly weather throughout Lat by Obs 27-16 Long by Chr 86-23
        </p><p>Thursday the 3rd
          first part squaly Latter part fine saw a large fin back Lat by Obs 26-25 Long by Chr 85-11
        </p><p>Friday the 4th
          Has light winds from the Southward and fine weather Spoke the Barque Nevada of and for Boston from Mobile his long at noon was 84-00 reports seeing a large sperm whale the day previous. 12 sail in sight. carrying sail out of the bay Lat by Obs 26-30 Long by Chr 83-59
        </p><p>Saturday the 5th
          Has light winds and fine weather at 2 PM lowered for blackfish got none
        </p><p>Sunday the 6th
          [noted in margin] Sunday the 6 civil acct discovered (by the bearings of the tortugas lighhouse) that there was an error in the Chrono'r of 1 min 42 sec for which proper allowances will in future be made
        </p><p>Latter part squaly at 12 Noon Tortugas light house bore NE by N Dist by Estimation 15 Miles Several sail in sight Lat by Obs  24-35
        </p><p>Monday the 7th
          These 24 hours commences with Moderate  breezes from SSE and very fine weather
          Midle part fresh breezes and squaly weather At 9 AM spoke the ship Bennington of and for
          (Boston J Young Master) M'r. Lock being on board as passenger came on Board and resumed his duty as mate
        </p><p>Tuesday the 8th
          First part of these 24 hours pleasant weather latter part the same running down by Key West so ends this 24 hours
        </p>
        <PageNumber num={87} /><p>[penned in top margin] Colman Cooke    Mary Ann [unclear] Whaling
        </p><p>Colman Cooke Master
        </p><p>Wedensday the 9th /52
          first part of these 24 hours fresh gales from the SW carrying out by [unclear] banks So Ends this 24 hours
          [penned in right margin] balanced
        </p><p>Thursday the 10th /52
          All these 24 hours moderate Lat 28=30  78=77
        </p><p>Friday the 11th
          first part of these 24 hours moderate winds S Est.  Latter part squally and wind changeable Lat 29=29   Lon 76=00
        </p><p>Saterday the 12
          first part of these 24 hours squally wind from the eastward at 4 oclock A M double reeft our fore and maine topsail Latter blows hevy from the East ward so ends
        </p><p>Sunday the 13th /52
          first part of these 24 hours blows heavy from the Eastward latter part about the same but more clear so ends these 24 hours
        </p><p>Monday the 14th /52
          first part of these 24 hours blows a steady gale of wind from the Eastward middle part very rainy with freqent sqals Latter part the same
        </p><p>Tuesday the 15th
          first part of these 24 hou[rs] blows heavy from the SW latter part more moderate Lat 29=25  Long 75 69
        </p><p>Wedensday the 16
          very moderate the whole 24 hours and cloudy no observation
        </p>
        <PageNumber num={88} /><p>Whaling Brig Gem of Bev
        </p><p>Thursday the 17
          all the 24 hours moderate very cloudy no obser
        </p><p>Friday the 18
          first part of these 24 very moderate Latter part breses from the SW Lat 30 50 Long 74  50
        </p><p>Saterday the 19th
          first part of these 24 hours pleasant Breses from the South west latter part the same but wind freshengs Lat 31=10  73=30
        </p><p>[noted in margin] At 4 Am spoke the whaling sch Walter K of Provincton  Clean
        </p><p>Sunday the 20
          commences with rain squally weathr Latter the same Lat 32=59   Long 70=5
        </p><p>Monday the 21st
          commences with very squally weather midle part the same  no obs
        </p><p>Tuesday the 22d
          commences with a gale wind from the eastward latter part blows heavy from the SE Lat 33=00 Long 69 00
        </p><p>[noted in margin] Good fluke don't Deceive me
          [in margin - pen and ink drawing of whale flukes being followed by a rowboat]
          [noted in margin] At 2 oclock AM saw a school of whale lowered our boats in chase but did not get anything on account of the whal being [galsed]
        </p><p>Wedensday the 23d
          first part of these 24 hours blows heavy from the SE running to the eastward for the purpose of making the western islands no ob
        </p><p>Thursday the 24th
          first part of these 24 Hours fres gales from the SE still making our course easterly latter part more moderate with the wind south  Lat 34=17 Long 59 = 19
        </p>
        <PageNumber num={89} /><p>Coleman Cook Master
        </p><p>Friday the 25th
          first part of these 24 hours Blows heavy from the SE making our course to the eastward for the purpose of making the Western islands latter the same Lat 34=30 Long 59 02
        </p><p>Saturday the 26th
          first part of these 24 hours has fresh gales from the SE cloudy with raine Latter part the same Lat no observation
        </p><p>Sunday the 27th
          first part of these 24 hours fresh breses from the SE Latter part mu[ch] the same Lat 34-35  )  57=20
        </p><p>Monday the 28th
          comences with fine weather wind from the SW Latter part the same Lat 34=39 ( 55 2
        </p><p>Tuesday the 29th
          commences with fine weather winds south west Latter part the same Lat 34=40 54 20
        </p><p>Wedensday the 30th of June
          commences with fine weather Latter part the same Lat 34=41 52 40
        </p><p>Thursday the 1st of July 1852
          blows heavy from the SW Lat 34 50 ( 48 47
        </p><p>Friday the 2d
          commences with fine weather moderat breases from the south west Latter part the same at 4 oclock AM saw a ship standing Southward Lat 35=00 Long 47=50
        </p><p>Saturday the 3d
          commences with fine weather Latter part Ends the same Lat 35=11  Long 46=26
        </p><p>at [unclear] Lat 35=38   Long  44=35
        </p><p>[noted in margin] at 9 oclock PM saw sevral sperm whale but so squally and cloudy we could not see them again
        </p>
        <PageNumber num={90} /><p>Sunday the 4th
          commences with fine weather with the w from the North east Latter part the wind from SSE and fine clear weather Lat 35=03  Long 44 30
        </p><p>Monday the 5th
          commences with fine weather wind to the south west latter part more cloudy but pleasant Lat 35=33  Long 43=03
        </p><p>Tuesday the 6th
          comences with fine weather with the wind to the SW all hands well on board the latter part the the same Lat 36=07 Long 42=20
        </p><p>Wedensday the 7th
          commencs withe fine weathe at 3 oclock A.M. saw a barke standing &amp; bearing north east at non Lat 36=50 39=[21]
        </p><p>Thursday the 8th
          commences with fine weather Latter part the same Latt 38=05 Long 35=30
        </p><p>Friday the 9th
          commences with fine weather and pleasant gales Latter part the same. All hands imployed in looking out for whale Lat 38=32 Long 32=31
        </p><p>Saturday the 10th
          commences with  fine weather with the wind to the Southwest Latter part the same Lat 38=33  Long 30=00
        </p><p>Sunday the 11th
          commences with fine pleasant breases from the South East at two oclock AM rose Cape Pico [Ilha do Pico: Pico Island, Central Azores] bearing east from us Dist 12 miles Latter part lying off fiyal [Ilha do Faial: Faial Island, Central Azores - in English also spelled Fayal]
        </p><p>Monday the 12th
          Commences cloudy with raine at 11 PM came to anchor in fayal harbor ends with fine weather
        </p><p>Tuesday the 13th
          commences with fine weather Latter part the same Ends this 24 hours / Lying in fayal harbour so
        </p>
        <PageNumber num={91} /><p>Wedensday the 14th
          commences with fine weather with the wind from the South east ends the same all hands on shore on liberty
        </p><p>Thursday the 15th
          commences with fine weathe with the wind from the south west Latter part the same
        </p><p>Friday the 16th
          commences with fine weather and fresh gales from the South west at 2 oclock AM got under weigh for sea at 8 oclock PM Lost sight of Cape Pico whitch bore ENE from us Latte part continues fine
        </p><p>Saturday the 17th
          commences with fine clear weather wind WSW Latter part the same No Obs
        </p><p>Sunday the 18th
          commences with fine clear weather with the wind from the south west at 1 oclock AM saw a school of whale bound to the south west Latter part moderate Lat 37=43  Long 31=00  No Obs [sic]
        </p><p>Monday the 19th
          first part commences with fine weather wind from the Northe east Latter part moderate at 9 oclock AM saw a school of grampuses Lat 37=40 31=00
        </p><p>Tuesday the 20th
          commences with clowdy weather and blows heavey from the North West Latter part clowdy and rainy at 8 oclock AM saw a large number blackfish Lowered our boats but did not get any of them so end these 24 hours Lat 39=10 31=09
        </p>
        <PageNumber num={92} /><p>Wednesday the 21st
          [penned in margin] July
          commences with fine weather and wind to the North east this after noon saw several schools of grampusy middle part moderate fine weather Latter part fine with the wind from the North East Lat 31=33 Long 37=30
        </p><p>Thursday the 22d
          [penned in margin] July
          commences with fine weather wind from the North east Latter part rainey and blowing heavy from the South west Lat 37=20 Long 33=30
        </p><p>Friday the 23d
          [penned in margin] July
          first part clowd all the first part of these 24 hours employed in mending sails middle part clowdy Latter part maderate all hands imployed in ships duty so ends this 24 hours Lat 38=30  Long 34=27
        </p><p>Saturday the 24th
          [penned in margin] July
          commences with fine weather wind from the westward Latter part the same but cloudy Lt 39=20  Long 3[3]= 55
        </p><p>Sunday the 25th
          [penned in margin] July
          commences with fine weather all hands imployed in ships duty Latter fine clear weather with the wind from North East so ends these 24 hours Lat 39=30
        </p><p>Monday the 26th
          [penned in margin] July
          commences with fine weather and light winds from the North west Lat 39=30 Long 33=30
        </p><p>Tuesday the 27th
          [penned in margin] July
          commences with fine weather but cloudy Latter part moderate Lat 39  20 Long 31 25
        </p><p>Wednesday the 28th
          [penned in margin] July
          commences with stormy weather wind from the North west Middle part stormy wind cants  to the eastward Latter part rainy and blows heavy from the east south east Lat 39=25 Long 33=27
        </p><p>[penned in margin] July
          [unclear] commences next leaf
        </p>
        <PageNumber num={93} /><p>Thursday July the 29th
          [penned in margin] July
          commences with stormy weather and plenty of raine [unclear] Latter part stormy with the wind to the North east [unclear]
        </p><p>Friday the 30th
          [penned in margin] July
          commences with fine weather all ends the same Lat 39 40 Long 32=38
        </p><p>Saturday the 30 first
          [penned in margin] July
          commences with fine and moderate weather Latter part the same with raine Lat 39=45 Long 32=50
        </p><p>Sunday the 1st
          [penned in margin] August
          commences moderate and cloudy with the wind from the North east Latter part very moderate the brig standing to the west ward Lat 39=35 Long 32=59
        </p><p>Monday the 2nd
          [penned in margin] August
          commences with fine pleasant weather middle part and latter the same with the wind from the North East Lat 38=14 Long 35=17
        </p><p>Tuesday the 3d
          [penned in margin] August
          first part of these 24 hours cloudy at 4 oclock AM Lowered our boats for black fish and got one Latter part moderate weather wind from the eastward
        </p><p>Wednesday the 4th
          [penned in margin] August
          commences with fine weather wind from the North east Latter part fine and pleasant Lat 37=33 Long 36=14
        </p><p>Thursday the 5th
          [penned in margin] August
          commences with fine weather and wind from the North East Latter part very pleasant Lat 36=40 Long 38=33
        </p><p>Friday the 6th
          [penned in margin] August
          commences fine weather middle part and latter part very fine all hands imployed in ships duty Lat 36=8 Long 38=49
        </p>
        <PageNumber num={94} /><p>Saturday the 7th
          [penned in margin] August
          commences with fine clear weathe wind from the west ward Latter part the same all hands well on board Lat 35=51 Long 42=00
        </p><p>Sunday the 8th
          [penned in margin] August
          first part of these 24 hours moderate, middle part Light winds from the North and westward at 7 oclock AM Lowered the Larboard and waist boat fastned and killed one to each boat the Starboard boat Lowered and took charge of the whale while the Larboard and waist boat kept in chase of the whale So Ends these 24 hours Lat 35=40 Long 42=25
        </p><p>[several small drawings penned in margin]
        </p><p>Monday the 9th
          [penned in margin] August
          commences with fine weather and the wind from the North East Latter part very fine weather all hands imployed in trying out oile Lat 35=28 Long 42 40
        </p><p>Tuesday the 10th
          [penned in margin] August
          commences with fine weather Latter part the same At 8 oclock AM finished trying out oile No obs this day
        </p><p>Wednesday the 11th
          commences with fine weathe middle part cloudy at 11 oclock A.M. finished stowing the oile thirty barrels in all Lat 35=30 Long 42=04
        </p><p>Thursday the 12th
          commences with fine weathe and light winds from the North west Ends with fresh breses from the westward At 8 PM lowered for blackfish but did not get any Several sail in sight standing to the South Eastward Lat 35=35 Long 42=10
        </p><p>Friday the 13th
          [penned in margin] August
          commences with fine weathe  Latter part commences to breese from the southwest Lat 35=40 Long 42=20
        </p><p>Saturday the 14th
          commences with [unclear] cloudy and blows heavy from the [SW]
        </p>
        <PageNumber num={95} /><p>[noted in upper right corner] 456788 1868
        </p><p>Sunday the 15th
          first part of these 24 hours fresh gales from the South west the brig is under Double reeft topsails Lat 35 20 Long 42=35
        </p><p>August Monday the 16th
          commences to moderate with the wind from the North west Latter part the sea runs very high and very moderate  Lat 35=25  Lg 42=40
        </p><p>Tuesday the 17th
          first part of these 24 hours blows heavy from the NW middle part the same Latter cloudy Lat 35=30 Long 42  20
        </p><p>Wednesday the 18th
          first part of these 24 hours light winds form the North west but very squaly and changeable no obs this day
        </p><p>Thursday the 19th
          commences with squaly weather  wind from the NE Lat'r part the same No obs
        </p><p>[noted in margin]
          thursday lowered for killers Larboard boat struck a very large one he sounded the line snarld capsised the boat but No danmage done
        </p><p>Friday the 20th
          all all these 24 hours a gale of wind from the South East under close reeft top[sails]
        </p><p>Saturday the 21st
          commences with fine clear weathe wind from the North west all hands imployed in setting [unclear] riging Lat 36=05 Long 40=26
        </p><p>Sunday the 22d
          first part of these 24 hours commences with fine clear weather wind from the North East Latter part much the same Lat 36=00 Long 40=20
        </p><p>[in margin, ink drawing of whale]
        </p><p>Monday the 23d
          commences with fine clear weather, the wind from the SE middle part moderate and clear weather Latter part the same Lat 36=20 Long 40=00
        </p><p>[noted in margin] August Monday the 22d 11 oclock AM saw a large school of whale the capt came on deck and wore ship to stand direct from them for fear we should get one of them
        </p><p>Tuesday the 24th
          commences with fine weather Latter part the same No Obs
        </p>
        <PageNumber num={96} /><p>August the 25th
          first part of these 24 hours fresh gales from the NE middle part the same Latter part more moderate Lat 35=00 Long 41=00
        </p><p>Thursday the 26th
          commences with fine weather middle part the same Latter part moderate the wind from the North east all hands imployed in ships duty so ends these 24 hours No Obs
        </p><p>Friday the 27th
          commences with fine weather Later part the same  34=00  40=51
        </p><p>Saturday the 28th
          first part of these 24 hours fresh gales from the SW all hands imployed in ships duty Lat 34=54  Long 42  30
        </p><p>Sunday the 29th
          first part of these 24 hours fresh gales from the NE Latter part the same Lat 35=40 44=40
        </p><p>Monday the 30th
          commences with fine clear weather, wind from the Eastward Lat 36=40 Long 44 30
        </p><p>Tuesday the 31st
          commences with fine clear weather wind from the North east  middle part  calm 36=48  Long 44=30
        </p><p>September the 1st Wednesday
          commences with fine weather wind from the North East middle part blows heavy from the North East Latter part the same, all hands well on board, Lat 36=46  Long 43=12
        </p><p><br />
          September the 2nd Thursday
          these 24 hours commences with cloudy weather and blowing heavy from the NE Latter part the wind is from the Eastward Rainy and cloudy weather Lat 38=30 Long 42=00
        </p>
        <PageNumber num={97} /><p>September the 3d Friday
          commences with stormy weather the wind from the North East blowing a gale middle part the same [unclear] a very high sea running Latter part the same Lat by obs 38=08   No obn Long 40=00
        </p><p>September the 4th Saturday
          commences with very high winds from the North West and a very heavy sea, the Brig running to the Eastward under close reeft topsails all these 24 hours Lat 39=35 Long by dr 38=00
        </p><p>September the 5th Sunday
          commences with with stormy weather wind from the north east middle part rainy and very high sea running Latter part is finer weather, and more moderate Lat 38=48  Long 34=40
        </p><p>September the 6th Monday
          commen with cloudy weather blowing heavy from the North east middle part more moderate Latter part moderate the wind from the North east Lat 38=40 Long 32=10
        </p><p>September the 7th Tuesday
          first of these 24 hours commences with fowl weather and Light winds from the east Latter part the same Lat 38=51 Long 32=59
        </p><p>September the 8th Wednesday
          first part cloudy with raine Latter part nearly the same Lat 38=45  Long 30=
        </p><p>September the 9th Thursday
          first part commences with fine clear weather wind from the north east Latter part the same, fay all [Ilha do Faial: Faial Island, Central Azores - in English also spelled Fayal] in sight, Laying off and on for repairs on the brig Capt on shore
        </p><p>September the 10th Friday
          commences with fine clear weather the brig lying off and on fay all harbor bearing NW
        </p><p>Sept the 11th
          commences with fine clear weather wind from the NE mored ship in fayall harbor Lying to anchor
        </p>
        <PageNumber num={98} /><p>Sept the 12th
          commences with fine clear weather wind from the north east brig lying at anchor in fayall harbour at 8 oclock PM got under way and stood out to sea Latter part moderate
        </p><p>Sept 13th Monday
          commences with fine clear weather wind from the north east wee are cruising of[f] the isle of Saint George [Sao Jorge, Azores; Saint George, Central Azores] these 24 hours
        </p><p>Sept 14th Tuesday
          commences with cloudy weather middle and latter part the same Latter part of these 24 hours we lay to the south East of the isle of tasarah  [Terceira Island, Azores] cruising for whale
        </p><p>Sept 15th Wednesday
          commences with fine weather but cloudy and threatening raine Latter part the same cruising of[f] tasarah
        </p><p>Sept 16th Thursday
          the first part of these 24 hours blows heavy from the north west Latter part the same no obs [unclear]
        </p><p>Sept 17th Friday
          commences with fine weather wind from the SW middle part cloudy and blowing heavy from the south west so ends these 24 hours
        </p><p>Sept 18th Saturday
          first part of these 24 hours fresh Gales from the North East middle part more moderate with the wind from the south west Latter part the same the isle of saint mikles  [Sao Miguel: Saint Michaels, Azores] bearing ENE Dist 2 miles
        </p><p>Sept 19th Sunday
          commences with fine weather wind from the north east Lying o[f]f the southside of saint mikles  so ends these 24 hours
        </p><p>Sept 20th Monday
          commences with fine weather wind from the North East Latter part blows heavy from the Eastward Lat 36=08 Long 24=20
        </p>
        <PageNumber num={99} /><p>[penned note in top margin] hand Hath withered
          [penned note between entries] Insahate death thy blighting
        </p><p>Septm the 21st Monday
          commences with a gale of wind from the Eastward the Brig lying under close reeft topsails Middle and Latter part mutch the same Lat 35=30, 25  10
        </p><p>Septem the 22nd [Tuesday]
          first part moderate with the wind from the Southwest middle and latter part clowdy and raining So ends the 24 hours Lat 35=20 Long 25=20
        </p><p>September the 23d [Thursday]
          commences with fine clear weather wind from the north East Latter part cloudy with raine Lat 35=10 Long 25=05
        </p><p>Sept 24th Friday
          first part of these 24 hours light winds from the south west middle part the same with frequent squales of raine  Latter part the same Lat 33=33  Long 21=48
        </p><p>Sept the 25th Saturday
          commences with fine clear weather with the wind from the North East middle part much the same Latter part calm Lat 33=00 24=20
        </p><p>[penned note between entries] 24 hours
        </p><p>Septe the 26th Sunday
          first part of these 24 hours, calm middle part moderate with the wind from the Eastward Latter part the same  Lat 33=26 Long 24 50
        </p><p>Septe the 27th Monday
          first part of these 24 hours moderate with the wind from the westward Latter part the same Lat 33=40  Long 21=50
        </p><p>Septe the 28th Tuesday
          first part of these 24 hours [is] fine Middle part the same Latter part heavy winds from the south west &amp; heavy sea running, 32=47 Long 20=40
        </p><p>Sept the 29th Wednesday
          Commences with cloudy weather raining – 11 oclock PM saw a large school of killers the capt would not lower for them because he had a [unclear] so ends these 24 hours
        </p><p>Septr the 30th
          Commences with rainy and windy weathr Midle part the same with the wind from the South west Latter part the same Lat 32 50 Long 20=25
        </p>
        <PageNumber num={100} /><p>October the 1st Friday
          commences with windy weather with a heavy sea running form the south west Middle part clowdy with the wind from the north west Latter part the same Lat 32=00 Long 20=45
        </p><p>October the 2nd Saturday
          commences with clowdy and rainy weather Middle part the same
        </p><p>October the 3d Sunday
          commences with fine moderate weather wind from the north east thare is a very high sea runing from the north east middle part the same Latter part moderate wind from the southwest Lat 33=14 Long 20=05
        </p><p>October the 4th Monday
          commences with fine clear weather midle part the same at 6 Oclock PM rose a school of whale Lowered all three boats in chase of them but could not strike one, on account of the whale being gallied capt went on board Larboard and waist boat picked out the best of their crew and both maits went in one boat, they Persued the whale until 12 Oclock P.M. No Obs this day by Dr 33=04 18 50
        </p><p>Oct  the 5th Tuesday
          first part of these 24 hours is fine clear weather, the wnd from the South West, at one oclock A.M we fastned to one of the whale she ran and sounded so bad that wee didn’t kill her until 4 oclock AM when we went alongside with her and made her fast at 5½ of the clock PM wee commensed cutting in unitl 12 oclock, so ends these 24 hours
        </p><p>Oct the  6th Wednesday
          commences with calm and clear weathe finished cutting in the whale at five oclock A.M and set the works going Latter part of these 24 hours moderate Lat 32=50 Long 18 [00]
        </p>
        <PageNumber num={101} /><p>Oct the 7th Thursday
          first part of these 24 hours moderate Latter part the same trying out oile Lat 33=28 Long 18=20
        </p><p>Oct the 8th Friday
          commences with fine clear weather Midle part breses from the North west Latter part blows heavy Lat 33=00 Long 17=50
        </p><p>Oct the 9th Saturday
          commences with clowdy and windy weat[her] first part of these 24 hours, finished boiling the whale midle part we stowed dow sixty bb Latter part imployed in cleaning ship Lat 33=20 Long 17=20
        </p><p>Oct 10th Sunday
          first part of these 24 hours blows heavy from the north west at 1 oclock A.M sighted Madaria bearing SE by compass Latter part lying under Madarah
        </p><p>Oct the 11th Monday
          first part of these 24 hours fine weather and fresh breses from the North West midle part the same [while] lying of[f] the isle of Madaria
        </p><p>Oct 12th Tuesday
          commences with fine weather wind from the North west the Brig Gem is loafing round the isle of Medara among the fishing boats
        </p><p>Oct 13th  Wednesday
          first part of these 24 hours is fine weather the wind is from the North west the brig gem is loafing round the isle of Medara So ends these 24 hours
        </p><p>Oct 14 Thursday
          commences with squaly weather wind from the North West midle part Blows heavy Latter part the same Lying under Medara
        </p><p>Oct 15th Friday
          first part of these 24 hours fresh gales from the North West Midle and Latter part the same while Lying of[f] the Grand Canary
        </p><p>Oct 16th Saturday
          commences with rainy weather middle and latter part the same lying of[f] the Canary
        </p>
        <PageNumber num={102} /><p>Oct 17th
          first part of these 24 hours blows heavy from the North East with raine, midle part the same Latter more moderate w NE cruising for whale of[f] the south side of the grand canary so ends these 24 hours
        </p><p>Oct 18th Monday
          commences with cloudy weather the wind is from the North east midle and Latter part blows heavy with raine  so ends [unclear] 24 hrs
        </p><p>Oct 19th Tuesday
          first part of these 24 hours moderate the wind is from the North east at 4 oclock AM rose whale of[f] the peak of Tenareef lowered the two boats and got one ten bare whale Later part cut him in So ends these 24 hours
        </p><p>Oct 20th Wednesday
          commences with fine clear weather wind from the NE we are cruising for whale of[f] the sw side of the grand canary nothing more remarkable these 24 hours
        </p><p>Oct 21st Thursday
          first part of these 24 hours calm midle and latter part the same cruising for whale
        </p><p>Oct 22nd Friday
          commences with calm and clear wether midle and latter part the same at 4 oclock PM got the works going and tryed out the 10 bar whale at 8 oclock PM rose a school of large whale the waist boat went up along side of one the Boatstearer hove at her but made a stram of it, we chased the galyed whale all day but could not get in another chance  so ends the 24 hours Misery
        </p><p>Oct 23rd Saturday
          commences with moderate weather wind is light from the North East midle and latter part the same stowed down the oile which was 10 barels we have now but 140 barls, all hands imployed in cleaning ship so ends thes 24 hrs
        </p><p>Oct 24th Sunday
          commences with fine clear weather but blows fresh from the North East midle part the same Latter part the wind increases [f ea. of E] [unclear] [unclear] under close reaft top-sails of[f] the th south side tanareef
        </p>
        <PageNumber num={103} /><p>Oct 25th Monday
          commences with fine clear weather and the wind from the North East lowered our boats at 8 PM for blackfish but did not get any of them -  these 24 hours ends with a gale of wind from North east
        </p><p>Oct 26th Tuesday
          commences with heavy breses from the NE at 8 oclock PM spoke the roschild barque of Boston small master [Rothschild of Boston (bark); Master James Small] with 80 barls fresh oile, latter part more moderate
        </p><p>Oct 27th Wednesday
          first part of these 24 hours fresh Gales from the North east Midle part the same Latter part the wind is westerly and very light while the Brig is lying of[f] tenereef   so ends the 24
        </p><p>Oct 28th Thursday
          commences with fine clear weather the wind from th north east midle and latte part the same while we ly of[f] the Peak of tenereef
        </p><p>Oct 29th Friday
          commences with fine clear weather but blows very heavy from the North East Midle and latter part the same
        </p><p>Oct 30th Saturday
          comences with fine weather th wind is light from the North East at 1 oclock AM bore of[f] for Saint Thomass Latter part the wind is light at 11 ock. cape of teneref bore E northeast 50 miles so ends the 24 h
        </p><p>Oct 31st Sunday
          commences with fine clear weather the wind is from the North east midle and latte part is fine weath Nothing remarkable to note  Lat 24=02  Long 18=58
        </p><p>Oct 22nd
          Nov 1st Monday
          first is moderate the wind from the Northeast midle and latter part the same Lat and Long by obs Lat 23=15 Long 21=20
        </p><p>Nov 2nd Tuesday
          commences with fine clear weather the wind is from the North East all hands imployed in ships duty Latter part sam sevral saile in sight standing to the Eastward Lat 21=15 Long 23=16 So Ends this page
        </p>
        <PageNumber num={104} /><p>Nov the 3rd
          Wednesday first part of these 24 hours blows heavy from the North east several saile in sight bound to the eastward Latter part moderate Lat 19=24 Long 25=40
        </p><p>Nov 4th
          Thursday commences with fine clear weather and the wind from the north east, is moderate midle and latter part is mutch the same all hands is well on board Lat 18=52 Long 28=06
        </p><p>Nov 5th Friday
          commences with fine clear weather and the wind is from the north east and moderate Nothing remarkable these 24 hours Lat 17=50 Long 2[9]=54
        </p><p>Nov 6th
          commences with fine clear weather the wind is from the south and eastward midle and latter part the same all hands well on board Lat 17=57 Long 32=10
        </p><p>Nov 7th Sunday
          commences with fine clear weather and the wind from the south East, very moderate midle and latter part the same Lat 16=50 Long 32=40
        </p><p>November 8th Monday
          commences with fine clear weather the wind is from the north East Midle and Latter part is the same Lat 16=45 Long 34=50
        </p><p>Nov the 9th Tuesday
          commences with fine clear weather the wind is from the NE sevral saile in sight bound to the south west, so ends these 24 hours Lat 16=30 Long 37=04
        </p><p>Nover th 10th Wednesday
          commences with fine clear weather the wind is from the eastward Latter part has nothing remarkable to note all hands well on board  Lat 16=15  Long 39=45
        </p><p>Nover th 11th Thusrday
          first part of these 24 hours the wind is Light and from the Eastward nothing in sight. these 24 hours all hands well on board Lat 16=13 Long 41=[0]5
        </p>
        <PageNumber num={105} /><p>AD - - 1852
        </p><p>November th 12th Friday
          commences with fine clear weather and the wind from the North East a Large ship in sight bound to the south west midle and Latter part nothing is remarkable to note Lat 16=10  Long 44=20
        </p><p>Nove th 13th Saturday
          first part of these 24 hours is Light Light winds from the north and East middle and Latter part is the same all hands well on board Lat 16=10 Long 46=54
        </p><p>Nov th 14th Sunday
          first part of these 24 hours is clear weather, the wind is from the North East all hands imployed in ships duty so Ends these 24 hours Lat 16=12  Long 48=30
        </p><p>Nov 15th Monday
          first part of these 24 hours is moderate but clear weather middle and latter part the same All hands well on board Lat 15=52 Long 51=50
        </p><p>Nove th 16th
          first part of these 24 hours is fine clear weather the wind is from the NE middle and latter part the same all hands well on board Lat 15= [5]0  Long 54=30
        </p><p>Novem 17th Wednesday
          commences with fine clear weather the wind is from the N.E. very moderate midle and latte part the same all hands well Lat 15=48  Long 57=50
        </p><p>Nov 18th Thursday
          commences with fine clear weather with the wind from the N.E. middle and latter part the same all hands well on board Lat 15=43  Long 59=47
        </p><p>Nov 19th Friday
          commences with fine clear weather and the wind from the NE midle and latter part the same Lat 15 40 Long 60=54
        </p><p>Nov 20th Saturday
          commences with fine clear weather wind from the North East at noon made or saw the North side of Dominico bearing south dist 10 miles at 10 oclock PM came to anchor of[f] th North west side of Prince Reuperts Bay so ends the 24 hours
        </p>
        <PageNumber num={106} /><p>November th 21st Sunday
          commences with fine clear weather Nothing done on board this day all hands well on boar[d] so Ends this day
        </p><p>Nov 22nd Monday
          commences with clear weather all hands imployed in geting of watter at 2 oclock PM the capt and the cook had some words the cook being intoxicated would not obay the capt's orders when reqsted to, keep sivel, the capt rose his hand to the cook, when the cook cocked [caught] his hand and bit his thumb by that means the capt was, obliged to strike him to make him loose his hold at 4 oclock PM the cook went on shore Likewise the shipskeeper at 6 oclock so Ends this day
        </p><p>Nov 23d Tuesday
          commences with fine clear weather the wind is to the NE all hands imployed in geting of water at 2 oclock PM the capt was sumond to go on shore to attend court this day Ends with fine clear weather all hands well on board
        </p><p>Nov 24th Wednesday
          commences with fine clear weather with the wind from the NE this morning [we] cleared up our decks and all ready for sea the capt and all the starboard watch [unclear] on shore the Larboard watch all on ships Duty so Ends this day
        </p><p>Nov 25th Thursday
          commences with fine clear weather the wind is from the NE midle and Latter part the same at 4 oclock PM got under way Bound for Sainthomas so Ends this day
        </p><p>Nov 26th Friday
          commences with fine clear weather the wind is from the north east fir[st] Part we  are runing down the South side of the isles of guardelupe Latter part the same all hands well on board
        </p><p>Nov 27th Saturday
        </p>
        <PageNumber num={107} /><p>Novem th 27th
          first part of these 24 hours is fine clear weather with the wind from the north west the brig is running down the south side of the islands of the windward islands all hands well on board
        </p><p>Nov 28th Sunday
          commences with fine clear weather the wind is from the north east and moderate at 11 oclock PM we was of[f] the isle of Saint John
        </p><p>Nov the 29th Monday
          commences with fine clear weather the wind is from the north East and moderate at 1 oclock made the island of Saint Thomas bearing SW at 5 oclock came to anchor in the harbour of Saint Thomas so ends these 24 hours
        </p><p>Nov 30th Tuesday
          commences with fine clear weather the wind is from the North East all hands imployed in ships duty so ends
        </p><p>Novem 1st Wednesday
          commences with fine clear weather the wind is from the North East but moderate
        </p><p>Dec 2d Thursday
          commences fine clear weather the wind from the NE all hands on shor on Liberty
        </p><p>Dec 3d Friday
          commences with fine clear weather the wind is from the North East and pleasant at 11 oclock PM weid our anchor and stood out for sea so Ends these 24 hours all hands well on board
        </p><p>Dec 4th Saturday
          commences with fine clear weather the wind is from the North east and [unclear] Latter part fine all hands well on board so ends
        </p><p>Dec 5th Sunday
          commences with fine clear weather the wind from the NE midle and latter part the same all hands well on board so ends these 24
        </p><p>Dec 6th Monday
          commences with fine clear weather the wind is from the NE and cloudy midle and latter part the same we are on our passage to the isle of blanco Obs at noon Lat 13=09 Long 64=40
        </p>
        <PageNumber num={108} /><p>Dec the 7th Tuesday
          first part of these 24 hours clear weather the wind is from the NE all hands well on board midle and latter the same, whale birds very plentifull
        </p><p>Dec the 8th  Wednesday
          commences with fine clear weather with the wind from the NE while we are crursing for whale of[f] the isle of Blanco, midle and later part the same
        </p><p>Decm the 9th Thursday
          commences with fine clear weath and, the wind, is from the NE midle and latter part the same cruising for whale of[f] the isle of blanco all hands well on board so ends
        </p><p>Decem the 10th Friday
          commences with fine clear weather and the wind is from the North east crusing for whale of[f] the isle of blanco all hands well on board so ends these 24 h
        </p><p>Dec the 11th  Saturday
          commences with fine clear weather the wind is from the south east all hands employed in ships duty So Ends these 24 houres
        </p><p>Dec the 12th Sunday
          commences with fine clear weath and the wind is from the NE blowing heavy  all hands well on board
        </p><p>Dec the 13th Monday
          commences with weathe but blows heavy from the Northward one man taken sick with a fever this 24 hour we are lying to anchor under blanco
        </p><p>Dec 14th
          commences with fine clear weather the wind from Eastward, blows heavy so much so that we can not cruise more than 4 hours of this 24 hours Last part lying at anchor under blanco
        </p><p>Dec 15th
          first part of these moderate and fi[ne] weat[her] the wind is from the north ward  first part we are cruising, Lat part to anchor
        </p><p>Dec 16th
        </p>
        <PageNumber num={109} /><p>Dec 16th Thursday
          first of the 24 hours is fine clear weathe the wind is from the north east are cruising for whale of[f] the isle of blanco all hands well but one man latter part lying at anchor
        </p><p>Dec 17th Friday
          commences with fine clear weather and wind from the North ward midle part cruising Latter part to anchor under blanco all hands well on board but one man so ends these 24 hours
        </p><p>Dec 18th Saturday
          commences with fine weather middle and latte part rather windy and cloudy Lying to anchor of[f] Blanco so Ends these 24 hours
        </p><p>Dec 19th Sunday
          commences with cloudy and windy weather blowing heavy from the Northward Lying to anchor close to the isle of blanco all hands well on board but one man he is very sick with a fever
        </p><p>Dec 20th Monday
          commences with high winds from the north East midle and latter part the same
        </p><p>Dec 21st Tuesday
          commences with fine clear weathe the wind is from the east midle and latter part [much] the same while at anchor of[f] the isle of blanco one many very sick
        </p><p>Dec 22nd Wednesday
          commences with fine clear weath the wind is from the north east blowing very heavy while we are crussing for whale of[f] the isle of blanco for whale middle and latter part the same so ends these 24 hours
        </p><p>Dec 23rd Thursday
          commences with clear weather and the wind is from the north and east while we are lying under the lee of the isle of blanco setting up riging so ends these 24 hours
        </p><p>Dec 24th Friday
          commences with fine clear weath the wind is Easterly blowing heavy while we are crusing for whale of[f] the isl of blanco Latter part Lying to anchor setting up riging
        </p>
        <PageNumber num={110} /><p>Dec 25th Saturday
          first part of these 24 hours moderate wee are crussing for whale of[f] the isl of blanco Latter part Lying to anchor all hands imployed setting up riging
        </p><p>Dec 26 Sunday
          first part of these 24 hours pleasant but blows heavy from the eastward Lat part the same while lying to anchor of[f] the isle of Blanco
        </p><p>Dec 27th Monday
          commences with fine clear weather with the wind from the North East and pleasant midle and latter the same lying to anchor of[f] the isle of blanco
        </p><p>Dec 28th Tuesday
          commences with clear weather and the wind from the North East and pleasant midle and latter part the same lying of[f] the isle of blanco for bee birds went on shor and shot two of them so ends this 24
        </p><p>Dec 29th Wednesday
          commences with fine clear weather with the wind from the north east all hands imployed in fitting riging so ends these 24 hours
        </p><p>Dec 30 Thursday
          commences with fine clear weather and the wind from the north east first on shore Lat part runing down for the spanish maine
        </p><p>Dec 31st Friday
          commences with fine clear weather blowing heavy from the north east Lat part came to anchor of[f] the Bird islands
        </p><p>Jan 1st Saturday
          first part of these 24 hours blows heavy from the north ward midle and latte part the same
        </p><p>Jan 2nd Sunday
          commences with fine clear weath and the wind from the north east we have some raine Latter part fine but blows fresh from the north &amp; wee are lying to anchor of[f] the Bird islands
        </p>
        <PageNumber num={111} /><p>Jan 3rd Monday
          commences with fine clear weather the wind is from the north east blowing heavy midle and latter mor moderate crussing for whale of[f] the bird islands so ends these 24 hours
        </p><p>Jan 4th Tuesday
          first part fine weather wee are crussing of[f] the isle of bonare midle and latter part all hands well on board so ends these
        </p><p>Jan 5th Wednesday
          first part of these 24 fresh gales from the North East wee are cruising for whale of[f] [unclear] of bonare for sperm whale so ends these 24 hours
        </p><p>Jan 6th Thursday
          commences with fine clear weather and the wind from the north east midle and latte[r] the same cruising for whale of[f] the isle of bonare so ends the 24
        </p><p>Jan 7th Friday
          first moderate the wind is from the north and east ward  midle and latter part the same while wee are cruising for whale off the isle of bonare all hands well on board
        </p><p>Jan 8th Saturday
          commences with fine clear weather the wind is from the north east Latter part blows heavy the brig is lying to anchor againe of[f] the isle of bonare so ends these 24 hours all hands well on bord
        </p><p>Jan 9th Sunday
          commences with fine clear weather the wind is fro the north east while wee are lying to anchor under the isle [of] bonare island all hands well on board so ends these 24 hours
        </p><p>Jan 10th Monday
          commences with clear weather blows heavy from the North East latter part the sam while lying too of[f] bonare unde[r] Short saile
        </p><p>Jan 11th Tuesday
          with fine clear weather the wind from the north east while wee are beating to windward of bonare latter part blows heavy from the north and East so ends these 24 hours
        </p>
        <PageNumber num={112} /><p>Jan 12th Wednesday
          commences with fine clear weather the wind from the north and eastward saw several saile in sight wee are crussing of[f] to the south of bonare 20 miles latter fine weather all hands well on board
        </p><p>Jan 13th Thursday
          commences with fine clear weathe and the wind is from the north east saw several saile in sight midle and latter fine weather, all these 24 hours we are crussing for whale of[f] south of bonare 24 miles so ends - - -
        </p><p>Jan 14th Friday
          commences with clear weather the wind from the North East this day saw several hump back whale Latter part fine weather
        </p><p>Jan 15 Saturday
          commences with fine clear weather the wind is from the north east  at 7 oclock PM rose a large schoole of whale lowred our boats and fastned to two of them one ran out the boats line and we lost him the other we saved so ends this [illegible] [humbug]
        </p><p>Jan 16th Sunday
          commences with fine weather the wind is from the eastward we are to work cutting in th whale there is several saile in sight
        </p><p>Jan 17th Monday
          commences with fine clear weather the wind is from the north east first part part finished stowing down oile latter part crussing for whale of[f] the south side of bonare
        </p><p>Jan 18th Tuesday
          first part of these 24 hours blows heavy from the north east midle and latte part the same all hands well on board
        </p><p>Jan 19th Wednesday
          commences with fine clear weather the wind is from the north east midle and latter part the same crussing of[f] the isle of bonare for sperm whale
        </p>
        <PageNumber num={113} /><p>January 20th Thursdy
          commences with fine clear weather the wind is from the north east, latte part the same all hands well on board
        </p><p>Jan 21st Friday
          commences with fine clear weath the wind is form the north east midle and latte part the same crussing of[f] the south side of bonare
        </p><p>Jan 22nd Saturday
          commences with fine clear weathe and the wind is from the north east blowing heay wee are lying to anchor of[f] the bird islands all hand imployed in seting up riging
        </p><p>Jan 23rd  Sunday
          commences with fine weathe wee are lying to anchor of[f] the bird islands taking comfort midle and lattr part the same
        </p><p>Jan 24th Monday
          first part of these 24 hours is fine weathe, blows heavy from the Eastward midle and latter part the same wee are lying to anchor of[f] the isle of bonere all hands well on board so Ends the 24
        </p><p>Jan 25th Tuesday
          commences with fine clear weathr the wind is from the Eastward blowing very heavy wee are now lying to anchor of[f] the bird island taking comfort
        </p><p>Jan 26th Wednesday
          first part of these 24 hours commences with fine clear weathe moderate enough for cruising for whale while we are lying to anchor of[f] the isle of Birds all hands well on board so Ends these 24
        </p><p>Jan 27th Thursday
          first part of these 24 hours is fine weather the wind is from the eastward midle an latte part the same now lying to anchor of th westward bird isle
        </p><p>Jan 28th Friday
          commences with fine weath wind to the Eastward wee are anchored of[f] the bird island the ben franklin of beverly run fowl of us breaking one davy likewise thre standshins and railing amounting to the damage of one hundred dollars
        </p>
        <PageNumber num={114} /><p>Jan 29th Saturday
          first part of these 24 hours blows heavy from the eastward middle and latter part the same while wee are lying to anchor of[f] the isle of birds, wee have three company keepers the bark B franklin the barque Margrette and the schoner Walter B of Provincetown so Ends these 24 hours
        </p><p>Jan 30th Sunday
          first part of thse 24 hours fine weathr the wind is from the Eastward now lying to anchor under the lee of the bird islands
        </p><p>Jan 31st Monday
          all these 24 hours fine moderate weathr wind from the Eastward Latter part Cruising for whale of[f] the south west of the bird islands at 11 oclock PM saw a large school of blackfish – so ends these 24 hours
        </p><p>Feb 1st Tuesday
          commences with fine weather midle part the sam Latte part rainy all hands well on board so Ends these 24 hours
        </p><p>Feb 2nd Wednesday
          commences with fine weath the wind is from the north east several sails in sight wee are now cruising of the south side of bonare island twenty [illegible] miles Latte part the same so ends these 24 hours
        </p><p>Feb 3rd Thursday
          first part is fine weather the wind is from the eastward saw a school of blackfish but did not get any several saile in sight wee are now of the south side of bonare twenty miles dist all hands well on board.
        </p><p>Feb 4th Friday
          all these 24 hours lying to anchor under the isle of bonare, blowing heavy heavy from the eastward five vessals thear with us.
        </p>
        <PageNumber num={115} /><p>Feb 5th Saturday
          comences with fine weathr the wind is from the north Eastward while wee are lying of the isle of bonare to an anchor all hands well on board So ends these 24 hour
        </p><p>Feb 6th Sunday
          commences with fine weathr the wind is from the north East blowing heavy Latte part same all hands well on board. Ends these 24 hrs to anchor by the isle of banare
        </p><p>Feb 7th Monday
          first part is fine at 11PM Got under weigh and stood out to sea fo the Purpose of cruising for hale midle and lat part fine weath. at 8 oclock A.M rose a large  school of whale Lowered our boats and chased them 11 oclock when we [struck] one to larboard boat and saved her
        </p><p>Feb 8th Tuesday
          commences with clear weathr the wind from the South East Midle part chased black fish but did not get any Lat part fine weather all hands imployed in getting down oile under deks  So Ends these 24 hours
        </p><p>Feb 9th Wednesday
          all these 24 hours is fine weath the wind is from the north east ward nothing remarkable transpired worth noting except several saile in sight and the isle of bonare bearing North Dist 10 miles
        </p><p>Feb 10th Thursday
          commences with fine weather the wind is from the SE midle part the same Latter part blows heavy from the Eastward Lying to anchor of the isle of bonare
        </p><p>Feb 11th Friday
          commences with fine weath the brig Gem is cruising for whale of the isle of bonare south 20 miles all the latte part is fine  fresh gales from the East ward all hands well on board
        </p>
        <PageNumber num={116} /><p>Feb 12th Saturday
          first part of these 24 hours fine clear brses from the Eastward midle and latter part the same at 4 oclock P.M. bore away from the isle of bonare for the isle of Saint demingo So Ends these 24 hours
        </p><p>Feb 13th Sunday
          commences with fine weath wind from the Eastward runing from the isle of bonare down to the isle of Saint dmingo all hands well on board
        </p><p>Feb 14th Monday
          first part of these 24 hours blows heavy from the Eastward wee are half way from the isle of bonare to the isle of Saint domingu runing northerly, all hands well on board
        </p><p>Feb 15th Tuesday
          first part fine weather but blows heavy from the Eastward made the isle of Saint dimaingu 9 oclock A.M. ran down the south side of saint dimingo and anchored in San bay and lay thear until the 16th
        </p><p>Feb 16th Wednesday
          first part of these 24 hours is fine weather the wind is from the SE we are cruising for whale the midle and latter part of these 24 hours in sam bay
        </p><p>Feb 17th Thursday
          first part of these 24 hours moderate the wind is from the north East and bafling at 9 oclock A.M. saw a large school of whale lowred our two larboard boats in chase of them the two larboard boats fastned to one large whale Capt Cook lowred his boat and mated with anothr vessal while wee was killing the whale
        </p><p>Feb 18th Friday
          commences with fine weather commenced cutting in the whale capt cok ordred an old damaged chaine to be put on the whale to mak her fast the chain parted and wee lost half of her he gave two fifths of the whale to the 6th vessal which left us a small share
        </p>
        <PageNumber num={117} /><p>Feb 19th Saturday
          first part of these 24 hours moderate   the wind is from the Eastward all these 24 hours wee are imployed in trying out oile all hand well but one man, he is very ill, the capt of the gem, coleman cook, by name, struck John [Vetall], Seaman several times with a lance pole which, has left him entirely unfit for his duty this was done in the boat on the 17th of February last
        </p><p>Feb 20th Sunday
          commences with fine weathr with the wind from the north East midle and latter part is the same wee are cruising for whale in Sam bay that is 20 miles south of Jacamall Saint Dmingo all hands well except John [Vetarl] he is unable for to perform his duty  so ends these 24 hours
        </p><p>Feb 21st Monday
          first part of these 24 hours is fresh gales from Eastward  cruising for whale in Sam bay of Saint De midle and latte part the same finished stowing Down oile which was 23 barels to our share and 15 to the schoner fine weather [till] the end of these 24 hours
        </p><p>Feb 22nd Tuesday
          commences with fine weathr the wind blows heavy from the south west midle and latte part moderate with variable winds cruising for for whale in Sam bay so Ends these 24 hours
        </p><p>Feb 23rd Wednesday
          all these 24 hours moderate the wind is variable while wee are cruising for whale in Sam bay nothing remarkable to note
        </p><p>Feb 24th Thursday
          commences with fine weather the wind is from the north and eastward and variable midle and latte part the same while wee cruise for whale in sam bay
        </p><p>Feb 25th
          first part of these 24 hours fresh gales from the Eastward and rainy with frequent squals of wind from differant quarters in sam bay
        </p><p>Feb 26th [flourish]
        </p>
        <PageNumber num={118} /><p>Feb 26th Saturday
          commences with fine weather the wind is from the South East blowing fresh wee are yet in sam bay cruising for whale midle and latter part moderate all hands well on board so ends these twenty four hours
        </p><p>Feb 27th Sunday
          commences with fine weath the wind is from the north East wee are in sam bay cruising for whale  midle and latter part fine weathr the wind is from the north and Eastward and frequent showers all hands well on board
        </p><p>Feb 28th Monday
          commences with squaly weahtr the wind is from the south east wee are in sam bay yet looking for whale Latter part faire weathr
        </p><p>Feb 29th first of March Tuesday
          first part of these 24 hours moderate the wind is from the north East wee are cruising for whale in Sam bay midle and latter part fine weathr all hands well on board
        </p><p>March 2nd Wednesday
          first part of these 24 hours fresh gales from the Eastward wee are lying to anchor in sam bay all hands imployed in geting of wood and watter continues until the End of these 24 hours all hands well on board
        </p><p>March 3rd Thursday
          first part of these 24 hours blows heavy from the Eastward wee are lying to anchor in sam bay all hands on shore at liberty lat part the same
        </p><p>March 4th Friday
          all these 24 hours wee have the wind from the Eastward blowing heavy first Lying to anchor Latter part cruising for whale saw nothing all hands well on board
        </p><p>March 5th Saturday
          first part of these 24 hours fresh gales from the Eastward wee are curising for whale in sam bay, midle and lattr part is fine weath frequent squals from diferant quarters So Ends these 24 hours
        </p>
        <PageNumber num={119} /><p>March 6th Sunday
          first part is fine weather at 11 oclock P.M saw a large whale Lowered and saved her mating with the schoner Palmyrah of Nantucket Lat part cut her in and saved [her heart] for the schoner So Ends these 24 hours
        </p><p>March 7th  Monday
          commences with fine weather the wind is from the Eastward wee are cruising for whale of Sam bay and all hands imployed in saving oil from the whale last taken, all hands well on board the End of these 24 hours
        </p><p>March 8th Tuesday
          commences with fine weath th wind is from the Eastward wee are lying to anchor in sam bay trying out oile in company with the sch Palmyrah Latter part blows heavy from the Eastward  so ends these 24 hours
        </p><p>March 9th Wednesday
          commences with fine clear weath but blows heavy from the ESE wee are trying out oile latte part blows heavy from the Eastward finished trying out and stowed down so ends these 24 hours
        </p><p>March 10th Thursday
          commences with fine weathr, the wind is from the South East blowing fresh [illegible] all hands on shore to wash of the oile from the hides likewise to get some konks for dinner latte part to anchor as useual
        </p><p>March 11th Friday
          commences with fine weath the wind is from the Eastward blowing heavy wee are cruising for whale in sam bay all hands well on board  later part fine weath several saile in sight
        </p><p>March 12th Saturday
          commences with fine weath but rather windy we are lying to anchor all these 24 hours to fit and repair riging Lat part saw several hump back whale lowred our boats in chas of them but did not get any of them
        </p>
        <PageNumber num={120} /><p>March 13th Sunday
          first part of these 24 hours is fine weather the wind is from the South east blowing heavy saw several vessals standing to the north ward wee are cruising for whale but cant find them Latter part lying too under reef topsail
        </p><p>March 14th Monday
          first part is fine weather midle and latter part the same cruising with the Samuel cook of Provincetown likewise the walter k of Provincetown
        </p><p>March 15th Tuesday
          first part is fine weather the wind is from the East ward blowing fresh all these 24 hours wee are in company with several Provincetown vessals cruising for Sperm oile at 11 oclock AM Lowered for a hump back whale. did not get them
        </p><p>March 16th Wednesday
          commences with fine weather the wind is from the Eastward midle part [illegible] is calm Latter part to anchor in Sam bay all hands on shore on libery all hands well on board
        </p><p>March 17th Thursday
          commences with fine weath all hands on shore on liberty or shelling midle and latter part the same all hands well on board
        </p><p>March 18th Friday
          commences with fine weath but cloudy the wind is from the South East midle and latte part blows heavy from South East wee are lying to anchor in conk cove all hands well
        </p><p>March 19th Saturday
          commences with fine weath and wind from the SE midle part cloudy and frquent showers of raine Latter part moderate the brig is Lying to anchor in Sam Bay crew all well on board so ends these 24 hours
        </p>
        <PageNumber num={121} /><p>March 20th Sunday
          commences with cloudy weath and frequent showers of raine midle part the same latter part Lying to anchor in sam bay all hands well on board
        </p><p>March 21st Monday
          commences with squally weather wee lay to our anchor all these 24 hours on acount of the wind blowing so very heavy from the Eastward nothing very remarkable to note all hands well on board
        </p><p>March 22nd Tuesday
          first part of these 24 hours is fine weaht but rathr windy from the SE thear is eight vessals to anchored in sight of us Lattr part blows heavy from the East
        </p><p>March 23rd Wednesday
          comences with cloudy weathr the wind is from the north East blowing heavy wee lying to anchor of sam bay mending sails all hands well on board so ends
        </p><p>March 24th Thursday
          commences with fine weathr the wind is from the north East  blowing heavy wee are lying to anchor of the isle of St Dimingo in Sam bay mending of sails and repairing riging [illegible]
        </p><p>March 25th Friday
          commences with cloudy weathr and the wind from the South East wee are cruising in sam bay for whale  lattr part cam to anchor to mend sailes and fit riging  so ends these 24 hr
        </p><p>March 26th Saturday
          first part of these 24 hours blows heavy from the East ward lying to anchor in Sam bay mending sails and fitting riging
        </p><p>March 27th Saturday
          first part of these 24 hours is fine weath the wind is South East wee are cruising for whale saw several blackfish the sea is so rough we cant lower Lat part came to anchor all hands well on board
        </p>
        <PageNumber num={122} /><p>March 28th Monday
          commences with clear weather the wind is from the SE moderate wee are cruising for whale in sam bay all these 24 hours with all hands well on board nothing transpired worth noting
        </p><p>March 29th Tuesday
          first part is fine weather and moderate breeses from the South west midle and latter part to anchor in sam bay mending sails and fittings in company with the brig Eschol of Truro Capt Smith
        </p><p>March 30th Wednesday
          first part has fine weather and the wind from the westward all these 24 hours cruising for whale but see nothing but porpises
        </p><p>March 31st Thursday
          first part has fine weather and moderate galles from the westward all hands mending sailes and fitting riging throught all these 24 hours
        </p><p>April 1st Friday
          commences with fine weath the wind from the westward blowing fresh wee are runing to the westward for port auprince bay Latter part fine weather and moderate gales
        </p><p>April 2nd Saturday
          all these 24 hours has fine weather and the wind from the North East running down by cape tiberoon fell in with a school of small whale lowred our boats and got one to the larboard boat wee judge her to be a 25 barel whale So Ends these 24 hours all hands well on board
        </p><p>April 3rd Sunday
          first part is fine weather the wind is from the south west blowing a fresh gale trying out oile of[f] th isle vache the south side of Saint dimingo latter part the same all hands well on board
        </p>
        <PageNumber num={123} /><p>April the 4th Monday
          these 24 hours comences with moderate weather and the wind from the North East midle and latter part blows heavy from the southward wee are laying too under reeft topsails trying out oile
        </p><p>April 5th Tuesday
          first part of these 24 hours moderate the wind is from the Eastward blowing freshly sqals middle and lattr part is fowl weath wee are lying to anchor under cape tiberoon for recruits all hands well on board
        </p><p>April 6th Wednesday
          first part of these 24 blows fresh from the SouthEast midle part has raine with frequent squals from diferant quarters lattr part th wind is more steady and from the South East
        </p><p>April 7th  Thursday
          first part of these 24 hours moderate the wind is from the North East wee are now runing down [illegible] the north side of Saint Deningo midle part Lowred our boats and took one whale to Each of them the three whale probably will make 40 bls
        </p><p>April 8th Friday
          first part of these 24 hours is fine weather with light breses from the Eastward midle and lattr part trying out oile all hands well on board wee are now of[f] cape Dan maria, the wind is East
        </p><p>April 9th Saturday
          these 24 hours commences with fine weather and the wind is from the North East midle part finished trying oile which made us [100] barels all hands well So Endeth these 24 hours
        </p><p>April 10th
          has fine weather and pleasant breases from the Eastward wee are now close to the isle of anigua bound out of the pasage of [illegible] islands Latter part fine So Ends these 24 hours
        </p>
        <PageNumber num={124} /><p>April 11th Monday
          First part of these twenty four hours the wind blows heavy from the North East but clear weather midle part had plenty of raine the wind changeable watermans island in sight of [illegible] bearing North East from us Latter part very stormy all hands well on board
        </p><p>April 12th Tuesday
          first part of these 24 hours has fine weather the wind is from the north East blowing fresh midle part the same Latter part wattermans island [bore] North East dist 10 miles wee still have the wind from the Eastward so far [that] wee cannot fetch out of the passage all hands well on board
        </p><p>April 13th Wednesday
          first part of these 24 hours has fine weath the wind is from the North midle part wee are all clear of [illegible] island passage watermans island bearing South dist 25 miles latter part wee have fresh trades from S Est
          Lat 24 Long 74=51
        </p><p>April 14th Thursday
          first part of these 24 hours the wind is moderate from the S Est and a heavy Sea runing from the north East midle and latter part much the same at 3 oclock PM saw a large ship standing to the Eastward
          Lat 25=38 Long 74=48
        </p><p>April 15th Friday
          commences with fine weather and a very heavy sea runing from the North East saw a large ship standing to the westward midle part has fine weather the wind is from the North East very moderate latter part the same all hands well
          Lat 27=40 Long 75=[17]
        </p>
        <PageNumber num={125} /><p>April 16th Saturday
          first part of these 24 hours is moderate the wind is light from the East ward and a very heavy sea running from the same quarter midle part saw sevrall vessels bound to to the west ward latter part fine weather all hands well on board at 12 A.M. wee were in
          Lat 29=10 Long 75=35
        </p><p>April 17th Sunday
          first part of these 24 hours has fine weather the wind is from the north [ward] blowing a fine pleasant gale theare is two vessals in sight from deck a choner and a brig both bound to the south west Latter part wee have fine weather and the wind from the south west at 12 oclock A.M.
          Lat was 30=25 Lon 74=40
        </p><p>April 18th Monday
          first part has fine weather the wind is south west blowing a pleasant gale at P.M. saw a Large Brig standing to the westward Midle part has fine clear weather, all hands cleaning ship no ob this day
        </p><p>April 19th Tuesday
          commences with moderate winds and fine weather the wind from the North East all these 24 hours wee are imployed in ships duty repareing sails fitting riging &amp;c Lat part all hands well on board
          Lat 31=30 Long 74=50
        </p><p>April 20th Wednesday
          first part of these 24 hours fine weather the wind is from the South West blowing heavy wee are runing under close reeft topsails until the latter part when the wind moderated wee was in the
          Lat 33=50 Long 74=59
        </p><p>April 21st Thursday
          first part of these 24 hours blows heavy from the west ward midle and latter part all hands imployed in ships duty So Ends
          Lat 36=28 Long 74=57
        </p>
        <PageNumber num={126} /><p>April 22nd friday
          first part of these 24 is moderate with the wind to the Eastward several saile in sight some standing to the Eastward and some to the westward Lat part of these 24 is pleasant the wind is light from the South west at 12 AM our Lat and was
          Lat 37=50 Long 74=50
        </p><p>April 23rd Saturday
          first part of these 24 hours has fine weather the wind is from the Northeast blowing heavy midle and latter part is the same nothing very remarkable to note any more than theare is sevral saile in sight standing to the Eastward
          at Non By Ob Lat 39=38 74=18
        </p><p>April 24th Sunday
          first part of these 24 hours has fine clear weather from the South the wind is South and pleasant breses latter part the same made the Land 11 oclock P.M. bearing North East from us Dist 10 miles which proves to be fire island light house land Long island
          Lat by Obs [4]0=40 0000
        </p><p>April 25th Monday
          these 24 hours commences with fine weather the wind is from the North East blowing fresh at 9 oclock P.M. made the light of tarpolen [Tarpaulin] cove bearing North Dist 5 miles wee came to anchor at 10 P.M and lay there until the next day at 12 A.M. got under way for the sound
        </p><p>April 26th Tuesday
          first part of these 24 hours has fine weather the wind is from the North blowing fresh at 9 oclock PM Nantucet light bore south Dist 5 miles wee are now runing down by cape cod
        </p><p>April 27th Wednesday
          first part of these 24 hours has fine weather the wind is from the north west blowing a 6 knot brese Latter part the same highland light at 12 AM bearing [E] dist 5 miles
        </p>
        <PageNumber num={127} /><p>April 28th Thursday
          first part has fine weather the wind from the South west with a Strong curent runing from the North west midle and latter part the same at 11 oclock A.M [Pakess] island bearing north west Dist 5 miles at - - -
        </p><p>April 29th Friday
          commences with fair weather and the wind from the South East at 4 oclock PM arrived in beverly and made fast to the wharf So ends this Voyage
        </p><p>Vernon Locke
        </p>
        <PageNumber num={140} /><p>Remarks on board [illegible] Decm the 8th
          Lying in Pigto harbour This day at 10 oclock AM wayed our anchor and stood out for sea with a pilot on board at 12 oclock wee abrest Pictow Light house Discharged our pilot So Ends these 24 hours Sivil ackount
        </p><p>Brig Sonora from Picto
        </p><p>Friday Decem the 9th
          These 24 hours hours has fine weather and very [cold] at 12 oclock made Cape Jack Light ran down the [strait] of Canso as far as McNeers [McNairs]Cove whare we anchored at 2 oclock A.M with the wind from the westward
        </p><p>Decem the 10th AD 1853
          These 24 hours has moderate weather the wind is from the South East and moderate the Latter part with raine all hands well on board Lying in Mack Neres [McNairs] Cove waiting for a westerly wind.
        </p>
        <PageNumber num={141} /><p>Towards Boston
        </p><p>Remarks on board
          Sunday Decm th 11th
          These 24 hours has moderate weather though wee are laying in the strait of canso waiting for a fair wind
        </p><p>Remarks
          Monday the 12th Decem 1853
          These 24 hours has moderate weather the wind is South west and snowing [Laying] in canso strait all hands well on board
        </p><p>Remarks
          Tuesday December the 13th AD 1853
          first part of these 24 hours has moderate weather The wind is from the Southwest three of our men ran away with the boat chased them to Ship harbour but could not get them but got the boat wee are laying in Mack neres Cove trying Ship more men  the 24 hours ends with southerly winds
        </p><p>Remarks
          Wednes December the 14th
          These 24 hours comences with fresh gales from the North west wee have shiped three men and at one oclock PM wayed the anchor and proceeded to sea at 8 oclock PM cape canso Light bore NW Dist 6 miles from whitch I take my Departure Lat part moderate at noon wee were abrest of halifix [illegible] So Ends these 24 hours
        </p><p>Thursday December the 15th
          These 24 hours Commences with pleasant weather the wind is from the westward Midle part breses up from the North west Latter part moderate the wind is bafling at noon wee are in
          Lat 43=38  Long 64=30
        </p><p>Friday Dec the 16th
          first part of these 24 hours has [moderate] breses from the South west midle the wind changed to the North East until the Latter part when it came to the South a steady brese
          Lat and Long
          Lat in at 12 oclock was Seal island
        </p>
        <PageNumber num={142} /><p>Brig Sonora from Picto towards Boston
        </p><p>Saturday Decem the 17th 1853
          These 24 hours commences with windy weather from the South East abrest Cape Sable Stearing WSW to clear the cape Midle part has more moderate weather the wind is from the South West latter part moderate with South winds Several sail in sight standing to the west ward all hands well on board this day
        </p><p>Sunday Decem the 18th AD 1853
          These 24 hours comences with cloudy weather The wind is from the South East blowing a pleasant gale midle part the wind increases to a perfect gale with a very heavy sea runing the Brig being Deep makes very bad play of it every heavy sea crosses the deck fore and aft Stove in the galley and came very near loosing the boat Latter part more moderate with a very heavy sea So Ends these 24 hours of uneasyness
        </p><p>Monday December the 19th
          these 24 hours commences with moderate South West winds with a very heavy sea runing from the Eastward Thatchers island bearing west 20 miles Dist Midnight beat up past Boston Light and anchored Latter part Took a Pilot and beat up to the city and anchored in the Streem
        </p>
        <PageNumber num={143} /><p>V Lock master
        </p><p>Sunday January 15th
          From Norfolk towards [Demara]
          these 24 hours comences with fine Clear North west winds at 9 oclock waid our anchor and stood out to see at 12 AM chatham Light bore SW Dist 25 miles So Ends these 24 hours
        </p><p>Jan Mondy 16
          Monday has fine weather with the wind from the South East East Latter part blows heavy the south west beating out the South chanel Ends with fogy weather
        </p><p>Tuesday 17
          Comences with a fresh gale from the North west wee are stering to the south west for Norfolk Latter part has fine weather with some raine
        </p><p>Wednesday 18
          These 24 hours comences with fogy weather the wind from North west to North East in the Lat of [illegible] island
        </p><p>Thursday 19th
          These 24 hours comences with clear weather midle part rainy weather wind from the South East
        </p><p>Friday the 20th
          Latter part wind is North First part of these hours has fogy weather the wind is from the South East Latter part took on board a pilot and proceeded up the Bay towards Norfolk
        </p><p>Saturday 21st
          arived in Norfolk and hauled to the wharf to Discharge Balast
        </p>
        <PageNumber num={144} /><p>V Lock Master
          Brig Sonora from Norfolk towards [Domaro]
        </p><p>Sunday February the 5th 1854
          These 24 hours comences with with heavy brezes from the Southwest at 11 oclock AM the the pilot left us
        </p><p>Monday February the 6th
          These 24 hours comences with Strong Breses from the South at 4 oclock AM the hauled to the North thear is a very heavy sea runing Latter Part Blows a gale from the North West standing with the Topsail reefed So Ends these 24 hours
          Lat 36=00 Long 75=43
        </p><p>Tuesday February the 7th
          These 24 hours comences with a fresh gale from the North west Midle part the wind cants westerly from that to South East Latter part more moderate with heavy sea runing from the North East
          Lat by 34=30  Long 71=30
        </p><p>February the 8th Wednesday
          First part of these 24 hours moderate with a heavy sea from North East Midle part moderate the wind is variable from South to west Tacked ship at 8 oclock PM Steering Easterly at 11 oclock close reefed the topsail wind increases from the South East Lattr part blows a gale from South East
          Lat by Obs 33=10  Long by DO 71=27
        </p><p>February Thursday the 9th
          First part of thes 24 hours has heavy gales from the South west and a heavy Sea runing Midle part blows a gale at 12 oclock midnight hove to under maine staisail the vessel is leaking 1000 strokes per hours of the [illegible] the Brig is heading ESE and East the [illegible]
        </p>
        <PageNumber num={145} /><p>Vernon Lock Master
          Brig Sonora from Norfolk towards [Denara]
        </p><p>Latter part wee have two men to the pumps constantly the sea making a clear [illegible] over us and washing away part of the Deck load and straining the brig so bad that wee were obliged to throw over board the remainder of the deck load to keep her from filing with watter at the time of this disaster wee sounded the pumps, and found the watter had gained on us 2½ feet in less than 4 hours So Ends these 24 hours
          Lat by Dr 34=08 Long 70=40
        </p><p>[noted in margin]
          Part of the crew Discharging the deck load 2 men [smartly] pumping
        </p><p>February Friday the 10th 1854
          These 24 hours comences with moderate weathe But a very heavy sea runing all hands is imployed pumping to keep the Brig [free] at 1 oclock PM. Set the Topsail and Jib at 3 oclock PM set the Foresail and maine sail midle and Later part the same all hands to the Pumps Except to make or set mor sail
          Lat at Non 34=08 Long 70=40
        </p><p>[noted in margin]
          The crew is So Exausted with pumping theare unable for any Duty two of them can doo nothing But steer
        </p><p>February Saturday the 11th 1854
          first part of these 24 hours has fresh gales From th North East a very heavy sea runing from the North west the Brig leaks so bad That we keep two men at the pumps all the time midle and latter part the same with strong breses from North East
          Lat by obs 24=15 Long 58=50
        </p><p>[noted in margin]
          those that are not pumping are throwing over the Deck Load
        </p><p>February Sunday the 12th
          These 24 hours comences with Stormy and heavy weather midle part more clear but blows heavy from the North East and thear is a heavy sea runing The brig Leaking at the rate of 11 and 1200 Strokes per hour but the deck load being of[f] Decreases her leakage very mutch
        </p><p>[noted in margin]
          Lat 30=20 Long 63=[03]
        </p>
        <PageNumber num={146} /><p>Master V Lock
          Brig Sonora from Norfolk towards Demara
        </p><p>February Monday the 13th
          Comences with Cloudy weather and fresh gales from the North East midle part the same Two men imployed to the pumps throught These 24 hours
          Lat by obs 27=21 60=25
        </p><p>Tuesday February the 14th
          These 24 hours comences with fresh gales from the North East  two men imployed at th pumps continuely thear is a very heavy sea runing from the North East
          Lat by ob 24=15 Lat 58=50
        </p><p>February Wednesday the 15
          These 24 hours comences with fine weathr but rathr Squaly the Brig makes watter fast so much so th[at] we have to kep Both pumps going continuely Lattr part blows heavy from the North East
          Lat by obs 21=14 Long 58=14
        </p><p>February Thursday the 16th
          these 24 hours comences with pleasant weather and strong breses from the Eastward Later part the same the brig leaking one thousand strokes per hour
          Lat by obs 18=14 Long 5[7]=50
        </p>
        <PageNumber num={147} /><p>V Lock Master
          Brig Sonora from Norfolk towards Demara
        </p><p>Feb the 17
          first part of these 24 hours has fresh gales from the Eastward and clear weather the Brig is Leaking one thousand strokes per hour two men constantly on the pumps the rest of the of the crew is imployed in mending sails other ships Duty
          Lat by obs 15=08 Long 57=37
        </p><p>Saturday Feb 18th
          These 24 hours comences with fine clear weather the wind is eastward Later part fine weather the crew is all imployed in pumping ship the Brig is Leaking one thousand Strokes per hour
          Lat by ob 12=04  Long 57=40
        </p><p>Sunday Feb the 19
          These 24 hours comences with moderate weather the wind is from the North East midle part calm with a very heavy sea Runing the Brig is Leaking as bad as ever
          Lat By Obs 07=05  Long by cro'm 57=30
        </p><p>Monday February the 20th
          These 24 hours comences with cloudy weather the wind is from the North East made the Light watter of Denara 12 oclock midnight at 10 oclock AM. made the Light boat of Demara ran Down to her and took a pilot at no[o]n anchored in Demara So ends this Pasage and 24 hours the Brig Leaking as bad as Ever
        </p>
        <PageNumber num={148} /><p>[illegible]
          Regestery of accounts
        </p><p>May the 4th 1854 filling four watter casks
          at 50 cents Each                                            $ 2 00
        </p><p>Salem June the 28th 1854
          filling two watter casks 50 cents each          $ 1 00
        </p><p>Boston August th 7th      Do                            1 00
        </p><p>Boston September 18th   "                              1 00
          Boston the 18 Sept Paid                               $ 5 00
        </p>
        <pre>                                                                          Advance
        </pre>
        <p>Boston Sept the 15th James Jerewa Shipped   $ 10.00
        </p>
        <pre>                                                                          Spanish
        </pre>
        <p>James Hurbern at Sydney    Sept the 30th             1 00
        </p>
        <pre>       Do                    Do         Oct the 5th                1 00
        </pre>
        <p>[Jeree] Lang Law                     Oct the 7th              1 00
          [Denis] Langlaw                     Oct the 7th                1 00
        </p>
        <pre>               Stuart                     Oct the 10th              1 00
        </pre>
        <p>[Denis] Langlaw                     Oct 15th                    2 00
          [Jeree] Langlaw                      Oct 15th                      32
          James [Hubern]                         “   15th                  1 00
          [Jese] Langlaw                          “    25th                  1 00
          [Denis] Langlaw                         “   25th                  1 50
          James [Huburn]                         “   25th                  1 00
          [W] Jerewa                                 “   25th                  4 00
          [by Stuart]
          James [Jerewa]                       Nov th[e] 7th            5 00
          “            “                                         “      8th          20 00
        </p>
        <PageNumber num={149} /><p>Ships account at Sydney [CS]
        </p><p>Sept th 30  Four [brooms?]   fifty cents                                  50 cents
          “        “        one pece of hardwood goice for cleats               50
          “       “         One dozen gib hanks                                           75
          “      “          three deck buckets seventy five                        2 25
          Oct 7th       Blacksmith bill for hooks and thimbals anchor 1 00
          “       “         kees and Bolts for Windless                              1 06
          “       “         for seting glass in skylights                                  50
        </p>
        <pre>                  Paid half Pilotage [in and] out                            6 10
          Paid for 4 bush Potatoes                                   2 50
        </pre>
        <PageNumber num={150} /><p>[noted in margin] Vernon Locke
        </p><p>the Burial at Sea
        </p><p>The Solemn words are said
          Let the sea receive the dead
          in this vast unfathomed bed
          Until time that be no more      1
          The frothing of a wave
          And the good, the kind, the brave,
          Is in his ocean grave.
          all his storms of life are o’er       2
          His shipmates stare
          With iyes of dull and long surprise
          That where their comrade lyes
          Not a trace should now be seen      3
          The waves still rool &amp; leap
          on th chamber of his sleep,
          Down down in the great deep
          as though he had never been      4
          His ship mates walk away
          and in hoarse whispers say
          “God rest him” so they pray,
          Who doubts their prayer is heard     5
          When seated at their mes
          They find one face the less
          Each shows his kind distress
          Thogh he does not speak a word    6
          Some think that when again,
          They croos that restless maine,
          They will look and look in vain
          For their shipmates plce of rest     7
          and some will sadly sigh.
          an wish that when they dye
          in churchyard they may lie.
          With those they have loved best   8
          Death will not come and go
          Without his fitting woe,
          Methinks tis doubly so
          When he meets us on the sea     9
          The world is then so small
          a ship contains it all
          The dead man neath the pall
          how large a part was he     10
        </p>
        <PageNumber num={151} /><p>Cheer Boys Cheer
        </p><p>1st
          Cheer Boys Cheer no more of idle sorrow
          Courage true hearts shall lead us on our way
          Hope points before and shows a bright tomorrow
          Let us forget the darkness of today
          Fare well England much as we may love thee:
          We’ll dry the tears that we have shed [before]
          Why should we weep to sail in search of fortune
          So farewell England farewell for evermore
        </p><p>Chorus
          Cheer Boys Cheer for Country mother Country
          Cheer Boys Cheer united heart &amp; hand
          Cheer Boys Cheer there’s wealth for honest labour
          Cheer Boys Cheer for the new &amp; happy Land
        </p><p>2nd
          Cheer Boys Cheer  the steady breeze is blowing
          To float us freely o’er the oceans Breast
          The world will follow in the track we’re going
          The star of Empire glitters in the West
          Here we’ve had toil &amp; little to reward it
          There shall plenty smile upon our pain
          Ours shall be the prairie &amp; the Forest
          And boundless meadows ripe with golden grain
        </p><p>Chorus
        </p><p>Vernon Lock Esq
          Sept 21st/55
          Rob’t Thomson Sept 21st/55
        </p>
        <PageNumber num={152} /><p>Log Book of the Brig Sonora
        </p><p>[H], [illegible], Course Wind
        </p><p>Course NW Wind SW
          Remark on board Nov. 30th, 1855
          First part of these 24 hours blows heavy from the South West at 12 tacked Ship and Stood to the north west
          midle and Later part the same
          [illegible] So Ends these 24 hours
        </p><p>Course SW Wind NW
          Remark December the 1st of 1855
          These 24 comences with heavy gales from North at am tacked ship and stood to the South West.
          Midle and later part the Same
          So ends these 24 hours
        </p><p>[ditto] [ditto]
          December the 2nd, 1855
          These 24 hours comences with heavy gales from North West.
          at Midnight made Liverpool Light bearing North Dist 7 miles tacked ship at 2 AM. a stood to the South West Later part blows very heavy from the North west
          No obs this day
          [noted in margin, upside-down] E. L. Locke.
        </p>
        <PageNumber num={153} /><p>Bark Vernon G Locke, Master from Boston to trieste
          Oct 15 '56
          at 6 oclock A. M. got underway and proceeded to Sea at 8 the Pilot Left us weather cloudy wind north East
        </p><p>Oct 16th
          Lat 42=10 Long=20
          winds ENE cloudy and very cold Latter part wind hauls to South East and at times Bafling to the westward
        </p><p>Oct 17th
          Lat 40=31 Long 69=00
          first part has Light Brezes from westward all posible [sail] [set] at 10 oclock PM got soundings on [unclear] Shoal in 7 &amp; 10 fahoms water Latter part fresh gales from SSE and some raine Barometer falls fast I Expect a gale from the South East
        </p><p>Oct 18th
          Lat 41=40 Long 67=30
          first part blows heavy from East midle part changeable from East to South East by East latter part blows heavy from South East
        </p><p>Oct 19th
          Lat 42=38 Long 64=30
          comences with heavy gales from East to South East Latter part moderate wind Bafling and Some raine Brometer still low as change
        </p><p>Oct 20th
          Lat 41=20 Long 62=10
          these 24 hours comence with Light airs from west northerly Latter part fresh gales from North west Barometer Rises fast
        </p><p>Oct 21st
          Lat 40=35 Long 57=25
          comences with wind North East fresh gales &amp; continues so throughout Brometer 30-00 curent E two knots per hour
        </p><p>Oct 22nd Lat 41=30 Long 51=10
          winds NE fresh gales curent 1 knot per h [east-South East] Barometer 21-9
        </p><p>Oct 23
          Lat 41=00 Long 45=00 by DR
          winds North East fresh gales midle &amp; Latter part Hevy gales no obs this day
        </p>
        <PageNumber num={154} /><p>Bark Vernons Fourth day out
          Lat 42=38   Long 64=30
        </p><p>Oct 24th
          Lat 41=02 Long 44=15
          making a distance of Eight hundred &amp; sixty four miles in four days [unclear] wind North East Blowing hevy
          Barometer 29 [unclear] air 60 00 watte[r] 40 00
        </p><p>Oct 25
          41=50 37=00
          wind South fresh gales and cloudy
          Barometer 29 00 thermonetr 60 00 wattr 40 00
          a great quantity of Porpoises all this day
        </p><p>Oct 26th
          Lat 42=30 Long 32=30
          wind South west fresh gales and heavy rain Showrs Latter part more moderate
          Bar 29- [unclear]
        </p><p>Oct 27
          Lat 42=25 Long 30=10
          wind South West &amp; South by West Latter part fresh gales &amp; clear weather
          Bar 29 [unclear]
        </p><p>Oct 28th
          Lat 41=30 Long 25=40
          wind South by west and cloudy all sail sat Latter part thick &amp; hazy &amp; bafling winds
        </p><p>Oct 29
          Lat 41=00 Long 26=03
          winds South Light &amp; Bafling throughout
          Bar 29 [unclear] watter 49 00 air 60 00
        </p><p>Oct 30th
          Lat 40=41 Long 21=30
          these 24 houres moderate breses from the South West but cloudy
          Brometer 30 [unclear] thermometr 60 wattr 50
          Ends with some rain
        </p><p>Oct 31st
          Lat 39 51 Long 19 20
          comences with heavy gales from South west and west south west midle &amp; latt[er] part the Same Latter part Sprund the Mainyard got it down and fished it
        </p><p>Novm 1st
          Lat 39 30 Long15 10 West
          these 24 hours has heavy gales from the South West Lattr part more moderate.  Ends with raine
        </p>
        <PageNumber num={155} /><p>November 2nd, 56
          Lat 38=30 Long 13=20
          first part Light airs from South west and cloudy
          Barometer 30 air 50 5
        </p><p>Novm 3
          Lat 36=40 Long 10=40
          first Blows heavy from north East midle and Lattr part more moderate wind canting Easterly no observation this day
        </p><p>Novm 4th
          Lat [35]=30 Long 08=55
          [these] 24 hours comences with cloudy weathr wind north East Bafling
          Barometer 30 5
        </p><p>November 5th
          Lat 36=10 Long 06=30
          twenty days out from Boston Gibraller in Sight So Ends this Log of pas[s]age out Left Strates Gibralter January 29th 1857 Light Breses from the Eastward Bound to Boston U. S. A.
        </p><p>Jany 30th
          Lat 36=30 Long [symbol]6=10
          these 24 hours comences with wind variable an Squaly from South East to North East
        </p><p>Jany 31st
          Lat 36=00 Long [symbol]8=20
          Barometer 30 [symbol] air 55
          wind variable from E. to N. &amp; NE. all posible Sail Set to advantag
        </p><p>Feb 2d
          Lat 35=40 &amp; Long 12=40
          west winds north &amp; north East throughout these 24 hours heavy Se from the Eastwd
          Barometer 30 air 55 watter 45
        </p><p>Feb 3d
          Lat 35=50 Long 15=20 west
          heavy Breeses from north west &amp; north Stron[g] curent Seting East 1 1/2 Konts per hour
        </p>
        <PageNumber num={156} /><p>Homeward Bound from Gibralter
        </p><p>Feb 3d
          [symbol]Lat [unclear] Long [unclear]
          all these 24 hours under close reefed topsa[ils] wind north by west
          Barometer [symbol]29 [symbol]5
        </p><p>Feb 4th
          Lat 34=30 Long 24=30
          thes 24 hours has hea[v]y gales from north East throught
        </p><p>Feb 5
          Lat 33=50 Long 28=50
          [t]hese 24 hours blows hevy from north and heavy Squalls throughout
          Barometer low
        </p><p>Feb 6th
          Lat 33=59 Long 31=57 west
          these 24 hours continue with a gale from the north East Latter part very rough
        </p><p>Feb 7th
          Lat 34=30 Long 35=20
          this 24 wind from north as usual continues rough &amp; varies at times to Eastward I hope so[o]n to have a change of wind as we [unclear] Bee foul of Bermuda
        </p><p>Feb 8th
          Lat 35=20 Long 39=50
          these 24 hours has wind more moderate from north East but squaly appearences in the South East
        </p><p>Feb 9th
          Lat 36=50 Long 43=10
          these 24 hours wind Bafling from north East South East and rain heavy at times Ends with with to South west
          Baromete[r] 29 air 51 watte[r] 40
        </p><p>Feb 10th
          Lat 37=40 Long 48=05
          wind west north west Still 11 Days out hauling to northward and continues to Blow hea[v]y although hauling fast lattr part wind north
        </p>
        <PageNumber num={157} /><p>Feb 11th 1857
          Lat 39=00 Long 49=50
          the wind goes round the cumpas as regular as the tide Ebs and flows and continues to Blow heavy During its Shifting Latter part wind South hauling westerly
        </p><p>Feb 12
          Lat 39=50 Long 52=35
          wind north west canting northerly and very cold
          air 20 Barometer 29 watter 60
          Latter part wind East North East
        </p><p>Feb 13
          Lat 40=40 Long 55=50
          air very cold Ship making muc[h] Ice wind north Easterly [unclear] [unclear] showers of sleet at times Latter part blows heavy f north Es
        </p><p>Feb 14th
          Lat 41=05 Long 60=00
          wind north East hauling to East midle part wind South East Latter part South &amp; west S. W. &amp; hauling
        </p><p>Feb 15th
          Lat 42=20 Long 64=30
          wind north west hauling north Easterly air very cold ship making much ice &amp; under singl reeft Topsails
        </p><p>Feb 16
          Lat 42=10 Long 67=40
          wind north East Blowing a gale Latte[r] part more moderate Ship covered with ice
        </p><p>Feb 17
          Lat 42=10 Long 70=20
          Boston land in sight at 4 PM took a pilot at 12 &amp; came to anchor in Boston Harbor So Ends this pasage
        </p>
        <PageNumber num={158} /><p>Barque Vernon Vernon Locke Master
        </p><p>March 13
          First day out
          Lat 42=07 Long 70=04
          Cape cod in Sight wind N west very cold
          Baromete[r] 29 [unclear] air 20 wattr 40
        </p><p>March 14th 1857
          Lat 37=20 Long 66=32
          Barometer 29 [unclear] air 50 wattr 50
          wind north west very cold
        </p><p>March 15
          Lat 37=30 Long 64=50
          Bar 30 air 60 water 70
          winds variable from North west to South west Same &amp; raine
        </p><p>March 16
          Lat 36=10 Long 63=15
          Barometer 30 [unclear] air 60 [unclear] water 70
          wind South west and cloudy
        </p><p>March 17 Lat 34=50 Long 60=00
          Barometer 30 [unclear] water 70 air 70
          winds South with some raine Later part heavy Squall from NW from [that] to west
        </p><p>March 18
          Lat 33=57 Long 57=30
          wind South west &amp; cloudy all prudent Sail Set
        </p><p>March 19th
          Lat 32=55 Long 55=10
          Barometer 30 air 69 water 60
          wind South west Strong Brezes curent westerly 1/2 knots per hour
        </p><p>March 20
          Lat 31=50 Long 49=10
          wind South west and raning Latter part moderate &amp; Bafling
        </p><p>March 21st
          Lat 30=15 Long 46=20
          wind South west and cloudy
        </p>
        <PageNumber num={159} /><p>Boston towards Cape of Good Hope
        </p><p>From Boston towards Cape Good Hope
        </p><p>March 22d
          Lat 28=10 Long 42=20
          Barometer 30.5 air 60 water 58
          at 9 P.M. Spoke a Barque Bound to [Balimore] Showind austrian coulors
        </p><p>March 23d
          Lat 27=20 Long 38=10
          Barometer 30.5 air 70 &amp; 60 water 65
          wind Bafling from South to South South East But soon hauls to North East Steady fine Breeses Later all Sails Sat that can posibley be [unclear] of any advantage
        </p><p>March 24th
          Lat 24=20 Long 36=30
          Barometer 30 Air 70 water 70
          Wind North East fresh gales and pleasant weather the Vernon Slide along as thoug nothing conserned her averedgeing [unclear] 250 &amp; 240 Every 24 hours as you see by her Log She has made 300 in 24 this pasage
        </p><p>March 25th
          Lat 21=10 Long 35=00
          Barometer 30.00 air 70 water 70
          wind East North East &amp; fre[q]uent Showers of rain a Ship in Sight Standing Westerly
        </p><p>March 26th
          Lat 18=05 Long 33=07
          Barometer 30 air 70 water 69.5
          Wind North East Variable and Light pased Saw two Ships Bound to East ward no obs this day
        </p><p>March 27
          Lat 15=30 Long 32=20
          Bar 30.5 air 71 water 69.5
          Wind North East Light and Variable calm at times with Showers of rain and [heavy] thunder, clouds heavy in the South apearences of South East trades
        </p>
        <PageNumber num={160} /><p>Barque Vernon, Vernon Locke Master to South Africa
        </p><p>March 28th
          Lat 13=20 Long 31=30
          Barometer 30.5 Air 70.7 Water 69.9
          Winds North East by East Bafling and Cloudy thunder and Lightning -- and frequent Showers of rain, Later has apearences of SE trades passing Swiftly South West Monsoon Clouds
        </p><p>March 29
          Lat 10=15 Long 31=30
          Bar 31.0 Air 70.9 Water 70.5
          Winds North East Bafling to South East at times &amp; as far as South at times Some raine and pasing clouds
        </p><p>March 30th
          Lat 07=25 Long 30=21 Dr [Rcing]
          Barometer 30 Air 70.5 Water 69
          Wind South East and East Bafling Strong Brezes at times
        </p><p>March 31st
          Lat 04=07 Long 29=20
          Barometer 30 Air 70.9 Water 69
          Winds North East and Bafling Some raine
        </p><p>April 1st 1857
          Lat 01=25 Long 28=40
          Barometer 30.9 Air 71 Water 70.9
          Wind East North East Bafling calm at times with rain Showers [two] Ships in Sight Standing South
        </p><p>April 2nd Lat 38 miles South Long 28=45
          Barometer 30.5 air 71 Water 70
          Wind South East &amp; calm at times &amp; Bafling with pasing Clouds crosed the Equator at 9 oclock AM 19 days &amp; 10 hrs Not So Bad after all the calms we have had this 5 or Six days four thousand One hundred miles per Log including calm days and all She has made 8 Knots/hour on average the whole pasage
        </p>
        <PageNumber num={161} /><p>From Boston United States, South Africa
        </p><p>From Boston United States to South Africa
        </p><p>April 3d
          Lat 03=45 South Long 29=52
          Barometer 30 Air 70.5 Water 70
          Wind South East by South fresh gales with frequent Showers of rain Midle and Latter part We Saw two clipper Ships in company first and middle part but wee can out Sail them Later part they are hull Down to Leeward all three of us [unclear] By the wind nothing more of importance this 24 hr than theare is a very heavy Sea Runing from South West Ship Labours heavy
        </p><p>April 4th
          Lat 05=50 Long 29=50
          Barometer 30.9 Air 70.5 Water 70.9
          Wind South East and a  heavy head Sea from South West  Ship Labours very heavy frequent Showers of rain and pasing Clouds from South East curent west 1/2 knot per hour atmosphere thick &amp; hazy great quantitiys of flying fish During Later part pleasant and warm throughout
        </p><p>April 5th Lat 07=10 Long 30=00
          Barometter 30.9 air 70.7 Water 70.7
          Wind South East pleasant and frequent Rain Showers midl part Moderate with Bafling and pasing Clouds
        </p><p>April 6th
          Lat 09=45 Long 30=04
          Barometer 29 Air 89.5 Water 75.9
          Wind South East fresh gales But cloudy weather, Some rain at times with heavy Gusts of wind when shall I get out of the South East trades I am afraid I shall bee a Long way South before making much Eastern
        </p>
        <PageNumber num={163} /><p>Vern Locke Master
          Towards Cape Good Hope
          Vernon Locke
          Good Hope
        </p><p>April 10th
          Lat 17=00 Long 33=10
          Barometer 30” Air 70” Water 70
          Wind South East Bafling &amp; calm at times with frequent showers of Rain apearences of a shift of wind Midle part Bafling light airs varying from East to Sout East but the old South East Swell continues as heavy as ever the horison is very Bright in the North West and sun sets clear in the Evening  apearences of a north west wind wind continues Bafling &amp; light
        </p><p>April 11th
          Lat 17=30 Long 33=50
          Barometer 30.5 Air 79.9 Water 70
          Wind South East what theare is of it Calm the most part of the time &amp; raine Squall and gusts of wind at times from all quarters of th cumpas Later part the same when in gods name will I get out of these South East doldrums getting Short of water that is any good &amp; Short of [pasiene] Likewise no Sines of a change up South East &amp; off South west Calms Calms  throughout
        </p><p>April 12th
          Lat 19=10 Long 35=10
          Barometer 30 Air 78.5 in the sun Water 70.4
          Wind none and god Knows when wee shal have any for I do not know, wee are drifting about the South atlantic for the Benefit of the fish that play around us calm calm for ever Later part Light airs from north East and as faint as ever this kind of work Looks Like Sabeth Days in Been Town Saylors Laying about Decks taking comfort
          [noted in left margin] Sunday Throughout
        </p>
        <PageNumber num={164} /><p>Barque Vernon V Locke Master
        </p><p>April 13th
          Lat no obs  Long  “  “
          first part of these 24 hours has Dark cloudy weather wind moderate Bafling from South East to North East Raining at times Midle part more Wind than wee have had for five days and that is not a Six Knot Breese crew all imployed in various Jobs on riging = clouds going in all Directions which causes the wind to vary so rapidly all well on board Sun Sets clear wind cants to NE So Ends these 24 hours
        </p><p>April 14th
          Lat 19 37 Long 23 10
          Barometer 30.5 Water 70.9
          Wind North East Light and variable crew imployed in various jobs about decks Midel part moderate and pasing clouds I think I have got out of the doldrums after a Seige of 7 or 10 days but the wind is very light yet I have poor incouragement for making a Short pasage this time 10 days out of a 50 days pasage is not pleasant at all Barometer rised fast from twelve to two She has rose from 30.5 to 31.4 wind increases a little from the north East  thank god for that Littles[t] one of the Small gifts Thankfuly received
        </p><p>April 15th
          first part of this 24 hours moderate
          Barometer 30 8 water 69 5 air 70 4
          wind North East moderate and cloudy with frequent Showers of raine midle and later part pasing clouds and Squaly two Ship in Sight Steering to the South West probably bound to california
        </p>
        <PageNumber num={165} /><p>From Boston Towards South Africa
        </p><p>April 16th
          Lat 21=10 S Long 22=25
          these 24 hours comences with cloudy weath and frequent Squals of rain and wind
          Barometer 31 5/10 thermometer 70 4/10 water 70
          wind the Later part is from the north East and cloudy  one ship in sight standing to south west So ends all well on board
        </p><p>April 17th
          Lat 22=36  Long 20=50
          Barometer 30 5/10 Air 70 9/10 Water 69 [9/10]
          Wind north East fresh gales and pleasant weather, all posible Sail Set to advantage crew all imployed in turning in riging &amp; at midle part a fresh and increasing Brease Later part much the same and frequent Squalls of raine Ship on the starboard Beam Steering South west Suposed to be a californian crew all well on Board
        </p><p>April Saturday 18
          Lat 23=10S Long 18=50W
          Barometer 30 5/10 air 70 Water 69 7/10
          wind from north East to north west Bafling and cloudy But continues a strong Breese making and taking in sail as required Later part keeps crew constatly squareing and Bracing yards and Seting and taking in fore and aft Sails wind very changeable
        </p><p>April 19th
          Lat 24=20 Long 17=45
          Wind north East very light and bafling midle part calm &amp; heavy raine Showers Later part the same, when Shal I get a wind or a Six Knot Breese this is Discouraging
        </p><p>April 20th
          Lat 25=25 Long 16=50
          Barometer 31 9  Water 70  Air 75
          Wind Light and Bafling from north East to South East most part calm middle part Has Light airs from South East and Later part calm  calm  calm O what A trial have I
        </p>
        <PageNumber num={166} /><p>April 21st A.D. 1857  F B to S A.
          Lat 25=50 Long 15=50
          calm Barometer keeps up to 30 with out any change but weather very changeable Both Barometers Seem to be of no use whatever notwithstanding they Both agree with Each [other] air seeme to change fast yesterday it was up to 75 to day it is 50 Later part calm and cloudy Some rain and bafles of wind from all quarters
        </p><p>April 22d
          Lat 26=30 Long 14=50
          Barometer 31 [9]  air 65.5
          wind none calms throught When shal I Ever get out of these Doldams Im tired of my life in a floating Prison
        </p><p>April 23rd
          Lat 26=[50] Long 13=40
          Wind bafling from South East to North East  middle and late part the same calm calm --------
        </p><p>April 24
          Lat 27=20 Long 12=30
          calm  calm ----------
          [illegible]
        </p><p>April 25th
          What Shal I say calms is So impresed upon my mind that I can say nothing Else calms througout this day out of my mind
        </p><p>April 26th
          this day Im perfectly crazy was Ever Job aflicted as Im Layd up with rhumetism and the Ship laid up with calms O that I was a share holder in th Eastern railroad and conductor in Stead of a Ship owner and master
        </p><p>April 27th
          this day wee have a change like the Irish mans fish &amp; potatoes calms
        </p>
        <PageNumber num={167} /><p>April 28th 1857
          Lat 27=50 South
          One godsend at last a light breese from the East laying up SE by S and SSE that is within two points of our course and that is as much as I Expect for it seems as though theare was a Spell put upon me. I should Sertainly think So. if I was Supersticious But let me think why. I was Borne under a cloud and a dark one at that and in a dark night I think.
        </p><p>April 29th
          Lat 32=00 Long 04=00 West
          Moderate Breses from South East &amp; Bafling from that to North East midle part calm as usual later part rainy a long Dist to Cape Good hope and shal be this time next year at this last 10 days rate ---------- O how I Should like to have Some of those Hay Seed white livered Land Sharks who sometimes Say that captains have fine times nothing to do but sit on [there] narative and let the wind Blow them along I feel Sory that they canot have that pleasure Especially Some of my calms
        </p><p>April 30th
          this day comences with an Irish huricane straight up an down Ends the same O that I had wings I would fly from these calms and be in Cape Town in 12 hours
          Barometer 30.9 Air 70  Water 70
          [noted in margin] Showers of raine at times
        </p><p>Ap'l or March 1st
          Lat 34=00 Long 02=10 East
          These 24 hours comences with cloudy weather &amp; wind from North East and bafling from that to South East and at times calm, Midle &amp; Later part Bafling and &amp; cloudy
          Barometer 31.9  Air 70  Water 69
          all about Seems lively Except calms birds of all kinds are numerous and this afternon I caught a Dolphin all well on Board
        </p>
        <PageNumber num={168} /><p>Barque Vernon, V. Lock Master to S. Africa
        </p><p>May the 2d 1857
          Lat 34=30 S  Long 4d East
          first part of these 24 hours has pleasant weather and moderate Breses from North East Midle and later part Moderate Wind North East
          Barometer 31.9 thermometer 70.5 water 70.00
        </p><p>May the 3d
          Lat 34=40  Long 06=20 E
          These 24 hours comences with light airs from North East Bafling at times to South East &amp; East midle part brese freshens a little from North East and more Steady than formerly Later part light airs and bafling
        </p><p>May the 4th
          Lat 34=20 Long 09=50 East
          First part of these 24 hours moderate Brezes from North East weather Dull &amp; cloudy midle and later part the same with an increasing breze from North East
        </p><p>May the 5th
          Lat 34=10 Long 13=25 East
          These 24 hours comenced with Strong Brezes from North East Weather thick and cloudy with Some raine midle part the Same all hands imployed all the later part in Seting up riging and other nesesary gobs
        </p><p>May the 6th
          Lat 34=10 Long 17=20  East
          First part of these 24 hours has thick and Squaly weather wind from North East Midle &amp; later part the same but wind is increasing fast and Barometer faling from 30.5/10 to 29 9/10 Later part increases to a gale of wind took in all Light Sails furled the courses and close reefed the two top sails being with in 5 miles of Cape good hope wee have ships off shore
        </p>
        <PageNumber num={169} /><p>May the 7th/57
          Lat 34=05 Long 17=58
          these 24 hours comences with moderate weather and a very heavy Sea runing from the North East Later part we came to anchor in table bay in 5 fathoms watter, those who might peruse these notes must think that is was written for no other purpose than to amuse the writer in hours of Solitude after Laying here 5 days wee Proceed to algoa Bay Port Elizabeth with a Fine North West gale which port wee ariv at in 36 hours from table Bay after laying in Algoa Bay 21 days wee proceed to table Bay again and arive theare in 6 days and Lay theare 5 days more and in June 27
        </p><p>June 27th/57
          wee weighed our anchor and Proceeded to Sea Bound to Boston U.S.A. First part of these 24 hours is modrate and fine weather Later on midnight calm wee weare obliged to Lower our boat and tow the Bark from the shore for fear of getting in the Brakers however wee made out to keep her of[f] shore and in the morning wee fortunately took a breese from the west which carried us out of the Bay Later part Light winds from the South West
        </p><p>June 28th/57
          Lat 33=10  Long 17=20
          these 24 hours comences with moderate Brezes from West all posable Sail Sat to advantage, midle and later the Same Late part we have Som rain
        </p><p>June 29th
          Lat 31=30 Long 15=50
          first part of these 24 hours has light winds from Southwest &amp; Some raine Middle part more wind from South west Barometer falling from 29 9/10 to 29 Later part has strong Breeze South by West and raining
        </p>
        <PageNumber num={170} /><p>June 30th
          Lat 29=19 Long 12=20
          First part of these 24 hours has fine weather but cloudy and wind from south west moderate middle part the same Later part has an increasing breeze Barometer risen again to 30 1/10
        </p><p>July 1st
          [series of navigational calculations]
        </p><p>July the 1st 57
          Lat 25=45 Long 10=42
          these 24 hours comences with heavy &amp; cloudy weather wind light from South West midle and later part Calm with frequent Showers of rain
        </p><p>July 2nd
          these 24 hours comences with bafling Brezes but very light from South West Later part the Same
        </p>
        <PageNumber num={171} /><p>[penned note in top margin] Commences with cloudy weather and the wind from the S.E. but changeable and bafling. Barometer 30. Thermometer 70.
        </p><p>July the 3d
          Comences with cloudy wether and the wind from the South East But variable and Bafling
          Barometer 30  2/10 Thermometer 70
        </p><p>July the 4th
          Lat 22=10 Long 06=20 East
          Comences with light breezes and cloudy &amp; wind from S.S.E.
        </p><p>July the 5th
          Comences with rain &amp; Cloudy weather wind bafling from From South to West hauling against the Sun all apearances of the South East trades but wee Shall not get them two Soon for wee Should have taken them in 20 South instead of 18 South
        </p><p>July 6th
          Lat 18=30 Long 02=00 East
          Comences moderate and cloudy wind Bafling from South to North working against th Sun Every 24 hours Later part the Same
        </p><p>July the 7th
          calm throughout with pasing clouds  the wind is SE overhead but none on the water
        </p><p>Time by chronometer        Greenwich  watch
          [series of navigational calculations]
          Longitude West one dg &amp; thirty two miles 01=32 By Chronometer
          Longitude West one Deg &amp; thirty thee miles By Watch 01=33
        </p>
        <PageNumber num={172} /><p>July the 8th AD 1857 Barke Vernon
          Comences with fine clear weather But calm with variable flows from diferant quarters midle part has light airs from the North west, Later part Light airs from [So]
          Barometer 30 5/10   Air 70 4/10
          a large Ship in Sight Standing on the Same tack, creew imployed mending Sails, and on various other jobs about Decks
        </p><p>the 9th
          Comences with fine clear weather and very warm the glass today that is the thermometer is 117 above but the sky is beautiful &amp; the vernon glides along most beautifuly how [beautiful] is a day near the tropick it apears that a Seamans or merinors life would be a Pleasant one if it was all like this Sailing But it canot be so wee must take the foul with the fair if it was not So Every woman of a roaming Disposition would go to Sea and wee wee obliged Sand Shark to be
        </p><p>July the 10th 57
          this day comenced with [moderate] weather wind from the South East the sky is clear And beautiful and mild and Every thing pleasant but the wind is very moderate
        </p><p>July the 11th
          Comences with fine weather and warm ar 116 in the Sun moderate throughout
        </p><p>July 12th
          has fine pleasant weather through out
          Lat 19=00 Long 18=50
        </p><p>July 13
          these 24 hours has fine clear weather wind from north East but cloudy all hands well on board and busy at various jobs about decks
          Barometer [30] 5/10  Air 70  Water [60 1/10]
        </p><p>[penciled note in left margin]
          July 10 By St Helna [Saint Helena] the chronometer was fast of Greenwich One minute and twenty seconds 0.01.20 watch slow M-02 S-40
        </p>
        <PageNumber num={173} /><p>From South africa Towards Boston
        </p><p>July the 14
          comences with fine clear weather but moderate continues So throughout Lat 84 Long 19=20
        </p><p>July 16th
          has fine weather throogt wind South East But moderate th air is very warm to day thermometer Stands 117 in the Sun
        </p><p>July 17th
          has fine clear weather wind from N.E! moderate and cloudy all hands imployed In Ships duty all possible Sail Set to advantage
        </p><p>July 18th 57
          Lat 06=30 Long 20=50
          Comenes with cloudy &amp; moderate weather wind South East! All hands imployed in Ships duty, in various ways
        </p><p>July 19th
          this day comences with fine clear weather  wind from South East thiss has been the most beautiful day wee have had Since Leaving Capetown the air was warm and [elastic] the Sun Soft and pleasant. By every thing around us we have been reminded of the Stillness and peace with which the Sabbath is always associated on the land. the peaceful Sky the blue and Sun lit waves dancing as it were to Some ethereal music the Swelling Sails Spread to their utmost capacity by the pursuing wind Seemed like Some huge thing of life with its white wings spread in th flight. God Speed her in her onward flight! She bears to distant lands a freight of love to fond and trusting harts who after the wanderers in [other] and foreign lands has often [illegible] the mourners [prayer] oh, how we hope that this mild air may fan
        </p>
        <PageNumber num={174} /><p>brows on which no shadow of grief has fallen that would rob us of our dear joy in that hour of our meeting! So ends these 24 hours
        </p><p>July the 20th, 57.
          These 24th hr [commence] with fresh gales from South East the weather still mild and pleasant How soft is the air that every nerve and pulse are playful with the music of its breath under the line in the region of eternal Summer, dwelling place of the mighty Sun! How glorious is  his home on the pathless Sea the luxuriuant earth his pleasant gifts are ever before us But the Sea grows into calmness the eternal commotion of its coulers their glareing blue melting melting into the heavens over them we cannot but Sigh for the forms of things familiar and beloved the quiet Shade of green young trees the high and glorious mountain the emboured valley the  fields of waving grain with the rich tinge of autumn upon it and The Song of the reaper and husbandman when it is gathered home for the winters Store
        </p><p>Oh cruel was my father that Shut the doors on me and far worse was my mother for plainly She could see for cold cold was the winter night that pierced my heart with cold and far worse was the false young man that Sold his love for gold
        </p><p>Barqe Vernon
        </p>
        <PageNumber num={175} /><p>Thou art gone from my gaze
          Thou art gone from my gaze.
        </p><p>Thou art gone from my gaze like a bautiful dream,
          And I Seek thee in vain by meadow and stream
          Oft I breathe thy dear name to the winds [floating] by
          But thy sweet voice is mute to my bosoms low Sigh. (repeat)
        </p><p>In the Stillness of night, when the stars mildly Shine,
          My Spirit doth fondly hold comunion with thine
          Of the birds in thy bowers, now companions I make
          Every Simple wild flower I prize for thy dear Sake, (repeat)
        </p><p>Thou art gone from my gaze but I will not repine
          Ere long we Shall meet in the home thats now thine
          For I feel thou art near, and wherever I be
          thy [unclear] spirit of love, keeps a watch over me (repeat)
        </p><p>You'll remember me.
        </p><p>When coldness or deceit  shall blight
          The beauty now you prize
          And deem it but a faded light
          That beams within your eyes
          When hollow harts Shall weare a mask
          Twill break your own to see
          In such a moment I but ask
          That you'll remember me
          Then you'll remember
          Then you'll remember
          Then you'll remember me
        </p>
        <PageNumber num={176} /><p>Oh Smile as thou wert want to Smile
        </p><p>Oh, Smile as thou wert want to Smile
          Before thy weight of care,
          Had Crushed thy heart and for a while
          Left only sorrow there.
        </p><p>Some thoughts twere best if we should quell,
          Some impulse to forget
          O’er which should memory cease to dwell
          We may be happy yet. (repeat)
        </p><p>Oh, never name departed days
          Nor vows we whispered then
          Round which too sad a feeling plays
          To trust their tones again!
          Regard their shadows o'er thee cast
          As if we ne’er had met
          And still unmindful of the past
          we may be happy yet.
        </p><p>[Pencil note following song]
          We may / shall we, [illegible] we
        </p><p>[Penned note upper left margin]
          Oh, oh, oh, oh, Bah!
        </p><p>[Pencil note left margin]
          I never [illegible]
          Why [no?]
          Are they [so] painfully dear?
        </p><p>[Penned note left margin]
          Oh, oh, oh,
          how very sensitive!
          Must  be fearfully acute
        </p><p>July the 21st
          this day comences as usual with pleasant gales from South East, I have no incident of importance to note. all hand imployed in various jobs about deck and all posible Sail Set to advantag at 8 P.M. a whale was discovered following the Ship an iron was immediately Procured and a line attached when I Stasioned myself upon the forcastle waiting his aproach after a slight Delay he appeared along Side just forward the fore riging Spouting and Lashing the Sea with his flukes. I threw the iron Strikng him just just abaft his head [which] he no [illegible] a very Strange way of [receiving] his advances and [appreciating] his [gambols]
        </p>
        <PageNumber num={177} /><p>[Penned in the top margin] hands of one of the men
        </p><p>After a furious jerk the line parted in the hands of one of the men Who was foolish enough to hold him without making the end fast, the harpoon and twenty fathoms line falling to the share of the whale while For my Share in the transaction I got my leg broke and my foot jamed while the Seaman had all the skin taken off his hands. Thus ended th affair All parties being pleased except those ingured So ends this day
        </p><p><br />
          July the 22nd
          Comences with fine weather the wind is South east the air is most beautiful and clear every thing appears as pleasant as nature could form it how beautiful is the Sailing in the tropicks no part of the world can be equald to it moderate and the water Smoth Sky clear and no squalls of wind to ingure you, all is pleasant around you if it was not for hard ships indured [in] other climes Oh Sea Oh Sea I would be induced to love The more than ever by Seeing the beautes of a Seamans life in the tropicks This day at twelve we cross the line reluctant wee it leave behind Raine Storms and fays I Sorely dread Eight bells has Struck I must to bed
        </p><p>July 23
          this day commences with fine clear weather wind from South east all hands imployed in various Jobs about decks It is Strange that it has always ocured to me and I [Believe] [prety] generaly to all [illegible] people living north of the line [which] may do bussseness in southern Latitudes that when on [illegible] [illegible] [illegible] [illegible] [illegible] they have crosed it [illegible to end]
        </p>
        <PageNumber num={178} /><p>The very atmosphere Seemes to Breath to us of home Senses have Joys and harts. it to nothing to bee wondred at that the mariner who through their [dreams] [illegible] [as] his arduous profesion Should be compelled to absent himself from the pleasures and innocent [illegible] of his home for the purpose of carying to remote regions of the world the products of another that is not to be Supposed he Should be careless of a return to his beloved ones whom he has left behind him No theare is no class of men to whom a prospect of a Speedy return to that home is more Keenly felt Every energy is put forth to facilitate his vessel each Sail is Spread where may bee of the most benefit to him the advantage of the Slightest wind is taken and sleapeles nights on the Silent Decks tell on his health and can [illegible] how great is his anxiety
        </p><p>July the 24th
          comences with Beautiful weather how Swiftly glides the favorite Barqe her Snowy Sails spread to the winde and her Spars Bending beneath the weight that presses her along
          our long &amp; Lat 5=30 north long 38=50
        </p><p>July the 25th
          commences with cloudy weather and frequent Showers of rain midle part Moderate and cloudy no observation this day wee are now in the doldroms in the tropicks of Canso
          Barometer 30” 1/10 Air 107 &amp; 120 in the Sun water 70.00
          All hands well on board and Imployed in Ships Duty
        </p>
        <PageNumber num={179} /><p>July 26th
          North West Lat 07=00 Long 38=50
          Comences with cloudy weather wind from South West and bafling from that to North East heavy raine Showers at time no obs this day how variable is things of nature as well as that of man two or three days hence the climate was clear and mild Now the air is close and every thing is dull around us raine showers and lightning at night and heavy gusts of wind all is a contrast
        </p><p>July 27th
          commences with cloudy weather wind from South West all hands imployed in Ships duty in various ways these 24 hours wee have made but litle headway midle part is very moderate heavy clouds pasing &amp; a heavy Sea runing from North East all appearences of the North East trades Later part the Same
        </p><p>July 28th
          commences with the wind from the [South] and heavy raine Showers all is dull and Gloomy around the barometer Stands unmoveable the thermometer is one hundred &amp; twenty in the Sun. the air is very close and Sultry How tedeious doth it seem to those whose minds and every thought are far from them and dwelling with loved ones at home Home, what a thought what an impression that thought doth make upon the mind &amp; [illegible] of man
          Lat 10=30 Long 38=40
        </p><p>July the 29th
          commences cloudy as ever commences with fine clear weather wind from north east Baromter 30 2/10 thermometer [80] 2/10 the air is fine and clear all hands imployed in Ship duty about decks
        </p>
        <PageNumber num={180} /><p>July the 30th
          These 24 hours commences with fine clear weath the wind is from north east a fine fresh gale all posible sail sat to advantage Barometer 30 2/10 thermometer 80 5/10 in the Shade  at 8 PM the wind cants more aft Sat fore topmast studing sail and main top galin studing sail crew imployed in cleaning ship and other various jobs about decks wee are now closeing upon the Nothern tropicks How beatuiful are the Brezes floating by while our Swift Bark glides along &amp; plays with and plays as it were with the waves that meet us from all Quarters. the swifter She goes the meryrer are those who long there homes to see. but with me my my home is on the sea a ever was since infantcy In poetry and prose I am [illegible] Thearfore I think [illegible] wroth sufisent
        </p><p>At twilight's pensive lonely hour
          That Sacred hour So dear to me
          In Some Swet grot or wood land bowr
          Ill think of thee
        </p><p>Say if no more in converse sweet
          The blissful hour shall flee
          Say iff no more that we may meet
          with thou rember me
        </p>
        <PageNumber num={181} /><p>Vernon Guyon Locke
        </p><p>Barque "Villeta"
        </p>
        <PageNumber num={182} /><p>There is a trait in the caharecter of every man not naturally vile or dishon[est] the existance or absence of which is an infallible Sign of the tendency of the human heart to good or evil the Love of Home. It is allways associated with pure unsullied feelings [genoruss] [unclear] sweet and holy thoughts [unclear] and virtue with out [unclear] a past without regret a future without fear.
        </p><p>Who has not felt how sadly sweet
          That dream of home that dream of home
          Steals at the heart too soon to fleet
          Whilst far oer land or sea wee roam
          Sun light more soft may oer us fall
          To brighten Shores our bark may come
          But far more bright more dear than all
          That dream of home that dream of home
        </p><p>My first great grief was the death of my parents After that event I was Domesticated at the house of an uncle I cannot remember any of the [circumstances] of my life there without pain and sorrow The unfeelingness and brutetality of those from whom I had a right to expect nothing but Kindness and affection my bleak and unpromiseing boy hood my first impressions of men of life and the world caught up in the few intervals of repose or when my body was bowed down in the vilest drudgery flashed along my young Soul leaving a path behind them like the lightning a burnt lifeless hopeless feeling. Every thing forsated
        </p>
        <PageNumber num={183} /><p>to my gase was a discoulred mass ignoble &amp; [unclear] looking out from my own darkned and misunderstood youth, there was nothing individual no identity in what I saw but such object was mingled and blended into another yet more repulsive. The very sky as it were with its blue heavens and Bright Stars were but another view I took of the earth with its Snow clad hills ice bound rivers and its famishing people. I had never known affetion even at that when it was most needed to shape the man by directing the boy. No one ever smiled at me but in anger and under that very anger I felt no fear, I had fed upon it.
        </p><p>I left that spot then - looked my last upon that bitter earth where I had first known I lived and had drunk my first sweet draught of human affetion from a mother's breast ere it was chilled for ever to me - knowing that it would be many years and perhaps never that I should stand on that same ground again I took my unaccompanied way, unregretted uncared for in to a wide open stareing world.
        </p><p>Fifteen years - long years they were - of toil and anxiety on the sea and the shore - among the cold and heartless money seekers of the world and the rude uneducated refugees from society and the restraints of civilized life - laboring towards that fruition which awaits every deserving man who aspires The uneducated boy of so rough and uprepossesing demeanor had grown into a full man with his powers of mind and heart.
        </p>
        <PageNumber num={184} /><p>Yes fifteen long years had elapsed ere I saw that home again which cruel as it had been to me I often longed to revisit as being the spot of earth though the wildest of that wild coast where I had first felt my being. It was on a return passage from an Italian port. the time was winter and a fierce gale faned the waters into a fury. in passing an island on the North American coast the Ship a beautiful modle as ever ploud blue sea then secure the completion of a voyage the speediest on record being under close reefed topsails hauled by the wind fled before that propeling Storm like a Spirit of those wild waves I, her proud commander, I had triumphed. A high deep feeling took possesion of my Soul and in that hour I could look down with more of regret than anger on those who had poisoned the wellsprings of my youth.
        </p><p>In truth it was a grand Sight to see from that bleak Storm beaten Shore with its wild snow hills behind and its lowring winter sky above. No sign of life in all that Scene but that Stately Ship and her gallant and proud hearts - no human habitation on that savage shore but one snow clad house with icicled eaves. A thin pale smoke was blown from its single chimney into the freezing air. On the poop of that ship as she was rushing on in the light of her foam like some great destiny Stands the boy man with a young sweet wife beside him. There is a tear
        </p>
        <PageNumber num={185} /><p>in his blue eye, but you must not wonder at that in the mans (eye) it is the peace offering from the heart of the boy for that lone house was Home
        </p><p>July 31st
          comenced with cloudy weather wind from South East all possible Sail sat to advantage Men all imployed about decks in various ways
        </p><p>Though there I call yon conscious clouds to witness
          could I persue the bias of my Soul
          all friends all right of parents I'll disclaim
          and those my well wishers shouldst be father
          and mother brother cousin uncle aunt
          and friend to me  -- -- --
        </p><p>August 1st 57
          Lat 26=50 Long 51=44 west
          this day comences with moderate wind and Pleasant weather wind from South east all Hands imployed in various jobs about deck
        </p><p>August 2d
          commences with fine clear weather and wind from South but moderate [unclear] All hands imployed in various jobs and principaly painting Ship.
        </p><p>This bottel's the Sun of our table
          His beams are rosy wine
          Wee, planets that are not able
          Without his help to shine
        </p><p>August the 3d 57
          these 24 hours commences with cloudy weather wind from South east midle part the same all hands imployed in painting Ship and other nessary jobs about deck latter part moderate wind bafling with some raine the weather is very warm and sultry
          Barometer 30 5/10 air 80 5/10 in the Shade [unclear] one hundred in the Sun
          all well on board So [goeth] these twenty four hours.
        </p>
        <PageNumber num={186} /><p>August the 4th 57
          Lat 27=30 Long 53=50
          first part of these twenty four hours has pleasant weather and wind from South east the air is very warm and sultry the the wind is growing very light all hands well on board but three of the [consul's] men they are layed up with veneral diseases, all the the rest of the crew imployed in painting and other Ships duty
        </p><p>August 5th
          Lat 26=30 N, Long 55=33 West
          first part of these twenty four hours has fine weather but very moderate I hope soon to get through these infernal doldrums they are the greatest torment that I know of in a seafaring life, all appears dull around when wee are becalmed especially when eager to make short passages which is a predominant feature in everyone in those day who command ships- - - - -
          We have now crossed the tropicks of cancer and when I call up thoughts of better times under this beautiful clime and the money that I have made in my youth in those latitudes in a very short time i regret that i have not the chance now while i have a fast ship, but why is it that i have ben cut short of this privilege and who by it it is by that vile hypocritical decitful matron England who under the cloak of having freed the grater part of the black race from slavery, has ever ben trying to keep in bondage those of her own race and where has this been proved some might say for proof wee only wish to turn to the History of the world to prove her vile transactions and depredations upon other countries whoever they were if they were weaker than [unclear] and where has Slavery ever ben carried on to such an extent as it is now by that [unclear] nation in puting in bondage the unprotected coolie and [unclear]
        </p>
        <PageNumber num={187} /><p>The dark tombs. Ah they hold worlds and yet how still they are. No voice comes up out of those deep cold cities of the dead to bid us hope or fear. Once they were warm hearted people like our selvs before those sepulchral worms seized upon them. Yes, he died. Bear him away he is dead too true. The affection of friends has no stay upon him now thy tears may not stop those ghostly people in their Silent offices around that dear dead one.
        </p><p>August the 6th 57
          these twenty four hours commences with fine clear weather and I must say to fine for it causes me great great anxiety of mind calms with me is is not a favorite company keeper I can assure you with me it is as with the [boat] the faster She goes the happer are those [who] that pace the deck with me.
          Lat 30=00 Long 60=50 West
          All well on board, so ends &amp;tc
        </p><p>August the 7th
          comences with fine clear weather. hour by hour the time wee feel is ebbing of the few days between us and port The Ship is being painted and all her ropes freshly tared. Every thing that has been used at sea for the prevention of ware to the rigging is being taken off and the Shrouds that here to fore seemed one entire mass of tary canvas and matted oakum are now shining and smart looking while these very nessary though Sertainly very unhandsome provisions against chafing are carefully put by to be resumed on the next voyage when there are no [enqauring] eyes of lands people to see.
          Sertainly it is with Ships as it is costomary with
        </p>
        <PageNumber num={188} /><p>[pencil note in top margin] if you forget
        </p><p>Annie Laurie
          Maxwelton's braes are bonnie
          Where early falls the due
          Twas there that Anny Laurie
          Gave me her promise true
          Which neer forgot shall be
          And for bonnie Annie Laurie
          I'd lay me down and die
        </p><p>Like dew on the gowan lying
          So the fall of her fairy feet
          Like winds in summer sighing
          Her voice is low and sweet
          And deep blue is her eye
          And for bonnie Annie Laurie
          I'd lay me down and die
        </p><p>Her breast is like the snow drift
          Her neck is like the swan,
          Her cheek it is the fairest
          That e'er the Sun shone on
          She is all the world to me
          And for bonie Annie Laurie
          I'd lay me down and die.
        </p><p>Farewell.
          Farewell if ever fondest prayer
          For others' weal availed on high
          Mine shall not all be lost in air
          But waft thy name beyond the Sky.
          Twere vain to speak to weep to sigh
          Oh! more than tears of blood could tell
          When wrung from guilt's expiring eye
          Are in that word, Farewell, Farewell!
        </p>
        <PageNumber num={189} /><p>Men and woman, Othe [precaution] to which I have alluded would never be taken were it not that there is a convention there are connoisseurs in matter... nautical as well as in other things.
        </p><p>August the 8th
          these 24 hours commence with light winds and variable weather with some apearans of rainy weather during the last few days wee have made but little progress, as very close to sultry making us more anxious than wee other wise would be to get on closer to port
          Lat 31=30 Long 60=50
        </p><p>August the 9th 1857
          commences as usual
        </p><p>September 2d
          commences with fine clear weather left Boston at 8 Oclock P.M.  at 12 midnight pased cape ann Lights bound for Bangor Maine midle part moderate and fine weather wind Southwest Later part moderate and fine with moderate breezes from Southwest all sail set Studing Sails low &amp; aloft
        </p><p>Sept 3d
          commences with fine clear weather and wind from Southwest and very pleasant at 8 Oclock P.M. Sighted Seguin Lights Bearing NNE, Dist 20 miles midle past fine pleasant weather Later part the Same all hands well on board
        </p><p>Sept 4th January 26th 1858
          Lat 39=40 00N Long 60=05 00W
          Saw a very large school of sperm whale which is something uncommon in this Latitude &amp; Longitude
        </p><p>[penned sketch of whale in bottom margin]
        </p>
        <PageNumber num={190} /><p>[Blank page]
        </p>
        <PageNumber num={191} /><p>[blank page with splotches and stain]
        </p>
        <PageNumber num={192} /><p>To Augusta [From V. Locke]
        </p><p>In dreams of thee by night and day
          My youth's fond morn passed sweetly on
          I never thought that that dear ray
          Could Sease to shine when thou wert gone
          How could I feel who felt so deep
          Whilest gazing on that heaven above
          That those soft iyes their light could keep,
          Or shining yet could seese to love,
        </p><p>I think of thee and the soft spell
          That played around thy hair of gold
          In vokes the thoughts wee knew so well
          The powers which held our hearts of old
          Twere vain to upbraid the unknowing years
          With all my spirit feels of pain
          If I could weep the pitying tears
          would warn me from those hopes again.
        </p><p>You ask me what the years have brought
          Since by the stream and by the sea
          Or under the fragrant moon we sought
          Companianship with flower and tree
          Remorseless years - oh welcome tomb;
          In thee Id hide me from the past
          And in the Silant dewy gloom
          This heart may find a rest at last
        </p><p>I would not call thee cruel, no,
          I never blamed thee for thy part
          I never named thee to my love
          But allways blessed thee with my heart
          Yet oft from griefs enchantment cold
          Is the fragrant dew along the breast
          Thy memory steals with touch of gold
          And spreads oer all a [heaven] of rest
        </p>
        <PageNumber num={193} /><p>You will remember me
        </p><p>When other lips and other hearts
          Their tales of love shall tell.
          In language whose access imparts,
          The power they feel so well;
          There may perhaps in such s scene
          Some recollection be,
          Of days days that have so happy been
          Will you remember me.
        </p><p>When coldness or death shall slight
          The  beauty now they prize
          And deem it but a faded light
          That bears within your eyes
          When hollow hearts shall wear a mask
          'Twill break your own to see
          In such a moment I'll but ask,
          Will you remember me!
        </p><p>[penned flourish]
        </p><p>[unclear] G. Locke
        </p><p>In the year one thousand eight hundred and sixty two.
        </p>
        <PageNumber num={194} /><p>The  dream is past and with it fled,
          The hopes that once my passions fed
          Are darkly dyed inside  grief and pain,
          Those joys thats gone come not again,
        </p><p>V -- take this drooping flower
          'Twill call to mind our parting  hour,
          This simple plant what'er my lot
          In silence says - forget me not,
          When on the ocean far away
          Or toss'd about in Biscay's bay
          When stormy winds howl round thy cot,
          'Twill tell thy heart "Forget me not."
        </p><p>E'n when 'tis withered think on me
          And many sighs I'll waft to thee
          Though I no more may see that spot
          'Twill tell thy heart "Forget me not"
          And now farewell where-er I flee
          All hopes and joys shall rest on thee
          Ne'er from thy heart my memory blot
          I ask but this "Forget me not."
        </p><p>I will not forget thee,
          Eg
          I can not forget thee
        </p>
        <PageNumber num={195} /><p>Eg [Laurie] Vernon G. Locke [illegible]
          I never can forget the,
          What e'r my fate may be
          In sadness or in joy my heart
          Will ever turn to Thee
          The fond remberence of the past
          May sometimes bring regert
          But till my life shall cease to be
          I never can forget
        </p><p>I never can forget thee
          My destiny is cast
          For as thou art my only friend
          So shall thou be the last
          You say I soon shall cease to think
          That wee have ever met.
          But oh you little know my heart
          to say I can forget
          To Eg
        </p><p>Cape Mount West Coast Africa
          Theadore Canaught
          of [illegible]
          retired Oct 17th/49
        </p><p>At [illegible] river  Oct 20th /59
          On Board Barque Mendin Newyork.
        </p>
        <PageNumber num={196} /><p>Solace of Leisure Hours
        </p><p>Tell me, must I a preface write,
          Or If So what must I Say
          Why, let thy extempore muse indite
          an unpremeditated lay
        </p><p>So let it be, my little book,
          Before thy well crame'd leaves I close
          I'll take of thee another look,
          Then in oblivion thou'lt repose
        </p><p>For I  hope none reads the but a friend
          Or one thatis parcial to the author
          For the rough spun rhymes that I have penn'd
          If hes a critic he will bother
        </p><p>For thou wert wrote for my own pleasure
          The poesy that thy sheets contain
          though without merit without measure
          All amonated from my brain
        </p><p>Compiled 'twas cheifly when at Sea
          I kept my lone night watch on deck
          When no dear friend was near to me
          None on my musing moods to break
        </p><p>This is the preface I will write
          I'll not abridge, amend, or lenthen,
          None of my works, if wrong or right,
          No one shall my adherence Strenthen
        </p><p>Vernon G Locke
        </p>
        <PageNumber num={197} /><p>Impromptu
        </p><p>All hail inexorable fate
          come disapointment down.
          I'll bid defiance to thy hate
          nor quail beneath thy frown
        </p><p>Though Stern adversity
          Assail my wayward path,
          And Showers of bitterest hate on me
          her fierce vindictive wrath
        </p><p>Though on my head decend
          misfortunes fast anew
          They may awhile my Spirit bend
          yet nere Shall it subdue
        </p><p>For while Im young and Strong
          Despondency I'll Spurn
          nor will I tamely Suffer wrong
          nor yet at Suffering mourn
        </p><p>Nor with impunity
          My heart can nere submit
          To Scorn which claims immunity
          From rank to pass for wit
        </p><p>Nor will I passive hear
          The contumely and scorn
          Envy's contentious bitter Sneer
          Is not so lightly borne
        </p><p>If with Ironic verse
          I should stir up my Muse
          Infectiv[e]s just, but apt and terse
          She knows well how to use
        </p><p>If thus I vent my Spleen
          or give place to my ire
          In Strain Satiric, cutting keen
          Il sweep my indignant lyre.
        </p><p>V G L o c k e
        </p>
        <PageNumber num={198} /><p>When on the aggressors' pate
          Should I in fury dash
          My contempt and retaiate
          They'd shrink beneath the lash
          But hold my agrieved Soul
          Thy rage awhile forbear,
          Calmly thy passions now [control]
          Time will Show things more clear
          - - - - - - - - - - - - - - - - - - - - - - - -
        </p><p>When dreadful carthage frighted [Roam] with arms
          and all the world was Shook with fierce alarms
          Whilst undecided yet which part Should fall
          Which nation rise the glorious lord of all
          - - - - - - - - - - - - - - - - - - - - - - - -
        </p><p>In taking revenge of an injury a man is only even with his enemy; by passing it over he is Superior
          - - - - - - - - - - - - - - - - - - - - - - - -
        </p>
        <PageNumber num={199} /><p>Lines Composed of the Isle of fernandipo
        </p><p>Fernandipo fare well! I now behold
          Thy cloud capt mountains in the distant sky
          Thy rock bound shores fast receding—
          Farewell to the - than when I first drew near
          Thy dreadful coast—thou pestilensial Isle
          ‘Tis with more joyous feelings I now say
          Adue to the, - than when I first drew near
          Fare well to the thou dim and distant Isle
          For nurtured in the Stormy regions of the north
          Of the cold yet healty north and reared be
          neath the Skys salubrious of fair [illegible]
          clime twas with mixed feelings of
          Suspense and dread
          I sought at dutys call, thy baleful strand
          And as our bark approached thy rockbound coast
          And I with wonder and amaze beheld
          Thy high blue mountains, pile on pile up soar
          Far above the clouds, even midway unto heaven
          Thay seme'd so like my native mountain scenes
          That my fond heart dilating at the sight,
          Expiatiating on the landscape bold
          I gased with rapture on thy rude wild scenery
        </p><p>While every fitful breeze which faned our sail
          Wafts from thy ary shore upon its wings
          an odiferous fume a sweet balm
          freight with scented odor from those woods
          Where nature with unwanted culture rears
          Trees and shrubs and bushes wild
          Where tropic fruits of most delisious tase
          And wild flowers vegitate of sweetest smell
          And where the richest boon that e'er was given
          To torid climes by man most-highly prized
          Refreshing watters cool, palucid, clear
        </p><p>In ample streams from mountain torents cool
          Now rushing on between the steep defiles
          Of mountain glen now are the craggy steeps
          Driving before in its resistles course
          Gigantic pieces of the ponderous rocke
        </p><p>Vernon G. G. Locke
        </p>
        <PageNumber num={200} /><p>[penned upper left corner] Lines
          [noted upper right corner] to think I [illegible]
          [penned top center] Lines composed on passing [ascension]
        </p><p>Lines composed on passin[g] of assension
          [illegible] of never seasing flow of [illegible] [illegible]
          From its first [illegible] lot, and onward [illegible] [illegible]
        </p><p>Till o're the presspice, with furious rush
          and force torific, the wild catarac hurls
          It down with sheeted foam the dark abyss
          Where boiling watters toss and foam below,
          and now with gentle fall, the soft cascade
          is heard to murmur in the forests depths
          While tropic birds of varigaeted hues -
          And beautious plumage swell with sweetest song
          The untiring medody of the tuneful woods
          My weary eyes, sick of the dull monotony,
          the onweared sameness of a lenthened voyage
          Tired and oft gasing on the [waste] of watters
          the trackless space, through which our journey lay
          of ocean fast dark unfathomable black
          for long and tedious was our outward voyage
          and while I sought with anxious heart for chang
          The every day monotinus routine
          Which clogs the wheels of time while out at Sea
          No green spot there to rest my weried [eyes]
          No Zarah in the wilderness of waters
          No wonder then, I felt a secret thrill
          of rapture and delight when first beheld
          Thy bold blue hills loom in the far distance
          Oer the calm bosom of the torid sea
          I scarce could deem the[e] then fernandipo
          To all what thou alas most truly art -
          the white mans grave the dreadful cemetry
          And burial place of many a daring heart
          Tho cool and calmy the soft zephirs seem
          When wafted from thy shores yet on their wings
          are borne the noxous vapours, erst [illegible]
          From africks swampy shores the never failing bane
          Of many a europaen constution
          and though my fears had picturedthis Isle
          where dire contatgun pestilence and death
          reign oer thy land with fell and drelded sway
          yet these forebodings could not long detur
          My longing feet whose longing [steps] had been confined
        </p>
        <PageNumber num={201} /><p>the Island of fernandipo
          [penned below title] The Island of Fernande Po
        </p><p>My longing feet whose steps had been confined
          For there long months within the narrow space
          the of[t] trod limits of the vessels deck
          from wondering o'er thy wild luxurent soil
          where nature throws spontaniously around
          her sweetest oddours and her gayest hues
          So like the long caged bird at last let free
          Soars into [ether] and with gladness tries
          Its airy flight with pinion enfeanchised
          So thus my steps elastick, once more trod
          and joyous prese'd terefurmius [verdent] sod
        </p><p>[penned between lines] [illegible] heaved a sigh
        </p><p>Fernandipo fare thee well in health &amp; [strength]
          I leave thy fated shores and though mine Iye
          beholds no more thy bold majestic hills
          Still heavenward towering yet I shall remmember
          The social kindness and the hospitality
          Granted unsought for  by the friendly few
          Who thus despite thy hot unhea[lt]hy clime
          Are denizens of thy sickly isle become.
        </p><p>Fare well fernandopo our course wee steer
          for one more ocean Isle lone waste and drear
          Which in mid ocean rears its ruged pile
          Ti's far assensions Solitary Isle
          for it our path wee trace o'er torid seas
          onwards impelled by the percevied breeze
          and when our bark shall there in safty come
          on that lone rock shall be my future home
          There for a space remain exiled from all
          Those tender ties memory of shall recall
        </p><p>Vernon Guyon Locke
        </p><p>[penned at right of page] Guyon V. G. Locke
        </p><p>Longitude [twenty] there West
          Lat 00.00 Boiling on the Equator
        </p>
        <PageNumber num={202} /><p>How hard the Sailor's cheerliss Lot
          Who long afar must roam
          From joys which fond affection sought
          Embosemed in his home
        </p><p>Estranged from those endearing ties
          Which man delights to prove
          Exiled from all the social joys
          Of friendship home and love
        </p><p>While pacing lone the watchful deck
          His thronging fancies swell
          Retracing oft those pleasures back
          Where memory loves to dwell
        </p><p>Oer crowding thoughts then intervene
          Of joys for ever flown
          Depicting all those hapier scenes
          Of days thats long by gone
        </p><p>Though then by emotions wrought
          Grief may pervade his breast
          Yet still each sad and pensive thought
          By memory is caresed
        </p><p>For then his silent griefs to soothe
          To chase sad sorows tear
          he sings his songs of love and youth
          Songs to remembrance dear
        </p><p>Recalling scenes left far behind
          Of home youth love and bliss
          This all the comfort he doth find
          His only solace this
        </p><p>O pity then the sailors fate
          When far hes severed from
          the joys  you [may] partisipate
          Of friendship love and home
        </p><p>[penned flourish in bottom margin]
        </p>
        <PageNumber num={203} /><p>Lunar Distance Sun &amp; Moon
        </p><p>[AW - we need to figure out how best to handle this page. MD]
        </p>
        <PageNumber num={204} /><p>I wander - it matters not where
          No clime  can restore me my peace
          Or snatch from the crown of despair
          A perishing - a fleeting release
        </p><p>The stork on the perishing wall
          Is better and happier than I,
          Content in his ivy-built home
          He hangs out his home in the sky.
        </p><p>But houseless and friendless/heartless I rove
          My bosom all bared to the wind
          The victim of pride and of love
          I seek, but 'oh! where can I find!
        </p><p>I seek what no bribes can bestow
          I ask what no clime can impart
          A charm which can neutralize woe
          And dry up the tears of the heart
        </p><p>I ask it - I seek it in vain
          From Ind to the northermost pole
          Unheeded unpitied complain
          And pour out the grief of my soul
        </p><p>[bottom of page torn out]
        </p>
        <PageNumber num={205} /><p>To ---
        </p><p>Celestial sounds!
          Peace dawns upon my soul
          and every pain grows less
          O gentle Vernon!
        </p><p>Had I but earlier known
          thee. Thou excellent young
          man. We had been happier both.
          But now 'tis too late and yet my
          eyes take pleasure to behold thee
          Thou art their last dear object!
          Mercy! Heaven!
        </p><p>[penned flourish]
        </p><p>When the shades of night have spread their veil over the plains, the firmament manifests to our view its grandeur and its riches. The sparkling points with which it is studded, are so many Suns suspended by the Almighty in the immensity of space for the worlds which roll around them.
        </p><p>“The Heavens declare the glory of God and the firmament showeth forth his handy work."
        </p>
        <PageNumber num={206} /><p>Ever of Thee
          Ever of Thee fondly I'm dreaming
          Thy gentle voice my spirit can cheer
          Thou
        </p><p>I wander it matters not where
          No clime can restore me my peace,
          Or snatch from this crown of despair
          A perishing - a fleeting release.
        </p><p>The stork on the perishing wall
          Is better and happier than I.
          Content in his ivy-built home
          He hangs out his home in the sky.
        </p><p>But houseless and heartless I rove,
          My bosom all bared to the wind
          The victim of pride and of woe
          I seek but Oh! where can I find
        </p><p>I seek what no bribes can bestow
          I ask what no clime can impart
          A charm which can neutralize woe
          And dry up the tears of the heart.
        </p><p>I ask it I seek it in vain
          From far to the northernmost pole
          Unheeded - unpitied complain
          And pour out the grief of my soul
        </p>
        <PageNumber num={207} /><p>Alice Ben Bolt
        </p><p>O don't you remember sweet Alice Ben Bolt
          Sweet Alice with hair so brown
          She wept with delight when you gave her a smile
          And trembled with fear at your frown
          In the old church yard, in the valley Ben Bolt
          In a corner obscure and alone,
          They have fitted a slab of granite so grey
          And sweet Alice lies under the stone.
        </p><p>The last two lines repeated
        </p><p>O don't you remember the wood Bent Bolt
          'Neath the green sunny slope of the hill
          Where oft we have sat neath its wild spreading shades
          And kept time to the click of the mill
          The mill has gone to decay Ben Bolt,
          And a quiet now reigns all around
          See the old rustic porch with its roses so sweet
          Lies scattered and mouldering on the ground
        </p><p>[Lee] the [illegible]
        </p><p>O dont you remember the school Ben Bolt
          And the master so kind and so true
          And the little nook by the clear running brook
          Where we gathered the flowers as they grew
          O'er the master's grave grows the grass Ben Bolt
          And the once pearly brook is now dry
          Whilst of all the gay throng who were school mates then
          Their remains only you Ben and I.
        </p><p>V G Locke
        </p>
        <PageNumber num={208} /><p>Ever of Thee. To __________
        </p><p>Ever of thee fondly I'm dreaming,
          They gentle voice my Spirit can cheer,
          Thou art the Star that mildly beaming
          Shone on my path when all was dark and drear;
          Still in my heart thy form I cherish,
          Every kind thought like a bird flies to thee,
          Ah! never till life and memory perish
          Can I forget how dear thou art to me,
          Morn, noon, and night, where'er I may be,
          Fondly I'm dreaming ever of thee.
        </p><p>Ever of thee when sad and lonely
          Wandering afar my soul joy'd to dwell,
          Ah then I felt I loved thee only,
          All seemed to fade before affections spell,
          Years have not chilled the love I cherish,
          True as the stars hath my heart been to thee
          Ah never till life and memory perish
          Can I forget how dear thou art to me,
          Morn, noon and night where'er I may be
          Fondly I'm dreaming ever of thee.
        </p><p>Vernon G. Locke
        </p><p>I think I think of her love
          When I am forced to roam
          My thoughts will turn to her love,
          As the wanderer to his home.
          As the flowers blooming spring love
          And the roses shed perfume
          My heart will turn to [her] love
          Where'er thou may'st roam.
        </p><p>[illegible] V. G. Locke
          [illegible]
        </p>
        <PageNumber num={209} /><p>The Minute Gun at Sea
        </p><p>Let him who sighs in sadness here
          Rejoice and know a friend is near.
        </p><p>What heavenly sounds are those I hear
          What being comes this gloom to cheer?
        </p><p>When in a storm on Albion's coast,
          The night watch guards his weary post,
          From thoughts of danger free
          He marks some vessel's dusky form
          And hears amid the howling storm,
          The minute gun at sea
        </p><p>Swift from the shore a hardy few,
          The life boat mann'd with a gallant gallant crew,
          And dares the dangerous wave -
          Through the wild serf they plough their way
          Lost in the foam nor no dismay
          For they go the crew to save
        </p><p>Chorus,
          Then O what rapture fills each breast
          Of the hopeless crew in the ship's distress
          Then landed safe what joys to tell
          Of all the dangers that befel;
        </p><p>Then is heard no more
          By the watch on the shore
          The minute gun at sea.
        </p>
        <PageNumber num={210} /><p>To ---
        </p><p>A place in thy memory dearest
          Is all that I may claim
          Then pause and look back when thou hearest
          The sound of my name.
        </p><p>Another may woo me dearer
          Another may woo and not win
          But I care not for all their endeavou[r]
          If I am but remembered by thee;
        </p><p>[penned flourish]
        </p><p>Let not a cold frown gather
          O'er that placid brow of thine
          Think not harshly of the future
          Thou art, and must be ever mine
        </p><p>[penned flourish]
        </p><p>When sailing on the trackless ocean
          Give one thought of her you leave,
          In a country far and lonely
          Who can ne'er but think of thee.
        </p><p>[penned flourish]
        </p>
        <PageNumber num={211} /><p>The quality of mercy
        </p><p>The quality of mercy is not strained;
          It droppeth as the gentle rain from heaven
          Upon the place beneath. It is twice bless'd
          It blesseth him that gives, and him that takes.
          'Tis mightiest, in the mightiest; I[t] becomes
          The throned monarch better than his crown.
          His sceptre shows the force of temporal power,
          The attribute to awe and majesty,
          Wherin doth sit the dread and fear of kings
          It is an attribute to God himself,
          And earthly power doth then show likest God's,
          When mercy seasons justice. Therefore, Jew,
          Though justice by thy plea, consider this, -
          That, in the course of justice, none of us
          should see salvation: we do pray for mercy;
          And that same prayer doth teach us all
          to render. The deeds of mercy, I have spoke
          thus much to mitigate the Justice of thy plea;
          Which if thou follow this strict court of Venice
          Must needs give sentence 'gainst the merchant there.
        </p><p>Merchant of Venice
        </p><p>To cherish in my native bower,
          To gather round my cot
          I cultivate a little flower
          They call "Forget me not".
        </p><p>Who can school the heart's affections
          Who can banish its regrets
          If you blame my deep dejection
          Teach O teach me to forget.
        </p>
        <PageNumber num={212} /><p>Why did my Sarah sell me
        </p><p>1
          For me life has no pleasure
          My heart has lost its treasure
          It grieves me beyond measure
          To weep away my years
          I ought not to surrender
          My heart is won't suspen-der
          It is so confounded tender
          I refuge take in tears
        </p><p>Chorus
          O o-o why did my Sarah sell me,
          Why did she not frankly tell me
          It was her intention to sell me
          And cause me for to pine
        </p><p>2
          I'm sorry that I met her
          Some how I can't forget her
          I'll write her such a letter
          As she will not digest
          I've danced and paid the piper,
          And this my reason's [riper]
          Yet still I loves the viper
          She reigns still in this breast
        </p><p>Chorus as above
        </p><p>3
          I'm sure I never [piqud] her,
          Nor once did contradict her
          E'en now I wears her picture,
          This wretched breast within,
          My heart is almost sinking
          As late I have been thinking
          As how I'd take to drinking
          And drown my grief in gin.
        </p><p>Chorus
        </p>
        <PageNumber num={213} /><p>Duett
          What are the wild waves saying
        </p><p>What are the wild waves saying,
          Sister the whole day long;
          That when ever amid our playing
          We hear but their low low song
          Not by the sea side only,
          Then it sounds wild and free
          But at night when tis dark and lonely,
          In dreams it still with me.
          Sister
          Brother, I hear no singing,
          Tis but the rolling wave,
          Ever its low coast wading
          Ever some ocean gay—
          Tis but the wise of waters
          Dashing against the shore
          And the wind from some bleaken  quarter
          Mingling with its roar.
          Chorus
          No, no, no, no , no, no, no
          it something greater        X
          Bro
          Yes but the waves seem ever
          Singing that such same song;
          And vain is my weak endeavor
          To guess what the serges sing.
          What are those waves repeating
          Ever by night and by day,
          Is it some friendly greeting
          As a warning that calls away.
          Sister
          Brother the inland mountains
          Hath it not voice and song
          Speaks not this rippling fountain
          As it bedews the ground!
          Een by the household ingle
          Curtained enclosed and warm
          To wit our voices mingle
          With those of a distant storm
          Chorus
          Yes, yes, yes, yes, yes, yes, yes, if something greater
          Which speaks to the heart alone     X
          Tis the voice of the great creator
          Swells in that might tone.
        </p><p>The same chorus at
          the end of the sister’s
          first and wes to her brother
          as the bottom only
          substitute no for yes at
          the commencement
          [Comment: you really need to add the spin feature that LVA has on its transcription
          pages]
        </p>
        <PageNumber num={214} /><PageNumber num={215} /><PageNumber num={216} /><p>To V. G. L---
          [penned flourish]
          When night came o'er the sea
          [Meek] quiet, and the heart of Heaven
          With love grew breathless, thou were wont to raise
          My wild thoughts to the [weird] and solemn stars;
          Tell of each [unclear] the courses and the name;
          And of the winds, the clouds the invisible air
          Make eloquent discourse, - until methought
          thou wert something divine.
        </p><p>Northern Star
        </p><p>How bright and lucid are thy rays
          Thou glittering northern star.
          Shine on in brightness for this gaze
          He watches thee from far.
        </p><p>Sun, moon, and star each in its turn
          He study's with delight,
          And labours strongly to perform
          Their courses day and night.
        </p><p>[penned flourish]
        </p><p>[Unclear]. to V.G. Locke,
          April 7/59 - Valitta
          [Unclearl]
        </p>
        <PageNumber num={217} /><p>Cases soaps 164 [illegible]
          15 cases Stasionary 6 Boxes Lamps
          400 Keg powder [illegible] one case [illegible]
          1 case Dry goods
          2 Do Books  3 cases hard ware
          one Box Lamps / one of ink
          one package umbrelas Two of Brooms
          one Doz Pails / one bbl molasses
          Two Barels Beens  3 barls flour
          4 bbls pork 7 Bbls Mackrel
          one box candles one one Soap one Tea
          one Tub Butter 2 bbls flower one Pork
          one Mackrel one Barel Sugar one Beef
          one flour one Mackrel one of Shoulders
          one Keg of honey one of venigar
          2 Boxes candles one Tea one Stationary
          one Private Stores one case hardware
          one case P E [Mision] [illegible] one one case
          carbon oile one barel Molasses one graham
          Meal one hams one Lard one bbl [illegible]
          one case Lamps 2 bbls flour 3 Pork
          3 Beef 3 Mackrel one cask hardware
          one case Do 2 boxes Soap
          one Dry goods 2 packs pipes one pails
          2 bbls Mackrel 2 of pork 10 kegs nails
          2 Kegs White Lead 5 keg paint
          one case turpentine one green paint
          3 Stationary one case hardware
          one Dry goods seven boxes [Soap]
          one candles one Do [illegible] glass
          one Do Lamps four packets pipes
          2 Doz Pails one bbl oile 8 of Beef
          2 bbls Pork 10 Ten bbls Mackrel
          / one Hogs Tobacco / one Barl Pork
          one flour one case hardware one [illegible]
          one cask sugar one Box Soap
          one pack pipes one keg gunpowder
          [B K] James 10 bls 1 hogs 11 boxes 3 Bales
          [illegible] one Bag four kegs 7 Bbl 3 Boxes
          6 Bbls 1 cask 3 Boxes / one Tub butter 7 bbs 3 Boxes
          / one package / one Tin Box / one Wood
          2 Trunks / Hogs Tobacco 3 cases [furniture]
          / one case Books 3 Boxes glass
        </p>
        <PageNumber num={218} /><p>[many of these names are guesses]
          One box Trond G Gibbons
          Mark and Purcel Do
          2 boxes [illegible] James E [illegible]
          2 cases H H Mesenger
          One case and several trunks Trumeria T Martin
          One bbl heir hats Marked president Benson
          One case Iron beadstead
          2 packages matrases
          One case Books
          12 Doz
          One copying press
          2 Boxes
          One Bundle Bronzes
          2 pack [illegible]
          2 bbls mackerel
          2 kegs Butter
          / one hogs tobacco / one box of tools /
          one bundl sheet iron / [illegible]
          one box [illegible]
          one mat castings
          5 five bbls flaws 10 ten bbls mess beef
          10 barrls pork
          8 barels molasses
          3 bbls sun [illegible]
          2 bags coffee
          30 boxes hering
          three boxes Tea
          10 one bbl [illegible] /
          64 [or 164] emty bbls
          one case dry goods
          5 kegs butter
          /23 [or 123] kegs Bowelrs
          one sugar mill
          / one hd tobacco
          one [illegible] bacon
          one cask codfish
          one cask dry goods
          one DO hats
          one DO sumples
          / one box candles
          one loup
          one tub butter
          One [illegible]
          ones greenes /
          1/1 bbs sugar
        </p>
        <pre>1 ½ bb salt
        </pre>
        <p>One half bbl madriel
          one [illegible]
          one case crockery
          one looking glass
        </p>
        <PageNumber num={219} /><p>Sweet flower, with flowers I strew thy bridal bed
          Sweet Lamb, That in thy circuit dost contain
          The perfect Model of Eternity;
          Fair Judy, That with angels dost remain
          Accept this favour at my hands;
          That living honoured The[e], And being dead,
          With funeral praises do adorn thy tomb
        </p><p>Dark the halls and cold the feast
          Gone the bride maids gone the priest
          All is over all is done
          [illegible] of yesterday are one
          Blooming girl and manhood gray
          [illegible] in the arms of May.
        </p><p>Hushed within and hushed without
          Dancing feet and restless shout
          [illegible] the bonfire on the hill
          All is dark and all is still
          Save the starlight save the breeze
          Moaning through the grave yard trees.
          And the great sea waves below
          Pulse of the midnight beating slow.
        </p><p>From the brief dream of a bride
          She hath warnd at his side
          With half [uttered shreek?] there and start
          feels not she his beating heart
          and the pressure of his arm
          and his breathing near and warm
        </p><p>Lightly from the bridel bed
          Springs that fair disheveled head
          and a feeling new intence
          half of shame half innocence
          harden fear and wonder speaks
          through her lips and changing cheeks
        </p>
        <PageNumber num={220} /><p>From the oaken mantil glowing
          faintest light the lamp is throwing
          on the mirrors antique mould
          high backed chair and wainscot old
          and through faded curtains stealing
          his dark sleeping face revealing
        </p><p>Listless lies the strong man there
          Silver streaked his care les hair
          Lips of love have left no trace
          On that hard and hauty face
          And that foreheads knitted thought
          Loves soft hand had not wrought
          “Yet she” she sighs” he loves me well
          more than these calm lips can tell
          Stooping to my lowly state
          he hath made me rich and great
          and I bless him though he bee
          hard and stern to all save me
        </p><p>While she speaketh fals the light
          oer her fingers small and white
          gold and gem and costly ring
          [doth?] the third lustre fling
          Loves selectest gifts and care
          his proud hand had fastned there
          Greatfully the marks the glow
          from those tapering lines of snow
          fondly oer the sleeper bending
          his black hair with golden blending
          in her soft and light caress
          cheek and lip together press
        </p>
        <PageNumber num={221} /><p>[Ha?] That start of horror – Why-
          That wild stare and wilder cry
          full of teror, full of pain
          Is there madness in her brain
          hark that grasping horse and low
          Spare me spare me let me go.
        </p><p><br />
          God have mercy – Icy cold
          Spectral hands her own inclose
          drawing silently from them
          Loves fair gifts of gold and gem
          Waken Save me Still as death
          At her side he slumbereth
        </p><p>Ring and braclet all are gone
          And that ice cold hand with drawn
          But she hears a murmur low
          full of sweetness full of woe
          half a sigh and half a moan
          fear not give the dead her own”
        </p><p>Ah! The dead wifes voice she knows
          That cold hand whose pressure froze
          Once in warmest life had borne
          Gem and band her own had worn
          Wake He Wake He low, his ies
          open with a dull surprise
        </p><p>In his arms the strong man folds her
          closer to his breast he holds her
          Trembling limbs his own are meeting
          and he feels her heart  [illegible] beeting
          nay my dearest – why this fear
          hush she saith the dead is here
        </p><p><br />
          “Nay a dream an idle dream”
          But before the lamps pale gleam
          Tremblingly her hand she [eaises?]
          there no more the dimond blazes
          Clasp of perl or ring of gold
          “Ah He sighs, her hand was cold
        </p>
        <PageNumber num={222} /><p>Broken words of chere he saith
          But his dark lip quivereth
          And as oer the past he thinketh
          from his young wifes arms he shrinketh
          Can those soft arms round him lay
          underneath his dead wifes iye
          She her fair young head can rest
          soothed and childlike on his breast
          And in trustful innocence
          drew new strength and courage thence
          he the proud man feels within
          but the cowardice of sin
          She can murmer in her thought
          Simple prairs her mother taught
          And his blessed angel call
          Whose great love is over all
          he alone in praeryless pride
          meets the dark past by her side
        </p><p>One  who living shrank with dread
          from his look or word or dread
          unto whom her early grave
          was as fredom to the slave
          moves him at this midnight hour
          with the deads uncontious power
        </p><p>Ah the dead the unforgot
          from their solemn homes of thought
          darkly over foe and friend
          or in love or sad rebuke
          Back upon the living look,
        </p><p>And the tenderest ones and weakest
          Who their wrongs have born the meakest
          Lifting from those dark stil places
          Sweet and full remembered faces
          Oer the guilty hearts behind
          An unwitting triumph find
          Composed laying at anchor
          at Cape Mount West Coast Africa
          July 20th 1859 [by?] V. G. Locke of Barqe Valetta
        </p>
        <PageNumber num={223} /><p>August 1859
          Liberia West Coast Africa
          Bark Mendi laying to anchor
          at Cape Palmas August 25th
          On the 24th of May left New York
          in America for the west coast Africa
          on the 10 day of July arrived at
          Cape Mount West Coast Africa
          July 11th arived at Monrovia
          West Coast Africa July 24th left
          Cape Mesurada for Cape Mount
          July the 27th left Cape Mount
          for Monrovia again
          July 28th came to anchor at Do
          August the 5th /59 left Monrovia
          for Junk Port W C.A.
          Arived at Do on the 6th
          August [7?] th/59 left Junk for
          Little Bassa WCA
          Left Little Bassa August 12th 1859
          for Grand Bassa West C. A
          Arived at DO August 12 at night
          August 16 th left Grand Bassa
          for Port Lino at which we
          arived on the 17th August
          Left Lino W.C.A. August 20th/59
          and arived at Cape Cape Palms
          August 21st 1859
          August 25th 1859
          Last night I was in New York
          My wife was dead no one knew
          where she had bene taken
          I mourned her loss with grief
          and in that deepest of grief
          I had no friend to console me
          but awoke in the morning and
          found it was but a troublesome dreame
          Ah Dear Long that dream I fear
          is too true I fear if your not lost to the
          [heaven?] world you are to me
          V.G.L.
          [in pencil] Vernon G Locke and other faint marks
        </p>
        <PageNumber num={224} /><p>Cape Palmas West Coast Africa
          August 26/59
          This morning I awok with
          the sound of the  crew mans song
          wild and desolate as it was in its
          nature there was I [illegible] in that
          sound that [reminded?] me of sounds
          holy and [un?] which [rang?] in my
          Ears many months previous. So parting
          with those sounds of Love lines which
          I trust awaits the return of the wanderer
          methinks I see her now, the angel
          of my thoughts, awaits my greeting
          The high fore head, the least inclining
          with expressive thoughts her ies oerflow
          with cristal light worth more to thee
          than all the worth of Africa gold
        </p><p>Thee Birth day Jem
          [illegible] Vernon Guyon Locke  [of the Chesapeake Affair?]
          who was born the 11th
          of August 1830 The meaning
          He went away again the
          Second time and prayed
          Saying O my father if this
          cup may not pass away from
          me except I drink it
          Thy will be done
        </p><p>The reason that I hate
          this Jem in particular  and
          beside I write the cause
        </p><p>Amont the many impressive
          remarks reserved in my mind
          which is the better part of my
          education in a ched up at
          Entervails in the buisy [illegible]
          of the day and in the
          the lonesome watch at
        </p>
        <PageNumber num={225} /><p>[top margin]    And with          refined
          While mingling with the refined
          and the rude wh[i]ch is the lot of the
          sailor boy who is the only one a sailor
          deserveing that name who rules true
          who rules the ship       is [illegible]
        </p>
        <pre>                                    passage [in a different hand]
        </pre>
        <p>It was on a returned passage
          from an Indian port that I
          herd the most solem remark
          that ever [?anchd] my heart
          from a father and captain who
          lost his son while at sea
          by a fevour, he being about
          nineteen years of age the
          captain going in to the
          cabin found his son dead
          the father immeadiately rose up
          first looking upon his child
          and then lifting his ies to
          heaven whilst the tears ran
          down his cheeks only said
          Thy will be done
          [in a different hand] They will be done, done
          [continues in a different hand]
          Left [ahip?] Watson August 11th
          Arrived in Norfolk 16th arrived in Charleston
          on the 14th Sept/61  On board Nashville Octr
          1st/1861. Advance up to November 1st/61
          Ship Watson came as hose October 18th
        </p>
        <PageNumber num={226} /><p>Laying at anchor in [illegible] roads
          West coast africa
          Sept. 10th 1859 composed by V.G Locke
        </p><p>The Morn in dark t he rain comes down
          The Souls Beneath See not its froun
          But heave about in Idleness
          They See not they heed not the day
          But gaping in Blindness Seek out the way
          To Late tis the close of night
        </p><p>Beneath that cloud that hovers oer
          For us and Sin he passes oer
          on us with Shame he frowns
        </p><p>To clear the air of dust and Sin
          Simpathising with those that is with in
          That mist of [dieing] people
        </p><p>That morning cloud has gone
          And the past has with it flown
          And left me with clear Noon
        </p><p>Africa with all her golden Jem
          her Sons they are but Slaves to men
          and never will be free
        </p><p>I have seen thy beauties all
          The mountains and the vale
          and the [febours] Trail
        </p><p>all hail sweet departure [illegible]
          From africas cruel  Shore to [illegible]
          Where Misery want and wo
        </p><p>White man Set your sail and flee
          Toward that Land of Liberty
          The Land of the free
        </p><p>Vernon Guyon Locke
        </p>
        <PageNumber num={227} /><p>Alnwick Castle Home of the Percy’s
          Home of the Percy high born race,
          Home of their beautiful and brave
          alike their birth and burial place
          Their cradle and their grave!
        </p><p>Still sternly oer the castle gate
          Their houses lions stands in state
          As is his proud departed hours
          And warriors frown in stone on high
          And feudal banners “[flock?] the sky
          above his princely towers.
          Gaze on the abbey’s ruined pile
          [?oes] not the succoring [ iy?] keeping
          Her watch around if seem to smile
          As oer a lord one sleeping
          One solitary turret – pray
          Still less, in melancholy story
          the legend of the Cheviot day
          The Percy’s proudest [border?] story
        </p><p>That day its roofs was triumph arch
          Then ran from aisle to pictured dome
          the light-step of the soldiers march
          The music of the trump and drum
          and babe and sire, the old the young,
          welcomed the warrior home.
          Wise with the lore of centuries,
          what tales if there be ”[illegible] in trees”,
          Those giant oaks could tell,
          Tales of the Peasant and the Peer,
          Tales of the bridal and the bier
          The welcome and farewell
          since on their boughs the startled bird
          First in her twilight slumbers, heard
          The Norman curfew bell.
          I wandered through the lofty halls
          Trod by the Percy’s of old fame
          and traced upon the chapel walls
        </p>
        <PageNumber num={228} /><p>Each high and heroic name
          For him who once his standard set
          Where now o'er mosque and minaret,
          Glitter the sultan's crescent moons,
          To him who when a younger son
          Fought for King George in Lexington
          A Major of Dragoons.
        </p><p>Written by a Percy.
          [penned flourish]
        </p><p>Oh, when wilt thou return
          To greet thy own once more
          To dwell for ever [unclear]
        </p>
        <PageNumber num={229} /><p>My travels from the year 1846 to 1862.
        </p><p>Left England for the Cape of Good Hope South Africa Landed in Cape Town January 7, 1847. Left at the end of the month for Algoa Bay. and made stay of six months.  went on to Sidbury Park - half distance to Grahamstown, the eastern frontier capital, where I had the pleasure of being shut up in a church in Sidbury on account of the Caffies breaking out in a rebellion, after a month of this seclusion I resumed my journey to Grahamstown, spent a few weeks, returned to Sidbury, remained 3 months, then made up my mind to travel through the Interior as far as Port Natal. Left Sidbury again proceeded to Grahams Town, and got ready. being conveyed in an immense wagon with 14 oxen attached to draw it, laid in some provisions and procured a map of the country and departed. crossed a mountainous country infested with wolves, Jackalls, wild dogs monkeys  and antelopes. reached Cradock, a town 500 miles from Grahamstown, composed mostly of Dutch and Hottentots. put in a fresh supply; crossed the Fish river, a very deep, stong current winding river. went down a fearful steep bank to go through and came out with a very steep ascent. we crossed this river nine times before reaching the next town called Burghers dorp, a distance of 600 miles the country being a continuos plain for miles and verry arrid. now and then would sight an almost isolated Dutch Farm house, where we gave our oxen a rest, and regale ourselves with Fruit, milk and other little things. providing the parties did not bear too much [aversision] to the English some of them would scarcely allow us to unyoke our oxen on their land but would order us to move on out of their sight, calling us some very opprobious names. utterly denouncing us. then again, we would find them quite friendly. they live in a very isolated condition. Sons and Daughters never leave home until they are
        </p>
        <PageNumber num={230} /><p>let them be ever so poor. they are very economical in wearing apparel. one cotton dress lasts them a year. they never exceed two dresses, the men make their own shoes and for all the family out of sheep, ox or wild beasts skin and many wear nothing but pants made of the same. they all go to Church twice a year at the nearest villiage, which is often a distance of two or three hundred miles and travel with wagons and oxen at the rate of 10 and 15 miles a day others who are a little wealthier have a span of eight horses which takes them at a much quicker rate, the horses bred in the country is capable of going great journeys without much rest. it is no uncommon thing to travel a horse 14 or 20 miles from that to 30 without stopping (on our arrival at the last mentioned city we met with Dr. Livingstone the African traveller, who accompanied us some distance towards the territory of the Great Chief Moshesh. Dr. L. then struck off to the eastward we intended to have left Moshesh country and take a straight Journey to Colesberg, but lost our way and got right into his dominion. we unyoked out oxen at the missionary station, called [unclear], our oxen by this time were nearly worked out, and the pasture being good, with plenty of water we thought of remaining there for a few days when [unclear] the missionary told us a different tale. Moshesh was not on the best of terms with the english the war only being of late settled between him and the colonists, we therefore were advised not to prolong our stay beyond the night the station was to be a place of meeting the next day for hostile purposes and an affray between him and another chief the missionary could not answer for his own safety and felt satisfied that our oxen would be taken from us if we were to remain and perhaps ourselves made prisoners we took Tea with the missionary that evening and witnessed a very curious incident, the two chiefs who were to meet on the station next day, sent an ambassador from each party carrying with them a rooster under their blanket on arriving at the missionary's house each of them were to put down their birds and which ever way they turned their heads first that party would surely conquor and the missionary had to give his word that there
        </p>
        <PageNumber num={231} /><p>may be no mistake about it. when the roosters were put down, they happened to turn their heads in different directions, instead of one way, which caused a great tumult between the two bearers. as they could not decide which party should win, they took their leave and went back to their homes. next morning [unclear] [Valencenes] (the missionary's name) gave us a guide to take us through the mountains to a road. we left the station about 9 oclok A.M. and got on the first mountain from the station a distance of six miles, where we could look back on all the ground we had come over that morning. we saw all the men belonging to Moshesh [Moshoeshoe], mounted on horses, and could see their guns and assagais glittering in the air, the opposite party were not mounted, firing began and the moment our guide heard it he left us. he said he could not stop, with us while his brothers were fighting. we had to proceed on alone and find our way the best we could, after a tedious rough journey of some miles we got into a road and there rested our oxen but not for any length of time as no water could be found, it is often the case that when we would find pasture there was no water, and when their was water, no pasture, we would sometimes go 20 miles and obtain neither which was very trying in the excessive heat of that climate. we proceeded on for a day or so, and took another road which led us into the territory of Sinkyouella [Sikyonela/Sekyonela], another chief who came up to us with some of his followers, all armed, and asked us what business had we to feed our oxen on his land. and gave us one hour to leave or he would take our wepons from us and we should walk with him from off his lands a distance of some miles in the burning heat; and thick sands, in some parts. we left his majesty's domains and got out the best way we could and then made our way across the country once more, and fell into the hands of the Chief Sandilla [Sandile] noted for his withered limb. he came up to us from his huts with some of his wives and wished to make a purchase with us of some heads
        </p>
        <PageNumber num={232} /><p>which they adorn themselves very profusely with we exchanged beads for sheep and goats to eat on our way, he invited us to his hut, we were afraid to refuse, went with him and spent the afternoon with him, we were entirely in his power, if he had chosen to act otherwise than he did with us there was no help for us being only six souls to their thousands - that were around us. We partook of some sour milk from leathern bottles, made after the shape of the Egyptians, and some eggs which they gave us in abundance, he told us we had better move our wagons closer to his houses, or huts as they were for the Lions infested the marshy place we had stopped upon, under a mountain, this looked rather suspicious, yet we done as he advised us, and had no cause to complain, unless being disturbed by the lions distant roar wolves howling, jackalls barking and fear of loosing our oxen if they heard or smelt them, they would tear [unclear] in a hundred pieces and fly in all directions. We left this polite old chief next day giving him a good deal of tobacco for a present, which he thought a deal of. We got on our way towards Wynburg a town about a hundred miles from the Quathlamba mountains, arriving in that town was like going to a fancy fair, the Dutch had come from all parts of the Country to church and take sacrament some were dressed in every color of the rainbow with bonnets of a coal scuttle shape and their dresses about 2 yards wide, straight up and down as they possibly could be. We remained there two days and then proceeded on our Journey. from Wynburg we began to ascend the Quathlamba Mountains, but the traveller is not aware of ascending it until he reaches the summit it is so gradual it is impossible to believe you are gaining any ascendancy whatever but when you come to the top and look around you and below it, it seems as if you were looking into a [world] below, the grandest and most extensive view I ever beheld! Mountains peering one above the
        </p>
        <PageNumber num={233} /><p>the other and one vast plain below. after a struggle of a day we descended the mountain, crawling down some part of it, the road was full of rocks on a [sideland] passage down. the poor oxen trod so cautiously fearful they would slip while the wagons were taken down by ropes. we rested under the mountain for the night amid the roar of lions, who kept up a constant thunder, one of our guides went down to the river for water, during the evening and as he stooped to dip it, he saw on the opposite side, something gazing at him he looked and perceived it was animal of some kind, and not being armed did not venture to move, presently the animal moved round and gave a tremendous sweep with his tail and walked away. he then saw that it was a lion, had he moved before it had left no doubt it would have sprung upon him, but he was spell bound with fright, and that saved him, when he came to the wagons he was so overcome that he fainted Next morning we proceeded on our journey after a few hours delay in trying to find our oxen which had broken away in the night on hearing the lions, We often have had to remain two or three days in search of them, for while feeding they stray away an immense distance. on leaving the mountains we came in sight of a lot of Bushmen who live in rocks and caves, living on herbs and wild horses, on seeing us they all fled up to a high hill, they were hunting the Zebra they had caught one and were skinning it. we took the skin and left, we had not proceeded far when they all came down and took the flesh away, these people are not quite three and a half feet high, their language seems to be nothing but a compound of klicks, made from the roof of the mouth and between the teeth, their weapons of war is a bow and arrow, which they shoot with great accuracy, the arrow bears a deadly poison made from a herb, they conceal themselves behind bushes while shooting them, and seldom or ever miss their object, the Dutch Farmers are pretty troubled by their incessant stealing of their cattle. after a fortnights journey from the mountains, we reached
        </p>
        <PageNumber num={234} /><p>Pietermaritzburg the capitol of Port Natal, our oxen were foot sore and as thin as rakes, after remaing there for a year, I took a small journey on to the Zulu territory visiting the Dutch and one or two stray English Farmers, and spent a few days by the Falls of the Omgeni [Umgeni] river, the falls are narrow but the body of water that falls over them is very great, they measure nearly two hundred feet in depth; the river is full of Crocediles and Hipopotamus, often while the natives are fording the river they are bitten in two by the crocodile; the Hipopotamus are very fond of oats and at night they leave the river, and get into the fields and destroy the crops dreadfully. on returning to P. M. Burg I took my way D'Urban, the Sea port town a very sandy soil, it is sildom you meet with a Lady walking, they all have resource to horseback riding, before coming to the town you have to go through a great forest thick with low bush and sand and trace your way through by the paths, that the elephants make which are always travelling through it, a person never dreams of walking through it, they either go in wagons or on a horse and being aware of this at that time, I and a young Lady friend was impatient to get to the [unclear] and would not until the oxen that had strayed were found, to take us through in the wagons. we went on alone and walked through it, all we saw was a few hundred monkeys capering above our heads in high glee, we certainly heard while resting ourselves, a great cracking of trees and bushes which has been accounted that elephants were not far from us wending their way through, you often see a great tree rooted up - lying prostate here and there; The road through this forest is beautiful, the trees at the top together with creeping evergreens, form a complete archway right through and before entering the forest, you are in view of the most grand and extensive scenery that eye ever could behold, I have often read of the different [unclear] in other parts, and heard those that have visited them and these and they say that the scenery of Port Natal cannot be surpassed so picturesque, and so extensive In fact the whole of any journey through the interior was full of beautiful prospects with the same.
        </p>
        <PageNumber num={235} /><p>After a few weeks sojourn in D'Urban, we returned again Pietermaritzburg where I remained for another year after which I left for D'Urban again, and took my passage on a small schooner, the Leontine Mary and sailed for Algo Bay, experienced a very rough passage of 10 days, arrive in port and proceeded to a [unclear] town eighteen miles from Port Elizabeth, called [Witenhap], a place celebrated for its gardens and fruits after remaing nine months, I left for Graham's Town once more, made a visit of twelvemonths, and from there went on the Fish River to lead a country life for awhile visited a great many parts of the country and returned again to Graham's Town, left for Port Elizabeth, and back again to Grahamstown, back to Algo Bay - thence sailed to Cape Town, visited interior towns [unclear] for their vineyards, [unclear] -- called [Malmsbury] [Paarl] and Wellington, each of them lying a hundred miles apart, returned to Cape Town, left again for Algo Bay by sea (there are no railroads in Africa whenever you do not go by sea, you have to take the wagons and oxen travelling at the rate of 10 miles a day. A railroad was on the eve of being commenced in Cape Town for Wellington a distance of some [50] miles just on my leaving the Cape for America arrived in Algo Bay remained two months, and then sailed for America. Arrived in Boston made a stay of a few days - proceeded to New York. from there visited Philadelphiam Botimore on to Norfolk Virginia, returned to New York, and after a few months took a western route through the states to Charleston South Carolina by way of Albany, Buffaloa, Cleveland Ohio, Centreville, Columbus, Cincinattii, Kentucky, Nashville, Chatanooga, Knoxvillw, Bristol, Lynchburg, Petersburg, Norfolk Virginia, [Weldon] to Wilmington North Carolina, Florence to Charleston South Carolina, where I now take my passage to Old England once more.
        </p>
        <PageNumber num={236} /><p>A Stormy life by Georgia Fullerton
          [Genta?] Court
          Rolls
          2 quarts flour 1pt Milk Tea of soda 2 of tartar
          1 # sugar 1 of Flour 10 eggs rind &amp; juice of lemon
          Pare 4 apples grate them fine make the following
          custard into which stir the grated apple, flour 4
          tablespoonfuls 1 pt milk 5 eggs little grated orange
          peel them  bake them after mixing
        </p><p>Veal Rolls cut ½ inch thick rub them over with
          [egg yk?] &amp; bread crumb them &amp; fry
          4 tablespoon flour 3 eggs as much milk as well
          make into a batter   salt bake
        </p><p>Napolean &amp; Blucher by L. Muhlbach
          Empress Josephine L Muhlbach
          Frederick the Great &amp; his Court
          Louisa of Prussia &amp; her time
          Henry 8’ &amp; Catheran Parr
        </p><p>[illegible]
        </p>
        <PageNumber num={237} /><p>Kelly, Peel &amp; Co
          Ball
          Key to the exercises in Elementary Arithmetic
        </p>
        <pre>50 ct
        </pre>
        <p>First Lessons in language, or elements of English
          grammer
          Gradual lessons in grammar (Construction of the English Language)
          90cts
          Key to intellectual Algebra 60 c
          First Steps in French by P.T. Gournay 60
        </p>
        <PageNumber num={238} /><p>Saturday Nov 8th '61
          Nov 8th
          Left Charleston for St. Helena with 3 boats and eight men with the purpose of bringing up the negroes from off the plantation. arrived there at 4 o O Clock Monday afternoon went ashore saw several negroes on the plantation and immediately on seeing us they all fled, to the woods with the exception of 8 or 10 who informed us that their overseer had left them a week from that time, they expressed themselves willingly to leave with us and that they would pressuade the others to do so. we then went and prepared our boats for them and on returning, we found they had gone, instead of getting their things in readiness as promised during our absence. Returned to our boats for the night next morning at 9 O C - went ashore and proceeded to the house where we found everything destroyed, with the exception of the Library we saw them about 1/2 mile from us as we advanced they [unclear] nearly all of them were armed with some kind of weapons, guns, axes, and sticks whirling them in the air and calling for us to come on in oaths, and daring us to come using profane language all the while, finding it no use to remain we proceeded to our boats, some of them came down on the beach and fired two shots at us we were then [1/2] mile from the shore, seeing that our exertions were useless to procure them, we made our way for Charleston.
        </p>
        <PageNumber num={239} /><p>E. Lawrence &amp; Co
          Cook St
          Liverpool
        </p><p>Falmouth
          April 26
        </p><p>To E. Lawrence Esq
        </p><p>Dear Sir
        </p><p>I write to inform you of our arrival in Falmouth this morning we laid over last night on account of a rain storm. The vessels speed is all I expected going at the rate of nine knots an hour, - average speed, with Twelve pounds of Steam; her highest power of steam is eighteen pounds, which would give her ten knot speed in case of necessity Every thing seems to be very agreeable on Board The Captain is a decent old fellow more so than I anticipated, we have got along so far like Brothers, Present my kind regards to Mr. Taylor.
        </p><p>And Believe me
          to Remain
          Yours very respectfully
          V. G. Locke
        </p>
        <PageNumber num={240} /><p>An Act
          Recognizing the existence of war between the
          United States and the Confederate States; and
          concerning letters of Marque, Prizes and prize goods.
          Whereas the earnest efforts made by the Government
          to establish friendly relations between the Government of
          the United States and the Confederate States, and to settle
          all questions of disagreement between the two Governments
          upon principles of right, justice, equity, and good faith have
          proved unavailing by reason of the refusal of the Government
          of the United States to hold any intercourse with the Commissioners
          appointed by this government for the purposes aforesaid
          or to listen to any proposals they had to make for the peaceful
          solution of all causes of difficulty between the two Governments;
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
          Territory South of Kansas will refuse to cooperate with
          the government of the United States I these acts of
          hostilities and wanton aggression, which are plainly
          intended to overawe, oppress, and finally subjugate the
          people of the Confederate States and whereas by the acts
          and means aforesaid, war exist between the
          Confederate States and the Government of the United
          States and Territories thereof, except the states of Maryland
          North Carolina, Tenessee, Kentucky, Arkansas, Missouri,
        </p>
        <PageNumber num={241} /><p>and Deleware, and the Territories of Arizona and New Mexico
          and the Indian Territory south of Kansas, therefore, (Sect 1.
          The Congress of the Confederate States of America do enact,
          that the President of the Confederate States is hereby authorized
          to use the whole land and naval force of the Confederate States
          to meet the war thus commenced, and to issue to private armed
          vessels commissions or letters of marque and general reprisal,
          in such form as he shall think proper, under the seal of the
          Confederate States, against the vessels, goods, and effects of
          the Government of the United States, and of the Citizens or
          inhabitants of the States and Territories thereof: Provided
          however, that property of the enemy (unless it be contraband
          of war) laden on board a neutral vessel shall not be subject
          to seizure under this act; And provided further, that
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
          of marque and reprisal pursuant to this act shall state
          in writing the name, and a suitable description of the
          tonnage and force of the vessel and the name and
          place of residence of each owner concerned therein,
          the intended number of the crew; which statement
          shall be signed by the person or persons making such
          application and filed with the secretary of State or
          shall be delivered to any other offices or persons who
          shall be employed to deliver out such commissions
          to be by him transmitted to the Secretary of State
          Sect. 4. That before any commissions or letters of
          marque and reprisal shall be issued as aforesaid
          the owner or owners of the ship of vessel for which
          the same shall be requested and the commander
        </p>
        <PageNumber num={242} /><p>thereof for the time being, shall give  bond to the Confederate
          States with at least, two responsible sureties, not interested
          in such vessel, in the penal sum of five thousand dollars: or
          if such vessel be provided with more than one hundred
          and fifty crew, then in the penal sum of ten thousand
          dollars, with condition that the owners, officers and crew,
          who shall be employed on board such  commissioned
          vessel shall and will observe the laws of the Confederate
          States and the instruction which shall be given them
          according to the law, for the regulation of their conduct;
          and will satisfy all damages and injuries which
          shall be done or committed contrary to the terms
          thereof, by such vessel, during her commission
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
          any citizens of the Confederate States, or of persons residing
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
          agreeably to the provisions established by law – And
          such salvage shall be distributed among the
          owners, officers, and crews of the vessels
          commissioned as aforesaid, and making such
        </p>
        <PageNumber num={243} /><p>capture, according to any written agreement which shall
          be made between them; and in case of no such agreement
          then in the same manner and upon the principles hereinbefore
          provided in cases of capture. Sect. 7th That before [breaking?]
          [bulk?] of any vessel which shall be captured, as aforesaid, or
          other disposal or conversion thereof or of any articles which
          shall be found on board the same, such captured vessels
          goods, or effects shall be brought into some port of the
          Confederate States, or of a nation or state in unity with the
          Confederate States, and shall be proceeded against before a
          competent tribunal; and after condemnation and forfeiture
          thereof, shall belong to the owners, officers, and crew of the vessel
          capturing the same and be distributed as before provided; and
          in case of all captured vessels, goods, and effects which
          shall be brought within the jurisdiction of the Confederate States,
          the district courts of the Confederate States shall have
          exclusive, original cognizance thereof, as in civil causes
          of admiralty and maritime jurisdiction; and the
          said courts, or the courts, being courts of the Confederate
          States into which such cases shall be removed, and in
          which they shall be finally decided, shall and may
          decree restitution, in whole, or in part, when the capture
          shall have been made without just cause. And if
          made without probable cause , may order and decree
          damages and costs to the party injured, for which
          owners and commanders of the vessels making such capture
          and also the vessels, shall be liable. Sect 8th That all
          persons found on board any captured vessels, or on
          board any recaptured vessel, shall be reported to the
          collector of the port in the Confederate States in which
          shall first arrive, and shall be delivered into the
          custody of the Marshall of the district or some court
          or military officer of the Confederate States, or of any
          state in or near such port, who shall take charge
          of their safe keeping and support, at the expense of
          the Confederate States. Sect 9th That the President
          of the Confederate States is hereby authorized to
          establish and order suitable instructions for
          better governing and directing the conduct of
          the vessels so commissioned, their officers and
          crews, copies of which shall be delivered by the
          collector of the customs, to the commander, when they
        </p>
        <PageNumber num={244} /><p>shall give bond as provided. Sect. 10th That a bounty
          shall be paid by the Confederate States of $20 for each person
          on board any armed ship of vessel, belonging to the United
          States, at the commencement of an engagement, which
          shall be burnt, sunk, or destroyed by any vessel
          commissioned as aforesaid which shall be of equal or
          inferior force, the same to be divided as in other cases of
          prize money – and a bounty of $25 shall be paid to the
          owners, officers, and crews of the private armed vessels
          commissioned as aforesaid, for each and every prisoner
          by them captured and brought into port, and delivered
          to an agent authorized to receive them in any port of the
          Confederate States; and the Secretary of the Treasury is hereby
          authorized to pay or cause to be paid to the owners, officers
          and crews of such private armed vessels, commissioned as
          aforesaid, or their agent, the bounties herein provided.
          Sect. 11. That the commanding officer of every vessel
          having a commission, or letters of marque and reprisal
          during the present hostilities between the Confederate States
          and the United States, shall keep a regular journal
          containing a true and exact account of his daily proceeding
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
          name and hand writing to the collector
        </p>
        <PageNumber num={245} /><p>other chief officer of the customs at or nearest to such port, the
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
          is manned, and armed according to her commission
          and upon delivery of such certificate any former
          certificate of a like nature which shall have been
          obtained by the commander of such vessel, shall be
          delivered up. (Sect 12th That the commander of
          vessels having letters of marque and reprisal, as
          aforesaid, neglecting to keep a journal, as aforesaid
          or willfully making fraudulent entries theirin, or
          obliterating the record of any material transactions
          contained  theirein, where the interest of the Confederate
          States is concerned, or refusing to produce and deliver
          such journal, commission or certificate, pursuant
          to the preceding section of this act, then, and in such
          cases, the commissions or letters of marque and reprisal
          of such vessels, shall be liable to be revoked; and such
          commanders, respectively shall forfeit for every such
          offence the sum of $1000, one  moiety thereof to the
          use of the Confederate States, and the other to the informer.
          Sect 13) that the owners or commanders of vessels having
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
          by any private armed ship having commission or
        </p>
        <PageNumber num={246} /><p>[in the top margin a series of letters or symbols all separated by several spaces and resembling the following:]
          T     | ~  b   y  y   Imm y   v   x    z
        </p><p><br />
          or letters of marque and reprisal under this act and brought
          into the Confederate States there shall be allowed a deduction
          of 33 1-3 per cent on the amount on the net amount of duties imposed by law.
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
          law.
        </p><p>Howel Cobb
          Pressident of the Congress
          Jefferson Davis
          Approved May 6th 1861
          Presidents instructions to private armed vessels
          1 The terms of your commission under the act of Congress
          entitled “An Act, recognizing the existence of war
          between the United States and the Confederate States
          and concerning letters of Marque, prizes, and prize
          goods “ a copy of which is hereto annexed, will be kept
          constantly in your view. The high seas reffered
          to in your commissions, you will understand
          generally to refer to low water mark, but with
          the exception of the space within one league, or
          three miles from the shore of countries at peace
          both with the United States and the Confederate
          States. You may nevertheless execute your
        </p>
        <PageNumber num={247} /><p>commission within that distance of the shore of a
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
          vessels of their crews or of their passengers other than
          persons in the military service of the enemy.
          3rd Towards enemy vessels and their crews, you are to
          proceed in exercising the rights of war, with all the
          justice and humanity which characterize this
          government and its citizens (4th) The master and one
          or more of the principal persons belonging to the captured
          vessels are to be sent as soon after the capture as may
          be, to the judge or judges of the proper court in the
          Confederate states, to be examined, by oath touching on
          the interest or property of the captured vessel and
          her lading; and at the same time are to be
          delivered to the judge or judges, all papers, charters
          [parties?], bills of lading, letters and other documentation
          and writings found on board; the said papers are to
          proved by the affidavit of the commander of the
          capturing vessel, or some other person present at the
          capture to be produced as they were received, without
          [fraud?], addition, subduction, or embezzlement.
          5th) Property even of the enemy, is exempt from seizure
          on neutral vessels, unless it be contraband of war
          If goods contraband of war are found on any neutral
          vessel, and the commander thereof shall offer to deliver
          them up, the offer shall be accepted, and the vessel
          left at liberty to persue its voyage, unless the quantity
          of contraband goods be greater than can be
          conveniently received on board your vessel, in which
          case the neutral vessel may be carried into port for
          delivery of the contraband goods. The following articles
          are deemed by this government contraband of war,
        </p>
        <PageNumber num={248} /><p>as well as all others that are so declared by the law
          of nations, viz. All arms and implements serving
          in the purposed of war by land or sea, such as
          cannons, mortars, guns, muskets, rifles, pistols, petards,
          bombs, grenades, shell ball, shot, fuses, pikes, swords
          bayonets, javelins, lances, horse furniture, holsters belts
          and generally all other implements of war. Also
          timber for ship building, pitch, tar, rosin, copper
          in sheets, sails hemp cordage, and generally whatever
          may serve directly to the equipment of vessels, unwrought
          iron and planks only excepted.
          Neutral vessels conveying enemy’s dispatches or military
          persons in the service of the enemy, forfeit their neutral
          character and are liable to capture and condemnation.
          But this rule does not apply to neutral vessels
          bearing dispatches from the public ministers or
          ambassadors of the enemy residing in neutral
          countries. By the command of the President of the
          Confederate States
          Robert Toombs
          Secretary of State
          Form of Bond   (      )
          Know all men by these presents, that we (Note 1)
          are bound to the Confederate States of America in the full
          sum of (Note 2) thousand dollars, to the payment
          whereof well and truly to be made, we bind ourselves, our heirs
          executors, and administrators, jointly and severally by these presents
          the condition of this obligation is such, that whereas application
          has been made to the said Confederate States of America
          for the Grant of a Commission or letter of Marque and [general?]
          reprisals  authorizing the (Note 3) or vessel called the
          to act as a private armed vessel in the service
          of the Confederate States, on the high seas, against the United
          States of America, its ships and vessels, and those of its
          citizens, during the pendency of the war and existing between
          the said Confederate States and the said United States
          Now if the owners, officers, and crew who shall be
          employed on board of said vessel, when commissioned
          shall observe the laws of the Confederate States and [the?]
          instructions which shall be given them according
          to law for the regulation of their conduct; and [illegible]
          shall satisfy all damages and injuries which
          shall be done or committed contrary to the
        </p>
        <PageNumber num={249} /><p>terms thereof by such vessel during her commission
          and shall deliver up said commission, when
          revoked by the President of the Confederate States,
          then this obligation shall be void, but otherwise
          shall remain in full force and effect.
          Signed, sealed, and delivered in
          presence of [blank] on this [blank] day of [blank]
          A.	B. `{'}'}`
          C.  D.. `{'}'}` Witnesses
          Seal
          Seal
          Seal
          Seal
          Note 1. This blank must be filled with the name of
          the Commander, for the time being and the owner or
          owners, and at least two responsible sureties, not
          interested in the vessel
          Note 2nd. This blank must be filled a “five”, if the
          Bessel be provided only with 150 men, or a less number,
          if with more than that number, the blank must be
          filled with a “ten”.
          Note 3. This blank must be filled with the character
          of the vessel, “ship “brig  “schooner “ “Steamer” “ &amp;c
          [rest of page missing]
        </p>
        <PageNumber num={250} /><p>[blank page]
        </p>
        <PageNumber num={251} /><p>O Tempores! O Mores!
        </p><p>The times are hard, hard as a brick,
          and what is worse, now there's no tick.
          "Cash cash, no credit, never more,"
          Stuck up in every body's store.
          Where's a fellow to get his grub
          That has no money?  There's the rub. -
          And when he gets all cold &amp; wet,
          And nothing in his pocket yet;
          Where's the wood he's going to buy,
          To make a fire his clothes to dry?
          S'pose he gets sick, I'd like to know,
          How he'll ile from Horne &amp; Co.
          Then s'pose for want of it - he dies;
          Nobody cares, no body cries,
          "No money, no coffin, no sir!
          "You may bury him just so, sir."
          Then, last of all, the dead can crave,
          A decent grave - who'll dig his grave?
          Grave digger, "Why I s'pose sir,
          The buzzards &amp; the crows, sir.
          So mote it be.  He'll want no more.
          Good Lord!  'Tis dreadful to be poor.
          "All cash, all cash,"  now there's no tick
          For the poor half starving sick.
          S'pose a fellow's feeling badly.
          And would take a drink most gladly.
          Whose going to trust him, do you think
          Even for one poor little drink?
          For punch, or oysters, cold or raw?
          Not Jones, nor Poe, nor Overbaugh.
          Good Lord!  no money bread nor meat;
          Taturs, nor nothing else to eat!
          Our gardens soon would furnish feed,
          But Jimmy Smith won't trust for seed.
          And Powers &amp; Pemberton &amp; so on,
          Won't tick for anything to "go on"
          Till garden seed herbs are up &amp; ripe,
          And Tomlinson won't trust for tripe,
          "Woodward's Play" no doubt you've read it,
          But nary coat he'll sell on credit - continued
        </p>
        <PageNumber num={252} /><p>"You need a hat" Thomson will tell you;
          But devil of a hat he'll sell you,
          On credit, or on tick so called,
          Not if your head is sore &amp; bald.
          You need some cloth or calico
          To make your wife a dress or so,
          Friend Hector (not of Troy renown
          But Hector Mac of our town)
          Takes your arm and leads you in;
          "How do you do, how have you been;"
          Hector'll sell you all he can
          But - on the "European Plan"
          That means in other words, no tick;
          As some say [illegible], others, tick.
          Or thus, a "Petticoat for Sal.
          Alias, [illegible] Salli's Balmoral."
          You'd like some finery perhaps?
          Ladies gaiters or fancy caps?
          Walk in that double large glass door,
          S. &amp; V's new dry goods store,
          Silks &amp; satins there you'll find,
          and finery of every kind.
          Some spread out &amp; some in piles,
          All enhanced by warming smiles.
          Now poor fellow, (with a sigh)
          Say "indeed I'd like to buy
          A few warm dresses, but - "but what!"
          "The wherewithal that I have not got."
          Then "[illegible]" change "He smiles no more,
          But kindly heads you to the door.
          Well, well, no clothes, not hat, no shoes,
          No brandy smash no oyster stews;
          No money and no trusting friends.
          Thus our "Poor Devil's" chapter ends.
        </p><p>[Tomoussho.]
        </p>
        <PageNumber num={253} /><p>[right hand side and about 1/3rd of the bottom of the page are torn away]
          The horrors of war – To …
          army was entering the Tow[n?]
          North Carolina March 11th
          Soldiers plundering,
          cannon thundering,
          dying, groaning
          wounded moaning
          buildings crashing,
          armor clashing,
          wagons rattling
          horsemen battling
          Helmets ringing with the blows
          which the ponderous sword h…
          pris’ners on their knees, entrea…
          trumpets sounding, drums
          victors shouting, slaying, swearing
          eagles wresting, standards teaming
          showers of shot, grenades,
          dismal shrieks, terrific …
          Falling roofs,
          Noise of hoofs,
          Combat, din
          Without, [illegible]
          All was mingled horro…
          Madness, suffering, [s?]ay…
        </p>
        <PageNumber num={254} /><p>[illegible] [illegible]
        </p><p>[about two thirds of page missing]
        </p>
        <PageNumber num={255} /><p>Elisha
          Mr. Davis
        </p><p>Dear Sir,
        </p><p>I hope you will pardon the liberty I take in addressing you. The only excuse I have is the extreme anxiety I am daily laboring under about my daughter Lelia, your son's Frank's wife, - whose welfare, no doubt, you as a parent, are also interested in.
        </p><p>I have put off from day to day - addressing you on this painful subject, but urgent necessity compels me at last to do so. I have tried as far as it lies in my power to supply the wants of Lelia &amp; her two helpless, innocent children - now my eye sight has failed me - &amp; I am obliged to go to the county &amp; be depending on kind [relashins] in order to procure a subsistence for myself. Lelia has been here about 9 months &amp; the assistance that Frank has sent her during that time has barely been enough to clothe her - her confinement expenses wholly devolved upon me. &amp; I assure you that I have worked day and night in order to keep a shelter over our heads and bread to eat.
        </p><p>I should have written to Frank but as I cannot but feel he is almost neglectful, as well as indifferent about his family I concluded that advise from you reminding him of his duty would have more weight than a letter from me to him. I think the best course to persue now for the welfare of both Lelia &amp; Frank would be for them to live no longer live separated from each other. A situation can be easily obtained for him here, but he does not seem to care about coming to take it. In that case Lelia had better go to him, which she must certainly do or suffer. [Her] lot is a very hard one too hard for someone [unclear] [unclear] her.
        </p>
        <PageNumber num={256} /><p>March 13th 1867 at [Yayelleville?] Monticillo
          Oh, I, am a Good Old Rebel!
          O, I, am a good old rebel,
          Now that’s just what I am,
          For this “fair Land of Freedom”
          I do not care a dam.
          I’m glad we fit agin it;
          I only wish we’d won.
          I don’t want my pardon
          For anything I’ve done.
          2
          I hates the Constitution,
          This great Republic too.
          I hates the Freedman’s Buro,
          In uniforms of blue;
          I hates the nasty eagle,
          With all his brag &amp; fuss,
          The lying, thieving Yankees,
          I hates ‘em wuss &amp; wiss.
          3
          I hates the Yankee nation,
          And everything they do.
          I hates the Declaration
          Of Independence too,
          I hates the glorious union
          ‘Tis dripping with our blood.
          I hates their striped banner
          I fit it all I could.
          4.
          I followed old Ma’s Robert.
          Four years or nigh about,
          Got wounded in three places
          and [slawed?] at Pink Lookout.
          I catched the roomatism
          A camping in the snow.
          And I killed a [chance?] of Yankees,
          And I’d like to kill some mo.
          5
          Three hundred [illegible] and Yankees
          Lie stiff in Southern dust,
          We got three hundred thousand
          Before they conquered us.
          They died of Southern fevers
          and Southern steel and shot
          I wish they were three millions
          Instead of what we got.
          6th Verse
          [rest left for someone who can read sideways. I would recommend that you never post anything
          else like this volume unless you include in your software the ability to rotate a page
          as is offered on the LVA website which uses Omeka, also]
        </p>
        <PageNumber num={257} /><p>August the 7th 1854
        </p><p>This is to certify that wee the undersined having recieved all the wages due to us from the brig'nt Sonora of Picton. [Doo] declare that wee have no demand whatever upon said Brig or owners
        </p><p>Recived of Vernon Locke two months and 14 days wages at 20 dollars Per month
        </p><p>Advances when shiped $10.00 Simon Landry x 49 38
          Do to be 10 00 William McLoud  x $ 49.38
          “ Subtracted 10 00 Daniel Stuert 49.38
          “ from this amount 10 00 William Grant x 49 38
        </p><p>William [Hendeson] Mate William Henderson
          Twenty five dollars pr month $66 80
        </p><p>Septembr th 2d 1854
          William [Farris] x $16 75
          Abaham White x $16 75
          Abraham [illegible] x “16 75
          [illegible] [illegible] “ 16 75
          Discharged Sept 15th William Henderson $35 52
        </p><p>Advance to Seaman in Sidney [illegible]
          Victor Land $ 2 00
          Napoleon [Berbarry] “ 2 00
          Charls Huelin 2 00
          John Granvil 13 50
          John Mackdonld 13 62
          James [Gererva]
        </p>
        <PageNumber num={258} /><p>Disbursements and Port Charges
          Paid on the Brig Sonora Vernon Locke Master, at Sidney
        </p><p>Port Charges 			£ 	S    p
          Ballast Dues - -               “     15    00
          Harbour masters fees -   "       3     .7
        </p>
        <pre>                                       “     18     .7
        </pre>
        <p>Disbursements
        </p><p>To [illegible] sasl twine         “      10     5
          Telegraph Dispatch              “        9     7p
          [Mon] 1st
          Butchers bill                         2      18    [5 1/2]
          To [illegible] cargo                2      12     1
          To 4 bbls beef &amp; 4 of Pork 28      06     “
          To one half cord wood                   6     3
          Comisions [5%] 46.9.3        2        6     5
        </p>
        <pre>                                     ________________
          36       19    2 1/2
          “       10         /2
          _________________
          36       19    3
        </pre>
        <p>Advances to crew
          John Mcdonald                       2       2     “
          John [Granwite]                         2      2      6
          Credited to the Brig Sonora  7      8      9
        </p>
        <pre>                                         ________________
          11     13      3
          £  48     13     "1
        </pre>
        <p>Sidney C B Dce 16th 1854
          Paid by
          Vernon Locke
        </p>
        <PageNumber num={259} /><p>Sydney C B 1854
          Portcharges
          £	s	d
          Balast dues                                         15
          Harbour Masters fees                           3    7
        </p>
        <pre>                                                           18   7
        </pre>
        <p>Disbursements
          To [illegible] sasl twine                         10   5
          Paid for telegraph dispatch                   9   7 1/2
          Butchers Bill for meat                    2    18   5 1/2
          Paid for timing cargos                   2    12   1
          To 4 bbls of Beef &amp; 4 of Pork       28     6   "
          To one half cord wood                          6   3
        </p>
        <pre>                                                    35     2   10
        </pre>
        <p>Advance to Seamen
          James [Jerewa] mate                            6    2
          Victor Lanes                                         10   5
          Napoleon [Berlang]                              10   5
          Charls Hulin                                         10   5
          John Granvil                                   2     2   "
          John Macdonald                            2     2   6
          Cash to myself	                               4   16   2
          Commission 5% on £4693            2     6   5
          Cr                                              £ 48   15 “8
        </p><p>By my Draft on J.P. [Mellodge] Esq. Boston
          in favor of Mfs Archable Co
          at 3 days sight for $19515 Equal to £ 48.15.8
          Sydney C B 16th  December 1854
          Vernon Locke Master of Brig Sonora
        </p>
        <PageNumber num={260} /><p>Malta Feb th 3d 1855
        </p><p>[hom] 2d
        </p><p>Disbursements &amp; Port charges, Paid on the Brig Sonora.
        </p><p>Boats towing the Brig into port 8.00
          To landing 239 tons coals. - - 21.51
          12 Baskets for discharging coals - - 3.84
          Paid for 60 tons Ballast - - 15.00
          Caulkers Bill - - - - 30.00
          4 gallons Lamp Oils - - - 3.80
          2 coiles of grass Rope - - 3.00
          50 [unclear] of Beef - - - 12.50
          One half lb of nails - - -   .50
          Vegetables &amp; - - - - 2.25
          Filling watter casks - - 1.00
          Cash Cr to the ships  - 217.00
          Broken atendance - - 8.00
        </p><p>[On date] feb th 3d 1855  326.40
          Paid by
          Vernon Locke
        </p><p>[pencil note] [unclear]
        </p>
        <PageNumber num={261} /><PageNumber num={262} /><p>did you ever see the
          devil with his little
          spade and shovel
          digging up potatoes on
          the turnpike road,
        </p>
        <PageNumber num={263} /><p>Disbursements &amp; port charges [page torn]
          Payed on [illegible] Brig Sonora at Palermo [page torn]
          Port Charges
        </p>
        <pre>                       [Duca = Ducats?]  [torno = tornese] [Grano?]
        </pre>
        <p>To the Health Ofice Boat    “ ”   12
          Vegetabiles and milk in Port   “  “ 12
          12 dozens of egs 28  16 --      ‘  ‘  28 16
          wine for allowance                     1  16  “  “
          2 laburs to work on ballast          “2  “6  “ “
          Ballast  [guard?]                           “ “ “2  “ “
          To customs for [???king] th brig   “ “ 12 “ “
          400 weight of potatoes                  “2 “6  “ “
          50 Rotals of Beef in Port                “4 20 “ “
          20 weight do for sea stock              “1 26 “ “
          2 gallons of olive oile                       “1 “6 “ “
          7 lbs Black tea                                  “1 26 “ “
          28 lbs white sugar                              “2 “2 10
          one half pound ground pepper            “ “ “3 “ “
          Caulkers Bill                                         29 “3  “ “
          [Cook?] ship for 2 days [coaling?]             “ “ 8” “ “
          Vegitables for sea stock                       “ “ 15  “ “     Duna tarese  juis
        </p>
        <pre>                                                                                 49      15    “6
        </pre>
        <p>second Bill     288 lbs coffee
          28 lbs coffee                                           “2 “3 “ “
          filling water casks                                    “    24 “ “
          Paid to the joiner                                      “4   12  15
          3 men to store th cargo                          “2 12   “ “
          one half to gen okrans twain                   “ “ “6  “ “
          Portorage for stores &amp; ---                         “ “  12 “9
          Mooring &amp; [illegible] Brig                         “2 12 “ “
          for interpreter and Boat hire                    4 “ “    “ “
          Boat to tend the Birg to sea                     “1 “6  “ “
        </p>
        <PageNumber num={264} /><p>Disbursements &amp; Port charges at Palermo
        </p>
        <pre>                           February 10th 1855
        </pre>
        <p>[torn corner of page] [Paid?] on the Brig Sonora Vernon Locke master
          Portcharges                                  [Gs?]    Trs   Grens
          Custom house   [illegible]              49    15   “6
        </p>
        <pre>                                                                                   49    15   “6
        </pre>
        <p>Disbursements
          Disbursements;
        </p><p>28 lbs coffee                                 “2  “3   “  “”
          To filling fresh water                      “ “      24  “ “
          Lamp [wick? or work?]                   “ “  “4  10
          Paid the joiner for work on the Brig  “ 4  12  15
          Paid laborers to work on board           “2  12  “ “
          ½  [dozen?] skanes of twine      “  “  6   “  “
          Portage for stores &amp;                     “ “ 12  “ 7
          Mooring and unmooring th Brig   “2   12  “ “
          Interpreter and Boat hire     “4  “  “  ‘  “
          Boat to stand th Brig to [sea?]       “1  “6  “  “
          Paid for main Stasail                   26 “ “  “  “
        </p>
        <pre>                                                                                    44    4   14
        </pre>
        <p>[in margin, inverted]
          1.75
          25
          35
          ___
          2.35
        </p><p>[in margin, inverted]
          50
          25
          25
          25
          ___
          $1-25
          [illegible]
          Disbursements [inverted]                                13  20   00
          Equil to two hundred and [illegible]  $ 232  75
          Advance to Crew
          Mr  Terewa    6  50
          Mr Wallice         24  00
          John Macdonald     7  50
          John Granvil           8 00
          Charls hulin             2 00
          Napolean Berlang   2 00
          Victor Land               2  00
        </p>
        <pre>                              ______
          52  10
        </pre>
        <p>Paid by     Whole Amount    $284 85
          Vernon Locke
        </p>
        <PageNumber num={265} /><p>Bearing &amp; Dist. of Cape Sant feaners
        </p><p>South East of Cape
          [sketch of land?]
          Bearing North by Compas or north by East
          Cape [illegible] Land bearing from N to NE
          Dist 5 miles   north of cape
        </p><p>The cape
          [sketch of cape?]
          South coast of [Africa?]
          Potatoes &amp; [illegible]
          1-65
        </p>
        <pre>  15
        </pre>
        <p>26
          60
          26
          23
          25
          ____
          388
        </p>
        <pre>  50
        </pre>
        <p>___
          438
        </p>
        <pre>  15
        </pre>
        <p>20
          ___
          4-73
        </p>
        <PageNumber num={266} /><p>[much of this page is seemingly unrelated dates and phrases. The bottom of the page
          is inverted and too hard to read with this software]
          last letter received from Vernon
          Arabella took my washing left 16th October 1863
          29th August
          October 2nd/68
          Franny came 1st Sept Vernon
          Hannah took chard of Dr Bernien
          23rd Jan                    Vernon
          Eliza took washing on the 6th
          [The rest appears to be penmanship exercises]
        </p>
        <PageNumber num={267} /><p>[pencil drawing top of page with pencil notation beneath]
          The town of Monrovia
          West-coast Africa as it appeared
          Dist three miles bearing E S E by compass
          V. G. Locke
          West coast Africa
        </p><p><br />
          By Sir Henry Houghton, Bart.
          (copied June 15 [illegible])
        </p><p>Gallant nation, foiled by numbers,
          Say not that your hopes have fled;
          Keep that glorious flag which slumbers,
          One day to avenge your dead,
          Keep it, widowed, sonless mothers,
          Keep it, sisters, mourning brothers,
          Furl it with an iron will;
          Furl it now, - but keep it still;
          Think not that its work is done.
          Keep it till your children take it,
          Once again to hail, and make it
          All their sires have bled &amp; fought for,
          All their noble hearts have sought for,
          Bled and fought for all alone,
          All alone! aye shame the storey,
          Millions here deplore the stain,
          Shame alas: for England's glory,
          Freedom called &amp; called in vain,
          Furl that banner, sadly, slowly,
          Treat it gently, for 'tis holy.
          Till that day - yes, furl it sadly,
          Then once more unfurl it gladly -
          Conquered Banner - keep it still!
        </p><p>England Oct 1865
        </p>
        <PageNumber num={268} /><p>[top of page tattered]
          … and west of …
          …  Africa
          along the coast of Poor River
          I send I   a
          [sketch of coast]
          the land of Sino Thre is nothing in
          [Potion?] to distinguish the land of Sinl
          from any othe neighboring post
          [sketch showing several trees and buildings]
          … ridges &amp; [illegible]
          Sino Liberia W C A
          [ a small amount of illegible text]
          32
          62
          15
          8
          25
          7
          2
          10
          12
          ___
          1-73
          40
          ___
          2-13
        </p>
        <PageNumber num={269} /><p>[awher?] Chronometer watch [illegible] 54.19 [illegible] [lucks?] Chronometer Charles Shepherd Royal [2 illegible words] [London 12 qt?] [Charles Shepherd was a maker of clocks and chronometers] 55 Seland Street Owner Edmund [Bynta?] [illegible] [Broate?] Mark 1101 Charles Shepherd [the rest of the page has a few illegible scribbles and unassociated letters]</p><PageNumber num={270} /><p>[blank]
        </p>
        <PageNumber num={271} /><p>Barque Vernon from Boston Vern
        </p><p>April 7th 1857
          Lat 09=50  Long 3=10 W
          Barometer 30” Air 79.9  Water 70.5
          Wind South East and moderate Heavy Sea runing from the South East Midle part the same Later part fresh Gales from south East &amp; very heavy Sea runing Sea roles in from Eastward with a Southerly cross Sea at times
        </p><p>April 8th
          Lat 10=40  Long 30=20
          Barometer 31“5  Air 80 9”  Water 70 5”
          wind South and cloudy Midle part varies to From South to South East a very heavy Sea roling in from the South Later part very heavy clouds passing with Some raine and Heavy gusts of wind, at times calm So ends these 24 hrs
        </p><p>April 9th
          Lat 13=10.8  Long 31
          Barometer 30 Air 79 5 Water 75.5
          Winds South West Bafling the old South East Swell cotinues roling home and heaving the wind from out our Sails When Shal I get a change of wind  Im geting uneasy and whoo will wander at my Saying So after Seeing that from 10 North to 10 South I had the wind South of East to th Line and to 10 South I have had the wind South South East hard luck this time But I will trust to [Leut Mury] &amp; [Bravida] if [new port] Should Bring me up
        </p><p>April 10th
          Lat 16=00 Long 32 30
          Barometer 30" Air 79” Water 77
          Wind South Est midle &amp; late part wind variable from South East to South raining at times Later part Wind variable
          Vernon
        </p>




      </div>
    </PageNumberOffsetsContexts.Provider >
  );
};

export default Transcription;
