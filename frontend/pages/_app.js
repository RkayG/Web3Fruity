import { useEffect, useState } from 'react';
import Head from 'next/head';
import "../styles/globals.css";



//INTERNAL IMPORTS
import { NavBar, Footer, BottomNavigationPanel } from "../Components";


export default function App({ Component, pageProps }) {
 /*  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setShowInstallBanner(false);
      });
    }
  };

  const dismissInstallBanner = () => {
    setShowInstallBanner(false);
  };
 */
  return (
    <>
      <Head>
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Web3Fruity</title>
      </Head>
      <NavBar />
     {/*  {showInstallBanner && (
        <div style={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#f0f0f0',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <span className='pl-6'>Add Web3Fruity to your home screen for quick access!</span>
          <div>
            <button onClick={handleInstallClick} style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#000', color: '#fff' }}>
              Install
            </button>
            <button onClick={dismissInstallBanner} style={{ padding: '5px 10px' }}>
              Dismiss
            </button>
          </div>
        </div>
      )} */}
      {/* <Component {...pageProps} /> */}
      <Footer />
      <BottomNavigationPanel />
    </>
  );
}