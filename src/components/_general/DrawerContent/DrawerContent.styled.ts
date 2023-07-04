import styled from 'styled-components';

export const StyledDrawerContent = styled.div`
  width: 90vw;
  height: 100vh;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  }
  .separator {
    width: 60%;
    height: 3px;
    background-color: white;
  }
  .localizations__item__section-name {
    display: flex;
    gap: 1rem;
  }
  .saved-localizations {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
