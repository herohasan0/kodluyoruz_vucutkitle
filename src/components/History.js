import React from 'react';

function History() {
  const history = JSON.parse(localStorage.getItem('value'));
  console.log(history);
  return (
    <>
      <h3>Daha önce hesaplanan degerlerinz</h3>
      <ul>
        {history.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default History;
