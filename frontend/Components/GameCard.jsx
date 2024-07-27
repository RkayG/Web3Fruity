import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from 'react-dom';
import { FaTwitter, FaFacebook, FaDiscord, FaTelegram, FaReddit, FaGlobe, FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useRouter } from 'next/router';
import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";



//========== truncate function for game.description
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }; // ========== end



const GameCard = ({ game }) => {
    const targetRef = React.createRef();

    return (
      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden m-auto mb-4 transition-shadow duration-300"
          style={{ width: "100%" }}
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden m-auto lg:p-8 mb-4 border-2 border-gray-200
          hover:border hover:border-blue-500 transition-all duration-300" style={{ width: "95%" }}>
            <div className="flex">
              <img className="w-24 h-24 lg:w-40 lg:h-auto rounded-2xl m-4 lg:m-0 lg:rounded-md lg:mr-6" src={game.image} alt={game.title} />
              <div className="ml-4 flex-1">
                <div className="title-and-view-button-container flex">
                  <h2 className="w-48 mt-4 lg:mt-0  text-xl lg:text-2xl font-bold text-blue-900 cursor-pointer lg:w-60">{game.title}</h2>
                  <Link href={`/games/${game.slug}`}>
                    <span className="hidden lg:block lg:static lg:ml-20 active:bg-ble-100
                    text-sm font-semibold py-1 px-4 bg-blue-100 text-blue-800 rounded-full cursor-pointer hover:bg-blue-200 transition-colors duration-300" style={{ border: "1px solid blue", left: "11%" }}>
                      View
                    </span>
                  </Link>
                </div>

                <div className="flex items-center mt-2">
                  <a href={game.website} className="mb-2 mr-3"><FaGlobe title={game.website} /></a>
                  {game.socialLinks.map((link, index) => {
                    let icon;
                    if (link.includes("twitter.com")) {
                      icon = <FaTwitter title={link} />;
                    } else if(link.includes("x.com")) {
                      icon = <FaTwitter title={link} />
                    }
                    else if (link.includes("facebook.com")) {
                      icon = <FaFacebook title={link} />;
                    } else if (link.includes("discord.coom") || link.includes("discord.gg")) {
                      icon = <FaDiscord title={link} />;
                    } else if (link.includes("telegram.com") || link.includes("t.me")) {
                      icon = <FaTelegram title={link} />;
                    } else if (link.includes("reddit.com")) {
                      icon = <FaReddit title={link} />;
                    }
                    return (
                      <a key={index} href={link} className="mr-3 mb-2 hover:text-blue-600 transition-colors duration-300">
                        {icon}
                      </a>
                    );
                  })}
                </div>
                <p className="text-sm text-blue-900 font-semibold">Developer: {game?.developer}</p>
                <p className="mt-2 w-auto pr-3 text-xs md:text-sm lg:text-sm lg:w-2/4 h-20">{truncateText(game?.description, 160)}</p>
              </div>
            </div>
            <a href={game.website}>
            <Link href={`/games/${game.slug}`} passHref>
              <span className="lg:hidden font-semibold relative text-sm ml-6 py-1 -top-8 text-blue-900 rounded-2xl px-6 cursor-pointer hover:bg-blue-50 active:bg-blue-100" style={{ border: "1px solid blue" }}>
                View
              </span>
            </Link>
            </a>
            <div className="overflow-x-auto w-auto pt-6 pl-6 rounded-t-none rounded-b-md lg:rounded-md shadow-md bg-gray-200">
              <div className="lg:flex lg:flex-wrap lg:justify-center scrollbar-track-gray-200 scrollbar-thin inline-flex scrollbar-thumb-red-900" style={{ maxHeight: "150px", overflowY: "auto" }}>
                <div className="bg-white text-blue-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
                  <p className="text-sm font-semibold text-center">Genre</p>
                  <p className="text-center font-semibold text-xs">{game?.genre}</p>
                </div>
                <div className="bg-white text-green-800 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
                  <p className="text-sm font-semibold text-center">Platform</p>
                  <p className="text-center font-semibold text-xs">{game?.platform.length > 1 ? game?.platform.join(', ') : game?.platform}</p>
                </div>
                <div className="bg-white text-red-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md relative">
                  <p className="text-sm font-semibold text-center">Token</p>
                  <p className="text-center flex flex-wrap justify-center font-semibold text-xs cursor-pointer"
                    /*  onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    ref={targetRef} */
                  >
                    {game?.token}
                  
                    {/* <div className="ml-1 py-[3px]">
                      <FaAngleUp
                        className={`cursor-pointer ${showTooltip ? 'block' : 'hidden'}`}
                        onClick={() => setShowTooltip(false)}
                      />
                      <FaAngleDown
                        className={`cursor-pointer ${showTooltip ? 'hidden' : 'block'}`}
                        onClick={() => setShowTooltip(true)}
                      />
                    </div> */}
                  </p>
                  {/* {showTooltip && <RewardTooltip game={game} targetRef={targetRef} />} */}
                </div>
                <div className="bg-white text-blue-900 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
                  <p className="text-sm font-semibold text-center">Free-to-Play</p>
                  <p className="text-center font-semibold text-xs">{game?.free2play ? "Yes" : "No"}</p>
                </div>
                <div className="bg-white text-green-800 px-4 py-2 mr-6 mb-6 w-36 rounded-md shadow-md">
                  <p className="text-sm font-semibold text-center">Chain</p>
                  <p className="text-center font-semibold text-xs">{game?.chain || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
    );
  };

export default GameCard;