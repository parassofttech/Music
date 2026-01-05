import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const FooterLast = () => {
  return (
    <footer className="hidden md:block w-full bg-darkbg from-zinc-900 to-black border-t border-zinc-800 text-gray-400 mt-24">
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-wide">
            Music<span className="text-neon">Flow</span>
          </h2>
          <p className="text-sm mt-4 leading-relaxed text-gray-400">
            Discover, stream and enjoy unlimited music from your favourite
            artists — anytime, anywhere.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <div
                key={i}
                className="p-2 rounded-full bg-zinc-800 hover:bg-neon hover:text-black transition cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Explore", path: "/explore" },
              { name: "Playlists", path: "/playlist" },
              // { name: "Liked Songs", path: "/liked" },
            ].map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className="hover:text-neon transition"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4">Genres</h3>
          <ul className="space-y-3 text-sm">
            {["Pop", "Rock", "Jazz", "Bollywood"].map((genre, i) => (
              <li
                key={i}
                className="hover:text-neon transition cursor-pointer"
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to get updates on new songs and playlists.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-l-md text-sm focus:outline-none"
            />
            <button className="px-4 py-2 bg-neon text-black font-semibold rounded-r-md hover:opacity-90 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MusicFlow — Built with ❤️ for music lovers
      </div>
    </footer>
  );
};

export default FooterLast;
