import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';

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
  const [error, setError] = useState(null);
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

    if (router.isReady) {
      const { _id } = router.query;
      console.log(_id);
      if (_id) {
        fetchAirdrop(_id);
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
            <h2 className="text-2xl font-bold mb-4">Step-By-Step Guide</h2>
            <div>{documentToReactComponents(guide, renderOptions)}</div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No guide available for this airdrop.</p>
        )}
      </div>
    </div>
  );
};

export default AirdropGuide;
