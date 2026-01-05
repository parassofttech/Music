import React, { useState } from "react";
import { Play } from "lucide-react";
import MusicPlayer from "../components/music/MusicPlayer";

const Artist = () => {
  // Demo Artist Data
  const artist = {
    name: "Alan Walker",
    image: "/images/artist1.jpg",
    followers: "12,345,678",
    popularSongs: [
      {
        title: "Faded",
        artist: "Alan Walker",
        url: "/songs/song1.mp3",
        duration: "3:32",
        cover: "/images/song1.jpg",
      },
      {
        title: "On My Way",
        artist: "Alan Walker",
        url: "/songs/song2.mp3",
        duration: "3:14",
        cover: "/images/song2.jpg",
      },
      {
        title: "Alone",
        artist: "Alan Walker",
        url: "/songs/song3.mp3",
        duration: "2:58",
        cover: "/images/song3.jpg",
      },
    ],
    albums: [
      {
        id: 1,
        title: "Different World",
        year: 2018,
        cover: "/images/album1.jpg",
      },
      {
        id: 2,
        title: "Walkerverse",
        year: 2021,
        cover: "/images/album2.jpg",
      },
    ],
  };

  const [currentPlaylist, setCurrentPlaylist] = useState(null);

  const playAllSongs = () => {
    setCurrentPlaylist(artist.popularSongs);
  };

  const playFromSong = (index) => {
    setCurrentPlaylist(artist.popularSongs.slice(index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white pb-40">
      {/* Artist Header */}
      <div className="relative h-80">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

        <div className="absolute bottom-8 left-8">
          <p className="text-sm uppercase text-gray-400">Artist</p>
          <h1 className="text-5xl font-extrabold">{artist.name}</h1>
          <p className="text-gray-400 mt-2">
            {artist.followers} followers
          </p>

          <button
            onClick={playAllSongs}
            className="mt-5 flex items-center gap-3 bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            <Play /> Play
          </button>
        </div>
      </div>

      {/* Popular Songs */}
      <div className="px-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Popular Songs
        </h2>

        {artist.popularSongs.map((song, index) => (
          <div
            key={index}
            onClick={() => playFromSong(index)}
            className="flex items-center justify-between py-3 px-3 rounded-lg cursor-pointer hover:bg-zinc-800 transition"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-6">
                {index + 1}
              </span>
              <img
                src={song.cover}
                alt={song.title}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <p className="font-medium">{song.title}</p>
                <p className="text-sm text-gray-400">
                  {song.artist}
                </p>
              </div>
            </div>

            <span className="text-gray-400 text-sm">
              {song.duration}
            </span>
          </div>
        ))}
      </div>

      {/* Albums */}
      <div className="px-8 mt-12">
        <h2 className="text-2xl font-bold mb-4">Albums</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {artist.albums.map((album) => (
            <div
              key={album.id}
              className="bg-zinc-900 p-4 rounded-xl hover:bg-zinc-800 transition cursor-pointer"
            >
              <img
                src={album.cover}
                alt={album.title}
                className="rounded-lg mb-3"
              />
              <h4 className="font-semibold truncate">
                {album.title}
              </h4>
              <p className="text-sm text-gray-400">
                {album.year}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Music Player */}
      {currentPlaylist && (
        <MusicPlayer playlist={currentPlaylist} />
      )}
    </div>
  );
};

export default Artist;
