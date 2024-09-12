import { useEffect, useState, FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./Contexts";
import About from "./components/About/Index";
import ContactUs from "./components/ContactUs/Index";
import Footer from "./components/Footer/Index";
import Header from "./components/Header/Index";
import Landing from "./components/Landing/Index";
import Map from "./components/Map";
import VernonGuyonLocke from "./components/VernonGuyonLocke/Index";
import PageViewer from "./components/PageViewer/Index";
import * as Types from './index.d';
import * as Styled from './styled';
import * as Constants from './constants';

const App: FC = () => {
  const calculateDimensions = (): Types.Dimensions => {
    const { innerWidth, innerHeight } = window;
    const { clientWidth, clientHeight } = document.documentElement || { clientWidth: null, clientHeight: null };

    const dimensions: Partial<Types.Dimensions> = {
      width: clientWidth || innerWidth,
      height: clientHeight || innerHeight,
      header: {
        height: Constants.headerHeight,
      },
      headerTitle: {
        height: Constants.headerTitleHeight,
      },
      footer: {
        height: Constants.footerHeight,
      },
    };

    if (dimensions.width! < Constants.sizes.tablet) {
      dimensions.media = "phone";
    } else if (dimensions.width! < Constants.sizes.desktop) {
      dimensions.media = "tablet-portrait";
    } else {
      dimensions.media = "desktop";
    }

    dimensions.transcription = {
      height: dimensions.height! - dimensions.header!.height - dimensions.headerTitle!.height - dimensions.footer!.height,
      width: Math.min(Constants.sizes.tablet, dimensions.width! / 2) - 20,
    };

    return dimensions as Types.Dimensions;
  };

  const [dimensions, setDimensions] = useState <Types.Dimensions> (calculateDimensions());

  useEffect(() => {
    const handleResize = () => setDimensions(calculateDimensions());
    window.addEventListener("resize", handleResize);

    // Initial calculation on mount
    setDimensions(calculateDimensions());

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Styled.GlobalStyles />
      <AppContext.Provider value={{ ...dimensions }}>
        <div>
          <BrowserRouter basename="/maritimejournal">
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/index.html" element={<Landing />} />
              <Route path="map" element={<Map />} />
              <Route path="about" element={<About />} />
              <Route path="contactUs" element={<ContactUs />} />
              <Route path=":page" element={<PageViewer />} />
              <Route path="vernonguyonlocke" element={<VernonGuyonLocke />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
