import { useRef } from "react";
import { NavBar } from "./components/navbar/NavBar.jsx";
import { Footer } from "./components/views/footer/Footer.jsx";
import { Header } from "./components/views/header/Header.jsx";
import { Main } from "./components/views/main/Main.jsx";
import { About } from "./components/views/about/About.jsx";


function App() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const scrollComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: "end" })
  }


  return (
    <>
      <NavBar section1={section1} section2={section2} section3={section3} scrollComponent={scrollComponent} />
      <Header ref={section1} />
      <Main ref={section2} />
      <About />
      <Footer ref={section3} />
    </>
  );
}

export default App;
