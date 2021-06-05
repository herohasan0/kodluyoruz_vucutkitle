import React, { Children } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 5px solid #000;
  padding: 20px;
  width: 50%;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
`;

function Box({ children }) {
  return <Div>{children}</Div>;
}

export default Box;
