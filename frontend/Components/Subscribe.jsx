import React, { useState } from 'react';
import axios from 'axios';
import { FaCheck } from 'react-icons/fa';

const Subscribe = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // New state for message type
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = async () => {
    try {
      if (!email) {
        setMessage('Please enter your email address.');
        return; // Prevent further execution if email is empty
      }
      const response = await axios.post('http://localhost:1225/subscribe', { email });
      setMessage('Subscription successful!');
      setMessageType('success'); // Set message type to success
      setIsSubscribed(true);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage('You are already subscribed.');
        setMessageType('error'); // Set message type to error
      } else {
        setMessage('Subscription failed. Please try again.');
        setMessageType('error'); // Set message type to error
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-[400px]">
        <h2 className="text-2xl mb-4">Subscribe</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        {isSubscribed ? (
          <div className="flex justify-center items-center text-green-500 mb-4">
            <FaCheck size={24} />
          </div>
        ) : (
          <button
            onClick={handleSubscribe}
            className="bg-blue-500 text-white p-2 rounded w-full mb-4"
          >
            Subscribe
          </button>
        )}
        {message && (
          <p className={`font-serif text-center my-3 ${messageType === 'success' ? 'text-blue-900' : 'text-red-500'}`}>
            {message}
          </p>
        )}
        <button onClick={onClose} className="bg-gray-500 text-white p-2 rounded w-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
