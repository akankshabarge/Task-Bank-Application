import React from 'react';
import Backbutton from '../components/Backbutton';

import Header from '../components/Header';


function Sendmoneypage(props) {
  const { goHome } = props;

  const quickSendOptions = [
    { recipient: 'Mom', message: 'Send to Mom!' },
    { recipient: 'Dad', message: 'Send to Dad!' },
    { recipient: 'Brother', message: 'Send to Brother!' },
    { recipient: 'Nupur', message: 'Send to Nupur!' }
  ];

  function handleQuickSend(message) {
    alert(message);
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#e3f2fd', minHeight: '100vh' }}>
      <Backbutton onClick={goHome} />
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        borderRadius: '10px',
        maxWidth: '300px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#1976d2' }}>Send Money</h1>
        
        <div style={{ marginTop: '30px', textAlign: 'left' }}>
          <h3>Contact Options:</h3>
          
          {quickSendOptions.map(function(option, index) {
            return (
              <button
                key={index}
                onClick={function() {
                  handleQuickSend(option.message);
                }}
                style={{ 
                  backgroundColor: '#1976d2', 
                  color: 'white', 
                  padding: '15px', 
                  width: '100%', 
                  fontSize: '16px',
                  border: 'none',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  cursor: 'pointer'
                }}
              >
                {option.recipient}
              </button>
            );
          })}
          
          <div style={{ 
            backgroundColor: '#e3f2fd', 
            padding: '15px', 
            borderRadius: '5px',
            textAlign: 'center'
          }}>
            <p style={{ margin: '0', color: '#1976d2', fontSize: '14px' }}>
              Click a button to send money
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sendmoneypage;