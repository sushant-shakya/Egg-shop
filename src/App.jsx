import "./App.css";
import Login from "./components/pages/auth/login";
import { Route, Routes } from "react-router";
import Main from "./components/pages/home";
import Registration from "./components/pages/auth/registration";
import Detail from "./components/pages/detail";
import Shop from "./components/pages/shop";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";

function App() {
  return (
    <>
      <header></header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
