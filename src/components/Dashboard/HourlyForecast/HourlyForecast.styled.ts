import styled from 'styled-components';
import { cardBackground } from '../../../utility/Themes/mixins.styled';

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
`;
