import styled from 'styled-components';
import { cardBackground } from '../../../utility/Themes/mixins.styled';
import { lightTextColors } from '../../../utility/Themes/variables';

export const StyledDailyForecast = styled.ul`
  width: 95vw;
  padding: 1.2rem 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 0.5em;

  ${cardBackground}

  .daily__forecast__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .daily__forecast__item__day {
    width: 30%;
  }

  .daily__forecast__item__rain {
    display: flex;
    gap: 0.2rem;
    color: ${lightTextColors.text3};
    &__icon {
      width: 1rem;
    }
  }
  .daily__forecast__item__icon {
    width: 2rem;
  }

  .daily__forecast__item__condition {
    display: flex;
    align-items: center;
    color: ${lightTextColors.text3};
  }
`;
