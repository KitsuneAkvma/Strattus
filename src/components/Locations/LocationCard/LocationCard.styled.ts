import styled from 'styled-components';

export const StyledLocationCard = styled.div`
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  backdrop-filter: brightness(150%);
  border-radius: 20px;
  .location__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .location__weather {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &__img {
      width: 34px;
      aspect-ratio: 1/1;
      text-align: center;
    }
  }
`;
