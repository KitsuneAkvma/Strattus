import styled from 'styled-components';
import { colors, lightTextColors } from '../../../utility/Themes/variables';

export const StyledDrawerContent = styled.aside`
  width: 100%;
  height: 100vh;
  margin-top: 5rem;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;

  .settings {
    position: absolute;
    top: 1rem;
    right: 1rem;

    width: 2.5rem;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    border- &__icon > svg {
      width: 100%;
      height: 100%;
    }
  }

  .localizations {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    &__item {
      align-self: flex-start;
    }
  }
  .separator {
    width: 100%;
    height: 1px;
    margin-block: 1rem;
    border: 1px dashed ${colors.primaryLight};
  }
  .localizations__item__section-name {
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    align-self: flex-start;

    color: ${lightTextColors.text2};
    &__icon {
      color: ${lightTextColors.text1};
    }
  }

  .saved-localizations {
    padding-left: 2rem;
    display: flex;
    flex-direction: flex-start;
    color: ${lightTextColors.text3};
  }

  .favorites__item,
  .saved-localizations__item {
    width: 100%;
    padding-left: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${lightTextColors.text3};
    &__name {
      display: flex;
      align-items: center;
    }
    &__info {
      display: flex;
      align-items: center;

      &__icon {
        width: 2rem;
      }
    }
  }
  .menage-link {
    margin: 1rem auto;

    &__button {
      padding: 0.5rem 4rem;
      border-radius: 20px;
      background: none;
      backdrop-filter: brightness(110%);
      box-shadow: none;
    }
  }
`;
