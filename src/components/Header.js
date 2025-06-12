import React from 'react';

function header() {
  return (  
    <div style={{ 
      backgroundColor: 'white', 
      padding: '25px', 
      borderRadius: '10px', 
      textAlign: 'center', 
      marginBottom: '20px',
      maxWidth: '300px',
      margin: '0 auto 20px auto'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img 
        src="https://pngimg.com/uploads/bank/bank_PNG21.png" 
        alt="Bank Icon" 
        style={{ width: '30px', height: '30px' }} 
      />
      <h1 style={{ margin: '0', color: '#333', fontSize: '24px' }}>Bank Application</h1>
    </div>

      <p style={{ margin: '10px 0 0 0', color: '#666', fontSize: '16px' }}>
        Hello Akanksha Barge! 
      </p>
    </div>
  );
}

export default header;