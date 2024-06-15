import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Airdrops = () => {
  const [airdrops, setAirdrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1225/airdrops', {
          params: {
            limit: 12,
            page: page,
          },
        });
        setAirdrops(response.data.airdrops);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching airdrops:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const renderPagination = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`py-2 px-4 mx-1 rounded ${page === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-900 hover:bg-blue-500 hover:text-white'}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className='mb-20 m-auto max-w-[1580px]'>
      {loading ? (
        <div className="loading-dots m-auto my-28">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      ) : (
        <>
    
       <section className="relative w-full h-[50vh] min-h-[300px] mb-6 flex items-center justify-center bg-cover bg-center bg-[url('/images/airdrops.jpg')]">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(210,143,143,0.7)] to-[rgba(0,0,0,0.6)]" />
      <div className="relative z-10 text-center text-white max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Discover Airdrop pools</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Earn free tokens by participating in our airdrop pool selections
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#ffd700] text-gray-900 font-medium rounded-md hover:bg-[#ffcc00] focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2"
          prefetch={false}
        >
          Learn More About Airdrops
        </Link>
        </div>
        </section>

          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 pl-8 inline-block bg-clip-text 
          text-transparent bg-gradient-to-r from-blue-500 to-red-500">
            Confirmed Airdrops
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:px-8 lg:m-auto">
            {airdrops.map((airdrop) => (
              <div
                key={airdrop._id}
                className="bg-white mx-4 lg:mx-0 rounded-md pb-8 
                shadow-md p-4 border-2 border-solid border-gray-200 relative min-w-[340px]">
                <span className="absolute top-2 right-2 text-xs font-semibold green 
                py-1 px-2 rounded-xl text-white ">
                  {airdrop.platformType}
                </span>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 relative">
                      <img src={airdrop.logo} className=" w-16 h-16 rounded-full" />
                  </div>
                  <Link href={`/airdrops/${airdrop._id}`}>
                    <h2 className="text-lg font-bold absolute left-24 top-5 cursor-pointer ">{airdrop.title}</h2>
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mb-2">
                  <span className='text-xs absolute top-20 left-24'>Total Airdrop Pool</span>
                  <span className="font-semibold absolute top-14 left-24">{airdrop.rewardPool || 'N/A'}</span>
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  <span className='text-xs absolute top-20 left-56'>% of Total Supply</span>
                  <span className="font-semibold absolute top-14 left-56">{airdrop.rewardPercentFromSupply || 'N/A'}</span>
                </p>
                <p className="text-xs text-gray-500">
                  <span className=''>End Date</span>
                  <span className="font-semibold absolute bottom-4 left-4">{new Date(airdrop.endDate).toLocaleDateString() || 'N/A'}</span>
                </p>
                <p className="text-xs text-gray-500">
                  <span className='absolute top-28 right-4'>Chain</span>
                  <span className="font-semibold absolute bottom-4 right-4">{airdrop.chain || 'N/A'}</span>
                </p>
                <Link href={`/airdrops/${airdrop._id}`}>
                  <span aria-label='view' title='view' className="absolute top-28 text-center m-auto"
                  style={{left: "46%"}}>
                    <img className='w-8 h-8 hover:w-7 hover:h-7 active:w-8 active:h-8' src='go-icon-13.jpg'></img>
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            {renderPagination()}
          </div>
        </>
      )}
    </div>
  );
};

export default Airdrops;
