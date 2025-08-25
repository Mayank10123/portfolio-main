import { useEffect } from "react";
import ReactGA from "react-ga4";
import Ubuntu from "../components/ubuntu";
import Meta from "../components/SEO/Meta";

const TRACKING_ID = "G-LN0ZDFY5VE"; // <-- replace with your ID

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");
  }, []);

  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  );
}

export default App;
