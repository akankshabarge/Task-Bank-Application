import React from 'react';

function backbutton(props) {
  return (
    <button onClick={props.onClick} style={{ 
      padding: '10px 15px', 
      marginBottom: '20px',
      backgroundColor: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer'
    }}>
      ← Go Back
    </button>
  );
}

export default backbutton;