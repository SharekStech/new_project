import Link from "next/link";

export default function Header() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-sm  flex items-center mt-5  h-[90px] text-2xl font-bold">
      <div className="w-[250px]">
      <p className="text-2xl bg-amber-800 text-white p-2 rounded">
        Strawberry Tech Ltd
      </p>
    </div>
      <Link href="/about" className="text-black hover:text-blue-500 px-2">
        About
      </Link>
      <Link href="/project" className="text-black hover:text-blue-500 px-2">
        Project
      </Link>
      <Link href="/contact" className="text-black hover:text-blue-500 px-2">
        Contact
      </Link>
      <Link href="/ourTeam" className="text-black hover:text-blue-500 px-2">
        Our Tearm
      </Link>
      <Link href="/project" className="text-black hover:text-blue-500 px-2">
        Project
      </Link>
    </div>
  );
}
