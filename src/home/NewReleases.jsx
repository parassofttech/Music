import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import { useMusic } from "./../context/MusicContext";

const newReleases = [
  {
    id: "nr1",
    title: "Khayaal",
    artist: "Talwinder",
    cover:
      "https://pagalnew.com/coverimages/Khayaal-Talwiinder-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/39162",
    date: "2025-01-12",
  },
  {
    id: "nr2",
    title: "Zulfein",
    artist: "Mehul Mahesh",
    cover:
      "https://c.saavncdn.com/926/Zulfein-Hindi-2025-20250829231613-500x500.jpg",
    url: "/songs/Zulfein.mp3",
    date: "2025-01-12",
  },
  {
    id: "nr3",
    title: "Chan Vekhaya",
    artist: "Harnoor",
    cover:
      "https://covers.djpunjab.pro/image/497258/Chan-Vekhya-1.jpg",
    url: "https://cdnsongs.com/music/data/Single_Track/202104/Chan_Vekhya/128/Chan_Vekhya_1.mp3",
    date: "2024-12-28",
  },
  {
    id: "nr4",
    title: "Azul",
    artist: "Guru Randhawa",
    cover:
      "https://pagalnew.com/coverimages/AZUL-Lavish-Dhiman-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/52004",
    date: "2024-12-20",
  },
  {
    id: "nr5",
    title: "Duji Vaar Pyar",
    artist: "Guru Randhawa",
    cover:
      "https://cover.djpunjab.is/47199/300x700/duji-vaar-pyar-sunanda-sharma.webp",
    url: "https://s320.djpunjab.is/data/48/47199/294298/Duji%20Vaar%20Pyar%20-%20Sunanda%20Sharma.mp3",
    date: "2024-12-20",
  },
  {
    id: "nr6",
    title: "Pasoori",
    artist: "Ali Sethi x Shae Gill",
    cover:
      "https://cover.djpunjab.is/51862/300x700/pasoori-ali-sethi.webp",
    url: "https://pagalnew.com/128-downloads/23547",
    date: "2024-12-20",
  },
  {
    id: "nr7",
    title: "Water",
    artist: "Diljit Dosanjh",
    cover:
      "https://cover.djpunjab.is/56998/300x700/water-diljit-dosanjh.webp",
    url: "https://s320.djpunjab.is/data/48/56998/306656/Water%20-%20Diljit%20Dosanjh.mp3",
    date: "2024-12-20",
  },
  {
    id: "nr8",
    title: "Dil Dardeh",
    artist: "Sukha",
    cover:
      "https://cover.djpunjab.is/57220/300x700/by-any-means-sukha.webp",
    url: "https://p320.djpunjab.is/data/48/57220/307017/Dil%20Dardeh%20-%20Sukha.mp3",
    date: "2024-12-20",
  },
];

const NewReleases = () => {
  const { playSong, currentSong, registerSongs } = useMusic();

  /*  Register songs for search & global player */
  useEffect(() => {
    registerSongs(newReleases);
  }, []);

  return (
    <section className="px-6 mt-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          New <span className="text-neon">Releases</span>
        </h2>
        <button className="text-sm text-gray-400 hover:text-white transition">
          View All
        </button>
      </div>

      {/* Slider */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {newReleases.map((song, index) => (
          <motion.div
            key={song.id}
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              playSong(song, newReleases, index, "new-releases")
            }
            className={`
              min-w-[180px] bg-zinc-900/80 rounded-2xl p-3
              group cursor-pointer
              ${
                currentSong?.url === song.url
                  ? "ring-2 ring-neon"
                  : ""
              }
            `}
          >
            {/* Cover */}
            <div className="relative">
              <img
                src={song.cover}
                alt={song.title}
                className="w-full h-44 rounded-xl object-cover"
              />

              {/* Play */}
              {/* <motion.button
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-3 right-3 bg-neon text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <Play size={18} />
              </motion.button> */}
            </div>

            {/* Info */}
            <div className="mt-3">
              <h4 className="text-white font-semibold truncate">
                {song.title}
              </h4>
              <p className="text-sm text-gray-400 truncate">
                {song.artist}
              </p>

              <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                <Calendar size={12} />
                {song.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
