import AppRouter from "./Router";

import "./styles/GlobalStyle.css";
import "./styles/fonts.css";

import NavigationBar from "@components/NavigationBar/NavigationBar";
import Footer from "@components/Footer/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
