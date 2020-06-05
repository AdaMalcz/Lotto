import React from 'react';
import { MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import Bet from './Bet';

const Bets = props => {
  return (
    <>
      {props.myNumbers === '' ? <p>Podaj <strong>17</strong> <em>różnych</em> liczb z zakresu <strong>1-80</strong>.</p> : 
        <MDBRow className="mb-2">
          <MDBCol md="2"></MDBCol>
          <MDBCol md="2">Twoje liczby:</MDBCol>
          <MDBCol md="4">{ props.myNumbers.join(', ') }</MDBCol>
          <MDBCol md="2">68 zakładów (x5 liczb)</MDBCol>
          <MDBCol md="2"></MDBCol>
        </MDBRow>}
      
      <MDBRow className="my-4">
        <MDBCol md="2"></MDBCol>
        <MDBCol md="8">
          <MDBTable className="text-center table-fixed">
            <MDBTableHead>
              <tr>
                <th>Zakłady</th>
                <th colSpan="5">Liczby do skreślenia</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {props.myBets === '' ? <tr className='text-danger'><td colSpan="6">Wpisz swoje liczby i wygeneruj zakłady.</td></tr> : 
              <>{props.myBets.map( (bet, i) => <Bet key={i} betIndex={i+1} betNumbers={bet} /> ) }</>}
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
        <MDBCol md="2"></MDBCol>
      </MDBRow>
    </>
  );
}

export default Bets;