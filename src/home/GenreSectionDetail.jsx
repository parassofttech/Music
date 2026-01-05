import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Pause, ArrowLeft } from "lucide-react";
import { useMusic } from "./../context/MusicContext";

/* 🔥 Dummy Genre Songs (API ready) */
const GENRE_SONGS = {
  pop: [
  {
    id: "p1",
    title: "Kesariya",
    artist: "Arijit Singh",
    cover:
      "https://pagalnew.com/coverimages/kesariya-brahmastra-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/30350",
  },
  {
    id: "p2",
    title: "Heeriye",
    artist: "Jasleen Royal",
    cover:
      "https://pagalnew.com/coverimages/heeriye-arijit-singh-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/44105",
  },
  {
    id: "p3",
    title: "Maan Meri Jaan",
    artist: "King",
    cover:
    "https://pagalnew.com/coverimages/Maan-Meri-Jaan-Champagne-Talk-500-500.jpg",
    url: "/songs/Maan_Meri_Jaan.mp3",
  },
  {
    id: "p4",
    title: "Raatan Lambiyan",
    artist: "Jubin Nautiyal",
    cover: "https://pagalnew.com/coverimages/raataan-lambiyan-shershaah-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/19028",
  },
  {
    id: "p5",
    title: "Sahiba",
    artist: "Aditya Rikhari",
    cover: "https://koshalworld.com/siteuploads/thumb/sft59/29016_4.webp",
    url: "/songs/Sahiba.mp3",
  },
],
 rock: [
  {
    id: "r1",
    title: "Saadda Haq",
    artist: "AR Rahman",
    cover: "https://pagalnew.com/coverimages/Saadda-Haq-Featuring-Orianthi-Panagaris-On-Guitars-Rockstar-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/7432",
  },
  {
    id: "r2",
    title: "Rock On!!",
    artist: "Farhan Akhtar",
    cover: "https://pagalnew.com/coverimages/rock-on-farhan-akhtar-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/28137",
  },
  {
    id: "r3",
    title: "Zinda",
    artist: "Siddharth Mahadevan",
    cover: "https://pagalnew.com/coverimages/Zinda-Bhaag-Milkha-Bhaag-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/6152",
  },
  {
    id: "r4",
    title: "Aarambh Hai Prachand",
    artist: "Piyush Mishra",
    cover: "https://pagalnew.com/coverimages/Aarambh-Gulaal-500-500.jpg",
    url: "https://pagalnew.com/128-downloads/8239",
  },
  {
    id: "r5",
    title: "Maaeri",
    artist: "Euphoria",
    cover: "https://pendujatt.com.se/uploads/album/phir-dhoom-euphoria.webp",
    url: "https://p320.djpunjab.is/data/48/3743/24025/Maaeri%20-%20Various.mp3",
  },
],

  jazz: [
    {
      id: "j1",
      title: "Aaiye Meherban",
      artist: "Asha Bhosle",
      cover: "https://pagalnew.com/coverimages/Aaiye-Meharban-Howrah-Bridge-500-500.jpg",
      url: "https://pagalnew.com/128-downloads/727",
    },
  ],
  classical: [
    {
      id: "c1",
      title: "Moonlight Sonata",
      artist: "Beethoven",
      cover: "https://images.squarespace-cdn.com/content/v1/6585e5c918bdf14fdd1fb158/9e12f82e-e931-49d6-8f18-5a3168e1fa4a/Moonlight%2C+Wood+Island+Light+%281894%29+Winslow+Homer+-+Website+Background.jpg?format=1000w",
      url: "https://static1.squarespace.com/static/6585e5c918bdf14fdd1fb158/t/6697efc3d30ce529a3fb72bc/1721233364771/Classicals.de-Beethoven-Moonlight-Sonata-1.-Movement-Sonata-Nr.-14%2C-Op.-27%2C-Nr.-2.mp3/original/Classicals.de-Beethoven-Moonlight-Sonata-1.-Movement-Sonata-Nr.-14%2C-Op.-27%2C-Nr.-2.mp3",
    },
  ],
};

const GenreSectionDetail = () => {
  const { genreId } = useParams();

  const {
    currentSong,
    isPlaying,
    playSong,
    pauseSong,
    resumeSong,
    registerSongs,
  } = useMusic();

  const songs = GENRE_SONGS[genreId] || [];

  /*  Register genre playlist for global player & search */
  useEffect(() => {
    if (songs.length) {
      registerSongs(songs);
    }
    window.scrollTo(0, 0);
  }, [genreId]);

  if (!songs.length) {
    return (
      <div className="text-white text-center mt-24">
        No songs found for this genre
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-darkbg text-white px-6 pt-24 pb-40">
      <ArrowLeft className="text-white"
      onClick={()=>navigate("/")}/>
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8 mt-4 capitalize">
        {genreId} <span className="text-neon">Hits</span>
      </h1>

      {/* Songs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {songs.map((song, index) => {
          const isCurrent = currentSong?.url === song.url;

          return (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.05 }}
              className={`
                relative bg-zinc-900/80 rounded-xl overflow-hidden cursor-pointer
                ${isCurrent ? "ring-2 ring-neon" : ""}
              `}
              onClick={() => {
                if (isCurrent) {
                  isPlaying ? pauseSong() : resumeSong();
                } else {
                  playSong(song, songs, index, "genre");
                }
              }}
            >
              {/* Cover */}
              <img
                src={song.cover}
                alt={song.title}
                className="w-full h-40 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                {isCurrent && isPlaying ? (
                  <Pause size={32} className="text-neon" />
                ) : (
                  <Play size={32} className="text-neon" />
                )}
              </div>

              {/* Info */}
              <div className="p-3">
                <h3 className="font-semibold truncate">
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
    </div>
  );
};

export default GenreSectionDetail;
