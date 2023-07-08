import styled from 'styled-components';
import { cardBackground } from '../../../utility/Themes/mixins.styled';

export const StyledInfoTiles = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  .infoTile {
    padding: 2rem;
    width: 13rem;

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

  @media (min-width: 600px) {
    .infoTile {
      width: 18.8rem;
      &__icon {
        width: 6rem;
        height: 6rem;
      }
      &__header,
      &__type__header {
        font-size: 1em;
      }
      &__value {
        font-size: 1em;
      }
    }
    .infoTile--sunPos {
      font-size: 1em;
      .infoTile__icon {
        width: 6rem;
        height: 6rem;
      }
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    .infoTile {
      width: 10rem;

      &__icon {
        width: 3rem;
        height: 3rem;
      }
    }
    .infoTile--sunPos {
      font-size: 0.8em;
      .infoTile__icon {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;
