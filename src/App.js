import { Navbar } from "./components/Navbar";
import { Showcase } from "./components/Showcase";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Interests } from "./components/Interests";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <About />
      <Portfolio />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
