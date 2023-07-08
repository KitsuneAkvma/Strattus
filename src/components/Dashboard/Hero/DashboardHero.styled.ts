import styled from 'styled-components';

export const StyledDashboardHero = styled.section`
  position: relative;
  z-index: 0;

  width: 100vw;
  height: 100vh;

  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-items: center;

  gap: 2rem;

  background: ${({ theme }) => theme.colors.background};

  .hero__current {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    &__image {
      width: 6rem;
      height: 6rem;
    }
  }
  .hero__location {
    padding: 1rem;
  }
  .hero__location__name {
    display: flex;
    gap: 0.3em;
  }
  .hero__button {
    position: absolute;
    top: 1rem;
    left: 1rem;

    width: 0.625rem;
    height: 0.625rem;

    &__icon {
      fill: white;
    }
  }
`;
