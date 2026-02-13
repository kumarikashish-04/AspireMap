import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [feedback, setFeedback] = useState({ name: "", email: "", message: "" });

  // Animation variants
  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardHover = {
    hover: { 
      y: -10, 
      boxShadow: "0 25px 30px -10px rgba(180, 83, 9, 0.4)",
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const handleEmailSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing! ☕`);
      setEmail("");
    }
  };

  const handleContactClick = () => {
    window.location.href = "mailto:hello@aspiremap.com?subject=Career Guidance Inquiry";
  };

  return (
    <div className={`min-h-screen w-full relative overflow-hidden transition-colors duration-500 ${
      darkMode 
        ? "bg-gradient-to-br from-stone-950 via-amber-950 to-stone-900" 
        : "bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100"
    }`}>
      
{/* Animated Coffee Gradient Background */}
<motion.div 
  className="absolute inset-0"
  animate={{
    background: [
      "radial-gradient(circle at 20% 30%, rgba(217,119,6,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(180,83,9,0.15) 0%, transparent 40%)",
      "radial-gradient(circle at 80% 30%, rgba(217,119,6,0.15) 0%, transparent 40%), radial-gradient(circle at 20% 70%, rgba(180,83,9,0.15) 0%, transparent 40%)",
      "radial-gradient(circle at 40% 50%, rgba(217,119,6,0.15) 0%, transparent 40%), radial-gradient(circle at 60% 50%, rgba(180,83,9,0.15) 0%, transparent 40%)"
    ]
  }}
  transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
/>

{/* Floating Coffee Beans Animation */}
{[...Array(20)].map((_, i) => (
  <motion.div
    key={i}
    className={`absolute text-3xl ${darkMode ? 'opacity-20' : 'opacity-10'}`}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -40, 0],
      x: [0, Math.random() * 30 - 15, 0],
      rotate: [0, 360],
      opacity: darkMode ? [0.1, 0.3, 0.1] : [0.05, 0.15, 0.05],
    }}
    transition={{
      duration: Math.random() * 12 + 8,
      repeat: Infinity,
      delay: Math.random() * 5,
    }}
  >
    {i % 3 === 0 ? "🫘" : i % 3 === 1 ? "☕" : "🍂"}
  </motion.div>
))}

      {/* Top Right Navigation */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        {/* Login Button */}
        <motion.button
          onClick={() => navigate("/login")}
          className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>🔐</span>
          Login
        </motion.button>

        {/* Dark/Light Mode Toggle */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.button>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center px-6 py-12 md:py-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* 1. HERO SECTION - SMALLER TITLE */}
        <motion.section 
          className="max-w-6xl w-full mx-auto text-center mb-24"
          variants={staggerContainer}
        >
          {/* Logo - Smaller Size */}
          <motion.div variants={fadeInUp}>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-4 ${
              darkMode 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400" 
                : "text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-700 to-stone-800"
            }`}>
              AspireMap
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full mb-6" />
          </motion.div>

          {/* Smaller Heading */}
          <motion.h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? 'text-amber-100' : 'text-stone-800'
            }`}
            variants={fadeInUp}
          >
            Find the Right Career Path <br />
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              with Confidence
            </span>
          </motion.h2>

          <motion.p 
            className={`text-base md:text-lg max-w-3xl mx-auto mb-8 ${
              darkMode ? 'text-amber-200/80' : 'text-stone-600'
            }`}
            variants={fadeInUp}
          >
            AI-powered guidance, skill analysis & personalized roadmap for your dream career.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.button
              onClick={() => navigate("/assessment")}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold rounded-full shadow-2xl shadow-amber-900/30 transition-all duration-300 text-base flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔵 Take Free Career Test
            </motion.button>
            
            <motion.button
              onClick={() => navigate("/explore")}
              className={`px-8 py-3.5 border-2 font-bold rounded-full transition-all duration-300 text-base ${
                darkMode
                  ? 'border-amber-600 text-amber-100 hover:bg-amber-900/30'
                  : 'border-amber-700 text-stone-700 hover:bg-amber-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ⚪ Explore Career Paths
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            variants={fadeInUp}
          >
            {[
              { value: "10,000+", label: "Students Guided", icon: "👥" },
              { value: "500+", label: "Career Paths", icon: "🎯" },
              { value: "95%", label: "Success Rate", icon: "📈" },
              { value: "24/7", label: "Expert Support", icon: "☕" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl backdrop-blur-lg ${
                  darkMode ? 'bg-amber-900/20' : 'bg-amber-100/50'
                }`}
                whileHover={{ y: -5 }}
              >
                <span className="text-2xl mb-1 block">{stat.icon}</span>
                <div className={`text-xl font-bold ${darkMode ? 'text-amber-100' : 'text-stone-800'}`}>{stat.value}</div>
                <div className={`text-xs ${darkMode ? 'text-amber-200/70' : 'text-stone-600'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 2. PROBLEM SECTION */}
        <motion.section 
          className="max-w-5xl w-full mx-auto mb-24"
          variants={staggerContainer}
        >
          <div className={`relative rounded-3xl p-10 ${
            darkMode 
              ? 'bg-gradient-to-br from-amber-900/40 to-stone-900/40 border border-amber-700/30' 
              : 'bg-gradient-to-br from-amber-100/80 to-orange-100/80 border border-amber-200'
          } backdrop-blur-xl`}>
            <motion.h2 
              className={`text-2xl md:text-3xl font-bold mb-6 text-center ${
                darkMode ? 'text-amber-100' : 'text-stone-800'
              }`}
              variants={fadeInUp}
            >
              Confused About Your Career?
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-4 mb-6"
              variants={staggerContainer}
            >
              {[
                { icon: "🤔", text: "Not sure which field suits you?" },
                { icon: "🛠️", text: "Don't know what skills you're missing?" },
                { icon: "😰", text: "Afraid of choosing the wrong career?" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-5 rounded-xl text-center ${
                    darkMode ? 'bg-black/30' : 'bg-white/50'
                  }`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <p className={darkMode ? 'text-amber-100 text-sm' : 'text-stone-700 text-sm'}>{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p 
              className={`text-lg text-center font-medium ${
                darkMode ? 'text-amber-300' : 'text-amber-700'
              }`}
              variants={fadeInUp}
            >
              We simplify career decisions with data-driven insights. ☕
            </motion.p>
          </div>
        </motion.section>

        {/* 3. FEATURES SECTION */}
        <motion.section 
          className="max-w-6xl w-full mx-auto mb-24"
          variants={staggerContainer}
        >
          <motion.h2 
            className={`text-2xl md:text-3xl font-bold mb-10 text-center ${
              darkMode ? 'text-amber-100' : 'text-stone-800'
            }`}
            variants={fadeInUp}
          >
            Core Features to <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Elevate Your Career</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🧠", title: "AI Career Assessment", desc: "Personality & skill-based recommendations", color: "from-amber-600/20 to-amber-700/20" },
              { icon: "📊", title: "Skill Gap Analysis", desc: "Find missing skills for your dream job", color: "from-yellow-600/20 to-yellow-700/20" },
              { icon: "🗺", title: "Personalized Roadmap", desc: "Step-by-step learning path", color: "from-amber-600/20 to-amber-700/20" },
              { icon: "🎯", title: "Job Role Explorer", desc: "Explore trending career options", color: "from-yellow-600/20 to-yellow-700/20" },
              { icon: "📈", title: "Industry Trends", desc: "See future demand & salary insights", color: "from-amber-600/20 to-amber-700/20" },
              { icon: "💼", title: "Resume Analyzer", desc: "Improve your resume with AI", color: "from-yellow-600/20 to-yellow-700/20" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${feature.color} backdrop-blur-lg rounded-xl p-5 border ${
                  darkMode ? 'border-amber-700/30 hover:border-amber-500' : 'border-amber-300/50 hover:border-amber-500'
                } transition-all duration-300 group`}
                variants={fadeInUp}
                whileHover="hover"
                {...cardHover}
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">
                  {feature.icon}
                </span>
                <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-amber-100' : 'text-stone-800'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-amber-200/70' : 'text-stone-600'}`}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. HOW IT WORKS */}
        <motion.section 
          className="max-w-5xl w-full mx-auto mb-24"
          variants={staggerContainer}
        >
          <motion.h2 
            className={`text-2xl md:text-3xl font-bold mb-10 text-center ${
              darkMode ? 'text-amber-100' : 'text-stone-800'
            }`}
            variants={fadeInUp}
          >
            Your Journey in <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">3 Simple Steps</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 transform -translate-y-1/2" />
            
            {[
              { step: "1️⃣", title: "Take Assessment", desc: "Complete our AI-powered career assessment", icon: "📝" },
              { step: "2️⃣", title: "Get Career Report", desc: "Receive detailed insights & recommendations", icon: "📊" },
              { step: "3️⃣", title: "Follow Roadmap", desc: "Start your personalized learning journey", icon: "🗺️" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative z-10 text-center p-6 rounded-xl ${
                  darkMode 
                    ? 'bg-gradient-to-br from-amber-900/60 to-stone-900/60 border border-amber-700/50' 
                    : 'bg-white/80 border border-amber-200'
                } backdrop-blur-lg`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{item.step}</div>
                <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-amber-100' : 'text-stone-800'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-amber-200/70' : 'text-stone-600'}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 5. TESTIMONIALS SECTION */}
        <motion.section 
          className="max-w-6xl w-full mx-auto mb-24"
          variants={staggerContainer}
        >
          <motion.h2 
            className={`text-2xl md:text-3xl font-bold mb-10 text-center ${
              darkMode ? 'text-amber-100' : 'text-stone-800'
            }`}
            variants={fadeInUp}
          >
            Success Stories ☕
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Priya Sharma", role: "Software Engineer", text: "This platform helped me switch from confusion to clarity in just 2 weeks!", rating: 5 },
              { name: "Rahul Verma", role: "Product Manager", text: "The skill gap analysis showed exactly what I was missing. Landed my dream job!", rating: 5 },
              { name: "Ananya Patel", role: "Data Scientist", text: "Personalized roadmap made learning so structured. Highly recommended!", rating: 5 },
              { name: "Arjun Reddy", role: "UX Designer", text: "From zero experience to portfolio ready in 3 months. Thank you AspireMap!", rating: 5 },
              { name: "Neha Gupta", role: "Marketing Lead", text: "Industry trends feature helped me choose the right specialization.", rating: 5 },
              { name: "Vikram Singh", role: "Entrepreneur", text: "Best career guidance platform I've ever used. Worth every minute!", rating: 5 }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className={`p-5 rounded-xl ${
                  darkMode 
                    ? 'bg-gradient-to-br from-amber-900/40 to-stone-900/40 border border-amber-700/30' 
                    : 'bg-white border border-amber-200'
                } backdrop-blur-lg`}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
                  ))}
                </div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-amber-100' : 'text-stone-700'}`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-amber-100' : 'text-stone-800'}`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-amber-200/60' : 'text-stone-500'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 6. CTA SECTION */}
        <motion.section 
          className="max-w-4xl w-full mx-auto mb-24"
          variants={staggerContainer}
        >
          <div className={`relative rounded-3xl p-12 text-center ${
            darkMode 
              ? 'bg-gradient-to-br from-amber-900/60 to-stone-900/60 border border-amber-700/50' 
              : 'bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-300'
          } backdrop-blur-xl overflow-hidden`}>
            
            {/* Animated Coffee Cups */}
            <motion.div
              className="absolute -top-10 -left-10 text-7xl opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity }}
            >
              ☕
            </motion.div>
            <motion.div
              className="absolute -bottom-10 -right-10 text-7xl opacity-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity }}
            >
              ☕
            </motion.div>

            <motion.h2 
              className={`text-3xl md:text-4xl font-black mb-4 ${
                darkMode ? 'text-amber-100' : 'text-stone-800'
              }`}
              variants={fadeInUp}
            >
              Your Future Won't Wait.
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                Start Today.
              </span>
            </motion.h2>

            <motion.button
              onClick={() => navigate("/get-started")}
              className="px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold rounded-full shadow-2xl shadow-amber-900/50 transition-all duration-300 text-lg inline-flex items-center gap-3"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔵 Get Started Free
              <span className="text-xl">→</span>
            </motion.button>
          </div>
        </motion.section>

        {/* 7. FOOTER SECTION */}
        <motion.footer 
          className="max-w-6xl w-full mx-auto"
          variants={fadeInUp}
        >
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-xl ${
            darkMode ? 'bg-stone-900/80' : 'bg-white/80'
          } backdrop-blur-lg`}>
            
            {/* About */}
            <div>
              <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-amber-100' : 'text-stone-800'}`}>
                AspireMap
              </h3>
              <p className={`text-sm ${darkMode ? 'text-amber-200/70' : 'text-stone-600'}`}>
                Brewing career success with AI-powered guidance and personalized roadmaps.
              </p>
              <div className="flex gap-3 mt-3">
                {["📘", "🐦", "💼", "📸"].map((icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className={`text-xl ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`font-semibold mb-3 ${darkMode ? 'text-amber-100' : 'text-stone-800'}`}>
                Quick Links
              </h4>
              <ul className="space-y-1.5">
                {["About Us", "Contact", "Privacy Policy", "Terms"].map((link, i) => (
                  <li key={i}>
                    <button className={`text-sm ${darkMode ? 'text-amber-200/70 hover:text-amber-100' : 'text-stone-600 hover:text-stone-800'}`}>
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={`font-semibold mb-3 ${darkMode ? 'text-amber-100' : 'text-stone-800'}`}>
                Contact Us
              </h4>
              <button
                onClick={handleContactClick}
                className={`flex items-center gap-2 text-sm ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}
              >
                📧 hello@aspiremap.com
              </button>
              <p className={`mt-2 text-sm ${darkMode ? 'text-amber-200/70' : 'text-stone-600'}`}>
                ☎️ +91 98765 43210
              </p>
            </div>

            {/* Email Subscription */}
            <div>
              <h4 className={`font-semibold mb-3 ${darkMode ? 'text-amber-100' : 'text-stone-800'}`}>
                Stay Updated
              </h4>
              <form onSubmit={handleEmailSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className={`w-full p-2.5 text-sm rounded-lg mb-2 ${
                    darkMode 
                      ? 'bg-stone-800 text-amber-100 border border-amber-700/50' 
                      : 'bg-amber-50 text-stone-800 border border-amber-300'
                  } focus:outline-none focus:border-amber-500`}
                />
                <motion.button
                  type="submit"
                  className="w-full py-2.5 text-sm bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe ☕
                </motion.button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className={`text-center mt-6 py-4 text-sm border-t ${
            darkMode ? 'border-amber-800/30 text-amber-200/50' : 'border-amber-300/50 text-stone-500'
          }`}>
            <p>© 2026 AspireMap. Brewing careers with passion ☕</p>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Landing;