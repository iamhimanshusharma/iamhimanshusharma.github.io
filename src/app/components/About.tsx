import { motion } from 'motion/react';
import { Code, Brain, Rocket, Award } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Experienced in building end-to-end web applications with modern frameworks and technologies.',
    },
    {
      icon: Brain,
      title: 'API Development',
      description: 'Deep understanding of REST API fundamentals and their practical applications.',
    },
    {
      icon: Rocket,
      title: 'Problem Solving',
      description: 'Strong analytical skills with a passion for solving complex computational problems.',
    },
    {
      icon: Award,
      title: 'Research & Innovation',
      description: 'Committed to academic research and contributing to technological advancement in Graphs.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
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
            About Me
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I am a dedicated M.Tech student specializing in Computer Science and Engineering. My journey in technology is driven by curiosity and a desire to create impactful solutions that address real-world challenges.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg"
                  >
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 rounded-xl text-white relative overflow-hidden"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <motion.h3
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="text-2xl mb-4 relative z-10"
          >
            Current Focus
          </motion.h3>
          <motion.p
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg opacity-90 relative z-10"
          >
            Currently pursuing research in coloring of Advance Graphs,
            while also exploring cloud backend system technologies.
            I believe in continuous learning and staying updated with the latest trends in technology.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}