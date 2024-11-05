import "../styles/consultationForm.css";
import SendIcon from "@mui/icons-material/Send";

function ConsultationForm() {
  return (
    <div className="flex-col2" id="form">
      <div className="consultation-form flex-col2 p-1">
        <span className="consultation-title">Book Free Consultation</span>
        <span className="consultation-desc">
          with The Law Office of Levi Turner
        </span>
        <input type="text" value="Full Name*" />
        <input type="text" value="Phone Number*" />
        <input type="text" value="Email Address*" />
        <input type="text" value="Brief Description of Your Case*" />
        <div className="message-button">
          Send Confidential Message
          <SendIcon className="inline-icon"/>
        </div>
        <div className="consultation-title">
          What happens during the free consultation?
        </div>
        <ul className="list-disc list-inside">
          <li className="consultation-desc">
            Tell your side of the story, going over the details of your case and
            ask any questions you may have.
          </li>
          <li className="consultation-desc">
            Receive feedback and find out if your claim is worth pursuing based
            on our expertise in Kentucky law.
          </li>
          <li className="consultation-desc">
            Understand the next steps and how we will prepare your case going
            forward.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ConsultationForm;
