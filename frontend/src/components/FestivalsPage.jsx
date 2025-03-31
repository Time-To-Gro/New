import React from "react";
import Navbar from "./Navbar";

const festivals = [
  {
    name: "NIRVANA",
    category: "Music & Arts",
    description: "A vibrant festival featuring a range of musical and arts-based performances, fostering innovation and cultural expression.",
    date: "March 9-12, 2025",
  },
  {
    name: "FUSION",
    category: "Tech & Culture",
    description: "A tech-culture festival offering workshops, seminars, competitions, and creative engagements.",
    date: "April 5-7, 2025",
  },
  {
    name: "iSquareR",
    category: "Science & Research",
    description: "An intellectual festival featuring keynotes and interactive workshops on science, research, and project expos.",
    date: "February 18-20, 2025",
  },
  {
    name: "GUSAC Carnival",
    category: "Tech & Innovation",
    description: "A tech-culture festival that combines technical workshops, cultural events, and startup networking.",
    date: "May 22-25, 2025",
  },
  {
    name: "Kibbutz",
    category: "Entrepreneurship",
    description: "A future-tech management fest fostering business collaborations, debates, cultural performances, and startup incubation.",
    date: "March 15-17, 2025",
  },
  {
    name: "AliensFest",
    category: "Technology",
    description: "A hub for technology and career conferences featuring hackathons, AI workshops, project expos, and innovation summits.",
    date: "August 10-12, 2025",
  },
  {
    name: "SHOKe Fest",
    category: "Drama & Cultural Sports",
    description: "A drama & theatre-cultural sport fest showcasing themes on sustainability, climate action, and performing arts.",
    date: "January 21-23, 2025",
  },
];

function FestivalsPage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen px-10 py-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">GITAM University Festivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {festivals.map((festival, index) => (
          <div key={index}         className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
            <div className="h-40 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
            <h2 className="text-xl font-bold mt-4">{festival.name}</h2>
            <span className="text-sm text-gray-600 px-2 py-1 bg-gray-200 rounded-md">{festival.category}</span>
            <p className="text-gray-700 mt-2">{festival.description}</p>
            <p className="text-gray-600 mt-2 text-sm">📅 {festival.date}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default FestivalsPage;
