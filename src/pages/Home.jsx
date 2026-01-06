// import React, { useState } from "react";
// import MusicPlayer from "../components/music/MusicPlayer";
// import Button from "../components/common/Button";
// import MusicCard from "../components/music/MusicCard";
// import Album from "./Album";

// const demoPlaylist = [
//   {
//     id: 1,
//     title: "Faded",
//     artist: "Alan Walker",
//     cover: "/images/song1.jpg",
//     url: "/songs/song1.mp3",
//   },
//   {
//     id: 2,
//     title: "On My Way",
//     artist: "Alan Walker",
//     cover: "/images/song2.jpg",
//     url: "/songs/song2.mp3",
//   },
//   {
//     id: 3,
//     title: "Believer",
//     artist: "Imagine Dragons",
//     cover: "/images/song3.jpg",
//     url: "/songs/song3.mp3",
//   },
// ];

// const Home = () => {
//   const [playlist] = useState(demoPlaylist);




//   function handleClick(){
//     console.log("song play"+ data.title)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white pb-32">
      
//       {/* 🎧 Hero Section */}
//       <section className="px-8 py-12">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Feel the <span className="text-green-500">Music</span>
//         </h1>
//         <p className="text-gray-400 max-w-xl mb-6">
//           Stream your favorite songs, create playlists and enjoy
//           unlimited music anytime.
//         </p>

//         <Button size="lg">Explore Music</Button>
//       </section>

//       {/* 🔥 Trending Songs */}
//       <section className="px-8 mt-10">
//         <h2 className="text-2xl font-semibold mb-6">
//           Trending Now
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
//          onClick={handleClick}>
//           {playlist.map((song) => (
//             <MusicCard key={song.id} song={song}
            
//             onPlay={(selectedSong) => {
//     console.log("Play:", selectedSong.title);
//   }}
//             />
//           ))}
//         </div>
//       </section>
//       <Album playlist={playlist}/>

//       {/* 🎵 Music Player */}
//       <MusicPlayer playlist={playlist} />
//     </div>
//   );
// };

// export default Home;



import React from "react";

// import PopularArtist from "../Home/PopularArtist";
import TrendingNow from "../home/TrendingNow";
import RecentlyPlayed from "../home/RecentlyPlayed";
import NewReleases from "../home/NewReleases";
import MoodBased from "../home/MoodBased";
import GenreSection from "../home/GenreSection";
import Recommended from "../home/Recommended";
import FooterLast from "../home/FooterLast";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-darkbg text-white pb-32 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">
          Feel the song and listin to the music and more <span className="text-neon">Music</span>
        </h1>
        <p className="text-gray-400 mb-4">
          Stream your favorite songs anytime.
        </p>
      </section>

      {/* SECTIONS */}
      <TrendingNow />
      {/* <PopularArtist /> */}
      <NewReleases />
      <Recommended/>
      <RecentlyPlayed />
       
      <MoodBased />
      <GenreSection />
      
     <FooterLast/>
     

     <div className="h-15">

     </div>


    </div>
  );
};

export default Home;
