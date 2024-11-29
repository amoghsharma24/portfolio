import Link from "next/link";
import NavSheet from "./nav";
export default function Navbar() {
  return (
    <div className="flex">
      <Link href="/" className="text-3xl font-bold p-4 z-10 font-serif">
        VV.
      </Link>
      <NavSheet />
    </div>
  );
}
