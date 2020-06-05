import React from 'react';
import { betPrice } from '../systems/multi/SystemMulti_5-17-68';

const MultiDefinition = () => {
  return (
    <>
      <h2>Multi Lotek</h2>
      <p>Multi Lotek pozwala na skreślenie <strong>od 1 do 10 liczb</strong>.</p>
      <p> Losowanych jest <strong>20 liczb</strong>, a losowanie odbywa się dwa razy dziennie - o <strong>14:00</strong> oraz o <strong>21:40</strong>.</p>
      <p>Cena pojedynczego zakładu wynosi <strong>{betPrice.toFixed(2)}zł</strong>.</p>
    </>
  );
};

export default MultiDefinition;