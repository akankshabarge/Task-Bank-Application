import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage'
import Transactionpage from './pages/Transactionpage'
import Sendmoneypage from './pages/Sendmoneypage'
import Cardspage from './pages/Cardspage'


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
    return 'home';
  }

  // Function to update URL when pages change
  function updateURL(pageName) {
    let path;
    if (pageName === 'home') {
      path = '/';
    } else {
      path = '/' + pageName;
    }
    window.history.pushState({}, '', path);
  }

  // Function to get save clicks on localStorage

  function getSavedClicks() {
    const saved = localStorage.getItem('bank-app-clicks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.log('Error reading saved data');
      }
    }
    // Default values 
    return {
      money: 0,
      send: 0,
      cards: 0
    };
  }

  // State to track which page we are on
  const [page, setPage] = useState(getCurrentPageFromURL());
  
  // State to count clicks 
  const [clicks, setClicks] = useState(getSavedClicks);

  // Handle browser back and forward buttons
  useEffect(function() {
    function handlePopState() {
      setPage(getCurrentPageFromURL());
    }

    window.addEventListener('popstate', handlePopState);
    
    return function() {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Function to go to a specific page

  function gotopage(pageName) {
    
    const newClicks = {
      ...clicks,
      [pageName]: clicks[pageName] + 1
    };
    
    
    setClicks(newClicks);
    
    // Save to localStorage 
    localStorage.setItem('bank-app-clicks', JSON.stringify(newClicks));
    
    setPage(pageName);
    
    updateURL(pageName);
  }

  // Function to go back to home page

  function goHome() {
    setPage('home');
    updateURL('home');
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
      title: 'Send Money', 
      count: clicks.send 
    },
    { 
      name: 'cards', 
      title: 'My Cards', 
      count: clicks.cards 
    }
  ];
  
  // Sorting buttons by click count 
  buttons.sort(function(a, b) {
    return b.count - a.count;
  });


  console.log('Current clicks:', clicks);
  console.log('Sorted buttons:', buttons);

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
