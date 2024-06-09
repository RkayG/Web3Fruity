import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto my-12 px-6 animate-slideUp">
      <h1 className="text-4xl font-bold mb-8 text-clip text-white bg-clip-content text-gradient bg-gradient-to-r from-blue-500 to-red-500">About Web3Fruity</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Web3Fruity!</h2>
        <p className="text-lg leading-relaxed">
          At Web3Fruity, we are revolutionizing the world of online gaming and decentralized finance (DeFi) by seamlessly blending these two exciting domains into one innovative platform. Our mission is to create a vibrant ecosystem where gamers and crypto enthusiasts can thrive, learn, and earn together.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          Our vision is to empower individuals by providing them with opportunities to earn cryptocurrency through engaging and immersive gameplay. We believe in the transformative power of blockchain technology and aim to make it accessible and enjoyable for everyone.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            <h3 className="text-xl font-semibold">Play-to-Earn Gaming</h3>
            <p className="text-lg leading-relaxed">
              Dive into a world of fun and rewarding games where your skills and achievements translate into real-world value. With our Play-to-Earn model, you can earn cryptocurrency and unique digital assets (NFTs) just by playing.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold">NFT Marketplace</h3>
            <p className="text-lg leading-relaxed">
              Explore our dynamic NFT marketplace where you can buy, sell, and trade a variety of digital collectibles and in-game assets. Each NFT is unique and offers a tangible representation of your achievements within our games.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold">DeFi Integration</h3>
            <p className="text-lg leading-relaxed">
              Maximize your earnings with our integrated DeFi features. Stake your tokens, participate in yield farming, and take advantage of our secure and efficient blockchain infrastructure to grow your wealth while having fun.
            </p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold">Community and Education</h3>
            <p className="text-lg leading-relaxed">
              Join a thriving community of gamers, investors, and blockchain enthusiasts. Learn about the latest trends in blockchain technology, share your experiences, and collaborate with others to make the most out of your Web3 journey.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Web3Fruity?</h2>
        <ul className="list-disc pl-6">
          <li className="text-lg leading-relaxed mb-2">Innovative Gaming Experience: Enjoy a variety of games designed to entertain and reward you simultaneously.</li>
          <li className="text-lg leading-relaxed mb-2">Earning Opportunities: Turn your gaming skills into real cryptocurrency and valuable NFTs.</li>
          <li className="text-lg leading-relaxed mb-2">Secure and Transparent: Our platform is built on robust blockchain technology, ensuring security and transparency in all your transactions.</li>
          <li className="text-lg leading-relaxed mb-2">Community-Driven: Be part of a vibrant and supportive community that shares your passion for gaming and crypto.</li>
          <li className="text-lg leading-relaxed mb-2">Educational Resources: Access a wealth of resources to learn about blockchain, cryptocurrency, and DeFi.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The "New" Badge</h2>
        <p className="text-lg leading-relaxed">
          At Web3Fruity, we celebrate new and exciting content. When a new game or feature is launched, it gets a "NEW" badge, highlighting its freshness. This badge will stay for a week to ensure our community doesn't miss out on the latest updates.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Join Us Today!</h2>
        <p className="text-lg leading-relaxed">
          Whether you're a seasoned gamer, a crypto investor, or someone curious about the world of blockchain, Web3Fruity has something for you. Join us on this exciting journey and discover the future of gaming and decentralized finance.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          For more information, feel free to explore our platform or contact our support team. We're here to help you every step of the way.
        </p>
      </section>
    </div>
  );
};

export default About;




/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7lGpZyNITI2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Crypto Earnings</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Airdrops
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Farmable Tokens
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Play-to-Earn
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Rewards
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Education
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            News
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Crypto Earning Opportunities
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Discover a curated collection of the best airdrops, farmable tokens, play-to-earn games, task-based
                    rewards, educational content, and crypto news.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Explore Airdrops
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Farmable Tokens
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="airdrops" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">Airdrops</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Free Crypto Tokens</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover the latest airdrops and claim free cryptocurrency tokens. Stay ahead of the curve and grow
                  your portfolio.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Airdrops"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <GiftIcon className="mr-2 inline-block h-6 w-6" />
                        Claim Free Tokens
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Participate in airdrops and claim free cryptocurrency tokens.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <CalendarIcon className="mr-2 inline-block h-6 w-6" />
                        Stay Updated
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Get notified about the latest airdrop opportunities.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <WalletIcon className="mr-2 inline-block h-6 w-6" />
                        Grow Your Portfolio
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Expand your crypto holdings with free token airdrops.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="farmable-tokens" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  Farmable Tokens
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Earn Crypto by Farming</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover the best farmable tokens and earn passive income by providing liquidity or staking your
                  crypto assets.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Farmable Tokens"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <CoinsIcon className="mr-2 inline-block h-6 w-6" />
                        Earn Passive Income
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Provide liquidity or stake your crypto assets to earn rewards.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <TrendingUpIcon className="mr-2 inline-block h-6 w-6" />
                        Grow Your Portfolio
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Compound your earnings to increase your crypto holdings.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <WalletIcon className="mr-2 inline-block h-6 w-6" />
                        Diversify Your Investments
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Explore a variety of farmable tokens to diversify your portfolio.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="play-to-earn" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  Play-to-Earn
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Earn Crypto While You Play</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover the latest play-to-earn games and earn cryptocurrency rewards for your in-game achievements.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Play-to-Earn"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <GamepadIcon className="mr-2 inline-block h-6 w-6" />
                        Earn While You Play
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Participate in play-to-earn games and earn cryptocurrency rewards.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <TrophyIcon className="mr-2 inline-block h-6 w-6" />
                        Compete and Win
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Compete in tournaments and challenges to earn even more rewards.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        <WalletIcon className="mr-2 inline-block h-6 w-6" />
                        Grow Your Earnings
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Compound your earnings to increase your crypto holdings.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="rewards" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  Task-based Rewards
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Earn Crypto for Completing Tasks</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover opportunities to earn cryptocurrency rewards by completing simple tasks, surveys, or
                  participating in community activities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Task-based Rewards"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CoinsIcon(props) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
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


function GiftIcon(props) {
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
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TrendingUpIcon(props) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
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

<section id="task-based-rewards" className="w-full py-12 md:py-24 lg:py-32">
<div className="container px-4 md:px-6">
  <div className="flex flex-col items-center justify-center space-y-4 text-center">
    <div className="space-y-2">
      <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
        Task-Based Rewards
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Earn Crypto for Completing Tasks</h2>
      <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Earn cryptocurrency by completing simple online tasks, such as watching videos, participating in
        surveys, or engaging with social media.
      </p>
    </div>
  </div>
  <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
    <img
      src="/placeholder.svg"
      width="550"
      height="310"
      alt="Task-Based Rewards"
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
    />
    <div className="flex flex-col justify-center space-y-4">
      <ul className="grid gap-4">
        <li className="flex items-center gap-4">
          <VideoIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
          <div>
            <h3 />
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</section>