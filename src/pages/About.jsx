import React from 'react';

const About = () => {
  return(
    <>
      <h3>O aplikacji</h3>
      <p>Wersja <i>[web_1.1.0]</i></p>
      <p>Aplikacja webowa do generowania zakładów Lotto według wybranego systemu oraz na podstawie podanych przez użytkownika liczb. Aplikacja powstaje z wykorzystaniem <em>React</em> oraz znajduje się w bardzo wczesnej fazie rozwoju. W najbliższym czasie planowane są następujące zmiany:</p>
      <ul>
        <li>opcja chybił trafił (losowe generowanie swoich liczb)</li>
        <li>strona wizualna aplikacji oraz jej responsywność</li>
        <li>zapis i wczytywanie zestawu liczb <em>(z wykorzystaniem LocalStorage)</em></li>
        <li>pobranie wyników ostatniego losowania i automatyczne wskazanie zwycięskich kuponów oraz wygranej kwoty</li>
      </ul>
      <p>W dalszej perspektywie aplikacja rozbudowywana będzie jeszcze bardziej. W planach jest:</p>
      <ul>
        <li>przebudowa struktury aplikacji pod kątem wprowadzania nowych systemów liczbowych</li>
        <li>implementacja innych gier Lotto oraz kolejnych systemów liczbowych</li>
        <li>utworzenie konta, śledzenie historii swoich zakładów, bilans zysków i strat</li>
        <li>statystyka na podstawie swoich gier oraz wyników ostatnich losowań</li>
      </ul>
      <p>W przyszłości planowane są także wersje aplikacji: mobilna <em>(z wykorzystaniem React Native)</em> oraz desktopowa (na PC) <em>(z wykorzystaniem Electron)</em>.</p>
      <p><b>Lista zmian:</b></p>
      <ul>
        <p><i>wersja 1.1.0</i></p>
        <li>dodano walidację formularza</li>
        <li>sortowanie liczb w kolejności rosnącej przed wyświetleniem</li>
      </ul>
    </>
  );
};

export default About;