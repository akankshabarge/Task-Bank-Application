import React from 'react';
import Backbutton from '../components/Backbutton.js';

function Cardspage(props) {
  const { goHome } = props;

  const cards = [
    {
      type: 'Credit',
      number: '5678',
      holderName: 'Akanksha Barge',
      description: 'Can spend up to Rs 1000',
      backgroundColor: '#2196f3'
    },
    {
      type: 'Debit',
      number: '1234',
      holderName: 'Akanksha Barge',
      description: 'Can spend up to Rs 700',
      backgroundColor: '#2196f3'
    }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#e3f2fd', minHeight: '100vh' }}>
      <Backbutton onClick={goHome} />
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        borderRadius: '10px',
        maxWidth: '300px',
        margin: '0 auto'
      }}>
        <h1 style={{ color: '#1976d2', textAlign: 'center' }}>My Cards</h1>
        
        {cards.map(function(card, index) {
          return (
            <div key={index} style={{ 
              backgroundColor: card.backgroundColor, 
              color: 'white', 
              padding: '20px', 
              borderRadius: '10px',
              marginBottom: '15px'
            }}>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
                My {card.type} Card
              </p>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '20px' }}>
                **** **** **** {card.number}
              </h3>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                fontSize: '14px' 
              }}>
                <span>{card.holderName}</span>
              </div>
              <p style={{ margin: '10px 0 0 0', fontSize: '12px' }}>
                {card.description}
              </p>
            </div>
          );
        })}
        
        <div style={{
          backgroundColor:'#e3f2fd',
          padding: '15px',
          borderRadius: '5px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '0', color: '#2196f3', fontSize: '14px' }}>
            These are my cards to buy things!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cardspage;