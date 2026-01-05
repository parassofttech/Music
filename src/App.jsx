import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Playlist from "./pages/Playlist";
import MusicPlayer from "./components/music/MusicPlayer";
import NavBarUnder from "./components/layout/NavBarUnder";
import Artist from "./pages/Artist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { MusicProvider } from "./context/MusicContext";

import MoodBasedDetail from "./home/MoodBasedDetail";
import GenreSectionDetail from "./home/GenreSectionDetail";
import PlaySongCard from "./components/music/PlaySongCard";
import Contact from "./components/common/Contact";
import PlaylistDetail from "./pages/PlaylistDetail";




function App() {
  
 const playlist = [
  {
    title: "Faded",
    artist: "Alan Walker",
    url: "/songs/song1.mp3",
    cover: "/images/song1.jpg",
  },
  {
    title: "On My Way",
    artist: "Alan Walker",
    url: "/songs/song2.mp3",
    cover: "/images/song2.jpg",
  },
  {
    title: "On My ",
    artist: "Alan Walker",
    url: "/songs/song3.mp3",
    cover: "/images/song2.jpg",
  },
];

const demoPlaylist = [
  {
    title: "Faded vgsyxg",
    artist: "Alan Walker",
    url: "/songs/song1.mp3",
    cover: "/images/song1.jpg",
  },
  {
    title: "On My Way",
    artist: "Alan Walker",
    url: "/songs/song2.mp3",
    cover: "/images/song2.jpg",
  },
  {
    title: "On My ",
    artist: "Alan Walker",
    url: "/songs/song3.mp3",
    cover: "/images/song2.jpg",
  },
];

  return (
    <MusicProvider>
    <Router>
      {/* 🌐 Top Navbar */}
       <Navbar />
       
       
       
      {/* 📄 Pages */}
      <Routes  >
        <Route path="/"  element={<Home />} demoPlaylist={demoPlaylist} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist/>} />
      <Route path="/profile" element={<Profile/>}/>
    
      <Route path="/artist/:id" element={<Artist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sidebar" element={<Sidebar/>} />
      {/* <Route path="/artistdetail/:id" element={<ArtistDetail />} /> */}
      <Route path="/mood/:id" element={<MoodBasedDetail />} />
      <Route path="/genre/:genreId" element={<GenreSectionDetail />} />
      <Route path="/playsong/:id" element={<PlaySongCard/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/playlist/:id" element={<PlaylistDetail />} />

        
      </Routes>
      {/* <MusicPlayer/> */}
      
      {/* <MusicPlayer playlist={playlist}/> */}
       <Footer playlist={playlist} demoPlaylist={demoPlaylist}/>
       <NavBarUnder/>
    </Router>
    
    </MusicProvider>
  );
}

export default App;
