
// INTERNAL IMPORTS
import { ParentBanner, FeaturedAirdrops, Airdrops, Games, RewardForTask, CryptoInsights, TokenFarming, BottomSubscribe } from "../Components";
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
      <CryptoInsights />
      <BottomSubscribe />
    </>
  );
}
export default index;