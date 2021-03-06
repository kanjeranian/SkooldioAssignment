import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div class='bg'>
        <Card
          detail={{
            faculty: 'คณะวิศวกรรมศาสตร์',
            department: 'สาขาวิศวกรรมทั่วไป',
            university: 'จุฬาลงกรณ์มหาวิทยาลัย',
            favorite: 1,
            openRound: [1, 1, 0, 1, 0],
            round: '4 : Admission',
            yourscore: 23453,
            minscore60: 20845,
            avgscore60: 21345,
            maxscore60: 23415,
            interested: 10
          }}
        />
        <Card
          detail={{
            faculty: 'คณะวิศวกรรมศาสตร์',
            department: 'สาขาวิศวกรรมทั่วไป',
            university: 'จุฬาลงกรณ์มหาวิทยาลัย',
            favorite: 1,
            openRound: [1, 1, 0, 1, 0],
            round: '4 : Admission',
            yourscore: 23453,
            minscore60: 20845,
            avgscore60: 21345,
            maxscore60: 23415,
            interested: 10
          }}
        />
      </div>
    );
  }
}

export default App;
