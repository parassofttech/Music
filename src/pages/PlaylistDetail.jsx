import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Play, Pause, Heart, Clock, Music } from "lucide-react";
import { motion } from "framer-motion";

import { useMusic } from "../context/MusicContext";

/* ✅ Dummy Playlist Data */
const playlists = [
  {
    id: 1,
    name: "Rock Legends",
    cover:
      "https://www.d4beta.com/html5-music-player/assets/img/default.png",
    description: "Best rock songs from Bollywood",
    songs: [
      {
        id: "a1",
        title: "Baatein Ye Kabhi Na",
        artist: "Arijit Singh",
        cover:
          "https://i1.sndcdn.com/artworks-000161795861-qr6543-t1080x1080.jpg",
        url: "https://koshalworld.com/files/download/id/8725",
      },
      {
        id: "a2",
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        cover:
          "https://hindi2.djpunjab.app/cover/0uI8We9PdKDYCN-x1ym8qg==/arijit-romantic-hits-cover-image.webp",
        url: "https://hindi2.djpunjab.app/load/AA7dmwuC-r2yaTlk8GORew==/Tum%20Hi%20Ho%20(From%20Aashiqui%202).mp3",
      },
    ],
  },
   {
    id: 2,
    name: "Rock Legends",
    cover:
      "https://c.saavncdn.com/734/Rockstar-Hindi-2011-500x500.jpg",
    description: "Best rock songs from Bollywood",
    songs: [
    {
        id: "a1",
        title: "Suraj Hua Maddham",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/suraj-hua-maddham-k3g-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/12342",
      },
      {
        id: "a2",
        title: "Kal Ho Naa Ho",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/Kal-Ho-Naa-Ho-Shankar-Ehsaan-Loy-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/11476",
      },
    ],
  },
];

const PlaylistDetail = () => {
  const { id } = useParams();
  const playlist = playlists.find(
    (p) => p.id === Number(id)
  );

  const [playingSong, setPlayingSong] = useState(null);
  const [likedSongs, setLikedSongs] = useState([]);

  if (!playlist) {
    return (
      <div className="text-white mt-20 text-center">
        Playlist not found
      </div>
    );
  }

  const togglePlay = (songId) => {
    setPlayingSong(
      playingSong === songId ? null : songId
    );
  };

  const toggleLike = (songId) => {
    setLikedSongs((prev) =>
      prev.includes(songId)
        ? prev.filter((id) => id !== songId)
        : [...prev, songId]
    );
  };



  const { playSong, currentSong, registerSongs, } = useMusic();

  const navigate = useNavigate()
  const artist = playlists[id];

  /* Register artist songs for search & global player */
  useEffect(() => {
    if (artist?.songs) {
      registerSongs(artist.songs);
    }
  }, [id]);

  if (!artist) {
    return (
      <div className="text-white p-6">
        Artist not found
      </div>
    );
  }








  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white px-6 py-10">
      {/* 🔹 Header */}
      <div className="flex flex-col md:flex-row gap-6 items-center mb-10">
        <img
          src={playlist.cover}
          alt="playlist"
          className="w-48 h-48 rounded-xl shadow-lg"
        />

        <div>
          <p className="uppercase text-sm text-gray-400">
            Playlist
          </p>
          <h1 className="text-4xl font-bold mt-2">
            {playlist.name}
          </h1>
          <p className="text-gray-400 mt-2">
            {playlist.description}
          </p>

          <button className="mt-4 flex items-center gap-2 bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            <Play size={18} />
            Play All
          </button>
        </div>
      </div>

      {/* 🔹 Song Header */}
      {/* <div className="grid grid-cols-12 px-4 py-2 text-gray-400 text-sm border-b border-zinc-800">
        <div className="col-span-1">#</div>
        <div className="col-span-6">Title</div>
        <div className="col-span-3">Artist</div>
        <div className="col-span-2 flex justify-end">
          <Clock size={16} />
        </div>
      </div> */}

      {/* 🔹 Songs */}
      <div className="mt-2">
        {playlist.songs.map((song, index) => (
          <div
            key={song.id}
            className="grid grid-cols-12 items-center px-4 py-3 rounded-lg hover:bg-zinc-800 transition group"
          >
            {/* Play */}
            {/* <div className="col-span-1">
              <button
                onClick={() => togglePlay(song.id)}
              >
                {playingSong === song.id ? (
                  <Pause size={18} />
                ) : (
                  <Play size={18} />
                )}
              </button>
            </div> */}

            {/* Title */}
            {/* <div className="col-span-6 flex items-center gap-3">
              <Music
                size={18}
                className="text-green-500"
              />
              <span>{song.title}</span>
            </div> */}

            {/* Artist */}
            {/* <div className="col-span-3 text-gray-400">
              {song.artist}
            </div> */}

            {/* Duration + Like */}
            {/* <div className="col-span-2 flex justify-end gap-4">
              <span className="text-sm">
                {song.duration}
              </span>
              <button
                onClick={() =>
                  toggleLike(song.id)
                }
                className={
                  likedSongs.includes(song.id)
                    ? "text-green-500"
                    : "text-gray-400"
                }
              >
                <Heart
                  size={18}
                  fill={
                    likedSongs.includes(song.id)
                      ? "currentColor"
                      : "none"
                  }
                />
              </button>
            </div> */}
          </div>
        ))}
      </div>




      <div className="mt-10 space-y-3">
        {artist.songs.map((song, index) => (
          <motion.div
            key={song.id}
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              playSong(song, artist.songs, index, "popular")
            }
            className={`
              flex items-center justify-between
              bg-zinc-900/70 p-4 rounded-xl cursor-pointer
              ${
                currentSong?.url === song.url
                  ? "ring-2 ring-neon"
                  : ""
              }
            `}
          >

            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-5">
                {index + 1}
              </span>

              <img
                src={song.cover}
                alt={song.title}
                className="w-12 h-12 rounded-md object-cover"
              />

              <div>
                <h4 className="font-semibold ">
                  {song.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {song.artist}
                </p>
              </div>
            </div>

            <Play className="text-neon" />
          </motion.div>
         

         

        ))}

            




      </div>
    </div>
  );
};

export default PlaylistDetail;
