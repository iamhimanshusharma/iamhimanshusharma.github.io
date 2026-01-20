import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

export function Timeline() {
  const timelineData = [
    {
      type: 'education',
      title: 'M.Tech in Computer Science & Engineering',
      institution: 'Indian Institute of Technology',
      location: 'New Delhi, India',
      period: '2024 - 2026',
      description: 'Specializing in Artificial Intelligence and Machine Learning with focus on Deep Learning and NLP.',
      achievements: [
        'CGPA: 9.2/10',
        'Research Assistant in AI Lab',
        'Published 2 research papers',
      ],
    },
    {
      type: 'work',
      title: 'Software Engineering Intern',
      institution: 'Tech Corp Inc.',
      location: 'Bangalore, India',
      period: 'Summer 2023',
      description: 'Developed full-stack web applications and contributed to microservices architecture.',
      achievements: [
        'Built 3 production-ready features',
        'Improved API response time by 40%',
        'Mentored 2 junior interns',
      ],
    },
    {
      type: 'education',
      title: 'B.Tech in Computer Science',
      institution: 'XYZ University',
      location: 'Mumbai, India',
      period: '2020 - 2024',
      description: 'Comprehensive study of computer science fundamentals with hands-on project experience.',
      achievements: [
        'CGPA: 8.5/10',
        'President of Coding Club',
        'Winner of 3 hackathons',
      ],
    },
    {
      type: 'work',
      title: 'Web Developer',
      institution: 'Freelance',
      location: 'Remote',
      period: '2022 - 2023',
      description: 'Created custom websites and web applications for various clients.',
      achievements: [
        'Completed 15+ projects',
        '5-star rating on Upwork',
        'Built e-commerce platforms',
      ],
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
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
            My Journey
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Education and professional experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Central vertical line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-violet-500 to-teal-500 transform -translate-x-1/2" />

          {timelineData.map((item, index) => {
            const Icon = item.type === 'education' ? GraduationCap : Briefcase;
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative mb-12 lg:mb-24">
                {/* Timeline item container */}
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="w-full lg:w-[calc(50%-4rem)] bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden relative group"
                  >
                    {/* Colored top bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`h-2 ${item.type === 'education'
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                          : 'bg-gradient-to-r from-violet-500 to-fuchsia-500'
                        }`}
                    />

                    <div className="p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={`p-3 rounded-xl flex-shrink-0 ${item.type === 'education'
                              ? 'bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30'
                              : 'bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30'
                            }`}
                        >
                          <Icon
                            className={`w-6 h-6 ${item.type === 'education'
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-violet-600 dark:text-violet-400'
                              }`}
                          />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xl sm:text-2xl mb-2 text-gray-900 dark:text-white"
                          >
                            {item.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={`text-base sm:text-lg mb-3 ${item.type === 'education'
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-violet-600 dark:text-violet-400'
                              }`}
                          >
                            {item.institution}
                          </motion.p>

                          <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-1"
                            >
                              <Calendar className="w-4 h-4 flex-shrink-0" />
                              <span>{item.period}</span>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-1"
                            >
                              <MapPin className="w-4 h-4 flex-shrink-0" />
                              <span>{item.location}</span>
                            </motion.div>
                          </div>

                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4"
                          >
                            {item.description}
                          </motion.p>

                          {/* Achievements */}
                          {item.achievements && item.achievements.length > 0 && (
                            <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={{
                                visible: {
                                  transition: {
                                    staggerChildren: 0.1,
                                  },
                                },
                              }}
                              className="space-y-2"
                            >
                              {item.achievements.map((achievement, i) => (
                                <motion.div
                                  key={i}
                                  variants={{
                                    hidden: { opacity: 0, x: -10 },
                                    visible: { opacity: 1, x: 0 },
                                  }}
                                  whileHover={{ x: 5 }}
                                  className="flex items-start gap-2"
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.5 }}
                                    className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${item.type === 'education'
                                        ? 'bg-emerald-500'
                                        : 'bg-violet-500'
                                      }`}
                                  />
                                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-20 h-20 ${item.type === 'education'
                          ? 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10'
                          : 'bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10'
                        } ${isLeft ? 'rounded-bl-full' : 'rounded-br-full'}`}
                    />
                  </motion.div>

                  {/* Center circle node - only visible on large screens */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-xl ${item.type === 'education'
                          ? 'bg-gradient-to-br from-emerald-500 to-teal-500'
                          : 'bg-gradient-to-br from-violet-500 to-fuchsia-500'
                        }`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Connecting line from center to card */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className={`hidden lg:block absolute top-1/2 w-16 h-1 ${item.type === 'education'
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                        : 'bg-gradient-to-r from-violet-500 to-fuchsia-500'
                      } ${isLeft ? 'right-1/2 mr-8' : 'left-1/2 ml-8'} ${isLeft ? 'origin-right' : 'origin-left'}`}
                  />
                </div>

                {/* Zigzag connector to next item */}
                {index < timelineData.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    className="hidden lg:block absolute left-1/2 top-full w-1 h-24 transform -translate-x-1/2"
                  >
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      className={`w-full h-full origin-top ${index % 2 === 0
                          ? 'bg-gradient-to-b from-emerald-500 to-violet-500'
                          : 'bg-gradient-to-b from-violet-500 to-emerald-500'
                        }`}
                    />

                    {/* Animated dot traveling along the path */}
                    <motion.div
                      animate={{
                        y: [0, 96, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute left-1/2 top-0 w-3 h-3 rounded-full transform -translate-x-1/2 ${index % 2 === 0
                          ? 'bg-emerald-400 shadow-lg shadow-emerald-500/50'
                          : 'bg-violet-400 shadow-lg shadow-violet-500/50'
                        }`}
                    />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}