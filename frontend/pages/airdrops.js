import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'; // Import Link for internal navigation

// Airdrops skeleton component
const AirdropsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="bg-white rounded-md shadow-md p-4 border-2 border-solid border-gray-200 animate-pulse">
          <div className="h-24 bg-gray-200 mb-4 rounded"></div>
          <div className="h-4 bg-gray-200 mb-2 rounded"></div>
          <div className="h-4 bg-gray-200 mb-2 rounded"></div>
          <div className="h-4 bg-gray-200 mb-2 rounded"></div>
          <div className="h-4 bg-gray-200 mb-2 rounded"></div>
        </div>
      ))}
    </div>
  );
};

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

  return (
    <div className='my-20 m-auto'>
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 pl-8 inline-block bg-clip-text 
      text-transparent bg-gradient-to-r from-blue-500 to-red-500">
        Confirmed Airdrops
      </h2>
      {loading ? (
        <AirdropsSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:px-8 lg:m-auto">
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
                <Link href={`/airdrop-guide/${airdrop._id}`}>
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
              <Link href={`/airdrop-guide/${airdrop._id}`}>
                <span aria-label='view' title='view' className="absolute top-28 text-center m-auto"
                style={{left: "46%"}}>
                  <img className='w-8 h-8 hover:w-7 hover:h-7 active:w-8 active:h-8' src='go-icon-13.jpg'></img>
                </span>
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="py-2 px-4 mr-2 text-white bg-blue-500 rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="py-2 px-4 text-white bg-blue-500 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Airdrops;
