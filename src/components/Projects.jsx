// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "VaxiTrack",
//     description:
//       "A scalable application to check vaccination slot availability, manage bookings, and send real-time notifications.",
//     tech: ["React Native", "Django", "MySQL"],
//     github: "https://github.com/Prisub2001",
//     demo: "#",
//   },
//   {
//     title: "Pashu Care",
//     description:
//       "A responsive web platform to support stray animal shelters with donation tracking and campaigns.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     github: "https://github.com/Prisub2001",
//     demo: "#",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24 px-6 bg-white dark:bg-black">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-center
//                      text-gray-900 dark:text-white"
//         >
//           Featured <span className="text-blue-500">Projects</span>
//         </motion.h2>

//         {/* Cards */}
//         <div className="mt-16 grid gap-8 sm:grid-cols-2">
//           {projects.map((project, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.15 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//               className="group rounded-xl border
//                          border-gray-200 dark:border-gray-700
//                          bg-gray-50 dark:bg-neutral-900
//                          p-6 transition-shadow
//                          hover:shadow-xl hover:shadow-blue-500/10"
//             >
//               {/* Title */}
//               <h3
//                 className="text-2xl font-semibold
//                              text-gray-900 dark:text-white"
//               >
//                 {project.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-3 text-gray-600 dark:text-gray-400">
//                 {project.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="text-sm px-3 py-1 rounded-full
//                                bg-blue-100 text-blue-700
//                                dark:bg-blue-500/10 dark:text-blue-400"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="mt-6 flex gap-4">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   className="text-sm font-medium text-blue-500
//                              hover:underline"
//                 >
//                   GitHub →
//                 </a>
//                 <a
//                   href={project.demo}
//                   target="_blank"
//                   className="text-sm font-medium text-blue-500
//                              hover:underline"
//                 >
//                   Live Demo →
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "VaxiTrack",
    description:
      "A scalable application to check vaccination slot availability, manage bookings, and send real-time notifications.",
    tech: ["React Native", "Django", "MySQL"],
    github: "https://github.com/Prisub2001",
    demo: "#",
  },
  {
    title: "Pashu Care",
    description:
      "A responsive web platform to support stray animal shelters with donation tracking and campaigns.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Prisub2001",
    demo: "#",
  },
];

const miniProjects = [
  {
    title: "Counter Component",
    demo: "https://codesandbox.io/p/sandbox/counter-component-hrhl23",
  },
  {
    title: "Modal Popup",
    demo: "https://codesandbox.io/p/sandbox/modal-popup-zvm4qp",
  },
  {
    title: "Tab Component",
    demo: "https://codesandbox.io/p/sandbox/tab-component-mynnvs",
  },
  {
    title: "Drag & Drop List",
    demo: "https://codesandbox.io/p/sandbox/drag-drop-list-w9d9vt",
  },
  {
    title: "Carousel Slider",
    demo: "https://codesandbox.io/p/sandbox/carousel-slider-qlw3tx",
  },
  {
    title: "Form Validation",
    demo: "https://codesandbox.io/p/sandbox/form-validation-nqlthv",
  },
  {
    title: "Todo App (LocalStorage)",
    demo: "https://codesandbox.io/p/sandbox/todo-app-with-localstorage-tr2ghg",
  },
  {
    title: "Dynamic Form (JSON)",
    demo: "https://codesandbox.io/p/sandbox/dynamic-form-from-json-4w2fnm",
  },
  {
    title: "Theme Switcher (☀️/🌑)",
    demo: "https://codesandbox.io/p/sandbox/theme-switcher-light-dark-p5zyx3",
  },
  {
    title: "Searchable Dropdown (Key Navigation)",
    demo: "https://codesandbox.io/p/sandbox/searchable-dropdown-with-keyboard-navigation-wrhgzx",
  },
  {
    title: "File Uploader (Drag & Drop)",
    demo: "https://codesandbox.io/p/sandbox/file-uploader-with-drag-drop-vzmv3n",
  },
  {
    title: "Nested Comments",
    demo: "https://codesandbox.io/p/sandbox/nested-comments-reddit-style-29vgj5",
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      <section
        id="projects"
        className="relative py-24 px-6 bg-white dark:bg-black"
      >
        <button
          onClick={() => setOpen(true)}
          className="absolute right-6 top-24 z-20
                     bg-blue-500 hover:bg-blue-600
                     text-white p-3 rounded-xl shadow-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h4v4H4V6zm6 0h4v4h-4V6zm6 0h4v4h-4V6zM4 14h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"
            />
          </svg>
        </button>

        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center
                       text-gray-900 dark:text-white"
          >
            Featured <span className="text-blue-500">Projects</span>
          </motion.h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-xl border border-gray-200 dark:border-gray-700
                           bg-gray-50 dark:bg-neutral-900 p-6
                           hover:shadow-xl hover:shadow-blue-500/10"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full
                                 bg-blue-100 text-blue-700
                                 dark:bg-blue-500/10 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Live Demo →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60
                       flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[90%] max-w-md
                         bg-white dark:bg-neutral-900
                         rounded-xl p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Some Mini Projects
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {miniProjects.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center
                               p-3 rounded-lg
                               bg-gray-100 dark:bg-neutral-800"
                  >
                    <span className="text-gray-800 dark:text-gray-200">
                      {item.title}
                    </span>
                    <a
                      href={item.demo}
                      target="_blank"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Live Demo →
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
