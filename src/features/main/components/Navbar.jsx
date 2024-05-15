import logo from "../../../assets/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-around mt-5 text-[14px]">
      <img src={logo} alt="logo" />
      <div>
        <nav>
          <ul className="flex gap-6 flex-wrap items-center">
            <li className="">
              <Button label="home" />
            </li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Resource</li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="text-[#FF5C00] border-[#FF5C00] border-[1px] rounded-[100px] px-4 py-1 cursor-pointer">
          Sign in
        </p>
      </div>
    </div>
  );
};

export default Navbar;
