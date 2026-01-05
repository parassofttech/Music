import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Search, User, Music } from "lucide-react";

const NavBarUnder = () => {
  const navItems = [
    { name: "Home", icon: <Home size={24} />, path: "/" },
    { name: "Explore", icon: <Search size={24} />, path: "/explore" },
    { name: "Playlist", icon: <Music size={24} />, path: "/playlist" },
    { name: "Profile", icon: <User size={24} />, path: "/profile" },
    
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800 z-50 lg:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-gray-400 transition-all hover:text-neon ${
                isActive ? "text-neon" : ""
              }`
            }
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBarUnder;
