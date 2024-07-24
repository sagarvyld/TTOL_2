import React, { useState, useRef, useEffect } from 'react';

const SkipBox = ({ skip, setskip }) => {
  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setskip(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="skip_container">
      <div className="main_Skip"></div>
      <div className="the_skip_box"  ref={divRef}>
        <p className="skip_heading">Sure you want to skip?</p>
        <p className="skip_text">We'll save this challenge for you</p>
        <div className="skip_buttons">
          <buttons className="Skip_it">Skip</buttons> {/* Corrected 'buttons' to 'button' */}
          <button className="cancel_it" onClick={() => setskip(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SkipBox;
