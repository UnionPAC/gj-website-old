import { Navbar } from "./components/Navbar";
import { Showcase } from "./components/Showcase";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";
import { Interests } from "./components/Interests";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <About />
      <Portfolio />
      <Blog />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
