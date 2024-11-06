import lawOffice from "../assets/law-office.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function LocationContacts() {
  return (
    <div className="flex flex-col items-center justify-center w-full" id="contact">
      <div className="text-3xl font-bold text-black my-8">Location & Contact</div>
      <div className="text-xl font-bold text-black mx-6">
        1319 Cumberland Ave. Middlesboro, KY 40965
      </div>
      <img className="w-11/12 border-4 border-solid border-black" src={lawOffice} />
      <div className="my-4">
        <a className="text-black text-xl font-bold my-4 hover:text-black" target="_blank" href="https://www.google.com/maps/dir//1319+E+Cumberland+Ave,+Middlesboro,+KY+40965/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x885c84cf2a5b4c81:0x9a8455b676f016f7?sa=X&ved=1t:707&ictx=111">
          GET DIRECTIONS <ArrowForwardIcon className="align-bottom" style={{ fontSize: 30 }}/>
        </a>
      </div>
      <div className="text-bronze font-bold text-4xl my-4 tracking-widest">(606) 896-8022</div>
    </div>
  );
}

export default LocationContacts;
