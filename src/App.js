import Header from "./components/Header";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
