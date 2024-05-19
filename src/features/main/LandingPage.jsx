import MainLayout from "../../containers/MainLayout";
import MaxWidthContainer from "../../containers/MaxWidthContainer";
import Button from "./components/Button";
import FeatureCard from "./components/FeatureCard";
import Heading from "./components/Heading";
import HeroSection from "./components/HeroSection";
import Restaurents from "./components/Restaurents";
import info from "../../assets/info.svg";
import greenCircle from "../../assets/green-circle.svg";
import blueCircle from "../../assets/blue-circle.svg";
import violetCircle from "../../assets/violet-circle.svg";
import settings from "../../assets/setting.svg";
import integrate from "../../assets/driver-refresh.svg";
import security from "../../assets/security-safe.svg";
import stock from "../../assets/box-add.svg";
import businessScalability from "../../assets/money-change.svg";
import trendUp from "../../assets/trend-up.svg";
import blueAvatar from "../../assets/blue-avatar.svg";
import brownAvatar from "../../assets/brown-avatar.svg";
import avatar from "../../assets/green-avatar.svg";
import search from "../../assets/search-md.svg";
import Whitelogo from "../../assets/logo-white.svg";
import TestimonialCard from "./components/TestimonialCard";
import Collapse from "./components/Collapse";
import nextArrow from "../../assets/next-arrow.png";
import facebook from "../../assets/facebook-one.svg";
import instagram from "../../assets/instagram-one.svg";
import twitter from "../../assets/twitter-one.svg";

