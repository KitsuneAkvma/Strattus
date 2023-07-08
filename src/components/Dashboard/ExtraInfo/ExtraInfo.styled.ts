import styled from 'styled-components';
import { cardBackground } from '../../../utility/Themes/mixins.styled';
import { lightTextColors } from '../../../utility/Themes/variables';

export const StyledExtraInfo = styled.section`
  padding: 1rem 1.5rem;
  width: 90%;
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
      align-items: center;
      gap: 1rem;
    }
    &__value {
      color: ${lightTextColors.text3};
    }
  }

  @media (min-width: 600px) {
    .extra-info {
      gap: 1rem;
    }
    .extra-info__item {
      &__name {
        &__icon {
          width: 2rem;
          height: 2rem;
        }
        &__text {
          font-size: 1em;
        }
      }
    }
  }
`;
