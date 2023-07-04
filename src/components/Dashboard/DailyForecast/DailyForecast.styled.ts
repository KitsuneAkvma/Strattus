import styled from 'styled-components';
import { cardBackground } from '../../../utility/Themes/mixins.styled';

export const StyledDailyForecast = styled.ul`
  width: 95vw;
  padding: 0.5rem 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 0.5em;

  ${cardBackground}

  .daily__forecast__item {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .daily__forecast__item__day {
    width: 30%;
  }

  .daily__forecast__item__rain {
    display: flex;
    &__icon {
      width: 1rem;
    }
  }
  .daily__forecast__item__icon {
    width: 2rem;
  }

  .daily__forecast__item__temp {
    display: flex;
  }
`;
