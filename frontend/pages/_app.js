import "../styles/globals.css";
import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

// INTERNAL IMPORTS
import { NavBar, Footer } from "../Components";

export default function App({ Component, pageProps }) {

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}