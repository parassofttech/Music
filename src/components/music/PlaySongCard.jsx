import React from "react";
import { Play, Pause } from "lucide-react";
import { useMusic } from "../../context/MusicContext";

const PlaySongCard = () => {
  const {
    currentSong,
    isPlaying,
    pauseSong,
    resumeSong,
  } = useMusic();

  // 🔴 Agar koi song hi nahi chal raha
  if (!currentSong) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-400">
        No song playing
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* Cover Image */}
      <div className="flex justify-center mb-8">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-72 h-72 rounded-2xl shadow-xl"
        />
      </div>

      {/* Song Info */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">{currentSong.title}</h2>
        <p className="text-gray-400">{currentSong.artist}</p>
      </div>

      {/* Play / Pause */}
      <div className="flex justify-center">
        <button
          onClick={isPlaying ? pauseSong : resumeSong}
          className="bg-primary text-black p-5 rounded-full"
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} />}
        </button>
      </div>

    </div>
  );
};

export default PlaySongCard;
