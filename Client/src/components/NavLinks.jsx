import { Link } from "react-router-dom";

export function NavLinks() {
  return (
    <>
      <Link
        to={"/"}
        className="  text-[#525551] hover:text-[#0b0335] sm:text-[1.03rem] md:text-lg lg:text-xl"
      >
        Home
      </Link>
      <Link
        to={"/"}
        className="  text-[#525551] hover:text-[#0b0335] sm:text-[1.03rem] md:text-lg lg:text-xl"
      >
        Todo
      </Link>
      <Link
        to={"/"}
        className="  text-[#525551] hover:text-[#0b0335] sm:text-[1.03rem] md:text-lg lg:text-xl"
      >
        About
      </Link>
      <Link
        to={"/"}
        className="  text-[#525551] hover:text-[#0b0335] sm:text-[1.03rem] md:text-lg lg:text-xl"
      >
        Contact
      </Link>
    </>
  );
}
