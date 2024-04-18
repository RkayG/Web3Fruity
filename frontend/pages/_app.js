import "../styles/globals.css";

// INTERNAL IMPORTS
import { NavBar, Footer, Logo, Menu } from "../Components";;

export default function App({ Component, pageProps }) {
  return (
    <>
     <NavBar/>
      <Menu/>
      <Component {...pageProps} />
      <Footer/>
    </>
  ) 
}
