import styled from 'styled-components';
import { cardBackground } from '../../../utility/Themes/mixins.styled';

export const StyledInfoTiles = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 45vw 45vw;
  gap: 0.8rem;

  .infoTile {
    padding: 2rem;
    width: 45vw;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${cardBackground}

    &__icon {
      width: 3rem;
      height: 3rem;
      margin-bottom: 0.5rem;
      &--uv {
        fill: #ffedba;
      }
      &--wind {
        fill: #d4ffda;
      }

      &--humidity {
        fill: #a1b6ff;
      }
    }
    &__value {
      filter: brightness(50%);
    }
  }
  .infoTile--sunPos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0;
    justify-items: center;
    .infoTile__icon {
      grid-row: 2;
      grid-column: 2;
      width: 3rem;
      height: 3rem;

      fill: #bda0a8;
    }
    .infoTile__sunSet {
      grid-column: 3;
    }
  }
`;
