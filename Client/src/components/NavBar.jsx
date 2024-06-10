import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export function NavBar() {
  const [open, setOpen] = useState(false);

  console.log(open);

  return (
    <nav className="flex items-center justify-between bg-green-300 py-2 px-5">
      <a href="" className="flex items-center gap-[1rem] ">
        <img src="/logoNav.png" alt="Logo" className="h-[50px]" />
        <span className=" hidden sm:block font-serif text-2xl font-bold">
          To..Do..
        </span>
      </a>
      <GiHamburgerMenu
        className=" cursor-pointer sm:hidden"
        size={"2em"}
        color="#0b0335"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div className=" hidden sm:flex gap-[6rem] text-lg font-bold ">
        <a href="" className="  text-[#525551] hover:text-[#0b0335]">
          Home
        </a>
        <a href="" className=" text-[#525551] hover:text-[#0b0335]">
          Todo
        </a>
        <a href="" className=" text-[#525551] hover:text-[#0b0335]">
          About
        </a>
        <a href="" className=" text-[#525551] hover:text-[#0b0335]">
          Contact
        </a>
      </div>
    </nav>
  );
}
