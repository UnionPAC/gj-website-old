import { Navbar } from "./components/Navbar";
import { Showcase } from "./components/Showcase";
import { About } from "./components/About";
import { Portfolio } from './components/Portfolio'

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
