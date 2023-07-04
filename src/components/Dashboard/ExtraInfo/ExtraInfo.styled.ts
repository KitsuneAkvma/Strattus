import styled from 'styled-components';
import { cardBackground } from '../../../utility/Themes/mixins.styled';

export const StyledExtraInfo = styled.section`
  padding: 1rem 1.5rem;
  width: 90vw;
  margin: 0 auto;
  ${cardBackground};

  .extra-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .extra-info__item {
    display: flex;
    justify-content: space-between;
    &__name {
      display: flex;
      gap: 1rem;
    }
  }
`;
