import MenuIcon from "@mui/icons-material/Menu";
import CircleIcon from "@mui/icons-material/Circle";
import MenuOptions from "./MenuOptions";
import "../styles/header.css";
import { useState } from "react";

function Header() {
  return (
    <div className="sticky">
      <div className="header">
        <MenuButton />
        <div className="title-block">The Law Office of Levi Turner</div>
      </div>
      <div className="call-to-action">
        <span className="consultation-text">Free Consultation</span>
        <CircleIcon style={{ fontSize: 10 }} />
        <span className="consultation-text">(606) 896-8022</span>
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
    console.log("Closing Modal");
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="menu-block" onClick={openModal}>
        <MenuIcon style={{ fontSize: 48 }} />
        <span className="display-block">MENU</span>
      </div>

      {isModalOpen && <MenuOptions closeModal={closeModal} />}
    </>
  );
}

export default Header;
