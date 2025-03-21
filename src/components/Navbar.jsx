

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Sun, Moon, Menu, X } from "lucide-react";
// import { Link as ScrollLink } from "react-scroll"; // Import for smooth scrolling

// export default function Navbar() {
//   const [isDark, setIsDark] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { name: "HOME", path: "/" },
//     { name: "PROJECTS", path: "https://github.com/praneshnikhar?tab=repositories", target: "_blank" },
//     { name: "SKILLS", path: "/skills" },
//     { name: "ABOUT", path: "about", isScroll: true },
//     { name: "CONTACT", path: "/contact" },
//   ];

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDark]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full bg-white/90 dark:bg-ieee-dark/90 backdrop-blur-sm z-50 transition-all duration-500 ease-in-out border-b border-gray-200 dark:border-gray-800 ${
//         scrolling ? "h-14" : "h-20"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-full pt-2">
//           {/* Left - Logo */}
//           <Link to="/" className="flex-shrink-0">
//             <motion.span
//               className={`text-ieee-blue dark:text-white font-display font-bold transition-all duration-500 ease-in-out ${
//                 scrolling ? "text-lg" : "text-3xl"
//               }`}
//               whileHover={{ scale: 1.05 }}
//             >
//               Pranesh Nikhar
//             </motion.span>
//           </Link>

//           {/* Centered nav items */}
//           <div className="hidden md:flex items-center justify-center flex-grow">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navItems.map((item) =>
//                 item.isScroll ? (
//                   <ScrollLink
//                     key={item.name}
//                     to={item.path}
//                     smooth={true}
//                     duration={500}
//                     offset={-80} // Adjust offset for fixed navbar
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-transform duration-300 ease-in-out ${
//                       scrolling ? "text-xs" : "text-base"
//                     } text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md`}
//                   >
//                     {item.name}
//                   </ScrollLink>
//                 ) : item.target ? (
//                   <a
//                     key={item.name}
//                     href={item.path}
//                     target={item.target}
//                     rel="noopener noreferrer"
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-transform duration-300 ease-in-out ${
//                       scrolling ? "text-xs" : "text-base"
//                     } text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md`}
//                   >
//                     {item.name}
//                   </a>
//                 ) : (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-transform duration-300 ease-in-out ${
//                       scrolling ? "text-xs" : "text-base"
//                     } text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md`}
//                   >
//                     {item.name}
//                   </Link>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Right - Buttons */}
//           <div className="flex items-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsDark(!isDark)}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 ease-in-out"
//             >
//               {isDark ? (
//                 <Sun className="w-5 h-5 text-yellow-400" />
//               ) : (
//                 <Moon className="w-5 h-5 text-ieee-blue" />
//               )}
//             </motion.button>

//             {/* <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="hidden md:block bg-ieee-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-500 ease-in-out"
//             >
//               JOIN NOW
//             </motion.button> */}

//             <button
//               className="md:hidden p-2"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6 text-ieee-blue dark:text-white" />
//               ) : (
//                 <Menu className="h-6 w-6 text-ieee-blue dark:text-white" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white dark:bg-ieee-dark border-t border-gray-200 dark:border-gray-800"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) =>
//                 item.isScroll ? (
//                   <ScrollLink
//                     key={item.name}
//                     to={item.path}
//                     smooth={true}
//                     duration={500}
//                     offset={-80}
//                     onClick={() => setIsOpen(false)}
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md"
//                   >
//                     {item.name}
//                   </ScrollLink>
//                 ) : item.target ? (
//                   <a
//                     key={item.name}
//                     href={item.path}
//                     target={item.target}
//                     rel="noopener noreferrer"
//                     onClick={() => setIsOpen(false)}
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md"
//                   >
//                     {item.name}
//                   </a>
//                 ) : (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     onClick={() => setIsOpen(false)}
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md"
//                   >
//                     {item.name}
//                   </Link>
//                 )
//               )}
//               {/* <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full mt-4 bg-ieee-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-500 ease-in-out"
//               >
//                 JOIN NOW
//               </motion.button> */}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }




import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll"; // Import for smooth scrolling

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "https://github.com/praneshnikhar?tab=repositories", target: "_blank" },
    { name: "SKILLS", path: "/skills" },
    { name: "ABOUT", path: "about", isScroll: true },
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full bg-white/90 dark:bg-ieee-dark/90 backdrop-blur-sm z-50 transition-all duration-500 ease-in-out border-b border-gray-200 dark:border-gray-800 ${
        scrolling ? "h-14" : "h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full pt-2">
          {/* Left - Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.span
              className={`text-ieee-blue dark:text-white font-display font-bold transition-all duration-300 ease-in-out ${
                scrolling ? "text-lg" : "text-3xl"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Pranesh Nikhar
            </motion.span>
          </Link>

          {/* Centered nav items */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) =>
                item.isScroll ? (
                  <ScrollLink
                    key={item.name}
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-80} // Adjust offset for fixed navbar
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-transform duration-300 ease-in-out ${
                      scrolling ? "text-xs" : "text-base"
                    } text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md`}
                  >
                    {item.name}
                  </ScrollLink>
                ) : item.target ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target={item.target}
                    rel="noopener noreferrer"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-transform duration-300 ease-in-out ${
                      scrolling ? "text-xs" : "text-base"
                    } text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-transform duration-300 ease-in-out ${
                      scrolling ? "text-xs" : "text-base"
                    } text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right - Buttons */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 ease-in-out"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-ieee-blue" />
              )}
            </motion.button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-ieee-blue dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-ieee-blue dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }} // Adjust the duration for smooth menu transition
            className="md:hidden bg-white dark:bg-ieee-dark border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.isScroll ? (
                  <ScrollLink
                    key={item.name}
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md"
                  >
                    {item.name}
                  </ScrollLink>
                ) : item.target ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target={item.target}
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-white hover:scale-105 hover:text-shadow-md"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
