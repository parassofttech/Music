import React, { useState } from "react";
import PlaylistCard from "../components/music/PlaylistCard";
import Modal from "../components/common/Modal";
import Button from "../components/common/Button";
import { useMusic } from "../context/MusicContext";
import { useNavigate } from "react-router-dom";

const playlistsData = [
  {
    id: 1,
    title: "Top Hits 2025",
    cover: "https://www.d4beta.com/html5-music-player/assets/img/default.png",
    songs: [
      {
        id: 101,
        title: "Faded",
        artist: "Alan Walker",
        url: "/songs/song1.mp3",
        cover: "/images/song1.jpg",
      },
      {
        id: 102,
        title: "On My Way",
        artist: "Alan Walker",
        url: "/songs/song2.mp3",
        cover: "/images/song2.jpg",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "Chill Vibes",
  //   cover: "https://www.d4beta.com/html5-music-player/assets/img/default.png",
  //   songs: [
  //     {
  //       id: 201,
  //       title: "Believer",
  //       artist: "Imagine Dragons",
  //       url: "/songs/song3.mp3",
  //       cover: "/images/song3.jpg",
  //     },
  //   ],
  // },
];

const Playlist = () => {
  const navigate = useNavigate();
  const { playSong } = useMusic();

  const [playlists, setPlaylists] = useState(playlistsData);
  const [openModal, setOpenModal] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");

  const addPlaylist = () => {
    if (!newPlaylistName.trim()) return;

    setPlaylists((prev) => [
      {
        id: Date.now(),
        title: newPlaylistName,
        cover: "https://www.d4beta.com/html5-music-player/assets/img/default.png",
        songs: [],
      },
      ...prev,
    ]);

    setNewPlaylistName("");
    setOpenModal(false);
  };

  return (
    <div className="min-h-screen bg-darkbg from-zinc-900 to-black text-white pb-40 px-6 pt-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Your Playlists</h1>
        <Button onClick={() => setOpenModal(true)}>+ New Playlist</Button>
      </div>

      {/*  Playlist Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {playlists.map((pl) => (
          <PlaylistCard
            key={pl.id}
            playlist={pl}
            onClick={() => navigate(`/playlist/${pl.id}`)} // 🔥 MAIN FIX
            onPlay={() => pl.songs.length && playSong(pl.songs[0], pl.songs)}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Create New Playlist"
      >
        <input
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
          placeholder="Playlist name"
          className="w-full bg-zinc-800 p-3 rounded-lg text-white mb-4"
        />
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
          <Button onClick={addPlaylist}>Create</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Playlist;
