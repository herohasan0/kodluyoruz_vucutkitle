import './Calculation.css';
import React from 'react';
import { useState } from 'react';
import Box from './Box';
import styled from 'styled-components';

const calculatedValue = JSON.parse(localStorage.getItem('value'))
  ? JSON.parse(localStorage.getItem('value'))
  : '';

function Calculation(params) {
  const [kilo, setKilo] = useState(0);
  const [boy, setBoy] = useState(0);
  const [BIM, setBIM] = useState(0);

  function calculate() {
    const kg = Number(kilo);
    const cm = Number(boy) / 100;

    //Kilogram / boyun metre cinsinden karesi islemiyle BMI hesapliyoruz
    let calculatedBIM = kg / Math.pow(cm, 2);

    //Virgulden sonra bir basamak almak icin stringe cevirip sonra slice
    //fonksiyonuyla ilk dort basamagı seciyoruz
    calculatedBIM = calculatedBIM.toString().slice(0, 4);

    //Hesaplanan degeri hesaplanandegerler array'imize atıyoruz.
    calculatedValue.push(calculatedBIM);

    //Bu degeri localstorage'ye kaydediyoruz
    localStorage.setItem('value', JSON.stringify(calculatedValue));

    //State degerimizi guncelliyoruz
    setBIM(Number(calculatedBIM));
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

  const Button = styled.button`
    background-color: #fff;
    border: 3px solid #000;
    color: black;
    padding: 8px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 15px;
  `;

  return (
    <Box>
      <div className="form">
        <section className="first">
          <div>
            <label>
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
            <label style={{ marginTop: '15px' }}>
              Boyunuzu giriniz
              <input
                type="number"
                name="Boy"
                onChange={(event) => setBoy(event.target.value)}
                value={boy}
              />
            </label>
          </div>
          <Button onClick={calculate}>hesapla</Button>
        </section>
        <section className="second">
          <span>Sonucunuz!</span>
          <h1>{BIM}</h1>
          <span>{detay}</span>
        </section>
      </div>
    </Box>
  );
}

export default Calculation;
