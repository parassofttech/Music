
import React from "react";
import { Play } from "lucide-react";
import { useMusic } from "../../context/MusicContext";

const MusicCard = ({ song }) => {
  const { playSong } = useMusic();

  return (
    <div
      onClick={() => playSong(song)}
      className="bg-zinc-900 rounded-xl p-3 lg:h-100 cursor-pointer hover:scale-105 transition"
    >
      <img
        src={song.cover}
        alt={song.title}
        className="rounded-lg mb-3"
      />

      <h3 className="font-semibold">{song.title}</h3>
      <p className="text-sm text-gray-400">{song.artist}</p>

      <div className="flex justify-end mt-2">
        <Play className="text-neon" />
      </div>
    </div>
  );
};

export default MusicCard;

