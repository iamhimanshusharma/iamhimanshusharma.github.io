import { motion } from 'motion/react';
import { Trophy, Award, Code2, TrendingUp, Star, Target } from 'lucide-react';

export function CodingStats() {
  const platforms = [
    {
      name: 'LeetCode',
      username: '@imyselfhimanshusharma',
      color: 'from-orange-500 to-yellow-500',
      stats: [
        { label: 'Problems Solved', value: '225+', icon: Code2 },
        { label: 'Contest Rating', value: 'NA', icon: Trophy },
        { label: 'Global Rank', value: '636,076', icon: TrendingUp },
        { label: 'Max Streak', value: '2 days', icon: Target },
      ],
      badges: ['50 Days Badge 2025'],
    },
    {
      name: 'CodeForces',
      username: '@himanshush',
      color: 'from-blue-500 to-indigo-500',
      stats: [
        { label: 'Current Rating', value: '801', icon: Star },
        { label: 'Max Rating', value: '809', icon: Trophy },
        { label: 'Contests', value: '5', icon: Target },
        { label: 'Rank', value: 'Newbie', icon: Award },
      ],
      badges: ['Newbie'],
    },
  ];

  return (
    <section id="coding-stats" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Competitive Programming
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My coding journey across different platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((platform, platformIndex) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: platformIndex * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden relative group"
            >
              {/* Gradient Header */}
              <div className={`h-20 bg-gradient-to-br ${platform.color} relative overflow-hidden`}>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                />
                <div className="relative z-10 p-4">
                  <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className="text-xl text-white mb-1"
                  >
                    {platform.name}
                  </motion.h3>
                  <p className="text-white/80 text-xs">{platform.username}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {platform.stats.map((stat, statIndex) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: platformIndex * 0.15 + statIndex * 0.1 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="mb-1"
                        >
                          <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </motion.div>
                        <div className="text-xl text-gray-900 dark:text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-gray-600 dark:text-gray-400 leading-tight">
                          {stat.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Badges */}
                <div>
                  <h4 className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    Achievements
                  </h4>
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
                    className="flex flex-wrap gap-2"
                  >
                    {platform.badges.map((badge, badgeIndex) => (
                      <motion.span
                        key={badge}
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                        }}
                        className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${platform.color} text-white`}
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Animated border glow on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none`}
                style={{ padding: '2px' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { label: 'Total Problems', value: '350+', icon: Code2, color: 'from-emerald-500 to-teal-500' },
            // { label: 'Contests Participated', value: '5+', icon: Trophy, color: 'from-violet-500 to-purple-500' },
            // { label: 'Achievements', value: '25+', icon: Award, color: 'from-orange-500 to-red-500' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center relative overflow-hidden group"
              >
                <motion.div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-3"
                >
                  <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                <div className="text-3xl mb-2 text-gray-900 dark:text-white">
                  {item.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}