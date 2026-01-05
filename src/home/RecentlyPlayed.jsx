import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useMusic } from "./../context/MusicContext";

const recentlyPlayed = [
  {
    id: "rec1",
    title: "Lahore",
        artist: "Guru Randhawa",
        cover:
          "https://pagalnew.com/coverimages/Lahore-Guru-Randhawa-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/4170",
  },
  {
    id: "rec2",
   title: "Kaabil Hoon",
        artist: "Jubin Nautiyal",
        cover:
          "https://pagalnew.com/coverimages/Kaabil-Hoon-Jubin-Nautiyal-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/3339",
  },
  {
    id: "rec3",
   title: "Suraj Hua Maddham",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/suraj-hua-maddham-k3g-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/12342",
  },
  {
    id: "rec4",
    title: "Dilbar",
        artist: "Neha Kakkar",
        cover:
          "https://pagalnew.com/coverimages/Dilbar-Satyameva-Jayate-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/2762",
  },
  {
    id: "rec5",
     title: "Tum Hi Ho",
        artist: "Shreya Ghoshal",
        cover:
          "https://pagalnew.com/coverimages/agar-tum-mil-jao-male-zeher-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/23072",
  },
  
  {
    id: "rec6",
    title: "Lehanga",
    artist: "Jass Manak",
    cover:
          "https://cover.mr-jatt.im/thumb/485638/Lehanga-1.jpg",
    url: "https://cdnsongs.com/music/data/Single_Track/201907/Lehanga/128/Lehanga_1.mp3",
  },
  {
    id: "rec7",
    title: "Dil Sambhal ja Zara",
    artist: "Arijit Singh",
    cover:
      "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.jpg",
    url: "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.mp3",
  },
  {
    id: "rec8",
    title: "Brown Rang",
        artist: "Honey Singh",
        cover:
          "https://pagalnew.com/coverimages/Brown-Rang-International-Villager-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/24797",
  },
];

const RecentlyPlayed = () => {
  const { currentSong, isPlaying, playSong, pauseSong, registerSongs } =
    useMusic();

  // Register playlist globally for search & player
  useEffect(() => {
    registerSongs(recentlyPlayed);
  }, []);

  return (
    <section className="px-6 mt-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          Recently <span className="text-neon">Played</span>
        </h2>
        <button className="text-sm text-gray-400 hover:text-white transition">
          View All
        </button>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {recentlyPlayed.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.05 }}
              className={`min-w-[180px] bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-4 group relative cursor-pointer
                ${isCurrent ? "ring-2 ring-neon" : ""}`}
              onClick={() =>
                isCurrent
                  ? isPlaying
                    ? pauseSong()
                    : playSong(song, recentlyPlayed, index, "recent")
                  : playSong(song, recentlyPlayed, index, "recent")
              }
            >
              {/* Cover */}
              <div className="relative">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-40 rounded-xl object-cover"
                />

                {/* Play / Pause Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-3 right-3 bg-neon text-black p-3 rounded-full 
                    opacity-0 group-hover:opacity-100 transition shadow-lg"
                >
                  {isCurrent && isPlaying ? (
                    <Pause size={18} />
                  ) : (
                    <Play size={18} />
                  )}
                </motion.button>
              </div>

              {/* Info */}
              <div className="mt-4">
                <h4 className="text-white font-semibold truncate">
                  {song.title}
                </h4>
                <p className="text-sm text-gray-400 truncate">
                  {song.artist}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentlyPlayed;
