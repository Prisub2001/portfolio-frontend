import { motion } from "framer-motion";

const stacks = [
  {
    title: "Frontend",
    items: ["React", "Angular", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Java", "Django", "Python", "REST APIs", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Postman", "Linux"],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 px-6 bg-white dark:bg-black">
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
          Tech <span className="text-blue-500">Stack</span>
        </motion.h2>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {stacks.map((stack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border
                         border-gray-200 dark:border-gray-700
                         bg-gray-50 dark:bg-neutral-900"
            >
              <h3
                className="text-xl font-semibold mb-4
                             text-gray-900 dark:text-white"
              >
                {stack.title}
              </h3>

              <ul className="space-y-2">
                {stack.items.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
