import "./App.css";

import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";

function App() {
  return (
    <div className='App'>
      {/* <Splash /> */}
      <Navbar />
      <Hero />
      <AboutMe />
      {/* <Space /> */}
      <Footer />
    </div>
  );
}

export default App;
