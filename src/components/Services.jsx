import "../styles/services.css";
import verifiedShield from "../assets/verified-shield.png";

function Services() {
  return (
    <>
      <div className="services-container">
        <div className="flex-row">
          <span className="two-rem-text">We are here to help.</span>
        </div>
        <div className="flex-row">
          <span className="small-text">
            Personal injury claims we can assist with:
          </span>
        </div>
        <div className="flex-col">
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
          <span className="small-text">and much more.</span>
          <span className="bottom-text">Not sure if you have a case? Call Today:</span>
          <span className="number-text">(606) 896-8022</span>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function ServiceCard({ title, description }) {
  return (
    <div className="service-card">
      <img src={verifiedShield} />
      <span className="title-text">{title}</span>
      <p className="description-text">{description}</p>
    </div>
  );
}

export default Services;
