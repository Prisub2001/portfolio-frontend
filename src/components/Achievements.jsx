import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🎓",
    title: "UGC NET Qualified – 2025",
    description:
      "Qualified UGC NET in Computer Science & Applications, demonstrating strong theoretical and practical knowledge.",
  },
  {
    icon: "🤝",
    title: "Team Player Award",
    description:
      "Awarded at PayNways India for collaboration, ownership, and impactful project contributions.",
  },
  {
    icon: "💻",
    title: "600+ DSA Problems Solved",
    description:
      "Solved problems on GeeksforGeeks and LeetCode, strengthening problem-solving and algorithmic thinking.",
  },
  {
    icon: "🔥",
    title: "100 Days of Coding",
    description:
      "Completed the 100 Days of Coding challenge, showing consistency and discipline in learning.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
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
          Achieve<span className="text-blue-500">ments</span>
        </motion.h2>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl bg-white dark:bg-black
                         border border-gray-200 dark:border-gray-700
                         text-center transition-shadow
                         hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3
                className="mt-4 text-lg font-semibold
                             text-gray-900 dark:text-white"
              >
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
