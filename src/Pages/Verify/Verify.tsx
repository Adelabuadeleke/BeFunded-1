import React from 'react';
import './Verify.css';
import BefundedLogo from '../../assets/BeFunded.svg';

const Verify = () => {
  return (
    <div className="verify">
        <div className="verify__logo">
            <img src={BefundedLogo} alt="Befunded" />
        </div>

        <div className="verify__container">
            <h1 className="verify__containerHeader">Verify Email Address</h1>

            <div className="verify__body">
                <p>Your Account has been created Successfully. Check your email to verify your account and continue to app.</p>
            </div>

            <button className="verify__button">Log in to continue</button>

            <p className="verify__mail">View Mail</p>
        </div>
    </div>
  )
}

export default Verify