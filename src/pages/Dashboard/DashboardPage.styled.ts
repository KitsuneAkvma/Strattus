import styled from 'styled-components';
import { colors } from '../../utility/Themes/variables';

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .secondary-info {
    position: relative;
    bottom: 10vh;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    border-radius: 2rem 2rem 0 0;
    background: ${({ theme }) => theme.colors.secondBackground};
    border: 3px solid #2c2827;
    border-inline: none;
    border-bottom: none;
  }
  .secondary-info__content {
    max-width: 800px;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .signature {
    margin-top: 1rem;
    margin-inline: auto;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 100vh;
    overflow: hidden;
    .secondary-info {
      border: none;
      position: static;
      height: 100vh;

      &__content {
        justify-content: center;
        height: 120vh;
      }
      &::before {
        content: '';
        position: absolute;
        z-index: -1;
        transform: rotate(9deg) translate(-19vw, 8vh);
        height: 106vh;
        width: 20vw;
        background-color: ${colors.bgDark};
        box-shadow: inset 20px 6px 24px -24px black;
      }
    }
  }
`;
