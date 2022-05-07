import { css } from "styled-components";

import LatoThin from '../../assets/fonts/Lato-Thin.ttf';
import LatoLight from '../../assets/fonts/Lato-Light.ttf';
import LatoRegular from '../../assets/fonts/Lato-Regular.ttf';
import LatoBold from '../../assets/fonts/Lato-Bold.ttf';
import LatoBlack from '../../assets/fonts/Lato-Black.ttf';

export const fontsFaces = css`
@font-face {
  font-family: 'Lato';
  src: url(${LatoThin}) format('truetype');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'Lato';
  src: url(${LatoLight}) format('truetype');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Lato';
  src: url(${LatoRegular}) format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Lato';
  src: url(${LatoBold}) format('truetype');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'Lato';
  src: url(${LatoBlack}) format('truetype');
  font-weight: 900;
  font-style: normal;
}
`