import React from "react";
import MusicPlayer from "../music/MusicPlayer"; // Correct path

const Footer = ({ playlist, demoPlaylist }) => {
  return (
    <footer className="fixed bottom-11  lg:bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-zinc-800 z-50">
      <div className="px-6 py-3">
        <MusicPlayer playlist={playlist} demoPlaylist={demoPlaylist}/>
      </div>
    </footer>
  );
};

export default Footer;
