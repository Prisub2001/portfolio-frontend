import { motion } from "framer-motion";
import lightmode from "../assets/images/lightmode.png";
import darkmode from "../assets/images/darkmode.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* left side text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="leading-none">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm
            </h1>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white">
              <span className="text-blue-500">Priyanshu Subberwal</span>
            </h1>
          </div>

          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            Full Stack Software Engineer
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            I build scalable, secure, and high-performance web applications
            using React, Angular, Spring Boot, and Django.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-blue-500 text-white
                                    hover:bg-blue-600 transition"
            >
              Contact Me
            </a>

            <a
              href="/Priyanshu_Subberwal_Resume.pdf"
              download
              className="px-6 py-3 rounded-lg border
                                    border-gray-400 dark:border-gray-600
                                    text-gray-800 dark:text-gray-200
                                    hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* right side - image/illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          {/* Light mode */}
          <div className="block dark:hidden w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-white">
            <img
              src={lightmode}
              alt="Priyanshu illustration light"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark mode */}
          <div className="hidden dark:block w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-black">
            <img
              src={darkmode}
              alt="Priyanshu illustration dark"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
