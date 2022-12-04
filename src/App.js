import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/MainContent";
import Stats from "./components/Stats";
import TokenInfo from "./components/TokenInfo";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const hello = process.env.REACT_APP_TEST_VARIABLE;

function App() {
  return (
    <>
      <Header />
      <Banner />
      {true ? <Main /> : <TokenInfo />}
      <Stats />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
