import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import LieRectangel from '../components/LieRectangel';
import WhiteRectangle from '../components/WhiteRectangle';
import PinkRectangle from '../components/PinkReactangle';
import RedRectangle from '../components/RedRectangle';
import './SpotPage.css';
import profile from '../assests/Profile.png';
import Confetti from 'react-confetti';

const statements = [
  { text: "I have a Black belt in Karate", isLie: false },
  { text: "I have ghosted a celebrity in DMs", isLie: false },
  { text: "I have accidentally texted a meme to my boss", isLie: true }
];

const SpotPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [resultText, setResultText] = useState("Can you spot the lie? 😜");
  const [resultTextSm, setResultTextSm] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [win, setWin] = useState(false);

  const handleSelect = (index) => {
    if (submitted) return; // Prevent selection if already submitted
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    setSubmitted(true);

    if (statements[selectedIndex].isLie) {
      setResultText("Woohoo 😎");
      setResultTextSm("You caught their lie");
      setWin(true);
    } else {
      setResultText("Oh no! 😭");
      setResultTextSm("You chose the wrong lie");
    }
  };

  const confettiSubmit = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
  };

  useEffect(() => {
    if (win) {
      confettiSubmit();
    }
  }, [win]);

  const renderRectangle = (index) => {
    const statement = statements[index];

    return (
      <ReactCardFlip
        isFlipped={selectedIndex === index && submitted}
        flipDirection="vertical"
        key={index}
      >
        {/* Front of the card */}
        <div className="card" onClick={() => handleSelect(index)}>
          {submitted ? (
            statement.isLie ? (
                selectedIndex===index?(
              <WhiteRectangle text={statement.text} isTrue={false} />
                ):(
                    <PinkRectangle text={statement.text}  isTrue={false}  />
                )
            ) : (
                selectedIndex===index?(
              <WhiteRectangle text={statement.text} isTrue={true} />
                ):(
                    <LieRectangel text={statement.text}/>
                )
            )
          ) : (selectedIndex!==index?(
                
            <LieRectangel text={statement.text} />
          ):(<WhiteRectangle text={statement.text} />)
          )}
        </div>

        {/* Back of the card */}
        <div className="card" onClick={() => handleSelect(index)}>
          {submitted ? (
            statement.isLie ? (
              <PinkRectangle text={statement.text} isTrue={true} />
            ) : (
              <RedRectangle text={statement.text} /> // Corrected component name
            )
          ) : (
           <WhiteRectangle text={statement.text}/>
          )}
        </div>
      </ReactCardFlip>
    );
  };
  return (
    <div className='SpotPage'>
      {showConfetti && <Confetti />}
      <div className="spot_page_upper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.165 11.9934L13.1634 11.6393C13.1513 10.2348 13.0666 8.98174 12.9206 8.18763C12.9206 8.17331 12.7613 7.38572 12.6599 7.12355C12.5006 6.74463 12.2126 6.42299 11.8515 6.2192C11.5624 6.0738 11.2592 6 10.9417 6C10.6922 6.01157 10.2806 6.13714 9.98692 6.24242L9.74283 6.33596C8.12612 6.97815 5.03561 9.07656 3.85199 10.3598L3.76473 10.4495L3.37527 10.8698C3.12982 11.1915 3 11.5847 3 12.0077C3 12.3866 3.11563 12.7656 3.3469 13.0718C3.41614 13.171 3.52766 13.2983 3.62693 13.4058L4.006 13.8026C5.31046 15.1243 8.13485 16.9782 9.59883 17.5924C9.59883 17.6057 10.5086 17.9857 10.9417 18H10.9995C11.6639 18 12.2846 17.6211 12.6021 17.0086C12.6888 16.8412 12.772 16.5132 12.8352 16.2252L12.949 15.6813C13.0788 14.8067 13.165 13.465 13.165 11.9934ZM19.4967 13.5183C20.3269 13.5183 21 12.8387 21 12.0004C21 11.1622 20.3269 10.4825 19.4967 10.4825L15.7975 10.8097C15.1463 10.8097 14.6183 11.3417 14.6183 12.0004C14.6183 12.6581 15.1463 13.1912 15.7975 13.1912L19.4967 13.5183Z" fill="white" />
        </svg>
        <button className='spot_upper_Skip'>Skip</button>
      </div>
      <p className='spot_heading'>{resultText}</p>
      {submitted && (
        <p className={`spot_heading-sm ${!win ? 'spot_heading-sm-wrong' : ''}`}>
          {resultTextSm}
        </p>
      )}
      <div className="LieRectangles">
        <div onClick={() => handleSelect(0)} className="card-container">
          {renderRectangle(0)}
        </div>
        <div className="LieRectangle2">
          <div onClick={() => handleSelect(1)} className="card-container">
            {renderRectangle(1)}
          </div>
          <div className='i' onClick={() => handleSelect(2)} >
            {renderRectangle(2)}
          </div>
        </div>
      </div>
      {!submitted  && (
        <div className="Lie_Information">
          <div className="User_picture">
            <img src={profile} alt="User" />
          </div>
          <div className="User_text">
            Wow !! that’s a tough one and I have managed something let’s see if you get it
          </div>
        </div>
      )}
      {!submitted && (
        <button className='SpotPage_Submit' onClick={handleSubmit} style={{ opacity: selectedIndex === null ? 0.3 : 1 }}>
          Submit
        </button>
      )}
    </div>
  );
};

export default SpotPage;