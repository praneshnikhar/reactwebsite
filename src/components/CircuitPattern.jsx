
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const GeometricPattern = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="absolute inset-0 w-full h-full overflow-hidden">
//       <motion.svg
//         className="w-full h-full"
//         viewBox="0 0 500 500"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Circles */}
//         {[...Array(7)].map((_, i) => (
//           <motion.circle
//             key={i}
//             initial={{ opacity: 1, scale: 1 }}
//             animate={{
//               opacity: 1 - scrollPosition / 500,
//               scale: 1 - scrollPosition / 2000,
//               x: (i + 1) * 70,
//               y: 100 + (scrollPosition / 10) * (i % 2 === 0 ? 1 : -1),
//               transition: { duration: 0.8 },
//             }}
//             cx={(i + 1) * 70}
//             cy="100"
//             r="40"
//             fill={'#00238b'}
//           />
//         ))}

//         {/* Rectangles */}
//         {[...Array(7)].map((_, i) => (
//           <motion.rect
//             key={i}
//             initial={{ opacity: 1, scale: 1 }}
//             animate={{
//               opacity: 1 - scrollPosition / 300,
//               scale: 1 + scrollPosition / 3000,
//               x: 100 + i * 70,
//               y: 250 + (scrollPosition / 10) * (i % 2 === 0 ? 1 : -1),
//               transition: { duration: 1 },
//             }}
//             x={100 + i * 70}
//             y="250"
//             width="60"
//             height="60"
//             fill={`rgba(255, 0, ${i * 50}, 0.6)`}
//           />
//         ))}

//         {/* Circles in Bottom Row */}
//         {[...Array(7)].map((_, i) => (
//           <motion.circle
//             key={i + 7}
//             initial={{ opacity: 1, scale: 1 }}
//             animate={{
//               opacity: 1 - scrollPosition / 500,
//               scale: 1 - scrollPosition / 2000,
//               x: (i + 1) * 70,
//               y: 400 + (scrollPosition / 10) * (i % 2 === 0 ? 1 : -1),
//               transition: { duration: 0.8 },
//             }}
//             cx={(i + 1) * 70}
//             cy="400"
//             r="40"
//             fill={`rgba(${(i + 1) * 50}, 255, 255, 0.7)`}
//           />
//         ))}

//         {/* Rectangles in Bottom Row */}
//         {[...Array(7)].map((_, i) => (
//           <motion.rect
//             key={i + 7}
//             initial={{ opacity: 1, scale: 1 }}
//             animate={{
//               opacity: 1 - scrollPosition / 300,
//               scale: 1 + scrollPosition / 2500,
//               x: 100 + i * 70,
//               y: 500 + (scrollPosition / 10) * (i % 2 === 0 ? -1 : 1),
//               transition: { duration: 1 },
//             }}
//             x={100 + i * 70}
//             y="500"
//             width="60"
//             height="60"
//             fill={`rgba(0, 255, ${i * 30}, 0.6)`}
//           />
//         ))}

//         {/* Circles in Bottom-most Row */}
//         {[...Array(4)].map((_, i) => (
//           <motion.circle
//             key={i + 14}
//             initial={{ opacity: 1, scale: 1 }}
//             animate={{
//               opacity: 1 - scrollPosition / 500,
//               scale: 1 - scrollPosition / 2000,
//               x: (i + 1) * 100,
//               y: 600 + (scrollPosition / 10) * (i % 2 === 0 ? 1 : -1),
//               transition: { duration: 0.8 },
//             }}
//             cx={(i + 1) * 100}
//             cy="600"
//             r="40"
//             fill={'#1565C0'}
//           />
//         ))}

//         {/* Last Horizontal Line Below the Circles */}
//         <motion.line
//           x1="1000" // Position the line far left beyond the screen
//           x2="1000" // Adjust the width of the line
//           y1="460" // Position just below the last circle
//           y2="460" // Same y position to keep it horizontal
//           stroke="#0D47A1" // Dark blue color
//           strokeWidth="2"
//           animate={{
//             x1: -(scrollPosition / 2) - 100, // Move further left as you scroll
//             x2: 200 - (scrollPosition / 2) - 100, // Move further left as you scroll
//           }}
//           transition={{
//             duration: 1,
//             ease: "easeOut",
//           }}
//         />
//       </motion.svg>
//     </div>
//   );
// };

// export default GeometricPattern;






// import { motion } from "framer-motion";

// const FloatingParticles = () => {
//   const particles = Array.from({ length: 100 }).map((_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     opacity: Math.random(),
//     color: `hsl(${Math.random() * 60 + 240}, 100%, 60%)`, // Generate random shades of purple (240 is the hue for purple in HSL)
//   }));

//   return (
//     <div className="absolute inset-0 w-full h-full">
//       {particles.map((particle) => (
//         <motion.div
//           key={particle.id}
//           className="absolute rounded-full"
//           style={{
//             width: '10px',
//             height: '10px',
//             top: `${particle.y}%`,
//             left: `${particle.x}%`,
//             backgroundColor: particle.color, // Apply dynamic purple color
//           }}
//           animate={{
//             opacity: [particle.opacity, Math.random()],
//             x: `${Math.random() * 100}%`,
//             y: `${Math.random() * 100}%`,
//           }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 4 + Math.random(), // Increased duration for smoother motion
//             ease: "easeInOut", // Smooth easing
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default FloatingParticles;






// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const FloatingGlowingOrbs = () => {
//   const [orbs, setOrbs] = useState([]);

//   // Generate a random number of orbs and their properties
//   useEffect(() => {
//     const initialOrbs = Array.from({ length: 10 }).map(() => ({
//       id: Math.random(),
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       size: Math.random() * 20 + 30, // Random size between 30px and 50px
//       opacity: Math.random(),
//       color: `hsl(${Math.random() * 360}, 50%, 70%)`, // Random colors in HSL
//       animationDuration: Math.random() * 5 + 3, // Duration of floating motion
//     }));

