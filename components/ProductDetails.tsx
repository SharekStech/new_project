export default function ProductDetails() {
  return (
    <div className="max-w-7xl mx-auto mt-8 ">
  <div className="relative w-full h-[500px] max-w-7xl mx-auto rounded-2xl overflow-hidden">
    <div>
      <img
        className="w-full h-[500px] object-cover z-0 rounded-2xl"
        src="/image/gray1.jpg"
        alt="Slider 1"
      />
    </div>

    <div className="absolute top-0 left-0 flex w-full h-full items-center justify-between px-8">
      <div className="w-1/2">
        <p className="text-white text-4xl font-bold z-10">
          Let's make software together!
        </p>
      </div>
      <div className="w-1/2">
        <p className="text-green-900 text-4xl font-bold z-10 mb-5">
          Product Design
        </p>
        <p className="text-white text-4xl font-bold z-10">Web & Mobile</p>
        <p className="text-white text-4xl font-bold z-10">
          Ideation & Strategy
        </p>
        <p className="text-white text-4xl font-bold z-10">
          Embedded Systems
        </p>
      </div>
    </div>
  </div>
</div>

  );
}
