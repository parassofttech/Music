import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { useMusic } from "./../context/MusicContext";
import { useParams } from "react-router-dom";

/* 🎵 Mood Data (API ready) */
const moods = [
  {
    id: "chill",
    mood: "Chill",
    color: "from-purple-700 to-indigo-900",
    songs: [
      {
        id: "c1",
        title: "Iktara",
        artist: "Pritam",
        cover:
          "https://pagalnew.com/coverimages/Kabira-Yeh-Jawaani-Hai-Deewani-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/6102",
      },
      {
        id: "c2",
        title: "Hawayein",
        artist: "Pritam, Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/Hawayein-Jab-Harry-Met-Sejal-(Original-Motion-Picture-Soundtrack)-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/3573",
      },
    ],
  },
  {
    id: "party",
    mood: "Party",
    color: "from-pink-600 to-red-700",
    songs: [
      {
        id: "p1",
        title: "Jhoome Jo Pathaan",
        artist: "Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/Jhoome-Jo-Pathaan-Vishal-Shekhar-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/37328",
      },
      {
        id: "p2",
        title: "Brown Rang",
        artist: "Honey Singh",
        cover:
          "https://pagalnew.com/coverimages/Brown-Rang-International-Villager-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/24797",
      },
      {
        id: "p3",
        title: "Party All Night",
        artist: "Honey Singh",
        cover:
          "https://pagalnew.com/coverimages/Party-All-Night-Boss-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/6327",
      },
      {
        id: "p4",
        title: "Lahore",
        artist: "Guru Randhawa",
        cover:
          "https://pagalnew.com/coverimages/Lahore-Guru-Randhawa-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/4170",
      },
      {
        id: "p5",
        title: "High Rated Gabru",
        artist: "Guru Randhawa",
        cover:
          "https://pagalnew.com/coverimages/High-Rated-Gabru-Guru-Randhawa-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/4173",
      },
    ],
  },
  {
    id: "romantic",
    mood: "Romantic",
    color: "from-rose-600 to-red-800",
    songs: [
      {
        id: "r1",
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
       cover:
          "https://hindi2.djpunjab.app/cover/0uI8We9PdKDYCN-x1ym8qg==/arijit-romantic-hits-cover-image.webp",
        url: "https://hindi2.djpunjab.app/load/AA7dmwuC-r2yaTlk8GORew==/Tum%20Hi%20Ho%20(From%20Aashiqui%202).mp3",
      },
      {
        id: "r2",
        title: "Raabta",
        artist: "Shreya Ghoshal",
        cover:
          "https://koshalworld.com/siteuploads/thumb/c/1091_4.webp",
        url: "https://koshalworld.com/files/download/id/53059",
      },
      {
        id: "r3",
        title: "Agar Tum Saath Ho",
        artist: "Arijit Singh",
        cover:
          "https://koshalworld.com/siteuploads/thumb/c/404_4.webp",
        url: "https://koshalworld.com/files/download/id/12375",
      },
      {
        id: "r4",
        title: "Khuda Jaane",
        artist: "Vishal-Shekhar, KK",
        cover:
          "https://pagalnew.com/coverimages/Khuda-Jaane-Bachna-Ae-Haseeno-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/8743",
      },
      {
        id: "r5",
        title: "Chaleya",
        artist: "Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/chaleya-jawan-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/43094",
      },
      {
        id: "r6",
        title: "O Maahi",
        artist: "Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/o-maahi-dunki-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/44800",
      },
      {
        id: "r7",
        title: "Ae Dil H Mushkil",
        artist: "Arijit Singh",
        cover:
          "https://c.saavncdn.com/257/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
        url: "https://koshalworld.com/files/download/id/16435",
      },
      {
        id: "r8",
        title: "Thodi Jagah",
        artist: "Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/Thodi-Jagah-Marjaavaan-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/15848",
      },
      {
        id: "r9",
        title: "Dil Sambhal ja Zara",
        artist: "Arijit Singh",
        cover:
          "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.jpg",
        url: "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.mp3",
      },
      {
        id: "r10",
        title: "Tu Hi Hai Aashiqui",
        artist: "Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/Tu-Hi-Hai-Aashiqui-Duet-Dishkiyaoon-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/5467",
      },
      {
        id: "r11",
        title: "Suraj Hua Maddham",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/suraj-hua-maddham-k3g-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/12342",
      },
    ],
  },
  {
    id: "bhakti",
    mood: "bhakti",
    color: "from-purple-700 to-indigo-900",
    songs: [
      {
        id: "b1",
        title: "Ram Siya Ram",
        artist: "Sachet Tandon",
        cover: "https://c.saavncdn.com/916/Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg",
        url: "/songs/Ram_Siya_Ram.mp3",
      },
      {
        id: "b2",
        title: "Hanuman Chalisha",
    artist: "Anup Jalota",
    cover: "https://c.saavncdn.com/763/Hanuman-Chalisa-Hindi-2020-20201110184901-150x150.jpg",
    url: "/songs/hanuman_chalisa.mp3",
      },
      {
        id: "b3",
        title: "Ram Aayenge",
        artist: "Vishal Mishra",
        cover: "https://c.saavncdn.com/336/Ram-Aayenge-Hindi-2023-20231108181532-500x500.jpg",
        url: "/songs/Ram_Aayenge.mp3",
      },
      {
        id: "b4",
        title: "Teen Baan Ke Dhari ",
        artist: "Chotu Sing Rawat",
        cover: "https://pendujatt.com.se/uploads/album/teen-baan-ke-dhari-teeno-ban.webp",
        url: "/songs/Teen_Baan_Ke_Dhari_Teeno_Ban.mp3",
      },
      {
        id: "b5",
        title: "Meri Gadi Mera Bangla Sab Tero",
        artist: "Gokul Sharma",
        cover: "https://pendujatt.com.se/uploads/album/meri-gadi-mera-bangla-sab-tero.webp",
        url: "/songs/Meri_Gadi_Mera_Bangla_Sab_Tero_Sanwariya_Seth.mp3",
      },
      {
        id: "b6",
        title: "Radhe Radhe Barsane",
        artist: "Bihari Ji",
        cover: "https://mr-jat.in/siteuploads/generaltheme/thumb/files/sft12/5966/5966-2.webp",
        url: "/songs/Radhe_Radhe_Barsane_Wali_Radhe.mp3",
      },
      {
        id: "b7",
        title: "Narayan Mil Jayega",
        artist: "Jubin Nautiyal",
        cover: "https://pendujatt.com.se/uploads/album/narayan-mil-jayega-jubin-nautiyal.webp",
        url: "/songs/Narayan_Mil_Jayega.mp3",
      },
      {
        id: "b8",
        title: "Parvati Boli Shankar Se",
        artist: "Hansraj Raghuwanshi",
        cover: "https://pagalnew.com/coverimages/Parvati-Boli-Shankar-Se-Hansraj-Raghuwanshi-500-500.jpg",
        url: "/songs/Parvati_Boli_Shankar_Se.mp3",
      },
      {
        id: "b9",
        title: "Keejo Kesari Ke Laal",
        artist: "Lakhbir Singh Lakha",
        cover: "https://mr-jat.in/siteuploads/generaltheme/thumb/files/sft12/5876/5876-2.webp",
        url: "/songs/Keejo_Kesari_Ke_Laal.mp3",
      },
      {
        id: "b10",
        title: "Radha Gori Gori",
        artist: "Indresh Upadhyay",
        cover: "https://pagalourld.in/uploads/thumbs/thumb-4/1734_3.jpg",
        url: "/songs/Radha_Gori_Gori.mp3",
      },
    ],
  },
  
];

