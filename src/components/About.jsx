import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold
                     text-center text-gray-900 dark:text-white"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <div
            className="p-6 rounded-xl bg-white dark:bg-black
                          border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              💻 Full Stack Developer
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              2+ years of experience building production-ready web applications
              using React, Angular, Spring Boot, and Django.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="p-6 rounded-xl bg-white dark:bg-black
                          border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              🔐 Secure & Scalable Systems
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Worked on authentication systems, SSO integration, and performance
              optimization for large-scale apps.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="p-6 rounded-xl bg-white dark:bg-black
                          border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              🚀 Continuous Learner
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Strong foundation in DSA, OOPs, and system design, always
              exploring new tools and technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
