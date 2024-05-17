import nextArrow from "../../../assets/next-arrow.png";
import graphIcon from "../../../assets/graph-icon.svg";
import babChart from "../../../assets/line-and-bar-chart.png";
import greenCircle from "../../../assets/green-circle.svg";
import blueCircle from "../../../assets/blue-circle.svg";
import violetCircle from "../../../assets/violet-circle.svg";
import imageFrame from "../../../assets/image-frame.png";
import avatar from "../../../assets/avatar.png";
import info from "../../../assets/info.svg";
import LabelWithIcon from "./LabelWithIcon";
import BannerRatingCard from "./BannerRatingCard";
import BannerTotalPartnerCard from "./BannerTotalPartnerCard";
import Carousel from "./Carousel";
import Restaurents from "./Restaurents";
import FeatureCard from "./FeatureCard";
import Heading from "./Heading";
import Button from "./Button";

function HeroSection() {
  const carouselContents = [
    {
      quote:
        "“Deliver a better customer experience and increase their operational efficiency.”",
      profilePicture: "../../../assets/avatar.png",
      name: "Patrick Fernandes",
      designation: "CEO at Burger King",
    },
    {
      quote:
        "“Deliver a better customer experience and increase their operational efficiency.”",
      profilePicture: "../../../assets/avatar.png",
      name: "Patrick Fernandes",
      designation: "CEO at Burger King",
    },
  ];
  return (
    <div className="flex gap-4 flex-grow flex-wrap mt-4">
      <div className="banner-image rounded-lg p-10">
        <p className="font-normal text-[16px] text-white max-w-[400px]">
          All the features you need in one App for any kind of your business 🚀
        </p>
        <p className="font-medium text-[64px] text-white max-w-[700px] leading-[76px] mt-6">
          Manage your restaurant business so advanced
        </p>
        <button className="flex justify-center items-center gap-3 px-4 py-1 mt-6 bg-[#FF5C00] rounded-[58px]">
          <p className="text-white text-[14px]">Get Started for Free</p>
          <img src={nextArrow} alt="next-arrow" />
        </button>
      </div>
      <div>
        <div className="bg-[#F8F9FD] p-4 min-w-[480px]">
          <LabelWithIcon icon={graphIcon} label="Sales Statistics" light />

          <div>
            <img src={babChart} alt="logo" width="380px" height="auto" />
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <BannerRatingCard />
            <BannerTotalPartnerCard />
          </div>
          {/* <div>
            <Carousel data={carouselContents} cardsToShow={1} />
          </div> */}
        </div>
      </div>
      <div className="max-w-[1300px] m-auto">
        <div className="w-full">
          <Restaurents />
        </div>
        <div className="w-full mt-20">
          <Heading label="Complementary features for your business needs" />

          <FeatureCard
            heading="Dashboard to monitor your business sales from anywhere"
            paragraph="    Dashboard provides in-depth insight into the performance menu
                items. You can see popular and unsold menus, helping you to
                monitor your restaurant business sales."
          />
          <FeatureCard
            heading="Easier and better Desk Management"
            paragraph="    Desk management becomes smoother with interactive table visualizations. You can manage orders, allocate tables and maximize restaurant capacity."
            flexReverse
          />
          <FeatureCard
            heading="More efficient customer recording and monitoring"
            paragraph="    Monitor order records to tailor orders to customer preferences, such as options to add or remove ingredients for a more personalized experience and better service."
          />
        </div>
        <div className="flex justify-center items-center gap-20 mt-20 w-full">
          <div>
            <Heading label="Packages for your business" />
          </div>
          <div>
            <Button label="Mount" background="#19191C" color="white" />
            <Button label="Annual" background="#F8F9FD" color="black" />
            <div className="flex gap-2 mt-2">
              <img src={info} alt="info" />
              <span className="text-[#19191C]">Annual -</span>
              <span className="text-[#FF5C00]">2 months free 🎉</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <table className="table-responsive">
            <tr>
              <th></th>
              <th className="">
                <div className="w-[243px] bg-[#E0F2D4] px-10 py-5 rounded-[20px]">
                  Basic
                </div>
              </th>
              <th className="">
                <span className="bg-[#FF5C00] border-[3px] text-[12px] border-white px-4 py-2 shadow-white text-white rounded-[100px] absolute ml-[-62px] mt-[-20px]">
                  Business choice
                </span>
                <div className="w-[243px] bg-[#D4E8FA] px-10 py-5 rounded-[20px]">
                  Business
                </div>
              </th>
              <th className="">
                <div className="w-[243px] bg-[#E6DBFF] px-10 py-5 rounded-[20px]">
                  Enterprise
                </div>
              </th>
            </tr>
            <tr className="!h-[136px]">
              <td className="!border-b">Price</td>
              <td className="bg-[#F1FAEB] !border-b min-w-[243px]">
                <div className=" flex justify-center items-center">
                  <span className="text-[48px] font-bold">$20</span>
                  <span className="text-[20px] font-medium">/month</span>
                </div>
              </td>
              <td className="bg-[#ECF6FF] !border-b min-w-[243px]">
                <div className=" flex justify-center items-center">
                  <span className="text-[48px] font-bold">$30</span>
                  <span className="text-[20px] font-medium">/month</span>
                </div>
              </td>
              <td className="bg-[#F2ECFF] !border-b min-w-[243px]">
                <div className=" flex justify-center items-center">
                  <span className="text-[48px] font-bold">$50</span>
                  <span className="text-[20px] font-medium">/month</span>
                </div>
              </td>
            </tr>
            <tr className="!h-[80px]">
              <td className="!border-b">Unlimited Transactions</td>
              <td className="bg-[#F1FAEB] !border-b">
                <div className="flex justify-center">
                  <img src={greenCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#ECF6FF] !border-b">
                <div className="flex justify-center">
                  <img src={blueCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#F2ECFF] !border-b">
                <div className="flex justify-center">
                  <img src={violetCircle} alt="green-circle" />
                </div>
              </td>
            </tr>
            <tr className="!h-[80px]">
              <td className="!border-b">Multi Outlet</td>
              <td className="bg-[#F1FAEB] !border-b">
                <div className="flex justify-center">
                  <img src={greenCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#ECF6FF] !border-b">
                <div className="flex justify-center">
                  <img src={blueCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#F2ECFF] !border-b">
                <div className="flex justify-center">
                  <img src={violetCircle} alt="green-circle" />
                </div>
              </td>
            </tr>
            <tr className="!h-[80px]">
              <td className="!border-b">Report Featured</td>
              <td className="bg-[#F1FAEB] !border-b">
                <div className="flex justify-center">
                  <img src={greenCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#ECF6FF] !border-b">
                <div className="flex justify-center">
                  <img src={blueCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#F2ECFF] !border-b">
                <div className="flex justify-center">
                  <img src={violetCircle} alt="green-circle" />
                </div>
              </td>
            </tr>
            <tr className="!h-[80px]">
              <td className="!border-b">Inventory Management</td>
              <td className="bg-[#F1FAEB] !border-b">
                <div className="flex justify-center">
                  <img src={greenCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#ECF6FF] !border-b">
                <div className="flex justify-center">
                  <img src={blueCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#F2ECFF] !border-b">
                <div className="flex justify-center">
                  <img src={violetCircle} alt="green-circle" />
                </div>
              </td>
            </tr>
            <tr className="!h-[80px]">
              <td className="!border-b">Direct report & teamreview</td>
              <td className="bg-[#F1FAEB] !border-b">
                <div className="flex justify-center">
                  <img src={greenCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#ECF6FF] !border-b">
                <div className="flex justify-center">
                  <img src={blueCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#F2ECFF] !border-b">
                <div className="flex justify-center">
                  <img src={violetCircle} alt="green-circle" />
                </div>
              </td>
            </tr>
            <tr className="!h-[80px]">
              <td className="!border-b">Emplovee Management System</td>
              <td className="bg-[#F1FAEB] !border-b">
                <div className="flex justify-center">
                  <img src={greenCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#ECF6FF] !border-b">
                <div className="flex justify-center">
                  <img src={blueCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#F2ECFF] !border-b">
                <div className="flex justify-center">
                  <img src={violetCircle} alt="green-circle" />
                </div>
              </td>
            </tr>
            <tr className="!h-[80px]">
              <td className="!border-b">CRM And Promotion Features</td>
              <td className="bg-[#F1FAEB] !border-b">
                <div className="flex justify-center">
                  <img src={greenCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#ECF6FF] !border-b">
                <div className="flex justify-center">
                  <img src={blueCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#F2ECFF] !border-b">
                <div className="flex justify-center">
                  <img src={violetCircle} alt="green-circle" />
                </div>
              </td>
            </tr>
            <tr className="!h-[80px]">
              <td className="!border-b">Third Party Application Integration</td>
              <td className="bg-[#F1FAEB] !border-b">
                <div className="flex justify-center">
                  <img src={greenCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#ECF6FF] !border-b">
                <div className="flex justify-center">
                  <img src={blueCircle} alt="green-circle" />
                </div>
              </td>
              <td className="bg-[#F2ECFF] !border-b">
                <div className="flex justify-center">
                  <img src={violetCircle} alt="green-circle" />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
