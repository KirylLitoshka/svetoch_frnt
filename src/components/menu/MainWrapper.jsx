import React from 'react';
import "./MainWrapper.css";

const MainWrapper = (props) => {
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

export default MainWrapper;