function LandingPage() {
  return (
    <MaxWidthContainer>
      <MainLayout>
        <HeroSection />
        <div className="sm:max-w-[1300px] m-auto">
          <div className="w-full">
            <Restaurents />
          </div>

          <div className="w-full sm:mt-20">
            <Heading
              label="Complementary features for your business needs"
              color="text-[#19191C]"
              className="sm:max-w-[760px] text-[25px] sm:text-[62px]"
            />
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

          <div className="grid grid-cols-12 sm:mt-20">
            <div className="grid col-span-12 sm:col-span-8 ">
              <Heading
                label="Packages for your business"
                color="text-[#19191C]"
                className="max-w-[760px]"
              />
            </div>
            <div className="grid col-span-12 sm:col-span-4 p-2">
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
          </div>

          {/* <div className="grid grid-cols-12">
            <div className="grid col-span-6"></div>
            <div className="grid col-span-6"></div>
          </div> */}

          <div className="mt-3 sm:mt-16 flex justify-center">
            <div className="overflow-x-auto w-full">
              <table className="table-auto w-full">
                <tr>
                  <th></th>
                  <th className="">
                    <div className="w-full bg-[#E0F2D4] px-10 py-5 rounded-[20px]">
                      Basic
                    </div>
                  </th>
                  <th className="">
                    <div className="hidden sm:flex">
                      <span className="bg-[#FF5C00] border-[3px] text-[12px] border-white px-4 py-2 shadow-white text-white rounded-[100px] absolute ml-[98px] mt-[-20px]">
                        Business choice
                      </span>
                    </div>
                    <div className="w-full bg-[#D4E8FA] px-10 py-5 rounded-[20px]">
                      Business
                    </div>
                  </th>
                  <th className="">
                    <div className="w-full bg-[#E6DBFF] px-10 py-5 rounded-[20px]">
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
                  <td className="!border-b">
                    Third Party Application Integration
                  </td>
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

          <div className="max-w-[1300px] m-auto">
            <div className="grid grid-cols-12 gap-10 mt-3 sm:mt-20">
              <div className="grid col-span-12 sm:col-span-6">
                <div className="grid grid-cols-12">
                  <div className="grid col-span-12">
                    <Heading
                      label="Ease in the Hand"
                      color="text-[#19191C]"
                      className="max-w-[760px]"
                    />
                    <p className="">
                      Using our app in business, especially in the restaurant
                      industry, has many advantages. Here are some of them:
                    </p>
                  </div>
                  <div className="grid col-span-12 sm:col-span-6">
                    <div>
                      <div className="bg-[#F8F9FD] w-[46px] rounded-[50%] p-2 flex">
                        <img src={settings} alt="settings" />
                      </div>
                    </div>
                    <p className="text-[24px] font-medium">
                      Operational efficiency
                    </p>
                    <p className="text-[16px]">
                      Automate ordering, payment and stock management.
                    </p>
                  </div>

                  <div className="grid col-span-12 sm:col-span-6">
                    <div>
                      <div className="bg-[#F8F9FD] w-[46px] rounded-[50%] p-2 flex">
                        <img src={security} alt="settings" />
                      </div>
                    </div>
                    <p className="text-[24px] font-medium">Security data</p>
                    <p className="text-[16px]">
                      Strong security to protect your customer and business
                      data..
                    </p>
                  </div>

                  <div className="grid col-span-12 sm:col-span-6">
                    <div>
                      <div className="bg-[#F8F9FD] w-[46px] rounded-[50%] p-2 flex">
                        <img src={stock} alt="settings" />
                      </div>
                    </div>
                    <p className="text-[24px] font-medium">Stock management</p>
                    <p className="text-[16px]">
                      Track stock in real-time and avoid stock outs or wastage.
                    </p>
                  </div>

                  <div className="grid col-span-12 sm:col-span-6">
                    <div>
                      <div className="bg-[#F8F9FD] w-[46px] rounded-[50%] p-2 flex">
                        <img src={integrate} alt="settings" />
                      </div>
                    </div>
                    <p className="text-[24px] font-medium">Easy to integrate</p>
                    <p className="text-[16px]">
                      The integration process with third-party services runs
                      easily.
                    </p>
                  </div>

                  <div className="grid col-span-12 sm:col-span-6">
                    <div>
                      <div className="bg-[#F8F9FD] w-[46px] rounded-[50%] p-2 flex">
                        <img src={businessScalability} alt="settings" />
                      </div>
                    </div>
                    <p className="text-[24px] font-medium">Manage financial</p>
                    <p className="text-[16px]">
                      Better record all purchase transactions automatically.
                    </p>
                  </div>

                  <div className="grid col-span-12 sm:col-span-6">
                    <div>
                      <div className="bg-[#F8F9FD] w-[46px] rounded-[50%] p-2 flex">
                        <img src={trendUp} alt="settings" />
                      </div>
                    </div>
                    <p className="text-[24px] font-medium">
                      Business Scalability
                    </p>
                    <p className="text-[16px]">
                      Easily add & upgrade according to your business growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid col-span-12 sm:col-span-6 gap-8">
                <div>
                  <TestimonialCard
                    description=" “We are very impressed with the use of this POS
                      application. Management of orders and payments becomes
                      faster and more accurate so as to increase our operational
                      efficiency.”"
                    image={avatar}
                    name="Stevano William"
                    designation="CEO at Pizza Hut"
                    color="text-[#38715B]"
                    bgcolor="bg-[#F1FAEB]"
                  />
                </div>
                <TestimonialCard
                  description=" “We are very impressed with the use of this POS
                      application. Management of orders and payments becomes
                      faster and more accurate so as to increase our operational
                      efficiency.”"
                  image={blueAvatar}
                  name="Stevano William"
                  designation="CEO at Pizza Hut"
                  color="text-[#3871A5]"
                  bgcolor="bg-[#ECF6FF]"
                />
                <TestimonialCard
                  description=" “We are very impressed with the use of this POS
                      application. Management of orders and payments becomes
                      faster and more accurate so as to increase our operational
                      efficiency.”"
                  image={brownAvatar}
                  name="Stevano William"
                  designation="CEO at Pizza Hut"
                  color="text-[#DC8558]"
                  bgcolor="bg-[#FFF5EE]"
                />
              </div>
            </div>

            <div className="sm:mt-20 bg-[#F8F9FD] p-4 rounded-lg">
              <div className="">
                <div className="grid grid-cols-12">
                  <div className="grid col-span-12 sm:col-span-7">
                    <Heading
                      label="Frequently Asked Questions"
                      color="text-[#19191C]"
                      className="max-w-[760px]"
                    />
                  </div>
                  <div className="grid col-span-12 sm:col-span-5 relative">
                    <div className="mt-10">
                      <input
                        className="!bg-[#FFFFFF] py-6 px-10 rounded-[58px] w-full"
                        placeholder="Type your question here"
                      />
                    </div>
                    <span className="bg-[#FF5C00] text-white hidden sm:flex gap-3 items-center w-[130px] px-4 py-4 rounded-[58px] absolute mt-12 ml-[386px]">
                      <img src={search} alt="search" />
                      <p className="font-medium">Search</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-10">
                <div className="grid col-span-12 sm:col-span-2">
                  <div className="flex flex-col gap-3 mt-5">
                    <span className="bg-[#ffffff] border border-[#FF5C00] text-[#FF5C00] p-2 rounded-[58px] text-center cursor-pointer">
                      General
                    </span>
                    <span className="text-center cursor-pointer">
                      Transaction
                    </span>
                    <span className="text-center cursor-pointer">Payment</span>
                    <span className="text-center cursor-pointer">Others</span>
                  </div>
                </div>
                <div className="grid col-span-12 sm:col-span-10">
                  <Collapse
                    title="What are the common features in the Coca POS system?"
                    content="Common features in a POS system include order management, payment
          integration, stock management, sales reporting, data analysis, table
          management (in restaurants), and customer support."
                    color="text-[#FF5C00]"
                  />
                  <Collapse
                    title="How does Coca POS help in managing stock?"
                    content="Common features in a POS system include order management, payment
          integration, stock management, sales reporting, data analysis, table
          management (in restaurants), and customer support."
                    color="text-[#181717]"
                  />
                  <Collapse
                    title="Can the Coca POS application be integrated with other systems?"
                    content="Common features in a POS system include order management, payment
          integration, stock management, sales reporting, data analysis, table
          management (in restaurants), and customer support."
                    color="text-[#181717]"
                  />
                  <Collapse
                    title="What is the average cost to purchase and implement a Coca POS?"
                    content="Common features in a POS system include order management, payment
          integration, stock management, sales reporting, data analysis, table
          management (in restaurants), and customer support."
                    color="text-[#181717]"
                  />
                  <Collapse
                    title="What is the average cost to purchase and implement a Coca POS?"
                    content="Common features in a POS system include order management, payment
          integration, stock management, sales reporting, data analysis, table
          management (in restaurants), and customer support."
                    color="text-[#181717]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background-image-one text-center flex flex-col gap-6 items-center pt-20">
          <Heading
            label="Gain Excellence with the Best POS Solutions"
            color="text-[#ffffff]"
            className="texxt-center max-w-[900px]"
          />
          <p className="text-white">
            Provide an unforgettable customer experience with fast ordering,
            convenient payments, and better service.
          </p>
          <div className="flex justify-center">
            <button className="flex justify-center items-center gap-3 px-3 py-1 mt-6 bg-[#FF5C00] rounded-[58px]">
              <p className="text-white text-[14px]">Try for free</p>
              <img src={nextArrow} alt="next-arrow" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 bg-[#1B1B1E] p-2 sm:p-16 gap-1 sm:gap-10">
          <div className="grid col-span-12 sm:col-span-6 ">
            <Heading
              label="Don't Miss This Exclusive Opportunity"
              color="text-[#ffffff]"
            />
            <p className="text-[#C2C2C2] mt-5">
              Enter your email address and start connecting with a better
              business world using our POS products.
            </p>
          </div>
          <div className="grid col-span-12 md:col-span-6">
            <div className="mt-10 !w-full">
              <input
                className="!bg-[#232329] text-white py-6 px-10 rounded-[58px] sm:w-full border border-[#35353D] relative"
                placeholder="Type your question here"
              />
            </div>
            <span className="bg-[#FF5C00] text-white gap-3 items-center w-[110px] sm:w-[130px] px-4 py-4 rounded-[58px] absolute ml-[477px] mt-[48px] hidden sm:flex">
              <img src={search} alt="search" />
              <p className="font-medium">Search</p>
            </span>
          </div>
          <div className="grid col-span-12 md:col-span-12">
            <hr className="border-[0.5px] border-[#525252] " />
          </div>
          <div className="grid col-span-12 sm:col-span-5">
            <img src={Whitelogo} alt="logo" />
          </div>
          <div className="grid col-span-12 sm:col-span-7">
            <div className="flex flex-wrap gap-10 text-white">
              <span>Features</span>
              <span>Pricing</span>
              <span>Blog</span>
              <span>Resource</span>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
          <div className="grid col-span-12 md:col-span-6">
            <p className="text-[12px] text-white">
              © 2023 Coca, Inc. All rights reserved.
            </p>
          </div>
          <div className="grid col-span-12 md:col-span-2 place-content-center">
            <div className="bg-[#232329] flex p-2 gap-3 rounded-[48px]">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
      </MainLayout>
    </MaxWidthContainer>
  );
}

export default LandingPage;
