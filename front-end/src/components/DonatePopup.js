import '../styles/DonatePopup.scss';
import { useState } from 'react';
import Modal from 'react-modal';
import stripe from '../utils/stripe';

Modal.setAppElement('#root');

function DonatePopup({ isOpen, onRequestClose }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCVC] = useState('');

  const handlePayment = async () => {
    const token = await stripe.createToken({
      card: {
        number: cardNumber,
        exp_month: expiry.split('/')[0],
        exp_year: expiry.split('/')[1],
        cvc,
      },
    });

    // Handle the token and make a payment with it
    // You can use fetch or your preferred HTTP library to send the token to your server for processing
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="popup-content"
      overlayClassName="popup-overlay"
    >
      <button className="close-button" onClick={onRequestClose}>x</button>
      <h2>Thanks for your donate!</h2>
      <form>
        <input type="text" placeholder="Card Number" onChange={e => setCardNumber(e.target.value)} />
        <input type="text" placeholder="Expiry (MM/YY)" onChange={e => setExpiry(e.target.value)} />
        <input type="text" placeholder="CVC" onChange={e => setCVC(e.target.value)} />
        <button onClick={handlePayment}>Donate</button>
      </form>
    </Modal>
  );
}

export default DonatePopup;
