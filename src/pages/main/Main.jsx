import React from 'react';
import "./Main.css";

const Main = (props) => {
  return (
      <main className="main">
        <div className="container">
          <div className="main-page">
            {props.children}
          </div>
        </div>
      </main>
  );
};

export default Main;