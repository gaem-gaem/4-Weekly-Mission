import NavigationBar from "@components/NavigationBar/NavigationBar";
import AppRouter from "./Router";
import "./styles/GlobalStyle.css";
import "./styles/fonts.css";
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
