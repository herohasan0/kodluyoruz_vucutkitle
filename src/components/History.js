import React from 'react';
import Box from './Box';

function History() {
  const history = JSON.parse(localStorage.getItem('value'));
  console.log(history);
  return (
    <Box>
      <h3>Daha önce hesaplanan degerlerinz</h3>
      <ul>{history && history.map((item) => <li>{item}</li>)}</ul>
    </Box>
  );
}

export default History;
