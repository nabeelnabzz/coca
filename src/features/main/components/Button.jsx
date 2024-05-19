const Button = ({ label, color, background }) => {
  return (
    <button
      className={`rounded-[100px] px-4 py-2 cursor-pointer`}
      style={{ color: color, backgroundColor: background }}
    >
      {label}
    </button>
  );
};

export default Button;
