import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Blog from "./Components/blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
