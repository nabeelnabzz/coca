import LabelWithIcon from "./LabelWithIcon";
import ratingIcon from "../../../assets/rating-icon.svg";
import ratingStar from "../../../assets/rating-star.svg";

const BannerRatingCard = () => {
  return (
    <div className="bg-[#F2ECFF] rounded-[32px] p-5 flex flex-col gap-3">
      <LabelWithIcon icon={ratingIcon} label="Rating Review" light />
      <p className="max-w-[178px]">
        Reviews of some of our app restaurant industry companies.
      </p>
      <div className="flex gap-2 mt-3">
        <img src={ratingStar} alt="logo" />
        <p className="font-semibold text-[46px]">4.9</p>
      </div>
    </div>
  );
};

export default BannerRatingCard;
