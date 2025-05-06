import Link from "next/link";
import Card from "./Card";
export default function Project() {
  return (
    <div className="max-w-7xl mx-auto border border-gray-400 mt-5 h-[700px]">
      <div>
        <p className="text-4xl font-bold text-green-700 ">Projects</p>
        <Card />
      </div>
    </div>
  );
}
