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
      width: 100%;
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
    margin-bottom: 1.5rem;
    display: flex;
    gap: 0.5rem;

    color: ${lightTextColors.text2};
    &--favorite {
      color: ${lightTextColors.text1};
    }
    &__icon {
      color: ${lightTextColors.text2};
    }
    &__icon--favorite {
      color: ${colors.primary};
    }
    &__info {
      align-self: center;
      justify-self: right;
    }
  }

  .saved-localizations {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    &--empty {
      display: flex;
      justify-content: center;
      color: ${lightTextColors.text2};
    }
  }

  .favorites__item,
  .saved-localizations__item {
    width: 100%;
    padding-left: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__name {
      display: flex;
      align-items: center;
    }
    &__info {
      display: flex;
      align-items: center;

      &__icon {
        width: 2.5rem;
      }
    }
  }

  .favorites__item {
    color: ${lightTextColors.text1};
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
  @media (min-width: 600px) {
  
  }
`;
