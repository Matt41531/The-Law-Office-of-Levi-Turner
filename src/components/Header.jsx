import MenuIcon from "@mui/icons-material/Menu";
import CircleIcon from "@mui/icons-material/Circle";
import MenuOptions from "./MenuOptions";
import { createPortal } from "react-dom";
import { useState } from "react";

function Header() {
  return (
    <div className="sticky top-0 xl:static" id="home">
      <div className="flex w-full justify-center items-center">
        <MenuButton />
        <div className="flex justify-center items-center bg-navy p-4 w-full text-2xl font-bold h-24 lg:text-4xl 2xl:text-5xl lg:w-3/5">
          The Law Office of Levi Turner
        </div>
      </div>
      <div className="flex items-center justify-around text-xl font-bold w-full bg-grey h-14 text-black lg:text-2xl">
        <span>Free Consultation</span>
        <CircleIcon style={{ fontSize: 10 }} />
        <span>(606) 896-8022</span>
      </div>
    </div>
  );
}

function MenuButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className="bg-bronze text-base h-24 w-24 lg:text-2xl lg:hidden"
        onClick={openModal}
      >
        <MenuIcon style={{ fontSize: 48 }} />
        <div>MENU</div>
      </div>

      {isModalOpen &&
        createPortal(<MenuOptions closeModal={closeModal} />, document.body)}
      <div className="hidden lg:flex lg:flex-row lg:justify-between lg:h-24 lg:bg-navy lg:w-2/5 lg:scroll-p-0">
        <a href="#services">
          <button className="bg-navy border-none border-0 text-white p-0 cursor-pointer my-8 mx-4">
            Services
          </button>
        </a>
        <a href="#reviews">
          <button className="bg-navy border-none border-0 text-white p-0 cursor-pointer my-8 mx-4">
            Reviews
          </button>
        </a>
        <a href="#contact">
          <button className="bg-navy border-none border-0 text-white p-0 cursor-pointer my-8 mx-4">
            Contact
          </button>
        </a>
        <a href="#form">
          <button className="bg-bronze text-white font-bold cursor-pointer my-5 mx-4">
            Meet With Levi
          </button>
        </a>
      </div>
    </>
  );
}

export default Header;
