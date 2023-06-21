export const cardHoverBrighten = `
  &::after {
    position: absolute;
    top: 0;
    left: 0;

    content: '';
    width: 100%;
    height: 100%;

    background-color: rgba(250, 250, 250, 0.1);
    border-radius: 20%;

    transform-origin: center;
    transform: scaleX(0);
    transition: all 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }
  &:active::after {
    transform: scale(3);
  }
  &:hover {
    transform: scale(1.01);
  }`;
