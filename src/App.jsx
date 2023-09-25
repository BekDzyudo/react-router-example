import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { News } from "./components/news";
import { Company } from "./components/aboutChild/company";
import { Team } from "./components/aboutChild/team";
import { Param } from "./components/aboutChild/param";
import { Error } from "./components/error";

function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
          <Route path=":param" element={<Param />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
