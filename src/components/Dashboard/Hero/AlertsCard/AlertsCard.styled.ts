import styled from 'styled-components'
import { cardHoverBrighten } from '../../../../utility/Themes/mixins.styled'

export const StyledAlertsCard = styled.ul`
  max-width: 50rem;
  padding: 0.7rem 1rem;

  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.2px);
  ${cardHoverBrighten}

  .alerts__title {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-bottom: 0.1em;
  }
  .alert__event {
    font-weight: 700;
    text-transform: uppercase;
  }
`
