import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../styles/menuOptions.css";

// eslint-disable-next-line react/prop-types
function MenuOptions({closeModal}) {
  return (
    <div className="modal">
      <a>
        HOME
        <ArrowForwardIcon />
      </a>
      <a>
        BOOK A FREE CONSULTATION
        <ArrowForwardIcon />
      </a>
      <a>
        SERVICES
        <ArrowForwardIcon />
      </a>
      <a>
        REVIEWS
        <ArrowForwardIcon />
      </a>
      <a>
        LOCATION & CONTACT
        <ArrowForwardIcon />
      </a>
      <button onClick={closeModal}>X</button>
      <div className="menu-footer">
        <div>The Law Office of Levi Turner</div>
        <div>(606) 896-8022 </div>
      </div>
    </div>
  );
}

export default MenuOptions;
