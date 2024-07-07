import React, { useState } from 'react';
import axios from 'axios';
import { FaCheck} from 'react-icons/fa';
import { Close } from '../Components';

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
      console.log(email);
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
      
      <div className="bg-white py-8 rounded-md shadow-lg w-[400px] lg:w-[600px] md:w-[500px]">
      <button onClick={onClose} className=" relative float-right top-[-32px] p-2 bg-gray-200 hover:bg-gray-300 rounded-tr-md">
          <Close />
        </button>
        <h2 className="text-2xl ml-6 font-bold text-center text-[blue-900]">Subscribe to our newsletter</h2>
        <p className="text-blue-900/80 text-center mb-7 ml-6">
          Get the latest updates and insights delivered to your inbox.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-500 m-4 rounded-md  p-3 w-[80%] flex mx-auto"
        />
        {isSubscribed ? (
          <div className="flex justify-center items-center text-green-500 mb-4">
            <FaCheck size={24} />
          </div>
        ) : (
          <button
            onClick={handleSubscribe}
            className="bg-blue-500 hover:bg-blue-600  text-white p-3 rounded-md w-56 flex justify-center items-center mx-auto m-4"
          >
            Subscribe
          </button>
        )}
        {message && (
          <p className={` text-center my-3 ${messageType === 'success' ? 'text-blue-900' : 'text-red-700'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
