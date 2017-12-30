import React from 'react';
import styled from 'styled-components';

import {COLORS, FONT} from "../../constants";

const Card = (props) => (
  <Container>
    {props.children}
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${COLORS.CARD_BORDER};
  background-color: ${COLORS.CARD_BACKGROUND};
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  margin: 20px;
  font-family: ${FONT};
  font-size: 20px;
`;

export default Card;