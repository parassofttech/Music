import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useMusic } from "./../context/MusicContext";

const recommendedSongs = [
  {
    id: "rec1",
    title: "Kesariya",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/kesariya-brahmastra-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/30350",
  },
  {
    id: "rec2",
    title: "Heeriye",
    artist: "Jasleen Royal",
    cover:
      "https://pagalnew.com/coverimages/heeriye-arijit-singh-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/44105",
  },
  {
        id: "rec3",
        title: "Chaleya",
        artist: "Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/chaleya-jawan-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/43094",
      },
      {
        id: "rec4",
        title: "O Maahi",
        artist: "Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/o-maahi-dunki-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/44800",
      },
  {
    id: "rec5",
    title: "Tum Hi Ho",
        artist: "Arijit Singh",
        cover:
          "https://hindi2.djpunjab.app/cover/0uI8We9PdKDYCN-x1ym8qg==/arijit-romantic-hits-cover-image.webp",
        url: "https://hindi2.djpunjab.app/load/AA7dmwuC-r2yaTlk8GORew==/Tum%20Hi%20Ho%20(From%20Aashiqui%202).mp3",
  },
  {
    id: "rec6",
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal",
    cover: "https://pagalnew.com/coverimages/raataan-lambiyan-shershaah-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/19028",
  },
  {
    id: "rec7",
    title: "Shayad",
    artist: "Arijit Singh",
    cover: "https://pagalnew.com/coverimages/Shayad-Love-Aaj-Kal-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/1890",
  },
  {
    id: "rec8",
    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva",
    cover: "https://mr-jat.in/siteuploads/generaltheme/thumb/files/sft7/3089/3089-2.webp",
    url: "/dlod/3089?&volume=75&showstop=1&showvolume=1",
  },
  {
    id: "rec9",
    title: "Khairiyat",
    artist: "Arijit Singh",
    cover: "https://pagalnew.com/coverimages/Khairiyat-Chhichhore-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/2632",
  },
  {
    id: "rec10",
    title: "Hawayein",
    artist: "Arijit Singh",
    cover:
          "https://pagalnew.com/coverimages/Hawayein-Jab-Harry-Met-Sejal-(Original-Motion-Picture-Soundtrack)-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/3573",
  },
  {
  id: "rec11",
  title: "O Bedardeya",
  artist: "Arijit Singh",
  cover: "https://pagalnew.com/coverimages/o-bedardeya-tu-jhoothi-main-makkaar-500-500.jpg",
  url: "https://pagalnew.com/128-downloads/38802",
},
{
  id: "rec12",
  title: "Maan Meri Jaan",
  artist: "King",
  cover:
    "https://pagalnew.com/coverimages/Maan-Meri-Jaan-Champagne-Talk-500-500.jpg",
  url: "https://pagalnew.com/128-downloads/35703",
},

];

const Recommended = () => {
  const {
    playSong,
    pauseSong,
    resumeSong,
    currentSong,
    isPlaying,
    registerSongs,
  } = useMusic();

  /* Register for global player & search */
  useEffect(() => {
    registerSongs(recommendedSongs);
  }, []);

  return (
    <section className="px-4 sm:px-6 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          Recommended <span className="text-neon">For You</span>
        </h2>
        <button className="text-sm text-gray-400 hover:text-white transition">
          See All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 ">
        {recommendedSongs.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.05 }}
              className={`
                relative bg-zinc-900 rounded-xl p-3 cursor-pointer group
                ${isCurrent ? "ring-2 ring-neon" : ""}
              `}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(song, recommendedSongs, index, "recommended");
                }
              }}
            >
              {/* Cover */}
              <div className="relative">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="rounded-lg w-full h-50 object-cover "
                />

                {/* Play / Pause */}
                {/* <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-3 right-3 bg-neon p-3 rounded-full
                  opacity-0 group-hover:opacity-100 transition"
                >
                  {isCurrent && isPlaying ? (
                    <Pause size={18} className="text-black" />
                  ) : (
                    <Play size={18} className="text-black" />
                  )}
                </motion.button> */}
              </div>

              {/* Info */}
              <div className="mt-3">
                <h3 className="text-white font-semibold truncate">
                  {song.title}
                </h3>
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

export default Recommended;
