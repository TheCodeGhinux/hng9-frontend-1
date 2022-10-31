import React from "react";
// import { RWebShare } from "react-web-share";
import './profile.css'
import Share from './Share';
import img from '../../assets/profile__img.png'
// import img from '../../assets/'

const profile = () => {
  return (
    <div id='main'>
      <div className="profile__con">
        <div className="profile">
          <div id="profile__img">
            <img src={img} alt="" />
          </div>
          <div id="twitter">
            <h3>CodeGhinux</h3>
          </div>
          <div id="slack">
            <h3>CodeGhinux</h3>
          </div>
        </div>
        <Share />
      </div>
      <div className="links__section">
        <a href='https://twitter.com/codeghinux' id="twitter__link" className='link__tab'>
          <p>Twitter Link</p>
        </a>
        <a href='https://training.zuri.team/' id="btn__zuri" className='link__tab'>
          <p>Zuri Team</p>
        </a>
        <a href='http://books.zuri.team' id="books" className='link__tab'>
          <p>Zuri Books</p>
        </a>
        <a href='https://books.zuri.team/python-for-beginners?ref_id=CoeGhinux' id="books__python" className='link__tab'>
          <p>Python Books</p>
        </a>
        <a href='https://background.zuri.team' id="pitch" className="link__tab">
          <p>Background Check for Coders</p>
        </a>
        <a href='https://books.zuri.team/design-rules' id="book__design" className="link__tab">
          <p>Design Books</p>
        </a>
      </div>
    </div>
  )
}

export default profile