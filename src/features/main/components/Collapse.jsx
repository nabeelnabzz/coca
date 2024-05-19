import { useState } from "react";

const Collapse = ({ title, content, color }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="rounded-md">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleCollapse}
      >
        <h2 className={`text-[24px] font-medium ${color}`}>{title}</h2>
        <svg
          className={`h-6 w-6 ${
            isCollapsed ? "transform rotate-0" : "transform rotate-180"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isCollapsed ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
          />
        </svg>
      </div>
      {!isCollapsed && <div className="p-4 border-t">{content}</div>}
    </div>
  );
};

export default Collapse;
