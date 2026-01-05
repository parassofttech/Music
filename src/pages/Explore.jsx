import React, { useState, useEffect } from "react";
import { useMusic } from "../context/MusicContext";
import MusicCard from "../components/music/MusicCard";

const trendingSongs = [
  {
    id: "t1",
    title: "Sahiba",
    artist: "Aditya Rikhari",
    cover: "https://koshalworld.com/siteuploads/thumb/sft59/29016_4.webp",
    url: "/songs/Sahiba.mp3",
  },
  {
    id: "t2",
    title: "Pal Pal",
    artist: "TalWinder",
    cover: "https://koshalworld.com/siteuploads/thumb/sft110/54639_4.webp",
    url: "/songs/Pal_Pal.mp3",
  },
  {
    id: "t3",
    title: "Haseen",
    artist: "alwiinder, NDS, Rippy Grewal",
    cover: "https://cover.djpunjab.is/57046/300x700/haseen-talwiinder.webp",
    url: "/songs/Haseen_Talwiinder.mp3",
  },
];

const newReleases = [
 {
    id: "n1",
    title: "Pasoori",
    artist: "Ali Sethi x Shae Gill",
    cover:
      "https://cover.djpunjab.is/51862/300x700/pasoori-ali-sethi.webp",
    url: "https://pagalnew.com/128-downloads/23547",
    date: "2024-12-20",
  },
  {
    id: "n2",
    title: "Water",
    artist: "Diljit Dosanjh",
    cover:
      "https://cover.djpunjab.is/56998/300x700/water-diljit-dosanjh.webp",
    url: "https://s320.djpunjab.is/data/48/56998/306656/Water%20-%20Diljit%20Dosanjh.mp3",
    date: "2024-12-20",
  },
];

const Explore = () => {
  const { playSong, currentSong, isPlaying, registerSongs } = useMusic();
  const [trending] = useState(trendingSongs);
  const [releases] = useState(newReleases);

  //  Register all songs globally for player & search
  useEffect(() => {
    registerSongs([...trending, ...releases]);
  }, []);

  const handlePlay = (song, sectionSongs) => {
    const isCurrent = currentSong?.url === song.url;
    if (isCurrent && isPlaying) return; // Already playing
    playSong(song, sectionSongs);
  };

  return (
    <div className="min-h-screen  bg-darkbg from-zinc-900 to-black text-white pb-32 px-4 sm:px-8 pt-6">
      <h1 className="text-3xl font-bold mb-8">Explore Music</h1>

      {/* Trending Songs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {trending.map((song) => (
            <MusicCard
              key={song.id}
              song={song}
              isCurrent={currentSong?.url === song.url}
              isPlaying={isPlaying}
              onPlay={() => handlePlay(song, trending)}
            />
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">New Releases</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {releases.map((song) => (
            <MusicCard
              key={song.id}
              song={song}
              isCurrent={currentSong?.url === song.url}
              isPlaying={isPlaying}
              onPlay={() => handlePlay(song, releases)}
            />
          ))}
        </div>
      </section>
      <div className="h-20">

      </div>
    </div>
  );
};

export default Explore;
