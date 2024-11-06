import verifiedShield from "../assets/verified-shield.png";

function Services() {
  return (
    <>
      <div className="bg-navy" id="services">
        <div className="flex flex-row w-full items-center justify-center">
          <span className="text-4xl font-bold mt-8 mb-1 lg:text-6xl">
            We are here to help.
          </span>
        </div>
        <div className="flex flex-row w-full items-center justify-center">
          <span className="text-base">
            Personal injury claims we can assist with:
          </span>
        </div>
        <div className="flex flex-col w-full items-center justify-around lg:flex-row flex-wrap">
          <ServiceCard
            title="Motor Vehicle Accidents"
            description="An accident victim may have the right to sue an at-fault driver
              for medical bills or lost wages."
          />
          <ServiceCard
            title="Workers’ Compensation"
            description="Injured at work? Get up to 66% of your average weekly wage while you are out."
          />
          <ServiceCard
            title="Social Security Disability"
            description="As many as 62% of SSD applicants are declined, get the help you need to finally get approved."
          />
          <ServiceCard
            title="Dog Attacks "
            description="Under KY’s strict liability law, the owner of the animal is legally obligated to pay damages."
          />
          <ServiceCard
            title="Assault & Battery"
            description="Kentucky law protects you from violence such as fights, sexual assaults, or being wrongly restrained."
          />
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <span className="text-base">and much more.</span>
          <span className="text-base my-2">
            Not sure if you have a case? Call Today:
          </span>
          <span className="text-2xl font-bold mb-8">(606) 896-8022</span>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function ServiceCard({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center w-5/6 h-64 bg-grey text-navy pb-3 my-2 rounded-md lg:w-80 lg:h-80">
      <img src={verifiedShield} />
      <div className="text-3xl font-bold">{title}</div>
      <p className="mx-8 text-xl">{description}</p>
    </div>
  );
}

export default Services;
