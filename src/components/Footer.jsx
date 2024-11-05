import "../styles/footer.css";
import Levi from "../assets/Levi.jpg";

function Footer() {
  return (
    <div className="footer-background flex-row2">
      <div className="footer-col-sm">
        <img className="footer-image" src={Levi} />
      </div>
      <div className="footer-col-lg">
        <div className="footer-title">The Law Office of Levi Turner</div>
        <div className="footer-text">
          Copyright 2024, The Law Office of Levi Turner
        </div>
        <div className="footer-text">Disclaimer | Privacy Policy</div>
      </div>
    </div>
  );
}

export default Footer;
