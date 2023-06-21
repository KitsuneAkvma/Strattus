import styled from 'styled-components'

export const StyledHourlyForecast = styled.div`
  padding: 0.5rem;

  background: ${({ theme }: any) => theme.colors.background};
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  
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
`
