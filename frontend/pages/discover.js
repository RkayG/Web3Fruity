
// INTERNAL IMPORTS
import { ParentBanner, FeaturedAirdrops, Airdrops, Games, RewardForTask, CryptoNews, TokenFarming, AcademySection, BottomSubscribe, Disclaimer } from "../Components";
import dynamic from "next/dynamic";

//const FeaturedAirdrops = dynamic(() => import("../Components/FeaturedAirdrops"), { ssr: false });

const index = () => {
  return (
    <>
      <ParentBanner />
      <FeaturedAirdrops />  
      <Airdrops />
      <TokenFarming />
      <Games />
      <RewardForTask />
      <CryptoNews />
      <AcademySection />
      <Disclaimer />
      <BottomSubscribe />
      
    </>
  );
}
export default index;