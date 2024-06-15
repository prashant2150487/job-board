import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center px-6 py-4 container w-full mx-auto">
        <Link href={"/"} className="font-bold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-4 *:py-2 *:px-4 *:rounded-lg">
          <Link href={"/login"} className="bg-gray-200">
            Login
          </Link>
          <Link href={"/new-listing"} className="bg-blue-600 text-white">
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
