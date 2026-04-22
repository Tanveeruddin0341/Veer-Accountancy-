/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Calculator, 
  BookOpen, 
  TrendingUp, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  Cloud,
  Layers,
  FileSpreadsheet,
  Code,
  Globe
} from 'lucide-react';
import { useState } from 'react';

const SERVICES = [
  {
    title: "Bookkeeping",
    description: "Accurate and timely recording of all financial transactions to keep your business organized.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "text-emerald-400"
  },
  {
    title: "Accounting",
    description: "Comprehensive financial reporting and analysis to help you make informed business decisions.",
    icon: <Calculator className="w-6 h-6" />,
    color: "text-indigo-400"
  },
  {
    title: "Tax Preparation",
    description: "Stay compliant and maximize your returns with our professional tax services.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "text-emerald-400"
  },
  {
    title: "QuickBooks Online",
    description: "Expert QuickBooks training and certification courses for modern accountants.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-indigo-400"
  },
  {
    title: "Xero Software",
    description: "Seamless setup and migration to Xero cloud accounting for better accessibility.",
    icon: <Cloud className="w-6 h-6" />,
    color: "text-emerald-400"
  },
  {
    title: "Zoho Books",
    description: "End-to-end Zoho financial ecosystem integration for growing enterprises.",
    icon: <Layers className="w-6 h-6" />,
    color: "text-indigo-400"
  },
  {
    title: "Advanced Excel",
    description: "Master financial modeling, automation, and data visualization in Excel.",
    icon: <FileSpreadsheet className="w-6 h-6" />,
    color: "text-emerald-400"
  },
  {
    title: "Web Development",
    description: "Building custom, fast, and secure business websites tailored to your brand.",
    icon: <Code className="w-6 h-6" />,
    color: "text-indigo-400"
  },
  {
    title: "WordPress Dev",
    description: "Professional WordPress solutions, including SEO and custom theme design.",
    icon: <Globe className="w-6 h-6" />,
    color: "text-emerald-400"
  }
];

