import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";

const artistData = {
  1: {
    name: "Arijit Singh",
    color: "bg-pink-500/70",
    image:
      "https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1739172212.jpg",
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
      {
        id: "a3",
        title: "Ae Dil H Mushkil",
        artist: "Arijit Singh",
        cover:
          "https://c.saavncdn.com/257/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
        url: "https://koshalworld.com/files/download/id/16435",
      },
      {
        id: "a4",
        title: "Thodi Jagah",
        artist: "Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/Thodi-Jagah-Marjaavaan-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/15848",
      },
      {
        id: "a5",
        title: "Dil Sambhal ja Zara",
        artist: "Arijit Singh",
        cover:
          "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.jpg",
        url: "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.mp3",
      },
      {
        id: "a6",
        title: "Tu Hi Hai Aashiqui",
        artist: "Arijit Singh",
        cover:
          "https://pagalnew.com/coverimages/Tu-Hi-Hai-Aashiqui-Duet-Dishkiyaoon-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/5467",
      },
    ],
  },

  2: {
    name: "Neha Kakkar",
    color: "bg-red-500/70",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizAhtBqCZJJ0-elqIA0JVwRLzfIEn_y_2ZQ&s",
    songs: [
      {
        id: "n1",
        title: "Dilbar",
        artist: "Neha Kakkar",
        cover:
          "https://pagalnew.com/coverimages/Dilbar-Satyameva-Jayate-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/2762",
      },
      {
        id: "n2",
        title: "Candy Shop",
        artist: "Neha Kakkar",
        cover:
          "https://pagalnew.com/coverimages/Candy-Shop-Tony-Kakkar-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/52773",
      },
      {
        id: "n3",
        title: "Coca Cola 2",
        artist: "Neha Kakkar",
        cover:
          "https://koshalworld.com/siteuploads/thumb/sft130/64903_4.webp",
        url: "https://koshalworld.com/files/download/id/64903",
      },
      {
        id: "n4",
        title: "Tu Pyaasa Hai",
        artist: "Neha Kakkar",
        cover:
          "https://pagalnew.com/coverimages/Tu-Pyaasa-Hai-Neha-Kakkar-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/52243",
      },
      {
        id: "n5",
        title: "Aankh Marey",
        artist: "Neha Kakkar",
        cover:
          "https://pagalnew.com/coverimages/Aankh-Marey-Simmba-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/2800",
      },
    ],
  },
  3: {
    name: "Sonu Nigam",
    color: "bg-pink-500/70",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchFnhi65GtUKOA88mcHW8CaU7UW3bB0sLrQ&s",
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
      {
        id: "a3",
        title: "Mere Haath Mein",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/Mere-Haath-Mein-Fanaa-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/9651",
      },
      {
        id: "a4",
        title: "Main Agar Kahoon",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/Main-Agar-Kahoon-Om-Shanti-Om-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/9432",
      },
      {
        id: "a5",
        title: "Dil Dooba",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/Dil-Dooba-Khakee-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/10642",
      },
      {
        id: "a6",
        title: "Tu Hi Hai Aashiqui",
        artist: "Sonu Nigam",
        cover:
          "https://pagalnew.com/coverimages/bole-chudiyan-k3g-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/12335",
      },
    ],
  },
  4: {
    name: "Shreya Ghoshal",
    color: "bg-pink-500/70",
    image:
      "https://a10.gaanacdn.com/gn_img/artists/10q3Z1K52r/10q3Z1K52r/size_m_1717411303.jpg",
    songs: [
       {
        id: "a1",
        title: "Dola Re Dola",
        artist: "Shreya Ghoshal",
        cover:
          "https://pagalnew.com/coverimages/dola-re-dola-devdas-devdas-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/11740",
      },
      {
        id: "a2",
        title: "Tum Hi Ho",
        artist: "Shreya Ghoshal",
        cover:
          "https://pagalnew.com/coverimages/agar-tum-mil-jao-male-zeher-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/23072",
      },
      // {
      //   id: "a3",
      //   title: "Ae Dil H Mushkil",
      //   artist: "Shreya Ghoshal",
      //   cover:
      //     "https://c.saavncdn.com/257/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
      //   url: "https://koshalworld.com/files/download/id/16435",
      // },
      // {
      //   id: "a4",
      //   title: "Thodi Jagah",
      //   artist: "Shreya Ghoshal",
      //   cover:
      //     "https://pagalnew.com/coverimages/Thodi-Jagah-Marjaavaan-500-500.jpg",
      //   url: "https://pagalnew.com/128-downloads/15848",
      // },
      // {
      //   id: "a5",
      //   title: "Dil Sambhal ja Zara",
      //   artist: "Shreya Ghoshal",
      //   cover:
      //     "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.jpg",
      //   url: "https://pagallworlds.com/wp-content/uploads/2024/12/Dil-Sambhal-Ja-Zara.mp3",
      // },
      // {
      //   id: "a6",
      //   title: "Tu Hi Hai Aashiqui",
      //   artist: "Arijit Singh",
      //   cover:
      //     "https://pagalnew.com/coverimages/Tu-Hi-Hai-Aashiqui-Duet-Dishkiyaoon-500-500.jpg",
      //   url: "https://pagalnew.com/128-downloads/5467",
      // },
    ],
  },
  5: {
    name: "Jubin Nautiyal",
    color: "bg-pink-500/70",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA09o3siO3FXUmqUTmt683ecM5HE58fz5TEA&s",
    songs: [
       {
        id: "a1",
        title: "Lut Gaye",
        artist: "Jubin Nautiyal",
        cover:
          "https://pagalnew.com/coverimages/lut-gaye-jubin-nautiyal-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/3796",
      },
      {
        id: "a2",
        title: "Kaabil Hoon",
        artist: "Jubin Nautiyal",
        cover:
          "https://pagalnew.com/coverimages/Kaabil-Hoon-Jubin-Nautiyal-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/3339",
      },
      
    ],
  },
  6: {
    name: "Lata Mangeshkar",
    color: "bg-pink-500/70",
    image:
      "https://a10.gaanacdn.com/gn_img/artists/ZaP37OR3Dy/ZaP37lBWDy/size_m_1716892417.jpg",
    songs: [
       {
        id: "a1",
        title: "Ajib Dastan Hai Yeh",
        artist: "Lata Mangeshkar",
        cover:
          "https://i1.sndcdn.com/artworks-000161795861-qr6543-t1080x1080.jpg",
        url: "https://koshalworld.com/files/download/id/15354",
      },
      {
        id: "a2",
        title: "Piya Tose Naina Lage Re",
        artist: "Lata Mangeshkar",
        cover:
          "https://hindi2.djpunjab.app/cover/0uI8We9PdKDYCN-x1ym8qg==/arijit-romantic-hits-cover-image.webp",
        url: "https://pagalnew.com/128-downloads/1497",
      },
      
    ],
  },
  7: {
    name: "Kishore Kumar",
    color: "bg-pink-500/70",
    image:
      "https://s.saregama.tech/image/c/m/1/68/1f/3588_1624534522.jpg",
    songs: [
       {
        id: "a1",
        title: "O Mere Dil Ke Chain",
        artist: "Kishore Kumar",
        cover:
          "https://pagalnew.com/coverimages/o-mere-dil-ke-chain-mere-jeevan-saathi-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/34708",
      },
      {
        id: "a2",
        title: "Mere Sapnon Ki Rani",
        artist: "Kishore Kumar",
        cover:
          "https://pagalnew.com/coverimages/Mere-Sapnon-Ki-Rani-Aradhana-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/2175",
      },
      
      
    ],
  },
  8: {
    name: "Guru Randhawa",
    color: "bg-pink-500/70",
    image:
      "https://in.bmscdn.com/iedb/artist/images/website/poster/large/guru-randhawa-1065986-22-09-2017-12-29-56.jpg",
    songs: [
       {
        id: "a1",
        title: "Lahore",
        artist: "Guru Randhawa",
        cover:
          "https://pagalnew.com/coverimages/Lahore-Guru-Randhawa-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/4170",
      },
      {
        id: "a2",
        title: "High Rated Gabru",
        artist: "Guru Randhawa",
        cover:
          "https://pagalnew.com/coverimages/High-Rated-Gabru-Guru-Randhawa-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/4173",
      },
      
      
    ],
  },
  9: {
    name: "Jass Manak",
    color: "bg-pink-500/70",
    image:
      "https://i1.sndcdn.com/artworks-000384676971-xnbywk-t500x500.jpg",
    songs: [
       {
        id: "a1",
        title: "Lehanga",
        artist: "Jass Manak",
        cover:
          "https://cover.mr-jatt.im/thumb/485638/Lehanga-1.jpg",
        url: "https://cdnsongs.com/music/data/Single_Track/201907/Lehanga/128/Lehanga_1.mp3",
      },
      {
        id: "a2",
        title: "Prada",
        artist: "Jass Manak",
        cover:
          "https://pagalnew.com/coverimages/Prada-Jass-Manak-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/24808",
      },
      
      
    ],
  },
  10: {
    name: "Honey Singh",
    color: "bg-pink-500/70",
    image:
      "https://i.scdn.co/image/ab6761610000e5ebbc7e4fffd515b47ff1ebbc1f",
    songs: [
       {
        id: "a1",
        title: "Brown Rang",
        artist: "Honey Singh",
        cover:
          "https://pagalnew.com/coverimages/Brown-Rang-International-Villager-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/24797",
      },
      {
        id: "a2",
        title: "Party All Night",
        artist: "Honey Singh",
        cover:
          "https://pagalnew.com/coverimages/Party-All-Night-Boss-500-500.jpg",
        url: "https://pagalnew.com/128-downloads/6327",
      },
      
      
    ],
  },
};

const ArtistDetail = () => {
  const { id } = useParams();
  const { playSong, currentSong, registerSongs, } = useMusic();

  const navigate = useNavigate()
  const artist = artistData[id];

  
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
    <div 
    className={`text-white px-6 pb-24
              relative cursor-pointer  overflow-hidden
              ${artist.color}
              group shadow-lg
            `}
    >

      <ArrowLeft className="mt-4"
      onClick={()=>navigate("/")}/>
      {/* Artist Header */}
      <div className="flex items-center gap-6 mt-10">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-40 h-40 rounded-full object-cover shadow-xl"
        />

        <div>
          <p className="text-sm text-white">Artist</p>
          <h1 className="text-4xl font-bold">
            {artist.name}
          </h1>
          <p className="text-gray-200 mt-2">
            {artist.songs.length} Songs
          </p>
        </div>
      </div>

      {/* Songs List */}
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

      <div className="h-20"></div>
    </div>
  );
};

export default ArtistDetail;
