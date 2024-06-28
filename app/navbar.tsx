import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center justify-between bg-white shadow-sm">
      <div className="container flex justify-between items-center">
        <Link href='/' className="font-bold text-2xl">Stokorutu<span className="text-yellow-600">AI</span> <span className="text-xs">Made by aden</span></Link>
        <div className="flex justify-between items-center gap-8">
          <Link href='/about' className="block font-medium text-base">About</Link>
          <button className="rounded-md py-2 px-4 text-white bg-yellow-600 font-medium">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
