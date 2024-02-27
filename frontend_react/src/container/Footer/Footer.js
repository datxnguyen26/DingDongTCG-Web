import React, { useState } from 'react';


import { client } from '../../client';
import { AiFillFacebook } from 'react-icons/ai';
import './Footer.scss';
import { images } from '../../constants'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const orders = {
      _type: 'orders',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(orders)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='app__footer'>
      <h2 className="head-text">Questions & Feedbacks</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:datxnguyen26@gmail.com" className="p-text">dingdongtcg@gmail.com</a>
        </div>
        <div className="app__footer-card ">
          <a href="https://www.facebook.com/profile.php?id=100002475527570" target="_blank" rel='noreferrer'>
          <img src={images.facebook} alt="facebook" height={40} width={40} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100002475527570" target="_blank" className="p-text" rel='noreferrer'>Dat Nguyen </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  );
};

export default Footer;