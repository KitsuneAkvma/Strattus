import styled from 'styled-components';

export const StyledLocationCard = styled.div`
  z-index: 0;
  max-width: 40rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  backdrop-filter: brightness(150%);
  border-radius: 30px;
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
      width: 2.5rem;
      aspect-ratio: 1/1;
      text-align: center;
    }
  }
`;
