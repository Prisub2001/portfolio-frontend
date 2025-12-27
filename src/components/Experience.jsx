import { motion } from "framer-motion";

const experiences = [
  {
    company: "PayNways India",
    role: "Software Engineer",
    duration: "Dec 2023 – Present",
    points: [
      "Built scalable web applications using React and Angular.",
      "Implemented secure SSO authentication across multiple platforms.",
      "Developed reusable UI components for large datasets.",
      "Created interactive dashboards using Chart.js.",
    ],
  },
  {
    company: "CERT-In (MeitY)",
    role: "Full Stack Intern",
    duration: "Sep 2023 – Dec 2023",
    points: [
      "Developed a secure CTF platform for cybersecurity training.",
      "Built REST APIs using Django and Python.",
      "Worked with automation scripts and GenAI APIs.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gray-50 dark:bg-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center
                     text-gray-900 dark:text-white"
        >
          Work <span className="text-blue-500">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="mt-16 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-2
                         border-blue-500"
            >
              <span
                className="absolute -left-2 top-1 w-4 h-4
                               bg-blue-500 rounded-full"
              />

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.role} – {exp.company}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {exp.duration}
              </p>

              <ul
                className="list-disc list-inside space-y-2
                             text-gray-700 dark:text-gray-300"
              >
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