const FEATURES = [
  "Certified Professional Services",
  "Tailored Financial Solutions",
  "Cutting-edge Accounting Software",
  "24/7 Support and Consultation",
  "Transparent Pricing Models",
  "Data Security & Privacy"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 scroll-smooth relative overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed inset-0 bg-grid-white pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 uppercase">
                VEER <span className="text-indigo-400">ACCOUNTANCY</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
              <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-6 py-2.5 rounded-xl hover:from-indigo-500 hover:to-emerald-500 transition-all shadow-lg shadow-indigo-900/40">
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/5 p-4 space-y-4"
          >
            <a href="#services" className="block text-lg font-medium px-4 py-2 hover:bg-slate-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="block text-lg font-medium px-4 py-2 hover:bg-slate-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="block text-lg font-medium px-4 py-2 hover:bg-slate-800 rounded-lg" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Professional Accounting Team
              </div>
              <h1 className="text-6xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Precision in <span className="text-emerald-400">Numbers</span>,<br/>
                Excellence in <span className="text-indigo-400 italic font-serif">Results</span>.
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
                Empowering your business with expert bookkeeping and strategic financial advisory services tailored for growth. 
                Led by <span className="text-white font-medium">Tanveeruddin</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-slate-200 transition-all shadow-xl shadow-white/5">
                  Contact Us Now
                </a>
                <a href="#services" className="px-8 py-4 bg-slate-900 text-white border border-white/10 rounded-2xl font-bold hover:bg-slate-800 transition-all backdrop-blur-md">
                  Explore Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl skew-y-2 group transition-transform duration-700 hover:skew-y-0">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=1000"
                  alt="Financial Analysis"
                  className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">What we do</h2>
              <p className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">Advanced tools for your financial stability</p>
            </div>
            <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
              We leverage modern accounting technology and deep expertise to deliver results that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/30 transition-all backdrop-blur-sm shadow-xl"
              >
                <div className={`w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center ${service.color} mb-8 border border-white/5 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>
                <button className={`flex items-center text-xs font-bold uppercase tracking-widest ${service.color} group/btn`}>
                  Details <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Why Us */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-900/20 to-emerald-900/20 border border-white/5 rounded-[48px] p-8 lg:p-20 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
                  Why choose <br/>
                  <span className="italic font-serif text-emerald-400">Veer Accountancy?</span>
                </h2>
                <div className="space-y-4 max-w-md">
                  {FEATURES.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-sm font-medium text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 text-center">
                    <p className="text-3xl font-bold text-white mb-1">99%</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Accuracy</p>
                  </div>
                  <div className="bg-indigo-500/10 border border-indigo-500/20 p-8 rounded-[40px] text-center">
                    <p className="text-3xl font-bold text-indigo-400 mb-1">50+</p>
                    <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Businesses</p>
                  </div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-[40px] text-center">
                    <p className="text-3xl font-bold text-emerald-400 mb-1">&lt; 2h</p>
                    <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Response</p>
                  </div>
                  <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 text-center">
                    <p className="text-3xl font-bold text-white mb-1">100%</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Compliance</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Inner background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-[48px] overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-5">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 p-10 lg:p-16 border-r border-white/5">
                <h3 className="text-4xl font-extrabold text-white mb-8">Connect With Us</h3>
                <p className="text-slate-400 mb-12 leading-relaxed">
                  Join our list of successful clients. Get a free financial audit today.
                </p>
                
                <div className="space-y-10">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-indigo-500 font-bold uppercase tracking-widest mb-1">Call Now</p>
                      <p className="text-xl font-bold text-white">03000196900</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-1">Email</p>
                      <p className="text-xl font-bold text-white break-all">Tanveeruddin0341@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-slate-900 transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Office</p>
                      <p className="text-xl font-bold text-white">Chitral, PK</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Area */}
              <div className="lg:col-span-3 p-10 lg:p-16">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="First Name"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white placeholder:text-slate-600 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="Last Name"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white placeholder:text-slate-600 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <select className="w-full px-5 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white transition-all appearance-none cursor-pointer">
                      <option>Bookkeeping</option>
                      <option>Accounting</option>
                      <option>Tax Filing</option>
                      <option>Wealth Growth</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <textarea 
                      rows={4}
                      placeholder="Your request..."
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white placeholder:text-slate-600 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full py-5 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:from-indigo-500 hover:to-emerald-500 transition-all active:scale-[0.98] shadow-2xl shadow-indigo-900/40">
                    REQUEST FREE AUDIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Admission Section */}
      <section id="admission" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.3em] mb-4">Join our team</h2>
            <p className="text-5xl font-extrabold text-white">Online Admission Form</p>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Start your professional journey with Veer Accountancy. Fill out the form below to apply for our training programs or internships.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/40 border border-white/10 backdrop-blur-md p-8 lg:p-12 rounded-[40px] shadow-2xl">
              <form className="space-y-8">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Candidate Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter Full Name"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Father's Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter Father's Name"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Contact Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="03xx xxxxxxx"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Date of Birth</label>
                    <input 
                      type="date" 
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Education and Address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Present Address</label>
                  <textarea 
                    rows={2}
                    required
                    placeholder="Enter your complete address in Chitral or elsewhere"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white transition-all resize-none"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Educational Qualification</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. B.Com, MBA, ACCA Inter"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white transition-all"
                  />
                </div>

                {/* Photo Upload */}
                <div className="space-y-4">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Passport Size Photo</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-full py-10 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center gap-3 bg-white/5 group-hover:bg-white/10 transition-all border-indigo-500/20 group-hover:border-indigo-500/50">
                      <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-white">Click or drag photo to upload</p>
                        <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-tighter">PNG, JPG up to 5MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-6 bg-indigo-600 text-white rounded-3xl font-black text-sm uppercase tracking-[0.3em] hover:bg-indigo-500 transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)] active:scale-[0.97]"
                >
                  Submit Admission Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center border border-indigo-500/20">
                <Calculator className="w-4 h-4 text-indigo-400" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white">Veer Accountancy</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-[0.15em]">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#admission" className="text-indigo-400 hover:text-indigo-300">Apply Online</a>
              <span className="flex items-center gap-2 text-emerald-500">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                System Online
              </span>
            </div>
            
            <p className="text-xs text-slate-600">
              &copy; 2024 Veer Accountancy Services | Chitral, Pakistan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
