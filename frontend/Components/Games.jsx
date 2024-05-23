import React, { useState, useEffect } from "react";
import { FaTwitter, FaFacebook, FaDiscord, FaTelegram, FaReddit, FaGlobe} from 'react-icons/fa';

const Games = () => {
  const [games, setGames] = useState([]);

  //========== truncate function for game.description
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }; // ========== end


  //============= fetch games from backend
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:1225/games");
        if (!response.ok) {
          throw new Error("Failed to fetch games.");
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []); // ============= Fetch end


  const GameCard = ({ game }) => (
// ------------------------------------------CONTAINER START ------------------------------------------------- 
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-auto lg:p-8 mb-4 
       border-2 border-gray-200"  style={{width: "95%"}}>

      <div className="flex">
        <img className="w-24 h-24 lg:w-40 lg:h-auto rounded-2xl m-4 lg:m-0 lg:rounded-md lg:mr-6
        " src={game.image} />
        <div className="ml-4 flex-1">
          <div class="title-and-view-button-container flex">
            <h2 class="text-sm w-48 mt-4 lg:mt-0 lg:text-lg font-semibold font cursor-pointer lg:w-60
            ">{game.title}</h2>
            <span class="hidden font-semibold lg:block lg:static lg:ml-20 text-sm text-blue-900 rounded-2xl px-4 cursor-pointer
            hover:bg-blue-50 active:bg-ble-100" style={{border: "1px solid blue", left:"11%"}}>
              View
            </span>
          </div>

         {/*================= Social links start */}
          <div className="flex items-center mt-2">

            <a href={game.website} className="mb-2 mr-3"><FaGlobe /></a>

            {game.socialLinks.map((link, index) => {
              let icon;
              if (link.includes("twitter.com")) {
                icon = <FaTwitter />;
              } else if (link.includes("facebook.com")) {
                icon = <FaFacebook />; 
              } else if (link.includes("discord.com")) {
                icon = <FaDiscord />
              } else if (link.includes("telegram.com") || link.includes("t.me")) {
                icon = <FaTelegram />
              } else if (link.includes("reddit.com")) {
                icon = <FaReddit />
              }

              return (
                <a key={index} href={link} className="mr-3 mb-2">
                  {icon}
                </a>  
              );
            })}
          </div> {/*================= Social links end */}

            {/* game developer */}
          <p className="text-sm text-blue-900 font-semibold">Developer: {game?.developer}</p>
          {/* game description */}
          <p className="mt-2 w-auto pr-3 text-xs md:text-sm lg:text-sm lg:w-2/4 h-20">{truncateText(game?.description, 160)}</p>
        </div>
      </div>

          {/* ================= Button for mobile and tablet */}
      <span class="lg:hidden font-semibold relative text-sm ml-6 py-1 -top-8 text-blue-900 rounded-2xl px-6 cursor-pointer
          hover:bg-blue-50 active:bg-blue-100" style={{border: "1px solid blue"}}>
            View
        </span>  {/*===================== Button end*/}

      {/* ===================== Scrollable box containing game data */}
      <div className="overflow-x-auto w-auto pt-6 pl-6 rounded-t-none rounded-b-md lg:rounded-md 
      shadow-md bg-gray-200">
        <div className="lg:flex lg:flex-wrap lg:justify-center scrollbar-track-gray-200 scrollbar-thin 
          inline-flex scrollbar-thumb-red-900" style={{ maxHeight: "150px", overflowY: "auto" }}>
        
          <div className="bg-white text-blue-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md 
             shadow-md">
            <p className="text-sm font-semibold text-center">Genre</p>
            <p className="text-center font-semibold text-xs">{game?.genre}</p>
          </div>

          <div className="bg-white text-green-800 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
            <p className="text-sm font-semibold text-center">Platform</p>
            <p className="text-center font-semibold text-xs">{game?.platform.length > 1 ? game?.platform.join(', ') : game?.platform}</p>
          </div>

          <div className="bg-white text-red-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
            <p className="text-sm font-semibold text-center">Token</p>
            <p className="text-center font-semibold text-xs">{game?.token}</p>
          </div>

          <div className="bg-white text-blue-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
            <p className="text-sm font-semibold text-center">Free-to-Play</p>
            <p className="text-center font-semibold text-xs">{game?.free2play ? "Yes" : "No"}</p>
          </div>

          <div className="bg-white text-green-800 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
            <p className="text-sm font-semibold text-center">Chain</p>
            <p className="text-center font-semibold text-xs">{game?.chain || 'N/A'}</p>
          </div>
        </div>
    </div> {/*======================= Scrollable box end end end end end*/}

  </div> //-------------------------------------------- CONTAINER END ---------------------------------------------------------
  );

  //------------------------- Parent Container start
  return (
    <div className="mb-20 max-w-[1920px]">
      <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 pl-8 inline-block bg-clip-text 
      text-transparent bg-gradient-to-r from-blue-500 to-red-500">Play to Earn</h1>

      {games.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
      
      <button className='py-2 px-4 m-auto mt-6 flex justify-self-center border-2
      text-blue-900  rounded-xl shadow-md hover:bg-blue-500 hover:text-white 
     active:bg-blue-500  hover:transition-all hover:ease-in-out' style={{border: "1px solid blue"}}>
       More
     </button>

    </div> 
  );
}; // ------------------------ Parent Container end

export default Games;
