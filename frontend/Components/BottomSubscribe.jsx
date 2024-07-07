import React, { useState } from 'react';
import axios from 'axios';
import { FaCheck} from 'react-icons/fa';
import { Close } from '../Components';

const BottomSubscribe = () => {
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
    <section className="w-full bg-gradient-to-t from-blue-300 to-white py-12 md:py-16 lg:py-20 z-[500]">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-orange-900">Get updates before anyone else</h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Subscribe to our newsletter to stay updated on the latest events and earning opportunities.
          </p>
          <form className="mt-8 w-full max-w-md">         
            <div className="flex flex-wrap items-center p-1 rounded-md bg-white shadow-sm dark:bg-gray-950">
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-l-md mr-2 border-0 bg-transparent py-3 pl-4 text-gray-900 focus:ring-0"
              />
                <p
                    onClick={handleSubscribe}
                    type='Submit'
                className="rounded-r-md bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 hover:ring-1 hover:ring-white focus:ring-white cursor-pointer"
              >
                Subscribe
              </p>
               
            </div>
             {message && (
                 <p className={` text-center my-3 ${messageType === 'success' ? 'text-blue-900' : 'text-red-700'}`}>
                   {message}
                 </p>
               )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default BottomSubscribe;