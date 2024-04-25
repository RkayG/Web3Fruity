// ParentComponent.js
import Banner from './Banner';

const ParentComponent = () => {
  const texts = [
    "All the ways to earn in web3",
    "Claim Free Crypto: The Ultimate Guide to Airdrops",
    "Play, Earn, Repeat: Discover Top Play-to-Earn Games",
    "From Apps to Assets: Earn Crypto on the Go"
  ];

  return (
    <div>
      <Banner bannerTexts={texts} />
    </div>
  );
};

export default ParentComponent;
