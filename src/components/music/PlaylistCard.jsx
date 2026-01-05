import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const PlaylistCard = ({ playlist,onClick, onPlay }) => {
  return (
  
    <div onClick={onClick}
      >

      <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative bg-zinc-900 rounded-xl p-3 cursor-pointer hover:bg-zinc-800 transition"
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={playlist.cover}
          alt={playlist.title}
          className="w-full h-40 object-cover"
        />

        {/* Play Button on Hover */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-3 right-3 bg-green-500 text-black p-3 rounded-full shadow-lg
                     opacity-0 group-hover:opacity-100 transition"
          onClick={() => onPlay && onPlay(playlist)}
        >
          <Play size={20} />
        </motion.button>
      </div>

      {/* Playlist Info */}
      <div className="mt-3">
        <h4 className="font-semibold truncate">{playlist.title}</h4>
        <p className="text-sm text-gray-400 truncate">
          {playlist.songs.length} songs
        </p>
      </div>
    </motion.div>
    </div>
  );
};

export default PlaylistCard;
