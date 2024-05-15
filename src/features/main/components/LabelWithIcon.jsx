const LabelWithIcon = ({ icon, label, light }) => {
  return (
    <div
      className={`${
        light ? "bg-[#ffffff] text-black" : "bg-[#222222] text-white"
      } flex justify-start items-center gap-2 p-2 rounded-[100px] max-w-[160px]`}
    >
      <div>
        <img src={icon} alt="logo" />
      </div>
      <div>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default LabelWithIcon;
