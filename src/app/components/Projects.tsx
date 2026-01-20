import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Coding Contest Platform',
      description: 'Building an online coding contest platform with features like timed contests, problem statements, submissions, user profiles, and leaderboard rankings. Implementing a custom judge system to compile/run code, evaluate test cases, and track performance analytics.',
      technologies: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Docker'],
      github: 'https://github.com/iamhimanshusharma/contestapp',
      // demo: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
    },
    {
      title: 'Personal Finance Manager',
      description: 'Developed a responsive full-stack personal finance application with modular REST APIs, secure authentication, and category-wise income/expense tracking. Built interactive spending analytics using Chart.js, enabling users to visualize trends and manage budgets effectively.',
      technologies: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Chart.js'],
      github: 'https://github.com/iamhimanshusharma/personal-finance-webapp',
      // demo: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1508175911810-88c68a5cf5e5?w=600&h=400&fit=crop',
    },
    {
      title: 'Music Artist Collaboration Network Analysis',
      description: 'Analyzed large-scale music collaboration networks to identify influential, bridging, and isolated artists using centrality metrics and community detection. Generated visual insights and recommendations to predict potential collaborations and support strategic artist discovery.',
      technologies: ['Python', 'NetworkX', 'Pandas'],
      github: 'https://colab.research.google.com/drive/1vDo2xgEqSZ3br8Vv2hxOyokPPkjOtfeo?usp=sharing',
      // demo: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -15,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center gap-4"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/90 rounded-full text-gray-900"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/90 rounded-full text-gray-900"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-xl mb-2 text-gray-900 dark:text-white"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 dark:text-gray-400 mb-4 text-sm"
                >
                  {project.description}
                </motion.p>

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
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                      }}
                      className="px-3 py-1 text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5, color: "#3b82f6" }}
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5, color: "#3b82f6" }}
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}