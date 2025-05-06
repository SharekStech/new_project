import Link from "next/link";
export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto h-[350px] bg-amber-50">
        <p className="text-2xl text-green-700 font-bold mt-4 p-4">Footer Section</p>
      <div className="flex  mt-5">
        <div className="w-1/2">
          <p className="p-6 mt-[80px] text-2xl">
            Concept Softworks is a software company, we develop custom built
            software for clients - covering everything from financial
            institutions & medical companies all the way to tech companies and
            government organizations.
          </p>
        </div>
        <div className="flex justify-center gap-3 mt-[120px]">
          <Link
            href="/about"
            className="h-[40px] text-black bg-gray-400 rounded-md hover:text-blue-500 px-4 py-2"
          >
            About
          </Link>
          <Link
            href="/project"
            className="h-[40px] text-black bg-gray-400 rounded-md hover:text-blue-500 px-4 py-2"
          >
            Project
          </Link>
          <Link
            href="/contact"
            className="text-black h-[40px] bg-gray-400 rounded-md hover:text-blue-500 px-4 py-2"
          >
            Contact
          </Link>
          <Link
            href="/ourTeam"
            className="text-black h-[40px] bg-gray-400 rounded-md hover:text-blue-500 px-4 py-2"
          >
            Our Team
          </Link>
          <Link
            href="/project"
            className="text-black h-[40px] bg-gray-400 rounded-md hover:text-blue-500 px-4 py-2"
          >
            Project
          </Link>
        </div>
      </div>
    </div>
  );
}
