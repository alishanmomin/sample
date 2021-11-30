import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Service from "./components/Services";
import { Testinomial } from "./components/Testinomial";
function App() {
  return (
    <div className="App">
      <Nav />
      <Service />
      <Testinomial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
