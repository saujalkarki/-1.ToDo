export function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between bg-green-300 py-4 pl-10 pr-32">
      <a href="" className="flex items-center gap-[1rem] ">
        <img src="/logoNav.png" alt="Logo" className="h-[50px]" />
        <span className="  font-serif text-2xl font-bold">To..Do..</span>
      </a>
      <div className="flex gap-[6rem] text-lg font-bold ">
        <a href="" className="  hover:text-[#0b0335]">
          Home
        </a>
        <a href="" className=" hover:text-[#0b0335]">
          Add_Todo
        </a>
        <a href="" className=" hover:text-[#0b0335]">
          About
        </a>
        <a href="" className=" hover:text-[#0b0335]">
          Contact
        </a>
      </div>
    </nav>
  );
}
