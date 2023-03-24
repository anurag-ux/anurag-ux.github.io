import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import './stylesheets/Movetotop.css'

const MoveToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      style={{ display: showButton ? 'block' : 'none' }}
      id="move-to-top-btn"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );  
}

export default MoveToTopButton;
