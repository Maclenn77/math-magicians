import React from 'react';

const Home = () => (
  <section>
    <h2>
    About This Mayan Calculator
    </h2>
    <p>
      The ancient Maya developed one of the most elegant number systems in history. Using just three symbols — a dot (1), a bar (5), and a shell (0) — they could represent any number in base-20 (vigesimal).
    </p>

    <p>
      This calculator lets you perform arithmetic the way Mayan mathematicians did over a thousand years ago. Enter numbers, see them rendered in authentic dot-and-bar notation, and practice addition, subtraction, multiplication, and division in base-20.
    </p>
    <p>
      Why base-20? The Maya likely counted using both fingers and toes. Their system was positional (like ours) but with place values of 1, 20, 400, 8000... instead of 1, 10, 100, 1000.
    </p>
    <p>
      Built by
      <a href="https://juanpaulo.xyz"> Juan Paulo</a>
      .
      <br />
      View the source code on Github:
      <a href="https://github.com/maclenn77/math-magicians">Mayan Calculator</a>
    </p>
  </section>
);
export default Home;
