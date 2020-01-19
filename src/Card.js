import React, { component } from 'react';
import engineerLogo from './img/engineer.svg';
import favoriteIcon from './img/favorite.svg';
import calIcon from './img/cal.svg';
import star from './img/star.svg';
import dropdown from './img/dropdown.svg';
import user from './img/user.svg';
import share from './img/share.svg';
import Round from './Round';

const Card = ({ detail }) => {
  const favorite = detail.favorite ? (
    <img className='favorite' src={favoriteIcon} />
  ) : (
    <img className='favorite favorite-grey' src={favoriteIcon} />
  );

  const round = detail.open.map((isOpen, index) => (
    <Round isOpen={isOpen} number={index + 1}></Round>
  ));

  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-head'>
          <img className='logo' src={engineerLogo} />
          <div className='card-head-detail'>
            <div className='faculty'> {detail.faculty} </div>
            <div className='department'> {detail.department} </div>
            <div className='university'> {detail.university} </div>
          </div>
          {favorite}
        </div>
        <hr />
        <div className='body-1'>
          <div className='body-1-1'>
            <div className='body-1-1-1'>รอบที่เปิด </div>
            {round}
          </div>
          <div className='body-1-2'>
            รอบที่ {detail.round}
            <div>
              <p>แก้ไขคะแนน</p>
              <img src={calIcon} />
            </div>
          </div>
          <div className='body-1-3'>
            <img src={star} />
            <div className='your-score'>
              <p>คะแนนของคุณคือ</p>
              <div className='score'>{detail.yourscore}</div>
            </div>
          </div>
          <div className='body-1-4'>
            <div className='body-1-4-1'>
              {detail.minscore60}
              <p>คะแนนต่ำสุด 60</p>
            </div>
            <div className='vertical-line'></div>
            <div className='body-1-4-1'>
              {detail.avgscore60}
              <p>คะแนนเฉลี่ย 60</p>
            </div>
            <div className='vertical-line'></div>
            <div className='body-1-4-1'>
              {detail.maxscore60}
              <p>คะแนนสูงสุด 60</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='body-2'>
          <img src={dropdown} />
          <p>ดูสัดส่วนคะแนน</p>
        </div>
        <hr />
        <div className='body-3'>
          <div className='body-3-1'>
            <img src={user} />
            <div> {detail.interested}</div>
            <p> คนที่สนใจ</p>
          </div>
          <img src={share} />
        </div>
        <br />
      </div>
    </div>
  );
};

export default Card;
