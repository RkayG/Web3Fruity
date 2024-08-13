import React, { useState } from 'react';
import axios from 'axios';
import { FaCheck, FaTimes, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Subscribe = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setMessage('Please enter your email address.');
      setMessageType('error');
      return;
    }
    try {
      await axios.post(`${apiUrl}/subscribe`, { email });
      //setMessage('Subscription successful!');
      setMessageType('success');
      setIsSubscribed(true);
    } catch (error) {
      setMessage(error.response?.status === 409 ? 'You are already subscribed.' : 'Subscription failed. Please try again.');
      setMessageType('error');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">Stay Connected</h2>
        <p className="text-blue-900/80 text-center mb-6">
          Get exclusive updates and insights delivered to your inbox.
        </p>
        <div className="relative mb-6">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-3 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <AnimatePresence>
          {isSubscribed ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-center items-center text-[green] mb-4"
            >
              <FaCheck size={24} className="mr-2" />
              <span className="text-lg font-semibold">Subscribed Successfully!</span>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubscribe}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Subscribe Now
            </motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
           {message && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`text-center mt-4  font-semibold ${messageType === 'success' ? 'text-green-600' : 'text-red-700'}`}
            >
              {message}
            </motion.p>
          )} 
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Subscribe;