import React from 'react';
import Backbutton from '../components/Backbutton.js';

function Transactionpage(props) {
  const { goHome } = props;

  const transactions = [
    { description: 'Coffee', amount: '5' },
    { description: 'Lunch', amount: '12' },
    { description: 'Bus ticket', amount: '10' }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#e3f2fd', minHeight: '100vh' }}>
      <Backbutton onClick={goHome} />
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        borderRadius: '10px', 
        textAlign: 'center',
        maxWidth: '300px',
        margin: '0 auto'
      }}>
        <h1 style={{ color: '#1976d2' }}>Transaction Details</h1>
        
        <div style={{ 
          backgroundColor: '#1976d2', 
          color: 'white', 
          padding: '25px', 
          borderRadius: '10px',
          marginBottom: '20px'
        }}>
          <p style={{ margin: '0 0 10px 0' }}>Balance:</p>
          <h2 style={{ margin: '0', fontSize: '36px' }}>Rs 1500</h2>
        </div>
        
        <p style={{ color: '#666', marginBottom: '20px' }}>Account: ****1234</p>
        
        <div style={{ textAlign: 'left' }}>
          <h3>Todays Spending:</h3>
          {transactions.map(function(transaction, index) {
            return (
              <div key={index} style={{ 
                backgroundColor: '#f5f5f5', 
                padding: '15px', 
                borderRadius: '5px', 
                marginBottom: '10px' 
              }}>
                <p style={{ margin: '0', fontSize: '16px' }}>
                  {transaction.description}: Rs {transaction.amount}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Transactionpage;