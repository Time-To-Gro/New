import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-white to-blue-100 text-center">
      <h1 className="text-4xl font-bold mb-4">About GITAM Festivals</h1>
      <p className="text-gray-700 max-w-2xl">
        GITAM University hosts vibrant festivals celebrating culture, technology, and innovation. 
        Our festivals bring students together to showcase talent, learn new skills, and network with 
        peers from across the country.
      </p>
      
      <div className="mt-8 max-w-3xl text-left">
        <h2 className="text-2xl font-semibold">Why Join Us?</h2>
        <ul className="list-disc list-inside mt-3 text-gray-700">
          <li>Exciting cultural and tech events</li>
          <li>Workshops by industry experts</li>
          <li>Competitions with amazing prizes</li>
          <li>Networking opportunities with students & professionals</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Festival Highlights</h2>
        <p className="text-gray-700 mt-2">
          Experience music concerts, hackathons, dance battles, coding challenges, and much more! 
          Get ready for an unforgettable journey at GITAM Festivals.
        </p>
      </div>
    </div>
    </>
  );
}

export default About;
