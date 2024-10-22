import "../styles/locationContacts.css";
import lawOffice from "../assets/law-office.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function LocationContacts() {
  return (
    <div className="flex-col">
      <div className="location-title">Location & Contact</div>
      <div className="location-text">
        1319 Cumberland Ave. Middlesboro, KY 40965
      </div>
      <img className="office-image" src={lawOffice} />
      <div className="directions-text">GET DIRECTIONS <ArrowForwardIcon/> </div>
      <div className="phone-number">(606) 896-8022</div>
    </div>
  );
}

export default LocationContacts;
