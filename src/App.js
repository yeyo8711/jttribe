import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/MainContent";
import Stats from "./components/Stats";
import TokenInfo from "./components/TokenInfo";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AppContext } from "./context/appContext";

// const hello = process.env.REACT_APP_TEST_VARIABLE;

function App() {
  const { userAddress } = useContext(AppContext); // no auto-completion?

  return (
    <>
      <Header />
      <Banner />
      {userAddress == null ? <Main /> : <TokenInfo />}
      <Stats />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
