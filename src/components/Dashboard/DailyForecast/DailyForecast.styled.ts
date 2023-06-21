import styled from 'styled-components';

export const StyledDailyForecast = styled.ul`
  max-width: 50rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  background: ${({ theme }: any) => theme.colors.background};
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

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
