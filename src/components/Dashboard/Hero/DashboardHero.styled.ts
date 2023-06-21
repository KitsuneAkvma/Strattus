import styled from 'styled-components';

export const StyledDashboardHero = styled.section`
  width: 100vw;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-items: center;

  gap: 2rem;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0.5rem 2rem 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 0.625rem;
  border: 1px solid rgba(255, 255, 255, 0.18);

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
