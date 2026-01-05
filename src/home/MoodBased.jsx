import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const moods = [
  {
    id: "chill",
    mood: "Chill",
    color: "bg-purple-600/70",
    cover: "https://c.saavncdn.com/139/Chill-feat-Shanky-Goswami-Haryanvi-2022-20220922120425-500x500.jpg",
  },
  {
    id: "party",
    mood: "Party",
    color: "bg-pink-600/70",
    cover: "https://c.saavncdn.com/931/Party-Mashup-By-DJ-NYK--Hindi-2021-20210506180609-500x500.jpg",
  },
  {
    id: "romantic",
    mood: "Romantic",
    color: "bg-red-500/70",
    cover: "https://i.ytimg.com/vi/3-buUW3gmtU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC0bdYQwAOfGmLZzvbFKMs5RWgfAw",
  },
  {
    id: "bhakti",
    mood: "Bhakti",
    color: "bg-purple-600/70",
    cover: "https://play-lh.googleusercontent.com/XAg8NlL-riOOZ4YToPEzWy52kawijZvj6c7H1rb64eIp47Z_K1H6PEoiP095mO4j6DMhTYzxYkOZ6csMpn1sNg",
  },
];

const MoodBased = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/mood/${id}`);
  };

  return (
    <section className="px-6 mt-10">
      <h2 className="text-2xl font-bold text-white mb-6">
        Mood Based <span className="text-neon">Playlists</span>
      </h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {moods.map((mood) => (
          <motion.div
            key={mood.id}
            whileHover={{ scale: 1.05 }}
            className={`relative w-[200px] rounded-xl cursor-pointer ${mood.color} overflow-hidden group`}
            onClick={() => handleClick(mood.id)}
          >
            <img
              src={mood.cover}
              alt={mood.mood}
              className="w-full h-40 object-cover rounded-lg"
            />
            {/* <motion.button
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-3 right-3 bg-neon p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <Play size={16} />
            </motion.button> */}
            <div className="absolute bottom-3 left-3 text-white font-semibold text-sm">
              {mood.mood}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MoodBased;
