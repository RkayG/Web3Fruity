import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link for internal navigation

// Airdrops skeleton component
const AirdropsSkeleton = () => {
  return (
    <div>
      <h2 className="w-44 h-8 bg-gray-200 rounded-md ml-4 mb-6 pl-8 inline-block">
          
        </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:ml-4">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="bg-white mx-4 lg:mx-0 rounded-md pb-8 animate-pulse shadow-md p-4 border-2 border-solid border-gray-200 relative min-w-[340px]">
            <div className='h-16 w-16 bg-gray-200 rounded-full mb-4'></div>
            <div className=" absolute top-7 left-24 w-32  bg-gray-200 rounded h-4"></div>
            <div className="h-5 bg-gray-200 mb-2 rounded-xl absolute top-2 right-2 w-20"></div>
            <div className="h-4 bg-gray-200 mb-2 rounded absolute top-14 left-24 w-20"></div>
            <div className="h-4 bg-gray-200 mb-2 rounded absolute top-20 left-24 w-20"></div>
            <div className="h-4 bg-gray-200 mb-2 rounded absolute top-14 left-56 w-20"></div>
            <div className="h-4 bg-gray-200 rounded absolute top-20 left-56 w-20 mb-3"></div>
            <div className="h-3 w-16 bg-gray-200 mb-2 rounded absolute top-28 right-4"></div>
            <div className="h-3 w-16 bg-gray-200 mb-2 rounded absolute bottom-4 right-4"></div>
            <div className="h-3 w-16 bg-gray-200 mb-2 rounded absolute top-28 left-4"></div>
            <div className="h-3 w-16 bg-gray-200 mb-2 rounded absolute bottom-4 left-4"></div>
            <div className="h-8 w-8 bg-gray-200 relative top-3 mt-3 mb-1 rounded-full flex justify-center m-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Airdrops = () => {
  const router = useRouter();
  const [airdrops, setAirdrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleNavigateToAirdrops = () => {
    router.push('/airdrops');
  };

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
       
      }
    };

    fetchData();
  }, [page]);

  return (
    <div className='my-20 max-w-[1580px] m-auto'>
      {!loading && <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 pl-8 inline-block bg-clip-text 
      text-transparent bg-gradient-to-r from-blue-500 to-red-500">
        Confirmed Airdrops
      </h2>
      }
      
      {loading ? (
        <AirdropsSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  lg:px-8 lg:m-auto">
          {airdrops?.map((airdrop) => (
            <div
              key={airdrop._id}
              className="bg-white mx-4 lg:mx-0 rounded-md pb-8 shadow-md p-4 border-2 border-solid border-l-orange-800 border-b-orange-800 rounded-b-xl border-gray-200 relative min-w-[340px]"
            >
              <span className="absolute top-2 right-2 text-xs font-semibold green py-1 px-2 rounded-xl text-white">
                {airdrop.platformType}
              </span>
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 relative">
                  <img src={airdrop.logo} className="w-16 h-16 rounded-full" />
                </div>
                <Link href={`/airdrop-guide/${airdrop._id}`}>
                  <h2 className="text-lg font-bold absolute left-24 top-5 cursor-pointer">
                    {airdrop.title}
                  </h2>
                </Link>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                <span className="text-xs absolute top-20 left-24">Total Airdrop Pool</span>
                <span className="font-semibold absolute top-14 left-24">{airdrop.rewardPool || 'N/A'}</span>
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="text-xs absolute top-20 left-56">% of Total Supply</span>
                <span className="font-semibold absolute top-14 left-56">{airdrop.rewardPercentFromSupply || 'N/A'}</span>
              </p>
              <p className="text-xs text-gray-500">
                <span>End Date</span>
                <span className="font-semibold absolute bottom-4 left-4">
                  {new Date(airdrop.endDate).toLocaleDateString() || 'N/A'}
                </span>
              </p>
              <p className="text-xs text-gray-500">
                <span className="absolute top-28 right-4">Chain</span>
                <span className="font-semibold absolute bottom-4 right-4">{airdrop.chain || 'N/A'}</span>
              </p>

              <Link href={`/airdrops/${airdrop._id}`}>
                <span
                  aria-label="view"
                  title="view"
                  className="absolute top-28 text-center m-auto"
                  style={{ left: '46%' }}
                >
                  <img
                    className="w-8 h-8 hover:w-7 hover:h-7 active:w-8 active:h-8"
                    src="go-icon-13.jpg"
                  ></img>
                </span>
              </Link>
            </div>
          ))}
        </div>
      )}
      <button
        className="py-2 px-4 m-auto mt-6 flex justify-self-center hover:bg-blue-500 hover:text-white hover:transition-[0.2s]
         text-black active:bg-blue-100 rounded-xl bg-gray-200 hover:ease-in-out"
        onClick={handleNavigateToAirdrops}
      >
        More
      </button>
    </div>
  );
};

export default Airdrops;
