import React from "react";
import "./styles/App.css";
import Title from "./components/layout/title/Title";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./components/ui/footer/Footer";
import Header from "./components/ui/header/Header";

function App() {
  return (
    <div className="page-wrapper">
      <Router>
        <Header/>
        <main className="main">
          <Routes>
            <Route path="/" element={<Title/>}/>
            {/*<Route path="/energy" element={<Energy/>}/>*/}
            {/*<Route path="/water" element={<Water/>}/>*/}
            {/*<Route path="/tbo" element={<TBO/>}/>*/}
            {/*<Route path="/accounting" element={<Accounting/>}/>*/}
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
