// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// import whatsapp from "../assets/images/whatsapp.png";
// import instagram from "../assets/images/instagram.png";
// import twitter from "../assets/images/twitter.png";
// import linkedin from "../assets/images/linkedin.png";

// const socials = [
//   {
//     name: "WhatsApp",
//     link: "https://wa.me/919758050814",
//     icon: whatsapp,
//   },
//   {
//     name: "Instagram",
//     link: "https://www.instagram.com/priyanshusubbarwal",
//     icon: instagram,
//   },
//   {
//     name: "Twitter",
//     link: "https://x.com/pri_subbarwal",
//     icon: twitter,
//   },
//   {
//     name: "LinkedIn",
//     link: "https://linkedin.com/in/priyanshu-subberwal",
//     icon: linkedin,
//   },
// ];

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   useEffect(() => {
//     if (status) {
//       const timer = setTimeout(() => {
//         setStatus(null);
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [status]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus(null);

//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/contact/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!res.ok) {
//         throw new Error("Failed to send message");
//       }
//       setStatus("success");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       setStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-24 px-6 bg-white dark:bg-black">
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
//           Get In <span className="text-blue-500">Touch</span>
//         </motion.h2>

//         <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
//           Have a project, opportunity, or just want to say hi? Feel free to
//           reach out.
//         </p>

//         {/* Content */}
//         <div className="mt-16 grid gap-12 md:grid-cols-2">
//           {/* Contact Form */}
//           <motion.form
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name *"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-4 rounded-lg
//                          bg-gray-100 dark:bg-neutral-900
//                          text-gray-900 dark:text-white
//                          border border-gray-300 dark:border-gray-700
//                          focus:outline-none focus:border-blue-500"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email *"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-4 rounded-lg
//                          bg-gray-100 dark:bg-neutral-900
//                          text-gray-900 dark:text-white
//                          border border-gray-300 dark:border-gray-700
//                          focus:outline-none focus:border-blue-500"
//             />

//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message *"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full p-4 rounded-lg
//                          bg-gray-100 dark:bg-neutral-900
//                          text-gray-900 dark:text-white
//                          border border-gray-300 dark:border-gray-700
//                          focus:outline-none focus:border-blue-500"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="px-8 py-3 rounded-lg
//                          bg-blue-500 text-white font-medium
//                          hover:bg-blue-600 transition
//                          shadow-lg shadow-blue-500/20"
//             >
//               {loading ? "Sending..." : "Send Message 🚀"}
//             </button>

//             {/* status message */}
//             {status === "success" && (
//               <p className="text-green-600">✅ Message sent successfully!</p>
//             )}

//             {status === "error" && (
//               <p className="text-red-600">
//                 ❌ Something went wrong. Try again.
//               </p>
//             )}
//           </motion.form>

//           {/* Social Links */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-2 gap-6"
//           >
//             {socials.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.link}
//                 target="_blank"
//                 className="group relative flex items-center justify-center
//                  h-40 rounded-2xl
//                  bg-white/5 backdrop-blur-md
//                  border border-white/10
//                  hover:border-blue-500/40
//                  transition-all duration-300
//                  hover:-translate-y-1
//                  hover:shadow-xl hover:shadow-blue-500/20"
//               >
//                 {/* ICON */}
//                 <img
//                   src={item.icon}
//                   alt={item.name}
//                   className="w-12 h-12 object-contain
//                    brightness-110
//                    group-hover:scale-110 transition"
//                 />

//                 {/* NAME OVERLAY */}
//                 <span
//                   className="absolute bottom-4 px-3 py-1 rounded-full
//                    text-xs font-medium
//                    bg-black/70 text-white
//                    opacity-0 translate-y-2
//                    group-hover:opacity-100 group-hover:translate-y-0
//                    transition"
//                 >
//                   {item.name}
//                 </span>
//               </a>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

import whatsapp from "../assets/images/whatsapp.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";

const socials = [
  {
    name: "WhatsApp",
    link: "https://wa.me/919758050814",
    icon: whatsapp,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/priyanshusubbarwal",
    icon: instagram,
  },
  {
    name: "Twitter",
    link: "https://x.com/pri_subbarwal",
    icon: twitter,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/priyanshu-subberwal",
    icon: linkedin,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        "service_7ac4zha",
        "template_k4s2oyn",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "DUKlUA6g4gkLCr_K-"
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-black">
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
          Get In <span className="text-blue-500">Touch</span>
        </motion.h2>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Have a project, opportunity, or just want to say hi? Feel free to
          reach out.
        </p>

        {/* Content */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg
                         bg-gray-100 dark:bg-neutral-900
                         text-gray-900 dark:text-white
                         border border-gray-300 dark:border-gray-700
                         focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg
                         bg-gray-100 dark:bg-neutral-900
                         text-gray-900 dark:text-white
                         border border-gray-300 dark:border-gray-700
                         focus:outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg
                         bg-gray-100 dark:bg-neutral-900
                         text-gray-900 dark:text-white
                         border border-gray-300 dark:border-gray-700
                         focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-lg
                         bg-blue-500 text-white font-medium
                         hover:bg-blue-600 transition
                         shadow-lg shadow-blue-500/20"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-600">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600">
                ❌ Something went wrong. Try again.
              </p>
            )}
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {socials.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center
                 h-40 rounded-2xl
                 bg-white/5 backdrop-blur-md
                 border border-white/10
                 hover:border-blue-500/40
                 transition-all duration-300
                 hover:-translate-y-1
                 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-12 h-12 object-contain
                   brightness-110
                   group-hover:scale-110 transition"
                />

                <span
                  className="absolute bottom-4 px-3 py-1 rounded-full
                   text-xs font-medium
                   bg-black/70 text-white
                   opacity-0 translate-y-2
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition"
                >
                  {item.name}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
