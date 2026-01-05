import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const genres = [
  {
    id: "pop",
    name: "Pop",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcttcMKAXczNfGAx9ep2YjghkxuapmoyBVGg&s",
    color: "bg-pink-500/70",
  },
  {
    id: "rock",
    name: "Rock",
    cover:
      "https://c.saavncdn.com/043/Rock-On-2-Hindi-2016-20240415185729-500x500.jpg",
    color: "bg-red-500/70",
  },
  {
    id: "hiphop",
    name: "Hip-Hop",
    cover:
      "https://a10.gaanacdn.com/gn_img/albums/21GWwR3pkg/GWwrENAL3p/size_m.jpg",
    color: "bg-purple-600/70",
  },
  {
    id: "jazz",
    name: "Jazz",
    cover:
      "https://a10.gaanacdn.com/gn_pl_img/playlists/R7vKXr6Wmr/vKX6paRVWm/size_l_1515077861.jpg",
    color: "bg-indigo-500/70",
  },
  {
    id: "classical",
    name: "Classical",
    cover:
      "https://s.saregama.tech/image/c/fw_485/e/b3/36/classic-revival-hits-volume-02-tamil_1527228791.jpg",
    color: "bg-blue-500/70",
  },
];

const GenreSection = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 sm:px-6 mt-10">
      <h2 className="text-2xl font-bold text-white mb-6">
        Explore <span className="text-neon">Genres</span>
      </h2>

    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
        {genres.map((genre) => (
          <motion.div
            key={genre.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(`/genre/${genre.id}`)}
            className={`
              relative cursor-pointer rounded-xl overflow-hidden
              ${genre.color}
              group shadow-lg
            `}
          >
            {/* Cover */}
            <img
              src={genre.cover}
              alt={genre.name}
              className="w-full h-36 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Play Button */}
            {/* <motion.button
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-3 right-3 bg-neon p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <Play size={16} className="text-black" />
            </motion.button> */}

            {/* Genre Name */}
            <div className="absolute bottom-3 left-3 text-white font-bold text-sm">
              {genre.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GenreSection;
