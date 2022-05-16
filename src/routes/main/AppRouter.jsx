import React from 'react';
import Header from "../../components/ui/header/Header";
import Footer from "../../components/ui/footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Title from "../../pages/title/Title";
import SubApp from "../../pages/subapp/SubApp";

const AppRouter = ({currentApp, changeCurrentApp}) => {
  return (
      <React.Fragment>
        <Router>
          <Header currentApp={currentApp}/>
          <main className="main">
            <div className="container">
              <div className="main-page">
                <Routes>
                  <Route path="/" element={<Title changeCurrentApp={changeCurrentApp}/>}/>
                  <Route path="/:name" element={<SubApp/>}/>
                </Routes>
              </div>
            </div>
          </main>
          <Footer/>
        </Router>
      </React.Fragment>
  );
};

export default AppRouter;