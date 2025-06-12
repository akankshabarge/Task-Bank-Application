import React, { useState, useEffect } from 'react';

import Homepage from './pages/Homepage';
import Transactionpage from './pages/Transactionpage';
import Sendmoneypage from './pages/Sendmoneypage';
import Cardspage from './pages/Cardspage';



function App() {
  // Function to check which page we are on from URL
  function getCurrentPageFromURL() {

    const path = window.location.pathname;
    if (path === '/money') {
      return 'money';
    }
    if (path === '/send') {
      return 'send';
    }
    if (path === '/cards') {
      return 'cards';
    }
    return 'Home';
  }

  // Function that update URL when pages change
  function updateURL(pageName) {
    let path;
    if (pageName === 'Home') {
      path = '/';
    } else {
      path = '/' + pageName;
    }
    window.history.pushState({}, '', path);
  }

  
  const [page, setPage] = useState(getCurrentPageFromURL());
  
  

  const [clicks, setClicks] = useState({
    money: 0,
    send: 0,
    cards: 0
  });

  // Handle browser back and forward buttons

  useEffect(function() {
    function handlePopState() {
      setPage(getCurrentPageFromURL());
    }

    window.addEventListener('propstate', handlePopState);
    
    // Cleanup function
    
    return function() {
      window.removeEventListener('propstate', handlePopState);
    };
  }, []);

  // Function to go to a specific page
  function gotopage(pageName) {
    // Update click count
    setClicks({
      ...clicks,
      [pageName]: clicks[pageName] + 1
    });
    
    // Change page
    setPage(pageName);
    
    // Update URL
    updateURL(pageName);
  }

  // Function to go back to home page
  function goHome() {
    setPage('Home');
    updateURL('Home');
  }

  // Created array for button data
  const buttons = [
    { 
      name: 'money', 
      title: 'Transactions', 
      count: clicks.money 
    },
    { 
      name: 'send', 
      title: 'Send money', 
      count: clicks.send 
    },
    { 
      name: 'cards', 
      title: 'My Cards', 
      count: clicks.cards 
    }
  ];
  
  // Sorting buttons by click count (most clicked first)
  buttons.sort(function(a, b) {
    return b.count - a.count;
  });

  // Page Routing
  if (page === 'money') {
    return <Transactionpage goHome={goHome} />;
  }

  if (page === 'send') {
    return <Sendmoneypage goHome={goHome} />;
  }

  if (page === 'cards') {
    return <Cardspage goHome={goHome} />;
  }

  // Default: Home Page
  return <Homepage buttons={buttons} gotopage={gotopage} />;
}

export default App;