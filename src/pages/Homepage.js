import React from 'react';


import Header from '../components/Header.js';



function Homepage(props) {
  const { buttons, gotopage } = props;

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f8ff', 
      minHeight: '100vh',
      
      fontFamily: 'Arial, sans-serif'
    }}>
      <Header />


     
      <div style={{ 
        backgroundColor: '#2196f3', 
        color: 'white', 
        padding: '30px', 
        borderRadius: '10px', 
        textAlign: 'center', 
        marginBottom: '25px',
        maxWidth: '300px',
        margin: '0 auto 25px auto'
      }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
          Balance:
        </p>
        <h2 style={{ margin: '0', fontSize: '40px' }}>Rs 1500</h2>
        <p style={{ margin: '15px 0 0 0', fontSize: '14px' }}>
          Keep saving money!
        </p>
      </div>

      
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <h2 style={{ color: '#333', marginBottom: '15px', fontSize: '18px' }}>
          Actions:
        </h2>
        
        {buttons.map(function(button, index) {
          return (
            <button
              key={button.name}
              onClick={function() {
                gotopage(button.name);
              }}
              style={{
                backgroundColor: 'white',
                border: 'none',
                padding: '25px',
                borderRadius: '10px',
                marginBottom: '12px',
                width: '100%',
                fontSize: '18px',
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                  {button.title}
                  {index === 0 && button.count > 0 && <span> </span>}
                </div>
                {button.count > 0 && (
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Clicked {button.count} times
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;