//     setOrbs(initialOrbs);
//   }, []);

//   return (
//     <div className="absolute inset-0 w-full h-full overflow-hidden">
//       {orbs.map((orb) => (
//         <motion.div
//           key={orb.id}
//           className="absolute rounded-full"
//           style={{
//             width: `${orb.size}px`,
//             height: `${orb.size}px`,
//             top: `${orb.y}px`,
//             left: `${orb.x}px`,
//             backgroundColor: orb.color,
//             boxShadow: `0 0 25px ${orb.color}`, // Glowing effect
//             pointerEvents: "none",
//           }}
//           animate={{
//             x: `${Math.random() * window.innerWidth}px`, // Randomize horizontal position
//             y: `${Math.random() * window.innerHeight}px`, // Randomize vertical position
//             opacity: [orb.opacity, 0.4, orb.opacity], // Make the orbs fade in and out
//           }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: orb.animationDuration,
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default FloatingGlowingOrbs;





// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const FloatingGlowingOrbs = () => {
//   const [orbs, setOrbs] = useState([]);

//   // Generate a random number of orbs and their properties
//   useEffect(() => {
//     const initialOrbs = Array.from({ length: 10 }).map(() => {
//       // Choose a random edge (top, bottom, left, right) for orb to start from
//       const edge = Math.floor(Math.random() * 4); // Random number between 0 and 3

//       // Generate starting positions based on edge selection
//       let x, y;
//       if (edge === 0) {
//         // Top edge
//         x = Math.random() * window.innerWidth;
//         y = 0;
//       } else if (edge === 1) {
//         // Bottom edge
//         x = Math.random() * window.innerWidth;
//         y = window.innerHeight;
//       } else if (edge === 2) {
//         // Left edge
//         x = 0;
//         y = Math.random() * window.innerHeight;
//       } else {
//         // Right edge
//         x = window.innerWidth;
//         y = Math.random() * window.innerHeight;
//       }

//       return {
//         id: Math.random(),
//         x,
//         y,
//         size: Math.random() * 20 + 30, // Random size between 30px and 50px
//         opacity: Math.random(),
//         // Generate shades of purple (hue 240 for purple, with slight variations in lightness)
//         color: `hsl(240, 50%, ${Math.random() * 30 + 50}%)`, 
//         animationDuration: Math.random() * 5 + 5, // Duration of floating motion (slower)
//       };
//     });

//     setOrbs(initialOrbs);
//   }, []);

//   return (
//     <div className="absolute inset-0 w-full h-full overflow-hidden">
//       {orbs.map((orb) => (
//         <motion.div
//           key={orb.id}
//           className="absolute rounded-full"
//           style={{
//             width: `${orb.size}px`,
//             height: `${orb.size}px`,
//             top: `${orb.y}px`,
//             left: `${orb.x}px`,
//             backgroundColor: orb.color,
//             boxShadow: `0 0 25px ${orb.color}`, // Glowing effect
//             pointerEvents: "none",
//           }}
//           animate={{
//             x: `${Math.random() * window.innerWidth}px`, // Randomize horizontal position
//             y: `${Math.random() * window.innerHeight}px`, // Randomize vertical position
//             opacity: [orb.opacity, 0.4, orb.opacity], // Make the orbs fade in and out
//           }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: orb.animationDuration, // Slower movement duration
//             ease: "easeOut", // Slower easing (easeOut is already a slower easing)
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default FloatingGlowingOrbs;






import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingGlowingOrbs = () => {
  const [orbs, setOrbs] = useState([]);

  // Generate a random number of orbs and their properties
  useEffect(() => {
    const initialOrbs = Array.from({ length: 25 }).map(() => {  // Increased number of orbs to 25
      // Choose a random edge (top, bottom, left, right) for orb to start from
      const edge = Math.floor(Math.random() * 4); // Random number between 0 and 3

      // Generate starting positions based on edge selection
      let x, y;
      if (edge === 0) {
        // Top edge
        x = Math.random() * window.innerWidth;
        y = 0;
      } else if (edge === 1) {
        // Bottom edge
        x = Math.random() * window.innerWidth;
        y = window.innerHeight;
      } else if (edge === 2) {
        // Left edge
        x = 0;
        y = Math.random() * window.innerHeight;
      } else {
        // Right edge
        x = window.innerWidth;
        y = Math.random() * window.innerHeight;
      }

      return {
        id: Math.random(),
        x,
        y,
        size: Math.random() * 20 + 30, // Random size between 30px and 50px
        opacity: Math.random(),
        // Generate shades of purple (hue 240 for purple, with slight variations in lightness)
        color: `hsl(240, 50%, ${Math.random() * 30 + 50}%)`, 
        animationDuration: Math.random() * 5 + 5, // Duration of floating motion (slower)
      };
    });

    setOrbs(initialOrbs);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            top: `${orb.y}px`,
            left: `${orb.x}px`,
            backgroundColor: orb.color,
            boxShadow: `0 0 25px ${orb.color}`, // Glowing effect
            pointerEvents: "none",
          }}
          animate={{
            x: `${Math.random() * window.innerWidth}px`, // Randomize horizontal position
            y: `${Math.random() * window.innerHeight}px`, // Randomize vertical position
            opacity: [orb.opacity, 0.4, orb.opacity], // Make the orbs fade in and out
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: orb.animationDuration, // Slower movement duration
            ease: "easeOut", // Slower easing (easeOut is already a slower easing)
          }}
        />
      ))}
    </div>
  );
};

export default FloatingGlowingOrbs;
