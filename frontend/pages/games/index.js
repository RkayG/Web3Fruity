import React, { useState, useEffect } from "react";
import { FaTwitter, FaFacebook, FaDiscord, FaTelegram, FaReddit, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import GameCard from "../../Components/GameCard";

const Games = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 12;

  
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

  return (
    
    <div className="mb-20 max-w-[1920px] m-auto">
       <section className="relative w-full max-h-[50vh] min-h-[300px] mb-6 flex items-center justify-center bg-cover bg-center bg-[url('/images/games1.jpg')]">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(210,143,143,0.5)] to-[rgba(0,0,0,0.5)]" />
      <div className="relative z-10 text-center text-white max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-pulse">Earn While You Play</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Discover top play-to-earn games and start earning rewards for your gameplay.
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 bg-orange-300 text-gray-900 font-medium rounded-md hover:bg-[#ffcc00] focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2"
          prefetch={false}
        >
          Learn More
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
