import LabelWithIcon from "./LabelWithIcon";
import partner from "../../../assets/partner.svg";

const BannerTotalPartnerCard = () => {
  return (
    <div className="bg-[#6D6D6F] rounded-[32px] p-5 flex flex-col justify-between">
      <LabelWithIcon icon={partner} label="Total Partner" />
      <div className="text-white flex gap-2 flex-wrap items-center justify-center">
        <p className="font-semibold text-[46px]">50</p>
        <p className="font-semibold text-[18px]">thousands</p>
      </div>
    </div>
  );
};

export default BannerTotalPartnerCard;
