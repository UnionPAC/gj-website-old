import { Navbar } from "./components/Navbar";
import { Showcase } from "./components/Showcase";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";

import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <About />
      <Portfolio />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
