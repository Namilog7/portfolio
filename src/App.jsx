import { useRef } from "react";
import { NavBar } from "./components/navbar/NavBar.jsx";
import { Footer } from "./components/views/footer/Footer.jsx";
import { Header } from "./components/views/header/Header.jsx";
import { Main } from "./components/views/main/Main.jsx";
import { About } from "./components/views/about/About.jsx";


function App() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null)
  const section4 = useRef(null);

  const scrollComponent = (ref) => {
    console.log(ref.current.id)
    if (ref.current.id == "header") {
      ref.current.scrollIntoView({ behavior: "smooth", block: "end" })
    } else
      ref.current.scrollIntoView({ behavior: 'smooth', block: "start" })
  }


  return (
    <>
      <NavBar section1={section1} section2={section2} section3={section3} section4={section4} scrollComponent={scrollComponent} />
      <Header ref={section1} />
      <Main ref={section2} />
      <About ref={section3} />
      <Footer ref={section4} />
    </>
  );
}

export default App;
