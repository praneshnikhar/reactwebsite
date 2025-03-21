
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import CircuitPattern from "./CircuitPattern";

// export default function Hero() {
//   const [ref, inView] = useInView({
//     threshold: 0.1, 
//     triggerOnce: true, 
//   });

//   const fadeInVariants = {
//     hidden: { opacity: 0, y: 50 }, 
//     visible: {
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 1, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-ieee-dark dark:to-black overflow-hidden transition-colors duration-300">
//       <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
//         <motion.div
//           ref={ref}
//           initial="hidden" 
//           animate={inView ? "visible" : "hidden"} 
//           variants={fadeInVariants} 
//           className="relative z-10 grid md:grid-cols-2 gap-12 items-center"
//         >
//           <div className="space-y-8">
            
//             <motion.div
//               variants={fadeInVariants} 
//               className="space-y-4"
//             >
//               <h2 className="text-ieee-blue dark:text-[#B2A5FF] text-xl font-semibold font-display">
//                 Back-End Developer
//               </h2>
//               <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white font-display">
//                 Hey!, It's <br />
//                 <span className="text-ieee-blue dark:text-[#B2A5FF]">
//                   Pranesh,
//                 </span>{" "}
//                 <br />
                
//               </h1>
//             </motion.div>

            
//             <motion.p
//               variants={fadeInVariants}
//               className="text-xl text-gray-600 dark:text-gray-300"
//             >
//              a first-year engineering student eager to dive into the world of coding and innovation!
//             </motion.p>

            
//             <motion.div
//               variants={fadeInVariants}
//               className="flex flex-wrap gap-4"
//             >
//               {/* <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-ieee-blue text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-lg"
//               >
//                 Contact
//               </motion.button> */}

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-ieee-blue text-ieee-blue dark:border-white dark:text-white px-8 py-3 rounded-md hover:bg-ieee-blue hover:text-white dark:hover:bg-white dark:hover:text-ieee-dark transition-colors duration-200"
//               >
//                 Let's Work Together!
//               </motion.button>
//             </motion.div>

            
//             <motion.div
//               variants={fadeInVariants}
//               className="flex items-center gap-4 text-gray-600 dark:text-gray-400"
//             >
              
            
//             </motion.div>
//           </div>

          
//           <motion.div
//             variants={fadeInVariants}
//             className="relative hidden md:block"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-ieee-blue/20 to-transparent rounded-full filter blur-3xl"></div>
//             <img
//               // src="/placeholder.svg?height=400&width=400"
//               // alt="Technology Illustration"
//               // className="relative z-10 w-full h-auto animate-float"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//       <CircuitPattern />
//     </div>
//   );
// }







import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import CircuitPattern from "./CircuitPattern";

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-ieee-dark dark:to-black overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="relative z-10 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={fadeInVariants} className="space-y-4">
              <h2 className="text-ieee-blue dark:text-[#B2A5FF] text-xl font-semibold font-display">
                Back-End Developer
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white font-display">
                <span className="text-black dark:text-white">Hey!, It's</span> <br />
                <span className="text-ieee-blue dark:text-[#B2A5FF]">
                  <Typewriter
                    words={["Pranesh"]}
                    loop={false}
                    cursor
                    cursorStyle=">"
                    typeSpeed={50}
                    deleteSpeed={40}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              A first-year engineering student eager to dive into the world of coding and innovation!
            </motion.p>

            <motion.div variants={fadeInVariants} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-ieee-blue text-ieee-blue dark:border-white dark:text-white px-8 py-3 rounded-md hover:bg-ieee-blue hover:text-white dark:hover:bg-white dark:hover:text-ieee-dark transition-colors duration-200"
              >
                Let's Work Together!
              </motion.button>
            </motion.div>
          </div>

          <motion.div variants={fadeInVariants} className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-ieee-blue/20 to-transparent rounded-full filter blur-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
      <CircuitPattern />
    </div>
  );
}
