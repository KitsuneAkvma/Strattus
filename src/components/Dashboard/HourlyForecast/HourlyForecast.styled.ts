import styled from 'styled-components';
import { cardBackground } from '../../../utility/Themes/mixins.styled';
import { lightTextColors } from '../../../utility/Themes/variables';

export const StyledHourlyForecast = styled.div`
  width: 85vw;
  padding: 0.5rem 1.5rem;
  margin: 0 auto;

  ${cardBackground}

  .hourly__header {
    padding-block: 1rem;
  }
  .hourly__forecast {
    display: flex;
    gap: 1rem;
    padding-block: 1rem;

    border-top: 1px solid white;
    overflow-x: auto;

    &__item {
      padding: 0.2rem;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      gap: 1rem;

      text-align: center;
      &__hour {
        width: 100%;
        margin-bottom: -0.2rem;
      }
      &__icon {
        width: 2rem;
      }
      &__temp {
        margin-top: -0.8rem;
        font-weight: 700;
      }
    }
  }

  @media (min-width: 600px) {
    .hourly__header {
      &__text {
        font-size: 1.6em;
      }
      &__text--temp {
        font-size: 0.8em;
        font-weight: 500;
        color: ${lightTextColors.text3};
      }
    }
    .hourly__forecast {
      &__item {
        width: 100%;
        padding: 0.4rem;
        font-size: 1.2em;
        &__hour {
        }
        &__icon {
          width: 3rem;
        }
        &__temp {
        }
      }
    }
  }
  @media (min-width: 1024px) {
    width: 70%;
    margin: 0;
  }
`;
