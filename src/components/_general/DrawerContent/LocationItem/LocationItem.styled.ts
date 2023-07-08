import styled from 'styled-components';
import { lightTextColors } from '../../../../utility/Themes/variables';

export const StyledLocationDrawerItem = styled.li`
  .location__item {
    width: 100%;
    padding-left: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 200;
    }
  .location__item__name {
    display: flex;
    align-items: center;

    color: ${lightTextColors.text2};
  }
  .location__item__info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${lightTextColors.text2};
    &__icon {
      width: 2rem;
    }
  }
`;
