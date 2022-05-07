import styled, { css } from "styled-components";

export const Text = styled.p`
  font-size: 4rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.isLightTheme ? '#000' : '#fff'};
  background-color: ${({ theme }) => theme.isLightTheme ? '#fff' : '#000'};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
`