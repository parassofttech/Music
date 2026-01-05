import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Play, TrendingUp } from "lucide-react";
import { useMusic } from "../context/MusicContext";

const trendingSongs = [
  {
    id: "t1",
    title: "Ram Siya Ram",
    artist: "Arijit Singh",
    cover: "https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg",
    url: "/songs/Ram_Siya_Ram.mp3",
  },
  {
    id: "t2",
    title: "Maan Meri Jaan",
    artist: "King",
    cover:
    "https://pagalnew.com/coverimages/Maan-Meri-Jaan-Champagne-Talk-500-500.jpg",
    url: "/songs/Maan_Meri_Jaan.mp3",

  },
  {
    id: "t3",
    title: "Sahiba",
    artist: "Aditya Rikhari",
    cover: "https://koshalworld.com/siteuploads/thumb/sft59/29016_4.webp",
    url: "/songs/Sahiba.mp3",
  },
  {
    id: "t4",
    title: "Pal Pal",
    artist: "TalWinder",
    cover: "https://koshalworld.com/siteuploads/thumb/sft110/54639_4.webp",
    url: "/songs/Pal_Pal.mp3",
  },
  {
    id: "t5",
    title: "Haseen",
    artist: "alwiinder, NDS, Rippy Grewal",
    cover: "https://cover.djpunjab.is/57046/300x700/haseen-talwiinder.webp",
    url: "/songs/Haseen_Talwiinder.mp3",
  },
  {
    id: "t6",
    title: "Saiyaara",
    artist: "Arijit Singh",
    cover: "https://pagalnew.com/coverimages/title-track-saiyaara-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/51704",
  },
  {
    id: "t7",
    title: "Finding Her",
    artist: "Kushagra, Bharath",
    cover: "https://pagalnew.com/coverimages/Finding-Her-Kushagra-500-500.jpg",
    url: "/songs/Finding_Her.mp3",
  },
  {
    id: "t8",
    title: "Zulfein",
    artist: "Mehul Mahesh",
    cover: "https://c.saavncdn.com/926/Zulfein-Hindi-2025-20250829231613-500x500.jpg",
    url: "/songs/Zulfein.mp3",
  },
  {
    id: "t9",
    title: "Khayaal",
    artist: "Talwinder",
    cover:
      "https://pagalnew.com/coverimages/Khayaal-Talwiinder-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/39162",
  },
  {
    id: "t10",
    title: "Dhun",
    artist: "Mithoon, Arijit Singh",
    cover: "https://pagalnew.com/coverimages/dhun-saiyaara-500-500.jpg",
    url: "https://hindi2.djpunjab.app/load/3PfEJlU32yOqnTRXNLORGg==/Dhun%20(From%20Saiyaara).mp3",
  },
];

const TrendingNow = () => {
  const { playSong, currentSong, registerSongs } = useMusic();

  /*  Register songs for:
     - SearchBar
     - Global next/prev
  */
  useEffect(() => {
    registerSongs(trendingSongs);
  }, []);

  return (
    <section className="px-6 mt-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <TrendingUp className="text-neon" />
          Trending <span className="text-neon">Now</span>
        </h2>

        <button className="text-sm text-gray-400 hover:text-white">
          View All
        </button>
      </div>

      {/* Songs */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {trendingSongs.map((song, index) => (
          <motion.div
            key={song.id}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative min-w-[180px] rounded-2xl p-3 cursor-pointer
              bg-zinc-900/80 group
              ${
                currentSong?.url === song.url
                  ? "ring-2 ring-neon"
                  : ""
              }
            `}
            onClick={() =>
              playSong(song, trendingSongs, index, "trending")
            }
          >
            {/* Image */}
            <div className="relative">
              <img
                src={song.cover}
                alt={song.title}
                className="rounded-xl h-40 w-full object-cover"
              />

              {/* Play */}
              {/* <motion.div
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-3 right-3 bg-primary text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <Play size={18} />
              </motion.div> */}
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="font-semibold text-white truncate">
                {song.title}
              </h3>
              <p className="text-sm text-gray-400 truncate">
                {song.artist}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNow;
