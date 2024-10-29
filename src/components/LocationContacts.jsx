import "../styles/locationContacts.css";
import lawOffice from "../assets/law-office.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function LocationContacts() {
  return (
    <div className="flex-col">
      <div className="location-title">Location & Contact</div>
      <div className="location-text">
        1319 Cumberland Ave. Middlesboro, KY 40965
      </div>
      <img className="office-image" src={lawOffice} />
      <div className="directions-text-box">
        <a className="directions-text" target="_blank" href="https://www.google.com/maps/dir//1319+E+Cumberland+Ave,+Middlesboro,+KY+40965/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x885c84cf2a5b4c81:0x9a8455b676f016f7?sa=X&ved=1t:707&ictx=111">
          GET DIRECTIONS <ArrowForwardIcon className="inline-icon"/>
        </a>
      </div>
      <div className="phone-number">(606) 896-8022</div>
    </div>
  );
}

export default LocationContacts;
