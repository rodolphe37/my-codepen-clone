/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css'

function Footer() {
  return (
    <div>
      <div className="footer__wrapper">
        <div className="footer__list">
          <div className="footer__teams">
            <a href="#">
              CodePen for  <span className="footer__boldTextList"> TEAMS</span>
            </a>
          </div>
          <div className="footer__education">
            <a href="#">
              CodePen for  <span className="footer__boldTextList"> EDUCATION</span>
            </a>
          </div>
          <div className="footer__privacy">
            <a href="#">
              Codepen for  <span className="footer__boldTextList"> PRIVACY</span>
            </a>
          </div>
          <div className="footer__writing">
            <a href="#">
              Codepen for  <span className="footer__boldTextList"> WRITING</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
