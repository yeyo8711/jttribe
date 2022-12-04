import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/MainContent";
import Stats from "./components/Stats";
import TokenInfo from "./components/TokenInfo";
// const hello = process.env.REACT_APP_TEST_VARIABLE;

function App() {
  return (
    <div>
      <Header />
      <Banner />
      {false ? <Main /> : <TokenInfo />}

      <Stats />
      <Footer />
    </div>
  );
}

export default App;
