const Heading = ({ label, color, className }) => {
  return (
    <h1
      className={`text-[30px] sm:text-[62px] p-2 ${color} ${className} font-medium sm:leading-[76px]`}
    >
      {label}
    </h1>
  );
};

export default Heading;
