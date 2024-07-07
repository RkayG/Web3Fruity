import "../styles/globals.css";


// INTERNAL IMPORTS
import { NavBar, Footer, BottomNavigationPanel } from "../Components";

export default function App({ Component, pageProps }) {

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <BottomNavigationPanel />
    </>
  );
}