import styled from 'styled-components';

export const StyledDailyForecast = styled.ul`
  display: flex;
  flex-direction: column;

  .daily__forecast__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .daily__forecast__item__rain {
    &__icon {
      width: 1rem;
    }
  }
  .daily__forecast__item__icon {
    width: 2rem;
  }
`;
