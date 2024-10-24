/* eslint-disable react/prop-types */
import facebookLogo from "../assets/Facebook-Logo-cropped.png";
import "../styles/reviews.css";
import StarIcon from "@mui/icons-material/Star";

function Reviews() {
  return (
    <div className="flex-col reviews-box">
      <div className="review-header">What People Are Saying</div>
      <Review
        arrayOfStars={[
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={0}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={1}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={2}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={3}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={4}
          />,
        ]}
        reviewText={
          "“A great man for a great town!  Levi can do what the big guys do with out charging you an arm and a leg.”"
        }
        contactName={"Jared Ewbank,"}
        contactLocation={"Lawrenceburg, IN"}
        reviewLogo={facebookLogo}
      />
      <Review
        arrayOfStars={[
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={0}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={1}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={2}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={3}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={4}
          />,
        ]}
        reviewText={
          "“Mr. Turner worked really hard on my case. He has stayed in office up until midnight and later preparing. He has worked with amazing colleagues. I recommend Mr. Turner for any legal case you need representation for. Hes clearly very intelligent with our laws and in general. The best part in my opinion is he has a heart and cares for his clients. His staff is very nice and on point. They get things done.”"
        }
        contactName={"Philip Johnson,"}
        contactLocation={"Middlesboro, KY"}
        reviewLogo={facebookLogo}
      />
      <Review
        arrayOfStars={[
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={0}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={1}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={2}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={3}
          />,
          <StarIcon
            className="stars"
            fontSize="large"
            color={"success"}
            key={4}
          />,
        ]}
        reviewText={
          "“Great Lawyer. Highly recommend to all Kentucky residents.”"
        }
        contactName={"Matthew D Davidson,"}
        contactLocation={"Hamilton, OH"}
        reviewLogo={facebookLogo}
      />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Review({
  arrayOfStars,
  reviewText,
  contactName,
  contactLocation,
  reviewLogo,
}) {
  return (
    <div>
      <div>{arrayOfStars}</div>
      <div className="review-text">{reviewText}</div>
      <div className="contact-block">
        <div className="review-contact">{contactName}</div>
        <div className="review-contact">{contactLocation}</div>
        <img src={reviewLogo} className="review-logo" />
      </div>
    </div>
  );
}

export default Reviews;
