import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-white to-blue-100 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 max-w-2xl">
        Have questions or need assistance? Reach out to us through the form below or connect with us on social media.
      </p>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-lg">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="text-gray-700 mt-2">📍 GITAM University, India</p>
        <p className="text-gray-700">📧 support@gitamfestivals.com</p>
        <p className="text-gray-700">📞 +91 98765 43210</p>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-6">
        <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
        <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
        <a href="#" className="text-pink-500 hover:text-pink-700">Instagram</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">LinkedIn</a>
      </div>
    </div>
    </>
  );
}

export default Contact;
