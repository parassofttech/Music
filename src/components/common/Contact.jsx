import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 useEffect(() => {
     setFormData({
       name: "",
       email: "",
       message: "",
     });
   }, []);
 
   //  HANDLE CHANGE
   const handleChange = (e) => {
     const { name, value } = e.target;
 
     setFormData((prev) => ({
       ...prev,
       [name]: value,
     }));
   };
 
 const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

     try {
      

      const res = await axios.post(
        "http://localhost:8000/music/contact/insert", // 🔥 register API
        formData
      );

      console.log(res.data);

      //  clear after success
      setFormData({
        name: "",
        email: "",
        message: "",
      });

  
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    } finally {
  
    }
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Get in <span className="text-neon">Touch</span>
          </h1>
          <p className="text-gray-400 mb-8">
            Have a question, suggestion or just want to say hi?  
            We'd love to hear from you 🎶
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Mail className="text-neon" />
              <span>paras2115s@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-neon" />
              <span>+91 6307478350</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-neon" />
              <span>India</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl"
        >
          <div className="mb-5">
            <label className="text-sm text-gray-400">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-2 bg-zinc-900 p-3 rounded-lg outline-none focus:ring-2 focus:ring-neon"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-5">
            <label className="text-sm text-gray-400">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 bg-zinc-900 p-3 rounded-lg outline-none focus:ring-2 focus:ring-neon"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full mt-2 bg-zinc-900 p-3 rounded-lg outline-none focus:ring-2 focus:ring-neon resize-none"
              placeholder="Write your message..."
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 bg-neon text-black font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            <Send size={18} />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
