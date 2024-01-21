import Nav from "./navBar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "./men";
import Women from "./women";
import OurTeam from "./ourteam";
import Home from "./home";
import Action from "./action";
import Kids from "./kids";
import Drama from "./drama";
import Romantic from "./romantic";
import PageNotFound from "./PageNotFound";
import Sign from "./sign";
import DummyPost from "./DummyPost";
import Contact from "./Contact";
import Main from "./main";
import Order from "./order";
function App() {
  return (
    <body>
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="dummy" element={<DummyPost />}></Route>
            <Route path="Order" element={<Order />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="/" element={<Sign />}></Route>
            <Route path="Home" element={<Home />}>
              <Route>
                <Route path="Action" element={<Action />}></Route>
                <Route path="Kids" element={<Kids />}></Route>
                <Route path="Drama" element={<Drama />}></Route>
                <Route path="Romantic" element={<Romantic />}></Route>
              </Route>
            </Route>
            <Route path="Home/*" element={<PageNotFound />}></Route>
            <Route path="Explore" element={<Men />}></Route>
            <Route path="Women" element={<Women />}></Route>
            <Route path="OurTeam" element={<OurTeam />}></Route>
            <Route path="SignUp" element={<Main />}></Route>
            <Route path="/Home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
      </div>
    </body>
  );
}

export default App;
