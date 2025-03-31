import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-300 flex flex-col items-center">
      {/* Navbar */}
      <Navbar/>
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-32 px-4">
        <h2 className="text-4xl font-bold">GITAM University Festivals</h2>
        <p className="text-gray-600 mt-2">Explore and register for exciting festivals across GITAM campuses</p>
    
      </div>
    </div>
  );
}
