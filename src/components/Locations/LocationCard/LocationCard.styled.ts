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
    margin-block: 0.35rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .location__weather {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &__img {
      width: 40px;
      aspect-ratio: 1/1;
      text-align: center;
    }
  }
`;
