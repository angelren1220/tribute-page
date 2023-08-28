import '../styles/DonateButton.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import DonatePopup from './DonatePopup';

function DonateButton() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <div className='donate-button-container'>
      <FontAwesomeIcon icon={faHeart} className='heart-icon' onClick={openPopup} />
      <span className='button-text' onClick={openPopup}>Donate for her family</span>
      <DonatePopup isOpen={isPopupOpen} onRequestClose={closePopup} />
    </div>
  );
}

export default DonateButton;

