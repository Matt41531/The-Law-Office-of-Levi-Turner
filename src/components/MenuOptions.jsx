import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// eslint-disable-next-line react/prop-types
function MenuOptions({closeModal}) {
  return (
    <div className="font-bold h-full w-full bg-grey">
      <a>
        HOME
        <ArrowForwardIcon />
      </a>
      <a className="text-bronze">
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
      <div className="w-full bg-navy">
        <div>The Law Office of Levi Turner</div>
        <div>(606) 896-8022 </div>
      </div>
    </div>
  );
}

export default MenuOptions;
