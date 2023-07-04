import styled from 'styled-components';

export const StyledSettingsPage = styled.section`
  position: relative;
  width: 80vw;
  padding-top: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .settings-list {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }
  }
  .title {
    width: 100%;

    border-bottom: 1px solid white;
    text-align: center;
  }
  .go-back {
    position: absolute;
    top: 2.1rem;
    left: 0;
  }
`;
