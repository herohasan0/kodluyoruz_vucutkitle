import React from 'react';
import styled from 'styled-components';
import Box from './Box';

function History() {
  const history = JSON.parse(localStorage.getItem('value'));

  return (
    <Box>
      <section>
        <h3>Daha önce hesaplanan degerlerinz</h3>
        <ul style={{ listStyleType: 'none' }}>
          {history &&
            history.map((item, index) => (
              <li style={{ fontSize: '20px', fontWeight: 'bold' }} key={index}>
                {item}
              </li>
            ))}
        </ul>
      </section>
    </Box>
  );
}

export default History;
