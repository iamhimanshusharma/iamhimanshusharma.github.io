import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, ChevronDown, Code, Database, Layers, Cpu, Terminal, GitBranch } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  const skillIcons = [
    { icon: Code, color: '#10b981', angle: 335, distance: 170 },
    { icon: Database, color: '#3b82f6', angle: 0, distance: 180 },
    { icon: Layers, color: '#8b5cf6', angle: 25, distance: 170 },
    { icon: Cpu, color: '#f59e0b', angle: 205, distance: 170 },
    { icon: Terminal, color: '#ef4444', angle: 180, distance: 180 },
    { icon: GitBranch, color: '#ec4899', angle: 155, distance: 170 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 dark:from-violet-500/5 dark:to-fuchsia-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 mt-5">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block relative"
          >
            {/* Skill icons that spread on hover */}
            <div className="relative w-32 h-32 mx-auto">
              {skillIcons.map((item, index) => {
                const Icon = item.icon;
                const angleRad = (item.angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * item.distance;
                const y = Math.sin(angleRad) * item.distance;

                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    initial={{ x: -16, y: -16, opacity: 0, scale: 0.3 }}
                    animate={{
                      x: x - 16,
                      y: y - 16,
                      opacity: 0.8,
                      scale: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: index * 0.15, // stagger effect
                    }}
                  >

                    <div
                      className="w-12 h-12 rounded-lg backdrop-blur-md bg-white/20 dark:bg-gray-800/30 border border-white/30 dark:border-gray-700/30 flex items-center justify-center shadow-xl"
                      style={{
                        boxShadow: `0 4px 20px ${item.color}40`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: item.color }}
                      />
                    </div>
                  </motion.div>
                );
              })}

              {/* Profile Picture */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center text-white text-4xl shadow-2xl cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-4 border-dashed border-emerald-300/30"
                />
                <img
                  src="/user.jpg"
                  alt="Himanshu"
                  className="w-full h-full object-cover rounded-full"
                />

              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-gray-900 dark:text-white"
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Himanshu
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.1, color: "#8b5cf6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Sharma
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl mb-6"
          >
            <motion.span
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              M.Tech Computer Science & Engineering
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Passionate about building innovative solutions and exploring cutting-edge technologies in Software Development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all inline-flex items-center gap-2 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>
            <motion.a
              href="/himanshu_sharma_resume.pdf"
              whileHover={{ scale: 1.05, borderColor: "#10b981" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-600 hover:text-white transition-all inline-flex items-center gap-2"
              download={true}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com", color: "#6366f1" },
              { icon: Linkedin, href: "https://linkedin.com", color: "#10b981" },
              { icon: Mail, href: "mailto:john.doe@example.com", color: "#f59e0b" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    color: social.color,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-600 dark:text-gray-400 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}