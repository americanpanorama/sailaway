import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from './Contexts';
import Header from "./components/Header.tsx";
import PageViewer from "./components/PageViewer/Index.tsx";
import Landing from "./components/Landing/Index.tsx";
import Footer from "./components/Footer.tsx";
import About from "./components/About.tsx";
import Map from './components/Map.tsx';
import ContactUs from './components/ContactUs';
import "./styles/App.scss";

function App() {
  const calculateDimensions = () => {
    const { innerWidth, innerHeight } = window;
    const { clientWidth, clientHeight } = (document.documentElement) ? document.documentElement : { clientWidth: null, clientHeight: null };
    const dimensions = {
      width: clientWidth || innerWidth,
      height: clientHeight || innerHeight,
      header: {
        height: 61,
      },
      headerTitle: {
        height: 60,
      },
      footer: {
        height: 46,
      },
    };

    console.log(dimensions.width);

    if (dimensions.width < 600) {
      dimensions.media = 'phone';
    } else if (dimensions.width < 1000) {
      dimensions.media = 'tablet-portrait';
    } else {
      dimensions.media = 'desktop';
    }
    dimensions.transcription = {
      height: dimensions.height - dimensions.header.height - dimensions.headerTitle.height - dimensions.footer.height,
      width: Math.min(600, dimensions.width / 2) - 20,
    }

    return dimensions;
  };

  const [dimensions, setDimensions] = useState(calculateDimensions());

  useEffect(() => {
    window.addEventListener('resize', () => setDimensions(calculateDimensions()));
    setDimensions(calculateDimensions());
  }, []);

  return (
    <AppContext.Provider value={{ ...dimensions }}>
      <div className="App">
        <BrowserRouter basename="/sailaway">
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/index.html" element={<Landing />} />
            <Route path='map' element={<Map />} />
            <Route path='about' element={<About />} />
            <Route path='contactUs' element={<ContactUs />} />
            <Route path=":page" element={<PageViewer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
