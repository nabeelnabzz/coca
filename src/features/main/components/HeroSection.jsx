import nextArrow from "../../../assets/next-arrow.png";
import graphIcon from "../../../assets/graph-icon.svg";
import babChart from "../../../assets/line-and-bar-chart.png";
import LabelWithIcon from "./LabelWithIcon";
import BannerRatingCard from "./BannerRatingCard";
import BannerTotalPartnerCard from "./BannerTotalPartnerCard";

function HeroSection() {
  return (
    <div className="grid grid-cols-12 mt-4">
      <div className="grid col-span-12 md:col-span-8">
        <div className="banner-image rounded-lg p-10">
          <p className="font-normal text-[16px] text-white sm:max-w-[400px]">
            All the features you need in one App for any kind of your business
            🚀
          </p>
          <p className="font-medium text-[64px] text-white sm:max-w-[700px] leading-[76px] mt-6">
            Manage your restaurant business so advanced
          </p>
          <button className="flex justify-center items-center gap-3 px-4 py-1 mt-6 bg-[#FF5C00] rounded-[58px]">
            <p className="text-white text-[14px]">Get Started for Free</p>
            <img src={nextArrow} alt="next-arrow" />
          </button>
        </div>
      </div>
      <div className="grid col-span-12 md:col-span-4">
        <div>
          <div className="bg-[#F8F9FD] p-4">
            <LabelWithIcon icon={graphIcon} label="Sales Statistics" light />
            <div>
              <img src={babChart} alt="chart" width="100%" height="auto" />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-5">
              <BannerRatingCard />
              <BannerTotalPartnerCard />
            </div>
            {/* <div>
            <Carousel data={carouselContents} cardsToShow={1} />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="grid grid-cols-12">
<div className="grid col-span-6"></div>
<div className="grid col-span-6"></div>
</div> */
}

export default HeroSection;
