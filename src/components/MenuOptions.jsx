import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// eslint-disable-next-line react/prop-types
function MenuOptions({ closeModal }) {
  return (
    <div className="flex flex-col items-start justify-between z-50 font-bold h-full w-full bg-grey text-black fixed inset-0 overflow-hidden">
      <button
        onClick={closeModal}
        className="absolute top-1 right-4 bg-grey border-none text-bronze p-0 cursor-pointer my-8"
      >
        X
      </button>
      <div className="flex flex-col items-start justify-center mx-8 my-8">
        <a href="#home">
          <button
            onClick={closeModal}
            className="bg-grey border-none text-black p-0 cursor-pointer my-8"
          >
            HOME
            <ArrowForwardIcon />
          </button>
        </a>
        <a href="#form">
          <button
            onClick={closeModal}
            className="bg-grey border-none text-bronze p-0 cursor-pointer my-8"
          >
            BOOK A FREE CONSULTATION <ArrowForwardIcon />
          </button>
        </a>
        <a href="#services">
          <button
            onClick={closeModal}
            className="bg-grey border-none text-black p-0 cursor-pointer my-8"
          >
            SERVICES
            <ArrowForwardIcon />
          </button>
        </a>
        <a href="#reviews">
          <button
            onClick={closeModal}
            className="bg-grey border-none text-black p-0 cursor-pointer my-8"
          >
            REVIEWS
            <ArrowForwardIcon />
          </button>
        </a>
        <a href="#contact">
          <button
            onClick={closeModal}
            className="bg-grey border-none text-black p-0 cursor-pointer my-8"
          >
            LOCATION & CONTACT
            <ArrowForwardIcon />
          </button>
        </a>
      </div>
      <div className="w-full bg-navy text-white">
        <div>The Law Office of Levi Turner</div>
        <div>(606) 896-8022 </div>
      </div>
    </div>
  );
}

export default MenuOptions;
