import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto my-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-gradient bg-gradient-to-r from-blue-500 to-red-500">About Web3Fruity</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Web3Fruity!</h2>
        <p className="text-lg leading-relaxed">
          At Web3Fruity, we are revolutionizing the world of online gaming and decentralized finance (DeFi) by seamlessly blending these two exciting domains into one innovative platform. Our mission is to create a vibrant ecosystem where gamers and crypto enthusiasts can thrive, learn, and earn together.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          Our vision is to empower individuals by providing them with opportunities to earn cryptocurrency through engaging and immersive gameplay. We believe in the transformative power of blockchain technology and aim to make it accessible and enjoyable for everyone.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            <h3 className="text-xl font-semibold">Play-to-Earn Gaming</h3>
            <p className="text-lg leading-relaxed">
              Dive into a world of fun and rewarding games where your skills and achievements translate into real-world value. With our Play-to-Earn model, you can earn cryptocurrency and unique digital assets (NFTs) just by playing.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold">NFT Marketplace</h3>
            <p className="text-lg leading-relaxed">
              Explore our dynamic NFT marketplace where you can buy, sell, and trade a variety of digital collectibles and in-game assets. Each NFT is unique and offers a tangible representation of your achievements within our games.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold">DeFi Integration</h3>
            <p className="text-lg leading-relaxed">
              Maximize your earnings with our integrated DeFi features. Stake your tokens, participate in yield farming, and take advantage of our secure and efficient blockchain infrastructure to grow your wealth while having fun.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold">Community and Education</h3>
            <p className="text-lg leading-relaxed">
              Join a thriving community of gamers, investors, and blockchain enthusiasts. Learn about the latest trends in blockchain technology, share your experiences, and collaborate with others to make the most out of your Web3 journey.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Web3Fruity?</h2>
        <ul className="list-disc pl-6">
          <li className="text-lg leading-relaxed mb-2">Innovative Gaming Experience: Enjoy a variety of games designed to entertain and reward you simultaneously.</li>
          <li className="text-lg leading-relaxed mb-2">Earning Opportunities: Turn your gaming skills into real cryptocurrency and valuable NFTs.</li>
          <li className="text-lg leading-relaxed mb-2">Secure and Transparent: Our platform is built on robust blockchain technology, ensuring security and transparency in all your transactions.</li>
          <li className="text-lg leading-relaxed mb-2">Community-Driven: Be part of a vibrant and supportive community that shares your passion for gaming and crypto.</li>
          <li className="text-lg leading-relaxed mb-2">Educational Resources: Access a wealth of resources to learn about blockchain, cryptocurrency, and DeFi.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The "New" Badge</h2>
        <p className="text-lg leading-relaxed">
          At Web3Fruity, we celebrate new and exciting content. When a new game or feature is launched, it gets a "NEW" badge, highlighting its freshness. This badge will stay for a week to ensure our community doesn't miss out on the latest updates.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Join Us Today!</h2>
        <p className="text-lg leading-relaxed">
          Whether you're a seasoned gamer, a crypto investor, or someone curious about the world of blockchain, Web3Fruity has something for you. Join us on this exciting journey and discover the future of gaming and decentralized finance.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          For more information, feel free to explore our platform or contact our support team. We're here to help you every step of the way.
        </p>
      </section>
    </div>
  );
};

export default About;
