

import React, { useEffect, useState } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { motion } from "framer-motion";
import { useMusic } from "../../context/MusicContext";

const MusicPlayer = () => {
  const {
    currentSong,
    isPlaying,
    pauseSong,
    resumeSong,
    nextSong,
    prevSong,
    audioRef,
  } = useMusic();

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const timeUpdate = () => setCurrentTime(audio.currentTime);
    const meta = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", timeUpdate);
    audio.addEventListener("loadedmetadata", meta);

    return () => {
      audio.removeEventListener("timeupdate", timeUpdate);
      audio.removeEventListener("loadedmetadata", meta);
    };
  }, [audioRef]);

  useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  const handleEnded = () => {
    nextSong(); // 🔥 auto play next from SAME section
  };

  audio.addEventListener("ended", handleEnded);

  return () => {
    audio.removeEventListener("ended", handleEnded);
  };
}, [audioRef, nextSong]);




    const formatTime = (time) => {
    if (!time) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${min}:${sec}`;
  };

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 text-white px-6 py-4 flex items-center justify-between gap-6">

      {/* Song Info */}
      <div className="flex items-center gap-4 w-[30%]">
        <img
          src={currentSong.cover}
          className="w-14 h-14 rounded-lg"
        />
        <div>
          <h4 className="font-semibold">{currentSong.title}</h4>
          <p className="text-sm text-gray-400">{currentSong.artist}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center w-[40%]">
        <div className="flex items-center gap-6 mb-2">
          <button onClick={prevSong}><SkipBack /></button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-primary p-3 rounded-full text-black"
            onClick={isPlaying ? pauseSong : resumeSong}
          >
            {isPlaying ? <Pause /> : <Play />}
          </motion.button>

          <button onClick={nextSong}><SkipForward /></button>
        </div>

        {/* Progress */}

        <div className="flex items-center gap-2 w-full">          <span className="text-xs">{formatTime(currentTime)}</span>          <input type="range" min="0"
          max={duration || 0}
          value={currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }} className="w-full bg-neon"
        />
          <span className="text-xs">{formatTime(duration)}</span>
        </div>


        


      </div>
    </div>
  );
};

export default MusicPlayer;



