// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("login"); // login, register, guest
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Animation variants
  const pageTransition = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.4 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login with:", formData.email, formData.password);
    // Navigate to dashboard after successful login
    navigate("/dashboard");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Register with:", formData);
    // Navigate to assessment after successful registration
    navigate("/assessment");
  };

  const handleGuestLogin = () => {
    // Set guest mode flag in localStorage or context
    localStorage.setItem("userMode", "guest");
    navigate("/explore");
  };

  const handleSkip = () => {
    navigate("/");
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
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute text-2xl ${darkMode ? 'opacity-20' : 'opacity-10'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, 360],
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

      {/* Skip Button - Top Right */}
      <motion.button
        onClick={handleSkip}
        className="fixed top-6 right-6 z-50 px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span>⏭️</span>
        Skip
      </motion.button>

      {/* Dark Mode Toggle */}
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-36 z-50 p-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {darkMode ? "☀️" : "🌙"}
      </motion.button>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <motion.div 
          className="max-w-md w-full"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Brand Logo */}
          <motion.div 
            className="text-center mb-8"
            variants={fadeInUp}
          >
            <h1 className={`text-4xl md:text-5xl font-black mb-2 cursor-pointer`}
                onClick={() => navigate("/")}>
              <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                AspireMap
              </span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto rounded-full mb-4" />
            <p className={`text-sm ${darkMode ? 'text-amber-200/70' : 'text-stone-600'}`}>
              Brew your career success story ☕
            </p>
          </motion.div>

          {/* Auth Tabs */}
          <motion.div 
            className={`rounded-2xl p-1 mb-6 flex bg-opacity-50 backdrop-blur-xl ${
              darkMode ? 'bg-stone-800/50' : 'bg-amber-100/50'
            }`}
            variants={fadeInUp}
          >
            {[
              { id: "login", label: "Login", icon: "🔐" },
              { id: "register", label: "Register", icon: "📝" },
              { id: "guest", label: "Guest", icon: "👤" }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? darkMode
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                      : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                    : darkMode
                      ? 'text-amber-200/70 hover:text-amber-100'
                      : 'text-stone-600 hover:text-stone-800'
                }`}
                whileHover={{ scale: activeTab === tab.id ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Auth Forms */}
          <AnimatePresence mode="wait">
            {activeTab === "login" && (
              <motion.div
                key="login"
                {...pageTransition}
                className={`p-8 rounded-2xl backdrop-blur-xl ${
                  darkMode 
                    ? 'bg-gradient-to-br from-amber-900/40 to-stone-900/40 border border-amber-700/30' 
                    : 'bg-white/80 border border-amber-200'
                } shadow-2xl`}
              >
                <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-amber-100' : 'text-stone-800'}`}>
                  Welcome Back! 👋
                </h2>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-amber-200' : 'text-stone-700'}`}>
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600">
                        📧
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 rounded-lg text-sm ${
                          darkMode 
                            ? 'bg-stone-800/80 text-amber-100 border border-amber-700/50' 
                            : 'bg-amber-50/80 text-stone-800 border border-amber-300'
                        } focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all`}
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-amber-200' : 'text-stone-700'}`}>
                      Password
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600">
                        🔒
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-10 pr-12 py-3 rounded-lg text-sm ${
                          darkMode 
                            ? 'bg-stone-800/80 text-amber-100 border border-amber-700/50' 
                            : 'bg-amber-50/80 text-stone-800 border border-amber-300'
                        } focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-600 hover:text-amber-700"
                      >
                        {showPassword ? "👁️" : "👁️‍🗨️"}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className={`text-sm ${darkMode ? 'text-amber-200/70' : 'text-stone-600'}`}>
                        Remember me
                      </span>
                    </label>
                    <button
                      type="button"
                      className={`text-sm ${darkMode ? 'text-amber-400' : 'text-amber-600'} hover:underline`}
                    >
                      Forgot password?
                    </button>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold rounded-lg shadow-lg shadow-amber-900/30 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>🔐</span>
                    Sign In
                  </motion.button>
                </form>

                <div className="mt-6 text-center">
                  <p className={`text-sm ${darkMode ? 'text-amber-200/70' : 'text-stone-600'}`}>
                    Don't have an account?{' '}
                    <button
                      onClick={() => setActiveTab("register")}
                      className={`font-semibold ${darkMode ? 'text-amber-400' : 'text-amber-600'} hover:underline`}
                    >
                      Register here
                    </button>
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "register" && (
              <motion.div
                key="register"
                {...pageTransition}
                className={`p-8 rounded-2xl backdrop-blur-xl ${
                  darkMode 
                    ? 'bg-gradient-to-br from-amber-900/40 to-stone-900/40 border border-amber-700/30' 
                    : 'bg-white/80 border border-amber-200'
                } shadow-2xl`}
              >
                <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-amber-100' : 'text-stone-800'}`}>
                  Create Account ✨
                </h2>

                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-amber-200' : 'text-stone-700'}`}>
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600">
                        👤
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 rounded-lg text-sm ${
                          darkMode 
                            ? 'bg-stone-800/80 text-amber-100 border border-amber-700/50' 
                            : 'bg-amber-50/80 text-stone-800 border border-amber-300'
                        } focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all`}
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-amber-200' : 'text-stone-700'}`}>
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600">
                        📧
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 rounded-lg text-sm ${
                          darkMode 
                            ? 'bg-stone-800/80 text-amber-100 border border-amber-700/50' 
                            : 'bg-amber-50/80 text-stone-800 border border-amber-300'
                        } focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all`}
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-amber-200' : 'text-stone-700'}`}>
                      Password
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600">
                        🔒
                      </span>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 rounded-lg text-sm ${
                          darkMode 
                            ? 'bg-stone-800/80 text-amber-100 border border-amber-700/50' 
                            : 'bg-amber-50/80 text-stone-800 border border-amber-300'
                        } focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all`}
                        placeholder="••••••••"
                      />
                    </div>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-amber-200/50' : 'text-stone-500'}`}>
                      Minimum 8 characters
                    </p>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-amber-200' : 'text-stone-700'}`}>
                      Confirm Password
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600">
                        🔐
                      </span>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 rounded-lg text-sm ${
                          darkMode 
                            ? 'bg-stone-800/80 text-amber-100 border border-amber-700/50' 
                            : 'bg-amber-50/80 text-stone-800 border border-amber-300'
                        } focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all`}
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                    />
                    <label htmlFor="terms" className={`text-sm ${darkMode ? 'text-amber-200/70' : 'text-stone-600'}`}>
                      I agree to the{' '}
                      <button className={`font-semibold ${darkMode ? 'text-amber-400' : 'text-amber-600'} hover:underline`}>
                        Terms & Conditions
                      </button>
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold rounded-lg shadow-lg shadow-amber-900/30 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>📝</span>
                    Create Account
                  </motion.button>
                </form>

                <div className="mt-6 text-center">
                  <p className={`text-sm ${darkMode ? 'text-amber-200/70' : 'text-stone-600'}`}>
                    Already have an account?{' '}
                    <button
                      onClick={() => setActiveTab("login")}
                      className={`font-semibold ${darkMode ? 'text-amber-400' : 'text-amber-600'} hover:underline`}
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "guest" && (
              <motion.div
                key="guest"
                {...pageTransition}
                className={`p-8 rounded-2xl backdrop-blur-xl text-center ${
                  darkMode 
                    ? 'bg-gradient-to-br from-amber-900/40 to-stone-900/40 border border-amber-700/30' 
                    : 'bg-white/80 border border-amber-200'
                } shadow-2xl`}
              >
                <div className="text-6xl mb-4">👤</div>
                <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-amber-100' : 'text-stone-800'}`}>
                  Continue as Guest
                </h2>
                <p className={`text-sm mb-6 ${darkMode ? 'text-amber-200/70' : 'text-stone-600'}`}>
                  Explore career paths and features without creating an account. Your progress won't be saved.
                </p>

                <div className="space-y-3">
                  <motion.button
                    onClick={handleGuestLogin}
                    className="w-full py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold rounded-lg shadow-lg shadow-amber-900/30 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>🚀</span>
                    Continue as Guest
                  </motion.button>

                  <motion.button
                    onClick={() => setActiveTab("register")}
                    className="w-full py-3 border-2 border-amber-600 text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Create Account
                  </motion.button>
                </div>

                <div className="mt-6">
                  <p className={`text-xs ${darkMode ? 'text-amber-200/50' : 'text-stone-500'}`}>
                    Guest mode limitations:
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      darkMode ? 'bg-amber-900/30 text-amber-200/70' : 'bg-amber-100 text-stone-600'
                    }`}>
                      No progress save
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      darkMode ? 'bg-amber-900/30 text-amber-200/70' : 'bg-amber-100 text-stone-600'
                    }`}>
                      Limited assessments
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      darkMode ? 'bg-amber-900/30 text-amber-200/70' : 'bg-amber-100 text-stone-600'
                    }`}>
                      No personalized roadmap
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Login Options */}
          {activeTab !== "guest" && (
            <motion.div 
              className="mt-6"
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className={`w-full border-t ${darkMode ? 'border-amber-800/30' : 'border-amber-300/50'}`} />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className={`px-4 ${darkMode ? 'bg-stone-950 text-amber-200/70' : 'bg-amber-50 text-stone-500'}`}>
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                {[
                  { icon: "G", label: "Google", color: "from-red-500 to-red-600" },
                  { icon: "f", label: "Facebook", color: "from-blue-600 to-blue-700" },
                  { icon: "in", label: "LinkedIn", color: "from-blue-700 to-blue-800" }
                ].map((provider, index) => (
                  <motion.button
                    key={index}
                    className={`flex-1 py-2.5 rounded-lg bg-gradient-to-r ${provider.color} text-white font-medium text-sm flex items-center justify-center gap-2 opacity-90 hover:opacity-100 transition-opacity`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-bold">{provider.icon}</span>
                    {provider.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back to Home */}
          <motion.div 
            className="mt-8 text-center"
            variants={fadeInUp}
          >
            <button
              onClick={() => navigate("/")}
              className={`text-sm ${darkMode ? 'text-amber-400' : 'text-amber-600'} hover:underline flex items-center justify-center gap-1 mx-auto`}
            >
              <span>←</span>
              Back to Home
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;