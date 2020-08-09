import React from 'react';
import { MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import Bet from './Bet';
import { numbersAmount } from '../systems/multi/SystemMulti_5-17-68';

const validateNumbers = (numbers) => {
  let errorMessage = '';
  for (let i=0; i<numbers.length; i++) {
    if (parseInt(numbers[i], 10) !== Number(numbers[i])) {errorMessage = 'Podaj prawidłową liczbę (dopuszczalne są tylko cyfry).'};
    if (numbers[i] < 1 || numbers[i] > 80) {errorMessage = 'Podaj liczby większe od 1 oraz mniejsze od 80.'};
    if (new Set(numbers).size !== numbers.length) {errorMessage = 'Nie możesz wybrać dwóch takich samych liczb.'};
    if (numbers[i] === '') {errorMessage = 'Wypełnij wszystkie pola (co najmniej jedno pole pozostało puste).'};
  }
  return errorMessage;
};

const Bets = props => {
  return (
    <>
      {props.myNumbers === '' ? <p>Podaj <strong>{numbersAmount}</strong> <em><b>różnych</b></em> liczb z zakresu <strong>1-80</strong>.</p> : 
        validateNumbers(props.myNumbers) !== '' ? <p className='text-danger'><b>Podano niewłaściwe liczby!</b></p> : <MDBRow className="mb-2">
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
              validateNumbers(props.myNumbers) !== '' ? <tr className='text-danger'><td colSpan="6">{validateNumbers(props.myNumbers)}</td></tr> : <>{props.myBets.map( (bet, i) => <Bet key={i} betIndex={i+1} betNumbers={bet} /> ) }</>}
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
        <MDBCol md="2"></MDBCol>
      </MDBRow>
    </>
  );
}

export default Bets;


/**
 const validateNumbers = (numbers) => {
  let errorMessage = '';
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i] < 1 || numbers[i] > 80) {errorMessage = 'Podaj liczby większe od 1 oraz mniejsze od 80.'}
  }
  return errorMessage;
};
 */