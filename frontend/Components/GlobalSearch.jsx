import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const SearchBar = ({ isOpen, setIsOpen, mobile = false }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {   
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log('Searching for:', searchQuery);
    
    if (searchQuery.trim()) {
      try {
        router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      } catch (error) {
        console.error('Error navigating to search page:', error);
      }
    }
    
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`${mobile ? 'mt-4' : 'absolute top-full mt-2'} mx-[10%] top-30 w-[80%] bg-white shadow-md rounded-lg`}
        >
          <form onSubmit={handleSearch} className="flex items-center p-2">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-200">
              <FaSearch />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchBar;