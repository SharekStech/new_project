export default function ProductDetails() {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[500px] max-w-7xl mx-auto">
          <img
            className="w-full h-[500px] object-cover z-0"
            src="/image/gray1.jpg"
            alt="Slider 1"
          />
  
          {/* Positioned overlay */}
          <div className="absolute top-0 left-0 flex w-full h-full items-center justify-between px-8">
            <div className="w-1/2">
              <p className="text-white text-4xl font-bold z-10">
                Let's make software together!
              </p>
            </div>
            <div className="w-1/2">
              <p className="text-white text-4xl font-bold z-10">
                Let's make software together!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  