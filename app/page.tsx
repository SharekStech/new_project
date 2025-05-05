const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to My Landing Page</h1>
      <p className="text-lg text-gray-700 mb-6">This is a simple landing page built with Next.js and Tailwind CSS.</p>
      <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Get Started</a>
    </div>
  );
};

export default LandingPage;
