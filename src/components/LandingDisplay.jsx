import officeLogo from "../assets/logo.jpg";

function LandingDisplay() {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <img className="w-[25.1875rem] h-[23.6875rem]" src={officeLogo} />
      </div>
      <div className="flex items-center justify-center w-full">
        <a className=" text-white no-underline w-11/12 lg:w-1/3" href="#form">
          <div className="bg-bronze text-base font-bold w-full py-4 lg:text-lg">
            REQUEST A FREE CONSULTATION HERE
          </div>
        </a>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="text-black text-4xl font-bold my-4 px-12">
          Proudly Serving All of <span className="text-bronze text-4xl font-bold">Kentucky</span>
          .
        </div>
      </div>
    </>
  );
}

export default LandingDisplay;
