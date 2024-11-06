import SendIcon from "@mui/icons-material/Send";

function ConsultationForm() {
  return (
    <div className="flex flex-col items-center justify-center w-full" id="form">
      <div className="flex flex-col items-center justify-center w-11/12 p-1 bg-bronze my-4 lg:w-1/2">
        <span className="text-2xl font-bold">Book Free Consultation</span>
        <span className="text-base">with The Law Office of Levi Turner</span>
        <input
          className="w-3/4 py-3 px-5 my-2 mx-0 bg-white text-light-grey border-none"
          type="text"
          value="Full Name*"
        />
        <input
          className="w-3/4 py-3 px-5 my-2 mx-0 bg-white text-light-grey border-none"
          type="text"
          value="Phone Number*"
        />
        <input
          className="w-3/4 py-3 px-5 my-2 mx-0 bg-white text-light-grey border-none"
          type="text"
          value="Email Address*"
        />
        <textarea
          className="w-3/4 h-32 py-3 px-5 my-2 mx-0 bg-white text-light-grey border-none align-top"
          placeholder="Brief Description of Your Case*"
        />
        <div className="bg-navy w-10/12 p-4 my-4 rounded-md">
          Send Confidential Message
          <SendIcon className="pl-1 align-bottom" />
        </div>
        <div className="text-2xl font-bold m-4">
          What happens during the free consultation?
        </div>
        <ul className="list-disc list-inside">
          <li className="text-left my-8 mx-2">
            Tell your side of the story, going over the details of your case and
            ask any questions you may have.
          </li>
          <li className="text-left my-8 mx-2">
            Receive feedback and find out if your claim is worth pursuing based
            on our expertise in Kentucky law.
          </li>
          <li className="text-left my-8 mx-2">
            Understand the next steps and how we will prepare your case going
            forward.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ConsultationForm;
