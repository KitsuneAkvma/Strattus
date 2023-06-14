import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  body {
    background: ${({ theme }) => {
      console.log(theme.colors.background);
      return theme.colors.background;
    }};
    color: ${({ theme }) => {
      console.log(theme.colors.color);
      return theme.colors.color;
    }};
  }

  .dashboard__current {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &__image {
      width: 10rem;
      height: 10rem;
    }
  }
`;
