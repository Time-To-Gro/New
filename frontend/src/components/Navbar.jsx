import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("token"); // Check if user is logged in


    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="min-h-30 w-full bg-white text-black flex flex-col items-center p-6">
            {/* Header Section */}
            <header className="w-full bg-white-800 p-4 shadow-lg flex justify-between items-center">
                <div className="text-xl font-bold">GITAM Festivals</div>
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className=" mt-2 hover:text-blue-400">Home</Link>
                    <Link to="/festivals" className=" mt-2 hover:text-blue-400">Festivals</Link>
                    <Link to="/about" className=" mt-2 hover:text-blue-400">About</Link>
                    <Link to="/contactus" className=" mt-2 hover:text-blue-400">Contact</Link>

                    {token ? (
                        <button 
                            onClick={handleLogout} 
                            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="bg-black text-white px-4 py-2 rounded">
                            Login
                        </Link>
                    )}
                </nav>
                <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    &#9776;
                </div>
            </header>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.nav 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.3 }}
                    className="w-full bg-gray-800 p-4 flex flex-col items-center space-y-4"
                >
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                    <Link to="/festivals" className="hover:text-blue-400">Festivals</Link>
                    <Link to="/about" className="hover:text-blue-400">About</Link>
                    <Link to="/contactus" className="hover:text-blue-400">Contact</Link>

                    {token ? (
                        <button 
                            onClick={handleLogout} 
                            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                            Login
                        </Link>
                    )}
                </motion.nav>
            )}

        </div>
    );
};

export default Navbar;
