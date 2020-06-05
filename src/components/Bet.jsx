import React from 'react';

const Bet = props => {
  return (
    <tr>
      <th>Zakład {props.betIndex}</th>
      <td>{props.betNumbers[0]}</td>
      <td>{props.betNumbers[1]}</td>
      <td>{props.betNumbers[2]}</td>
      <td>{props.betNumbers[3]}</td>
      <td>{props.betNumbers[4]}</td>
    </tr>
    
  );
};

export default Bet;