const MoodBasedDetail = () => {
  const { id } = useParams();
  const { playSong, currentSong, registerSongs } = useMusic();

  const mood = moods.find((m) => m.id === id);

  
  useEffect(() => {
    if (mood) {
      registerSongs(mood.songs);
    }
  }, [mood]);

  if (!mood)
    return (
      <p className="text-white px-6 mt-20">
        Mood not found!
      </p>
    );

  return (
    <section
      className={`min-h-screen px-6 pt-24 pb-32 bg-gradient-to-b ${mood.color}`}
    >
      
      <ArrowLeft className="text-white"
      onClick={()=>navigate("/")}/>
      {/* Header */}
      <h2 className="text-3xl font-bold text-white mb-8">
        {mood.mood}{" "}
        <span className="text-neon">Vibes</span>
      </h2>

      {/* Songs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {mood.songs.map((song, index) => (
          <motion.div
            key={song.id}
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              playSong(song, mood.songs, index, "mood-based")
            }
            className={`
              relative rounded-xl overflow-hidden cursor-pointer group
              bg-zinc-900/70
              ${
                currentSong?.url === song.url
                  ? "ring-2 ring-neon"
                  : ""
              }
            `}
          >
            {/* Cover */}
            <img
              src={song.cover}
              alt={song.title}
              className="w-full h-40 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Play Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-3 right-3 bg-neon text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <Play size={16} />
            </motion.button>

            {/* Info */}
            <div className="absolute bottom-3 left-3">
              <p className="text-white font-semibold text-sm truncate">
                {song.title}
              </p>
              <p className="text-gray-300 text-xs truncate">
                {song.artist}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MoodBasedDetail;
