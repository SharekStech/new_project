export default function About() {
  return (
    <div className="max-w-7xl mx-auto flex border border-gray-400 bg-white ">
      <div className="w-1/2 grid grid-cols-2 gap-4 m-5">
        <div>
          <img
            className="w-[150px] h-[180px]"
            src="/image/slider1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[150px] h-[180px]"
            src="/image/product1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[150px] h-[180px] mx-[165px]"
            src="/image/product2.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-1/2  m-5">
        <p className="text-[20px] font-bold bg-blue-500 text-white rounded-md w-[100px] p-2 text-center mb-5 mx-auto">
          ABOUT
        </p>

        <p className="text-xl">
          Concept Softworks is a software company, we develop custom built
          software for clients - covering everything from financial institutions
          & medical companies all the way to tech companies and government
          organizations.
        </p>
      </div>
    </div>
  );
}
