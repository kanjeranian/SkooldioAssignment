import React from 'react';
import PrevScore from './PrevScore';
import engineerLogo from './img/engineer.svg';
import favoriteIcon from './img/favorite.svg';
import unFavoriteIcon from './img/un-favorite.svg';
import calIcon from './img/cal.svg';
import star from './img/star.svg';
import dropdown from './img/dropdown.svg';
import user from './img/user.svg';
import share from './img/share.svg';
import Round from './Round';

function toCommas(value) {
  if (value == undefined) return '-';
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const VerticalLine = ({}) => <div className='vertical-line'></div>;

const Card = ({ detail }) => {
  const favorite = detail.favorite ? favoriteIcon : unFavoriteIcon;
  const round = detail.openRound.map((isOpen, index) => (
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
          <img className='favorite' src={favorite} />
        </div>
        <hr />
        <div className='body-1'>
          <div className='open-round-container'>
            <div className='open-round'>รอบที่เปิด </div>
            {round}
          </div>
          <div className='round'>
            รอบที่ {detail.round}
            <div className='edit-score-botton'>
              <p>แก้ไขคะแนน</p>
              <img src={calIcon} />
            </div>
          </div>
          <div className='your-score-container'>
            <img src={star} />
            <div className='your-score'>
              <p>คะแนนของคุณคือ</p>
              <div className='score'>{toCommas(detail.yourscore)}</div>
            </div>
          </div>
          <div className='prev-score'>
            <PrevScore
              score={toCommas(detail.minscore60)}
              text='คะแนนต่ำสุด 60'
            />
            <VerticalLine />
            <PrevScore
              score={toCommas(detail.avgscore60)}
              text='คะแนนเฉลี่ย 60'
            />
            <VerticalLine />
            <PrevScore
              score={toCommas(detail.maxscore60)}
              text='คะแนนสูงสุด 60'
            />
          </div>
        </div>
        <hr />
        <div className='body-2'>
          <img src={dropdown} />
          <p>ดูสัดส่วนคะแนน</p>
        </div>
        <hr />
        <div className='body-3'>
          <div className='interested'>
            <img src={user} />
            <div> {toCommas(detail.interested)}</div>
            <p> คนที่สนใจ</p>
          </div>
          <img className='share' src={share} />
        </div>
      </div>
    </div>
  );
};

export default Card;
