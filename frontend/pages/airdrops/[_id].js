import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import axios from 'axios';

const Navigation = ({ title }) => {
  const router = useRouter();

  return (
    <nav className="flex items-center space-x-2 text-pink-900 ml-6 mt-6">
      <Link href="/airdrops" className="hover:text-blue-600"> 
         Airdrops
      </Link>
      <span> &gt; </span>
      <span className="font-bold text-gray-800">{title}</span>
    </nav>
  );
};

const AirdropGuide = () => {
  const [airdropData, setAirdropData] = useState(null);
  const [additionalAirdrops, setAdditionalAirdrops] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchAirdrop = async (_id) => {
      try {
        const response = await fetch(`http://localhost:1225/airdrops/${_id}`);
        const airdrop = await response.json();
        console.log(airdrop);
        setAirdropData(airdrop);
      } catch (error) {
        console.error('Failed to load airdrop guide:', error);
        setError('Failed to load airdrop guide');
      }
    };

    const fetchAdditionalAirdrops = async () => {
      try {
        const response = await axios.get('http://localhost:1225/airdrops', {
          params: {
            limit: 3,
            page: page,
          },
        });
        const airdrops = await response.data.airdrops;
        setAdditionalAirdrops(response.data.airdrops);
      } catch (error) {
        console.error('Failed to load additional airdrops:', error);
      }
    };

    if (router.isReady) {
      const { _id } = router.query;
      console.log(_id);
      if (_id) {
        fetchAirdrop(_id);
        fetchAdditionalAirdrops();
      }
    }
  }, [router.isReady, router.query._id]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!airdropData) {
    return <div className="loading-dots m-auto my-44">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>;
  }

  const { title, description, logo, guide } = airdropData;

  // Define custom render options
  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        return (
          <div className="my-4 rounded-md">
            <img src={file.url} alt={title} className="mx-auto rounded-lg" />
            {title && <p className="text-center text-sm text-gray-600">{title}</p>}
          </div>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-bold mb-4">{children}</h2>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} className="text-blue-500 hover:underline">
          {children}
        </a>
      ),
    },
  };

  const truncatedDescription = description?.length > 200 ? description?.substring(0, 200) + '...' : description;

  return (
    <div>
      <Navigation title={title} />
    
      <div className="max-w-3xl mx-auto p-4 mt-12">
        
        {logo && <img src={logo} alt={title} className="w-32 h-32 mx-auto" />}
        <h1 className="text-4xl font-bold text-center my-6">{title}</h1>
        <p className="text-lg mb-6">
          {showFullDescription ? description : truncatedDescription}
          {description?.length > 200 && (
            <button
              className="ml-2 text-[green] hover:underline"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? 'Read Less' : 'Read More'}
            </button>
          )}
        </p>
        {guide ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Steps To Join Airdrop</h2>
            <div>{documentToReactComponents(guide, renderOptions)}</div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No guide available for this airdrop.</p>
        )}
      </div>

      {/* Display additional airdrops */}
      <div className="p-8  mx-4 mt-12 mb-20 border rounded-md bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 ">You might also like </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {additionalAirdrops.map((airdrop) => (
              <div
              key={airdrop._id}
              className="bg-white mx-4 lg:mx-0 rounded-md pb-8 shadow-md p-4 border-2 border-solid border-gray-200 relative min-w-[340px]"
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

              <Link href={`/airdrop-guide/${airdrop._id}`}>
                <span
                  aria-label="view"
                  title="view"
                  className="absolute top-28 text-center m-auto"
                  style={{ left: '46%' }}
                >
                  <img
                    className="w-8 h-8 hover:w-7 hover:h-7 active:w-8 active:h-8"
                    url="../airdrops/go-icon-13.jpg"
                  ></img>
                </span>
              </Link>
            </div>
          ))} 
        </div>
          <Link href={`/airdrops`}>
            <button className="py-2 px-4 m-auto mt-6 flex justify-self-center hover:bg-black hover:text-white 
                hover:transition-[0.2s]text-black active:bg-blue-100 rounded-xl bg-gray-200 hover:ease-in-out"   
            > See More </button>
          </Link>
      </div>
    </div>
  );
};

export default AirdropGuide;
