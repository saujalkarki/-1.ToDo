import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

export function NavBar() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <nav className="flex items-center justify-between bg-green-300 py-2 px-5">
      <a href="" className="flex items-center gap-[1rem] ">
        <img src="/logoNav.png" alt="Logo" className="h-[50px]" />
        <span className=" hidden md:block font-serif text-2xl font-bold">
          To..Do..
        </span>
      </a>
      {open ? (
        <ImCross
          className=" cursor-pointer sm:hidden"
          size={"1.5em"}
          color="#0b0335"
          onClick={toggleOpen}
        />
      ) : (
        <GiHamburgerMenu
          className=" cursor-pointer sm:hidden"
          size={"2em"}
          color="#0b0335"
          onClick={toggleOpen}
        />
      )}
      {open ? (
        <div className=" flex flex-col items-center gap-4 absolute top-16 left-0 sm:hidden bg-green-300 w-[100vw] pb-4 text-lg font-semibold">
          <Link to={"/"} className="  text-[#525551] hover:text-[#0b0335]">
            Home
          </Link>
          <Link to={"/"} className="  text-[#525551] hover:text-[#0b0335]">
            Todo
          </Link>
          <Link to={"/"} className="  text-[#525551] hover:text-[#0b0335]">
            About
          </Link>
          <Link to={"/"} className="  text-[#525551] hover:text-[#0b0335]">
            Contact
          </Link>
        </div>
      ) : null}
      <div className=" hidden sm:flex gap-[6rem] text-lg font-bold ">
        <Link to={"/"} className="  text-[#525551] hover:text-[#0b0335]">
          Home
        </Link>
        <Link to={"/"} className="  text-[#525551] hover:text-[#0b0335]">
          Todo
        </Link>
        <Link to={"/"} className="  text-[#525551] hover:text-[#0b0335]">
          About
        </Link>
        <Link to={"/"} className="  text-[#525551] hover:text-[#0b0335]">
          Contact
        </Link>
      </div>
    </nav>
  );
}
