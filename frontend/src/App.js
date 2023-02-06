import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import VideoCallApplication from "./pages/VideoCallApplication";
import Dashboard from "./pages/Dashboard";
import Feature2Marketplace from "./pages/Feature2Marketplace";
import Feature1Contracts from "./pages/Feature1Contracts";
import { useEffect } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
// import Notifications from "./pages/Notifications";
import TermsConditions from "./pages/TermsConditions";
import LiveVideo from "./pages/LiveVideo";

function App({ huddleClient }) {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/agreement":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace":
        title = "";
        metaDescription = "";
        break;
      case "/contracts":
        title = "";
        metaDescription = "";
        break;
      case "/notifications":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
    <ConnectButton
      accountStatus={{
        smallScreen: 'avatar',
        largeScreen: 'full',
      }}
    />
    <Routes>
      <Route path="/agreement" element={<VideoCallApplication huddleClient={huddleClient} />} />

      <Route path="/" element={<Dashboard />} />

      <Route path="/marketplace" element={<Feature2Marketplace />} />

      <Route path="/contracts" element={<Feature1Contracts />} />
      {/* <Route path="/notifications" element={<Notifications />} /> */}
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/walkthrough" element={<LiveVideo />} />
    </Routes>
    </>

  );
}
export default App;
