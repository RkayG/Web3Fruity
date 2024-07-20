import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import GameCard from "../../Components/GameCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Games = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 12;

  const pageStateRef = useRef({
    games: [],
    filteredGames: [],
    genres: [],
    selectedGenre: "",
    currentPage: 1,
  });

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:1225/games");
        if (!response.ok) {
          throw new Error("Failed to fetch games.");
        }
        const data = await response.json();
        setGames(data);
        setFilteredGames(data.slice(1)); // Set filtered games to start from index 1
        const uniqueGenres = [...new Set(data.map(game => game.genre))];
        setGenres(uniqueGenres);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching games:", error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        const cachedState = pageStateRef.current;
        setGames(cachedState.games);
        setFilteredGames(cachedState.filteredGames);
        setGenres(cachedState.genres);
        setSelectedGenre(cachedState.selectedGenre);
        setCurrentPage(cachedState.currentPage);
      }
    };

    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  useEffect(() => {
    const handlePageHide = () => {
      pageStateRef.current = {
        games,
        filteredGames,
        genres,
        selectedGenre,
        currentPage,
      };
    };

    window.addEventListener('pagehide', handlePageHide);

    return () => {
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [games, filteredGames, genres, selectedGenre, currentPage]);

  const handleGenreFilter = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
    if (genre === "") {
      setFilteredGames(games.slice(1));
    } else {
      setFilteredGames(games.slice(1).filter(game => game.genre === genre));
    }
  };

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const genreSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const featuredSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const SkeletonFeaturedGame = () => (
    <div className="px-2">
      <div className="relative h-[300px] w-full bg-gray-300 animate-pulse rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-8 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );

  const SkeletonGameCard = () => (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
      <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
    </div>
  );

  return (
    <div className="mb-20 max-w-[1920px] m-auto">
      <div className="relative w-full max-h-[50vh] min-h-[300px] mb-6 flex items-center justify-center bg-cover bg-center bg-[url('/images/games1.jpg')]">
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
      </div>

      <div className="mb-12 mt-12">
        <h2 className="text-2xl font-bold mb-4 ml-4 text-center bg-clip-text 
          text-transparent bg-gradient-to-r from-blue-500 to-red-500">Featured Games</h2>
        <Slider {...featuredSliderSettings}>
          {loading
            ? Array(9).fill().map((_, index) => <SkeletonFeaturedGame key={index} />)
            : games.slice(0, 9).map((game, index) => (
                <div key={index} className="px-2">
                  <div className="relative h-[300px] w-full">
                    <img src={game.image} alt={game.title} className="object-cover h-full w-full rounded-lg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                      <h3 className="text-white text-xl font-bold text-center">{game.title}</h3>
                    </div>
                  </div>
                </div>
              ))
          }
        </Slider>
      </div>

      <h2 className="text-2xl font-bold mb-4 ml-4 text-center bg-clip-text 
          text-transparent bg-gradient-to-r from-blue-500 to-red-500">All Games</h2>
      <div className="mb-6 py-6 whitespace-nowrap">
        {genres.map((genre, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 rounded-full ${selectedGenre === genre ? 'bg-blue-500 text-white' : 'bg-gray-50 border border-gray-300 text-blue-900'} hover:bg-blue-500 hover:text-white`}
            onClick={() => handleGenreFilter(genre)}
          >
            {genre}
          </button>
        ))}
        {selectedGenre && (
          <button
            className="mt-4 mx-auto block  px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700"
            onClick={() => handleGenreFilter("")}
          >
            Clear
          </button>
        )}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array(12).fill().map((_, index) => <SkeletonGameCard key={index} />)}
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
