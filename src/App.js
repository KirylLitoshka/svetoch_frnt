import React from "react";
import Header from "./components/ui/header/Header";
import Footer from "./components/ui/footer/Footer";
import Main from "./pages/main/Main";
import MainRoutes from "./routes/MainRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <Router>
        <Header />
        <Main>
          <MainRoutes />
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
