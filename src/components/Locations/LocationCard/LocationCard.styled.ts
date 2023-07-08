import styled from 'styled-components';
import { lightTextColors } from '../../../utility/Themes/variables';

export const StyledLocationCard = styled.div`
  z-index: 0;
  max-width: 40rem;
  max-height: 6.4rem;
  margin: 0 auto;
  padding: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  backdrop-filter: brightness(150%);
  border-radius: 15px;
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
  .location__edit {
    &__icon {
      color: ${lightTextColors.text1};
    }
    &:hover {
      background-color: ${lightTextColors.text5};
    }
  }
`;
