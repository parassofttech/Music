import React, { useEffect, useState } from "react";
import { Music, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {
  const navigate = useNavigate();

  // EMPTY INITIAL STATE
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  //  FORCE CLEAR ON LOAD
  useEffect(() => {
    setForm({
      name: "",
      email: "",
      password: "",
    });
  }, []);

  //  HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //  SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8000/music/api/register", // 🔥 register API
        form
      );

      console.log(res.data);

      //  clear after success
      setForm({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkbg from-zinc-900 to-black text-white px-4">
      <div className="w-full max-w-md bg-zinc-900/90 backdrop-blur rounded-2xl p-8 shadow-2xl border border-zinc-800">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Music className="text-neon" size={32} />
          <h1 className="text-2xl font-bold">
            Music<span className="text-neon">Flow</span>
          </h1>
        </div>

        <h2 className="text-xl font-semibold mb-1">Create Account</h2>
        <p className="text-sm text-gray-400 mb-6">
          Join MusicFlow and start listening
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
          
          {/* Name */}
          <div>
            <label className="text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Your name"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-zinc-800 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-zinc-800 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-400">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password" // 🔥 important
                placeholder="Create password"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-zinc-800 outline-none focus:ring-2 focus:ring-green-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-black py-3 rounded-lg font-semibold hover:scale-[1.02] transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-500 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
