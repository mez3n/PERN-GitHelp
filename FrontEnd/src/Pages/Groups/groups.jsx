import React from 'react';
import './groups.css';

export const Groups = () => {
  const buttonsData = [
    { imagePath: '/images/button1.jpg', text: 'Button 1', action: handleButton1Action },
    { imagePath: '/images/button2.jpg', text: 'Button 2', action: handleButton2Action },
    { imagePath: '/images/button3.jpg', text: 'Button 3', action: handleButton3Action },
    { imagePath: '/images/button4.jpg', text: 'Button 4', action: handleButton4Action },
    { imagePath: '/images/button5.jpg', text: 'Button 5', action: handleButton5Action },
    { imagePath: '/images/button6.jpg', text: 'Button 6', action: handleButton6Action },
  ];

  // Individual action functions for each button
  function handleButton1Action() {
    // Action for Button 1
    console.log("Button 1 clicked!");
    // Add your custom logic here
  }

  function handleButton2Action() {
    // Action for Button 2
    console.log("Button 2 clicked!");
    // Add your custom logic here
  }

  function handleButton3Action() {
    // Action for Button 3
    console.log("Button 3 clicked!");
    // Add your custom logic here
  }

  function handleButton4Action() {
    // Action for Button 4
    console.log("Button 4 clicked!");
    // Add your custom logic here
  }

  function handleButton5Action() {
    // Action for Button 5
    console.log("Button 5 clicked!");
    // Add your custom logic here
  }

  function handleButton6Action() {
    // Action for Button 6
    console.log("Button 6 clicked!");
    // Add your custom logic here
  }

  return (
      <div className='grid-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        {buttonsData.map((button, index) => (
          <div className="grid-item" key={index}>
            <div>
              <img src={button.imagePath} alt={`Group ${index + 1}`} />
              <p>{button.text}</p>
            </div>
            <button className='b-button' onClick={button.action}>{index+1}</button>
          </div>
        ))}
      </div>
  );
};

export default Groups;