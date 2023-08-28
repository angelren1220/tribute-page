import '../styles/DonateButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function DonateButton() {
  return (
    <div className='donate-button-container'>
      <FontAwesomeIcon icon={faHeart} className='heart-icon' />
      <span className='button-text'>Donate for her family</span>
    </div>
  );
}

export default DonateButton;
