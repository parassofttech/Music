import { createContext, useContext, useRef, useState } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const audioRef = useRef(new Audio());

   const [allSongs, setAllSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🔥 NEW
  const [activePlaylist, setActivePlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("");


  const registerSongs = (songs = []) => {
    setAllSongs((prev) => {
      const merged = [...prev, ...songs];
      return Array.from(new Map(merged.map(s => [s.url, s])).values());
    });
  };

  const playSong = (song, playlist = [], section = "") => {
    if (currentSong?.url !== song.url) {
      audioRef.current.src = song.url;
    }

    setCurrentSong(song);
    setActivePlaylist(playlist);
    setActiveSection(section);

    const index = playlist.findIndex((s) => s.url === song.url);
    setCurrentIndex(index >= 0 ? index : 0);

    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const resumeSong = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const nextSong = () => {
    if (!activePlaylist.length) return;

    const nextIndex = (currentIndex + 1) % activePlaylist.length;
    const next = activePlaylist[nextIndex];

    playSong(next, activePlaylist, activeSection);
  };

  const prevSong = () => {
    if (!activePlaylist.length) return;

    const prevIndex =
      (currentIndex - 1 + activePlaylist.length) %
      activePlaylist.length;

    const prev = activePlaylist[prevIndex];
    playSong(prev, activePlaylist, activeSection);
  };

  return (
    <MusicContext.Provider
      value={{
        audioRef,
        currentSong,
        isPlaying,
        allSongs,
        registerSongs,
        playSong,
        pauseSong,
        resumeSong,
        nextSong,
        prevSong,
        activeSection,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
