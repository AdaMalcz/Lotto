import React from 'react';
import { generateBets } from '../systems/multi/SystemMulti_5-17-68';
import { MDBRow, MDBCol } from 'mdbreact';

import MultiDescription from '../components/MultiDescription';
import SystemDescription from '../components/SystemDescription';
import NumbersInput from '../components/NumbersInput';
import Bets from '../components/Bets';

class System extends React.Component {
  state = {
      myNumbers: '',
      myBets: '',
  };

  setMyNumbers = numbers => {
    this.setState({ myNumbers: numbers.sort(function(a, b){return a-b}) });
  };

  setMyBets = numbers => {
    this.setState({ myBets: generateBets(numbers) });
  };

  render() {
    return (
      <>
        <MDBRow>
          <MDBCol md="6"><MultiDescription /></MDBCol>
          <MDBCol md="6"><SystemDescription /></MDBCol>
        </MDBRow>
        <NumbersInput setMyNumbers={this.setMyNumbers} setMyBets={this.setMyBets} />
        <Bets myNumbers={this.state.myNumbers} myBets={this.state.myBets}/>
      </>
    );
  };

}

export default System;