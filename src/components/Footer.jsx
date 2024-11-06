import Levi from "../assets/Levi.jpg";

function Footer() {
  return (
    <div className="bg-navy flex flex-row w-full justify-center items-center">
      <div className="w-1/4">
        <img className="w-10/12 border-solid border-4 border-white m-4" src={Levi} />
      </div>
      <div className="w-3/4">
        <div className="text-4xl">The Law Office of Levi Turner</div>
        <div className="text-xs">
          Copyright 2024, The Law Office of Levi Turner
        </div>
        <div className="text-xs">Disclaimer | Privacy Policy</div>
      </div>
    </div>
  );
}

export default Footer;
