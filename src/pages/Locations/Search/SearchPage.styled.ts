import styled from 'styled-components';
import { colors, lightTextColors } from '../../../utility/Themes/variables';

export const StyledSearchPage = styled.section`
  position: relative;
  width: 90vw;
  padding-top: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 2rem;
  .title {
    width: 100%;

    border-bottom: 1px solid ${colors.primaryLight};
    text-align: center;
  }

  .button--go-back {
    position: absolute;
    top: 1.2rem;
    left: 0;
  }

  .results {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 20px;
    backdrop-filter: brightness(140%);
    &__item {
      width: 100%;

      border-bottom: 1px dashed ${lightTextColors.text4};
      &__button {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      &:first-child {
        & > div {
          border-radius: 20px 20px 0 0;
        }
      }
      &:last-child {
        border-bottom: none;
        & > div {
          border-radius: 0 0 20px 20px;
        }
        &:only-child {
          border-bottom: none;
          & > div {
            border-radius: 20px;
          }
        }
        &__country-region {
          display: block;
          width: 80%;

          color: ${lightTextColors.text4};
          font-weight: 300;
        }
      }
      &__item:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
      &__item:first-child {
        padding-top: 0;
      }
      &__country-region {
        display: block;
        width: 80%;

        color: ${lightTextColors.text4};
        font-weight: 300;
      }
    }
  }
  .results__loading {
    margin: 2rem auto;
    color: ${colors.primary};
  }
  .results__empty {
    text-align: center;
    &__text {
      font-weight: 700;
    }
    &__info {
      color: ${lightTextColors.text3};
    }
  }
`;
