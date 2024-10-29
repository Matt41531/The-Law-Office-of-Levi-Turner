import officeLogo from "../assets/logo.jpg";
import "../styles/landingDisplay.css";

function LandingDisplay() {
  return (
    <>
      <div className="landing-display">
        <img className="landing-img" src={officeLogo} />
      </div>
      <div className="landing-display">
        <a className="button-link" href="#form">
          <div className="consultation-button">
            REQUEST A FREE CONSULTATION HERE
          </div>
        </a>
      </div>
      <div className="landing-display">
        <div className="large-text landing-text">
          Proudly Serving All of <span className="kentucky-text">Kentucky</span>
          .
        </div>
      </div>
    </>
  );
}

export default LandingDisplay;
