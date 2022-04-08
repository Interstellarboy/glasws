import AboutUs from "./AboutUs";
import "./App.css";
import Footer from "./Footer";
import "./HomePage";
import HomePage from "./HomePage";
import Nav from "./Nav";
import Services from "./Services";
import StartUp from "./StartUp";

function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <AboutUs />
      <Services />
      <StartUp />
      <Footer />
    </div>
  );
}

export default App;
