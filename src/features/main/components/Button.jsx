const Button = ({ label, color, background }) => {
  return (
    <button
      className={`rounded-[100px] px-4 py-1 cursor-pointer`}
      style={{ color: color, backgroundColor: background }}
    >
      {label}
    </button>
  );
};

export default Button;
