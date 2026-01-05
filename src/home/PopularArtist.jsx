import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const artists = [
  {
    id: 1,
    name: "Arijit Singh",
    artists: "Artist",
    image:
      "https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1739172212.jpg",
    verified: true,
  },
  {
    id: 2,
    name: "Neha Kakkar",
    artists: "Artist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizAhtBqCZJJ0-elqIA0JVwRLzfIEn_y_2ZQ&s",
    verified: true,
  },
  {
    id: 3,
    name: "Sonu Nigam",
    artists: "Artist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchFnhi65GtUKOA88mcHW8CaU7UW3bB0sLrQ&s",
    verified: true,
  },
  {
    id: 4,
    name: "Shreya Ghoshal",
    artists: "Artist",
    image:
      "https://a10.gaanacdn.com/gn_img/artists/10q3Z1K52r/10q3Z1K52r/size_m_1717411303.jpg",
    verified: true,
  },
  {
    id: 5,
    name: "Jubin Nautiyal",
    artists: "Artist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA09o3siO3FXUmqUTmt683ecM5HE58fz5TEA&s",
    verified: true,
  },
  {
    id: 6,
    name: "Lata Mangeshkar",
    artists: "Artist",
    image:
      "https://a10.gaanacdn.com/gn_img/artists/ZaP37OR3Dy/ZaP37lBWDy/size_m_1716892417.jpg",
    verified: true,
  },
   {
    id: 7,
    name: "Kishore Kumar ",
    artists: "Artist",
    image:
      "https://s.saregama.tech/image/c/m/1/68/1f/3588_1624534522.jpg",
    verified: true,
  },
  {
    id: 8,
    name: "Guru Randhawa",
    artists: "Artist",
    image:
      "https://in.bmscdn.com/iedb/artist/images/website/poster/large/guru-randhawa-1065986-22-09-2017-12-29-56.jpg",
    verified: true,
  },
  {
    id: 9,
    name: "Jass Manak",
    artists: "Artist",
    image:
      "https://i1.sndcdn.com/artworks-000384676971-xnbywk-t500x500.jpg",
    verified: true,
  },
 
  {
    id: 10,
    name: "Honey Singh",
    artists: "Artist",
    image:
      "https://i.scdn.co/image/ab6761610000e5ebbc7e4fffd515b47ff1ebbc1f",
    verified: true,
  },
];

const PopularArtist = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = 300;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 mt-10 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          Popular <span className="text-neon">Artists</span>
        </h2>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
      >
        {artists.map((artist) => (
          <motion.div
            key={artist.id}
            whileHover={{ scale: 1.05 }}
            
            onClick={() => navigate(`/artistdetail/${artist.id}`)}
            className="min-w-[180px] bg-zinc-900/70 rounded-2xl p-4 cursor-pointer group"
          >
            {/* Image */}
            <div className="relative flex justify-center">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-36 h-36 rounded-full object-cover"
              />

              {/* Play Button */}
              {/* <motion.button
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-2 right-2 bg-primary text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <Play size={18} />
              </motion.button> */}
            </div>

            {/* Info */}
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-white font-semibold truncate">
                  {artist.name}
                </h3>
                {artist.verified && (
                  <CheckCircle size={16} className="text-blue-500" />
                )}
              </div>
              <p className="text-sm text-gray-400">
                {artist.artists} 
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularArtist;
