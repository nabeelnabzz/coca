import imageFrame from "../../../assets/image-frame.png";

const FeatureCard = ({ heading, paragraph, flexReverse }) => {
  return (
    <div
      className={`flex flex-wrap ${
        flexReverse ? "flex-row-reverse" : ""
      } justify-center gap-4 sm:gap-20 sm:mt-20 w-full p-2`}
    >
      <div>
        <img src={imageFrame} alt="" />
      </div>
      <div className="max-w-[550px] flex flex-col justify-between">
        <div>
          <h6 className="text-[32px] font-medium leading-[40px]">{heading}</h6>
          <p className="text-[16px] font-normal mt-5">{paragraph}</p>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="bg-[#FF5C00] rounded-[100px] px-4 py-2 text-white text-[14px]">
            Launch Demo
          </button>
          <button className="border-[#000000] border rounded-[100px] px-4 py-2 text-[14px]">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
