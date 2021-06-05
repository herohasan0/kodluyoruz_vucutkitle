import './Calculation.css';
import React from 'react';
import { useState } from 'react';

function Calculation(params) {
  const [kilo, setKilo] = useState(0);
  const [boy, setBoy] = useState(0);
  const [BIM, setBIM] = useState(0);

  function calculate() {
    const kg = Number(kilo);
    const cm = Number(boy) / 100;

    const calculatedBIM = kg / Math.pow(cm, 2);

    setBIM(calculatedBIM);
  }
  let detay = '';

  if (BIM !== 0 && BIM < 18.5) {
    detay = 'Zayıf';
  } else if (BIM > 18.5 && BIM < 24.9) {
    detay = 'Normal kilolu';
  } else if (BIM > 25 && BIM < 29.9) {
    detay = 'Fazla kilolu';
  } else if (BIM > 30 && BIM < 39.9) {
    detay = 'Obez';
  } else if (BIM > 40) {
    detay = 'İleri derecede obez (morbid obez)';
  }
  return (
    <div className="calculate">
      <div className="form">
        <section className="calculation">
          <div>
            <label className="label">
              Kilonuzu giriniz
              <input
                type="number"
                name="Kilo"
                onChange={(event) => setKilo(event.target.value)}
                value={kilo}
              />
            </label>
          </div>

          <div>
            <label className="label">
              Boyunuzu giriniz
              <input
                type="number"
                name="Boy"
                onChange={(event) => setBoy(event.target.value)}
                value={boy}
              />
            </label>
          </div>
          <button onClick={calculate}>hesapla</button>
        </section>
        <section className="result">
          <span>Sonucunuz!</span>
          <h1>{BIM}</h1>
          <span>{detay}</span>
        </section>
      </div>
    </div>
  );
}

export default Calculation;
