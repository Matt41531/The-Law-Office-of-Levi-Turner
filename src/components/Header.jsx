import MenuIcon from "@mui/icons-material/Menu";
import CircleIcon from "@mui/icons-material/Circle";
import "../styles/Header.css";

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
  return (
    <div className="menu-block">
      <MenuIcon style={{ fontSize: 48 }} />
      <span className="display-block">MENU</span>
    </div>
  );
}

export default Header;
