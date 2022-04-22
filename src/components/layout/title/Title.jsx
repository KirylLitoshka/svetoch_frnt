import React from "react";
import {Link} from "react-router-dom";
import "./Title.css";

const Title = () => {
  return (
    <div className="title-page">
      <div className="title-page__content">
        <div className="title-page__button">
          <Link className="title-page__button-link" to="/energy">
            Энергия
          </Link>
        </div>
        <div className="title-page__button">
          <Link className="title-page__button-link" to="/water">
            Вода
          </Link>
        </div>
        <div className="title-page__button">
          <Link className="title-page__button-link" to="/tbo">
            ТБО
          </Link>
        </div>
        <div className="title-page__button">
          <Link className="title-page__button-link" to="/accounting">
            Бухгалтерия
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Title;
