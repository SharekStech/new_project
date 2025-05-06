export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto border border-gray-300 mt-5 bg-white">
      <div className="flex m-4">
        <div className="w-[950px]">
          <div>
            <p className="text-6xl font-bold text-green-500">Contact Us</p>
            <p className="text-2xl">What can we do for you?</p>
          </div>
          <div className="flex gap-3">
            <p className="w-[150px]  bg-emerald-400 p-2 text-[15px] rounded-3xl text-white hover:bg-blue-700 flex items-center justify-center">
              Product Design
            </p>
            <p className="w-[150px] bg-emerald-400 p-2 text-[15px] rounded-3xl text-white hover:bg-blue-700 flex items-center justify-center">
              Web Development
            </p>
            <p className="w-[200px] bg-emerald-400 p-2 text-[15px] rounded-3xl text-white hover:bg-blue-700 flex items-center justify-center">
              Mobile Apps Development
            </p>
          </div>

          <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Sent Your Project Details
            </h2>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project Details
                </label>
                <textarea
                  id="details"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your project"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="justify-center mt-[120px]">
          <div>
            <p className="text-[22px] font-semibold text-gray-500">Phone</p>
            <p className="text-2xl font-semibold ">01819400400</p>
          </div>

          <div className="mt-4">
            <p className="text-[22px] font-semibold text-gray-500">Email</p>
            <p className="text-2xl font-semibold ">Email@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
