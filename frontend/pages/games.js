import React, { useState, useEffect } from "react";
import { FaTwitter, FaFacebook, FaDiscord, FaTelegram, FaReddit, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

const Games = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 12;

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
        setFilteredGames(data);
        const uniqueGenres = [...new Set(data.map(game => game.genre))];
        setGenres(uniqueGenres);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching games:", error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []); // ============= Fetch end

  //============= handle genre filtering
  const handleGenreFilter = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1); // Reset to first page on filter change
    if (genre === "") {
      setFilteredGames(games);
    } else {
      setFilteredGames(games.filter(game => game.genre === genre));
    }
  };

  // Pagination logic
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const GameCard = ({ game }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-auto lg:p-8 mb-4 border-2 border-gray-200" style={{ width: "95%" }}>
      <div className="flex">
        <img className="w-24 h-24 lg:w-40 lg:h-auto rounded-2xl m-4 lg:m-0 lg:rounded-md lg:mr-6" src={game.image} alt={game.title} />
        <div className="ml-4 flex-1">
          <div className="title-and-view-button-container flex">
            <h2 className="text-sm w-48 mt-4 lg:mt-0 lg:text-lg font-semibold font cursor-pointer lg:w-60">{game.title}</h2>
            <span className="hidden font-semibold lg:block lg:static lg:ml-20 text-sm text-blue-900 rounded-2xl px-4 cursor-pointer hover:bg-blue-50 active:bg-ble-100" style={{ border: "1px solid blue", left: "11%" }}>
              View
            </span>
          </div>
          <div className="flex items-center mt-2">
            <a href={game.website} className="mb-2 mr-3"><FaGlobe /></a>
            {game.socialLinks.map((link, index) => {
              let icon;
              if (link.includes("twitter.com")) {
                icon = <FaTwitter />;
              } else if (link.includes("facebook.com")) {
                icon = <FaFacebook />;
              } else if (link.includes("discord.com")) {
                icon = <FaDiscord />;
              } else if (link.includes("telegram.com") || link.includes("t.me")) {
                icon = <FaTelegram />;
              } else if (link.includes("reddit.com")) {
                icon = <FaReddit />;
              }
              return (
                <a key={index} href={link} className="mr-3 mb-2">
                  {icon}
                </a>
              );
            })}
          </div>
          <p className="text-sm text-blue-900 font-semibold">Developer: {game.developer}</p>
          <p className="mt-2 w-auto pr-3 text-xs md:text-sm lg:text-sm lg:w-2/4 h-20">{truncateText(game.description, 160)}</p>
        </div>
      </div>
      <span className="lg:hidden font-semibold relative text-sm ml-6 py-1 -top-8 text-blue-900 rounded-2xl px-6 cursor-pointer hover:bg-blue-50 active:bg-blue-100" style={{ border: "1px solid blue" }}>
        View
      </span>
      <div className="overflow-x-auto w-auto pt-6 pl-6 rounded-t-none rounded-b-md lg:rounded-md shadow-md bg-gray-200">
        <div className="lg:flex lg:flex-wrap lg:justify-center scrollbar-track-gray-200 scrollbar-thin inline-flex scrollbar-thumb-red-900" style={{ maxHeight: "150px", overflowY: "auto" }}>
          <div className="bg-white text-blue-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
            <p className="text-sm font-semibold text-center">Genre</p>
            <p className="text-center font-semibold text-xs">{game.genre}</p>
          </div>
          <div className="bg-white text-green-800 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
            <p className="text-sm font-semibold text-center">Platform</p>
            <p className="text-center font-semibold text-xs">{game.platform.length > 1 ? game.platform.join(', ') : game.platform}</p>
          </div>
          <div className="bg-white text-red-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
            <p className="text-sm font-semibold text-center">Token</p>
            <p className="text-center font-semibold text-xs">{game.token}</p>
          </div>
          <div className="bg-white text-blue-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
            <p className="text-sm font-semibold text-center">Free-to-Play</p>
            <p className="text-center font-semibold text-xs">{game.free2play ? "Yes" : "No"}</p>
          </div>
          <div className="bg-white text-green-800 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
            <p className="text-sm font-semibold text-center">Chain</p>
            <p className="text-center font-semibold text-xs">{game.chain || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    
    <div className="mb-20 max-w-[1920px] m-auto">
       <section className="relative w-full max-h-[50vh] min-h-[300px] mb-6 flex items-center justify-center bg-cover bg-center bg-[url('/images/gameplay.jpg')]">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(210,143,143,0.7)] to-[rgba(0,0,0,0.62)]" />
      <div className="relative z-10 text-center text-white max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-pulse">Earn While You Play</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Discover top play-to-earn games and start earning rewards for your gameplay.
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#ffd700] text-gray-900 font-medium rounded-md hover:bg-[#ffcc00] focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2"
          prefetch={false}
        >
          Learn More About Play-To-Earn Games
        </Link>
      </div>
    </section>
      <div className="flex justify-center mb-6 border bg-gray-300 py-6">
        {genres.map((genre, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 rounded-md ${selectedGenre === genre ? 'bg-blue-500 text-white' : 'bg-white text-blue-900'} hover:bg-blue-500 hover:text-white`}
            onClick={() => handleGenreFilter(genre)}
          >
            {genre}
          </button>
        ))}
        {selectedGenre && (
          <button
            className="mx-2 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            onClick={() => handleGenreFilter("")}
          >
            Clear
          </button>
        )}
      </div>
      {loading ? (
        <div className="loading-dots m-auto my-28">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      ) : (
        <>
          {currentGames.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
          <Pagination
            gamesPerPage={gamesPerPage}
            totalGames={filteredGames.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

const Pagination = ({ gamesPerPage, totalGames, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex pl-0 rounded list-none flex-wrap">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 mx-1 rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-900'} hover:bg-blue-500 hover:text-white`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Games;
