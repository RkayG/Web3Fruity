/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kMxQCw6px3C
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 animate-slideUp">
          <div className="container m-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl">
                    The Gateway to Crypto Earning
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discover a world of crypto earning opportunities, from airdrops and farmable tokens to play-to-earn
                    games and task-based rewards.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Explore Earnings
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/images/about-games.jpg"
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
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                      <p className="text-gray-500">
                        Stay informed about the latest airdrop opportunities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Easy Guide</h3>
                      <p className="text-gray-500 ">Simple steps to claim your free crypto tokens.</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <WalletIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Grow Your Portfolio</h3>
                      <p className="text-gray-500">
                          Expand your crypto holdings with free token airdrops.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/images/gameplay.jpg"
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
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover decentralized finance (DeFi) protocols that allow you to earn rewards by providing liquidity
                  or staking your crypto assets.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/images/task1.jpg"
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
                      <p className="text-gray-500 ">
                        Earn rewards by providing liquidity to DeFi protocols.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <StickerIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Token Staking</h3>
                      <p className="text-gray-500">
                        Earn passive income by staking your crypto assets.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CropIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">High Yields</h3>
                      <p className="text-gray-500 ">
                        Enjoy attractive APYs on your crypto farming activities.
                      </p>
                    </div>
                  </li>
                </ul>
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
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                      <p className="text-gray-500">
                        Explore a variety of fun and rewarding play-to-earn games.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <BadgeIcon className="h-10 w-10 text-gray-500" />
                    <div>
                      <h3 className="text-xl font-bold">Earn Crypto</h3>
                      <p className="text-gray-500">
                        Earn real cryptocurrency by playing and completing in-game tasks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CopyrightIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Ownership</h3>
                      <p className="text-gray-500 ">
                        Own in-game assets and items that can be traded or sold.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <TrophyIcon  className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Compete and Win</h3>
                      <p className="text-gray-500 ">
                         Compete in tournaments and challenges to earn even more rewards.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/images/about-games.jpg"
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
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Earn cryptocurrency by completing simple online tasks, such as watching videos, participating in
                surveys, or engaging with social media.
              </p>
             </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <VideoIcon className="h-10 w-10 text-gray-500 " />
                    <div>
                      <h3 className="text-xl font-bold">Engaging Games</h3>
                      <p className="text-gray-500 ">
                        Explore a variety of fun and rewarding play-to-earn games.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <BadgeIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold">Earn Crypto</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Earn real cryptocurrency by playing and completing in-game tasks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CopyrightIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold">Ownership</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Own in-game assets and items that can be traded or sold.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/images/task1.jpg"
                width="550"
                height="310"
                alt="Play-to-Earn"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
       
      </main>
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