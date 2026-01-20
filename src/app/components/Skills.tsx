import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      color: 'from-emerald-500 to-teal-500',
      skills: ['C++', 'C', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'Python'],
    },
    {
      category: 'Web Development',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'REST API'],
    },
    {
      category: 'Databases',
      color: 'from-violet-500 to-purple-500',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    },
    {
      category: 'Tools & Technologies',
      color: 'from-orange-500 to-red-500',
      skills: ['Git & GitHub', 'Docker', 'Linux', 'VS Code', 'Postman', 'Figma'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white inline-block"
          >
            Skills & Technologies
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden group"
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              />

              <motion.h3
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                className="text-xl mb-4 text-gray-900 dark:text-white flex items-center gap-2"
              >
                <motion.div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {category.category}
              </motion.h3>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -3,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    }}
                    className="px-4 py-2 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}