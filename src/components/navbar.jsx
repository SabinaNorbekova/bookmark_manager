import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex mt-[40px] justify-between w-[950px] items-center mx-auto">
      <img
        src="https://famous-pithivier-11c029.netlify.app/img/logo.svg"
        alt=""
      />
          <div className="flex gap-[55px] items-center mr-[33px]">
              <Link to="/features" className="text-[14px]">FEATURES</Link>
              <Link to="/pricing" className="text-[14px]">PRICING</Link>
              <Link to="contact" className="text-[14px]">CONTACT</Link>
        <button className="border-2 text-[14px] text-white bg-red-700 w-[75px] h-[33px] rounded-[7px]">LOGIN</button>
    </div>
    </div>
  );
}
