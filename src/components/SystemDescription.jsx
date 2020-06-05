import React from 'react';
import { numbersPerBet, numbersAmount, betPrice, betsAmount } from '../systems/multi/SystemMulti_5-17-68';

const SystemDescription = () => {
  return (
    <>
      <h2>System [{numbersPerBet}-{numbersAmount}-{betsAmount}]</h2>
      <p>System liczbowy do gry Multi Lotto [S-N-Z], gdzie:</p>
      <ul>
        <li><strong>S</strong> - ilość skreśleń w zakładzie</li>
        <li><strong>N</strong> - ilość typowanych liczb</li>
        <li><strong>Z</strong> - ilość zakładów</li>
      </ul>
      <p><i>Koszt postawienia wszystkich zakładów w systemie to {(betPrice*betsAmount).toFixed(2)}zł.</i></p>
    </>
  );
};

export default SystemDescription;