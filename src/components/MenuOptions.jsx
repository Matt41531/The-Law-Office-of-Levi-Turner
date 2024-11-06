import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// eslint-disable-next-line react/prop-types
function MenuOptions({ closeModal }) {
  return (
    <div className="flex flex-col items-start justify-center z-50 font-bold h-full w-full bg-grey text-black fixed inset-0 p-8">
      <button onClick={closeModal} className="absolute top-1 right-4 bg-grey border-none text-bronze p-0 cursor-pointer my-8">X</button>
      <a href="#home">
        <button
          onClick={closeModal}
          className="bg-grey border-none text-black p-0 cursor-pointer my-8"
        >
          HOME
          <ArrowForwardIcon />
        </button>
      </a>
      <a href="#contact">
        <button
          onClick={closeModal}
          className="bg-grey border-none text-bronze p-0 cursor-pointer my-8"
        >
          Book A Free Consultation <ArrowForwardIcon />
        </button>
      </a>
      <a href="#services">
        <button
          onClick={closeModal}
          className="bg-grey border-none text-black p-0 cursor-pointer my-8"
        >
          Services
          <ArrowForwardIcon />
        </button>
      </a>
      <a href="#reviews">
        <button
          onClick={closeModal}
          className="bg-grey border-none text-black p-0 cursor-pointer my-8"
        >
          Reviews
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
      <div className="w-full bg-navy text-white bottom-0">
        <div>The Law Office of Levi Turner</div>
        <div>(606) 896-8022 </div>
      </div>
    </div>
  );
}

export default MenuOptions;
