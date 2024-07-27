import React, { useState } from 'react';
import axios from 'axios';
import { FaCheck, FaEnvelope, FaSignature } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const BottomSubscribe = () => {
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
      await axios.post('http://localhost:1225/subscribe', { email });
      setMessage('Subscription successful!');
      setMessageType('success');
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      setMessage(error.response?.status === 409 ? 'You are already subscribed.' : 'Subscription failed. Please try again.');
      setMessageType('error');
    }
  };

  return (
    <section className="w-full bg-gradient-to-t from-blue-400 to-white py-16 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-900">
            Stay Ahead of the Curve
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Subscribe now and be the first to know about exciting events and lucrative opportunities!
          </p>
          <AnimatePresence>
            {!isSubscribed ? (
              <motion.form
                key="subscribeForm"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-10 w-full max-w-md"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full border-2 border-blue-300 bg-white py-3 pl-12 pr-32 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
                  <button
                    onClick={handleSubscribe}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </div>
                {message && messageType === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-center text-red-600"
                  >
                    {message}
                  </motion.p>
                )}
              </motion.form>
            ) : (
              <motion.div
                key="successMessage"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mt-10 w-full max-w-md bg-green-100 rounded-lg p-6 shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 rounded-full p-3 mb-4">
                    <FaCheck className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">You're In!</h3>
                  <p className="text-green-700 text-center mb-4">
                    Thank you for subscribing. Get ready for exclusive updates and opportunities!
                  </p>
                  <div className="flex justify-center">
                    <FaSignature className="text-green-500 text-4xl mr-2" />
                    <FaSignature className="text-blue-500 text-4xl" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomSubscribe;