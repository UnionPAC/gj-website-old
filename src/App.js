import { Navbar } from "./components/Navbar";
import { Showcase } from "./components/Showcase";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <About />
      <Portfolio />
      <Blog />
    </div>
  );
}

export default App;
