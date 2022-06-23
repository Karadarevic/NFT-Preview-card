import React from "react";
import "./App.css";
import equilibrium from "./images/image-equilibrium.jpg";
import icon from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";

export default () => {
  return (
    <div className="fullbox">
      <div className="center">
        <img className="equilibrium" alt="nft" src={equilibrium} />
        <p className="nft-name">Equilibrium #3429</p>
        <p className="description">
          Our Equilibirum collection promotes balance and calm.
        </p>
        <div className="info">
          <div className="price">
            <img className="icon" src={icon} alt="icon" />{" "}
            <p className="value"> 0.041 ETH</p>
          </div>
          <div className="time">
            <img className="clock" src={clock} alt="clock" />{" "}
            <p className="time-left">3 days left</p>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};
