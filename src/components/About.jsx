import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

const StatCard = ({ number, label }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-black p-6 rounded-xl shadow-lg border border-gray-100 dark:border-black hover:shadow-xl transition-shadow"
    >
      <h3 className="text-4xl font-bold text-ieee-blue dark:text-[#B2A5FF] mb-2 font-display">
        {number}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
  );
};

StatCard.propTypes = {
  number: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-16"
        >
          <div className="text-center space-y-8">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-display"
            >
              Pranesh Nikhar
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-ieee-blue dark:text-[#B2A5FF] font-semibold"
            >
              Innovating Technology for a Better Tomorrow
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400"
            >
              I am a passionate tech enthusiast, programmer, and lifelong learner, dedicated to solving complex problems and creating impactful solutions for the advancement of humanity.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <StatCard number="50+" label="Projects" />
            <StatCard number="10+" label="Skills" />
            <StatCard number="500+" label="Connections" />
            {/* <StatCard number="10+" label="Mentors" /> */}
          </div>

          <div className="space-y-12">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Hi there! I’m a 19-year-old programmer with a passion for leveraging technology to solve complex problems and create impactful solutions. With a solid technical foundation and a drive to innovate, I'm always excited to tackle new challenges in Artificial Intelligence and Machine Learning

                💡 Skilled in Data Structures & Algorithms, Web Development, and Cloud Computing, I’m constantly expanding my knowledge and honing my skills to stay at the forefront of tech advancements. My journey is all about exploring the endless possibilities of AI and finding ways to make a real difference.

                🌐 Open to connecting with mentors, fellow tech enthusiasts, and visionary teams. Let’s collaborate and build the future, one project at a time!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
                  My Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  To use Artificial Intelligence and Machine Learning to build innovative and impactful solutions that solve real-world problems and make life better. I’m committed to learning, collaborating, and using technology to create a smarter and more connected future.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  IEEE SB MUJ is the biggest technical professional organisation
                  of Manipal University, Jaipur. Our mission here is to work on
                  projects and development into advancing technology in order to
                  transform lives through the power of technology and education.
                </p> */}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


