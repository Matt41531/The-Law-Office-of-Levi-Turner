/* eslint-disable react/prop-types */
import facebookLogo from "../assets/Facebook-Logo-cropped.png";
import StarIcon from "@mui/icons-material/Star";

function Reviews() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-1" id="reviews">
      <div className="text-3xl font-bold text-black mx-2">What People Are Saying</div>
      <Review
        arrayOfStars={[
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={0}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={1}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={2}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={3}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
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
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={0}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={1}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={2}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={3}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
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
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={0}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={1}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={2}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
            key={3}
          />,
          <StarIcon
            className="mx-3"
            fontSize="large"
            sx={{ color: '#34C759' }}
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
    <div className="flex flex-col justify-center w-full items-center">
      <div>{arrayOfStars}</div>
      <div className="text-base text-black mx-8">{reviewText}</div>
      <div className="my-6 flex flex-col justify-center items-center w-full">
        <div className="text-black">{contactName}</div>
        <div className="text-black">{contactLocation}</div>
        <img src={reviewLogo} className="w-12"/>
      </div>
    </div>
  );
}

export default Reviews;
