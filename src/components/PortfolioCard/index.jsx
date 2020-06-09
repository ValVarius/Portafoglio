import React from "react";

export default function PortfolioCard() {
  return (
    <div className="panel">
      {/* style="width: 100%;"

      FIRST OF TWO COLUMNS 
      <div className="col-6">
        <h5 className="card-title">Portfolio</h5>
      </div>
      SECOND OF TWO COLUMNS 
      <div className="col-6"></div>

      <hr /> */}

      <div className="row projects">
        {/* FIRST PROJECT  */}
        <div className="col-4" id="first">
          <div className="dropdown">
            <div className="dropButton" id="dropbtn1">
              <div className="dropdown-content">
                <a href="https://github.com/commiewalker/Findr">
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          <p id="firstTitle">FINDR</p>

          <a href="https://commiewalker.github.io/Findr/" target="_blank" rel="noopener noreferrer">
            <img className = "img-fluid"  alt="Screenshot of findr app" src={require("../../public/findr.png")} />
          </a>
        </div>
        {/* SECOND PROJECT */}
        <div className="col-4" id="second">
          <div className="dropdown">
            <div className="dropButton" id="dropbtn2">
              <div className="dropdown-content">
                <a href="https://github.com/ValVarius/weather-Chanel">
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          <p id="secondTitle">Weather App</p>

          <a href="https://valvarius.github.io/weather-Chanel/" target="_blank" rel="noopener noreferrer">
            <img className = "img-fluid"  alt="Screenshot of weather app" src={require("../../public/weather.png")} />

          </a>
        </div>
        {/* THIRD PROJECT */}
        <div className="col-4" id="third">
          <div className="dropdown">
            <div className="dropButton" id="dropbtn3">
              <div className="dropdown-content">
                <a href="https://github.com/ValVarius/Password-Generator">
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          <p id="thirdTitle">Password Generator</p>

          <a
            href="https://valvarius.github.io/Password-Generator/"
            target="_blank" rel="noopener noreferrer"
          >
            
            <img className = "img-fluid"  alt="Screenshot of password app" src={require("../../public/passwordApp.png")} />

          </a>
        </div>
      </div>
     
      <br />

      <div className="row projects">
          {/* FOURTH PROJECT */}
        <div className="col-4" id="fourth">
          <div className="dropdown">
            <div className="dropButton" id="dropbtn4">
              <div className="dropdown-content">
                <a href="https://github.com/coleloui/MapleValley">
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          <p id="fourthTitle">Maple Valley</p>

          <a
            href="https://protected-lowlands-08660.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            
              <img className = "img-fluid"  alt="Screenshot of mapleValley app" src={require("../../public/mapleValley.png")} />

          </a>
        </div>
      </div>

      
    </div>
  );
}
