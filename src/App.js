import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  state = {
    faculty: 'คณะวิศวกรรมศาสตร์',
    department: 'สาขาวิศวกรรมทั่วไป',
    university: 'จุฬาลงกรณ์มหาวิทยาลัย',
    favorite: 1,
    open: [1, 1, 0, 1, 0],
    round: '4 : Admission',
    yourscore: '23,453',
    minscore60: '20,845',
    avgscore60: '21,345',
    maxscore60: '23,415',
    interested: 10
  };
  render() {
    return (
      <div class='bg'>
        <Card detail={this.state} />
        <Card detail={this.state} />
      </div>
    );
  }
}

export default App;
