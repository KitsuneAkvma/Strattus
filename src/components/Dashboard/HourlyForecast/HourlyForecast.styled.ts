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
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 1rem;

      &__icon {
        width: 2rem;
      }
    }
  }
`;
