import { useState, useEffect } from "react";
import Link from "next/link";
import { BottomSubscribe, Footer, NavBar } from "../Components";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import Subscribe from "../Components/Subscribe";
import { motion, AnimatePresence } from 'framer-motion';
import { Inter, Roboto_Slab } from 'next/font/google'
 
const roboto_slab = Roboto_Slab({ subsets: ['latin'] })

// =========== Tooltip, to be removed ================
export const TooltipLink = ({ href, className, children, tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
  };


  return (
    <div className="relative inline-block">
      <a
        href={href}
        className={className}
        onClick={handleClick}
        aria-label={tooltipText}
      >
        {children}
      </a>
      {showTooltip && (
        <div className="absolute bottom-full ml-14 lg:ml-28 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded shadow whitespace-nowrap">
          {tooltipText}
        </div>
      )}
    </div>
  );
};
// ============ Tooltip end =============== 

export default function Component() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((v) => !v);
    }, 5000); // Toggle visibility every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };


  return (
    <div className="flex flex-col min-h-[100dvh] ">
      <NavBar />
      <div className="banner bg-burgundy h-36 sm:h-28 flex flex-col items-center justify-center px-4 text-center overflow-hidden relative">
        <motion.div 
          className="absolute inset-0"
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '400px 400px',
          }}
        />
        <div className="banner-content flex flex-wrap mx-auto justify-center items-center relative z-10">
          <AnimatePresence>
            {isVisible && (
              <motion.h1 
                className="banner-text text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-0 sm:mr-6"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                Be the first to know when we launch
              </motion.h1>
            )}
          </AnimatePresence>
          <motion.button 
            onClick={() => setIsSubscribeOpen(true)} 
            className="bg-white text-burgundy font-semibold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-black hover:text-white transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            Notify Me
          </motion.button>
        </div>
        {isSubscribeOpen && <Subscribe onClose={() => setIsSubscribeOpen(false)} />}
      </div>
      <main className="flex-1">
        <section className="about-section w-full py-12 md:py-24 lg:py-32 animate-slideUp">
          <div className="container m-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className=" font-bold tracking-tighter text-blue-800 text-5xl lg:mb-6">
                      Rewarding Crypto Exploration
                  </h1>
                  <p className= {`${roboto_slab.className} max-w-[600px] text-black md:text-xl/relaxed lg:xl/relaxed xl:text-xl/relaxed mt-3 `}>
                  Are you ready to level up your crypto adventures and harvest bountiful rewards? <br/><br/>
                  <span className="text-blue-800 font-bold text-xl">Web3</span><span className="text-orange-800 text-xl font-bold">Fruity</span> is your gateway to a treasure trove of Web3 earning opportunities.
                    
                    We serve up the freshest picks from the world of crypto, from low-hanging fruits like airdrops and farmable tokens to lucrative games where you play to earn and rewarding tasks that pay you in crypto.
                   <br/> <br/>
                    Dive into the vibrant orchard of DeFi with Web3Fruity and discover how to maximize your crypto earnings today!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/airdrops"
                    className="inline-flex h-9 lg/md:w-fit items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start Earning
                  </Link>
                 
                    <Link
                      href="/academy"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Academy
                    </Link>
                    
                </div>
              </div>
              <img
                src="/images/logo1.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="airdrops" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-white rounded-lg bg-gradient-to-r from-red-400 to-[rgba(0,0,0,0.62)] px-3 py-1 text-sm">Airdrops</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Free Crypto Tokens</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover and claim free cryptocurrency tokens through airdrops. Stay up-to-date with the latest
                  airdrop opportunities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <DropletIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Airdrop Alerts</h3>
                      <p className="text-gray-600">
                        Stay informed about the latest airdrop opportunities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Easy Guide</h3>
                      <p className="text-gray-600 ">Simple steps to claim your free crypto tokens.</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <WalletIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Grow Your Portfolio</h3>
                      <p className="text-gray-600">
                          Expand your crypto holdings with free token airdrops.
                      </p>
                    </div>
                  </li>
                  
                </ul>
                  <Link
                      href=  "/airdrops"
                      className="inline-flex h-9 lg/md:w-fit lg/md:ml-14 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Start Earning
                  </Link>
              </div>
              <img
                src="/images/airdrops3.jpg"
                width="550"
                height="310"
                alt="Airdrops"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="farmable-tokens" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg px-3 py-1 text-sm text-white bg-gradient-to-r from-red-400 to-[rgba(0,0,0,0.62)]">
                  Token Farming
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Earn by Farming Crypto</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover decentralized finance (DeFi) protocols that allow you to earn rewards by providing liquidity
                  or staking your crypto assets.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/images/token-staking.jpg"
                width="550"
                height="310"
                alt="Farmable Tokens"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <CurrencyIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Liquidity Farming</h3>
                      <p className="text-gray-600 ">
                        Earn rewards by providing liquidity to DeFi protocols.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <StickerIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Token Staking</h3>
                      <p className="text-gray-600">
                        Earn passive income by staking your crypto assets.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CropIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">High Yields</h3>
                      <p className="text-gray-600 ">
                        Enjoy attractive APYs on your crypto farming activities.
                      </p>
                    </div>
                  </li>
                </ul>
                <Link
                      href="/token-farming"
                      className="inline-flex h-9 lg/md:w-fit lg/md:ml-14 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Start Farming
                  </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="play-to-earn" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg text-white px-3 py-1 text-sm bg-gradient-to-r from-red-400 to-[rgba(0,0,0,0.62)]">
                  Play-to-Earn
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Earn While You Play</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Unlock a new realm of crypto earnings with captivating, blockchain-driven games.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <GamepadIcon className="h-10 w-10 text-gray-500" />
                    <div>
                      <h3 className="text-xl font-bold">Engaging Games</h3>
                      <p className="text-gray-600">
                        Explore a variety of fun and rewarding play-to-earn games.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <BadgeIcon className="h-10 w-10 text-gray-500" />
                    <div>
                      <h3 className="text-xl font-bold">Earn Crypto</h3>
                      <p className="text-gray-600">
                        Earn real cryptocurrency by playing and completing in-game tasks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CopyrightIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Ownership</h3>
                      <p className="text-gray-600 ">
                        Own in-game assets and items that can be traded or sold.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <TrophyIcon  className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Compete and Win</h3>
                      <p className="text-gray-600 ">
                         Compete in tournaments and challenges to earn even more rewards.
                      </p>
                    </div>
                  </li>
                </ul>
                  <Link
                      href="/games"
                      className="inline-flex h-9 lg/md:w-fit lg/md:ml-14 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Start Playing
                  </Link>
              </div>
              <img
                src="/images/gameworld.jpg"
                width="550"
                height="310"
                alt="Play-to-Earn"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="task-based-rewards" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg text-white bg-gradient-to-r from-red-400 to-[rgba(0,0,0,0.62)] px-3 py-1 text-sm">
                Task-Based Rewards
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Earn Crypto for Completing Tasks</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Earn cryptocurrency by completing simple online tasks, such as watching videos, participating in
                surveys, or engaging with social media.
              </p>
             </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                  src="/images/reward-tasks.jpg"
                  width="550"
                  height="310"
                  alt="Task-Based-Rewards"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <VideoIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Explore Platforms</h3>
                      <p className="text-gray-600 ">
                         Select and visit task-based platforms.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <BadgeIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold">Micro Tasks</h3>
                      <p className="text-gray-600">
                          Complete quick and easy tasks to boost your earnings
                      </p>
                    </div>
                  </li>
                 
                </ul>
                  <Link
                      href="/platforms"
                      className="inline-flex h-9 lg/md:w-fit lg/md:ml-14 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Start Earning
                  </Link>
              </div>
             
            </div>
          </div>
        </section>
        <section id="crypto-education" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg text-white bg-gradient-to-r from-red-400 to-[rgba(0,0,0,0.62)] px-3 py-1 text-sm">
                Academy
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Crypto Education</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Expand your crypto knowledge with our comprehensive educational resources, covering everything from blockchain basics to advanced topics
              </p>
             </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <BookIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Crypto Basics</h3>
                      <p className="text-gray-600 ">
                        Learn the fundamentals of cryptocurrencies and blockchain technology.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <BadgeIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold">Industry Insights</h3>
                      <p className="text-gray-600">
                          Stay informed about the latest developments in the crypto space.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <WalletIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold">Wallet Management</h3>
                      <p className="text-gray-600">
                         Learn how to securely store, manage, and protect your crypto assets.
                      </p>
                    </div>
                  </li>
                 
                </ul>
                  <Link
                      href="/academy"
                      className="inline-flex h-9 lg/md:w-fit lg/md:ml-14 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Start Learning
                  </Link>
              </div>
              <img
                src="/images/crypto-education2.jpg"
                width="550"
                height="310"
                alt="Crypto-Education"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="crypto-news" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg text-white bg-gradient-to-r from-red-400 to-[rgba(0,0,0,0.62)] px-3 py-1 text-sm">
                Cryto News
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Crypto News</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                 Stay up-to-date with the latest news, trends, and developments in the crypto world.
              </p>
             </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                  src="/images/crypto-news.jpg"
                  width="550"
                  height="310"
                  alt="Cryto-News"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <NewspaperIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Industry updates</h3>
                      <p className="text-gray-600 ">
                        Stay informed about the latest developments in the crypto industry.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <TimerIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold">Market Trends</h3>
                      <p className="text-gray-600">
                        Analyze the latest market trends and their impact on crypto investments.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <RulerIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold">Regulatory Updates</h3>
                      <p className="text-gray-600">
                          Stay informed about the evolving regulatory landscape in the crypto space.
                      </p>
                    </div>
                  </li>
                 
                </ul>
                  <Link
                      href="/crypto-news"
                      className="inline-flex h-9 lg/md:w-fit lg/md:ml-14 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"        
                      prefetch={false}
                    >
                      Start Reading
                  </Link>
              </div>
             
            </div>
          </div>
        </section>

        <div className="join-our-community text-center text-3xl">
          <p className="text-blue-900 text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Join our community</p>
          <div className="flex flex-wrap justify-center mt-6 mb-32">
            <a href="https://www.x.com/web3fruity"><FaTwitter className="mr-6"/></a>
            <a href="https://www.t.me/web3fruity"><FaTelegram className=""/></a>
          </div>
        </div>
      </main>
      <BottomSubscribe />
      <Footer />
    </div>
  )
}

function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}

function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}



function BitcoinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function CopyrightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
    </svg>
  )
}


function CropIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2v14a2 2 0 0 0 2 2h14" />
      <path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </svg>
  )
}


function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function StickerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
      <path d="M14 3v4a2 2 0 0 0 2 2h4" />
      <path d="M8 13h0" />
      <path d="M16 13h0" />
      <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
    </svg>
  )
}


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function DropletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  )
}


function NewspaperIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  )
}


function RulerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  )
}


function TimerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}
