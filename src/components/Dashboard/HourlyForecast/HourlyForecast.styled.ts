import styled from 'styled-components';
import { cardBackground } from '../../../utility/Themes/mixins.styled';

export const StyledHourlyForecast = styled.div`
  max-width: 50rem;
  padding: 0.5rem;

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
