import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Search, User, Music } from "lucide-react"; // Playlist -> Music

const Sidebar = () => {
  const navItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "Explore", icon: <Search size={20} />, path: "/explore" },
    { name: "Profile", icon: <User size={20} />, path: "/profile" },
    { name: "Playlists", icon: <Music size={20} />, path: "/playlists" }, // changed
  ];

  return (
    <aside className="flex flex-col w-60 h-screen bg-zinc-900 p-6 fixed top-0 left-0 border-r border-zinc-800">
      <h2 className="text-xl font-bold text-white mb-8">
        Music<span className="text-green-500">Flow</span>
      </h2>

      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-zinc-800 ${
                isActive
                  ? "bg-green-500 text-black font-semibold"
                  : "text-gray-400"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
