//import { useRouter } from 'next/router';

// INTERNAL IMPORTS
import { ParentBanner, FeaturedAirdrops, Airdrops } from "../Components";;

const index = () => {
  return (
    <>
      <ParentBanner />
      <FeaturedAirdrops />  
      <Airdrops />
    </>
  );
}
export default index;